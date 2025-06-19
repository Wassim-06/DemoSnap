// app/auth/actions.ts
"use server"

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export async function signUp(formData: FormData) {
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  // Attendre le client Supabase
  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    console.error('Sign up error:', error)
    redirect(`/signup?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/login')
  redirect('/login?message=Check email for confirmation link')
}

export async function login(formData: FormData) {
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    console.error('Login error:', error)
    redirect(`/login?error=${encodeURIComponent(error.message)}`)
  }

  redirect('/dashboard')
}

export async function loginWithProvider(provider: 'github' | 'google') {
  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    console.error('OAuth Error:', error)
    redirect(`/login?error=${encodeURIComponent(error.message)}`)
  }

  if (data.url) redirect(data.url)
}

export async function logout() {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect('/login')
}
