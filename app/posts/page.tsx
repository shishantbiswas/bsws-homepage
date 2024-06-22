import PostHome from "@/components/post/post-home";
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

  return <PostHome page={searchParams.page} />;
}
