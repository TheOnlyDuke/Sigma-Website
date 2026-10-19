"use client";
import React, { memo } from "react";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const NavigationLink = memo(
  ({
    href,
    label,
    menuId,
    isOpen,
    isActive,
    onMouseEnter,
    onToggle,
    onClick,
  }) => {
    const linkContent = (
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          px: { sm: "10px", md: "14px" },
          py: "7px",
          borderRadius: "10px",
          color: isActive
            ? "var(--activeBG)"
            : isOpen
              ? "var(--primary-text)"
              : "var(--secondary-text)",
          bgcolor: isOpen ? "rgba(70, 43, 239, 0.08)" : "transparent",
          fontFamily: "IRANYekanX, sans-serif",
          fontSize: { sm: "14px", md: "15px" },
          fontWeight: isActive ? 700 : 500,
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: "var(--primary-text)",
            bgcolor: "rgba(0, 0, 0, 0.04)",
          },
          "&:focus-visible": {
            outline: "2px solid var(--activeBG)",
          },
        }}
      >
        <span>{label}</span>
        {menuId && (
          <ExpandMoreIcon
            sx={{
              fontSize: 18,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              color: "inherit",
              opacity: 0.7,
            }}
          />
        )}
      </Box>
    );

    // If it has a submenu, render an accessible button trigger instead of a link
    if (menuId) {
      return (
        <Box
          component="button"
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={menuId === "subjects" ? "subjects-menu" : "blogs-menu"}
          onMouseEnter={onMouseEnter}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onToggle) onToggle(menuId);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (onToggle) onToggle(menuId);
            }
          }}
          sx={{
            background: "none",
            border: "none",
            outline: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            textAlign: "inherit",
            display: "inline-flex",
          }}
        >
          {linkContent}
        </Box>
      );
    }

    return (
      <Link
        href={href}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        style={{ textDecoration: "none", display: "inline-flex" }}
      >
        {linkContent}
      </Link>
    );
  }
);

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
