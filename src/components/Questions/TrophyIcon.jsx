"use client";
import React from "react";
import { Box } from "@mui/material";

/**
 * TrophyIcon renders the championship trophy silhouette
 * from Figma State B Mobile finale screen.
 */
export default function TrophyIcon({ size = 72, sx = {} }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--primary-text)",
        ...sx,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.76 2.73 3.19 3.42L10 18H8v2h8v-2h-2l-.58-1.64c1.43-.69 2.56-1.92 3.19-3.42C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
      </svg>
    </Box>
  );
}
