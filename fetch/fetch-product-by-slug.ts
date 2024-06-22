
export default async function FetchProductBySlug(slug: string) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/products?where[slug][equals]=${slug}`
  );
  if (!data.ok) {
    return new Error("failed to fetch post data");
  }
  return data.json();
}
