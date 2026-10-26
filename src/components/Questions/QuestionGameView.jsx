"use client";
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { motion, AnimatePresence } from "framer-motion";
import QuestionSidebar from "./QuestionSidebar";
import QuestionStageProgress from "./QuestionStageProgress";
import QuestionPromptCard from "./QuestionPromptCard";
import QuestionOptionsGrid from "./QuestionOptionsGrid";
import QuestionActionBar from "./QuestionActionBar";
import QuestionExplanationModal from "./QuestionExplanationModal";
import QuestionCompletionView from "./QuestionCompletionView";
import { apiClient } from "@/utils/api";
import { getQuestionsByTopic } from "@/utils/dummydatas";

const toPersianDigits = (num) =>
  String(num).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

export default function QuestionGameView({ topic }) {
  const topicSlug = topic?.slug || topic?.id || "integral";
  const topicTitle = topic?.title || (topicSlug === "derivative" ? "مشتق" : "انتگرال");

  // Core gameplay state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stageNumber, setStageNumber] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionLatex, setQuestionLatex] = useState("");
  const [stageDescription, setStageDescription] = useState("");
  const [optionTitles, setOptionTitles] = useState(["", "", "", ""]);
  const [optionDescriptions, setOptionDescriptions] = useState(["", "", "", ""]);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  // Feedback and completion state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAllFinished, setIsAllFinished] = useState(false);
  const [showExplanationModal, setShowExplanationModal] = useState(false);
  const [explanationMessage, setExplanationMessage] = useState("");
  const [error, setError] = useState("");

  // Statistics
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [startTime, setStartTime] = useState(() => Date.now());

  // Dynamic step indicators from actual question stages (never hardcoded)
  const currentQuestion = questions[currentIndex] || null;
  const totalStages = currentQuestion?.stages?.length || 1;
  const isCurrentQuestionDone = completedQuestions.has(currentIndex);

  // Auto-advance countdown & completion celebration
  const [countdown, setCountdown] = useState(null);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const timerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Clear any active countdown or timeout
  const clearCountdown = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCountdown(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Load question stage data into active display
  const loadStageData = useCallback((question, stageNum) => {
    if (!question || !question.stages) return;
    const stageIdx = stageNum - 1;
    const stage = question.stages[stageIdx];
    if (!stage) return;

    if (stageNum === 1) {
      setQuestionLatex(question.question_latex || "");
      setStageDescription(question.description || "");
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

  // Initialize questions on mount or topic change
  useEffect(() => {
    clearCountdown();
    setShowSuccessBanner(false);
    setIsLoading(true);
    setCurrentIndex(0);
    setStageNumber(1);
    setSelectedOption(null);
    setCompletedQuestions(new Set());
    setIsAllFinished(false);
    setCorrectCount(0);
    setWrongCount(0);
    setStartTime(Date.now());
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
  }, [topicSlug, loadStageData, clearCountdown]);

  // Advance to next question cleanly
  const advanceToNext = useCallback(() => {
    clearCountdown();
    setShowSuccessBanner(false);
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setStageNumber(1);
      setSelectedOption(null);
      loadStageData(questions[nextIdx], 1);
    } else {
      setIsAllFinished(true);
    }
  }, [currentIndex, questions, loadStageData, clearCountdown]);

  // Cancel automatic advance countdown (keeps score & completed state intact)
  const handleCancelCountdown = useCallback(() => {
    clearCountdown();
  }, [clearCountdown]);

  // Handle stage submission via "گام بعدی" or option click
  const handleNextStep = useCallback(async () => {
    if (!currentQuestion || selectedOption === null || isSubmitting) return;
    setIsSubmitting(true);
    setError("");

    try {
      const data = await apiClient.submitAnswer(
        currentQuestion.id,
        stageNumber,
        selectedOption
      );

      if (data.message === "final-corect") {
        setCorrectCount((prev) => prev + 1);
        setCompletedQuestions((prev) => new Set(prev).add(currentIndex));
        setSelectedOption(null);
        setShowSuccessBanner(true);

        // Check if this was the last question in the quiz
        if (currentIndex === questions.length - 1) {
          // Final question: celebratory pause, then switch to completion screen
          timeoutRef.current = setTimeout(() => {
            setIsAllFinished(true);
          }, 1200);
        } else {
          // Start 3-second countdown before auto-advancing
          setCountdown(3);
          let secondsLeft = 3;

          if (timerRef.current) clearInterval(timerRef.current);

          timerRef.current = setInterval(() => {
            secondsLeft -= 1;
            if (secondsLeft <= 0) {
              if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
              }
              setCountdown(null);
              setShowSuccessBanner(false);

              // Auto advance
              setCurrentIndex((curr) => {
                const nextIdx = curr + 1;
                if (nextIdx < questions.length) {
                  setStageNumber(1);
                  setSelectedOption(null);
                  loadStageData(questions[nextIdx], 1);
                  return nextIdx;
                } else {
                  setIsAllFinished(true);
                  return curr;
                }
              });
            } else {
              setCountdown(secondsLeft);
            }
          }, 1000);
        }
      } else if (data.message === "correct") {
        setCorrectCount((prev) => prev + 1);
        const currentStageIdx = stageNumber - 1;
        const chosenLatex =
          currentQuestion.stages[currentStageIdx][`option${selectedOption}_latex`] || "";
        if (chosenLatex) {
          setQuestionLatex(chosenLatex);
        }
        const nextStage = stageNumber + 1;
        setStageNumber(nextStage);
        setSelectedOption(null);
        setStageDescription("");
        loadStageData(currentQuestion, nextStage);
      } else {
        setWrongCount((prev) => prev + 1);
        const reason =
          optionDescriptions[selectedOption - 1] || data.error || "پاسخ اشتباه است";
        setExplanationMessage(reason);
        setShowExplanationModal(true);
      }
    } catch (err) {
      setWrongCount((prev) => prev + 1);
      const reason =
        optionDescriptions[selectedOption - 1] ||
        "پاسخ نادرست است، لطفاً مجدداً تلاش کنید";
      setExplanationMessage(reason);
      setShowExplanationModal(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [
    currentQuestion,
    selectedOption,
    isSubmitting,
    stageNumber,
    currentIndex,
    questions,
    optionDescriptions,
    loadStageData,
  ]);

  // Handle advancing to next question manually
  const handleNextQuestion = useCallback(() => {
    advanceToNext();
  }, [advanceToNext]);

  // Restart session
  const handleRestart = useCallback(() => {
    clearCountdown();
    setShowSuccessBanner(false);
    setCurrentIndex(0);
    setStageNumber(1);
    setSelectedOption(null);
    setCompletedQuestions(new Set());
    setIsAllFinished(false);
    setCorrectCount(0);
    setWrongCount(0);
    setStartTime(Date.now());
    if (questions.length > 0) {
      loadStageData(questions[0], 1);
    }
  }, [questions, loadStageData, clearCountdown]);

  // Switch question from sidebar navigation
  const handleSelectQuestion = useCallback(
    (targetIndex) => {
      if (targetIndex >= 0 && targetIndex < questions.length) {
        clearCountdown();
        setShowSuccessBanner(false);
        setCurrentIndex(targetIndex);
        setStageNumber(1);
        setSelectedOption(null);
        loadStageData(questions[targetIndex], 1);
      }
    },
    [questions, loadStageData, clearCountdown]
  );

  // Elapsed minutes calculation
  const elapsedMinutes = useMemo(() => {
    const diffMs = Date.now() - startTime;
    return Math.max(Math.round(diffMs / 60000), 1);
  }, [startTime, isAllFinished]);

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
        <CircularProgress sx={{ color: "var(--activeBG)" }} />
      </Box>
    );
  }

  // Render State B: Game Completed
  if (isAllFinished) {
    return (
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: "1280px",
          margin: { xs: "110px auto 40px auto", md: "140px auto 50px auto" },
          px: { xs: 2, sm: 3 },
          boxSizing: "border-box",
        }}
      >
        <QuestionCompletionView
          totalQuestions={questions.length}
          correctCount={correctCount}
          wrongCount={wrongCount}
          score={Math.max(correctCount * 15, 20)}
          elapsedMinutes={elapsedMinutes}
          topicTitle={topicTitle}
          onRestart={handleRestart}
        />
      </Box>
    );
  }

  // Render State A: Game in Progress (Figma DSK & MB)
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        width: "100%",
        maxWidth: "1280px",
        margin: { xs: "105px auto 40px auto", md: "140px auto 50px auto" },
        px: { xs: 2, sm: 3 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2.5, md: 3.5 },
          alignItems: { xs: "stretch", md: "flex-start" },
          direction: "rtl",
        }}
      >
        {/* Right Column (Sidebar in RTL) */}
        <QuestionSidebar
          topicTitle={topicTitle}
          difficulty="سخت"
          questionsCount={questions.length}
          currentIndex={currentIndex}
          onSelectQuestion={handleSelectQuestion}
          isQuestionCompleted={(idx) => completedQuestions.has(idx)}
        />

        {/* Left Column (Main Question Card) */}
        <Box
          sx={{
            flex: 1,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF",
            border: (theme) =>
              theme.palette.mode === "dark"
                ? "1px solid #2F2F2F"
                : "1px solid #E2E2E2",
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 4px 20px rgba(0,0,0,0.4)"
                : "0 2px 14px rgba(0, 0, 0, 0.04)",
            borderRadius: { xs: "20px", sm: "24px" },
            p: { xs: 2.5, sm: 4, md: 5 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
            minHeight: { md: "620px" },
            justifyContent: "space-between",
          }}
        >
          {/* Top Stage Progress Dots */}
          <QuestionStageProgress
            totalStages={totalStages}
            currentStage={stageNumber}
            sx={{ mb: { xs: 2.5, sm: 3 } }}
          />

          {/* Question Completion Animation & Auto-Advance Countdown Banner */}
          <AnimatePresence>
            {showSuccessBanner && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                style={{ width: "100%", marginBottom: "18px" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: "rgba(70, 43, 239, 0.08)",
                    border: "1.5px solid var(--activeBG, #462BEF)",
                    borderRadius: "16px",
                    px: { xs: 2, sm: 2.5 },
                    py: 1.2,
                    direction: "rtl",
                    boxSizing: "border-box",
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "var(--activeBG, #462BEF)",
                        fontSize: { xs: 24, sm: 28 },
                      }}
                    />
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        sx={{
                          fontFamily: "inherit",
                          fontSize: { xs: "14px", sm: "15px" },
                          fontWeight: 800,
                          color: "var(--primary-text)",
                        }}
                      >
                        آفرین! سوال با موفقیت حل شد 🎉
                      </Typography>
                      {countdown !== null ? (
                        <Typography
                          sx={{
                            fontFamily: "inherit",
                            fontSize: { xs: "11px", sm: "12px" },
                            color: "var(--secondary-text)",
                            mt: 0.2,
                          }}
                        >
                          انتقال خودکار به سوال بعدی در {toPersianDigits(countdown)} ثانیه...
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            fontFamily: "inherit",
                            fontSize: { xs: "11px", sm: "12px" },
                            color: "var(--secondary-text)",
                            mt: 0.2,
                          }}
                        >
                          انتقال خودکار لغو شد. هر زمان آماده بودید روی «سوال بعدی» کلیک کنید.
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {countdown !== null && (
                    <Button
                      size="small"
                      onClick={handleCancelCountdown}
                      sx={{
                        fontFamily: "inherit",
                        fontSize: { xs: "12px", sm: "13px" },
                        fontWeight: 800,
                        color: "var(--primary-text)",
                        bgcolor: "background.paper",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        px: { xs: 1.8, sm: 2.2 },
                        py: 0.4,
                        minWidth: "auto",
                        boxShadow: "none",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.06)",
                        },
                      }}
                    >
                      لغو
                    </Button>
                  )}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question Formula Card */}
          <QuestionPromptCard
            prefix="اگر داشته باشیم:"
            latex={questionLatex}
            description={stageDescription}
            sx={{ mb: { xs: 2.5, sm: 3 } }}
          />

          {/* Central Instruction Text */}
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: { xs: "15px", sm: "17px" },
              fontWeight: 700,
              color: "var(--primary-text)",
              textAlign: "center",
              mb: { xs: 2.5, sm: 3.5 },
            }}
          >
            آنگاه جواب کدام یک از گزینه‌های زیر است
          </Typography>

          {/* Options Grid (2x2 on desktop, 1-col on mobile) */}
          <QuestionOptionsGrid
            options={optionTitles}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
            disabled={isSubmitting}
            sx={{ mb: { xs: 2.5, sm: 3 } }}
          />

          {/* Bottom Action Bar */}
          <QuestionActionBar
            onNextStep={handleNextStep}
            onNextQuestion={handleNextQuestion}
            isNextStepDisabled={selectedOption === null}
            isNextQuestionDisabled={!isCurrentQuestionDone && selectedOption === null}
            hasNextQuestion={currentIndex < questions.length - 1}
            isLoading={isSubmitting}
          />
        </Box>
      </Box>

      {/* Incorrect Answer Explanation Modal */}
      <QuestionExplanationModal
        open={showExplanationModal}
        onClose={() => setShowExplanationModal(false)}
        message={explanationMessage}
      />
    </Box>
  );
}
