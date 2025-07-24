import { createClient } from '@supabase/supabase-js'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Client pour le côté client (navigateur)
export const createClientComponentClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Client pour les Server Components
export const createServerComponentClient = () => {
  const cookieStore = cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}

// Client pour les Route Handlers
export const createRouteHandlerClient = (
  request: Request,
  response: Response
) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.headers.get('cookie')?.split('; ')
            .find(row => row.startsWith(`${name}=`))
            ?.split('=')[1]
        },
        set(name: string, value: string, options: CookieOptions) {
          response.headers.append(
            'Set-Cookie',
            `${name}=${value}; Path=/; ${options.secure ? 'Secure;' : ''} ${options.httpOnly ? 'HttpOnly;' : ''} ${options.sameSite ? `SameSite=${options.sameSite};` : ''} ${options.maxAge ? `Max-Age=${options.maxAge};` : ''}`
          )
        },
        remove(name: string, options: CookieOptions) {
          response.headers.append(
            'Set-Cookie',
            `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; ${options.secure ? 'Secure;' : ''} ${options.httpOnly ? 'HttpOnly;' : ''} ${options.sameSite ? `SameSite=${options.sameSite};` : ''}`
          )
        },
      },
    }
  )
}