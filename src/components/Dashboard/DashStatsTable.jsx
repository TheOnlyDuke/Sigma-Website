"use client";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
import { statsTableHeaders } from "@/utils/dummydatas";
import DashActionIcons from "./DashActionIcons";

export default function DashStatsTable({ data = [] }) {
  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        bgcolor: "background.paper",
        p: { xs: 2.5, md: "36px 40px" },
        boxSizing: "border-box",
        direction: "rtl",
      }}
    >
      {/* Desktop table view */}
      <Box sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
        <TableContainer sx={{ boxShadow: 0, bgcolor: "transparent" }}>
          <Table sx={{ border: 0 }}>
            <TableHead>
              <TableRow sx={{ border: 0 }}>
                {statsTableHeaders.map((header, index) => {
                  const isLast = index === statsTableHeaders.length - 1;
                  return (
                    <TableCell
                      key={header}
                      align={isLast ? "left" : "right"}
                      sx={{
                        border: 0,
                        color: "var(--secondary-text)",
                        fontSize: "15px",
                        fontWeight: 500,
                        fontFamily: "inherit",
                        pb: 3,
                        px: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {header}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    border: 0,
                    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.02)" },
                  }}
                >
                  <TableCell
                    align="right"
                    sx={{
                      border: 0,
                      py: 2,
                      px: 1,
                      color: "var(--primary-text)",
                      fontSize: "16px",
                      fontWeight: 700,
                      fontFamily: "inherit",
                    }}
                  >
                    {row.subject}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      border: 0,
                      py: 2,
                      px: 1,
                      color: "var(--primary-text)",
                      fontSize: "15px",
                      fontWeight: 400,
                      fontFamily: "inherit",
                    }}
                  >
                    {row.date} - {row.time}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      border: 0,
                      py: 2,
                      px: 1,
                      color: "var(--primary-text)",
                      fontSize: "15px",
                      fontWeight: 600,
                      fontFamily: "inherit",
                    }}
                  >
                    {row.score} امتیاز
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      border: 0,
                      py: 2,
                      px: 1,
                      color: "var(--primary-text)",
                      fontSize: "15px",
                      fontWeight: 400,
                      fontFamily: "inherit",
                    }}
                  >
                    {row.correct} درست و {row.incorrect} نادرست
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: 0,
                      py: 2,
                      px: 1,
                    }}
                  >
                    <DashActionIcons />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Mobile row view */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: 2.5,
          width: "100%",
        }}
      >
        {data.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--primary-text)",
                fontFamily: "inherit",
                textAlign: "right",
              }}
            >
              {row.subject}
            </Typography>
            <DashActionIcons />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
