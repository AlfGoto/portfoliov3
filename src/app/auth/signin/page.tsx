'use client'

import { useState, useEffect } from "react"
import { Container, Paper, Typography, Button, Box, Alert, CircularProgress } from "@mui/material"
import { Google } from "@mui/icons-material"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter, useSearchParams } from "next/navigation"

export default function SignIn() {
  const { signInWithGoogle, user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const redirectTo = searchParams.get('redirectTo') || '/dashboard'

  // Rediriger si déjà connecté
  useEffect(() => {
    if (user) {
      router.push(redirectTo)
    }
  }, [user, router, redirectTo])

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      setError(null)
      await signInWithGoogle()
    } catch (error: any) {
      setError(error.message || 'Erreur lors de la connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Connexion
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Connectez-vous pour accéder à votre compte
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={loading ? <CircularProgress size={20} /> : <Google />}
            onClick={handleGoogleSignIn}
            disabled={loading}
            sx={{ 
              width: '100%',
              mb: 2,
              backgroundColor: '#4285f4',
              '&:hover': {
                backgroundColor: '#357ae8'
              }
            }}
          >
            {loading ? 'Connexion en cours...' : 'Se connecter avec Google'}
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          En vous connectant, vous acceptez nos conditions d'utilisation.
        </Typography>
      </Paper>
    </Container>
  )
}