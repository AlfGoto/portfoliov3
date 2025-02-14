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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        `/api/send-mail?contenu=${encodeURIComponent(
          message
        )}&sujet=${encodeURIComponent(subject)}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Échec de l'envoi de l'e-mail");

      setSuccess(true);
      setSubject("");
      setMessage("");
    } catch (error) {
      // @ts-expect-error 'error' is of type 'unknown'.
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Contact Me</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && (
              <div style={{ color: "green" }}>E-mail send successfully !</div>
            )}
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
          <Button onClick={onClose}>Close</Button>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
