"use client";
import { Box, Typography } from "@mui/material";

export default function ProfessorNotes({ notes }) {
  return (
    <Box sx={{ width: "100%", direction: "rtl" }}>
      {/* Section title */}
      <Typography
        sx={{
          color: "var(--primary-text)",
          fontFamily: "IRANYekanX, sans-serif",
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
          fontWeight: 700,
          lineHeight: "1.8",
          textAlign: "right",
          mb: "16px",
        }}
      >
        دانلود جزوات اساتید
      </Typography>

      {/* Notes list — horizontal row, wraps on smaller screens */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "40px",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          direction: "rtl",
        }}
      >
        {notes.map((note, index) => (
          <Box
            key={index}
            component={note.href ? "a" : "div"}
            href={note.href || undefined}
            target={note.href ? "_blank" : undefined}
            rel={note.href ? "noopener noreferrer" : undefined}
            download={note.href ? true : undefined}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              minWidth: "220px",
              height: "35px",
              flexShrink: 0,
              cursor: note.href ? "pointer" : "default",
              textDecoration: "none",
              "&:hover": note.href
                ? {
                    "& .note-text": {
                      color: "var(--activeBG)",
                    },
                  }
                : {},
            }}
          >
            <Typography
              className="note-text"
              sx={{
                fontSize: "17px",
                fontFamily: "Inter, IRANYekanX, sans-serif",
                fontWeight: 400,
                lineHeight: "1.8",
                color: "var(--primary-text)",
                whiteSpace: "nowrap",
                direction: "rtl",
                transition: "color 0.2s ease",
              }}
            >
              📚{note.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}