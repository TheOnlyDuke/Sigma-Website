"use client";
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";

export default function LeaderboardTablePreview() {
  const previewRows = [
    {
      rank: "۴",
      title: "جایگاه چهارم کشوری",
      university: "دانشگاه صنعتی شریف",
      topics: "انتگرال، مشتق",
      accuracy: "در انتظار ارزیابی",
      score: "---",
      status: "رزرو شده",
    },
    {
      rank: "۵",
      title: "جایگاه پنجم کشوری",
      university: "دانشگاه تهران",
      topics: "انتگرال، مشتق",
      accuracy: "در انتظار ارزیابی",
      score: "---",
      status: "رزرو شده",
    },
    {
      rank: "۶",
      title: "جایگاه ششم کشوری",
      university: "دانشگاه فردوسی مشهد",
      topics: "انتگرال",
      accuracy: "در انتظار ارزیابی",
      score: "---",
      status: "رزرو شده",
    },
    {
      rank: "۷",
      title: "جایگاه هفتم کشوری",
      university: "دانشگاه حکیم سبزواری",
      topics: "مشتق",
      accuracy: "در انتظار ارزیابی",
      score: "---",
      status: "رزرو شده",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "960px",
        mx: "auto",
        mb: { xs: 6, sm: 8, md: 10 },
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          borderRadius: { xs: "20px", sm: "24px" },
          border: "1px solid",
          borderColor: "var(--border)",
          backgroundColor: "var(--notActiveBG)",
          p: { xs: 2.5, sm: 4 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "IRANYekanX, sans-serif",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: 800,
                color: "var(--primary-text)",
              }}
            >
              نمای جدول رده‌بندی رقابتی (رتبه‌های ۴ تا ۷)
            </Typography>
            <Typography
              sx={{
                fontFamily: "IRANYekanX, sans-serif",
                fontSize: { xs: "12px", sm: "13px" },
                color: "var(--secondary-text)",
                mt: 0.3,
              }}
            >
              پیش‌نمایش ساختار ارزیابی هوشمند و تفکیک دانشگاهی شرکت‌کنندگان
            </Typography>
          </Box>

          <Chip
            icon={<LockOutlinedIcon sx={{ fontSize: "16px !important" }} />}
            label="فعال‌سازی در فاز دوم"
            size="small"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              backgroundColor: "rgba(70, 43, 239, 0.08)",
              color: "var(--activeBG)",
              border: "1px solid",
              borderColor: "rgba(70, 43, 239, 0.2)",
              borderRadius: "8px",
              py: 0.5,
            }}
          />
        </Box>

        {/* Table Container */}
        <TableContainer
          sx={{
            border: "1px solid",
            borderColor: "var(--border)",
            borderRadius: "14px",
            overflowX: "auto",
          }}
        >
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "var(--secondary-text)",
                    py: 1.8,
                    width: "70px",
                  }}
                >
                  رتبه
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "var(--secondary-text)",
                    py: 1.8,
                  }}
                >
                  دانشجو / دانشگاه
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "var(--secondary-text)",
                    py: 1.8,
                  }}
                >
                  سرفصل‌های فعال
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "var(--secondary-text)",
                    py: 1.8,
                  }}
                >
                  دقت پاسخ‌ها
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "IRANYekanX, sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "var(--secondary-text)",
                    py: 1.8,
                    width: "120px",
                  }}
                >
                  امتیاز نهایی
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {previewRows.map((row) => (
                <TableRow
                  key={row.rank}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      backgroundColor: "rgba(70, 43, 239, 0.02)",
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily: "IRANYekanX, sans-serif",
                      fontWeight: 900,
                      fontSize: "16px",
                      color: "var(--primary-text)",
                      py: 1.8,
                    }}
                  >
                    {row.rank}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      py: 1.8,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "8px",
                          backgroundColor: "rgba(70, 43, 239, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--activeBG)",
                        }}
                      >
                        <SchoolRoundedIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "IRANYekanX, sans-serif",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "var(--primary-text)",
                          }}
                        >
                          {row.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "IRANYekanX, sans-serif",
                            fontSize: "11px",
                            color: "var(--secondary-text)",
                          }}
                        >
                          {row.university}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily: "IRANYekanX, sans-serif",
                      fontSize: "12px",
                      color: "var(--secondary-text)",
                      py: 1.8,
                    }}
                  >
                    {row.topics}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      py: 1.8,
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        px: 1.5,
                        py: 0.4,
                        borderRadius: "6px",
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <SpeedRoundedIcon
                        sx={{ fontSize: 14, color: "var(--secondary-text)" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "IRANYekanX, sans-serif",
                          fontSize: "11px",
                          color: "var(--secondary-text)",
                          fontWeight: 500,
                        }}
                      >
                        {row.accuracy}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily: "IRANYekanX, sans-serif",
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "var(--primary-text)",
                      py: 1.8,
                    }}
                  >
                    {row.score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

