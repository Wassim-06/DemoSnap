// components/dashboard/empty-state.tsx

import { Button } from "@/components/ui/button";
import { Plus, Film } from "lucide-react";

type EmptyStateProps = {
    onNewDemoClick: () => void;
};

export default function EmptyState({ onNewDemoClick }: EmptyStateProps) {
    return (
        <div className="text-center border-2 border-dashed border-slate-200 rounded-lg py-24 px-6 bg-white">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-slate-100 mb-4">
                <Film className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
                Aucune démo pour l'instant
            </h3>
            <p className="mt-2 text-slate-500">
                Commencez par créer votre première démo interactive.
            </p>
            <div className="mt-6">
                <Button onClick={onNewDemoClick} className="bg-emerald-500 hover:bg-emerald-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Créer ma première démo
                </Button>
            </div>
        </div>
    );
}