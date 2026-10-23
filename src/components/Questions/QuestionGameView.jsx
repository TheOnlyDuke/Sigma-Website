"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Alert, Backdrop, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import QuestionOptions from "@/components/mainPage/QestionsBank/QestionOptions";
import QuestionHeader from "./QuestionHeader";
import QuestionCompletionView from "./QuestionCompletionView";
import { apiClient } from "@/utils/api";
import { getQuestionsByTopic } from "@/utils/dummydatas";

const STAGE_TITLES = [
  "داریم :",
  "خب خب داری درست پیش میری الان داریم:",
  "ببینیم چی داری",
  "بعدی!",
];

const MixedContent = ({ content }) => {
  if (!content) return null;
  const latexStartIndex = content.indexOf("\\");
  if (latexStartIndex === -1) {
    return (
      <Box sx={{ direction: "rtl", whiteSpace: "pre-wrap", mt: 1 }}>
        <Typography variant="smallTitle">{content}</Typography>
      </Box>
    );
  }
  const textPart = content.substring(0, latexStartIndex);
  return (
    <Box sx={{ direction: "rtl", whiteSpace: "pre-wrap", mt: 1 }}>
      <Typography variant="smallTitle">{textPart}</Typography>
    </Box>
  );
};

export default function QuestionGameView({ topic }) {
  const topicSlug = topic?.slug || topic?.id || "integral";
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stageNumber, setStageNumber] = useState(1);
  const [questionLatex, setQuestionLatex] = useState("");
  const [description, setDescription] = useState("");
  const [optionTitles, setOptionTitles] = useState(["", "", "", ""]);
  const [optionDescriptions, setOptionDescriptions] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAllFinished, setIsAllFinished] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [error, setError] = useState("");

  const currentQuestion = questions[currentIndex] || null;

  // Initialize question stage state
  const loadStageData = useCallback((question, stageNum) => {
    if (!question || !question.stages) return;
    const stageIdx = stageNum - 1;
    const stage = question.stages[stageIdx];
    if (!stage) return;

    if (stageNum === 1) {
      setQuestionLatex(question.question_latex || "");
      setDescription(question.description || "");
    }

    setOptionTitles([
      stage.option1_latex || "",
      stage.option2_latex || "",
      stage.option3_latex || "",
      stage.option4_latex || "",
    ]);

    setOptionDescriptions([
      stage.option1_description || "",
      stage.option2_description || "",
      stage.option3_description || "",
      stage.option4_description || "",
    ]);
  }, []);

  // Fetch questions for topic on mount or topic change
  useEffect(() => {
    setIsLoading(true);
    setCurrentIndex(0);
    setStageNumber(1);
    setIsCompleted(false);
    setIsAllFinished(false);
    setError("");

    const loadQuestions = async () => {
      try {
        const localQuestions = getQuestionsByTopic(topicSlug);
        setQuestions(localQuestions);
        if (localQuestions.length > 0) {
          loadStageData(localQuestions[0], 1);
        }
      } catch (err) {
        setError("خطا در بارگذاری سوالات");
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [topicSlug, loadStageData]);

  const handleSubmit = useCallback(
    async (option) => {
      if (!currentQuestion) return;
      setError("");

      try {
        const data = await apiClient.submitAnswer(
          currentQuestion.id,
          stageNumber,
          option
        );

        if (data.message === "final-corect") {
          setIsCompleted(true);
          if (currentIndex === questions.length - 1) {
            setIsAllFinished(true);
          }
        } else if (data.message === "correct") {
          const currentStageIdx = stageNumber - 1;
          const chosenLatex =
            currentQuestion.stages[currentStageIdx][`option${option}_latex`] ||
            "";
          setQuestionLatex(chosenLatex);
          const nextStage = stageNumber + 1;
          setStageNumber(nextStage);
          setDescription("");
          loadStageData(currentQuestion, nextStage);
        } else {
          const reason =
            optionDescriptions[option - 1] || data.error || "پاسخ اشتباه است";
          setAlertMessage(reason);
          setShowAlert(true);
        }
      } catch (err) {
        const reason =
          optionDescriptions[option - 1] || "پاسخ نادرست است، مجدداً تلاش کنید";
        setAlertMessage(reason);
        setShowAlert(true);
      }
    },
    [
      currentQuestion,
      stageNumber,
      currentIndex,
      questions.length,
      optionDescriptions,
      loadStageData,
    ]
  );

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setStageNumber(1);
      setIsCompleted(false);
      loadStageData(questions[nextIdx], 1);
    } else {
      setIsAllFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setStageNumber(1);
    setIsCompleted(false);
    setIsAllFinished(false);
    if (questions.length > 0) {
      loadStageData(questions[0], 1);
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={3}
      component="main"
      sx={{
        flex: 1,
        maxWidth: "1200px",
        margin: "175px auto 40px auto",
        width: "100%",
        border: "1px solid var(--border)",
        p: { xs: "20px", sm: "35px" },
        borderRadius: "20px",
        bgcolor: "background.paper",
        boxSizing: "border-box",
        direction: "rtl",
      }}
    >
      {/* Header Bar */}
      <Grid size={{ xs: 12 }}>
        <QuestionHeader
          topicTitle={topic?.title || topicSlug}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
      </Grid>

      {/* Error Alert Backdrop */}
      <Backdrop
        open={showAlert}
        onClick={() => setShowAlert(false)}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            minWidth: 300,
            maxWidth: "90vw",
            width: 520,
            p: 1,
            direction: "rtl",
          }}
        >
          <Alert
            severity="error"
            onClose={() => setShowAlert(false)}
            sx={{
              fontSize: "1rem",
              p: 2.5,
              borderRadius: "12px",
              boxShadow: 4,
              fontFamily: "inherit",
              lineHeight: 1.8,
            }}
          >
            {alertMessage}
          </Alert>
        </Box>
      </Backdrop>

      {/* Main Gameplay / Completion Render */}
      {isCompleted || isAllFinished ? (
        <Grid size={{ xs: 12 }}>
          <QuestionCompletionView
            isAllFinished={isAllFinished}
            topicTitle={topic?.title || topicSlug}
            onNextQuestion={handleNextQuestion}
            onRestart={handleRestart}
            hasNext={currentIndex < questions.length - 1}
          />
        </Grid>
      ) : (
        <>
          {/* Question & Stage Info */}
          <Grid size={{ xs: 12 }} sx={{ position: "relative", minHeight: "130px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "var(--secondary-text)",
                  fontWeight: 600,
                }}
              >
                {STAGE_TITLES[(stageNumber - 1) % STAGE_TITLES.length]}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  bgcolor: "rgba(70, 43, 239, 0.08)",
                  color: "var(--activeBG)",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "12px",
                }}
              >
                مرحله: {stageNumber}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              component="div"
              sx={{
                direction: "ltr",
                textAlign: "center",
                my: 2,
                "& *": { direction: "inherit" },
              }}
            >
              {questionLatex && <BlockMath math={questionLatex} />}
              {description && <MixedContent content={description} />}
            </Typography>
          </Grid>

          {error && (
            <Grid size={{ xs: 12 }}>
              <Typography variant="body2" color="error" textAlign="center">
                {error}
              </Typography>
            </Grid>
          )}

          {/* 4 Interactive Options */}
          <Grid size={{ xs: 12 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {optionTitles.map((latex, index) => (
                <QuestionOptions
                  key={index + 1}
                  option={index + 1}
                  latex={latex}
                  handleSubmit={handleSubmit}
                />
              ))}
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
}
