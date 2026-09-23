import { getCollection, type CollectionEntry } from 'astro:content';

export type LearningEntry = CollectionEntry<'learning'>;
export type CertificateEntry = CollectionEntry<'certificates'>;
export type SkillEntry = CollectionEntry<'skills'>;

const byId = <T extends { id: string }>(entries: T[]) => new Map(entries.map((e) => [e.id, e]));

/** Loads every collection once, sorted newest first, with lookups by id. */
export async function loadData() {
  const [learning, certificates, skills, issuers, categories] = await Promise.all([
    getCollection('learning'),
    getCollection('certificates'),
    getCollection('skills'),
    getCollection('issuers'),
    getCollection('categories'),
  ]);
  learning.sort((a, b) => b.data.startedAt.getTime() - a.data.startedAt.getTime());
  certificates.sort((a, b) => b.data.issuedAt.getTime() - a.data.issuedAt.getTime());
  return {
    learning,
    certificates,
    skills,
    issuers,
    categories,
    skillById: byId(skills),
    issuerById: byId(issuers),
    categoryById: byId(categories),
    learningById: byId(learning),
  };
}

export function isExpired(cert: CertificateEntry, now = new Date()): boolean {
  return cert.data.expiresAt !== undefined && cert.data.expiresAt < now;
}
