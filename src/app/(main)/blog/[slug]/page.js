import { blogRouteValidator } from "@/lib/routeValidation";

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
