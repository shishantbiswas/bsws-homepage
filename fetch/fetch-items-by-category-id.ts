import redis from "@/lib/redis";

export default async function FetchItemsByCategoryId(id:string,type:string){
    const kv = await redis.get(`category-${id}-${type}`);
    if (kv) {
      return JSON.parse(kv);
    }
    const data =await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/${type}?where[category][equals]=${id}`,{ cache: 'no-store' })
    if(!data.ok){
        return new Error('Category Id Fetch Failed')
    }
    await redis.set(
        `category-${id}-${type}`,
        JSON.stringify(await data.json()),
        "EX",
        6 * 60 * 60
      );
    return data.json()
} 
