
export default async function FetchBlog(pageNo: number | string) {
   

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/posts?limit=12&page=${pageNo}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    return new Error("Blog Fetch Failed");
  }
 
  return data.json();
}
