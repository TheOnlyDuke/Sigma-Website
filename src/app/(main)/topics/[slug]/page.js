import { topicRouteValidator } from "@/lib/routeValidation";
import TopicDetailView from "@/components/Topics/TopicDetailView";

export default async function TopicDetailPage({ params }) {
  const { slug } = await params;
  const topic = topicRouteValidator.validateOrNotFound(slug);

  return <TopicDetailView topic={topic} />;
}
