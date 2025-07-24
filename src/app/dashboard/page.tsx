'use client'

import { useAuth } from "@/contexts/AuthContext"
import { Container, Typography, Paper, Box, Avatar, Chip, Button } from "@mui/material"
import { Logout } from "@mui/icons-material"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { user, signOut } = useAuth()

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Bienvenue sur votre tableau de bord !
        </Typography>
        
        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <Avatar 
              src={user.user_metadata?.avatar_url}
              alt={user.user_metadata?.full_name || user.email || 'User'}
              sx={{ width: 64, height: 64 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">
                {user.user_metadata?.full_name || 'Utilisateur'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ID: {user.id}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Chip 
                  label="Connecté via Google" 
                  color="success" 
                  size="small" 
                />
              </Box>
            </Box>
            <Button
              variant="outlined"
              startIcon={<Logout />}
              onClick={signOut}
              size="small"
            >
              Déconnexion
            </Button>
          </Box>
        )}
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Fonctionnalités protégées avec Supabase Auth
        </Typography>
        <Typography variant="body1" paragraph>
          Cette page est protégée par l'authentification Supabase. Seuls les utilisateurs 
          connectés peuvent y accéder.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ✅ Authentification Google OAuth<br/>
          ✅ Sessions sécurisées<br/>
          ✅ Protection côté client et serveur<br/>
          ✅ Gestion d'état réactive
        </Typography>
      </Paper>
    </Container>
  )
}