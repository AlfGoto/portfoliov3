"use client";

import { useState, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  banner?: string;
}

export default function ImageCarousel({ images, banner }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayImages = images.filter((img) => img !== "");
  const imageToShow =
    (displayImages.length > 0 ? displayImages[currentIndex] : null) || banner;

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  }, [displayImages.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  }, [displayImages.length]);

  if (!imageToShow) {
    return (
      <Box
        sx={{
          height: { xs: 160, sm: 200, md: 250 },
          bgcolor: "background.paper",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        No images available
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 160, sm: 200, md: 250 },
        backgroundColor: "background.paper",
      }}
    >
      <Image
        src={imageToShow}
        alt="Project preview"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {displayImages.length > 1 && (
        <>
          <IconButton
            sx={{
              position: "absolute",
              left: 4,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "background.paper" },
              p: { xs: 0.5, sm: 1 },
              zIndex: 2,
            }}
            onClick={handlePrevious}
            size="medium"
          >
            <KeyboardArrowLeft fontSize="medium" />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              right: 4,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "background.paper" },
              p: { xs: 0.5, sm: 1 },
              zIndex: 2,
            }}
            onClick={handleNext}
            size="medium"
          >
            <KeyboardArrowRight fontSize="medium" />
          </IconButton>
        </>
      )}
    </Box>
  );
}
