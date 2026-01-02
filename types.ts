
export enum ProjectCategory {
  GAME_MAKING = 'Game Making',
  TOOL_MAKING = 'Tool Making',
  MOBILE = 'Mobile',
  DESKTOP = 'Desktop Applications'
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  categories: ProjectCategory[];
  images: string[];
  bgImageUrl: string;
  gifUrl?: string;
  youtubeId?: string;
  githubUrl?: string;
  storeUrl?: string;
  date: string;
  features: string[];
  techStack: string[];
  technicalDetails?: string[];
}
