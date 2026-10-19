"use client";
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";
import { useTheme } from "@/app/theme/ThemeContext";

const ThemeToggle = ({ sx = {}, size = 40, iconSize = 22 }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton
        disabled
        aria-hidden="true"
        sx={{
          width: size,
          height: size,
          borderRadius: "10px",
          opacity: 0,
          ...sx,
        }}
      />
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label={isDarkMode ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
        title={isDarkMode ? "حالت روشن" : "حالت تاریک"}
        sx={{
          width: size,
          height: size,
          borderRadius: "10px",
          color: "var(--primary-text)",
          transition: "background-color 0.2s ease, color 0.2s ease",
          "&:hover": {
            backgroundColor: isDarkMode
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.05)",
          },
          "&:focus-visible": {
            outline: "2px solid var(--activeBG)",
          },
          ...sx,
        }}
      >
        {isDarkMode ? (
          <Brightness7Icon sx={{ fontSize: iconSize }} />
        ) : (
          <Brightness4Icon sx={{ fontSize: iconSize }} />
        )}
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggle;