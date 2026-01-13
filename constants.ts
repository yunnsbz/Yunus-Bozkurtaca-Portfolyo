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
      en: 'An ongoing large-scale first-person simulation project developed as a dedicated, long-term production. \nDue to its broad scope and systemic complexity, a structured and modular development approach was required, leading to the formation of a dedicated development team. \nThe project focuses on building a robust first-person simulation framework with reusable systems, custom interaction mechanics, and optimized asset management using Unity Addressables.',
      tr: 'Kapsamı oldukça geniş olan ve uzun vadeli üretim hedefiyle geliştirilen, devam eden bir birinci şahıs simülasyon projesidir. \nProjenin sistemik karmaşıklığı nedeniyle modüler ve planlı bir geliştirme yaklaşımı benimsenmiş, bu doğrultuda özel bir geliştirme ekibi kurulmuştur. \nProje; yeniden kullanılabilir sistemler, özel etkileşim mekanikleri ve Unity Addressables ile optimize edilmiş varlık yönetimi üzerine inşa edilen sağlam bir simülasyon altyapısına odaklanmaktadır.'
    },

    categories: [ProjectCategory.GAME_MAKING],
    images: ['/images/bike-illustration.jpg'],
    bgImageUrl: '/images/sport-bicycle-pattern-background.jpg',
    date: { en: 'May 2025 - Present', tr: 'Mayıs 2025 - Devam Ediyor' },
    features: {
      en: [
        'Custom editor tool using Unity UI Toolkit reducing setup time by 95%',
        'Dynamic physics system handling thousands of collision interactions',
        'On-demand asset streaming with Unity Addressables',
        'Pre-allocation techniques for RAM management',
        'Multi-state procedural hand interaction system using IK for immersive first-person gameplay'
      ],
      tr: [
        'Unity UI Toolkit kullanılarak geliştirilen özel editör aracı ile kurulum süresinin %95 azaltılması',
        'Binlerce çarpışma etkileşimini yöneten dinamik fizik sistemi',
        'Unity Addressables ile isteğe bağlı varlık yükleme',
        'RAM yönetimi için ön bellekleme (pre-allocation) teknikleri',
        'IK kullanılarak geliştirilen, çok stateli ve immersive birinci şahıs el etkileşim sistemi'
      ]
    },
    techStack: ['Unity', 'C#', 'UI Toolkit', 'Addressables', 'Shader Graph', 'Git', 'Unity Version Control'],
    technicalDetails: {
      en: [
        'Addressable Assets system integration for 40% faster initial load times',
        'Custom object detection and interaction system built using Unity Job System as an alternative to default physics',
        'Procedural hand pose generation with state-based IK blending (idle, reach, pre-grip, grip, release)',
        'Optimized IK activation to minimize performance overhead',
        'Advanced use of local/world space transformations and execution order for stable, jitter-free object motion',
        'Custom pooling system reducing Garbage Collection calls by 85%'
      ],
      tr: [
        'Addressable Assets sistemi entegrasyonu ile başlangıç yükleme süresinde %40 iyileştirme',
        'Varsayılan Unity fizik sistemi yerine Unity Job System kullanılarak geliştirilen özel obje algılama ve etkileşim sistemi',
        'Idle, reach, pre-grip, grip ve release durumlarını içeren statü bazlı prosedürel IK el pozları',
        'Performans maliyetini azaltmak için IK sisteminin yalnızca ihtiyaç halinde aktif edilmesi',
        'Local/world space dönüşümleri ve execution order kontrolü ile titreşimsiz ve stabil obje hareketleri',
        'Garbage Collection çağrılarını %85 azaltan özel pooling sistemi'
      ]
    },
  },

  {
    id: 'unity-scriptable-tool',
    title: {
      en: 'Unity Scriptable Object Editor Tool',
      tr: 'Unity Scriptable Object Editör Aracı'
    },
    shortDescription: {
      en: 'Custom Unity Editor tool for efficient side-by-side and multi-type ScriptableObject editing.',
      tr: 'ScriptableObject’leri yan yana ve çoklu tür desteğiyle düzenlemeye olanak tanıyan özel Unity Editor aracı.'
    },
    longDescription: {
      en: 'A custom Unity Editor tool designed to streamline the process of viewing, comparing, and editing multiple ScriptableObjects within a single window. The tool enables side-by-side editing of ScriptableObjects of the same type, while also supporting vertical listing of different ScriptableObject types for structured configuration management. \nThis significantly improves iteration speed and reduces context switching during development.',
      tr: 'Birden fazla ScriptableObject’in tek bir pencere üzerinden görüntülenmesini, karşılaştırılmasını ve düzenlenmesini kolaylaştırmak amacıyla geliştirilmiş özel bir Unity Editor aracıdır. Aynı tür ScriptableObject’lerin yan yana düzenlenmesine olanak tanırken, farklı türlerin dikey listelenmesiyle yapılandırılmış bir konfigürasyon yönetimi sunar. \nGeliştirme sürecinde bağlam değişimini azaltarak iterasyon hızını önemli ölçüde artırır.'
    },
    categories: [ProjectCategory.TOOL_MAKING],
    images: ['/images/scriptable-object-manager-gallery1.jpg'],
    bgImageUrl: '/images/scriptable-object-manager-gallery1.jpg',
    githubUrl: 'https://github.com/yunnsbz/Unity-Scriptable-Object-Tool',
    date: {
      en: 'Feb 2025 - May 2025',
      tr: 'Şubat 2025 - Mayıs 2025'
    },
    features: {
      en: [
        'Side-by-side editing of multiple ScriptableObjects of the same type',
        'Vertical listing and editing of different ScriptableObject types',
        'Multi-type data visualization within a single editor window',
        'Basic filtering system for switching between configurations and types',
        'Support for editing primitive types, vectors, enums, arrays, and object references',
        'Seamless integration with Unity Editor workflow'
      ],
      tr: [
        'Aynı türden birden fazla ScriptableObject’in yan yana düzenlenmesi',
        'Farklı ScriptableObject türlerinin dikey listelenmesi ve düzenlenmesi',
        'Tek editör penceresi içinde çoklu veri türü görselleştirme',
        'Konfigürasyonlar ve türler arasında geçiş için temel filtreleme sistemi',
        'Primitive tipler, vector, enum, array ve obje referanslarının düzenlenmesi',
        'Unity Editor iş akışıyla sorunsuz entegrasyon'
      ]
    },
    techStack: ['Unity', 'C#', 'Unity Editor API', 'UI Toolkit', 'Git'],
    technicalDetails: {
      en: [
        'Custom EditorWindow implementation using Unity Editor API',
        'Side-by-side layout system for comparing ScriptableObject instances',
        'Dynamic ScriptableObject loading from Resources folder',
        'Undo/Redo support via UnityEditor.Undo system',
        'Persistent editor window state across Unity sessions',
        'Filter-based ScriptableObject type selection system'
      ],
      tr: [
        'Unity Editor API kullanılarak geliştirilen özel EditorWindow yapısı',
        'ScriptableObject instance’larını karşılaştırmaya yönelik yan yana düzen sistemi',
        'Resources klasörü üzerinden dinamik ScriptableObject yükleme',
        'UnityEditor.Undo sistemi ile Undo/Redo desteği',
        'Unity oturumları arasında editör pencere durumunun korunması',
        'Filtre tabanlı ScriptableObject tür seçim sistemi'
      ]
    }
  },


  {
    id: '3d-top-down-shooter',
    title: { en: '3D Top-Down Shooter Mobile Game', tr: '3D Top-Down Shooter Mobil Oyunu' },
    shortDescription: {
      en: 'Immersive mobile shooter with procedural animations and complex AI.',
      tr: 'Prosedürel animasyonlar ve gelişmiş yapay zekâ içeren etkileyici mobil shooter oyunu.'
    },
    longDescription: {
      en: 'A comprehensive 3D mobile game project representing my second game, developed over a longer production cycle with a strong focus on polish and system quality. \nThe project features advanced framework development, well-structured gameplay mechanics, and complex AI systems built using coroutine-based architectures.',
      tr: 'Daha uzun bir geliştirme süreci boyunca, daha yüksek bir polish ve sistem kalitesi hedeflenerek geliştirilen ikinci 3D mobil oyun projemdir. \nProje; gelişmiş altyapı çalışmaları, iyi yapılandırılmış oynanış mekanikleri ve coroutine tabanlı karmaşık yapay zekâ sistemleri içermektedir.'
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
        'Advanced and extensible gameplay systems designed for a 3D mobile game',
        'Immersive player experience powered by responsive physics and procedural animation systems',
        'Smooth and intuitive in-game user interfaces optimized for touch-based interaction',
        'Multiple enemy types with distinct behaviors, attack patterns, and decision logic',
        'Optimized AI behavior enabling stable real-time gameplay with numerous active enemies',
        'Automated in-game map generation system enhanced with visual and gameplay-driven variations'
      ],
      tr: [
        '3D mobil oyunlar için geliştirilmiş, genişletilebilir ve modüler oynanış sistemleri',
        'Duyarlı fizik ve prosedürel animasyon sistemleriyle desteklenen güçlü oyuncu deneyimi',
        'Dokunmatik etkileşime uygun, akıcı ve sezgisel oyun içi kullanıcı arayüzleri',
        'Her biri farklı davranış, saldırı deseni ve karar mekanizmasına sahip çok sayıda düşman tipi',
        'Aynı anda çok sayıda düşmanı destekleyen, gerçek zamanlı oynanışa uygun optimize edilmiş yapay zekâ davranışları',
        'Oynanış ve görsel çeşitlilik sunan otomatik harita üretim sistemi'
      ]
    },
    techStack: ['Unity', 'C#', 'Git', 'Unity Version Control', 'Adobe Illustrator', 'Blender'],
    technicalDetails: {
      en: [
        'Developed using Unity and C# with a scalable and modular architecture',
        'Designed and implemented a complex, extensible state machine system to support multiple enemy archetypes',
        'Each enemy type features unique states, transitions, and behavior trees built on top of the shared state machine core',
        'Advanced coroutine and timing management for coordinated AI behaviors and attack sequences',
        'Integrated sensory perception systems including vision and hearing cones for realistic enemy awareness',
        'Applied object pooling, culling, and performance profiling techniques to support large numbers of active enemies',
        'Built custom Unity editor tools to accelerate AI tuning, testing, and iteration workflows'
      ],
      tr: [
        'Ölçeklenebilir ve modüler bir mimari ile Unity ve C# kullanılarak geliştirildi',
        'Birden fazla düşman arketipini desteklemek için karmaşık ve genişletilebilir bir state machine sistemi tasarlanıp geliştirildi',
        'Her düşman tipi, ortak state machine çekirdeği üzerine inşa edilmiş kendine özgü state’ler, geçişler ve davranış mantıklarına sahiptir',
        'Koordine edilmiş yapay zekâ davranışları ve saldırı sekansları için gelişmiş coroutine ve zamanlama yönetimi',
        'Gerçekçi düşman farkındalığı için görme ve işitme algı sistemlerinin (vision/hearing cone) entegrasyonu',
        'Çok sayıda aktif düşmanı desteklemek amacıyla object pooling, culling ve performans profilleme teknikleri uygulandı',
        'Yapay zekâ ayarlama, test ve iterasyon süreçlerini hızlandırmak için özel Unity editör araçları geliştirildi'
      ]
    },
  },

  {
    id: 'block-saga-mobile',
    title: { en: 'Block Saga Mobile Game', tr: 'Block Saga Mobil Oyunu' },
    shortDescription: {
      en: 'Published 2D mobile game available on Google Play Store.',
      tr: 'Google Play Store’da yayımlanmış 2D mobil oyun.'
    },
    longDescription: {
      en: 'My first fully developed and published 2D Tetris-like mobile game, released on the Google Play Store. \nThe project covers the complete development lifecycle, from initial concept to public release, with a focus on clean gameplay logic, polished 2D visuals, and production-ready mobile workflows. \nCustom pipelines were developed for efficient 2D asset implementation and iteration.',
      tr: 'Google Play Store’da yayımlanan, geliştirilip yayınladığım ilk 2D Tetris benzeri mobil oyundur. \nProje; ilk konseptten halka açık yayına kadar uzanan tam geliştirme sürecini kapsamakta olup, temiz oynanış mantığı, cilalı 2D görseller ve üretim seviyesinde mobil geliştirme iş akışlarına odaklanmaktadır. \n2D varlıkların hızlı ve verimli şekilde oyuna entegre edilmesi için özel workflow’lar geliştirilmiştir.'
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
        'Full lifecycle development from concept, prototyping, and production to Play Store release',
        'Well-structured and maintainable gameplay logic for a classic 2D puzzle experience',
        'Custom workflows for efficient 2D visual implementation and iteration',
        'Responsive and adaptive UI supporting multiple screen resolutions and aspect ratios',
        'Agile development workflow coordination using Miro and Jira',
        'Monetization integration using Google AdMob Rewarded Ads'
      ],
      tr: [
        'Konsept, prototipleme, üretim ve Play Store yayınına kadar uçtan uca geliştirme süreci',
        'Klasik 2D puzzle deneyimi için temiz, sürdürülebilir ve okunabilir oynanış mantığı',
        '2D görsellerin oyuna hızlı ve tutarlı şekilde entegre edilmesini sağlayan özel workflow’lar',
        'Farklı ekran çözünürlükleri ve en-boy oranlarına uyumlu, duyarlı kullanıcı arayüzü',
        'Miro ve Jira kullanılarak yürütülen çevik geliştirme süreci',
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
      en: 'A lightweight, modern, and extensible cross-platform file manager developed with Qt and C++. \nThe project targets both Windows and Linux platforms and focuses on responsive user interaction, flexible navigation paradigms, and a customizable interface. \nSpecial attention is given to asynchronous file operations to ensure a smooth user experience even under heavy I/O workloads.',
      tr: 'Qt ve C++ kullanılarak geliştirilen, Windows ve Linux platformlarını hedefleyen hafif, modern ve genişletilebilir bir dosya yöneticisi uygulamasıdır. \nProje; akıcı kullanıcı etkileşimi, esnek dosya gezinti paradigmaları ve özelleştirilebilir bir arayüz sunmaya odaklanmaktadır. \nYoğun I/O işlemleri altında dahi sorunsuz bir deneyim sağlamak için asenkron dosya operasyonlarına özel önem verilmiştir.'
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
        'Cross-platform support for Windows and Linux',
        'Dual-pane and column-based file browsing layouts',
        'Tab-based navigation for efficient multi-directory workflows',
        'Tree view navigation with customizable view settings',
        'Highly customizable and modern user interface',
        'Support for standard file operations such as copy, move, delete, and rename'
      ],
      tr: [
        'Windows ve Linux için çapraz platform desteği',
        'Çift panelli ve kolon tabanlı dosya gezinti düzenleri',
        'Verimli çoklu dizin kullanımı için sekme (tab) desteği',
        'Özelleştirilebilir görünüm ayarlarına sahip ağaç görünümü',
        'Yüksek derecede özelleştirilebilir ve modern kullanıcı arayüzü',
        'Kopyalama, taşıma, silme ve yeniden adlandırma gibi temel dosya işlemleri'
      ]
    },
    techStack: ['QT6.8', 'C++', 'QT Creator', 'Git'],
    technicalDetails: {
      en: [
        'Asynchronous file operations implemented using a multithreaded architecture',
        'Lock-free queue system for dispatching file operation requests between worker threads',
        'Platform-specific integration with Windows Shell API for native context menu support',
        'Architecture designed for future extensibility across additional platforms and features'
      ],
      tr: [
        'Çok iş parçacıklı bir mimari kullanılarak geliştirilen asenkron dosya işlemleri',
        'Worker thread’ler arasında dosya işlem taleplerinin iletilmesi için lock-free kuyruk sistemi',
        'Yerel sağ tık menüsü desteği için Windows Shell API ile platforma özel entegrasyon',
        'İleride yeni platformlar ve özellikler eklenebilecek şekilde tasarlanmış genişletilebilir mimari'
      ]
    },
  },

  {
    id: 'financial-strategy-simulation',
    title: {
      en: 'Financial Strategy Monitoring Simulation',
      tr: 'Finansal Strateji İzleme Simülasyonu'
    },
    shortDescription: { 
      en: 'Interactive strategy monitoring UI using C++17 and Qt.', 
      tr: 'C++17 ve Qt kullanılarak geliştirilmiş etkileşimli strateji izleme arayüzü.' 
    },
    longDescription: {
      en: 'A standalone simulation project designed to mimic the behavior of a live financial strategy monitoring system. \nThe application focuses on presenting strategies and their associated orders in a clear, interactive, and responsive user interface. \nAlthough it does not connect to real trading systems or data feeds, it is architected to resemble real-world monitoring tools in terms of data flow, UI responsiveness, and scalability.',
      tr: 'Canlı bir finansal strateji izleme sisteminin davranışlarını taklit etmek amacıyla geliştirilmiş bağımsız bir simülasyon projesidir. \nUygulama; stratejilerin ve bunlara bağlı emirlerin net, etkileşimli ve akıcı bir kullanıcı arayüzü üzerinden sunulmasına odaklanır. \nGerçek veri kaynaklarına bağlanmamakla birlikte, veri akışı, arayüz tepkiselliği ve ölçeklenebilirlik açısından gerçek dünya izleme araçlarını örnek alan bir mimariyle tasarlanmıştır.'
    },
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    images: ['/images/strategy-sim-gallery1.png'],
    bgImageUrl: '/images/strategy-sim-gallery1.png',
    date: {
      en: 'June 2025',
      tr: 'Haziran 2025'
    },
    githubUrl: 'https://github.com/yunnsbz/StrategyMonitor',
    features: {
      en: [
        'Strategy list panel displaying strategy ID, type, and runtime status (Running / Paused)',
        'Detailed order table view showing price, filled volume, active volume, and order side',
        'Interactive filtering and sorting via table headers and context menus',
        'Clear visual status indicators and informative tooltips for improved readability',
        'User-friendly layout optimized for monitoring dense data sets'
      ],
      tr: [
        'Strateji ID, tür ve çalışma durumunu (Running / Paused) gösteren strateji liste paneli',
        'Fiyat, gerçekleşen hacim, aktif hacim ve emir yönünü gösteren detaylı emir tablosu',
        'Tablo başlıkları ve sağ tık menüleri üzerinden etkileşimli filtreleme ve sıralama',
        'Okunabilirliği artıran görsel durum göstergeleri ve bilgilendirici tooltip’ler',
        'Yoğun veri setlerinin izlenmesine uygun, kullanıcı dostu arayüz düzeni'
      ]
    },
    techStack: ['Qt 6.8', 'C++17', 'CMake', 'Qt Creator', 'Git'],
    technicalDetails: {
      en: [
        'Model/View architecture utilizing proxy models for high-performance filtering and sorting',
        'Custom UI rendering using QPaint for fine-grained visual control',
        'Low-latency signal-slot communication simulating real-time data updates',
        'Scalable data handling architecture designed to support large numbers of strategies and orders',
        'Clear separation of data, presentation, and interaction layers for maintainable code structure'
      ],
      tr: [
        'Yüksek performanslı filtreleme ve sıralama için proxy modeller kullanan Model/View mimarisi',
        'Görsel kontrolü artırmak amacıyla QPaint ile geliştirilmiş özel arayüz çizimleri',
        'Gerçek zamanlı veri güncellemelerini simüle eden düşük gecikmeli signal-slot iletişimi',
        'Çok sayıda strateji ve emri destekleyecek şekilde tasarlanmış ölçeklenebilir veri işleme yapısı',
        'Bakımı kolay ve genişletilebilir bir kod yapısı için veri, sunum ve etkileşim katmanlarının ayrılması'
      ]
    }
  },


  {
    id: 'okey-game',
    title: { en: '101 Okey Command-Line Game', tr: '101 Okey Komut Satırı Oyunu' },
    shortDescription: {
      en: 'Command-line 101 Okey game playable against AI',
      tr: 'Yapay zekâya karşı oynanabilen komut satırı tabanlı 101 Okey oyunu.'
    },
    longDescription: {
      en: 'A command-line implementation of the popular board game 101 Okey. \nThe game supports tile distribution, turn-based gameplay, and core rules in a text-based format. \nDeveloped in C during the first year of university, focusing on strengthening algorithmic thinking and core game logic skills.',
      tr: 'Popüler masa oyunu 101 Okey’in komut satırı tabanlı bir implementasyonudur. \nOyun, taş dağıtımı, sıra tabanlı oynanış ve temel kuralları metin tabanlı olarak destekler. \nÜniversitenin 1. yılında algoritmik düşünme ve oyun mantığı becerilerini geliştirmek amacıyla C dilinde geliştirilmiştir.'
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
      en: 'This project is a bookstore sales and automation application developed using Java, featuring separate interfaces for users and administrators. \nUsers can search for and purchase books, while administrators can manage book information and control the system after logging in. \nThe application was developed as a second-year semester project and achieved a full score due to its detailed visual interface and functionality.',
      tr: 'Java kullanılarak geliştirilen bu proje, kullanıcılar ve yöneticiler için ayrı arayüzlere sahip bir kitap satış ve otomasyon uygulamasıdır. \nKullanıcılar kitap arayıp satın alabilirken, yöneticiler giriş yaptıktan sonra kitap bilgilerini ve sistemi yönetebilir. \nİkinci sınıf dönem projesi olarak geliştirilmiş ve detaylı arayüzü ile tam not almıştır.'
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
