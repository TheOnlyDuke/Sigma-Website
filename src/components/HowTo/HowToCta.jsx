"use client";
import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/app/theme/ThemeContext";

/**
 * HowToCta renders the closing call-to-action banner at the bottom of the tutorial page.
 */
export default function HowToCta() {
  const { isDarkMode } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        mt: { xs: "60px", sm: "80px", md: "100px" },
        direction: "rtl",
      }}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: "24px", md: "32px" },
            p: { xs: "36px 20px", sm: "48px 36px", md: "56px 48px" },
            textAlign: "center",
            background: isDarkMode
              ? "linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)"
              : "linear-gradient(135deg, #462BEF 0%, #3B82F6 100%)",
            color: "#FFFFFF",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.12)"
              : "1px solid rgba(70, 43, 239, 0.2)",
            boxShadow: isDarkMode
              ? "0 20px 40px -15px rgba(0, 0, 0, 0.6)"
              : "0 20px 40px -15px rgba(70, 43, 239, 0.4)",
          }}
        >
          {/* Subtle Ambient Background Decorative Glow */}
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1, maxWidth: "680px", mx: "auto" }}>
            <Typography
              variant="title"
              component="h2"
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "38px" },
                fontWeight: 950,
                lineHeight: 1.3,
                mb: "16px",
                color: "#FFFFFF",
              }}
            >
              آماده‌اید یادگیری تعاملی را تجربه کنید؟
            </Typography>

            <Typography
              variant="normalBody"
              sx={{
                fontSize: { xs: "15px", sm: "17px" },
                lineHeight: 1.8,
                color: "rgba(255, 255, 255, 0.88)",
                mb: { xs: "32px", md: "40px" },
              }}
            >
              همین حالا وارد مباحث شوید، به تماشای ویدیوهای مفهومی بنشینید و مهارت
              خود را در حل چالش‌های استدلالی بسنجید.
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <ButtonBase
                component={Link}
                href="/topics"
                sx={{
                  px: { xs: "24px", sm: "32px" },
                  py: "14px",
                  borderRadius: "14px",
                  fontSize: "16px",
                  fontWeight: 800,
                  backgroundColor: "#FFFFFF",
                  color: "#1E1E1E",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: shouldReduceMotion ? "none" : "translateY(-2px)",
                    backgroundColor: "rgba(255, 255, 255, 0.92)",
                  },
                }}
              >
                شروع یادگیری مباحث
              </ButtonBase>

              <ButtonBase
                component={Link}
                href="/leaderboard"
                sx={{
                  px: { xs: "24px", sm: "28px" },
                  py: "14px",
                  borderRadius: "14px",
                  fontSize: "16px",
                  fontWeight: 700,
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: shouldReduceMotion ? "none" : "translateY(-2px)",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                مشاهده لیدربورد
              </ButtonBase>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
