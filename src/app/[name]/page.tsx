import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  CardContent,
  Chip,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Comment as CommentIcon } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import projects from "@/data/projects";
import { Project } from "@/types/project";
import { Review } from "@/types/review";
import AddReviewButton from "@/components/add-review";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

async function getReviews() {
  const projectArr = projects;
  await Promise.all([
    (async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_AWS_ENDPOINT + "/");
      const json = await res.json();
      await addReviewsToProjects(json, projectArr, "AWS");
    })(),
    (async () => {
      const { data: Reviews } = await supabase.from("Reviews").select("*");

      if (!Reviews) return;

      await addReviewsToProjects(Reviews, projectArr, "Supabase");
    })(),
  ]);
  return projectArr;
}

async function addReviewsToProjects(
  reviewsArr: Review[],
  projectArr: Project[],
  source: string
) {
  return Promise.all(
    reviewsArr.map((review) => {
      projectArr.forEach((project) => {
        if (project.name === review.projectName) {
          if (!project.reviews) project.reviews = [];

          // Prevent duplicates by checking if the review already exists
          const isDuplicate = project.reviews.some(
            (r) => r.review === review.review && r.author === review.author
          );

          if (!isDuplicate) {
            project.reviews.push({ ...review, source });
          }
        }
      });
    })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const P = await getReviews();
  const project = P.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.name} | Project Details`,
    description: project.description.substring(0, 160),
    openGraph: {
      title: project.name,
      description: project.description.substring(0, 160),
      images: project.banner ? [project.banner] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description.substring(0, 160),
      images: project.banner ? [project.banner] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  // Find the project by ID (which is the slugified name)
  const { name } = await params;
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!project) notFound();
  if (!project.reviews) project.reviews = [];

  return (
    <Box component="main" sx={{ minHeight: "100vh", pb: 8 }}>
      {/* Banner Image */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "200px", sm: "300px", md: "400px" },
          width: "100%",
          mb: 4,
        }}
      >
        <Image
          src={`/imgs/${project.name}/${project.banner}`}
          alt={`banner of the ${project.name} project`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: { xs: 2, sm: 4 },
          }}
        >
          <Link
            href="/"
            style={{ alignSelf: "flex-start", marginBottom: "16px" }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Back to Projects
            </Button>
          </Link>
          <Typography
            variant="h3"
            component="h1"
            color="white"
            sx={{
              textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            {project.name}
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Project Details */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{ p: { xs: 2, sm: 3 }, height: "100%", borderRadius: 2 }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                About this project
              </Typography>
              <Typography variant="body1" paragraph>
                {project.description}
              </Typography>

              {project.url && (
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<OpenInNewIcon />}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 2 }}
                >
                  Visit Project
                </Button>
              )}

              <AddReviewButton projectName={project.name} />
              <CardContent sx={{ pt: 3, pb: 3 }}>
                {project.reviews!.length > 0 ? (
                  <Stack spacing={2.5}>
                    {project.reviews!.map((review, index) => (
                      <Box key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1.5,
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 32,
                              height: 32,
                              bgcolor: "primary.light",
                              mr: 1.5,
                              fontSize: "0.875rem",
                            }}
                          >
                            {review.author.charAt(0)}
                          </Avatar>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 600 }}
                            >
                              {review.author}
                            </Typography>
                            <Chip
                              label={review.source}
                              size="small"
                              sx={{
                                height: "20px",
                                fontSize: "0.75rem",
                                backgroundColor: "background.paper",
                                border: "1px solid",
                                borderColor: "divider",
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            pl: 5,
                            lineHeight: 1.6,
                          }}
                        >
                          {review.review}
                        </Typography>
                        {index < project.reviews!.length - 1 && (
                          <Divider sx={{ mt: 2.5 }} />
                        )}
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      py: 4,
                    }}
                  >
                    <CommentIcon
                      sx={{ fontSize: 18, mr: 1, color: "text.disabled" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      No reviews available
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Paper>
          </Grid>

          {/* Project Images */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Gallery
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {project.images.map((image, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "75%", // 4:3 aspect ratio
                        width: "100%",
                        borderRadius: 1,
                        overflow: "hidden",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Image
                        src={`/imgs/${project.name}/${image}`}
                        alt={`${project.name} image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
