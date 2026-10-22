"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Box, Snackbar, Alert, Typography } from "@mui/material";
import GooglePlay from "../../../../public/images/Download/GooglePlay.png";
import AppStore from "../../../../public/images/Download/AppStore.png";
import DirectDownload from "../../../../public/images/Download/DirectDownload.png";

const UNAVAILABLE_MESSAGE =
  "دانلود اپلیکیشن سیگما فعلاً فعال نیست و به‌زودی در دسترس قرار می‌گیرد.";

export default function DownloadOptions() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.preventDefault();
    setSnackbarOpen(true);
  }, []);

  const handleCloseSnackbar = useCallback((event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  }, []);

  const buttonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    display: "inline-flex",
    borderRadius: "6px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
    "&:hover": {
      transform: "scale(1.04)",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
    },
    "&:active": {
      transform: "scale(0.97)",
    },
    "&:focus-visible": {
      outline: "2px solid #FF4D4F",
      outlineOffset: "2px",
    },
    "& img": {
      display: "block",
      borderRadius: "6px",
      width: "150px",
      height: "50px",
    },
    "@media (min-width: 2560px)": {
      "& img": {
        width: "180px",
        height: "60px",
      },
    },
  };

  return (
    <>
      <Box
        component="nav"
        aria-label="گزینه‌های دانلود اپلیکیشن سیگما"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "150px",
            sm: "repeat(2, 150px)",
          },
          gap: "12px",
          "@media (min-width: 2560px)": {
            gridTemplateColumns: "repeat(2, 180px)",
            gap: "16px",
          },
          width: "fit-content",
          direction: "rtl",
        }}
      >
        <Box
          component="button"
          type="button"
          onClick={handleButtonClick}
          aria-label="دانلود اپلیکیشن اندروید سیگما (به‌زودی)"
          title={UNAVAILABLE_MESSAGE}
          sx={{
            ...buttonStyle,
            order: { xs: 1, sm: 1 },
            gridColumn: { sm: 1 },
            gridRow: { sm: 1 },
          }}
        >
          <Image
            src={GooglePlay}
            width={150}
            height={50}
            alt="دانلود نسخه اندروید"
          />
        </Box>

        <Box
          component="button"
          type="button"
          onClick={handleButtonClick}
          aria-label="دانلود نسخه ویندوز سیگما (به‌زودی)"
          title={UNAVAILABLE_MESSAGE}
          sx={{
            ...buttonStyle,
            order: { xs: 2, sm: 3 },
            gridColumn: { sm: 1 },
            gridRow: { sm: 2 },
          }}
        >
          <Image
            src={DirectDownload}
            width={150}
            height={50}
            alt="دانلود مستقیم نسخه ویندوز"
          />
        </Box>

        <Box
          component="button"
          type="button"
          onClick={handleButtonClick}
          aria-label="دانلود نسخه آی او اس PWA سیگما (به‌زودی)"
          title={UNAVAILABLE_MESSAGE}
          sx={{
            ...buttonStyle,
            order: { xs: 3, sm: 2 },
            gridColumn: { sm: 2 },
            gridRow: { sm: 1 },
          }}
        >
          <Image
            src={AppStore}
            width={150}
            height={50}
            alt="دانلود نسخه آی او اس"
          />
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={15000}
        disableWindowBlurListener={true}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          zIndex: 9999,
          direction: "rtl",
          bottom: { xs: "24px", sm: "32px" },
          "@media (min-width: 2560px)": {
            bottom: "48px",
          },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          variant="filled"
          sx={{
            backgroundColor: "#12131A",
            color: "#FFFFFF",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.6)",
            direction: "rtl",
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: "14px",
            lineHeight: 1.8,
            alignItems: "center",
            "& .MuiAlert-icon": {
              color: "#38BDF8",
              marginRight: 0,
              marginLeft: "12px",
              opacity: 1,
            },
            "& .MuiAlert-message": {
              padding: "4px 0",
              color: "#FFFFFF",
            },
            "& .MuiAlert-action": {
              paddingLeft: 0,
              paddingRight: "8px",
              marginLeft: "-8px",
              marginRight: "auto",
              color: "#FFFFFF",
              "& .MuiIconButton-root": {
                color: "#FFFFFF",
                opacity: 0.85,
                transition: "opacity 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "13px", sm: "14px" },
              "@media (min-width: 2560px)": {
                fontSize: "17px",
              },
              fontWeight: 500,
              color: "#FFFFFF",
              display: "block",
            }}
          >
            {UNAVAILABLE_MESSAGE}
          </Typography>
        </Alert>
      </Snackbar>
    </>
  );
}

