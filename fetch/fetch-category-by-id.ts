import redis from "@/lib/redis";

export default async function FetchCategoryById(id: string) {
  const kv = await redis.get(`categoryId-${id}`);
  if (kv) {
    return JSON.parse(kv);
  }
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/category?where[id][equals]=${id}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Category Id Fetch Failed");
  }
  await redis.set(
    `categoryId-${id}`,
    JSON.stringify(await data.json()),
    "EX",
    6 * 60 * 60
  );
  return data.json();
}
