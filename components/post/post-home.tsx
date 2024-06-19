import FetchBlog from "@/fetch/fetch-blog";
import NextPagination from "../next-pagination";
import IndividualPost from "./individual-post";

export default async function PostHome({page}:{page:string|number}) {
  const blogs: blog = await FetchBlog(page||1);


  return (
    <>
      <section className=" flex flex-col gap-4 items-center ">
        <div className="min-h-[60vh] grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 max-w-[1300px] w-full px-8">
          {blogs.docs.map((blog) => (
            <IndividualPost data={blog} key={blog.id}/>
          ))}
          {blogs.docs.length===0 && (
            <h1>No Posts Found</h1>
          )}
        </div>
          <NextPagination slug="posts" blogs={blogs} />
      </section>
    </>
  );
}
