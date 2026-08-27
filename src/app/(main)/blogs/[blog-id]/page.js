export default async function BlogsPage({ params }) {
  const { "blog-id": id } = await params;
  return (
    <main style={{ flex: 1 }}>
      <h1>In Development {id}</h1>
    </main>
  );
}
