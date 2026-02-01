// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const notebookCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    order: z.number().optional(), 
  }),
});

const artifactsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    github: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  notebook: notebookCollection,
  artifacts: artifactsCollection,
};