import redis from "@/lib/redis";

export default async function FetchById(id: string, type: string) {
    const kv = await redis.get(`${type}-${id}`);
    if (kv) {
      return JSON.parse(kv);
    }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/${type}?where[id][equals]=${id}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Id Fetch Failed");
  }
  await redis.set(
    `${type}-${id}`,
    JSON.stringify(await data.json()),
    "EX",
    6 * 60 * 60
  );
  return data.json();
}
