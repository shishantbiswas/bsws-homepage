import ImageSlider from "@/components/image-slider";
import RichTextRenderer from "@/components/rich-text-renderer";
import { Node } from "@/types/rich-text-renderer";
import FetchProductBySlug from "@/fetch/fetch-product-by-slug";
import { Avatar, Button, Card, CardBody, Chip } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product: slugProduct = await FetchProductBySlug(params.slug);
  const title = product.docs[0].title;

  return {
    title: `${title} | BSWS`,
  }
}

type slugProduct = {
  docs: {
    body: Node[];
    title: string;
    options: {
      name: string;
      id: string;
      variants: {
        value: string;
        id: string;
      }[];
    }[];
    stores: {
      platform: string;
      link: string;
      id: string;
    }[];
    category: {
      id: string;
      title: string;
      image: {
        url: string;
      };
    };
    additionalCategories: {
      id: string;
      title: string;
      image: {
        url: string;
      };
    }[];
    featureImage: {
      url: string;
      alt: string;
    };
    sliderImage: {
      url: string;
      alt: string;
    }[];
    createdAt: string;
    optionsLabel: string;
    metaDescription: string;
  }[];
};

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product: slugProduct = await FetchProductBySlug(params.slug);
  const title = product.docs[0].title;
  const date = moment(product.docs[0].createdAt).format("MMMM Do YYYY");
  const description = product.docs[0].metaDescription;
  const body = product.docs[0].body;
  const category = product.docs[0].category;
  const additionalCategory = product.docs[0].additionalCategories;
  const images = product.docs[0].featureImage;
  const slider = product.docs[0].sliderImage;
  const options = product.docs[0].options;
  const label = product.docs[0].optionsLabel;
  const stores = product.docs[0].stores;

  return (
    <section className=" flex items-center justify-center">
      <div className=" mt-6 max-w-[1300px] w-full px-8">
        <div className=" grid grid-cols-12 gap-4 transition-all duration-200 h-[600px]">
          <Card className="col-span-7">
            <CardBody>
              <ImageSlider images={slider} />
            </CardBody>
          </Card>
          <Card className="col-span-5">
            <CardBody className=" flex flex-col justify-between">
              <div className=" flex gap-2 items-start flex-col">
                <h1 className=" text-3xl font-bold leading-none">{title}</h1>
                <p>{description}</p>
                <small className="text-default-500">{date}</small>
                <div>
                  <div className=" flex items-center gap-2">
                    {additionalCategory?.map((e) => (
                      <Chip
                        as={Link}
                        key={e.id}
                        href={`/category/${e.id}`}
                        avatar={
                          <Avatar
                            name={e.title}
                            src={
                              process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                              e.image?.url
                            }
                          />
                        }
                        variant="shadow"
                      >
                        {e.title}
                      </Chip>
                    ))}
                    <Chip
                      variant="shadow"
                      as={Link}
                      href={`/category/${category.id}`}
                      avatar={
                        <Avatar
                          name={category.title}
                          src={
                            process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                            category.image?.url
                          }
                        />
                      }
                    >
                      {category.title}
                    </Chip>
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    {options.map((e) => (
                      <div key={e.id}>
                        <h1 className="text-xl capitalize ">{e.name}</h1>
                        <div className=" flex gap-2">
                          {e.variants.map((e) => (
                            <Chip
                              key={e.id}
                              className="text-sm p-1 mt-1 "
                            >
                              {e.value}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {stores.length > 0 && (
                <Card>
                  <CardBody>
                    <h1>Buy From</h1>
                    <div className="flex gap-2 mt-1 xl:flex-row w-full">
                      {stores?.map((e) => (
                        <Button
                          key={e.id}
                          target="_blank"
                          href={e.link}
                          as={Link}
                          startContent={<ShoppingBag size={15} />}
                          className="w-full capitalize"
                        >
                          {e.platform}
                        </Button>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              )}
            </CardBody>
          </Card>
        </div>

        <div className=" grid grid-cols-12 gap-4 mt-6">
          <Card className="col-span-12">
            <CardBody>{RichTextRenderer(body)}</CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
