"use client";

import type React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import { AddComment as AddCommentIcon } from "@mui/icons-material";
import addSupabaseReview from "@/lib/supabase-add-review";
import addVercelReview from "@/lib/neon-add-review";

interface AddReviewProps {
  projectName: string;
}

export default function AddReviewButton({ projectName }: AddReviewProps) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");
  const [source, setSource] = useState("AWS");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAuthor("");
    setReview("");
    setSource("AWS");
  };

  const handleSourceChange = (event: SelectChangeEvent) => {
    setSource(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!author.trim() || !review.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (source === "AWS") {
        const response = await fetch(
          process.env.NEXT_PUBLIC_AWS_ENDPOINT + "/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              author,
              review,
              projectName,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add review");
        }
        setSuccess(true);
        handleClose();
      } else if (source === "Supabase") {
        try {
          await addSupabaseReview(author, review, projectName);

          setSuccess(true);
          handleClose();
          // eslint-disable-next-line
        } catch (error: any) {
          throw new Error("Failed to add review");
        }
      } else if (source === "Vercel") {
        await addVercelReview(author, review, projectName);

        setSuccess(true);
        handleClose();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCommentIcon />}
        onClick={handleClickOpen}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 500,
          mt: 2,
        }}
      >
        Add Review
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ pb: 1 }}>Add Your Review</DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                autoFocus
                error={!!error && !author.trim()}
              />

              <FormControl fullWidth required>
                <InputLabel id="review-source-label">Source</InputLabel>
                <Select
                  labelId="review-source-label"
                  id="review-source"
                  value={source}
                  label="Source"
                  onChange={handleSourceChange}
                >
                  {["AWS", "Supabase", "Vercel"].map((v) => (
                    <MenuItem key={v} value={v}>
                      {v}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Your Review"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                error={!!error && !review.trim()}
              />

              {error && (
                <Alert severity="error" sx={{ mt: 1 }}>
                  {error}
                </Alert>
              )}
            </Box>
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleClose} color="inherit" disabled={loading}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
            >
              {loading ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Review submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
