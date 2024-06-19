import FetchById from "@/fetch/fetch-by-id";
import { Button, Card, CardBody, CardHeader, Chip, Image } from "@nextui-org/react";
import Link from "next/link";

export default async function SearchResult({
  id,
}: {
  id: {
    relationTo: string;
    value: string;
  };
}) {
  const info: blog = await FetchById(id.value, id.relationTo);

  return (
    <>
      <article>
        <Card className=" h-[500px]">
          <CardHeader className="pb-0 flex-col items-start overflow-hidden">
            <Image
              className="object-cover rounded-lg h-44 w-[800px]"
              src={`${
                process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                info.docs[0].featureImage?.url
              }`}
            />
          </CardHeader>
          <CardBody className="overflow-visible pt-2 py-2">
            <div className=" flex gap-2 flex-col">
              <h4 className="font-bold text-large leading-tight">
                {info.docs[0].title}
              </h4>
            <Chip size="sm" className=" capitalize" variant='shadow'>{id.relationTo}</Chip>
              <small className="text-default-500">
                {info.docs[0].metaDescription}
              </small>
            </div>
          </CardBody>
          <Button
          as={Link}
            size="sm"
            className="m-4 capitalize"
            href={`/${id.relationTo}/${info.docs[0].slug}`}
          >
            View {id.relationTo}
          </Button>
        </Card>
      </article>
    </>
  );
}
