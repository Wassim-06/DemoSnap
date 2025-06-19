// app/(dashboard)/dashboard/workspaces/new/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createWorkspaceAction } from "@/app/actions/workspace-actions";

export default function NewWorkspacePage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setIsPending(true);
        setError(null);

        const form = new FormData();
        form.append("name", name);

        const result = await createWorkspaceAction(form);
        if (result.error) {
            setError(result.error);
        } else {
            // redirige vers /dashboard en passant le nouveau workspace
            router.push(`/dashboard?ws=${result.workspaceId}`);
        }

        setIsPending(false);
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Créer un workspace</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name">Nom du workspace</Label>
                    <Input
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <Button type="submit" disabled={isPending || !name} className="w-full">
                    {isPending ? "Création..." : "Créer"}
                </Button>
            </form>
        </div>
    );
}
