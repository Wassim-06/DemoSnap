// components/dashboard/dashboard-client.tsx
"use client"; // Ce composant est interactif, donc il doit être "client"

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemosTable from "@/components/dashboard/demos-table";
import EmptyState from "@/components/dashboard/empty-state";
import NewDemoModal from "@/components/dashboard/new-demo-modal";
import { type Demo } from '@/app/(dashboard)/dashboard/page'; // Importez le type

interface DashboardClientProps {
    initialDemos: Demo[];
}

export default function DashboardClient({ initialDemos }: DashboardClientProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // On utilise les données passées en props, pas les données MOCK
    const hasDemos = initialDemos && initialDemos.length > 0;

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Your Demos
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Manage, edit, and share your interactive demos.
                    </p>
                </div>
                {hasDemos && (
                    <Button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 hover:bg-emerald-600">
                        <Plus className="mr-2 h-4 w-4" /> New Demo
                    </Button>
                )}
            </div>

            {hasDemos ? (
                // Assurez-vous que DemosTable accepte une prop "demos" de type Demo[]
                <DemosTable demos={initialDemos} />
            ) : (
                <EmptyState onNewDemoClick={() => setIsModalOpen(true)} />
            )}

            <NewDemoModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}