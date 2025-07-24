'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import { CircularProgress, Box } from "@mui/material"

interface ProtectedRouteProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return // Still loading

    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  if (status === "loading") {
    return (
      fallback || (
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      )
    )
  }

  if (!session) {
    return null
  }

  return <>{children}</>
}