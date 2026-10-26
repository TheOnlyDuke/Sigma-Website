"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

/**
 * QuestionExplanationModal displays the feedback explanation
 * when an incorrect option is submitted, allowing the student to retry.
 */
export default function QuestionExplanationModal({
  open = false,
  onClose,
  message = "پاسخ نادرست است. لطفاً راهبرد حل را مجدداً بررسی کنید.",
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0,0,0,0.45)",
          },
        },
        paper: {
          sx: {
            borderRadius: "20px",
            p: { xs: 2.5, sm: 3 },
            direction: "rtl",
            textAlign: "center",
            bgcolor: "background.paper",
            border: "1px solid var(--border)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
          },
        },
      }}
    >
      <DialogContent sx={{ p: 0, pt: 1 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            bgcolor: "rgba(255, 0, 47, 0.1)",
            color: "var(--redBG, #FF002F)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <ErrorOutlineRoundedIcon sx={{ fontSize: 34 }} />
        </Box>

        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: "19px",
            fontWeight: 800,
            color: "var(--primary-text)",
            mb: 1.5,
          }}
        >
          پاسخ شما نیاز به بازبینی دارد
        </Typography>

        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: "15px",
            fontWeight: 500,
            color: "var(--secondary-text)",
            lineHeight: 1.8,
            px: 1,
          }}
        >
          {message}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", p: 0, pt: 3 }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            bgcolor: "#000000",
            color: "#FFFFFF",
            borderRadius: "12px",
            px: 4,
            py: 1.2,
            fontSize: "15px",
            fontWeight: 700,
            fontFamily: "inherit",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#222222",
              boxShadow: "none",
            },
          }}
        >
          متوجه شدم، تلاش مجدد
        </Button>
      </DialogActions>
    </Dialog>
  );
}
