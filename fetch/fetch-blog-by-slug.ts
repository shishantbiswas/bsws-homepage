export default async function FetchBlogBySlug(slug: string) {

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/posts?where[slug][equals]=${slug}`
  );
  if (!data.ok) {
    return new Error("failed to fetch post data");
  }
  
  return data.json();
}
