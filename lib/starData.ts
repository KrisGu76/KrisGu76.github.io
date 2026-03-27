// STAR data for each experience — shared by website cards and resume modal

export interface StarEntry {
  title: string;
  titleEn: string;
  s: string; sEn: string;
  t: string; tEn: string;
  a: string; aEn: string;
  r: string; rEn: string;
}

/** Map keyed by exp.company (Chinese name) */
export const STAR_DATA: Record<string, StarEntry[]> = {};
