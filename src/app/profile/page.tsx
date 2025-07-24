import { Container, Typography, Paper, Box, Avatar, Chip } from "@mui/material"
import { getUser } from "@/hooks/useSupabaseServer"
import { redirect } from "next/navigation"

export default async function Profile() {
  const user = await getUser()
  
  if (!user) {
    redirect('/auth/signin?redirectTo=/profile')
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Mon Profil
      </Typography>
      
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Avatar 
            src={user.user_metadata?.avatar_url}
            alt={user.user_metadata?.full_name || user.email || 'User'}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h4" gutterBottom>
              {user.user_metadata?.full_name || 'Utilisateur'}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Chip 
              label="Authentifié via Google" 
              color="primary" 
              size="small" 
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Informations du compte
          </Typography>
          
          <Box sx={{ display: 'grid', gap: 2, mt: 2 }}>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                ID Utilisateur
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
                {user.id}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Email vérifié
              </Typography>
              <Typography variant="body1">
                {user.email_confirmed_at ? '✅ Oui' : '❌ Non'}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Dernière connexion
              </Typography>
              <Typography variant="body1">
                {user.last_sign_in_at 
                  ? new Date(user.last_sign_in_at).toLocaleString('fr-FR')
                  : 'Inconnue'
                }
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Compte créé le
              </Typography>
              <Typography variant="body1">
                {new Date(user.created_at).toLocaleDateString('fr-FR')}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Paper sx={{ p: 2, mt: 4, backgroundColor: 'grey.50' }}>
          <Typography variant="body2" color="text.secondary">
            ℹ️ Cette page est rendue côté serveur et protégée par le middleware Supabase.
            Les données utilisateur sont récupérées directement côté serveur avant le rendu.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  )
}