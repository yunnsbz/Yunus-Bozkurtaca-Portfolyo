
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import LazyImage from '../components/LazyImage';
import { useLanguage } from '../LanguageContext';
import { CategoryTranslations, StatusTranslations, ProjectLinkType, ProjectStatus } from '../types';

const STATUS_STYLES: Record<ProjectStatus, string> = {
  [ProjectStatus.ONGOING]: 'bg-amber-400/15 text-amber-200 border-amber-300/30',
  [ProjectStatus.RELEASED]: 'bg-emerald-400/15 text-emerald-200 border-emerald-300/30',
  [ProjectStatus.COMPLETED]: 'bg-white/10 text-white/70 border-white/20'
};

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const LinkIcon: React.FC<{ type: ProjectLinkType }> = ({ type }) => {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' };
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (type) {
    case ProjectLinkType.GITHUB:
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case ProjectLinkType.STORE:
      return (
        <svg {...common} {...stroke}>
          <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
        </svg>
      );
    case ProjectLinkType.ITCH:
      return (
        <svg {...common} fill="currentColor">
          <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/>
        </svg>
      );
    case ProjectLinkType.VIDEO:
      return (
        <svg {...common} {...stroke}>
          <circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8z"/>
        </svg>
      );
    case ProjectLinkType.ARTICLE:
      return (
        <svg {...common} {...stroke}>
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/>
        </svg>
      );
    default:
      return (
        <svg {...common} {...stroke}>
          <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        </svg>
      );
  }
};

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = projectIndex >= 0 ? PROJECTS[projectIndex] : undefined;

  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = useMemo(() => {
    if (!project) return [];
    // Order must match the order the sections appear on the page.
    const list: { id: string; label: string }[] = [];
    list.push({ id: 'overview', label: t('toc_overview') });
    if (project.images.length > 0) list.push({ id: 'gallery', label: t('toc_gallery') });
    list.push({ id: 'features', label: t('toc_features') });
    if (project.challenges?.length) list.push({ id: 'challenges', label: t('toc_challenges') });
    list.push({ id: 'tech', label: t('toc_tech') });
    return list;
  }, [project, language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Galeri indeksi projeye özgüdür; proje değişince sıfırlanmalı, aksi halde
    // az görselli bir projeye geçildiğinde indeks sınır dışına taşar.
    setCurrentGalleryIndex(0);
    setBgLoaded(false);

    if (!project) return;

    if (project.bgImageUrl) {
      const bgImg = new Image();
      bgImg.src = project.bgImageUrl;
      bgImg.onload = () => setBgLoaded(true);
    }

    project.images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [projectId, project]);

  useEffect(() => {
    document.body.style.overflow = isFullscreenOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenOpen]);

  // Lightbox klavye kontrolleri
  useEffect(() => {
    if (!isFullscreenOpen || !project) return;

    const total = project.images.length;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenOpen(false);
      if (e.key === 'ArrowRight') setCurrentGalleryIndex((prev) => (prev + 1) % total);
      if (e.key === 'ArrowLeft') setCurrentGalleryIndex((prev) => (prev - 1 + total) % total);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFullscreenOpen, project]);

  // Highlights whichever section currently sits in the upper third of the
  // viewport. Sections outside that band are ignored, so scrolling never leaves
  // the rail without a selection.
  useEffect(() => {
    if (sections.length === 0) return;
    setActiveSection(sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b
        );
        setActiveSection(topmost.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">{t('not_found')}</h2>
          <Link to="/" className="text-blue-600 hover:underline">{t('return_home')}</Link>
        </div>
      </div>
    );
  }

  const images = project.images;
  const currentImage = images[currentGalleryIndex];
  const hasCaptions = images.some((image) => image.caption);
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Status and date already appear as badges above the title, so the meta strip
  // only carries what the badges do not.
  const metaRows: { label: string; value: string }[] = [];
  if (project.role) metaRows.push({ label: t('sidebar_role'), value: project.role[language] });
  if (project.teamSize) {
    metaRows.push({
      label: t('sidebar_team'),
      value: project.teamSize === 1 ? t('team_solo') : `${project.teamSize} ${t('team_suffix')}`
    });
  }

  return (
    <div className="relative min-h-screen">
      {/* Lightbox */}
      {isFullscreenOpen && currentImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
            <img
              src={currentImage.src}
              alt={currentImage.caption?.[language] ?? project.title[language]}
              className="max-w-full max-h-[85%] object-contain shadow-2xl rounded-lg cursor-zoom-out"
              onClick={(e) => { e.stopPropagation(); setIsFullscreenOpen(false); }}
            />

            {currentImage.caption && (
              <p
                className="max-w-2xl text-center text-sm md:text-base text-white/60 leading-relaxed px-4"
                onClick={(e) => e.stopPropagation()}
              >
                {currentImage.caption[language]}
              </p>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
                  aria-label="Previous Image"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
                  aria-label="Next Image"
                >
                  <ChevronRight />
                </button>
              </>
            )}

            <button
              className="absolute top-0 right-0 p-4 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsFullscreenOpen(false)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Progressive Background. Projects without a bgImageUrl keep the neutral
          dark base instead of fading in a missing image. */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        <div className={`absolute inset-0 bg-[#2d2d2d] transition-opacity duration-[1500ms] ${bgLoaded ? 'opacity-0' : 'opacity-100'}`} />
        {project.bgImageUrl && (
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[2000ms] ease-out ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${project.bgImageUrl}')` }}
          >
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[6px]" />
          </div>
        )}
      </div>

      {/* Section rail. Fixed to the right gutter and vertically centred, so it
          stays reachable at any scroll position. Hidden below 1400px, where the
          1024px content column would leave no gutter to sit in. */}
      <nav
        aria-label={t('toc_aria')}
        className="hidden min-[1400px]:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-4"
      >
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-current={isActive ? 'true' : undefined}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <span
                className={`text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/35 group-hover:text-white/70'
                }`}
              >
                {label}
              </span>
              <span
                className={`h-px transition-all duration-300 ${
                  isActive ? 'w-8 bg-white' : 'w-3 bg-white/25 group-hover:w-5 group-hover:bg-white/50'
                }`}
              />
            </button>
          );
        })}
      </nav>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-12 text-white/70 hover:text-white flex items-center gap-2 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> {t('back_to_projects')}
          </button>

          <header id="overview" className="mb-16 scroll-mt-28">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.categories.map((cat) => (
                <span key={cat} className="px-3 py-1 bg-white/20 text-white rounded-lg text-xs font-bold backdrop-blur-md">
                  {CategoryTranslations[language][cat]}
                </span>
              ))}
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md border ${STATUS_STYLES[project.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {StatusTranslations[language][project.status]}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-lg text-xs font-bold backdrop-blur-md">
                {project.date[language]}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              {project.title[language]}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl whitespace-pre-line">
              {project.longDescription[language]}
            </p>

            {metaRows.length > 0 && (
              <dl className="flex flex-wrap gap-x-12 gap-y-5 pt-10">
                {metaRows.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-[10px] font-black uppercase tracking-[0.15em] text-white/40 mb-1.5">
                      {label}
                    </dt>
                    <dd className="text-base font-medium text-white/90">{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-10">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-5 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-2xl hover:shadow-white/5 hover:scale-[1.02] active:scale-95"
                  >
                    <LinkIcon type={link.type} />
                    {link.label ? link.label[language] : t(`link_${link.type}`)}
                    <svg
                      className="w-5 h-5 opacity-30 transform -rotate-45 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </header>

          <div className="space-y-16">

              {/* Gallery */}
              {images.length > 0 && currentImage && (
                <section id="gallery" className="scroll-mt-28">
                  <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/40 border border-white/10 group flex items-center justify-center">
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center blur-[60px] opacity-20 scale-110 pointer-events-none transition-all duration-700"
                      style={{ backgroundImage: `url('${currentImage.src}')` }}
                    />

                    <LazyImage
                      src={currentImage.src}
                      alt={currentImage.caption?.[language] ?? `${project.title[language]} view ${currentGalleryIndex + 1}`}
                      containerClassName="w-full h-full flex items-center justify-center"
                      className="relative z-10 max-w-full max-h-full object-contain cursor-zoom-in"
                      onClick={() => setIsFullscreenOpen(true)}
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 z-20 flex items-center justify-center bg-black/40 md:bg-black/20 md:hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100 border border-white/10"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 z-20 flex items-center justify-center bg-black/40 md:bg-black/20 md:hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100 border border-white/10"
                          aria-label="Next Image"
                        >
                          <ChevronRight />
                        </button>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => { e.stopPropagation(); setCurrentGalleryIndex(idx); }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentGalleryIndex ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/40'
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    <div className="absolute top-8 left-8 z-20 bg-black/40 backdrop-blur-md text-white text-[10px] px-4 py-2 rounded-full font-black tracking-widest border border-white/5">
                      {currentGalleryIndex + 1} / {images.length}
                    </div>
                  </div>

                  {/* Caption alanı: yükseklik sabit tutulur, aksi halde görsel
                      değişiminde altındaki içerik zıplar. */}
                  {hasCaptions && (
                    <div className="min-h-[3.5rem] pt-5 px-2">
                      {currentImage.caption && (
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                          {currentImage.caption[language]}
                        </p>
                      )}
                    </div>
                  )}
                </section>
              )}

              {/* Empty state for projects with nothing presentable to show yet. */}
              {images.length === 0 && (
                <div className="h-[280px] md:h-[340px] rounded-[2.5rem] border border-dashed border-white/15 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-4 px-8">
                  <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  <h2 className="text-xl font-bold text-white/70">{t('no_visuals_title')}</h2>
                  <p className="text-white/40 max-w-md leading-relaxed text-sm">{t('no_visuals_desc')}</p>
                </div>
              )}

              {/* Video & GIF */}
              {(project.youtubeId || project.gifUrl) && (
                <div className="space-y-8">
                  {project.youtubeId && (
                    <div className="rounded-3xl overflow-hidden shadow-2xl bg-black/30 aspect-video border border-white/10">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${project.youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {project.gifUrl && (
                    <div className="rounded-3xl overflow-hidden shadow-2xl bg-black/30 border border-white/10">
                      <img src={project.gifUrl} alt="Project Preview GIF" className="w-full h-auto object-cover" />
                    </div>
                  )}
                </div>
              )}

              {/* Core Features */}
              <section id="features" className="scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
                  {t('section_features')}
                </h2>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl text-white shadow-xl">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {project.features[language].map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-white/80 leading-snug">
                        <span className="text-white/40 shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Challenges & Solutions */}
              {project.challenges && project.challenges.length > 0 && (
                <section id="challenges" className="scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
                    {t('section_challenges')}
                  </h2>

                  <div className="space-y-6">
                    {project.challenges.map((challenge, idx) => (
                      <article
                        key={idx}
                        className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm overflow-hidden"
                      >
                        <span className="absolute top-6 right-8 text-6xl md:text-7xl font-black text-white/5 select-none leading-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>

                        <div className="relative space-y-7">
                          <div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-rose-300/70 mb-3">
                              {t('challenge_problem')}
                            </h3>
                            <p className="text-white/75 leading-relaxed max-w-3xl">
                              {challenge.problem[language]}
                            </p>
                          </div>

                          <div className="relative pl-6 border-l-2 border-sky-300/25">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-300/70 mb-3">
                              {t('challenge_solution')}
                            </h3>
                            <p className="text-white/85 leading-relaxed max-w-3xl">
                              {challenge.solution[language]}
                            </p>
                          </div>

                          {challenge.outcome && (
                            <div className="inline-flex items-start gap-3 bg-emerald-400/10 border border-emerald-300/20 rounded-2xl px-5 py-4">
                              <svg className="w-5 h-5 shrink-0 mt-0.5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5"/>
                              </svg>
                              <div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300/80 mb-1">
                                  {t('challenge_outcome')}
                                </h3>
                                <p className="text-white/90 font-medium leading-relaxed">
                                  {challenge.outcome[language]}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* Tech Stack */}
              <section id="tech" className="scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
                  {t('section_tech_stack')}
                </h2>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/10 text-white/85 rounded-lg text-sm font-medium border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
          </div>

          {/* Prev / Next Project */}
          {(prevProject || nextProject) && (
            <nav className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="group flex flex-col gap-2 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm transition-all"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    {t('prev_project')}
                  </span>
                  <span className="text-lg font-bold text-white/90 leading-snug">{prevProject.title[language]}</span>
                </Link>
              ) : (
                <div className="hidden md:block" />
              )}

              {nextProject && (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="group flex flex-col gap-2 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm transition-all md:text-right md:items-end"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                    {t('next_project')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="text-lg font-bold text-white/90 leading-snug">{nextProject.title[language]}</span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
