import SearchResult from "@/components/search-result";
import FetchSearch from "@/fetch/fetch-search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | BSWS",
  description: "Search across our Blogs and Products",
};

export default async function Search({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const data: search = await FetchSearch(searchParams.q);

  return (
    <section className=" flex items-center justify-center">
      <div className=" min-h-[60vh] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 max-w-[1300px] w-full px-8">
        {data.docs.map((e) => (
          <SearchResult id={e.doc} key={e.id} />
        ))}
      </div>
    </section>
  );
}
