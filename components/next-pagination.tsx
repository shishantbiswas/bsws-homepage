"use client";

import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NextPagination({ blogs,slug }: { blogs: blog,slug:string }) {
  const router = useRouter();
  return (
    <Pagination
      total={blogs.totalPages}
      initialPage={blogs.pagingCounter}
      onChange={(page) => router.push(`/${slug}?page=${page}`)}
    />
  );
}
