"use client";
import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { blogs } from "@/utils/dummydatas";
import HeaderBlogsItem from "@/components/Header/HeaderBlogsGridItem";
import RouteLandingLayout from "@/components/common/RouteLandingLayout";

export default function BlogLandingPage() {
  return (
    <RouteLandingLayout
      title="آخه کدوم بلاگ ؟؟"
      description="برای مطالعه مقالات، راهنماها و جزوات درسی، یکی از بخش‌های زیر را انتخاب کنید:"
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {blogs.map((item) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={item.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "360px",
                height: { xs: "auto", sm: "140px" },
              }}
            >
              <HeaderBlogsItem
                icon={item.icon}
                title={item.title}
                slug={item.slug}
                href={item.href}
                description={item.description}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </RouteLandingLayout>
  );
}
