import { questionsRouteValidator } from "@/lib/routeValidation";
import QuestionGameView from "@/components/Questions/QuestionGameView";

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

  return <QuestionGameView topic={topic} />;
}
