'use client'

import { signIn, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import { Container, Paper, Typography, Button, Box } from "@mui/material"
import { Google } from "@mui/icons-material"

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null)

  useEffect(() => {
    (async () => {
      const res = await getProviders()
      setProviders(res)
    })()
  }, [])

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Connexion
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Connectez-vous pour accéder à votre compte
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <Button
                key={provider.name}
                variant="contained"
                size="large"
                startIcon={<Google />}
                onClick={() => signIn(provider.id)}
                sx={{ 
                  width: '100%',
                  mb: 2,
                  backgroundColor: '#4285f4',
                  '&:hover': {
                    backgroundColor: '#357ae8'
                  }
                }}
              >
                Se connecter avec {provider.name}
              </Button>
            ))}
        </Box>
      </Paper>
    </Container>
  )
}