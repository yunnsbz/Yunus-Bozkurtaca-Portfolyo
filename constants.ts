import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fp-simulation',
    title: { en: 'First Person Simulation Game for PC', tr: 'PC için Birinci Şahıs Simülasyon Oyunu' },
    shortDescription: {
      en: 'High-performance simulation game with custom editor tools and dynamic physics.',
      tr: 'özel editör araçları ve dinamik fizik sistemleri içeren bir simülasyon oyunu.'
    },
    longDescription: {
      en: 'Developed a robust First Person simulation framework leveraging Unity\'s advanced features. This project focuses on high-performance collision interactions and optimized asset management using Addressables.',
      tr: 'Unity’nin gelişmiş özelliklerinden faydalanılarak sağlam bir simülasyon altyapısı geliştirildi. Proje, yüksek performanslı çarpışma etkileşimleri ve Addressables kullanılarak optimize edilmiş varlık yönetimine odaklanmaktadır.'
    },
    categories: [ProjectCategory.GAME_MAKING],
    images: ['/images/bike-illustration.jpg'],
    bgImageUrl: '/images/sport-bicycle-pattern-background.jpg',
    date: { en: 'May 2025 - Present', tr: 'Mayıs 2025 - Devam Ediyor' },
    //gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTN3YjBiNnFzZm42c3phbHhqbjZtOXZzeXhyZDV3NWloNm1yMzVxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZtekN7LuGnulfAQ/giphy.gif',
    features: {
      en: [
        'Custom editor tool using Unity UI Toolkit reducing setup time by 95%',
        'Dynamic physics system handling thousands of collision interactions',
        'On-demand asset streaming with Unity Addressables',
        'Pre-allocation techniques for RAM management'
      ],
      tr: [
        'Unity UI Toolkit kullanılarak geliştirilen özel editör aracı ile kurulum süresinin %95 azaltılması',
        'Binlerce çarpışma etkileşimini yöneten dinamik fizik sistemi',
        'Unity Addressables ile isteğe bağlı varlık yükleme',
        'RAM yönetimi için ön bellekleme (pre-allocation) teknikleri'
      ]
    },
    techStack: ['Unity', 'C#', 'UI Toolkit', 'Addressables', 'Shader Graph', 'Git', 'Unity Version Control'],
    technicalDetails: {
      en: [
        'Addressable Assets system integration for 40% faster initial load times.',
        'Integration of Unity\'s Job System for heavy mathematical computations.',
        'Custom pooling system reducing Garbage Collection calls by 85%.',
      ],
      tr: [
        'Addressable Assets sistemi entegrasyonu ile başlangıç yükleme süresinde %40 iyileştirme',
        'Yoğun matematiksel hesaplamalar için Unity Job System entegrasyonu',
        'Garbage Collection çağrılarını %85 azaltan özel pooling sistemi'
      ]
    },
  },

  {
    id: 'unity-scriptable-tool',
    title: { en: 'Unity Scriptable Object Tool', tr: 'Unity Scriptable Object Aracı' },
    shortDescription: {
      en: 'Workflow optimization tool for side-by-side editing in Unity.',
      tr: 'Unity içerisinde yan yana düzenleme imkânı sunan iş akışı optimizasyon aracı.'
    },
    longDescription: {
      en: 'A custom Unity Editor tool designed to solve inefficiencies in managing multiple Scriptable Objects. It allows developers to edit various types of data within a single, streamlined window.',
      tr: 'Birden fazla Scriptable Object yönetiminde yaşanan verimsizlikleri çözmek için geliştirilmiş özel bir Unity Editor aracıdır. Geliştiricilerin farklı veri türlerini tek ve sade bir pencerede düzenlemesine olanak tanır.'
    },
    categories: [ProjectCategory.TOOL_MAKING],
    images: ['/images/scriptable-object-manager-gallery1.jpg'],
    bgImageUrl: '/images/scriptable-object-manager-gallery1.jpg',
    githubUrl: 'https://github.com/yunnsbz/Unity-Scriptable-Object-Tool',
    date: { en: 'Feb 2025 - May 2025', tr: 'Şubat 2025 - Mayıs 2025' },
    features: {
      en: [
        'Side-by-side editing of multiple Scriptable Objects',
        'Multi-type editing within a single window',
        'Streamlined development workflow',
        'Intuitive UI integration with Unity Editor'
      ],
      tr: [
        'Birden fazla Scriptable Object’in yan yana düzenlenmesi',
        'Tek pencere üzerinden çoklu veri türü düzenleme',
        'Daha verimli ve akıcı geliştirme süreci',
        'Unity Editor ile uyumlu, sezgisel kullanıcı arayüzü'
      ]
    },
    techStack: ['Unity', 'C#', 'UI Toolkit', 'Git'],
    technicalDetails: {
      en: [
        'Undo/Redo support integration using UnityEditor.Undo system.',
        'Persistent window state management across Unity sessions.',
      ],
      tr: [
        'UnityEditor.Undo sistemi ile Undo/Redo desteği',
        'Unity oturumları arasında pencere durumunun korunması'
      ]
    },
  },

  {
    id: '3d-top-down-shooter',
    title: { en: '3D Top-Down Shooter Mobile Game', tr: '3D Top-Down Shooter Mobil Oyun' },
    shortDescription: {
      en: 'Immersive mobile shooter with procedural animations and complex AI.',
      tr: 'Prosedürel animasyonlar ve gelişmiş yapay zekâ içeren etkileyici mobil shooter oyunu.'
    },
    longDescription: {
      en: 'A comprehensive 3D mobile game project featuring advanced framework development. The game implements complex AI systems using coroutines and performance-heavy mechanics like object pooling.',
      tr: 'Gelişmiş altyapı geliştirmeleri içeren kapsamlı bir 3D mobil oyun projesidir. Oyun, coroutine tabanlı karmaşık yapay zekâ sistemleri ve object pooling gibi performans odaklı mekanikler barındırmaktadır.'
    },
    categories: [ProjectCategory.GAME_MAKING, ProjectCategory.MOBILE],
    images: [
      '/images/top-down-galery5.jpeg',
      '/images/top-down-galery6.jpeg',
      '/images/topdown-shooter-gallery4.png',
      '/images/topdown-shooter-gallery2.png',
      '/images/topdown-shooter-gallery3.png',
    ],
    bgImageUrl: '/images/topdown-shooter-gallery4.png',
    date: { en: 'July 2024 - June 2025', tr: 'Temmuz 2024 - Haziran 2025' },
    features: {
      en: [
        'Advanced and extensible gameplay systems for a 3D mobile game',
        'Immersive player experience with responsive physics and procedural animations',
        'Smooth and intuitive in-game user interfaces',
        'Optimized AI behavior for consistent real-time gameplay',
        'Automated in-game map generation with visual enhancements',
      ],
      tr: [
        '3D mobil oyunlar için gelişmiş ve genişletilebilir oynanış sistemleri',
        'Duyarlı fizik ve prosedürel animasyonlarla güçlü oyuncu deneyimi',
        'Akıcı ve sezgisel oyun içi kullanıcı arayüzleri',
        'Gerçek zamanlı oynanış için optimize edilmiş yapay zekâ davranışları',
        'Görsel iyileştirmelerle desteklenen otomatik harita üretimi'
      ]
    },
    techStack: ['Unity', 'C#', 'Git', 'Unity Version Control', 'Adobe Illustrator', 'Blender'],
    technicalDetails: {
      en: [
        'Developed with Unity and C# using a scalable architecture',
        'Implemented advanced coroutine management for complex AI systems',
        'Applied object pooling, culling, and performance profiling techniques',
        'Built custom Unity editor tools to improve development workflows',
        'Developed a state machine based Enemy AI with sensory perception (vision/hearing cones).',
      ],
      tr: [
        'Ölçeklenebilir bir mimari ile Unity ve C# kullanılarak geliştirildi',
        'Karmaşık yapay zekâ sistemleri için gelişmiş coroutine yönetimi',
        'Object pooling, culling ve performans profilleme teknikleri uygulandı',
        'Geliştirme sürecini iyileştirmek için özel Unity editör araçları geliştirildi',
        'Görme ve işitme algısına sahip state machine tabanlı düşman yapay zekâsı geliştirildi'
      ]
    },
  },

  {
    id: 'block-saga-mobile',
    title: { en: 'Block Saga Mobile Game', tr: 'Block Saga Mobil Oyun' },
    shortDescription: {
      en: 'Published 2D mobile game available on Google Play Store.',
      tr: 'Google Play Store’da yayımlanmış 2D mobil oyun.'
    },
    longDescription: {
      en: 'Successfully published a large-scale 2D mobile game on the Play Store. This project involved deep optimization to ensure smooth gameplay on a wide range of mobile devices.',
      tr: 'Google Play Store’da başarılı şekilde yayımlanmış büyük ölçekli bir 2D mobil oyundur. Proje, farklı donanımlara sahip cihazlarda akıcı oynanış sağlamak için yoğun optimizasyon çalışmaları içermektedir.'
    },
    categories: [ProjectCategory.GAME_MAKING, ProjectCategory.MOBILE],
    images: [
      '/images/block-saga-gallery1.png',
      '/images/block-saga-gallery2.png',
      '/images/block-saga-gallery3.png',
      '/images/block-saga-gallery4.png',
    ],
    bgImageUrl: '/images/block-saga-gallery2.png',
    date: { en: 'Jan 2024 - Nov 2024', tr: 'Ocak 2024 - Kasım 2024' },
    storeUrl: 'https://play.google.com/store/apps/details?id=com.KartGameClub.Blocksaga',
    features: {
      en: [
        'Full lifecycle development from concept to publication',
        'Performance bottleneck resolution using coroutines',
        'Agile workflow coordination using Miro and Jira',
        'Responsive UI for various screen ratios',
        'Google AdMob for Rewarded Ads'
      ],
      tr: [
        'Fikir aşamasından yayınlanmaya kadar tam geliştirme süreci',
        'Coroutine kullanarak performans darboğazlarının giderilmesi',
        'Miro ve Jira ile çevik iş akışı yönetimi',
        'Farklı ekran oranlarına uyumlu kullanıcı arayüzü',
        'Ödüllü reklamlar için Google AdMob entegrasyonu'
      ]
    },
    techStack: ['Unity', 'C#', 'Addressables', 'Git', 'Unity Version Control', 'Google AdMob'],
  },

  {
    id: 'qt-file-manager',
    title: { en: 'QT File Manager', tr: 'QT Dosya Yöneticisi' },
    shortDescription: {
      en: 'Multithreaded desktop file manager built with C++ and Qt.',
      tr: 'C++ ve Qt ile geliştirilmiş, multithreaded masaüstü dosya yöneticisi.'
    },
    longDescription: {
      en: 'An efficient and responsive desktop application for file management. It utilizes multithreading for asynchronous operations and features a custom-built intuitive GUI.',
      tr: 'Dosya yönetimi için verimli ve hızlı tepki veren bir masaüstü uygulamasıdır. Asenkron işlemler için çok iş parçacığı kullanır ve özel olarak tasarlanmış sezgisel bir arayüze sahiptir.'
    },
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: [
      '/images/file-manager-gallery1.png',
      '/images/file-manager-gallery2.png',
      '/images/file-manager-gallery3.png'
    ],
    bgImageUrl: '/images/file-manager-gallery1.png',
    githubUrl: 'https://github.com/yunnsbz/File-Manager',
    date: { en: 'Mar 2025 - Present', tr: 'Mart 2025 - Devam Ediyor' },
    features: {
      en: [
        'Multithreaded asynchronous operations',
        'Signal-slot mechanism for drag-and-drop',
        'Custom folder tree navigation'
      ],
      tr: [
        'Çok iş parçacıklı asenkron işlemler',
        'Sürükle-bırak için signal-slot mekanizması',
        'Özel klasör ağaç navigasyonu'
      ]
    },
    techStack: ['QT6.8', 'C++', 'QT Creator', 'Git'],
    technicalDetails: {
      en: [
        'Lock-free queue implementation for inter-thread file operation requests.',
        'Custom QFileSystemModel subclass for enhanced icon caching.',
        'Deep integration with Windows Shell API for context menu support.',
      ],
      tr: [
        'İş parçacıkları arası dosya işlemleri için lock-free kuyruk implementasyonu',
        'Gelişmiş ikon önbellekleme için özel QFileSystemModel türevi',
        'Sağ tık menüsü desteği için Windows Shell API entegrasyonu'
      ]
    },
  },

  {
    id: 'financial-strategy-simulation',
    title: { en: 'Financial Strategy Simulation', tr: 'Finansal Strateji Simülasyonu' },
    shortDescription: {
      en: 'Interactive strategy monitoring UI using C++17 and Qt.',
      tr: 'C++17 ve Qt kullanılarak geliştirilmiş etkileşimli strateji izleme arayüzü.'
    },
    longDescription: {
      en: 'A specialized tool for monitoring financial strategies. It features custom UI elements built with QPaint and high-performance filtering for complex data sets.',
      tr: 'Finansal stratejilerin izlenmesi için geliştirilmiş özel bir araçtır. QPaint ile oluşturulmuş özel arayüz bileşenleri ve karmaşık veri setleri için yüksek performanslı filtreleme içerir.'
    },
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: ['/images/strategy-sim-gallery1.png'],
    bgImageUrl: '/images/strategy-sim-gallery1.png',
    date: { en: 'June 2025', tr: 'Haziran 2025' },
    githubUrl: 'https://github.com/yunnsbz/StrategyMonitor',
    features: {
      en: [
        'Interactive UI built with C++17 and Qt',
        'Custom UI elements using QPaint',
        'Proxy models for efficient filtering and sorting',
        'Clean, maintainable software architecture'
      ],
      tr: [
        'C++17 ve Qt ile geliştirilmiş etkileşimli arayüz',
        'QPaint kullanılarak oluşturulmuş özel UI bileşenleri',
        'Verimli filtreleme ve sıralama için proxy modeller',
        'Temiz ve sürdürülebilir yazılım mimarisi'
      ]
    },
    techStack: ['QT6.8', 'C++', 'QT Creator', 'Git'],
    technicalDetails: {
      en: [
        'MVVM architecture pattern with LiveData for UI reactivity.',
        'Real-time data stream processing with low-latency signal-slot handling.',
      ],
      tr: [
        'UI tepkiselliği için LiveData içeren MVVM mimarisi',
        'Düşük gecikmeli signal-slot yapısı ile gerçek zamanlı veri işleme'
      ]
    },
  },

  {
    id: 'okey-game',
    title: { en: '101 Okey Command-Line Game', tr: '101 Okey Komut Satırı Oyunu' },
    shortDescription: {
      en: 'Command-line 101 Okey game playable against AI',
      tr: 'Yapay zekâya karşı oynanabilen komut satırı tabanlı 101 Okey oyunu.'
    },
    longDescription: {
      en: 'A command-line implementation of the popular board game 101 Okey. The game supports tile distribution, turn-based gameplay, and core rules in a text-based format. Developed in C during university to strengthen algorithmic thinking and game logic skills.',
      tr: 'Popüler masa oyunu 101 Okey’in komut satırı tabanlı bir implementasyonudur. Oyun, taş dağıtımı, sıra tabanlı oynanış ve temel kuralları metin tabanlı olarak destekler. Üniversite döneminde algoritmik düşünme ve oyun mantığı becerilerini geliştirmek amacıyla C dilinde geliştirilmiştir.'
    },
    categories: [ProjectCategory.GAME_MAKING],
    images: [
      '/images/okey-game-gallery1.png',
      '/images/okey-game-gallery2.png',
      '/images/okey-game-gallery3.png',
    ],
    bgImageUrl: '/images/okey-game-gallery3.png',
    githubUrl: 'https://github.com/yunnsbz/101okey',
    date: { en: 'Mar 2022 - Apr 2022', tr: 'Mart 2022 - Nisan 2022' },
    features: {
      en: [
        'Playable 101 Okey game via command line',
        'AI opponent with rule-based decision making',
        'Turn-based gameplay and player order management',
        'Full tile distribution and hand management',
        'Text-based game state visualization'
      ],
      tr: [
        'Komut satırı üzerinden oynanabilen 101 Okey oyunu',
        'Kural tabanlı karar veren yapay zekâ rakip',
        'Sıra tabanlı oynanış ve oyuncu sırası yönetimi',
        'Tam taş dağıtımı ve el yönetimi',
        'Metin tabanlı oyun durumu görselleştirmesi'
      ]
    },
    techStack: ['C Language', 'MinGW-w64', 'VSCode Ide'],
    technicalDetails: {
      en: [
        'Developed using C language',
        'Focused on algorithm design and game logic',
        'Compiled with MinGW-w64',
        'Developed in Visual Studio Code',
        'Console-based input/output system',
      ],
      tr: [
        'C dili kullanılarak geliştirildi',
        'Algoritma tasarımı ve oyun mantığına odaklanıldı',
        'MinGW-w64 ile derlendi',
        'Visual Studio Code ortamında geliştirildi',
        'Konsol tabanlı giriş/çıkış sistemi'
      ]
    },
  },

  {
    id: 'scientific-calculator',
    title: { en: 'Scientific Calculator App', tr: 'Bilimsel Hesap Makinesi Uygulaması' },
    shortDescription: {
      en: 'Feature-rich calculator built with Kotlin and Android Studio.',
      tr: 'Kotlin ve Android Studio ile geliştirilmiş, kapsamlı özelliklere sahip hesap makinesi.'
    },
    longDescription: {
      en: 'A modern Android application implementing advanced mathematical functions. The project focuses on clean UI design and robust object-oriented programming in Kotlin.',
      tr: 'Gelişmiş matematiksel fonksiyonlar içeren modern bir Android uygulamasıdır. Proje, temiz arayüz tasarımı ve Kotlin ile sağlam nesne yönelimli programlamaya odaklanmaktadır.'
    },
    categories: [ProjectCategory.MOBILE],
    images: [
      '/images/calculator-gallery1.png',
      '/images/calculator-gallery2.png'
    ],
    bgImageUrl: '/images/calculator-gallery1.png',
    githubUrl: 'https://github.com/yunnsbz/calculator',
    date: { en: 'Sep 2023', tr: 'Eylül 2023' },
    features: {
      en: [
        'Advanced mathematical function integration',
        'Clean and intuitive UI using modern Android components',
        'Deep object-oriented implementation in Kotlin',
        'Optimized for mobile performance'
      ],
      tr: [
        'Gelişmiş matematiksel fonksiyon entegrasyonu',
        'Modern Android bileşenleri ile temiz ve sezgisel arayüz',
        'Kotlin ile derinlemesine nesne yönelimli yapı',
        'Mobil performans için optimize edilmiş yapı'
      ]
    },
    techStack: ['Kotlin', 'Android Studio'],
    technicalDetails: {
      en: ['Support for both light and dark modes with Material Design 3.'],
      tr: ['Material Design 3 ile açık ve koyu tema desteği']
    },
  },

  {
    id: 'book-shop-manager',
    title: { en: 'Book Shop Manager', tr: 'Kitapçı Yönetim Sistemi' },
    shortDescription: {
      en: 'Java bookstore app with user purchases and admin management.',
      tr: 'Kullanıcı satın alma ve yönetici paneli içeren Java tabanlı kitapçı uygulaması.'
    },
    longDescription: {
      en: 'This project is a bookstore sales and automation application developed using Java, featuring separate interfaces for users and administrators. Users can search for and purchase books, while administrators can manage book information and control the system after logging in. The application was developed as a second-year semester project and achieved a full score due to its detailed visual interface and functionality.',
      tr: 'Java kullanılarak geliştirilen bu proje, kullanıcılar ve yöneticiler için ayrı arayüzlere sahip bir kitap satış ve otomasyon uygulamasıdır. Kullanıcılar kitap arayıp satın alabilirken, yöneticiler giriş yaptıktan sonra kitap bilgilerini ve sistemi yönetebilir. İkinci sınıf dönem projesi olarak geliştirilmiş ve detaylı arayüzü ile tam not almıştır.'
    },
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: [
      '/images/book-shop-manager-gallery1.png',
      '/images/book-shop-manager-gallery2.png',
      '/images/book-shop-manager-gallery3.png'
    ],
    bgImageUrl: '/images/book-shop-manager-gallery2.png',
    date: { en: 'Feb 2023 - June 2023', tr: 'Şubat 2023 - Haziran 2023' },
    features: {
      en: [
        'Book search functionality',
        'Editing book information after administrator login',
        'Purchase and sales operations',
        'Database integration using MS Access'
      ],
      tr: [
        'Kitap arama fonksiyonu',
        'Yönetici girişi sonrası kitap bilgisi düzenleme',
        'Satın alma ve satış işlemleri',
        'MS Access ile veritabanı entegrasyonu'
      ]
    },
    techStack: ['Java', 'Java Swing', 'Netbeans Ide', 'MS Access'],
  }
];
