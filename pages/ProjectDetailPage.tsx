
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === projectId);
  
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    if (isFullscreenOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFullscreenOpen]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Modern Ok İkonları (SVG)
  const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  );

  const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  );

  return (
    <div className="relative min-h-screen">
      {/* Enhanced Lightbox with Navigation */}
      {isFullscreenOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={project.images[currentGalleryIndex]} 
              alt="Fullscreen" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg cursor-zoom-out"
              onClick={(e) => { e.stopPropagation(); setIsFullscreenOpen(false); }}
            />
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
                >
                  <ChevronRight />
                </button>
              </>
            )}

            <button 
              className="absolute top-0 right-0 p-4 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsFullscreenOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('${project.bgImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[6px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="mb-12 text-white/70 hover:text-white flex items-center gap-2 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
          </button>

          <header className="mb-16">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.categories.map((cat, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 text-white rounded-lg text-xs font-bold backdrop-blur-md">
                  {cat}
                </span>
              ))}
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-lg text-xs font-bold backdrop-blur-md">
                {project.date}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              
              {/* GALLERY AREA - Responsive Aspect Ratio & Non-Cropping Image */}
              <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/40 border border-white/10 group flex items-center justify-center">
                
                {/* Blurred Backdrop to fill empty spaces elegantly */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center blur-[60px] opacity-20 scale-110 pointer-events-none transition-all duration-700"
                  style={{ backgroundImage: `url('${project.images[currentGalleryIndex]}')` }}
                ></div>

                {/* Main Content Image (Contain) */}
                <img 
                  src={project.images[currentGalleryIndex]} 
                  alt={`${project.title} view ${currentGalleryIndex + 1}`} 
                  className="relative z-10 max-w-full max-h-full object-contain cursor-zoom-in transition-all duration-500 hover:scale-[1.01]"
                  onClick={() => setIsFullscreenOpen(true)}
                />
                
                {/* Gallery Controls */}
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 z-20 flex items-center justify-center bg-black/20 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/5"
                    >
                      <ChevronLeft />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 z-20 flex items-center justify-center bg-black/20 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/5"
                    >
                      <ChevronRight />
                    </button>
                    
                    {/* Pagination Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentGalleryIndex(idx); }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentGalleryIndex ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                {/* Photo Count Badge */}
                <div className="absolute top-8 left-8 z-20 bg-black/40 backdrop-blur-md text-white text-[10px] px-4 py-2 rounded-full font-black tracking-widest border border-white/5">
                  {currentGalleryIndex + 1} / {project.images.length}
                </div>
              </div>

              {/* Video & Media Section */}
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
                    ></iframe>
                  </div>
                )}

                {project.gifUrl && (
                  <div className="rounded-3xl overflow-hidden shadow-2xl bg-black/30 border border-white/10">
                    <img 
                      src={project.gifUrl} 
                      alt="Project Preview GIF" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Technical Details (At the bottom of main column) */}
              {project.technicalDetails && (
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm">
                  <button 
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="w-full flex items-center justify-between p-8 text-white font-bold text-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span>Technical Details</span>
                    </div>
                    <span className={`text-2xl transition-transform duration-500 ${isMoreOpen ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  
                  <div className={`grid transition-all duration-500 ${isMoreOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="p-4 pt-4 border-t border-white/5">
                        <ul className="space-y-4">
                          {project.technicalDetails.map((detail, idx) => (
                            <li key={idx} className="flex gap-4 text-white/80 leading-relaxed">
                              <span className="font-bold">▸</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-white shadow-xl sticky top-32">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span>🛠️</span> Key Features
                </h3>
                <ul className="space-y-4 mb-8">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-white/80 leading-snug">
                      <span className="text-white">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {project.githubUrl && (
                  <div className="space-y-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg"
                    >
                      View Repository
                    </a>
                  </div>
                )}

                {project.storeUrl && (
                  <div className="mt-10">
                    <a 
                      href={project.storeUrl}
                      target="_blank"
                      className="block w-full py-4 text-center bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      View Store Page
                    </a>
                  </div>
                )}

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
