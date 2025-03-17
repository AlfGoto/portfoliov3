"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { SiTwitch } from "react-icons/si";
import Link from "next/link";
import ContactDialog from "./contact-dialog";
import Image from 'next/image';


export default function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        width: "100%",
        height: "100%", // Make sure to define a height
        overflow: "hidden",
        // No need for ::before anymore as we'll use Image component
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      {/* Next.js Image component */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.7,
          }}
          priority // Add priority for above-the-fold images
        />
      </Box>

      {/* Your content goes here with zIndex > 1 */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            pt: { xs: 4, sm: 6, md: 8 },
            pb: { xs: 6, sm: 8, md: 10 },
          }}
        >
          <Stack
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
            textAlign="center"
          >
            <Avatar
              src="/pp.jpg"
              alt="Alfred Gauthier"
              sx={{
                width: { xs: 120, sm: 150, md: 180 },
                height: { xs: 120, sm: 150, md: 180 },
                mb: { xs: 2, sm: 3 },
                border: "4px solid white",
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Alfred Gauthier
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                maxWidth: "sm",
                mx: "auto",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "md",
                mx: "auto",
                px: { xs: 2, sm: 4 },
                fontSize: { xs: "0.875rem", sm: "1rem" },
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Experienced in Serverless, Next.js, and CSS DOM manipulation.
              Passionate about backend architecture and creating efficient,
              scalable solutions.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2 }}
              width={{ xs: "100%", sm: "auto" }}
              px={2}
            >
              <Button
                variant="contained"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                fullWidth={false}
                sx={{
                  minWidth: { xs: "100%", sm: 140 },
                  bgcolor: "white",
                  color: "black",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                onClick={() => setContactOpen(true)}
                fullWidth={false}
                sx={{
                  minWidth: { xs: "100%", sm: 140 },
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.9)",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 4 }}
              sx={{
                mt: { xs: 2, sm: 4 },
                "& a": {
                  color: "white",
                  transition: "color 0.2s",
                  "&:hover": {
                    color: "rgba(255,255,255,0.8)",
                  },
                },
                "& svg": {
                  fontSize: { xs: 24, sm: 28 },
                },
              }}
            >
              <Link
                href="https://github.com/AlfGoto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </Link>
              <Link
                href="https://www.instagram.com/alfffoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.twitch.tv/alfgoto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTwitch />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alfred-gauthier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </Link>
            </Stack>
          </Stack>
        </Container>

        <ContactDialog
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </Box>
    </Box>
  );
}
