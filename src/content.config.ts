import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Text shown on the site: either one string for both languages,
// or { vi, en }. A missing `en` falls back to `vi`.
const localized = z.union([z.string(), z.object({ vi: z.string(), en: z.string().optional() })]);

const categories = defineCollection({
  loader: file('src/content/categories.yaml'),
  schema: z.object({ name: localized }),
});

const issuers = defineCollection({
  loader: file('src/content/issuers.yaml'),
  schema: z.object({
    name: z.string(),
    website: z.url().optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({
    name: localized,
    category: reference('categories'),
    // Self-assessed, 1 (beginner) to 5 (expert)
    level: z.number().int().min(1).max(5),
  }),
});

const learning = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/learning' }),
  schema: z.object({
    title: localized,
    category: reference('categories'),
    status: z.enum(['planned', 'learning', 'done']),
    source: z.string().optional(),
    sourceUrl: z.url().optional(),
    startedAt: z.coerce.date(),
    completedAt: z.coerce.date().optional(),
    // Percent complete, for items still being learned
    progress: z.number().int().min(0).max(100).optional(),
    hours: z.number().min(0).optional(),
    summary: localized.optional(),
    skills: z.array(reference('skills')).default([]),
  }),
});

// Optional English notes for a learning item: same file name as in learning/, body only.
const learningEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/learning-en' }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/certificates' }),
  schema: z.object({
    title: localized,
    issuer: reference('issuers'),
    issuedAt: z.coerce.date(),
    expiresAt: z.coerce.date().optional(),
    credentialId: z.string().optional(),
    verifyUrl: z.url().optional(),
    // Path to a file in public/, e.g. "certificates/aws.png"
    image: z.string().optional(),
    score: z.string().optional(),
    description: localized.optional(),
    // Show on the home page
    featured: z.boolean().default(false),
    // The learning item that led to this certificate
    learning: reference('learning').optional(),
    skills: z.array(reference('skills')).default([]),
  }),
});

export const collections = { categories, issuers, skills, learning, learningEn, certificates };
