import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const learning = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/learning' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    status: z.enum(['done', 'learning']),
    description: z.string().optional(),
    link: z.url().optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    credentialId: z.string().optional(),
    url: z.url().optional(),
    // Path to a file in public/, e.g. "certificates/my-cert.png"
    image: z.string().optional(),
  }),
});

export const collections = { learning, certificates };
