"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Collapse,
  Chip,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import ImageCarousel from "./image-carousel";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-4px)",
          transition: "transform 0.2s ease-in-out",
        },
      }}
    >
      <ImageCarousel
        images={project.images.map((img) => `/imgs/${project.name}/${img}`)}
        banner={
          project.banner ? `/imgs/${project.name}/${project.banner}` : undefined
        }
      />
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            mb: { xs: 1, sm: 2 },
          }}
        >
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          {project.description || "Project description coming soon..."}
        </Typography>
      </CardContent>

      {project.reviews && project.reviews.length > 0 && (
        <>
          <CardActions sx={{ px: { xs: 2, sm: 3 }, pb: 0 }}>
            <Button
              onClick={handleExpandClick}
              endIcon={
                <ExpandMoreIcon
                  sx={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              }
            >
              See Reviews
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ pt: 0 }}>
              {project.reviews.map((review, index) => (
                <Box key={index} sx={{ mb: 2, "&:last-child": { mb: 0 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ mr: 1 }}>
                      {review.author}
                    </Typography>
                    <Chip
                      label={review.source}
                      size="small"
                      sx={{
                        height: "20px",
                        fontSize: "0.75rem",
                        backgroundColor: "background.paper",
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {review.review}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Collapse>
        </>
      )}

      <CardActions
        sx={{
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
          p: { xs: 2, sm: 3 },
          pt: { xs: 1, sm: 2 },
        }}
      >
        {project.url && (
          <Button
            size="small"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            variant="outlined"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Visit Project
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
