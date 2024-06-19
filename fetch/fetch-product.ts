import redis from "@/lib/redis";

export default async function FetchProduct(page:number|string){
    const kv = await redis.get(`product-${page}`);
    if (kv) {
      return JSON.parse(kv);
    }
    const data =await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/products?limit=12&page=${page || 1}`,{ cache: 'no-store' })
    if(!data.ok){
        return new Error('Product Fetch Failed')
    }
    await redis.set(
        `product-${page}`,
        JSON.stringify(await data.json()),
        "EX",
        6 * 60 * 60
      );
    return data.json()
} 