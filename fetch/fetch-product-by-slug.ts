import redis from "@/lib/redis";

export default async function FetchProductBySlug(slug: string) {
  const kv = await redis.get(`product-${slug}`);
  if (kv) {
    return JSON.parse(kv);
  }
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/products?where[slug][equals]=${slug}`
  );
  if (!data.ok) {
    return new Error("failed to fetch post data");
  }
  await redis.set(
    `product-${slug}`,
    JSON.stringify(await data.json()),
    "EX",
    6 * 60 * 60
  );
  return data.json();
}
