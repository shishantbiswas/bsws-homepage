
export default async function FetchCategoryById(id: string) {

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/category?where[id][equals]=${id}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Category Id Fetch Failed");
  }
 
  return data.json();
}
