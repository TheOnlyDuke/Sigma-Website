"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import CategoryPaper from "./HeaderCategoryPaper";
import HeaderBlogsPaper from "./HeaderBlogsPaper";
import { subjects, blogs } from "@/utils/dummydatas";

export default function HeaderMenu({ handleMouseLeave, openMenu }) {
  return (
    <Box
      id={openMenu === "subjects" ? "subjects-menu" : "blogs-menu"}
      component="section"
      role="region"
      aria-label={openMenu === "subjects" ? "منوی مباحث" : "منوی وبلاگ"}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        backgroundColor: "var(--notActiveBG)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        py: 3,
        px: { xs: 2, md: 4 },
        zIndex: 1001,
        boxShadow: "0 16px 36px rgba(0, 0, 0, 0.12)",
        direction: "rtl",
        animation: "fadeInMenu 0.2s ease-out",
        // Invisible bridge to guarantee pointer continuity between AppBar and dropdown
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-12px",
          left: 0,
          right: 0,
          height: "12px",
          display: "block",
        },
        "@keyframes fadeInMenu": {
          from: { opacity: 0, transform: "translateY(-6px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: "16px", sm: "32px", md: "48px", lg: "64px" },
          }}
        >
          {openMenu === "subjects" ? (
            <Grid
              container
              spacing={2.5}
              sx={{
                width: "100%",
                margin: "auto",
                direction: "rtl",
                justifyContent: "flex-start",
              }}
            >
              {subjects.map((each) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={each.id}>
                  <Link
                    href={`/topics/${each.slug || each.name}`}
                    onClick={handleMouseLeave}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <CategoryPaper
                      title={each.name}
                      difficulty={
                        each.difficulty === 1
                          ? "مبتدی"
                          : each.difficulty === 2
                            ? "متوسط"
                            : "دشوار"
                      }
                      numOfEpisodes={each.numOfEp}
                      icon={each.icon}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          ) : (
            <HeaderBlogsPaper items={blogs} onClick={handleMouseLeave} />
          )}
        </Container>
      </Box>
  );
}
