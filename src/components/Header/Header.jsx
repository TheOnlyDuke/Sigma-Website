"use client";
import React, { useState, useCallback, useEffect, useRef, memo } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggleButton";
import HeaderMenu from "./HeaderMenu";
import NavigationLink from "./NavigationLink";
import MobileDrawer from "./MobileDrawer";
import { useAuth } from "@/contexts/AuthContext";
import ResponsiveContainer from "../ResponsiveContainer";
import { HEADER_STYLES, NAVIGATION_ITEMS } from "./constants";
import { MenuIcon } from "./MenuIcon";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const appBarRef = useRef(null);
  const { isVisible } = useScrollVisibility("hero-section");
  const { USER_INFO, clearAuth } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isDesktop && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isDesktop, mobileOpen]);

  const handleMouseEnter = useCallback((menuId) => {
    setOpenMenu(menuId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpenMenu(null);
  }, []);

  const toggleMenu = useCallback((menuId) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
  }, []);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    if (!openMenu) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
      }
    };

    const handleClickOutside = (e) => {
      if (appBarRef.current && !appBarRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [openMenu]);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const handleLogout = useCallback(async () => {
    await clearAuth();
    router.push("/auth/login");
  }, [clearAuth, router]);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Dim page body below Header when dropdown is open, without dimming the Header/Navbar */}
      {openMenu && (
        <Box
          onClick={handleMouseLeave}
          aria-hidden="true"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(2px)",
            zIndex: 1090,
          }}
        />
      )}
      <AppBar
        ref={appBarRef}
        component="header"
        position="fixed"
        onMouseLeave={handleMouseLeave}
        sx={{
          backgroundColor: "var(--notActiveBG)",
          height: "fit-content",
          boxShadow: "none",
          borderBottom: "1px solid var(--border)",
          py: { xs: "10px", sm: "12px", md: "14px" },
          transition:
            "transform 0.3s ease-in-out, background-color 0.2s ease, border-color 0.2s ease",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          zIndex: 1100,
        }}
      >
        <ResponsiveContainer
          maxWidth="lg"
          sx={{
            px: { xs: "16px", sm: "32px", md: "48px", lg: "128px" },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "rtl",
              width: "100%",
              minHeight: { xs: "48px", sm: "52px" },
            }}
          >
            {/* Right side in RTL: Brand Logo & Desktop Navigation */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 2.5, md: 4, lg: 5 },
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="smallTitle"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "20px", md: "22px" },
                    color: "var(--primary-text)",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "var(--activeBG)" },
                  }}
                >
                  سیگما
                </Typography>
              </Link>

              {/* Desktop Navigation Links */}
              <Box
                component="nav"
                aria-label="منوی اصلی"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: { sm: 0.5, md: 1, lg: 1.5 },
                }}
              >
                {NAVIGATION_ITEMS.map(({ href, label, menuId }) => (
                  <NavigationLink
                    key={href}
                    href={href}
                    label={label}
                    menuId={menuId}
                    isOpen={openMenu === menuId}
                    isActive={
                      pathname === href ||
                      (href !== "/" && pathname?.startsWith(`${href}/`))
                    }
                    onMouseEnter={() => {
                      if (menuId) {
                        handleMouseEnter(menuId);
                      } else {
                        handleMouseLeave();
                      }
                    }}
                    onToggle={toggleMenu}
                    onClick={handleMouseLeave}
                  />
                ))}
              </Box>
            </Box>

            {/* Left side in RTL: Desktop Actions (Auth button + Theme toggle) */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: { sm: 1, md: 1.5 },
              }}
            >
              <Link
                href={USER_INFO ? "/dashboard" : "/auth"}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Box sx={HEADER_STYLES.signUpButton}>
                  {USER_INFO ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        direction: "rtl",
                      }}
                    >
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: "8px",
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src="/images/profile-sticker.png"
                          alt={USER_INFO?.user?.full_name || "کاربر"}
                          width={22}
                          height={22}
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "inherit",
                          fontSize: { sm: "13px", md: "14px" },
                          fontWeight: 600,
                          color: "#FFFFFF",
                          whiteSpace: "nowrap",
                          maxWidth: { sm: "100px", md: "140px", lg: "180px" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {USER_INFO?.user?.full_name}
                      </Typography>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "11px",
                          fontWeight: 600,
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          color: "#FFFFFF",
                          px: "7px",
                          py: "2px",
                          borderRadius: "6px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        داشبورد
                      </Box>
                    </Box>
                  ) : (
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ورود یا ثبت نام
                    </Typography>
                  )}
                </Box>
              </Link>
              <ThemeToggle size={42} iconSize={22} />
            </Box>

            {/* Left side in RTL: Mobile Actions (Mini auth + Theme toggle + Hamburger button) */}
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                alignItems: "center",
                gap: { xs: 0.8, sm: 1.2 },
              }}
            >
              {USER_INFO ? (
                <Link
                  href="/dashboard"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Box
                    sx={{
                      ...HEADER_STYLES.signUpButton,
                      minWidth: "auto",
                      height: "36px",
                      px: "10px",
                      gap: "6px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "6px",
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src="/images/profile-sticker.png"
                        alt={USER_INFO?.user?.full_name || "کاربر"}
                        width={18}
                        height={18}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "inherit",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                    >
                      داشبورد
                    </Typography>
                  </Box>
                </Link>
              ) : (
                <Link
                  href="/auth"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Box
                    sx={{
                      ...HEADER_STYLES.signUpButton,
                      minWidth: "auto",
                      height: "36px",
                      px: "12px",
                      borderRadius: "10px",
                      fontSize: "13px",
                    }}
                  >
                    ورود
                  </Box>
                </Link>
              )}
              <ThemeToggle size={36} iconSize={20} />
              <IconButton
                onClick={handleDrawerToggle}
                aria-label={mobileOpen ? "بستن منوی ناوبری" : "باز کردن منوی ناوبری"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  color: "var(--primary-text)",
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </ResponsiveContainer>

        {/* Desktop Dropdown Mega-Menu attached directly to AppBar */}
        {openMenu && (
          <HeaderMenu handleMouseLeave={handleMouseLeave} openMenu={openMenu} />
        )}
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        navigationItems={NAVIGATION_ITEMS}
        userInfo={USER_INFO}
        onLogout={handleLogout}
      />
    </Box>
  );
}

export default memo(Header);
