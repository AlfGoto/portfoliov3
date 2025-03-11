"use client";

import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "@/components/project-card";
import { Project } from "@/types/project";

export default function HomeClient({ projects }: { projects: Project[] }) {
  return (
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
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.name}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
