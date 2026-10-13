"use client";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useState, useCallback, memo } from "react";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggleButton";
import HeaderMenu from "./HeaderMenu";
import { useAuth } from "@/contexts/AuthContext";
import ResponsiveContainer from "../ResponsiveContainer";
import { HEADER_STYLES, NAVIGATION_ITEMS } from "./constants";
import { MenuIcon } from "./MenuIcon";

const NavigationLink = memo(({ href, label, onMouseEnter, onClick }) => (
  <Link href={href} onMouseEnter={onMouseEnter} onClick={onClick}>
    {label}
  </Link>
));
NavigationLink.displayName = "NavigationLink";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const { isVisible } = useScrollVisibility("hero-section");
  const { USER_INFO } = useAuth();

  const handleMouseEnter = useCallback((menuId) => {
    setOpenMenu(menuId);
    document.body.style.overflow = "hidden";
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpenMenu(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "var(--notActiveBG)",
          height: "fit-content",
          boxShadow: "none",
          py: "15px",
          transition: "transform 0.3s ease-in-out",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <ResponsiveContainer maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              ...HEADER_STYLES.flex,
              direction: "rtl",
              mx: { xs: "25px", lgp: "0" },
            }}
          >
            <Box
              sx={{ ...HEADER_STYLES.flex, width: "25%", alignItems: "center" }}
            >
              <Link href="/" style={{ marginLeft: "15px" }}>
                <Typography variant="smallTitle">سیگما</Typography>
              </Link>

              <Box
                sx={{
                  ...HEADER_STYLES.flex,
                  width: "70%",
                  color: "var(--secondary-text)",
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {NAVIGATION_ITEMS.map(({ href, label, menuId }) => (
                  <NavigationLink
                    key={href}
                    href={href}
                    label={label}
                    onMouseEnter={() => menuId && handleMouseEnter(menuId)}
                    onClick={handleMouseLeave}
                  />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                ...HEADER_STYLES.flex,
                alignItems: "center",
                display: { xs: "none", sm: "flex" },
                gap: "10px",
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
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {USER_INFO?.user?.full_name}
                      </Typography>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          color: "#FFFFFF",
                          px: "8px",
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
              <ThemeToggle />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                alignItems: "center",
                gap: 1.5,
              }}
            >
              {USER_INFO && (
                <Link
                  href="/dashboard"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Box
                    sx={{
                      ...HEADER_STYLES.signUpButton,
                      minWidth: "auto",
                      height: "36px",
                      px: "12px",
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
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                      }}
                    >
                      داشبورد
                    </Typography>
                  </Box>
                </Link>
              )}
              <ThemeToggle />
              <MenuIcon />
            </Box>
          </Toolbar>
        </ResponsiveContainer>
      </AppBar>

      {openMenu && (
        <HeaderMenu handleMouseLeave={handleMouseLeave} openMenu={openMenu} />
      )}
    </div>
  );
}

export default memo(Header);
