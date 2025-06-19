// app/auth/callback/route.ts
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')

    if (code) {
        // Attendre cookies
        const cookieStore = await cookies()
        const supabase = await createSupabaseServerClient()

        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(`${origin}/dashboard`)
        }
    }

    return NextResponse.redirect(`${origin}/login?error=Could not log in`)
}
