import { topicRouteValidator } from "@/lib/routeValidation";
import TopicDetailView from "@/components/Topics/TopicDetailView";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = topicRouteValidator.resolve(slug);
  if (!topic) {
    return {
      title: "مبحث یافت نشد",
      description: "مبحث آموزشی مورد نظر در سامانه سیگما یافت نشد.",
    };
  }
  const epCount = topic.episodes?.length || 0;
  return {
    title: `آموزش ${topic.title}`,
    description: `مجموعه ${epCount > 0 ? `${epCount} ویدیوی آموزشی و ` : ""}جزوات درس ${topic.title} به همراه حل گام‌به‌گام مسائل و تمرین‌های مفهومی در سیگما.`,
    openGraph: {
      title: `آموزش ${topic.title} | سیگما`,
      description: `ویدیوهای تدریس، حل تمرین و جزوات درس ${topic.title} در پلتفرم آموزشی سیگما.`,
    },
  };
}

export default async function TopicDetailPage({ params }) {
  const { slug } = await params;
  const topic = topicRouteValidator.validateOrNotFound(slug);

  return <TopicDetailView topic={topic} />;
}
