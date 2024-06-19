import IndividualPost from "@/components/post/individual-post";
import FetchCategoryById from "@/fetch/fetch-category-by-id";
import FetchItemsByCategoryId from "@/fetch/fetch-items-by-category-id";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default async function Category({
  params,
}: {
  params: { name: string };
}) {
  const categoryInfo = await FetchCategoryById(params.name);
  const categoryPost: blog = await FetchItemsByCategoryId(params.name, "posts");
  return (
    <section className=" flex flex-col gap-4 items-center justify-center">
      <div className=" mt-6 max-w-[1300px] w-full px-8">
        <Card>
          <CardHeader className=" relative">
            <Image
              removeWrapper
              className="absolute top-4 w-full object-cover blur-xl  -z-20 h-52"
              radius="sm"
              src={
                process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                categoryInfo.docs[0].image.url
              }
            />
            {/* {JSON.stringify(categoryInfo)} */}
          </CardHeader>
          <CardBody className=" z-50">
            <CardHeader>
              <h1 className=" text-white text-3xl font-semibold">
                Posts in {categoryInfo.docs[0].title}
              </h1>
            </CardHeader>
            <CardBody className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[1300px] w-full">
              {categoryPost.docs.map((e) => (
                <IndividualPost key={e.id} data={e} />
              ))}
            </CardBody>
          </CardBody>

          <CardBody className=" z-50">
            <CardHeader>
              <h1 className=" text-white text-3xl font-semibold">
                Posts in {categoryInfo.docs[0].title}
              </h1>
            </CardHeader>
            <CardBody className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[1300px] w-full">
              {categoryPost.docs.map((e) => (
                <IndividualPost key={e.id} data={e} />
              ))}
            </CardBody>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
