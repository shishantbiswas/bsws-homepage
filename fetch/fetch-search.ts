import redis from "@/lib/redis";

export default async function FetchSearch(query: string) {
  const kv = await redis.get(`search-${query}`);
  if (kv) {
    return JSON.parse(kv);
  }
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/search?where[title][contains]=${query}`
  );
  if (!data.ok) {
    return new Error("failed to fetch post data");
  }
  await redis.set(
    `search-${query}`,
    JSON.stringify(await data.json()),
    "EX",
    6 * 60 * 60
  );
  return data.json();
}
