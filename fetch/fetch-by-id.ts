
export default async function FetchById(id: string, type: string) {
  

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/${type}?where[id][equals]=${id}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Id Fetch Failed");
  }
  
  return data.json();
}
