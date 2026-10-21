import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function FooterMenu({ menuData, index, order, isMobileOnly = false }) {
  const menuId = `footer-menu-${index}`;

  return (
    <Box
      sx={{
        order: order || index,
        minWidth: 0,
        display: {
          xs: "block",
          sm: isMobileOnly ? "none" : "block",
        },
      }}
    >
      <Typography
        id={menuId}
        component="h3"
        sx={{
          fontFamily: "IRANYekanX, sans-serif",
          fontSize: { xs: "17px", sm: "18px", md: "20px" },
          fontWeight: { xs: 700, sm: 600 },
          color: "var(--activeText)",
          mb: { xs: "16px", sm: "22px", md: "28px" },
          lineHeight: "1.8",
        }}
      >
        {menuData.title}
      </Typography>

      <Box
        component="ul"
        aria-labelledby={menuId}
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "flex",
          flexDirection: "column",
          gap: { xs: "10px", sm: "12px", md: "16px" },
        }}
      >
        {menuData.items.map((item, idx) => (
          <Box
            component="li"
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              href={item[1]}
              style={{
                position: "relative",
                display: "inline-block",
                cursor: "pointer",
                color: "var(--secondary-text)",
                textDecoration: "none",
                lineHeight: "1.8",
                transition: "color 0.2s ease",
              }}
              className="footer-nav-link"
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "IRANYekanX, sans-serif",
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px" },
                  lineHeight: "1.8",
                  color: "inherit",
                }}
              >
                {item[0]}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

