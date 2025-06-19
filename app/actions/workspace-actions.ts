// app/actions/workspace-actions.ts
"use server"

import { createSupabaseServerClient } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createWorkspaceAction(formData: FormData) {
    const supabase = await createSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Vous devez être connecté.' }

    const name = String(formData.get('name'))
    if (!name) return { error: 'Le nom est requis.' }

    const { data, error } = await supabase
        .from('workspaces')
        .insert({
            name,
            user_id: user.id,
            created_at: new Date().toISOString(),
        })
        .select('id')
        .single()

    if (error || !data) {
        return { error: error?.message || 'Erreur lors de la création.' }
    }

    // Refresh the dashboard before redirect
    revalidatePath('/dashboard')

    return { workspaceId: data.id }
}

export async function deleteWorkspaceAction(workspaceId: string) {
    if (!workspaceId) {
        return { error: "L'ID du workspace est manquant." };
    }

    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { error: "Vous devez être connecté." };
    }

    // Sécurité : Vérifier que l'utilisateur est bien le propriétaire du workspace qu'il tente de supprimer
    const { data: workspace, error: ownerError } = await supabase
        .from('workspaces')
        .select('id')
        .eq('id', workspaceId)
        .eq('user_id', user.id)
        .single();

    if (ownerError || !workspace) {
        return { error: "Workspace non trouvé ou vous n'avez pas la permission de le supprimer." };
    }

    // Si la vérification passe, on supprime.
    // Grâce à l'étape 1, les démos associées seront aussi supprimées.
    const { error: deleteError } = await supabase
        .from('workspaces')
        .delete()
        .eq('id', workspaceId);

    if (deleteError) {
        console.error('Delete Workspace Error:', deleteError);
        return { error: "Impossible de supprimer le workspace." };
    }

    // Révalide le layout pour que le header mette à jour la liste des workspaces
    revalidatePath('/dashboard', 'layout');

    // Redirige vers le dashboard "racine"
    redirect('/dashboard');
}
