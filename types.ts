
export enum ProjectCategory {
  GAME_MAKING = 'Game Making',
  TOOL_MAKING = 'Tool Making',
  ANDROID = 'Android'
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory;
  imageUrl: string;
  bgImageUrl: string;
  gifUrl?: string;
  youtubeId?: string;
  githubUrl?: string;
  storeUrl?: string;
  date: string;
  features: string[];
  technicalDetails?: string[];
}
