import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()), // Permitir cadenas o objetos Date
  }),
});

export const collections = {
  blog: blogCollection,
};


