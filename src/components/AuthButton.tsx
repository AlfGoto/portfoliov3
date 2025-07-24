'use client'

import { useState } from "react"
import { Button, Avatar, Box, Typography, CircularProgress } from "@mui/material"
import { AccountCircle, Google } from "@mui/icons-material"
import { useAuth } from "@/contexts/AuthContext"

export default function AuthButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()
  const [signingIn, setSigningIn] = useState(false)

  const handleSignIn = async () => {
    try {
      setSigningIn(true)
      await signInWithGoogle()
    } catch (error) {
      console.error('Erreur lors de la connexion:', error)
    } finally {
      setSigningIn(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
    }
  }

  if (loading) {
    return (
      <Button disabled startIcon={<CircularProgress size={16} />}>
        Chargement...
      </Button>
    )
  }

  if (user) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar 
            src={user.user_metadata?.avatar_url} 
            alt={user.user_metadata?.full_name || user.email}
            sx={{ width: 32, height: 32 }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {user.user_metadata?.full_name || user.email}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          onClick={handleSignOut}
          size="small"
        >
          Déconnexion
        </Button>
      </Box>
    )
  }

  return (
    <Button
      variant="contained"
      onClick={handleSignIn}
      disabled={signingIn}
      startIcon={signingIn ? <CircularProgress size={16} /> : <Google />}
      size="small"
      sx={{
        backgroundColor: '#4285f4',
        '&:hover': {
          backgroundColor: '#357ae8'
        }
      }}
    >
      {signingIn ? 'Connexion...' : 'Se connecter'}
    </Button>
  )
}