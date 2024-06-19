import RichTextRenderer from "@/components/rich-text-renderer";
import { Node } from "@/types/rich-text-renderer";
import FetchBlogBySlug from "@/fetch/fetch-blog-by-slug";
import FetchItemsByCategoryId from "@/fetch/fetch-items-by-category-id";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
} from "@nextui-org/react";
import moment from "moment";
import Link from "next/link";

type slugPost = {
  docs: {
    body: Node[];
    title: string;
    category: {
      id: string;
      image: {
        url: string;
      };
      title: string;
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
    author: {
      name: string;
      bio: string;
      shortDescription: string;
      image: {
        alt: string;
        url: string;
      };
      socials: {
        platformName: string;
        handle: string;
        socialImage: string;
        link: string;
      }[];
    };
    createdAt: string;
    slug: string;
    metaDescription: string;
  }[];
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post: slugPost = await FetchBlogBySlug(params.slug);
  const title = post.docs[0].title;

  return {
    title: `Reading ${title} | BSWS`,
  }
}


export default async function Post({ params }: { params: { slug: string } }) {
  const post: slugPost = await FetchBlogBySlug(params.slug);
  const body = post.docs[0].body;
  const title = post.docs[0].title;
  const additionalCategory = post.docs[0].additionalCategories;
  const category = post.docs[0].category;
  const img = post.docs[0].featureImage;
  const author = post.docs[0].author;
  const date = moment(post.docs[0].createdAt).format("MMMM Do YYYY");
  const description = post.docs[0].metaDescription;

  const similarPosts: slugPost = await FetchItemsByCategoryId(
    category.id,
    "posts"
  );

  return (
    <section className=" flex items-center justify-center">
      <div className=" mt-6 max-w-[1300px] w-full px-8">
        <div className="flex flex-col md:grid grid-cols-12 gap-4 transition-all duration-200 md:h-[500px]">
          <Card className="col-span-7">
            <CardBody>
              <Image
                radius="md"
                removeWrapper
                className=" aspect-square size-full object-cover"
                src={`${
                  process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL + img.url
                }`}
                alt={img.alt}
              />
            </CardBody>
          </Card>
          <Card className="col-span-5 ">
            <CardBody className=" flex flex-col justify-between">
              <div className=" flex gap-2 items-start flex-col">
                <h1 className=" text-3xl font-bold leading-none">{title}</h1>
                <p>{description}</p>
                <small className="text-default-500">{date}</small>
                <div>
                  <div className=" flex items-center gap-2 flex-wrap">
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
                </div>
              </div>

              <div>
                <Card className="mt-4">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt={author.image.alt}
                      height={40}
                      className=" aspect-square size-full object-cover"
                      radius="full"
                      src={`${
                        process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                        author.image.url
                      }`}
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">{author.name}</p>
                      <Link
                        href={`${author.socials[0].link}`}
                        target="_blank"
                        className="text-small text-default-500"
                      >
                        @{author.socials[0].handle}
                      </Link>
                    </div>
                  </CardHeader>
                  <Divider className=" opacity-60" />
                  <CardBody>
                    <p>{author.shortDescription}</p>
                  </CardBody>
                </Card>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className=" grid grid-cols-12 gap-4 mt-6">
          <Card className=" p-4 col-span-12">{RichTextRenderer(body)}</Card>
          {/* <Card className=" p-4 col-span-3 sticky top-4 h-56"></Card> */}
        </div>

        <Card className=" p-4 mt-4">
          <CardHeader>
            <h1 className=" text-3xl font-semibold">
              Similar Posts you may like
            </h1>
          </CardHeader>
          <CardBody className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {similarPosts.docs.map((e) => (
              <Card
                className=" h-[500px] w-full"
                key={e.title}
                style={{ display: e.slug === post.docs[0].slug ? "none" : "" }}
              >
                <CardHeader className="pb-0 flex-col items-start overflow-hidden">
                  <Image
                    alt={e.featureImage.alt}
                    className="object-cover object-top h-64 sm:h-44  w-[600px]  rounded-lg "
                    src={`${
                      process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                      e.featureImage.url
                    }`}
                  />
                </CardHeader>
                <CardBody className="overflow-visible pt-2 py-2">
                  <div className=" flex gap-2 flex-col">
                    <h4 className="font-bold text-large leading-tight">
                      {e.title}
                    </h4>
                    <div className=" flex items-center gap-2">
                      <Chip
                        variant="shadow"
                        size="sm"
                        avatar={
                          <Avatar
                            name={e.author.name}
                            src={
                              process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                              e.author.image.url
                            }
                          />
                        }
                      >
                        {e.author.name}
                      </Chip>
                      <Link href={`/category/${e.category.id}`}>
                        <Chip
                          size="sm"
                          variant="shadow"
                          avatar={
                            <Avatar
                              name={e.category.title}
                              src={
                                process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL +
                                e.category.image?.url
                              }
                            />
                          }
                        >
                          {e.category.title}
                        </Chip>
                      </Link>
                    </div>
                    <small className="text-default-500">
                      {e.metaDescription}
                    </small>
                  </div>
                </CardBody>
                <Button
                  size="sm"
                  className="m-4"
                  href={`/posts/${e.slug}`}
                  as={Link}
                >
                  View Post
                </Button>
              </Card>
            ))}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
