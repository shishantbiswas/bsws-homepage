export default async function FetchProduct(page: number | string) {
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL
    }/api/products?limit=12&page=${page || 1}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Product Fetch Failed");
  }
  return data.json();
}
