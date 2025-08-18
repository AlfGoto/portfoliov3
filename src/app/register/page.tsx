import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { registerAction } from "@/app/auth-actions";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const errorMessage = params?.error ?? null;

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Register
      </Typography>
      <Box
        component="form"
        action={registerAction}
        sx={{ mt: 2, display: "grid", gap: 2 }}
      >
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <TextField
          label="Email"
          type="email"
          name="email"
          required
          autoComplete="email"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          required
          autoComplete="new-password"
          fullWidth
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
}
