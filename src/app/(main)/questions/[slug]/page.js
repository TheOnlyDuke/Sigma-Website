import { Box } from "@mui/material";
import { questionsRouteValidator } from "@/lib/routeValidation";
import QuestionGameView from "@/components/Questions/QuestionGameView";
import { PageBackground } from "@/components/backgrounds/PageBackground";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = questionsRouteValidator.resolve(slug);
  if (!topic) {
    return {
      title: "چالش یافت نشد",
      description: "مبحث چالش مورد نظر در سامانه سیگما یافت نشد.",
    };
  }
  return {
    title: `چالش و حل مسئله ${topic.title}`,
    description: `آزمون تعاملی و چالش چندمرحله‌ای مبحث ${topic.title} به همراه امتیازدهی و تحلیل گام‌به‌گام راه‌حل‌ها در سیگما.`,
    openGraph: {
      title: `چالش حل مسئله ${topic.title} | سیگما`,
      description: `چالش تعاملی و حل مسائل گام‌به‌گام ${topic.title} در سیگما.`,
    },
  };
}

export default async function QuestionPage({ params }) {
  const { slug } = await params;
  const topic = questionsRouteValidator.validateOrNotFound(slug);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <PageBackground variant="problemSolving" density="sparse" />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <QuestionGameView topic={topic} />
      </Box>
    </Box>
  );
}
