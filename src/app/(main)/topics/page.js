"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { subjects } from "@/utils/dummydatas";
import CategoryPaper from "@/components/Header/HeaderCategoryPaper";
import RouteLandingLayout from "@/components/common/RouteLandingLayout";

export default function TopicsLandingPage() {
  return (
    <RouteLandingLayout
      title="کدوم مبحث ؟؟"
      description="برای مشاهده سرفصل‌ها و ویدیوهای آموزشی، یکی از مباحث زیر را انتخاب کنید:"
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
        {subjects.map((each) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={each.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              href={`/topics/${each.slug || each.name}`}
              style={{
                textDecoration: "none",
                display: "block",
                width: "100%",
                maxWidth: "340px",
              }}
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
    </RouteLandingLayout>
  );
}
