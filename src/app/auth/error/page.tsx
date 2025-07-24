'use client'

import { useSearchParams } from "next/navigation"
import { Container, Paper, Typography, Button, Box, Alert } from "@mui/material"
import { Error as ErrorIcon } from "@mui/icons-material"
import Link from "next/link"

const errors: { [key: string]: string } = {
  Signin: "Essayez de vous connecter avec un autre compte.",
  OAuthSignin: "Essayez de vous connecter avec un autre compte.",
  OAuthCallback: "Essayez de vous connecter avec un autre compte.",
  OAuthCreateAccount: "Essayez de vous connecter avec un autre compte.",
  EmailCreateAccount: "Essayez de vous connecter avec un autre compte.",
  Callback: "Essayez de vous connecter avec un autre compte.",
  OAuthAccountNotLinked: "Pour confirmer votre identité, connectez-vous avec le même compte que vous avez utilisé à l'origine.",
  EmailSignin: "L'e-mail n'a pas pu être envoyé.",
  CredentialsSignin: "Connexion échouée. Vérifiez que les détails que vous avez fournis sont corrects.",
  SessionRequired: "Veuillez vous connecter pour accéder à cette page.",
  default: "Impossible de vous connecter."
}

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Box sx={{ mb: 3 }}>
          <ErrorIcon sx={{ fontSize: 60, color: 'error.main' }} />
        </Box>
        
        <Typography variant="h4" component="h1" gutterBottom>
          Erreur d'authentification
        </Typography>
        
        <Alert severity="error" sx={{ mb: 3 }}>
          {error ? errors[error] ?? errors.default : errors.default}
        </Alert>
        
        <Box sx={{ mt: 3 }}>
          <Button
            component={Link}
            href="/auth/signin"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Réessayer
          </Button>
          <Button
            component={Link}
            href="/"
            variant="outlined"
            size="large"
          >
            Retour à l'accueil
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}