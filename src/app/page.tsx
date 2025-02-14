"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import ProjectCard from "@/components/project-card";
import SkillsSection from "@/components/skills-section";
import HeroSection from "@/components/hero-section";
import P from "@/data/projects";

export default function Home() {
  return (
    <Box component="main">
      <HeroSection />

      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            mb: { xs: 3, sm: 4, md: 6 },
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {P.map((project) => (
            <Grid item xs={12} sm={6} key={project.name}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SkillsSection />
        </Container>
      </Box>
    </Box>
  );
}
