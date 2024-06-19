"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();
  const firstPathname = pathname.split("/")[1];
  const secondPathname = pathname.split("/")[2];

  return (
    <section className=" flex items-center justify-center">
      <div className="  max-w-[1300px] w-full px-8">
        <Breadcrumbs hideSeparator={pathname === "/"}>
          <BreadcrumbItem onClick={() => router.push("/")}>Home</BreadcrumbItem>

          {firstPathname && (
            <BreadcrumbItem
            hideSeparator={firstPathname === "category"}
            onClick={() => router.push(`/${firstPathname}`)}>
              <span className=" capitalize">{firstPathname}</span>
            </BreadcrumbItem>
          )}
          
          {secondPathname && (
            <BreadcrumbItem
              onClick={() => router.push(`/${firstPathname}/${secondPathname}`)}
            >
              <span>{firstPathname === "category" ? "":`${secondPathname}`}</span>
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </div>
    </section>
  );
}