import { questionsRouteValidator } from "@/lib/routeValidation";
import QuestionGameView from "@/components/Questions/QuestionGameView";

export default async function QuestionPage({ params }) {
  const { slug } = await params;
  const topic = questionsRouteValidator.validateOrNotFound(slug);

  return <QuestionGameView topic={topic} />;
}
