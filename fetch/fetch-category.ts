
export default async function FetchCategory() {

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/category`
  );
  if (!data.ok) {
    return new Error("Category Id Fetch Failed");
  }

  return data.json();
}
