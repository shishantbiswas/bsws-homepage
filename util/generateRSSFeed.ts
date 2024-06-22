import RSS from "rss";
import fs from "fs";
import path from "path";
import FetchBlog from "../fetch/fetch-blog";

export default async function generateRssFeed() {
  const site_url = process.env.PRODUCTION_WEBSITE || "";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
  };

  const feed = new RSS(feedOptions);

  const posts: blog = await FetchBlog(1);

  posts.docs.map((e) => {
    feed.item({
      title: e.title,
      description: e.metaDescription,
      url: `${site_url}/blog/${e.slug}`,
      date: e.createdAt,
    });
  });


  if (!fs.existsSync('./public')) fs.mkdirSync('./public', { recursive: true });
  
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
