
import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fps-simulation',
    title: 'FPS Simulation Game for PC',
    shortDescription: 'High-performance FPS simulation with custom editor tools and dynamic physics.',
    longDescription: 'Developed a robust FPS simulation framework leveraging Unity\'s advanced features. This project focuses on high-performance collision interactions and optimized asset management using Addressables.',
    category: ProjectCategory.GAME_MAKING,
    imageUrl: 'https://picsum.photos/seed/fps1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/fpsbg/1920/1080',
    date: 'May 2025 - Present',
    //youtubeId: 'dQw4w9WgXcQ',
    features: [
      'Custom editor tool using Unity UI Toolkit reducing setup time by 95%',
      'Dynamic physics system handling thousands of collision interactions',
      'On-demand asset streaming with Unity Addressables',
      'Pre-allocation techniques for RAM management'
    ],
    technicalDetails: [
      'Addressable Assets system integration for 40% faster initial load times.',
      'Integration of Unity\'s Job System for heavy mathematical computations.',
      'Custom pooling system reducing Garbage Collection calls by 85%.',
    ]
  },
  {
    id: 'unity-scriptable-tool',
    title: 'Unity Scriptable Object Tool',
    shortDescription: 'Workflow optimization tool for side-by-side editing in Unity.',
    longDescription: 'A custom Unity Editor tool designed to solve inefficiencies in managing multiple Scriptable Objects. It allows developers to edit various types of data within a single, streamlined window.',
    category: ProjectCategory.TOOL_MAKING,
    imageUrl: 'https://picsum.photos/seed/tool1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/toolbg/1920/1080',
    date: 'Feb 2025 - May 2025',
    features: [
      'Side-by-side editing of multiple Scriptable Objects',
      'Multi-type editing within a single window',
      'Streamlined development workflow',
      'Intuitive UI integration with Unity Editor'
    ],
    technicalDetails: [
      'Undo/Redo support integration using UnityEditor.Undo system.',
      'Persistent window state management across Unity sessions.',
    ]
  },
  {
    id: '3d-top-down-shooter',
    title: '3D Top-Down Shooter Mobile',
    shortDescription: 'Immersive mobile shooter with procedural animations and complex AI.',
    longDescription: 'A comprehensive 3D mobile game project featuring advanced framework development. The game implements complex AI systems using coroutines and performance-heavy mechanics like object pooling.',
    category: ProjectCategory.GAME_MAKING,
    imageUrl: 'https://picsum.photos/seed/shooter1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/shooterbg/1920/1080',
    date: 'July 2024 - June 2025',
    features: [
      'Advanced 3D mobile game framework using C#',
      'Procedural animations for immersive mechanics',
      'Complex AI systems managed via efficient coroutines',
      'Object pooling and culling for mobile optimization'
    ],
    technicalDetails: [
      'Mobile-optimized lighting using baked lightmaps and probe lit dynamic objects.',
      'State Machine based AI with sensory perception (vision/hearing cones).',
    ]
  },
  {
    id: 'qt-file-manager',
    title: 'QT File Manager',
    shortDescription: 'Multithreaded desktop file manager built with C++ and Qt.',
    longDescription: 'An efficient and responsive desktop application for file management. It utilizes multithreading for asynchronous operations and features a custom-built intuitive GUI.',
    category: ProjectCategory.TOOL_MAKING,
    imageUrl: 'https://picsum.photos/seed/file1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/filebg/1920/1080',
    date: 'Mar 2025 - Present',
    features: [
      'Multithreaded asynchronous operations',
      'Signal-slot mechanism for drag-and-drop',
      'Custom folder tree navigation',
      'Robust error handling and OOP principles'
    ],
    technicalDetails: [
      'Lock-free queue implementation for inter-thread file operation requests.',
      'Custom QFileSystemModel subclass for enhanced icon caching.',
      'Deep integration with Windows Shell API for context menu support.',
    ]
  },
  {
    id: 'block-saga-mobile',
    title: 'Block Saga Mobile Game',
    shortDescription: 'Published 2D mobile game available on Google Play Store.',
    longDescription: 'Successfully published a large-scale 2D mobile game on the Play Store. This project involved deep optimization to ensure smooth gameplay on a wide range of mobile devices.',
    category: ProjectCategory.ANDROID,
    imageUrl: 'https://picsum.photos/seed/block1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/blockbg/1920/1080',
    date: 'Jan 2024 - Nov 2024',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.KartGameClub.Blocksaga',
    features: [
      'Full lifecycle development from concept to publication',
      'Performance bottleneck resolution using coroutines',
      'Agile workflow coordination using Miro and Jira',
      'Responsive UI for various screen ratios'
    ],
    technicalDetails: [
      'AdMob mediation setup for optimized revenue generation.',
    ]
  },
  {
    id: 'scientific-calculator',
    title: 'Scientific Calculator App',
    shortDescription: 'Feature-rich calculator built with Kotlin and Android Studio.',
    longDescription: 'A modern Android application implementing advanced mathematical functions. The project focuses on clean UI design and robust object-oriented programming in Kotlin.',
    category: ProjectCategory.ANDROID,
    imageUrl: 'https://picsum.photos/seed/calc1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/calcbg/1920/1080',
    date: 'Sep 2023',
    features: [
      'Advanced mathematical function integration',
      'Clean and intuitive UI using modern Android components',
      'Deep object-oriented implementation in Kotlin',
      'Optimized for mobile performance'
    ],
    technicalDetails: [
      'Support for both light and dark modes with Material Design 3.'
    ]
  },
  {
    id: 'financial-strategy-simulation',
    title: 'Financial Strategy Simulation',
    shortDescription: 'Interactive strategy monitoring UI using C++17 and Qt.',
    longDescription: 'A specialized tool for monitoring financial strategies. It features custom UI elements built with QPaint and high-performance filtering for complex data sets.',
    category: ProjectCategory.TOOL_MAKING,
    imageUrl: 'https://picsum.photos/seed/fin1/800/600',
    bgImageUrl: 'https://picsum.photos/seed/finbg/1920/1080',
    date: 'June 2025',
    features: [
      'Interactive UI built with C++17 and Qt',
      'Custom UI elements using QPaint',
      'Proxy models for efficient filtering and sorting',
      'Clean, maintainable software architecture'
    ],
    technicalDetails: [
      'MVVM architecture pattern with LiveData for UI reactivity.',
      'Real-time data stream processing with low-latency signal-slot handling.',
    ]
  }
];
