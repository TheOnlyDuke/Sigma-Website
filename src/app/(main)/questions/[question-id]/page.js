"use client";
import QuestionOptions from "@/components/mainPage/QestionsBank/QestionOptions";
import { Box, Typography, Alert, Backdrop } from "@mui/material";
import { useState, useEffect, useCallback, useRef } from "react";
import Grid from "@mui/material/Grid";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { apiClient } from "@/utils/api";
import { use } from "react";

const simpleArray = [...Array(4)];

const MixedContent = ({ content }) => {
  const latexStartIndex = content.indexOf("\\");

  if (latexStartIndex === -1) {
    return (
      <Box sx={{ direction: "rtl", whiteSpace: "pre-wrap" }}>
        <Typography variant="smallTitle">{content}</Typography>
      </Box>
    );
  }

  const textPart = content.substring(0, latexStartIndex);

  return (
    <Box sx={{ direction: "rtl", whiteSpace: "pre-wrap" }}>
      <Typography variant="smallTitle">{textPart}</Typography>
    </Box>
  );
};

export default function EachQuestionPage({ params }) {
  const resolvedParams = use(params);
  const [error, setError] = useState("");
  const [stageNumber, setStageNumber] = useState(1);
  const [questionLatex, setQuestionLatex] = useState("");
  const [description, setDescription] = useState("");
  const [option1Title, setOption1Title] = useState("");
  const [option2Title, setOption2Title] = useState("");
  const [option3Title, setOption3Title] = useState("");
  const [option4Title, setOption4Title] = useState("");
  const [option1Description, setOption1Description] = useState("");
  const [option2Description, setOption2Description] = useState("");
  const [option3Description, setOption3Description] = useState("");
  const [option4Description, setOption4Description] = useState("");
  const isFirstRender = useRef(true);
  const [qData, setQData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const titles = [
    "داریم :",
    "خب خب داری درست پیش میری الان داریم:",
    "ببینیم چی داری",
    "بعدی!",
  ];

  let id = resolvedParams["question-id"];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fetchData = async () => {
      try {
        console.log("Fetching data for id:", id);
        const data = await apiClient.getQuestionStage(id);
        console.log("Received data:", data);

        // Set all the state variables from the data
        setQuestionLatex(data.question_latex);
        setDescription(data.description);

        // Set option titles
        setOption1Title(data.stages[0].option1_latex || "");
        setOption2Title(data.stages[0].option2_latex || "");
        setOption3Title(data.stages[0].option3_latex || "");
        setOption4Title(data.stages[0].option4_latex || "");

        // Set option descriptions
        setOption1Description(data.stages[0].option1_description || "");
        setOption2Description(data.stages[0].option2_description || "");
        setOption3Description(data.stages[0].option3_description || "");
        setOption4Description(data.stages[0].option4_description || "");

        setQData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = useCallback(
    async (option) => {
      setError("");
      try {
        const data = await apiClient.submitAnswer(id, stageNumber, option);
        if (data.message === "final-corect") {
          setQuestionLatex("Finished");
        } else if (data.message === "correct") {
          setQuestionLatex(
            qData.stages[stageNumber - 1]["option" + option + "_latex"] || "",
          );
          setStageNumber((prev) => prev + 1);
          setDescription("");

          // Update all option states
          setOption1Title(qData.stages[stageNumber].option1_latex || "");
          setOption2Title(qData.stages[stageNumber].option2_latex || "");
          setOption3Title(qData.stages[stageNumber].option3_latex || "");
          setOption4Title(qData.stages[stageNumber].option4_latex || "");

          setOption1Description(
            qData.stages[stageNumber].option1_description || "",
          );
          setOption2Description(
            qData.stages[stageNumber].option2_description || "",
          );
          setOption3Description(
            qData.stages[stageNumber].option3_description || "",
          );
          setOption4Description(
            qData.stages[stageNumber].option4_description || "",
          );
        } else {
          const descriptions = [
            option1Description,
            option2Description,
            option3Description,
            option4Description,
          ];
          const reason = descriptions[option - 1] || "پاسخ اشتباه است";
          setAlertMessage(reason);
          setShowAlert(true);
        }
      } catch (error) {
        setError("مطئنی ؟ یه بار دیگه تلاش کن");
      }
    },
    [id, stageNumber, qData],
  );

  return (
    <Grid
      container
      spacing={2}
      component="main"
      sx={{
        flex: 1,
        maxWidth: "1200px",
        margin: "175px auto 25px auto",
        width: "100%",
        border: "10px solid",
        p: "35px",
        borderRadius: "15px",
      }}
    >
      <Backdrop
        open={showAlert}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            minWidth: 300,
            maxWidth: "80vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Alert
            severity="error"
            onClose={() => setShowAlert(false)}
            sx={{
              fontSize: "1.2rem",
              p: 3,
              textAlign: "center",
              width: "100%",
              boxShadow: 3,
            }}
          >
            {alertMessage}
          </Alert>
        </Box>
      </Backdrop>
      {questionLatex === "Finished" ? (
        <Typography
          variant="display"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          آفرین و درود
        </Typography>
      ) : (
        <>
          <Grid size={{ xs: 12 }} sx={{ position: "relative" }}>
            <Typography
              variant="normalBodyCap"
              sx={{ position: "absolute", top: 0, left: 0 }}
            >
              مرحله : {stageNumber}
            </Typography>
            <Typography variant="normalBody">
              {titles[(stageNumber - 1) % titles.length]}
            </Typography>
            <Typography
              variant="title"
              sx={{
                direction: "ltr",
                "& *": {
                  direction: "inherit",
                },
              }}
            >
              <BlockMath math={questionLatex} />
              <MixedContent content={description} />
            </Typography>
          </Grid>
          {error && (
            <Grid size={{ xs: 12 }}>
              <Typography variant="normalBody" color="error" textAlign="center">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid size={{ xs: 12 }}>
            {simpleArray.map((_, index) => (
              <QuestionOptions
                key={index + 1}
                option={index + 1}
                latex={
                  [option1Title, option2Title, option3Title, option4Title][
                    index
                  ]
                }
                description={
                  [
                    option1Description,
                    option2Description,
                    option3Description,
                    option4Description,
                  ][index]
                }
                handleSubmit={handleSubmit}
              />
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
}
