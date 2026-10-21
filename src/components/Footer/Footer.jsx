import React from "react";
import { Box, Divider } from "@mui/material";
import FooterContactMenu from "./FooterContactMenu";
import FooterSideMenues from "./FooterSideMenues";
import FooterBottomLine from "./FooterBottomLine";
import ResponsiveContainer from "../ResponsiveContainer";

const BOTTOM_MENU = [
  ["اموزش نحوه استفاده", "/howto"],
  ["حریم خصوصی", "/privacy&rules#privacy"],
  ["قوانین و شرایط", "/privacy&rules#rules"],
];

export default function Footer() {
  return (
    <Box
      component="footer"
      id="site-footer"
      sx={{
        width: "100%",
        backgroundColor: "var(--footerBG)",
        direction: "rtl",
        py: {
          xs: "40px",
          sm: "60px",
          md: "70px",
        },
        px: {
          xs: "16px",
          sm: "32px",
          md: "48px",
          lg: 0,
        },
        color: "var(--secondary-text)",
        " a.footer-nav-link": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            right: "-12px",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "background-color 0.2s ease",
          },
          "&:hover": {
            color: "var(--activeText)",
            "&::before": {
              backgroundColor: "var(--activeText)",
            },
          },
        },
      }}
    >
      <ResponsiveContainer
        maxWidth={1140}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: "32px",
            sm: "60px",
            md: "70px",
            lg: "80px",
          },
        }}
      >
        {/* Main upper content row: Contact info on right, Nav menus on left */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "flex-start" },
            gap: { xs: "48px", sm: "32px", md: "48px" },
          }}
        >
          <FooterContactMenu />
          <FooterSideMenues menu={BOTTOM_MENU} />
        </Box>

        {/* Subtle horizontal divider on mobile matching Figma 5:9683 */}
        <Divider
          component="hr"
          sx={{
            display: { xs: "block", sm: "none" },
            borderColor: "rgba(125, 125, 125, 0.35)",
            my: 0,
          }}
        />

        {/* Bottom bar: Copyright + Desktop legal links */}
        <FooterBottomLine menu={BOTTOM_MENU} />
      </ResponsiveContainer>
    </Box>
  );
}

