import FetchProduct from "@/fetch/fetch-product";
import IndividualProduct from "./individual-product";
import NextPagination from "../next-pagination";

export default async function ProductHome({page}:{page:string|number}) {
  const products: products = await FetchProduct(page);

  return (
    <>
      <section className=" flex flex-col gap-4 items-center justify-center">
        <div className="min-h-[60vh] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 max-w-[1300px] w-full px-8">
          {products.docs.map((products) => (
           <IndividualProduct data={products} key={products.id}/>
          ))}
           {products.docs.length===0 && (
            <h1>No Products Found</h1>
          )}
        </div>
        <NextPagination slug="products" blogs={products} />
      </section>
    </>
  );
}
