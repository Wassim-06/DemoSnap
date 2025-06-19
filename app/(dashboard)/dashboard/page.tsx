// app/(dashboard)/dashboard/page.tsx
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import DashboardClient from '@/components/dashboard/dashboard-client'

// Type de données attendues par le client
export type Demo = {
    id: string
    name: string
    views: number
    updatedAt: string
}

export default async function DashboardPage({
    searchParams,
}: {
    searchParams: Promise<{ ws?: string }>
}) {
    // Attendre la récupération des query params
    const { ws } = await searchParams

    const supabase = await createSupabaseServerClient()

    // Récupérer l'utilisateur
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return redirect('/login')

    // Construire la requête de récupération des démos
    let query = supabase
        .from('demos')
        .select('id, name, views, updated_at')
        .eq('user_id', user.id)

    // Filtrer par workspace si ws est présent en query param
    if (ws) {
        query = query.eq('workspace_id', ws)
    }

    // Exécuter la requête
    const { data: demos, error } = await query.order('updated_at', { ascending: false })

    if (error) console.error('Error fetching demos:', error)

    // Transformer updated_at → updatedAt
    const formattedDemos: Demo[] = (demos || []).map(d => ({
        id: d.id,
        name: d.name,
        views: d.views,
        updatedAt: d.updated_at,
    }))

    return <DashboardClient initialDemos={formattedDemos} />
}
