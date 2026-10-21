import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function FooterBottomLine({ menu }) {
  return (
    <Box
      id="footer-bottom-bar"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: "16px", sm: "24px" },
      }}
    >
      <Box
        id="footer-copyright"
        sx={{
          textAlign: { xs: "center", sm: "right" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {/* Mobile: 2-line centered copyright matching Figma 5:9683 */}
        <Typography
          component="p"
          sx={{
            display: { xs: "block", sm: "none" },
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "var(--secondary-text)",
            textAlign: "center",
            maxWidth: "280px",
            mx: "auto",
          }}
        >
          ©️ 1404 - تمامی حقوق این وبسایت
          <br />
          متعلق به گروه سیگما می‌باشد.
        </Typography>

        {/* Desktop/Tablet: single-line copyright matching Figma 5:7658 */}
        <Typography
          component="p"
          sx={{
            display: { xs: "none", sm: "block" },
            fontFamily: "IRANYekanX, sans-serif",
            fontSize: { sm: "14px", md: "15px" },
            lineHeight: 1.8,
            color: "var(--secondary-text)",
            whiteSpace: "nowrap",
          }}
        >
          ©️ 1404 - تمامی حقوق این وبسایت متعلق به گروه سیگما می‌باشد.
        </Typography>
      </Box>

      {/* Desktop/Tablet links (hidden on mobile per Figma) */}
      <Box
        id="footer-links-bottom"
        component="nav"
        aria-label="پیوندهای حقوقی و راهنما"
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          alignItems: "center",
          justifyContent: "space-between",
          width: { sm: "340px", md: "370px", lg: "390px" },
          flexShrink: 0,
          flexWrap: "nowrap",
        }}
      >
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item[1]}
            style={{
              textDecoration: "none",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "IRANYekanX, sans-serif",
                fontSize: { sm: "14px", md: "15px" },
                lineHeight: 1.8,
                color: "var(--secondary-text)",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "var(--activeText)",
                },
              }}
            >
              {item[0]}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

