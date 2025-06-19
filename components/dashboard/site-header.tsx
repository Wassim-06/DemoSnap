// components/dashboard/site-header.tsx
"use client"

import Link from 'next/link'
import { useState, useTransition } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, LifeBuoy, LogOut, Plane, Settings, User, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { logout } from '@/app/auth/actions'
import { deleteWorkspaceAction } from '@/app/actions/workspace-actions'
import { toast } from 'sonner'

interface Workspace {
    id: string
    name: string
}

interface SiteHeaderProps {
    user: SupabaseUser
    workspaces: Workspace[]
}

export default function SiteHeader({ user, workspaces }: SiteHeaderProps) {
    const name = user.user_metadata?.full_name || user.email!
    const avatarUrl = user.user_metadata?.avatar_url
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Logique pour l'état de chargement
    const [isPending, startTransition] = useTransition()

    const currentWsId = searchParams.get('ws')
    const [currentWs, setCurrentWs] = useState<Workspace>(
        workspaces.find(ws => ws.id === currentWsId) ||
        workspaces[0] ||
        { id: '', name: 'Aucun workspace' }
    )

    const handleDeleteWorkspace = (workspaceId: string, workspaceName: string) => {
        if (!confirm(`Voulez-vous vraiment supprimer le workspace "${workspaceName}" ?\nCette action est irréversible et supprimera toutes les démos associées.`)) {
            return;
        }

        startTransition(async () => {
            const result = await deleteWorkspaceAction(workspaceId);
            if (result?.error) {
                toast.error(result.error);
            } else {
                toast.success(`Workspace "${workspaceName}" supprimé.`);
                // La redirection est gérée par la server action
            }
        });
    }


    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Plane className="h-6 w-6 text-emerald-500" />
                        <span className="font-bold text-lg text-slate-800">DemoSnap</span>
                    </Link>
                    {/* Workspace selector */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-1">
                                {currentWs.name} <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                            {workspaces.map(ws => (
                                <DropdownMenuItem
                                    key={ws.id}
                                    onSelect={() => {
                                        setCurrentWs(ws)
                                        router.push(`/dashboard?ws=${ws.id}`)
                                    }}
                                    className="flex justify-between items-center pr-2"
                                >
                                    <span>{ws.name}</span>
                                    {/* BOUTON DE SUPPRESSION */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Empêche le menu de se fermer
                                            handleDeleteWorkspace(ws.id, ws.name);
                                        }}
                                        className="p-1 rounded-md hover:bg-destructive/10 text-slate-400 hover:text-destructive disabled:opacity-50"
                                        disabled={isPending}
                                        aria-label={`Supprimer ${ws.name}`}
                                    >
                                        <Trash2 className="h-3 w-3" />
                                    </button>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/workspaces/new">+ Créer un workspace</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" asChild>
                        <Link href="/pricing">Plans</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/docs">Docs</Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="h-9 w-9 cursor-pointer">
                                {avatarUrl ? (
                                    <AvatarImage src={avatarUrl} alt={name} />
                                ) : (
                                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                                )}
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>{name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" /> Profil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" /> Paramètres
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LifeBuoy className="mr-2 h-4 w-4" /> Support
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <form action={logout}>
                                    <button type="submit" className="flex items-center w-full">
                                        <LogOut className="mr-2 h-4 w-4" /> Déconnexion
                                    </button>
                                </form>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
