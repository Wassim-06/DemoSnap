// components/dashboard/demos-table.tsx

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlayCircle, Clipboard, Settings } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Typage pour une démo
type Demo = {
    id: string;
    name: string;
    views: number;
    updatedAt: string;
};

// Fonction pour formater la date (vous pouvez l'améliorer)
function formatRelativeTime(dateString: string) {
    const date = new Date(dateString);
    // Ici, une librairie comme date-fns serait idéale, mais pour rester simple :
    return date.toLocaleDateString("fr-FR", { day: 'numeric', month: 'long', year: 'numeric' });
}


export default function DemosTable({ demos }: { demos: Demo[] }) {
    return (
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
                            <TableCell className="font-medium text-slate-800">{demo.name}</TableCell>
                            <TableCell>{demo.views.toLocaleString('fr-FR')}</TableCell>
                            <TableCell>{formatRelativeTime(demo.updatedAt)}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <PlayCircle className="mr-2 h-4 w-4" />
                                            View
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Clipboard className="mr-2 h-4 w-4" />
                                            Copy embed code
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}