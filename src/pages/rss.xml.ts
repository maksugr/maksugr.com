import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";
import { TALKS } from "@/data/talks";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const postItems = sortedPosts.map(({ data, id, filePath }) => ({
    link: getPath(id, filePath),
    title: data.title,
    description: data.description,
    pubDate: new Date(data.modDatetime ?? data.pubDatetime),
  }));

  const talkItems = TALKS.map(talk => ({
    link: talk.url,
    title: talk.title,
    description: `Talk at ${talk.event}`,
    pubDate: talk.pubDatetime,
  }));

  const allItems = [...postItems, ...talkItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: allItems,
  });
}
