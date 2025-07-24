import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  
  // Routes protégées - ajouter ici les chemins qui nécessitent une authentification
  const protectedRoutes = ['/dashboard', '/profile', '/admin']
  
  const isProtectedRoute = protectedRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )
  
  // Si l'utilisateur n'est pas authentifié et essaie d'accéder à une route protégée
  if (isProtectedRoute && !req.auth) {
    const signInUrl = new URL('/auth/signin', nextUrl.origin)
    signInUrl.searchParams.set('callbackUrl', nextUrl.href)
    return NextResponse.redirect(signInUrl)
  }
  
  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}