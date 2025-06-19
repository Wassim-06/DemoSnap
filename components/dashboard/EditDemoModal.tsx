"use client";

import { useState, useTransition } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateDemoAction } from "@/app/actions/demo-actions";
import { toast } from "sonner"; // ou le système de toast que tu préfères

interface EditDemoModalProps {
    demoId: string;
    initialName: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EditDemoModal({
    demoId,
    initialName,
    isOpen,
    onOpenChange,
}: EditDemoModalProps) {
    const [name, setName] = useState(initialName);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        startTransition(async () => {
            const result = await updateDemoAction(demoId, name);
            if (result.error) {
                setError(result.error);
            } else {
                toast.success("Titre mis à jour !");    // feedback à l'utilisateur
                onOpenChange(false);                    // ferme la modal
            }
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Modifier le titre</DialogTitle>
                        <DialogDescription>
                            Changez le nom de votre démo ci-dessous.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-2">
                        <Label htmlFor="demo-name">Titre</Label>
                        <Input
                            id="demo-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isPending}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                    </div>

                    <DialogFooter>
                        <Button
                            variant="ghost"
                            type="button"
                            onClick={() => onOpenChange(false)}
                            disabled={isPending}
                        >
                            Annuler
                        </Button>
                        <Button type="submit" disabled={isPending || !name}>
                            {isPending ? "En cours..." : "Enregistrer"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
