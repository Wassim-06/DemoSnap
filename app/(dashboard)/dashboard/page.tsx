"use client"; // On a besoin de state pour gérer l'ouverture du modal

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemosTable from "@/components/dashboard/demos-table";
import EmptyState from "@/components/dashboard/empty-state";
import NewDemoModal from "@/components/dashboard/new-demo-modal";

// MOCK DATA: Remplacez ceci par votre appel à Supabase
const userDemos = [
    { id: 'demo-1', name: "Onboarding v2", views: 1256, updatedAt: "2025-06-17T14:20:00Z" },
    { id: 'demo-2', name: "Feature Showcase: AI Assistant", views: 842, updatedAt: "2025-06-15T09:30:00Z" },
    { id: 'demo-3', name: "Sales Pitch - Enterprise", views: 301, updatedAt: "2025-05-28T18:00:00Z" },
];

// Pour tester l'état vide, utilisez : const userDemos = [];

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const hasDemos = userDemos && userDemos.length > 0;

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
                {/* Le bouton n'est affiché que si le modal n'est pas déjà géré par l'EmptyState */}
                {hasDemos && (
                    <Button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 hover:bg-emerald-600">
                        <Plus className="mr-2 h-4 w-4" /> New Demo
                    </Button>
                )}
            </div>

            {hasDemos ? (
                <DemosTable demos={userDemos} />
            ) : (
                <EmptyState onNewDemoClick={() => setIsModalOpen(true)} />
            )}

            <NewDemoModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}