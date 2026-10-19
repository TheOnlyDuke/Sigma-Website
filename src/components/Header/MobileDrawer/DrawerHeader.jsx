"use client";
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import ThemeToggle from "../ThemeToggleButton";

export default function DrawerHeader({ onClose }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2.5,
        py: 2,
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        onClick={onClose}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          variant="smallTitle"
          sx={{
            fontWeight: 800,
            fontSize: "20px",
            color: "var(--primary-text)",
            letterSpacing: "-0.5px",
          }}
        >
          سیگما
        </Typography>
        <Box
          component="span"
          sx={{
            fontSize: "11px",
            fontWeight: 600,
            color: "var(--activeBG)",
            bgcolor: "rgba(70, 43, 239, 0.1)",
            px: "8px",
            py: "2px",
            borderRadius: "6px",
          }}
        >
          یادگیری ریاضی
        </Box>
      </Link>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <ThemeToggle size={36} iconSize={20} />
        <IconButton
          onClick={onClose}
          aria-label="بستن منو"
          sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            color: "var(--primary-text)",
            transition: "background-color 0.2s ease",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.05)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
