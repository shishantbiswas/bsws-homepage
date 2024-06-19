import FetchCategory from "@/fetch/fetch-category";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Metadata } from "next";
import Link from "next/link";
type CategoryType = {
  docs: {
    columnSpan: number;
    title: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    id: string;
  }[];
};

export const metadata: Metadata = {
  title: "Category | BSWS",
  description: "Select through our broad range of content",
};

export default async function Category() {
  const category: CategoryType = await FetchCategory();

  return (
    <section className=" flex items-center justify-center">
      <div className="min-h-[60vh] max-w-[1300px] gap-2 grid grid-cols-12 grid-rows-2 px-8 my-4 w-full">
        {category.docs.map((e) => (
          <Card
            key={e.id}
            style={{ gridColumn: `span ${e.columnSpan}` }}
            className=" h-[250px] group"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start   duration-700">
              <p className=" text-large text-white/60 uppercase font-medium">
                {e.title}
              </p>
              <h4 className="text-white font-medium text-large">
                {e.description}
              </h4>
            </CardHeader>
            <Image
              alt={e.image.alt}
              removeWrapper
              className="z-0 w-[900px] transform  transition-all group-hover:blur-lg h-[250px] object-cover"
              src={process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL + e.image.url}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">
                    Read Posts from {e.title}
                  </p>
                </div>
              </div>
              <Button
                radius="full"
                href={`/category/${e.id}`}
                as={Link}
                size="sm"
              >
                Checkout {e.title}
              </Button>
            </CardFooter>
          </Card>
        ))}
        {category.docs.length === 0 && (
          <h1 className=" text-nowrap">No Category Found</h1>
        )}
      </div>
    </section>
  );
}
