'use client'
import React from "react";
import {
  Chip,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function IndividualPost({data}:{data:Docs}) {
  return (
    <article>
      <Card className=" h-[500px]">
        <CardHeader className="pb-0 flex-col items-start overflow-hidden">
          <Image
            alt={data.featureImage.alt}
            className="object-cover object-top h-64 sm:h-44  w-[600px]  rounded-lg "
            src={`${
              process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
              data.featureImage.url
            }`}
          />
        </CardHeader>
        <CardBody className="overflow-visible pt-2 py-2">
          <div className=" flex gap-2 flex-col">
            <h4 className="font-bold text-large leading-tight">{data.title}</h4>
            <div className=" flex items-center gap-2">
              <Chip
                variant="shadow"
                size="sm"
                avatar={
                  <Avatar
                    name={data.author.name}
                    src={
                      process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                      data.author.image.url
                    }
                  />
                }
              >
                {data.author.name}
              </Chip>
                <Chip
                  size="sm"
                  variant="shadow"
                  as={Link}
                  href={`/category/${data.category.id}`}
                  avatar={
                    <Avatar
                      name={data.category.title}
                      src={
                        process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                        data.category.image?.url
                      }
                    />
                  }
                >
                  {data.category.title}
                </Chip>
            </div>
            <small className="text-default-500">{data.metaDescription}</small>
          </div>
        </CardBody>
        <Button as={Link} size="sm" className="m-4" href={`/posts/${data.slug}`}>
          View Post
        </Button>
      </Card>
    </article>
  );
}
