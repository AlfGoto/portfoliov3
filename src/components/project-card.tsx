import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import ImageCarousel from "./image-carousel";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
          {project.description
            ? cutText(project.description)
            : "Project description coming soon..."}
        </Typography>
      </CardContent>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <CardActions
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 0 },
            p: { xs: 2, sm: 3 },
            pt: { xs: 1, sm: 2 },
          }}
        >
          <Button
            size="small"
            href={"/" + project.name.toLowerCase().replace(/\s+/g, "-")}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            variant="outlined"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            See more
          </Button>
        </CardActions>

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
      </Box>
    </Card>
  );
}

const cutText = (string: string) => {
  const max = 150;
  if (string.length < max) return string;

  const charToRemove = [" ", ",", "."];
  string = string.substring(0, 150);

  charToRemove.forEach((c) => {
    string = string
      .substring(0, 150)
      .split(c)
      .filter((e) => e)
      .join(c);
  });
  string += "...";

  return string;
};
