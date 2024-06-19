import {
    Chip,
    Card,
    CardHeader,
    CardBody,
    Image,
    Button,
    Avatar,
  } from "@nextui-org/react";
  import Link from "next/link";

export default function IndividualProduct({data}:{data:ProductsDocs}){
    return(
        <article key={data.id}>
        <Card className=" h-[500px]">
          <CardHeader className="pb-0 flex-col items-start overflow-hidden">
            <Image
              alt="Card background"
              className="object-cover rounded-lg h-64 sm:h-44  w-[600px]"
              src={`${
                process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                data.featureImage.url
              }`}
            />
          </CardHeader>
          <CardBody className="overflow-visible pt-2 py-2">
            <div className=" flex gap-2 flex-col">
              <h4 className="font-bold text-large leading-tight">
                {data.title}
              </h4>
             <div className=" flex items-center gap-2 flex-wrap">
             {data.options[0]?.variants.map((options) => (
                <Chip key={options.value} size="sm" >
                  {options.value}
                </Chip>
              ))}
              {data.options[1]?.variants.map((options) => (
                <Chip key={options.value} size="sm" >
                  {options.value}
                </Chip>
              ))}
              <Chip
              avatar={
                 <Avatar
                name={data.category.title}
                src={
                  process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                  data.category.image?.url
                }
                />
              }
              size="sm">
                {data.category.title}
              </Chip>
             </div>
              <small className="text-default-500">
               {data.metaDescription}
             </small>
            </div>
          </CardBody>
          <Button
          as={Link}
            size="sm"
            className="m-4"
            href={`/products/${data.slug}`}
          >
            View Product
          </Button>
        </Card>
      </article>
    )
}