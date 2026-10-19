"use client";
import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import { subjects, blogs } from "@/utils/dummydatas";
import DrawerSubmenu from "./DrawerSubmenu";

const NAV_ICONS = {
  "/": <HomeOutlinedIcon sx={{ fontSize: 22 }} />,
  "/topics": <MenuBookOutlinedIcon sx={{ fontSize: 22 }} />,
  "/learning": <MenuBookOutlinedIcon sx={{ fontSize: 22 }} />,
  "/blog": <ArticleOutlinedIcon sx={{ fontSize: 22 }} />,
  "/blogs": <ArticleOutlinedIcon sx={{ fontSize: 22 }} />,
  "/leaderboard": <EmojiEventsOutlinedIcon sx={{ fontSize: 22 }} />,
  "/questions": <QuizOutlinedIcon sx={{ fontSize: 22 }} />,
  "/about": <InfoOutlinedIcon sx={{ fontSize: 22 }} />,
};

export default function DrawerNavigationList({
  navigationItems = [],
  expandedMenus = {},
  onToggleMenu,
  onClose,
  pathname,
}) {
  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <Box
      component="nav"
      aria-label="پیوندهای منو"
      sx={{
        flex: 1,
        overflowY: "auto",
        px: 1.5,
        py: 2,
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "var(--border)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
      }}
    >
      <List disablePadding>
        {/* Home */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <Link
            href="/"
            onClick={onClose}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <ListItemButton
              selected={isLinkActive("/")}
              sx={{
                borderRadius: "10px",
                py: 1.2,
                px: 1.5,
                color: isLinkActive("/") ? "var(--activeBG)" : "var(--primary-text)",
                bgcolor: isLinkActive("/") ? "rgba(70, 43, 239, 0.08)" : "transparent",
                "&:hover": { bgcolor: "rgba(70, 43, 239, 0.05)" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color: isLinkActive("/") ? "var(--activeBG)" : "var(--secondary-text)",
                }}
              >
                {NAV_ICONS["/"]}
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: isLinkActive("/") ? 700 : 500,
                }}
              >
                صفحه اصلی
              </Typography>
            </ListItemButton>
          </Link>
        </ListItem>

        {/* Dynamic Navigation Items */}
        {navigationItems.map(({ href, label, menuId }) => {
          const active = isLinkActive(href);
          const icon = NAV_ICONS[href] || <MenuBookOutlinedIcon sx={{ fontSize: 22 }} />;
          const hasSubmenu = Boolean(menuId);
          const isExpanded = Boolean(menuId && expandedMenus[menuId]);

          return (
            <React.Fragment key={href}>
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                {hasSubmenu ? (
                  <ListItemButton
                    onClick={() => onToggleMenu(menuId)}
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-submenu-${menuId}`}
                    sx={{
                      py: 1.2,
                      px: 1.5,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      bgcolor: isExpanded
                        ? "rgba(70, 43, 239, 0.08)"
                        : active
                          ? "rgba(70, 43, 239, 0.04)"
                          : "transparent",
                      color: active || isExpanded ? "var(--activeBG)" : "var(--primary-text)",
                      "&:hover": { bgcolor: "rgba(70, 43, 239, 0.08)" },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: active || isExpanded ? "var(--activeBG)" : "var(--secondary-text)",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontFamily: "inherit",
                          fontSize: "15px",
                          fontWeight: active || isExpanded ? 700 : 500,
                          color: "inherit",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: isExpanded ? "var(--activeBG)" : "var(--secondary-text)",
                      }}
                    >
                      {isExpanded ? (
                        <ExpandLessIcon sx={{ fontSize: 20 }} />
                      ) : (
                        <ExpandMoreIcon sx={{ fontSize: 20 }} />
                      )}
                    </Box>
                  </ListItemButton>
                ) : (
                  <Link
                    href={href}
                    onClick={onClose}
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <ListItemButton
                      selected={active}
                      sx={{
                        py: 1.2,
                        px: 1.5,
                        borderRadius: "10px",
                        color: active ? "var(--activeBG)" : "var(--primary-text)",
                        bgcolor: active ? "rgba(70, 43, 239, 0.08)" : "transparent",
                        "&:hover": { bgcolor: "rgba(70, 43, 239, 0.05)" },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: active ? "var(--activeBG)" : "var(--secondary-text)",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontFamily: "inherit",
                          fontSize: "15px",
                          fontWeight: active ? 700 : 500,
                        }}
                      >
                        {label}
                      </Typography>
                    </ListItemButton>
                  </Link>
                )}
              </ListItem>

              {menuId === "subjects" && (
                <DrawerSubmenu
                  id="mobile-submenu-subjects"
                  open={isExpanded}
                  items={subjects}
                  type="subjects"
                  onClose={onClose}
                />
              )}

              {menuId === "blogs" && (
                <DrawerSubmenu
                  id="mobile-submenu-blogs"
                  open={isExpanded}
                  items={blogs}
                  type="blogs"
                  onClose={onClose}
                />
              )}
            </React.Fragment>
          );
        })}

        <Divider sx={{ my: 1.5, borderColor: "var(--border)" }} />

        {/* Secondary Links */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <Link
            href="/questions"
            onClick={onClose}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <ListItemButton
              selected={isLinkActive("/questions")}
              sx={{
                borderRadius: "10px",
                py: 1.2,
                px: 1.5,
                color: isLinkActive("/questions") ? "var(--activeBG)" : "var(--primary-text)",
                bgcolor: isLinkActive("/questions") ? "rgba(70, 43, 239, 0.08)" : "transparent",
                "&:hover": { bgcolor: "rgba(70, 43, 239, 0.05)" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color: isLinkActive("/questions") ? "var(--activeBG)" : "var(--secondary-text)",
                }}
              >
                {NAV_ICONS["/questions"]}
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: isLinkActive("/questions") ? 700 : 500,
                }}
              >
                بانک سوالات
              </Typography>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <Link
            href="/about"
            onClick={onClose}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <ListItemButton
              selected={isLinkActive("/about")}
              sx={{
                borderRadius: "10px",
                py: 1.2,
                px: 1.5,
                color: isLinkActive("/about") ? "var(--activeBG)" : "var(--primary-text)",
                bgcolor: isLinkActive("/about") ? "rgba(70, 43, 239, 0.08)" : "transparent",
                "&:hover": { bgcolor: "rgba(70, 43, 239, 0.05)" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color: isLinkActive("/about") ? "var(--activeBG)" : "var(--secondary-text)",
                }}
              >
                {NAV_ICONS["/about"]}
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: isLinkActive("/about") ? 700 : 500,
                }}
              >
                درباره ما
              </Typography>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
