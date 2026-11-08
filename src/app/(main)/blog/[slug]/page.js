import { blogRouteValidator } from "@/lib/routeValidation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogRouteValidator.resolve(slug);
  if (!article) {
    return {
      title: "مقاله یافت نشد",
      description: "مقاله یا نوشته آموزشی مورد نظر در وبلاگ سیگما یافت نشد.",
    };
  }
  return {
    title: article.title || `مقاله ${slug}`,
    description:
      article.description ||
      article.content ||
      `مطالعه مقاله ${article.title} در وبلاگ تخصصی سیگما.`,
    openGraph: {
      title: `${article.title || `مقاله ${slug}`} | سیگما`,
      description:
        article.description ||
        `مطالعه مقاله ${article.title} در وبلاگ تخصصی سیگما.`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = blogRouteValidator.validateOrNotFound(slug);

  return (
    <main style={{ flex: 1, padding: "140px 24px", direction: "rtl" }}>
      <h1>{article?.title || slug}</h1>
      <p>{article?.content || article?.description || ""}</p>
    </main>
  );
}
