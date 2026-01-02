
import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fps-simulation',
    title: 'FPS Simulation Game for PC',
    shortDescription: 'High-performance FPS simulation with custom editor tools and dynamic physics.',
    longDescription: 'Developed a robust FPS simulation framework leveraging Unity\'s advanced features. This project focuses on high-performance collision interactions and optimized asset management using Addressables.',
    categories: [ProjectCategory.GAME_MAKING],
    images: [
      '/images/sport-bicycle-pattern-background.jpg',
    ],
    bgImageUrl: '/images/sport-bicycle-pattern-background.jpg',
    date: 'May 2025 - Present',
    //youtubeId: 'dQw4w9WgXcQ',
    gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTN3YjBiNnFzZm42c3phbHhqbjZtOXZzeXhyZDV3NWloNm1yMzVxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZtekN7LuGnulfAQ/giphy.gif',
    features: [
      'Custom editor tool using Unity UI Toolkit reducing setup time by 95%',
      'Dynamic physics system handling thousands of collision interactions',
      'On-demand asset streaming with Unity Addressables',
      'Pre-allocation techniques for RAM management'
    ],
    techStack: ['Unity', 'C#', 'UI Toolkit', 'Addressables', 'Shader Graph', 'Git', 'Unity Version Control'],
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
    categories: [ProjectCategory.TOOL_MAKING],
    images: [
      'images/scriptable-object-manager-galery1.png',
    ],
    bgImageUrl: '/images/scriptable-object-manager-galery1.png',
    githubUrl: 'https://github.com/yunnsbz/Unity-Scriptable-Object-Tool',
    date: 'Feb 2025 - May 2025',
    features: [
      'Side-by-side editing of multiple Scriptable Objects',
      'Multi-type editing within a single window',
      'Streamlined development workflow',
      'Intuitive UI integration with Unity Editor'
    ],
    techStack: ['Unity', 'C#', 'UI Toolkit', 'Git'],
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
    categories: [ProjectCategory.GAME_MAKING, ProjectCategory.MOBILE],
    images: [
      'images/topdown-shooter-galery4.png',
      'images/topdown-shooter-galery1.png',
      'images/topdown-shooter-galery2.png',
      'images/topdown-shooter-galery3.png',
    ],
    bgImageUrl: 'images/topdown-shooter-galery4.png',
    date: 'July 2024 - June 2025',
    features: [
      'Advanced and extensible gameplay systems for a 3D mobile game',
      'Immersive player experience with responsive physics and procedural animations',
      'Smooth and intuitive in-game user interfaces',
      'Optimized AI behavior for consistent real-time gameplay',
      'Automated in-game map generation with visual enhancements',
    ],
    techStack: ['Unity', 'C#', 'Git', 'Unity Version Control', 'Adobe Illustrator', 'Blender'],
    technicalDetails: [
      'Developed with Unity and C# using a scalable architecture',
      'Implemented advanced coroutine management for complex AI systems',
      'Applied object pooling, culling, and performance profiling techniques',
      'Built custom Unity editor tools to improve development workflows',
      'Developed a state machine based Enemy AI with sensory perception (vision/hearing cones).',
    ]
  },
  {
    id: 'qt-file-manager',
    title: 'QT File Manager',
    shortDescription: 'Multithreaded desktop file manager built with C++ and Qt.',
    longDescription: 'An efficient and responsive desktop application for file management. It utilizes multithreading for asynchronous operations and features a custom-built intuitive GUI.',
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: [
      'images/file-manager-galery1.png',
      'images/file-manager-galery2.png',
      'images/file-manager-galery3.png'
    ],
    bgImageUrl: '/images/file-manager-galery1.png',
    githubUrl: 'https://github.com/yunnsbz/File-Manager',
    date: 'Mar 2025 - Present',
    features: [
      'Multithreaded asynchronous operations',
      'Signal-slot mechanism for drag-and-drop',
      'Custom folder tree navigation'
    ],
    techStack: ['QT8', 'C++', 'QT Creator', 'Git'],
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
    categories: [ProjectCategory.GAME_MAKING, ProjectCategory.MOBILE],
    images: [
      'images/block-saga-galery1.png',
      'images/block-saga-galery2.png',
      'images/block-saga-galery3.png',
      'images/block-saga-galery4.png',
    ],
    bgImageUrl: 'images/block-saga-galery2.png',
    date: 'Jan 2024 - Nov 2024',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.KartGameClub.Blocksaga',
    features: [
      'Full lifecycle development from concept to publication',
      'Performance bottleneck resolution using coroutines',
      'Agile workflow coordination using Miro and Jira',
      'Responsive UI for various screen ratios'
    ],
    techStack: ['Unity', 'C#', 'Addressables', 'Git', 'Unity Version Control', 'Google AdMob'],
    technicalDetails: [
      'Google AdMob for Rewarded Ads',
    ]
  },
  {
    id: 'scientific-calculator',
    title: 'Scientific Calculator App',
    shortDescription: 'Feature-rich calculator built with Kotlin and Android Studio.',
    longDescription: 'A modern Android application implementing advanced mathematical functions. The project focuses on clean UI design and robust object-oriented programming in Kotlin.',
    categories: [ProjectCategory.MOBILE],
    images: [
      'images/calculator-galery1.png',
      'images/calculator-galery2.png'
    ],
    bgImageUrl: 'images/calculator-galery1.png',
    githubUrl: 'https://github.com/yunnsbz/calculator',
    date: 'Sep 2023',
    features: [
      'Advanced mathematical function integration',
      'Clean and intuitive UI using modern Android components',
      'Deep object-oriented implementation in Kotlin',
      'Optimized for mobile performance'
    ],
    techStack: ['Kotlin', 'Android Studio'],
    technicalDetails: [
      'Support for both light and dark modes with Material Design 3.'
    ]
  },
  {
    id: 'financial-strategy-simulation',
    title: 'Financial Strategy Simulation',
    shortDescription: 'Interactive strategy monitoring UI using C++17 and Qt.',
    longDescription: 'A specialized tool for monitoring financial strategies. It features custom UI elements built with QPaint and high-performance filtering for complex data sets.',
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: [
      'images/strategy-sim-galery1.png'
    ],
    bgImageUrl: 'images/strategy-sim-galery1.png',
    date: 'June 2025',
    githubUrl: 'https://github.com/yunnsbz/StrategyMonitor',
    features: [
      'Interactive UI built with C++17 and Qt',
      'Custom UI elements using QPaint',
      'Proxy models for efficient filtering and sorting',
      'Clean, maintainable software architecture'
    ],
    techStack: ['QT8', 'C++', 'QT Creator', 'Git'],
    technicalDetails: [
      'MVVM architecture pattern with LiveData for UI reactivity.',
      'Real-time data stream processing with low-latency signal-slot handling.',
    ]
  },
  {
    id: 'book-shop-manager',
    title: 'Book Shop Manager',
    shortDescription: 'Java bookstore app with user purchases and admin management.',
    longDescription: 'This project is a bookstore sales and automation application developed using Java, featuring separate interfaces for users and administrators. Users can search for and purchase books, while administrators can manage book information and control the system after logging in. The application was developed as a second-year semester project and achieved a full score due to its detailed visual interface and functionality.',
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: [
      'images/book-shop-manager-galery1.png',
      'images/book-shop-manager-galery2.png',
      'images/book-shop-manager-galery3.png'
    ],
    bgImageUrl: 'images/book-shop-manager-galery2.png',
    date: 'Feb 2023 - June 2023',
    features: [
      'Book search functionality',
      'Editing book information after administrator login',
      'Purchase and sales operations',
      'Database integration using MS Access'
    ],
    techStack: ['Java', 'Java Swing', 'Netbeans Ide', 'MS Access'],
    
  },
  {
    id: 'okey-game',
    title: '101 Okey Command-Line Game',
    shortDescription: 'Command-line 101 Okey game playable against AI',
    longDescription: 'A command-line implementation of the popular board game 101 Okey. The game supports tile distribution, turn-based gameplay, and core rules in a text-based format. Developed in C during university to strengthen algorithmic thinking and game logic skills.',
    categories: [ProjectCategory.GAME_MAKING],
    images: [
      'images/okey-game-galery1.png',
      'images/okey-game-galery2.png',
      'images/okey-game-galery3.png',
    ],
    bgImageUrl: '/images/okey-game-galery3.png',
    githubUrl: 'https://github.com/yunnsbz/101okey',
    date: 'Mar 2022 - Apr 2022',
    features: [
      'Playable 101 Okey game via command line',
      'AI opponent with rule-based decision making',
      'Turn-based gameplay and player order management',
      'Full tile distribution and hand management',
      'Text-based game state visualization'
    ],
    techStack: ['C Language', 'MinGW-w64', 'VSCode Ide'],
    technicalDetails: [
      'Developed using C language',
      'Focused on algorithm design and game logic',
      'Compiled with MinGW-w64',
      'Developed in Visual Studio Code',
      'Console-based input/output system',
    ]
  }
];
