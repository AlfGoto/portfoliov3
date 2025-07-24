'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Button disabled>Chargement...</Button>
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">
          Bonjour, {session.user?.name}
        </span>
        <Button
          variant="outlined"
          onClick={() => signOut()}
          size="small"
        >
          Se déconnecter
        </Button>
      </div>
    )
  }

  return (
    <Button
      variant="contained"
      onClick={() => signIn('google')}
      startIcon={<AccountCircle />}
      size="small"
    >
      Se connecter avec Google
    </Button>
  )
}