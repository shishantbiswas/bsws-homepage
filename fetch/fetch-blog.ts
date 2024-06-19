import redis from "@/lib/redis";

export default async function FetchBlog(pageNo: number | string) {
    const kv = await redis.get(`postPage-${pageNo}`);
    if (kv) {
      return JSON.parse(kv);
    }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/posts?limit=12&page=${pageNo}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Blog Fetch Failed");
  }
  await redis.set(
    `postPage-${pageNo}`,
    JSON.stringify(await data.json()),
    "EX",
    6 * 60 * 60
  );
  return data.json();
}
