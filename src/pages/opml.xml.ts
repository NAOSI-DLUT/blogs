import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const blogroll = await getCollection("blogroll");

  const opmlContent =
    `<?xml version="1.0" encoding="UTF-8"?><opml version="2.0"><head><title>NAOSI Blogroll</title></head><body>` +
    blogroll
      .map(
        (blog) =>
          `<outline title="${blog.data.title}" ${
            blog.data.rss ? `xmlUrl="${blog.data.rss}"` : ""
          } htmlUrl="${blog.data.link}" />`
      )
      .join("") +
    `</body></opml>`;

  return new Response(opmlContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
