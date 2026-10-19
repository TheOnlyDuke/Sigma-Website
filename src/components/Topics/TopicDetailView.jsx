"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  LearningVideoCard,
  LearningPagination,
  ProfessorNotes,
} from "@/components/mainPage/Learning";

export default function TopicDetailView({ topic }) {
  const episodes = topic?.episodes || [];
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  useEffect(() => {
    setCurrentEpisodeIndex(0);
  }, [topic?.id, topic?.slug]);

  const currentEpisode = episodes[currentEpisodeIndex] || episodes[0];

  const handleEpisodeChange = useCallback(
    (chapterNum) => {
      const targetIndex = chapterNum - 1;
      if (targetIndex >= 0 && targetIndex < episodes.length) {
        setCurrentEpisodeIndex(targetIndex);
      }
    },
    [episodes.length]
  );

  const topicTitle = topic?.title || topic?.name || "";

  return (
    <Container
      component="main"
      maxWidth="lg"
      disableGutters
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: "125px",
        marginBottom: "150px",
        px: {
          xs: "32px",
          sm: "48px",
          md: "64px",
          lg: "128px",
          lgp: "128px",
          xl: "128px",
          xlp: "128px",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            textAlign: "right",
            dir: "rtl",
            mb: { xs: "24px", sm: "32px" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "IRANYekanX, sans-serif",
              fontSize: { xs: "28px", sm: "38px", md: "52px" },
              fontWeight: 700,
              lineHeight: "1.3",
              letterSpacing: "-0.5pt",
              color: "var(--primary-text)",
              direction: "rtl",
            }}
          >
            بخش : {topicTitle}
            {currentEpisode?.title ? ` - ${currentEpisode.title}` : ""}
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ width: "100%", alignItems: "flex-start" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              order: { xs: 1, md: 2 },
              direction: "rtl",
              textAlign: "right",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "574px" }}>
              <Typography
                sx={{
                  fontFamily: "Inter, IRANYekanX, sans-serif",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  color: "var(--secondary-text)",
                  whiteSpace: "pre-line",
                  textAlign: "right",
                  direction: "rtl",
                }}
              >
                {currentEpisode?.description || ""}
              </Typography>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              order: { xs: 2, md: 1 },
              gap: "20px",
            }}
          >
            <LearningVideoCard
              title={`${topicTitle} - ${currentEpisode?.title || ""}`}
              videoSrc={currentEpisode?.videoUrl || currentEpisode?.videoSrc}
            />

            {episodes.length > 0 && (
              <LearningPagination
                chapters={episodes}
                currentChapter={currentEpisodeIndex + 1}
                onChapterChange={handleEpisodeChange}
              />
            )}
          </Grid>
        </Grid>

        {topic?.lectures && topic.lectures.length > 0 && (
          <Box sx={{ width: "100%", mt: { xs: "48px", sm: "64px", md: "80px" } }}>
            <ProfessorNotes notes={topic.lectures} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
