import { Project, ProjectCategory, ProjectLinkType, ProjectStatus, Tech } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fp-simulation',
    title: { en: 'First Person Simulation Game for PC', tr: 'PC için Birinci Şahıs Simülasyon Oyunu' },
    shortDescription: {
      en: 'High-performance simulation game with custom editor tools and dynamic physics.',
      tr: 'Özel editör araçları ve dinamik fizik sistemleri içeren bir simülasyon oyunu.'
    },
    longDescription: {
      en: 'An ongoing large-scale first-person simulation project developed as a dedicated, long-term production. \nDue to its broad scope and systemic complexity, a structured and modular development approach was required, leading to the formation of a dedicated development team. \nThe project focuses on building a robust first-person simulation framework with reusable systems, custom interaction mechanics, and optimized asset management using Unity Addressables.',
      tr: 'Kapsamı oldukça geniş olan ve uzun vadeli üretim hedefiyle geliştirilen, devam eden bir birinci şahıs simülasyon projesidir. \nProjenin sistemik karmaşıklığı nedeniyle modüler ve planlı bir geliştirme yaklaşımı benimsenmiş, bu doğrultuda özel bir geliştirme ekibi kurulmuştur. \nProje; yeniden kullanılabilir sistemler, özel etkileşim mekanikleri ve Unity Addressables ile optimize edilmiş varlık yönetimi üzerine inşa edilen sağlam bir simülasyon altyapısına odaklanmaktadır.'
    },
    categories: [ProjectCategory.GAME_MAKING],
    status: ProjectStatus.ONGOING,
    role: { en: 'Gameplay & Tools Programmer', tr: 'Oynanış ve Araç Programcısı' },
    teamSize: 3,
    images: [],
    bgImageUrl: '/images/sport-bicycle-pattern-background.jpg',
    date: { en: 'May 2025 - Present', tr: 'Mayıs 2025 - Devam Ediyor' },
    features: {
      en: [
        'Custom editor tool built with Unity UI Toolkit for bulk object configuration',
        'Dynamic physics system handling thousands of collision interactions',
        'Coroutine frame budget system that keeps frame pacing stable under load',
        'Non-blocking async execution with Task and UniTask',
        'On-demand asset streaming with Unity Addressables',
        'Multi-state procedural hand interaction system driven by IK'
      ],
      tr: [
        'Toplu obje yapılandırması için Unity UI Toolkit ile geliştirilen özel editör aracı',
        'Binlerce çarpışma etkileşimini yöneten dinamik fizik sistemi',
        'Yük altında kare temposunu sabit tutan coroutine frame budget sistemi',
        'Task ve UniTask ile bloklamayan asenkron çalışma',
        'Unity Addressables ile isteğe bağlı varlık yükleme',
        'IK ile sürülen, çok durumlu prosedürel el etkileşim sistemi'
      ]
    },
    techStack: [
      Tech.UNITY,
      Tech.CSHARP,
      Tech.UI_TOOLKIT,
      Tech.ADDRESSABLES,
      Tech.JOB_SYSTEM,
      Tech.UNITASK,
      Tech.SHADER_GRAPH,
      Tech.GIT,
      Tech.UNITY_VERSION_CONTROL
    ],
    challenges: [
      {
        problem: {
          en: 'Computation-heavy simulation logic runs the same calculations for every object, every frame. Left on the main thread, this work saturates the CPU frame budget long before the simulation reaches its target object count.',
          tr: 'Hesaplama yoğun simülasyon mantığı, her kare içinde her obje için aynı hesapları tekrarlar. Bu iş ana thread üzerinde bırakıldığında, simülasyon hedeflediği obje sayısına ulaşmadan çok önce CPU kare bütçesini tüketir.'
        },
        solution: {
          en: "Offloaded the repetitive per-frame calculations onto worker threads with Unity's Job System, and replaced the default physics queries with a custom object detection and interaction system built on the same foundation.",
          tr: 'Tekrarlayan kare başı hesaplamalar Unity Job System ile worker threadlere taşındı; varsayılan fizik sorguları da aynı altyapı üzerine kurulan özel bir obje algılama ve etkileşim sistemiyle değiştirildi.'
        },
        outcome: {
          en: 'Reduced CPU frame time in computation-heavy logic, with thousands of collision interactions handled per frame.',
          tr: 'Hesaplama yoğun mantıkta CPU kare süresi düştü; kare başına binlerce çarpışma etkileşimi işlenebiliyor.'
        }
      },
      {
        problem: {
          en: 'Even with work moved off the main thread, bursts of processing landing on a single frame produced frame-time spikes. The average frame rate looked fine while the game felt uneven to play.',
          tr: 'İş yükü ana threadden alınmış olsa bile, tek bir kareye yığılan işlem patlamaları kare süresi sıçramalarına yol açıyordu. Ortalama kare hızı iyi görünürken oyun oynanışta dalgalı hissettiriyordu.'
        },
        solution: {
          en: 'Architected a coroutine frame budget system that measures how much time a frame has left and distributes queued processing across subsequent frames instead of running it to completion at once.',
          tr: 'Bir karede ne kadar süre kaldığını ölçen ve kuyruktaki işlemi tek seferde bitirmek yerine sonraki karelere dağıtan bir coroutine frame budget sistemi tasarlandı.'
        },
        outcome: {
          en: 'Stable frame pacing under heavy workloads, with frame-time spikes eliminated.',
          tr: 'Ağır iş yükleri altında stabil kare temposu; kare süresi sıçramaları ortadan kalktı.'
        }
      },
      {
        problem: {
          en: 'Performance-critical systems used coroutine-based asynchronous flows, which tie every await point to the frame loop and became a bottleneck. Moving them onto dedicated threads would have added synchronization and context-switch overhead the simulation could not afford.',
          tr: 'Performans kritik sistemler, her bekleme noktasını kare döngüsüne bağlayan coroutine tabanlı asenkron akışlar kullanıyordu ve bu bir darboğaza dönüşmüştü. Bunları ayrı threadlere taşımak ise simülasyonun kaldıramayacağı senkronizasyon ve bağlam değiştirme maliyeti getirecekti.'
        },
        solution: {
          en: 'Replaced the coroutine-based flows with Task and UniTask, which express asynchrony without allocating a thread per operation.',
          tr: 'Coroutine tabanlı akışlar, her işlem için ayrı bir thread ayırmadan asenkronluğu ifade eden Task ve UniTask ile değiştirildi.'
        },
        outcome: {
          en: 'Async bottlenecks eliminated, achieving non-blocking execution without thread overhead.',
          tr: 'Asenkron darboğazlar ortadan kalktı; thread maliyeti olmadan bloklamayan çalışma sağlandı.'
        }
      },
      {
        problem: {
          en: 'Frequent runtime instantiation of objects caused Garbage Collection spikes, producing visible frame hitches during gameplay.',
          tr: 'Çalışma zamanında sık obje üretimi Garbage Collection sıçramalarına yol açıyor, bu da oynanış sırasında görünür kare takılmaları oluşturuyordu.'
        },
        solution: {
          en: 'Built a custom pooling system that reuses object instances instead of allocating and discarding them.',
          tr: 'Objeleri sürekli oluşturup atmak yerine mevcut örnekleri yeniden kullanan özel bir pooling sistemi geliştirildi.'
        },
        outcome: {
          en: 'Greatly reduced Garbage Collection calls.',
          tr: 'Garbage Collection çağrıları önemli ölçüde azaltıldı.'
        }
      },
      {
        problem: {
          en: "The project's asset footprint made initial load times long and kept memory occupied by content the player might never reach, because everything was loaded up front.",
          tr: 'Her şey en baştan yüklendiği için projenin varlık boyutu başlangıç yükleme süresini uzatıyor ve oyuncunun hiç ulaşmayabileceği içerik belleği meşgul tutuyordu.'
        },
        solution: {
          en: 'Applied Unity Addressables for on-demand asset streaming, combined with pre-allocation techniques that reserve memory for the expected working set up front instead of requesting it mid-frame.',
          tr: 'İsteğe bağlı varlık akışı için Unity Addressables uygulandı; buna, beklenen bellek ihtiyacını kare ortasında değil önceden ayıran ön bellekleme (pre-allocation) teknikleri eklendi.'
        },
        outcome: {
          en: '40% faster initial load times, with improved RAM efficiency and smoother gameplay.',
          tr: 'Başlangıç yükleme sürelerinde %40 iyileşme; RAM verimliliği ve oynanış akıcılığı arttı.'
        }
      },
      {
        problem: {
          en: 'First-person hand interaction looked rigid, and grabbed objects jittered because their transforms were resolved across local and world space in an inconsistent script execution order.',
          tr: 'Birinci şahıs el etkileşimi katı görünüyordu ve tutulan objeler titriyordu; çünkü transformları tutarsız bir script execution order içinde local ve world space arasında çözümleniyordu.'
        },
        solution: {
          en: 'Implemented procedural hand pose generation with state-based IK blending across five states (idle, reach, pre-grip, grip, release), with explicit local/world space transformations and a controlled execution order. IK activates only when an interaction is actually in range.',
          tr: 'Beş durum (idle, reach, pre-grip, grip, release) arasında geçiş yapan durum tabanlı IK harmanlamasıyla prosedürel el pozu üretimi geliştirildi; local/world space dönüşümleri ve execution order açıkça kontrol edildi. IK yalnızca etkileşim menzile girdiğinde devreye giriyor.'
        },
        outcome: {
          en: 'Stable, jitter-free object motion with minimal per-frame IK overhead.',
          tr: 'Kare başına minimum IK maliyetiyle, titreşimsiz ve stabil obje hareketleri.'
        }
      },
      {
        problem: {
          en: 'Configuring hundreds of interactable objects by hand took roughly a week of manual work per pass, and the cost repeated every time the team reworked a scene.',
          tr: 'Yüzlerce etkileşimli objeyi elle yapılandırmak her turda yaklaşık bir haftalık manuel iş demekti ve ekip bir sahneyi her elden geçirdiğinde bu maliyet tekrarlanıyordu.'
        },
        solution: {
          en: 'Developed a custom Unity editor tool with UI Toolkit that configures objects in bulk through a purpose-built interface instead of the default inspector.',
          tr: 'Objeleri varsayılan inspector yerine bu amaca özel bir arayüz üzerinden toplu olarak yapılandıran, UI Toolkit ile geliştirilmiş özel bir Unity editör aracı yazıldı.'
        },
        outcome: {
          en: 'A one-week manual setup process now takes a couple of hours.',
          tr: 'Bir haftalık manuel kurulum süreci artık birkaç saat sürüyor.'
        }
      }
    ]
  },

  {
    id: 'survivors-like',
    title: { en: 'Survivors-like PC Game', tr: 'Survivors Benzeri PC Oyunu' },
    shortDescription: {
      en: 'Deterministic 2D physics on custom fixed-point math, with a P2P multiplayer foundation.',
      tr: 'Özel sabit noktalı matematik üzerine kurulu deterministik 2D fizik ve P2P çok oyunculu altyapı.'
    },
    longDescription: {
      en: 'An in-development survivors-like PC game built around a fully deterministic simulation. \nReal-time multiplayer requires every client to reach identical results from identical inputs, so the project does not treat determinism as an optimization to add later — it starts from a custom fixed-point arithmetic layer and builds the physics simulation and the networking model on top of it. \nThe current focus is the simulation core and the peer-to-peer networking foundation.',
      tr: 'Tamamen deterministik bir simülasyon etrafında inşa edilen, geliştirme aşamasındaki bir survivors benzeri PC oyunudur. \nGerçek zamanlı çok oyunculu deneyim, her istemcinin aynı girdilerden aynı sonuca ulaşmasını gerektirir. Bu nedenle proje determinizmi sonradan eklenecek bir optimizasyon olarak görmez; özel bir sabit noktalı aritmetik katmanından başlar ve fizik simülasyonu ile ağ modelini bunun üzerine kurar. \nMevcut odak, simülasyon çekirdeği ve eşler arası (P2P) ağ altyapısıdır.'
    },
    categories: [ProjectCategory.GAME_MAKING],
    status: ProjectStatus.ONGOING,
    images: [],
    date: { en: 'Feb 2026 - Present', tr: 'Şubat 2026 - Devam Ediyor' },
    teamSize: 3,
    role: { en: 'Gameplay & Networking Programmer', tr: 'Oynanış ve Ağ Programcısı' },
    features: {
      en: [
        'Fully deterministic 2D physics simulation',
        'Custom fixed-point arithmetic library replacing floating-point math',
        'Peer-to-peer networking layer synchronized on the deterministic simulation',
        'Groundwork for reliable real-time multiplayer'
      ],
      tr: [
        'Tamamen deterministik 2D fizik simülasyonu',
        'Kayan noktalı matematiğin yerini alan özel sabit noktalı aritmetik kütüphanesi',
        'Deterministik simülasyon üzerine senkronize edilmiş eşler arası (P2P) ağ katmanı',
        'Güvenilir gerçek zamanlı çok oyunculu deneyim için altyapı'
      ]
    },
    techStack: [Tech.UNITY, Tech.CSHARP, Tech.GIT],
    challenges: [
      {
        problem: {
          en: 'Floating-point arithmetic yields slightly different results across machines, compilers and optimization settings. When each client simulates physics locally, those tiny divergences compound frame after frame until the clients no longer agree on the game state.',
          tr: 'Kayan noktalı aritmetik; farklı makinelerde, derleyicilerde ve optimizasyon ayarlarında birbirinden az da olsa farklı sonuçlar üretir. Her istemci fiziği yerel olarak simüle ettiğinde bu küçük sapmalar kare kare birikir ve istemciler oyun durumu konusunda artık aynı fikirde olmaz.'
        },
        solution: {
          en: 'Built a custom fixed-point arithmetic library and rebuilt the 2D physics simulation on top of it, so every client performs the same integer operations in the same order.',
          tr: 'Özel bir sabit noktalı aritmetik kütüphanesi geliştirildi ve 2D fizik simülasyonu bunun üzerine yeniden inşa edildi; böylece her istemci aynı tamsayı işlemlerini aynı sırada yürütüyor.'
        },
        outcome: {
          en: 'Fully deterministic 2D physics, with floating-point inconsistencies across clients eliminated.',
          tr: 'Tamamen deterministik 2D fizik; istemciler arası kayan nokta tutarsızlıkları ortadan kalktı.'
        }
      },
      {
        problem: {
          en: 'A survivors-like keeps large numbers of entities alive at once, so replicating full world state to every peer would make bandwidth grow with entity count rather than with player count.',
          tr: 'Survivors benzeri bir oyun aynı anda çok sayıda varlığı canlı tutar; dolayısıyla tüm dünya durumunu her eşe göndermek, bant genişliğini oyuncu sayısıyla değil varlık sayısıyla birlikte büyütürdü.'
        },
        solution: {
          en: 'Architected a peer-to-peer networking layer synchronized on the deterministic physics simulation, so peers stay in agreement by running the same simulation rather than by exchanging its results.',
          tr: 'Deterministik fizik simülasyonu üzerine senkronize edilen bir eşler arası ağ katmanı tasarlandı; eşler simülasyonun sonuçlarını paylaşarak değil, aynı simülasyonu çalıştırarak uzlaşıyor.'
        },
        outcome: {
          en: 'Groundwork laid for reliable real-time multiplayer.',
          tr: 'Güvenilir gerçek zamanlı çok oyunculu deneyim için altyapı kuruldu.'
        }
      }
    ]
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
    status: ProjectStatus.COMPLETED,
    images: [{ src: '/images/scriptable-object-manager-gallery1.jpg' }],
    bgImageUrl: '/images/scriptable-object-manager-gallery1.jpg',
    links: [{ type: ProjectLinkType.GITHUB, url: 'https://github.com/yunnsbz/Unity-Scriptable-Object-Tool' }],
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
    techStack: [Tech.UNITY, Tech.CSHARP, Tech.UNITY_EDITOR_API, Tech.UI_TOOLKIT, Tech.GIT],
    challenges: [
      {
        problem: {
          en: "Unity's default Inspector shows one asset at a time. Balancing values across several ScriptableObjects of the same type means selecting each one in turn and holding the previous values in your head.",
          tr: "Unity'nin varsayılan Inspector'ı aynı anda tek bir varlık gösterir. Aynı türden birkaç ScriptableObject arasında değer dengelemek, her birini sırayla seçip önceki değerleri akılda tutmayı gerektirir."
        },
        solution: {
          en: 'Built a custom EditorWindow with the Unity Editor API that renders multiple instances of the same type in parallel columns, each fully editable.',
          tr: 'Unity Editor API ile, aynı türden birden fazla örneği paralel kolonlarda ve tamamen düzenlenebilir şekilde çizen özel bir EditorWindow geliştirildi.'
        },
        outcome: {
          en: 'Values can be compared and tuned side by side in a single window.',
          tr: 'Değerler tek bir pencerede yan yana karşılaştırılıp ayarlanabiliyor.'
        }
      },
      {
        problem: {
          en: 'Configuration for a single feature is usually spread across several different ScriptableObject types, so editing it means hunting through the project tree and losing context on every jump.',
          tr: 'Tek bir özelliğin konfigürasyonu genellikle birkaç farklı ScriptableObject türüne dağılmıştır; bu da her düzenlemede proje ağacında arama yapmayı ve her sıçramada bağlamı kaybetmeyi gerektirir.'
        },
        solution: {
          en: 'Added vertical listing of different ScriptableObject types in the same window, loaded dynamically from the Resources folder, with a filter-based type selection system on top.',
          tr: 'Aynı pencerede, Resources klasöründen dinamik olarak yüklenen farklı ScriptableObject türlerinin dikey listelenmesi eklendi; üzerine filtre tabanlı bir tür seçim sistemi kondu.'
        },
        outcome: {
          en: 'Structured configuration management with far less context switching.',
          tr: 'Çok daha az bağlam değişimiyle yapılandırılmış konfigürasyon yönetimi.'
        }
      },
      {
        problem: {
          en: "A custom editor that writes straight into serialized fields bypasses Unity's Undo stack, so a mistaken edit cannot be reverted and the window forgets its state whenever the editor reloads.",
          tr: "Serileştirilmiş alanlara doğrudan yazan özel bir editör, Unity'nin Undo yığınını atlar; böylece hatalı bir düzenleme geri alınamaz ve editör her yeniden yüklendiğinde pencere durumunu unutur."
        },
        solution: {
          en: 'Routed every mutation through the UnityEditor.Undo system and persisted the window state across Unity sessions.',
          tr: 'Tüm değişiklikler UnityEditor.Undo sistemi üzerinden geçirildi ve pencere durumu Unity oturumları arasında korunacak şekilde saklandı.'
        },
        outcome: {
          en: 'Undo/Redo behaves exactly as it does in the native Inspector.',
          tr: 'Undo/Redo, yerleşik Inspector ile birebir aynı şekilde çalışıyor.'
        }
      }
    ]
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
    status: ProjectStatus.COMPLETED,
    images: [
      { src: '/images/top-down-galery5.jpeg' },
      { src: '/images/top-down-galery6.jpeg' },
      { src: '/images/topdown-shooter-gallery4.png' },
      { src: '/images/topdown-shooter-gallery2.png' },
      { src: '/images/topdown-shooter-gallery3.png' }
    ],
    bgImageUrl: '/images/topdown-shooter-gallery4.png',
    date: { en: 'July 2024 - Nov 2025', tr: 'Temmuz 2024 - Kasım 2025' },
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
    techStack: [
      Tech.UNITY,
      Tech.CSHARP,
      Tech.GIT,
      Tech.UNITY_VERSION_CONTROL,
      Tech.ILLUSTRATOR,
      Tech.BLENDER
    ],
    challenges: [
      {
        problem: {
          en: 'The game needed several enemy archetypes, each with its own states, transitions and attack patterns. Implementing them independently would have duplicated the AI logic once per archetype and made behaviour impossible to tune consistently.',
          tr: 'Oyun; her biri kendi durumlarına, geçişlerine ve saldırı desenlerine sahip birkaç düşman arketipine ihtiyaç duyuyordu. Bunları birbirinden bağımsız geliştirmek, yapay zekâ mantığını her arketip için yeniden yazmak ve davranışları tutarlı biçimde ayarlamayı imkânsız hale getirmek demekti.'
        },
        solution: {
          en: 'Designed an extensible state machine core, on top of which each enemy type declares its own states, transitions and decision logic. Coordinated attack sequences are driven by coroutine and timing management layered over that core.',
          tr: 'Genişletilebilir bir state machine çekirdeği tasarlandı; her düşman tipi kendi durumlarını, geçişlerini ve karar mantığını bu çekirdeğin üzerine tanımlıyor. Koordineli saldırı sekansları ise bu çekirdeğin üstüne yerleşen coroutine ve zamanlama yönetimiyle sürülüyor.'
        },
        outcome: {
          en: 'Multiple enemy archetypes with genuinely distinct behaviour, sharing one AI foundation.',
          tr: 'Tek bir yapay zekâ altyapısını paylaşan, gerçekten birbirinden farklı davranışlara sahip çok sayıda düşman arketipi.'
        }
      },
      {
        problem: {
          en: 'Keeping many enemies active at once means running perception, decision logic and attack sequences for each of them every frame — on a mobile CPU budget that is a fraction of a desktop one.',
          tr: 'Aynı anda çok sayıda düşmanı canlı tutmak; her biri için algı, karar mantığı ve saldırı sekanslarını her karede çalıştırmak anlamına gelir — üstelik masaüstünün küçük bir kesri olan mobil CPU bütçesiyle.'
        },
        solution: {
          en: 'Applied object pooling and culling, spread AI work across frames with advanced coroutine scheduling, and used profiling to find and remove hotspots.',
          tr: 'Object pooling ve culling uygulandı, gelişmiş coroutine zamanlamasıyla yapay zekâ işi karelere yayıldı ve profilleme ile sıcak noktalar bulunup giderildi.'
        },
        outcome: {
          en: 'Efficient resource usage and consistently smooth gameplay with numerous active enemies.',
          tr: 'Çok sayıda aktif düşmanla birlikte verimli kaynak kullanımı ve tutarlı biçimde akıcı oynanış.'
        }
      },
      {
        problem: {
          en: 'Enemies that respond to the player from anywhere on the map, regardless of line of sight or distance, break the illusion of a world with rules.',
          tr: 'Görüş hattına ya da mesafeye bakmaksızın haritanın her yerinden oyuncuya tepki veren düşmanlar, kuralları olan bir dünya yanılsamasını bozar.'
        },
        solution: {
          en: 'Integrated sensory perception systems — vision and hearing cones — that gate AI state transitions on what an enemy could plausibly notice.',
          tr: 'Yapay zekâ durum geçişlerini, bir düşmanın makul olarak fark edebileceği şeye bağlayan algı sistemleri (görme ve işitme konileri) entegre edildi.'
        },
        outcome: {
          en: 'Enemies that react believably to sight and sound rather than to raw distance.',
          tr: 'Ham mesafeye değil, görüntü ve sese inandırıcı biçimde tepki veren düşmanlar.'
        }
      },
      {
        problem: {
          en: 'Tuning AI behaviour meant editing serialized values scattered across prefabs and re-entering play mode for every adjustment, which made iteration slow in a large-scale project.',
          tr: 'Yapay zekâ davranışını ayarlamak, prefablara dağılmış serileştirilmiş değerleri düzenlemeyi ve her değişiklik için tekrar play moduna girmeyi gerektiriyordu; bu da büyük ölçekli bir projede iterasyonu yavaşlatıyordu.'
        },
        solution: {
          en: 'Built custom Unity editor tools that centralize AI tuning and testing into dedicated windows.',
          tr: 'Yapay zekâ ayarlama ve testini kendine ait pencerelerde toplayan özel Unity editör araçları geliştirildi.'
        },
        outcome: {
          en: 'Streamlined workflows that scale with the size of the project.',
          tr: 'Projenin büyüklüğüyle birlikte ölçeklenen, sadeleştirilmiş iş akışları.'
        }
      }
    ]
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
    status: ProjectStatus.RELEASED,
    images: [
      { src: '/images/block-saga-gallery1.png' },
      { src: '/images/block-saga-gallery2.png' },
      { src: '/images/block-saga-gallery3.png' },
      { src: '/images/block-saga-gallery4.png' }
    ],
    bgImageUrl: '/images/block-saga-gallery2.png',
    date: { en: 'Jan 2024 - Nov 2024', tr: 'Ocak 2024 - Kasım 2024' },
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
    techStack: [
      Tech.UNITY,
      Tech.CSHARP,
      Tech.ADDRESSABLES,
      Tech.GIT,
      Tech.UNITY_VERSION_CONTROL,
      Tech.ADMOB,
      Tech.MIRO,
      Tech.JIRA
    ],
    challenges: [
      {
        problem: {
          en: 'Computation-intensive systems ran to completion inside a single frame. On the low-end phones that make up much of the Play Store audience, this produced stutter exactly when the board was busiest.',
          tr: 'Hesaplama yoğun sistemler tek bir kare içinde baştan sona çalışıyordu. Play Store kitlesinin önemli bir kısmını oluşturan düşük donanımlı telefonlarda bu, tam da tahtanın en yoğun olduğu anda takılmaya yol açıyordu.'
        },
        solution: {
          en: 'Moved the heavy work into coroutines that spread it across frames rather than blocking a single one.',
          tr: 'Ağır işler, tek bir kareyi bloklamak yerine işi karelere yayan coroutine yapılarına taşındı.'
        },
        outcome: {
          en: 'Smooth and responsive gameplay across the device range.',
          tr: 'Cihaz yelpazesi genelinde akıcı ve tepkisel oynanış.'
        }
      },
      {
        problem: {
          en: 'Shipping to the Play Store means one build has to look right on everything from tall narrow phones to tablets, without re-authoring the layout per device.',
          tr: 'Play Store’a yayınlamak; tek bir yapının, düzeni cihaz başına yeniden tasarlamadan uzun-dar telefonlardan tabletlere kadar her şeyde doğru görünmesi anlamına gelir.'
        },
        solution: {
          en: 'Built a responsive, adaptive UI that resolves against the actual screen resolution and aspect ratio at runtime.',
          tr: 'Çalışma zamanında gerçek ekran çözünürlüğü ve en-boy oranına göre çözümlenen, duyarlı ve uyarlanabilir bir arayüz geliştirildi.'
        },
        outcome: {
          en: 'A single build that holds up across screen sizes and aspect ratios.',
          tr: 'Farklı ekran boyutları ve en-boy oranlarında ayakta kalan tek bir yapı.'
        }
      },
      {
        problem: {
          en: 'Iterating on 2D art meant re-importing and re-configuring sprites by hand on every pass, which slowed down the visual polish the game depended on.',
          tr: '2D görseller üzerinde iterasyon yapmak, her turda sprite’ları elle yeniden içe aktarıp yapılandırmayı gerektiriyordu; bu da oyunun dayandığı görsel cilalama sürecini yavaşlatıyordu.'
        },
        solution: {
          en: 'Developed custom workflows for 2D asset implementation, and coordinated the process through Miro, Jira and Unity Version Control.',
          tr: '2D varlıkların entegrasyonu için özel iş akışları geliştirildi ve süreç Miro, Jira ile Unity Version Control üzerinden koordine edildi.'
        },
        outcome: {
          en: 'Faster art iteration, and a full lifecycle carried from concept to a published release.',
          tr: 'Daha hızlı görsel iterasyon ve konseptten yayımlanmış bir sürüme uzanan eksiksiz bir geliştirme döngüsü.'
        }
      }
    ]
  },

  {
    id: 'qt-file-manager',
    title: { en: 'QT File Manager', tr: 'QT Dosya Yöneticisi' },
    shortDescription: {
      en: 'Multithreaded desktop file manager built with C++ and Qt.',
      tr: 'C++ ve Qt ile geliştirilmiş, multithreaded masaüstü dosya yöneticisi.'
    },
    longDescription: {
      en: 'A lightweight, modern, and extensible cross-platform file manager developed with Qt and C++, co-developed through GitHub collaboration. \nThe project targets both Windows and Linux platforms and focuses on responsive user interaction, flexible navigation paradigms, and a customizable interface. \nSpecial attention is given to asynchronous file operations to ensure a smooth user experience even under heavy I/O workloads.',
      tr: 'Qt ve C++ kullanılarak, GitHub üzerinden ortak geliştirme ile ortaya çıkarılan; Windows ve Linux platformlarını hedefleyen hafif, modern ve genişletilebilir bir dosya yöneticisi uygulamasıdır. \nProje; akıcı kullanıcı etkileşimi, esnek dosya gezinti paradigmaları ve özelleştirilebilir bir arayüz sunmaya odaklanmaktadır. \nYoğun I/O işlemleri altında dahi sorunsuz bir deneyim sağlamak için asenkron dosya operasyonlarına özel önem verilmiştir.'
    },
    categories: [ProjectCategory.TOOL_MAKING, ProjectCategory.DESKTOP],
    status: ProjectStatus.COMPLETED,
    role: { en: 'Co-Developer', tr: 'Ortak Geliştirici' },
    teamSize: 2,
    images: [
      {
        src: '/images/file-manager-gallery1.png',
        caption: {
          en: 'Dual-pane mode: two independent panes, each with its own tab bar, navigation history, and tree sidebar.',
          tr: 'Çift panel modu: her biri kendi sekme çubuğu, gezinti geçmişi ve ağaç görünümüne sahip iki bağımsız panel.'
        }
      },
      {
        src: '/images/file-manager-gallery2.png',
        caption: {
          en: 'Column mode: each directory level opens a new column, so the full path stays visible while drilling down.',
          tr: 'Kolon modu: her dizin seviyesi yeni bir kolon açar; derine inerken yolun tamamı görünür kalır.'
        }
      },
      {
        src: '/images/file-manager-gallery3.png',
        caption: {
          en: 'Tabbed single-pane mode with the collapsible tree sidebar and the keyboard-focusable path bar.',
          tr: 'Sekmeli tek panel modu; katlanabilir ağaç görünümü ve klavyeyle odaklanılabilen yol çubuğu ile birlikte.'
        }
      }
    ],
    bgImageUrl: '/images/file-manager-gallery1.png',
    links: [{ type: ProjectLinkType.GITHUB, url: 'https://github.com/yunnsbz/File-Manager' }],
    date: { en: 'Mar 2025 - Nov 2025', tr: 'Mart 2025 - Kasım 2025' },
    features: {
      en: [
        'Cross-platform support for Windows and Linux',
        'Dual-pane, column, tabbed and tree browsing modes',
        'Drag-and-drop and folder tree navigation built on Qt signal-slot',
        'Core file operations (create, delete, rename, copy, move) with robust error handling',
        'Highly customizable and modern user interface',
        'Asynchronous operations that keep the interface responsive'
      ],
      tr: [
        'Windows ve Linux için çapraz platform desteği',
        'Çift panel, kolon, sekmeli ve ağaç gezinti modları',
        'Qt signal-slot üzerine kurulu sürükle-bırak ve klasör ağacı gezintisi',
        'Temel dosya işlemleri (oluşturma, silme, yeniden adlandırma, kopyalama, taşıma) ve sağlam hata yönetimi',
        'Yüksek derecede özelleştirilebilir ve modern kullanıcı arayüzü',
        'Arayüzü tepkisel tutan asenkron dosya işlemleri'
      ]
    },
    techStack: [Tech.QT, Tech.CPP, Tech.QT_CREATOR, Tech.WINDOWS_SHELL_API, Tech.GIT],
    challenges: [
      {
        problem: {
          en: 'Copying or moving large files ran on the UI thread, freezing the entire window for the duration of the operation. Qt offers no built-in asynchronous file operation layer to fall back on.',
          tr: 'Büyük dosyaların kopyalanması veya taşınması UI thread üzerinde çalışıyor ve işlem boyunca tüm pencereyi donduruyordu. Qt, geri düşülebilecek yerleşik bir asenkron dosya işlemi katmanı sunmuyor.'
        },
        solution: {
          en: 'Moved all file operations onto worker threads and connected them to the UI through a lock-free queue, so requests are dispatched without either side blocking on a mutex.',
          tr: 'Tüm dosya işlemleri worker threadlere taşındı ve arayüze lock-free bir kuyruk üzerinden bağlandı; böylece talepler iki taraf da mutex üzerinde bloklanmadan iletiliyor.'
        },
        outcome: {
          en: 'The interface stays responsive even under heavy I/O workloads.',
          tr: 'Arayüz, yoğun I/O yükü altında dahi tepkisel kalıyor.'
        }
      },
      {
        problem: {
          en: 'Windows users expect the native shell right-click context menu, but Qt has no cross-platform equivalent, and calling the Win32 API directly from shared code would break the Linux build.',
          tr: 'Windows kullanıcıları yerel kabuk (shell) sağ tık menüsünü bekler; ancak Qt bunun çapraz platform bir karşılığını sunmaz ve Win32 API’sini ortak koddan doğrudan çağırmak Linux derlemesini bozardı.'
        },
        solution: {
          en: 'Integrated the Windows Shell API behind a platform abstraction layer, isolating platform-specific code at a single boundary so the Linux build compiles without it. The same boundary leaves room for additional platforms later.',
          tr: 'Windows Shell API’si bir platform soyutlama katmanının arkasına alındı; platforma özel kod tek bir sınırda izole edildiği için Linux derlemesi bu koda ihtiyaç duymuyor. Aynı sınır, ileride yeni platformlar için de alan bırakıyor.'
        },
        outcome: {
          en: 'Native context menu support on Windows without forking the codebase.',
          tr: 'Kod tabanını çatallamadan Windows üzerinde yerel sağ tık menüsü desteği.'
        }
      },
      {
        problem: {
          en: 'Users navigate differently: some prefer dual panes, others columns, tabs or a tree. Committing the interface to a single layout would have locked the application into one workflow.',
          tr: 'Kullanıcılar farklı şekillerde gezinir: kimi çift panel, kimi kolon, sekme ya da ağaç görünümü tercih eder. Arayüzü tek bir düzene bağlamak, uygulamayı tek bir iş akışına hapsedecekti.'
        },
        solution: {
          en: 'Implemented each browsing paradigm as a custom view mode — dual-pane, column, tabbed and tree — with drag-and-drop and folder tree navigation wired through Qt signal-slot.',
          tr: 'Her gezinti paradigması özel bir görünüm modu olarak geliştirildi — çift panel, kolon, sekmeli ve ağaç; sürükle-bırak ile klasör ağacı gezintisi Qt signal-slot üzerinden bağlandı.'
        },
        outcome: {
          en: 'Four browsing paradigms in a single application.',
          tr: 'Tek bir uygulamada dört farklı gezinti paradigması.'
        }
      }
    ]
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
    status: ProjectStatus.COMPLETED,
    images: [{ src: '/images/strategy-sim-gallery1.png' }],
    bgImageUrl: '/images/strategy-sim-gallery1.png',
    date: { en: 'June 2025', tr: 'Haziran 2025' },
    links: [{ type: ProjectLinkType.GITHUB, url: 'https://github.com/yunnsbz/StrategyMonitor' }],
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
    techStack: [Tech.QT, Tech.CPP17, Tech.CMAKE, Tech.QT_CREATOR, Tech.GIT],
    challenges: [
      {
        problem: {
          en: 'Filtering and sorting a dense order table by rearranging the underlying data would destroy the source ordering and force a full rebuild on every interaction — unacceptable for a view meant to update continuously.',
          tr: 'Yoğun bir emir tablosunu, altındaki veriyi yeniden düzenleyerek filtrelemek ve sıralamak; kaynak sıralamayı bozar ve her etkileşimde tabloyu baştan kurmayı zorunlu kılardı. Sürekli güncellenmesi beklenen bir görünüm için bu kabul edilemez.'
        },
        solution: {
          en: "Adopted Qt's Model/View architecture and layered proxy models between the source model and the view, so filtering and sorting are expressed as transformations rather than mutations.",
          tr: "Qt'nin Model/View mimarisi benimsendi ve kaynak model ile görünüm arasına proxy modeller yerleştirildi; böylece filtreleme ve sıralama, veriyi değiştiren işlemler değil, dönüşümler olarak ifade ediliyor."
        },
        outcome: {
          en: 'Efficient filtering and sorting that leaves the source data untouched.',
          tr: 'Kaynak veriye dokunmayan, verimli filtreleme ve sıralama.'
        }
      },
      {
        problem: {
          en: 'Standard Qt widgets could not express the status indicators and information density a monitoring view needs — an operator has to read state at a glance, not parse it.',
          tr: 'Standart Qt bileşenleri, bir izleme görünümünün ihtiyaç duyduğu durum göstergelerini ve bilgi yoğunluğunu karşılayamıyordu — bir operatörün durumu okumaya çalışması değil, bir bakışta görmesi gerekir.'
        },
        solution: {
          en: 'Created fully custom UI elements drawn with QPaint, giving fine-grained control over every visual state, together with informative tooltips.',
          tr: 'Her görsel durum üzerinde ince ayar imkânı veren, QPaint ile çizilmiş tamamen özel arayüz bileşenleri ve bilgilendirici tooltip’ler geliştirildi.'
        },
        outcome: {
          en: 'Visual clarity and interactivity beyond what standard Qt widgets allow.',
          tr: 'Standart Qt bileşenlerinin sunabileceğinin ötesinde görsel netlik ve etkileşim.'
        }
      },
      {
        problem: {
          en: 'The application had to behave like a live monitoring tool — updates arriving continuously without stalling the interface — while scaling to large numbers of strategies and orders.',
          tr: 'Uygulamanın canlı bir izleme aracı gibi davranması gerekiyordu: güncellemeler arayüzü durdurmadan sürekli akmalı ve sistem çok sayıda strateji ile emre ölçeklenebilmeliydi.'
        },
        solution: {
          en: 'Used low-latency signal-slot communication to simulate real-time data updates, and kept the data, presentation and interaction layers cleanly separated.',
          tr: 'Gerçek zamanlı veri güncellemelerini simüle etmek için düşük gecikmeli signal-slot iletişimi kullanıldı; veri, sunum ve etkileşim katmanları birbirinden net biçimde ayrıldı.'
        },
        outcome: {
          en: 'A scalable, maintainable architecture that resembles real-world monitoring tools.',
          tr: 'Gerçek dünya izleme araçlarını andıran, ölçeklenebilir ve bakımı kolay bir mimari.'
        }
      }
    ]
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
    status: ProjectStatus.COMPLETED,
    images: [
      { src: '/images/okey-game-gallery1.png' },
      { src: '/images/okey-game-gallery2.png' },
      { src: '/images/okey-game-gallery3.png' }
    ],
    bgImageUrl: '/images/okey-game-gallery3.png',
    links: [{ type: ProjectLinkType.GITHUB, url: 'https://github.com/yunnsbz/101okey' }],
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
    techStack: [Tech.C, Tech.MINGW, Tech.VS_CODE],
    challenges: [
      {
        problem: {
          en: 'Written in C during the first year of university, the game had no engine, no collections library and no objects — the entire rule set of 101 Okey had to be expressed with plain structs and explicit algorithms.',
          tr: 'Üniversitenin ilk yılında C ile yazılan oyunda ne bir motor, ne bir koleksiyon kütüphanesi, ne de nesneler vardı — 101 Okey’in kural setinin tamamı düz struct’lar ve açıkça yazılmış algoritmalarla ifade edilmek zorundaydı.'
        },
        solution: {
          en: 'Modelled tiles, hands and the draw pile as C structures, and implemented distribution, turn order and hand validation as explicit algorithms over them.',
          tr: 'Taşlar, eller ve çekme destesi C yapıları olarak modellendi; dağıtım, sıra yönetimi ve el doğrulama bu yapılar üzerinde açık algoritmalar olarak geliştirildi.'
        },
        outcome: {
          en: 'A playable 101 Okey with full tile distribution and hand management.',
          tr: 'Tam taş dağıtımı ve el yönetimine sahip, oynanabilir bir 101 Okey.'
        }
      },
      {
        problem: {
          en: 'A single-player game needs an opponent that makes reasonable moves, but no learned model or search library was available or appropriate at that level.',
          tr: 'Tek kişilik bir oyunun makul hamleler yapan bir rakibe ihtiyacı vardır; ancak o seviyede öğrenilmiş bir model ya da arama kütüphanesi ne mevcuttu ne de uygundu.'
        },
        solution: {
          en: 'Implemented a rule-based AI opponent that evaluates its hand against the game rules and chooses moves from an explicit decision hierarchy.',
          tr: 'Elini oyun kurallarına göre değerlendiren ve hamlelerini açık bir karar hiyerarşisinden seçen kural tabanlı bir yapay zekâ rakip geliştirildi.'
        },
        outcome: {
          en: 'The game is playable end to end against the computer.',
          tr: 'Oyun, bilgisayara karşı baştan sona oynanabiliyor.'
        }
      },
      {
        problem: {
          en: 'With no graphical toolkit, the whole game state — every hand, the discard piles and whose turn it is — had to remain legible inside a terminal.',
          tr: 'Grafik araç seti olmadığı için oyun durumunun tamamı — her el, atılan taşlar ve sıranın kimde olduğu — bir terminal içinde okunabilir kalmak zorundaydı.'
        },
        solution: {
          en: 'Designed a text-based rendering of the game state, with a console input/output system driving the turn loop.',
          tr: 'Oyun durumunun metin tabanlı bir görselleştirmesi tasarlandı; sıra döngüsü konsol giriş/çıkış sistemiyle sürüldü.'
        },
        outcome: {
          en: 'A readable console interface that keeps the full game state visible.',
          tr: 'Oyun durumunun tamamını görünür tutan, okunabilir bir konsol arayüzü.'
        }
      }
    ]
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
    status: ProjectStatus.COMPLETED,
    images: [
      { src: '/images/calculator-gallery1.png' },
      { src: '/images/calculator-gallery2.png' }
    ],
    bgImageUrl: '/images/calculator-gallery1.png',
    links: [{ type: ProjectLinkType.GITHUB, url: 'https://github.com/yunnsbz/calculator' }],
    date: { en: 'Sep 2023', tr: 'Eylül 2023' },
    features: {
      en: [
        'Advanced mathematical function integration',
        'Clean and intuitive UI using modern Android components',
        'Deep object-oriented implementation in Kotlin',
        'Light and dark mode support with Material Design 3',
        'Optimized for mobile performance'
      ],
      tr: [
        'Gelişmiş matematiksel fonksiyon entegrasyonu',
        'Modern Android bileşenleri ile temiz ve sezgisel arayüz',
        'Kotlin ile derinlemesine nesne yönelimli yapı',
        'Material Design 3 ile açık ve koyu tema desteği',
        'Mobil performans için optimize edilmiş yapı'
      ]
    },
    techStack: [Tech.KOTLIN, Tech.ANDROID_STUDIO],
    challenges: [
      {
        problem: {
          en: 'A scientific calculator exposes far more operations than a basic one, and every added function risks turning the interface into an unusable grid of buttons on a phone screen.',
          tr: 'Bilimsel bir hesap makinesi, temel bir hesap makinesinden çok daha fazla işlem sunar; eklenen her fonksiyon, arayüzü telefon ekranında kullanılamaz bir düğme ızgarasına çevirme riski taşır.'
        },
        solution: {
          en: 'Designed a clean, intuitive layout on modern Android components, with Material Design 3 driving both light and dark themes.',
          tr: 'Modern Android bileşenleri üzerine temiz ve sezgisel bir düzen tasarlandı; açık ve koyu temalar Material Design 3 ile sürüldü.'
        },
        outcome: {
          en: 'An interface that stays readable as the function set grows.',
          tr: 'Fonksiyon seti büyüdükçe okunabilir kalan bir arayüz.'
        }
      },
      {
        problem: {
          en: 'Handling many distinct mathematical operations invites a tangle of special cases, where each new function has to be threaded through the input, evaluation and display paths by hand.',
          tr: 'Birbirinden farklı çok sayıda matematiksel işlemi ele almak, her yeni fonksiyonun girdi, hesaplama ve gösterim yollarından elle geçirilmesi gereken bir özel durum yumağına davetiye çıkarır.'
        },
        solution: {
          en: 'Leaned on a deep object-oriented structure in Kotlin, so operations share a common shape instead of each carrying its own branch through the codebase.',
          tr: 'Kotlin ile derin bir nesne yönelimli yapı benimsendi; böylece işlemler kod tabanında her biri kendi dalını taşımak yerine ortak bir biçimi paylaşıyor.'
        },
        outcome: {
          en: 'A maintainable implementation that stays optimized for mobile performance.',
          tr: 'Mobil performans için optimize kalmayı sürdüren, bakımı kolay bir uygulama.'
        }
      }
    ]
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
    status: ProjectStatus.COMPLETED,
    images: [
      { src: '/images/book-shop-manager-gallery1.png' },
      { src: '/images/book-shop-manager-gallery2.png' },
      { src: '/images/book-shop-manager-gallery3.png' }
    ],
    bgImageUrl: '/images/book-shop-manager-gallery2.png',
    date: { en: 'Feb 2023 - June 2023', tr: 'Şubat 2023 - Haziran 2023' },
    features: {
      en: [
        'Book search functionality',
        'Editing book information after administrator login',
        'Purchase and sales operations',
        'Separate interfaces for customers and administrators',
        'Database integration using MS Access'
      ],
      tr: [
        'Kitap arama fonksiyonu',
        'Yönetici girişi sonrası kitap bilgisi düzenleme',
        'Satın alma ve satış işlemleri',
        'Müşteriler ve yöneticiler için ayrı arayüzler',
        'MS Access ile veritabanı entegrasyonu'
      ]
    },
    techStack: [Tech.JAVA, Tech.JAVA_SWING, Tech.NETBEANS, Tech.MS_ACCESS],
    challenges: [
      {
        problem: {
          en: 'Two audiences share one application: customers who browse and buy, and administrators who can change the catalogue. Exposing the same screens to both would let any user edit the store.',
          tr: 'Tek bir uygulamayı iki farklı kitle paylaşıyor: göz atıp satın alan müşteriler ve kataloğu değiştirebilen yöneticiler. Aynı ekranları ikisine de açmak, her kullanıcının mağazayı düzenleyebilmesi anlamına gelirdi.'
        },
        solution: {
          en: 'Built separate interfaces for the two roles, with catalogue management placed behind an administrator login.',
          tr: 'İki rol için ayrı arayüzler geliştirildi; katalog yönetimi bir yönetici girişinin arkasına alındı.'
        },
        outcome: {
          en: 'Customers search and purchase freely, while book information can only be edited after authentication.',
          tr: 'Müşteriler serbestçe arama yapıp satın alırken, kitap bilgileri yalnızca kimlik doğrulamasından sonra düzenlenebiliyor.'
        }
      },
      {
        problem: {
          en: 'The bookstore needed catalogue and sales data to survive between sessions, without standing up a database server for a semester project.',
          tr: 'Kitapçının katalog ve satış verisinin oturumlar arasında korunması gerekiyordu — üstelik bir dönem projesi için veritabanı sunucusu ayağa kaldırmadan.'
        },
        solution: {
          en: 'Integrated an MS Access database as the persistence layer behind the purchase and sales operations.',
          tr: 'Satın alma ve satış işlemlerinin arkasına kalıcılık katmanı olarak bir MS Access veritabanı entegre edildi.'
        },
        outcome: {
          en: 'Catalogue and transaction data persist across runs of the application.',
          tr: 'Katalog ve işlem verisi, uygulamanın çalıştırmaları arasında kalıcı hale geldi.'
        }
      }
    ]
  }
];
