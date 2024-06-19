import PostHome from "@/components/post/post-home";
import generateRssFeed from "@/fetch/generateRSSFeed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BSWS",
  description: "Select through our broad range of content",
};

export default async function Blog({
  searchParams,
}: {
  searchParams: { page: string | number };
}) {
  await generateRssFeed();

  return <PostHome page={searchParams.page} />;
}
