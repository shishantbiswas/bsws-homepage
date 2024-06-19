import redis from "@/lib/redis";

export default async function FetchCategory() {
  const kv = await redis.get("categories");
  if (kv) {
    return JSON.parse(kv);
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/category`
  );
  if (!data.ok) {
    return new Error("Category Id Fetch Failed");
  }
  await redis.set(
    "categories",
    JSON.stringify(await data.json()),
    "EX",
    6 * 60 * 60
  );
  return data.json();
}
