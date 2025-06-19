"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    MoreHorizontal,
    PlayCircle,
    Clipboard,
    Settings,
    Trash2,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import EditDemoModal from "./EditDemoModal";
import { deleteDemoAction } from "@/app/actions/demo-actions";
import { toast } from "sonner"; // ou votre système de toast favori

type Demo = {
    id: string;
    name: string;
    views: number;
    updatedAt: string;
};

function formatRelativeTime(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default function DemosTable({ demos }: { demos: Demo[] }) {
    const router = useRouter();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);
    const [isPending, startTransition] = useTransition();

    const copyEmbedCode = (demoId: string) => {
        const embedCode = `<iframe src="\${window.location.origin}/embed/${demoId}" ...></iframe>`;
        navigator.clipboard.writeText(embedCode).then(() => {
            toast.success("Code d'intégration copié !");
        });
    };

    const handleDelete = (demoId: string) => {
        if (
            !confirm(
                "Voulez-vous vraiment supprimer cette démo ? Cette action est irréversible."
            )
        )
            return;

        startTransition(async () => {
            const result = await deleteDemoAction(demoId);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Démo supprimée !");
                router.refresh(); // réactualise la page pour recharger la liste
            }
        });
    };

    return (
        <>
            {selectedDemo && (
                <EditDemoModal
                    demoId={selectedDemo.id}
                    initialName={selectedDemo.name}
                    isOpen={isEditOpen}
                    onOpenChange={setIsEditOpen}
                />
            )}

            <div className="border rounded-lg bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[40%]">Nom</TableHead>
                            <TableHead>Vues</TableHead>
                            <TableHead>Dernière modification</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {demos.map((demo) => (
                            <TableRow key={demo.id}>
                                <TableCell className="font-medium text-slate-800">
                                    {demo.name}
                                </TableCell>
                                <TableCell>{demo.views.toLocaleString("fr-FR")}</TableCell>
                                <TableCell>{formatRelativeTime(demo.updatedAt)}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href={`/demo/${demo.id}/preview`}
                                                    className="flex items-center"
                                                >
                                                    <PlayCircle className="mr-2 h-4 w-4" />
                                                    View
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                onSelect={() => {
                                                    setSelectedDemo(demo);
                                                    setIsEditOpen(true);
                                                }}
                                            >
                                                <Settings className="mr-2 h-4 w-4" />
                                                Edit
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                onSelect={() => copyEmbedCode(demo.id)}
                                            >
                                                <Clipboard className="mr-2 h-4 w-4" />
                                                Copy embed code
                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                className="flex items-center text-destructive"
                                                onSelect={() => handleDelete(demo.id)}
                                            >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
