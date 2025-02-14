"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react"; // Added import for React

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#666666",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
