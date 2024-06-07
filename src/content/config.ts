// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    dateCreated: z.date(),
    readingTime: z.number(),
    image: z.optional(z.string()),
    profile: z.optional(z.string()),
    authors: z.array(z.string()),
  }),
});

export const collections = { posts };
