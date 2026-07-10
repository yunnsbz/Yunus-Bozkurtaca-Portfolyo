
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

export enum ProjectStatus {
  ONGOING = 'ongoing',
  RELEASED = 'released',
  COMPLETED = 'completed'
}

export const StatusTranslations: Record<Language, Record<ProjectStatus, string>> = {
  en: {
    [ProjectStatus.ONGOING]: 'In Development',
    [ProjectStatus.RELEASED]: 'Released',
    [ProjectStatus.COMPLETED]: 'Completed'
  },
  tr: {
    [ProjectStatus.ONGOING]: 'Geliştiriliyor',
    [ProjectStatus.RELEASED]: 'Yayında',
    [ProjectStatus.COMPLETED]: 'Tamamlandı'
  }
};

export enum ProjectLinkType {
  GITHUB = 'github',
  STORE = 'store',
  DEMO = 'demo',
  VIDEO = 'video',
  ARTICLE = 'article'
}

/**
 * Canonical spelling for every technology used across projects. Referencing
 * these instead of free strings keeps `Qt 6.8` from also appearing as `QT6.8`.
 */
export enum Tech {
  // Languages
  C = 'C',
  CPP = 'C++',
  CPP17 = 'C++17',
  CSHARP = 'C#',
  JAVA = 'Java',
  KOTLIN = 'Kotlin',

  // Engines, frameworks & APIs
  UNITY = 'Unity',
  UNITY_EDITOR_API = 'Unity Editor API',
  UI_TOOLKIT = 'UI Toolkit',
  ADDRESSABLES = 'Addressables',
  JOB_SYSTEM = 'Unity Job System',
  UNITASK = 'UniTask',
  SHADER_GRAPH = 'Shader Graph',
  QT = 'Qt 6.8',
  JAVA_SWING = 'Java Swing',
  WINDOWS_SHELL_API = 'Windows Shell API',

  // Tooling
  QT_CREATOR = 'Qt Creator',
  CMAKE = 'CMake',
  MINGW = 'MinGW-w64',
  ANDROID_STUDIO = 'Android Studio',
  NETBEANS = 'NetBeans',
  VS_CODE = 'VS Code',
  BLENDER = 'Blender',
  ILLUSTRATOR = 'Adobe Illustrator',

  // Data & services
  MS_ACCESS = 'MS Access',
  ADMOB = 'Google AdMob',

  // Collaboration
  GIT = 'Git',
  UNITY_VERSION_CONTROL = 'Unity Version Control',
  MIRO = 'Miro',
  JIRA = 'Jira'
}

export interface LocalizedString {
  en: string;
  tr: string;
}

export interface LocalizedArray {
  en: string[];
  tr: string[];
}

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
  /** Overrides the default label derived from `type`. */
  label?: LocalizedString;
}

export interface ProjectImage {
  src: string;
  caption?: LocalizedString;
}

/**
 * A single engineering problem and how it was solved. This is the narrative
 * layer: `features` says what the project does, `challenges` says how it was
 * built and why those decisions were made.
 */
export interface Challenge {
  problem: LocalizedString;
  solution: LocalizedString;
  outcome?: LocalizedString;
}

export interface Project {
  id: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  categories: ProjectCategory[];
  status: ProjectStatus;
  /** Omit when the team context is unknown rather than guessing. */
  role?: LocalizedString;
  /** Omit when unknown; 1 renders as "Solo Project". */
  teamSize?: number;
  /** May be empty for projects with nothing presentable to show yet. */
  images: ProjectImage[];
  /** Omit to fall back to the neutral dark backdrop. */
  bgImageUrl?: string;
  gifUrl?: string;
  youtubeId?: string;
  links?: ProjectLink[];
  date: LocalizedString;
  /** At-a-glance capabilities, rendered in the sidebar. */
  features: LocalizedArray;
  techStack: Tech[];
  challenges?: Challenge[];
}
