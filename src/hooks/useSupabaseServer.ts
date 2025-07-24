import { createServerComponentClient } from '@/lib/supabase'

export async function getUser() {
  const supabase = createServerComponentClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function getSession() {
  const supabase = createServerComponentClient()
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

// Hook pour vérifier si l'utilisateur est connecté côté serveur
export async function requireAuth() {
  const user = await getUser()
  if (!user) {
    throw new Error('Authentification requise')
  }
  return user
}