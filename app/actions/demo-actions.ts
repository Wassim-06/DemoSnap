// app/actions/demo-actions.ts
"use server"

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createDemoAction(formData: FormData) {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { error: "Vous devez être connecté." };
    }

    const file = formData.get('file') as File;
    const name = formData.get('name') as string;
    const workspaceId = formData.get('workspaceId') as string;

    if (!file || !name || !workspaceId) {
        return { error: "Données manquantes (fichier, nom ou workspace)." };
    }

    // 1. Upload
    const filePath = `${user.id}/${Date.now()}-${file.name}`;
    const { error: storageError } = await supabase.storage
        .from('demo-files')
        .upload(filePath, file);
    if (storageError) {
        console.error('Storage Error:', storageError);
        return { error: "Impossible de stocker le fichier de la démo." };
    }

    // 2. Insert with workspace
    const { data: demoData, error: dbError } = await supabase
        .from('demos')
        .insert({
            name,
            user_id: user.id,
            workspace_id: formData.get('workspaceId'), // si ce n’est pas déjà là
            data_url: filePath
        })
        .select('id')
        .single();
    if (dbError) {
        console.error('Database Error:', dbError);
        return { error: "Impossible d'enregistrer la démo dans la base." };
    }

    revalidatePath('/dashboard');
    redirect(`/demo/${demoData.id}/edit`);
}

export async function updateDemoAction(demoId: string, newName: string) {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase
        .from("demos")
        .update({ name: newName, updated_at: new Date().toISOString() })
        .eq("id", demoId);

    if (error) {
        console.error("Update Error:", error);
        return { error: "Impossible de mettre à jour le titre." };
    }

    // Rechargement côté serveur de la page /dashboard
    revalidatePath("/dashboard");

    return { success: true };
}

export async function deleteDemoAction(demoId: string) {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase
        .from("demos")
        .delete()
        .eq("id", demoId);

    if (error) {
        console.error("Delete Error:", error);
        return { error: "Impossible de supprimer la démo." };
    }

    // Révalide le dashboard pour retirer la démo de la liste
    revalidatePath("/dashboard");

    return { success: true };
}
