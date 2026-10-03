"use client";
import { Box } from "@mui/material";
import VideoPlayer from "@/components/VideoPlayer";

export default function LearningVideoCard({ title, videoSrc }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "761 / 486",
        maxWidth: "761px",
        mx: "auto",
      }}
    >
      <VideoPlayer
        src={videoSrc}
        title={title}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          boxShadow:
            "-20px 11px 23px 0px rgba(0,0,0,0.09), -5px 3px 13px 0px rgba(0,0,0,0.1)",
        }}
      />
      {/*
        TEMPORARILY DISABLED: Triangular play icon overlay
        Preserved as requested; do not delete permanently.
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          pointerEvents: "none",
          opacity: 0.85,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          width="100"
          height="100"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
        >
          <path d="M15 8.66 L85 50 L15 91.34 Z" fill="black" />
        </svg>
      </Box>
      */}
    </Box>
  );
}