"use client";

import {
  Grid,
  Paper,
  Typography,
  Box,
  Dialog,
  IconButton,
  DialogContent,
  Fade,
} from "@mui/material";
import { useState, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/types/project";

export default function VideoGallery({ project }: { project: Project }) {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    setSelectedVideo(index);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
      if (videoRefs.current[index]) {
        videoRefs.current[index]!.currentTime = 0;
      }
    }
  };

  if (!project.videos || project.videos.length === 0) {
    return null;
  }

  return (
    <>
      <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Videos
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {project.videos.map((video, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  borderRadius: 1,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={`/imgs/${project.name}/${video}`}
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Dialog
        open={selectedVideo !== null}
        onClose={handleClose}
        maxWidth="lg"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        PaperProps={{
          sx: {
            bgcolor: "background.paper",
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            bgcolor: "rgba(0,0,0,0.4)",
            zIndex: 1,
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <X />
        </IconButton>
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          {selectedVideo !== null && (
            <Box
              sx={{
                position: "relative",
                width: { xs: "90vw", sm: "80vw", md: "70vw" },
                maxHeight: "90vh",
              }}
            >
              <video
                src={`/imgs/${project.name}/${project.videos[selectedVideo]}`}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
