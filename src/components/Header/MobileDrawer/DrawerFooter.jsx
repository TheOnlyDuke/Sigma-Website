"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function DrawerFooter({ userInfo, onLogout, onClose }) {
  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid var(--border)",
        bgcolor: "background.paper",
      }}
    >
      {userInfo && (
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            onLogout?.();
            onClose();
          }}
          startIcon={<LogoutIcon sx={{ ml: 1, mr: -0.5 }} />}
          sx={{
            height: "44px",
            borderRadius: "10px",
            bgcolor: "#000000",
            color: "#FFFFFF",
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "none",
            mb: 1.5,
            "&:hover": {
              bgcolor: "#222222",
              boxShadow: "none",
            },
          }}
        >
          خروج از حساب کاربری
        </Button>
      )}

      <Typography
        sx={{
          fontFamily: "inherit",
          fontSize: "11px",
          color: "var(--secondary-text)",
          textAlign: "center",
        }}
      >
        سیگما - آموزش تعاملی ریاضیات دانشگاهی
      </Typography>
    </Box>
  );
}
