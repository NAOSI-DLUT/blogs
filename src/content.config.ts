import { defineCollection, z } from "astro:content";

export const collections = {
  blogroll: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      link: z.string().url(),
      description: z.string().optional(),
      rss: z.string().url().optional(),
      avatar: z.string().url().optional(),
    }),
  }),
};
