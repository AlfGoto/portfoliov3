import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import { getUserFromCookies } from "@/lib/supabase-server";
import { logoutAction } from "@/app/auth-actions";

export default async function Header() {
  const user = await getUserFromCookies();

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ background: "transparent", boxShadow: "none", top: 0 }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {user ? (
            <form action={logoutAction}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#000000",
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                Logout
              </Button>
            </form>
          ) : (
            <>
              <Button
                component={Link}
                href="/login"
                variant="contained"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#000000",
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                Login
              </Button>
              <Button component={Link} href="/register" variant="contained">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
