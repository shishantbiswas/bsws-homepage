export default async function FetchSearch(query: string) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/search?where[title][contains]=${query}`
  );
  if (!data.ok) {
    return new Error("failed to fetch post data");
  }
  return data.json();
}
