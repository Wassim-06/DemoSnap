// app/(dashboard)/layout.tsx
import { ReactNode } from 'react'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import SiteHeader from '@/components/dashboard/site-header'
import { redirect } from 'next/navigation'

type Workspace = { id: string; name: string }

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode
}) {
    const supabase = await createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) redirect('/login')

    // Charger les workspaces
    const { data, error: wsError } = await supabase
        .from('workspaces')
        .select('id, name')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
    if (wsError) console.error('Error fetching workspaces:', wsError)

    const workspaces: Workspace[] = data || []

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
            {/* Passe user + workspaces à l'entête */}
            <SiteHeader user={user} workspaces={workspaces || []} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    )
}