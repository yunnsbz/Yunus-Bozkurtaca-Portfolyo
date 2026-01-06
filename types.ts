
export type Language = 'en' | 'tr';

export enum ProjectCategory {
  GAME_MAKING = 'Game Development',
  TOOL_MAKING = 'Tool Making',
  MOBILE = 'Mobile Development',
  DESKTOP = 'Desktop Applications'
}

export const CategoryTranslations: Record<Language, Record<ProjectCategory, string>> = {
  en: {
    [ProjectCategory.GAME_MAKING]: 'Game Development',
    [ProjectCategory.TOOL_MAKING]: 'Tool Making',
    [ProjectCategory.MOBILE]: 'Mobile Development',
    [ProjectCategory.DESKTOP]: 'Desktop Apps'
  },
  tr: {
    [ProjectCategory.GAME_MAKING]: 'Oyun Geliştirme',
    [ProjectCategory.TOOL_MAKING]: 'Araç Geliştirme',
    [ProjectCategory.MOBILE]: 'Mobil Geliştirme',
    [ProjectCategory.DESKTOP]: 'Masaüstü Uygulamaları'
  }
};

export interface LocalizedString {
  en: string;
  tr: string;
}

export interface LocalizedArray {
  en: string[];
  tr: string[];
}

export interface Project {
  id: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  categories: ProjectCategory[];
  images: string[];
  bgImageUrl: string;
  gifUrl?: string;
  youtubeId?: string;
  githubUrl?: string;
  storeUrl?: string;
  date: LocalizedString;
  features: LocalizedArray;
  techStack: string[];
  technicalDetails?: LocalizedArray;
}
