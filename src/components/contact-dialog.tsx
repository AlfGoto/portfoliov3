"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactDialog({ open, onClose }: ContactDialogProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Contact Me</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Subject"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Send Email
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
