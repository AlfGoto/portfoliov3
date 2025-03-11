import { Container, Box, Skeleton, Typography, Grid } from "@mui/material";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import HomeClient from "@/components/home-page";
import P from "@/data/projects";
import { Suspense } from "react";

export default async function Home() {
  const Projects = P;

  return (
    <Box component="main">
      <HeroSection />
      <Suspense fallback={<HomeClientSkeleton />}>
        <HomeClient projects={Projects} />
      </Suspense>
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SkillsSection />
        </Container>
      </Box>
    </Box>
  );
}

function HomeClientSkeleton() {
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
        <Skeleton width="40%" height={50} sx={{ mx: "auto" }} />
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
              <Skeleton variant="rectangular" width="100%" height={180} />
              <Skeleton width="60%" height={30} sx={{ mt: 2 }} />
              <Skeleton width="80%" height={20} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
