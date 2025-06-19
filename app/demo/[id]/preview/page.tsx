// app/demo/[id]/preview/page.tsx
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { notFound } from "next/navigation";

// La signature standard pour les pages avec paramètres dynamiques
interface DemoPreviewPageProps {
    params: { id: string };
}

export default async function DemoPreviewPage({ params }: DemoPreviewPageProps) {
    const { id } = params; // Pas besoin d'await ici
    const supabase = await createSupabaseServerClient();

    // 2) Récupérer la démo
    const { data: demo, error: demoErr } = await supabase
        .from("demos")
        .select("name, data_url")
        .eq("id", id)
        .single();

    if (demoErr || !demo || !demo.data_url) {
        console.error("Error fetching demo or data_url is missing:", demoErr);
        return notFound();
    }

    // 3) Générer une URL signée (valide 60 secondes)
    const { data: signedUrlData, error: urlError } = await supabase.storage
        .from("demo-files")
        .createSignedUrl(demo.data_url, 60); // L'URL sera valide 60 secondes

    if (urlError || !signedUrlData) {
        console.error("Error creating signed URL:", urlError);
        return notFound();
    }
    const { signedUrl } = signedUrlData;

    // 4) Fetch du JSON avec l'URL signée
    const res = await fetch(signedUrl);
    if (!res.ok) {
        console.error("Failed to fetch demo JSON:", res.status, res.statusText);
        return notFound();
    }
    const recording = await res.json();

    // 5) Afficher
    return (
        <div className="prose mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">{demo.name}</h1>
            <pre className="bg-slate-100 p-4 rounded overflow-x-auto">
                {JSON.stringify(recording, null, 2)}
            </pre>
        </div>
    );
}