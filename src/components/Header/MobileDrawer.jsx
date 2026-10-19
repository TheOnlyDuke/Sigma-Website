"use client";
import React, { useState, memo } from "react";
import { Drawer } from "@mui/material";
import { usePathname } from "next/navigation";
import DrawerHeader from "./MobileDrawer/DrawerHeader";
import DrawerAuthSection from "./MobileDrawer/DrawerAuthSection";
import DrawerNavigationList from "./MobileDrawer/DrawerNavigationList";
import DrawerFooter from "./MobileDrawer/DrawerFooter";

function MobileDrawer({
  open,
  onClose,
  navigationItems,
  userInfo,
  onLogout,
}) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState({
    subjects: false,
    blogs: false,
  });

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      slotProps={{
        paper: {
          id: "mobile-navigation-drawer",
          role: "dialog",
          "aria-label": "منوی ناوبری اصلی",
          sx: {
            width: { xs: "84vw", sm: "360px" },
            maxWidth: "360px",
            backgroundColor: "var(--notActiveBG)",
            color: "var(--primary-text)",
            direction: "rtl",
            p: 0,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            borderLeft: "1px solid var(--border)",
            fontFamily: "IRANYekanX, sans-serif",
            userSelect: "none",
          },
        },
      }}
    >
      <DrawerHeader onClose={onClose} />
      <DrawerAuthSection userInfo={userInfo} onClose={onClose} />
      <DrawerNavigationList
        navigationItems={navigationItems}
        expandedMenus={expandedMenus}
        onToggleMenu={toggleMenu}
        onClose={onClose}
        pathname={pathname}
      />
      <DrawerFooter userInfo={userInfo} onLogout={onLogout} onClose={onClose} />
    </Drawer>
  );
}

export default memo(MobileDrawer);
