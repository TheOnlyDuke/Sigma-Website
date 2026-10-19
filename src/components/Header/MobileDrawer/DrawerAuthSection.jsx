"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Link from "next/link";
import Image from "next/image";

export default function DrawerAuthSection({ userInfo, onClose }) {
  return (
    <Box
      sx={{
        p: 2.5,
        bgcolor: "background.paper",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {userInfo ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              direction: "rtl",
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                border: "1px solid var(--border)",
                bgcolor: "var(--notActiveBG)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/profile-sticker.png"
                alt={userInfo?.user?.full_name || "کاربر"}
                width={34}
                height={34}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--primary-text)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {userInfo?.user?.full_name || "کاربر سیگما"}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "12px",
                  color: "var(--secondary-text)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  mt: 0.2,
                }}
              >
                {userInfo?.user?.university || "دانشجوی فعال"}
              </Typography>
            </Box>
          </Box>

          <Link
            href="/dashboard"
            onClick={onClose}
            style={{ textDecoration: "none", display: "block", marginTop: "12px" }}
          >
            <Button
              variant="contained"
              fullWidth
              startIcon={<DashboardOutlinedIcon sx={{ ml: 1, mr: -0.5 }} />}
              sx={{
                height: "42px",
                borderRadius: "10px",
                bgcolor: "var(--activeBG)",
                color: "#FFFFFF",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "var(--blackBG)",
                  boxShadow: "none",
                },
              }}
            >
              مشاهده داشبورد کاربری
            </Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "13px",
              color: "var(--secondary-text)",
              lineHeight: 1.6,
              mb: 1.5,
            }}
          >
            برای دسترسی به تمرین‌ها، دوره‌ها و پیگیری پیشرفت تحصیلی خود وارد شوید:
          </Typography>
          <Link
            href="/auth"
            onClick={onClose}
            style={{ textDecoration: "none", display: "block" }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: "44px",
                borderRadius: "10px",
                bgcolor: "var(--activeBG)",
                color: "#FFFFFF",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "var(--blackBG)",
                  boxShadow: "none",
                },
              }}
            >
              ورود یا ثبت‌نام
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
