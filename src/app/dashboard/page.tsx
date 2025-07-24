'use client'

import { useSession } from "next-auth/react"
import { Container, Typography, Paper, Box, Avatar, Chip } from "@mui/material"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { data: session } = useSession()

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Bienvenue sur votre tableau de bord !
        </Typography>
        
        {session?.user && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <Avatar 
              src={session.user.image || undefined}
              alt={session.user.name || 'User'}
              sx={{ width: 64, height: 64 }}
            />
            <Box>
              <Typography variant="h6">
                {session.user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {session.user.email}
              </Typography>
              <Chip 
                label="Connecté" 
                color="success" 
                size="small" 
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>
        )}
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Fonctionnalités protégées
        </Typography>
        <Typography variant="body1">
          Cette page est protégée par l'authentification. Seuls les utilisateurs 
          connectés peuvent y accéder.
        </Typography>
      </Paper>
    </Container>
  )
}