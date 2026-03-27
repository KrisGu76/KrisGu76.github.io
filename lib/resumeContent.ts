/**
 * Rich resume content — independent from website display text.
 * Each experience has 2 bullets; each project has 2 bullets.
 * Use **text** for bold phrases (parsed in ResumeExportModal).
 * Edit this file to customise what appears in the exported resume.
 */

export interface BulletPair {
  zh: [string, string];
  en: [string, string];
}

// ── Internship experience bullets ─────────────────────────────────────────
// Key = exp.company (Chinese name from page.tsx)
export const EXP_CONTENT: Record<string, BulletPair> = {};

// ── Research project bullets ───────────────────────────────────────────────
// Key = proj.title (Chinese name from page.tsx)
export const PROJ_CONTENT: Record<string, BulletPair> = {};
