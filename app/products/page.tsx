import ProductHome from "@/components/product/product-home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | BSWS",
  description: "Our Official Products",
};

export default function Products({
  searchParams,
}: {
  searchParams: { page: string | number };
}) {
  return <ProductHome page={searchParams.page} />;
}
