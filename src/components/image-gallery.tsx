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
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { X } from "lucide-react";

export default function Gallery({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Gallery
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {project.images.map((image, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  borderRadius: 1,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  // Remove the fixed aspect ratio
                }}
              >
                <Image
                  src={`/imgs/${project.name}/${image}`}
                  alt={`${project.name} image ${index + 1}`}
                  width={400}
                  height={300}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  onClick={() => {
                    handleImageClick(index);
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Dialog
        open={selectedImage !== null}
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
          {selectedImage !== null && (
            <Box
              sx={{
                position: "relative",
                width: { xs: "90vw", sm: "80vw", md: "70vw" },
                maxHeight: "90vh",
              }}
            >
              <Image
                src={`/imgs/${project.name}/${project.images[selectedImage]}`}
                alt={`${project.name} image ${project.images[selectedImage]}`}
                width={1200}
                height={800}
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
