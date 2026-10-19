"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

/**
 * Reusable layout wrapper for route landing pages (e.g. /topics, /blog).
 * Enforces standard header offset, responsive spacing, and RTL typography.
 */
export default function RouteLandingLayout({ title, description, children }) {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        minHeight: "calc(100vh - 200px)",
        pt: { xs: "100px", sm: "120px", md: "140px" },
        pb: { xs: 8, md: 12 },
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, sm: 7, md: 8 } }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontWeight: 800,
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              color: "var(--primary-text)",
              mb: 1.5,
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                fontFamily: "IRANYekanX, sans-serif",
                fontSize: { xs: "14px", sm: "16px" },
                color: "var(--secondary-text)",
                maxWidth: "520px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {children}
      </Container>
    </Box>
  );
}
