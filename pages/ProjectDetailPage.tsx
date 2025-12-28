
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === projectId);
  
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Sayfa açıldığında en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Tam ekran modunda scrollu engelle
  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [fullscreenImage]);

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

  const handleImageClick = (url: string) => {
    setFullscreenImage(url);
  };

  return (
    <div className="relative min-h-screen">
      {/* Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl cursor-zoom-out p-4 md:p-10 transition-all duration-300"
          onClick={() => setFullscreenImage(null)}
        >
          <img 
            src={fullscreenImage} 
            alt="Fullscreen view" 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg transform transition-transform duration-500 scale-100"
          />
          <button className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl">&times;</button>
        </div>
      )}

      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('${project.bgImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      {/* Content */}
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
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-md">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm font-medium backdrop-blur-md">
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
            {/* Visuals Column */}
            <div className="lg:col-span-2 space-y-12">
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl bg-black/30 border border-white/10 group cursor-zoom-in"
                onClick={() => handleImageClick(project.imageUrl)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {project.youtubeId && (
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/30 aspect-video border border-white/10">
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

              {/* Technical Details / "More" Section */}
              {project.technicalDetails && (
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-500">
                  <button 
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="w-full flex items-center justify-between p-8 text-white font-bold text-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span>Technical Details</span>
                    </div>
                    <span className={`text-2xl transition-transform duration-500 ${isMoreOpen ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isMoreOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-8 pt-0 border-t border-white/5 space-y-4">
                        <ul className="space-y-4">
                          {project.technicalDetails.map((detail, idx) => (
                            <li key={idx} className="flex gap-4 text-white/80 leading-relaxed group">
                              <span className="font-bold group-hover:scale-125 transition-transform">▸</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 aspect-square group cursor-zoom-in"
                  onClick={() => handleImageClick('https://picsum.photos/seed/detail1/800/800')}
                >
                   <img 
                    src="https://picsum.photos/seed/detail1/800/800" 
                    alt="Detail 1" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 aspect-square group cursor-zoom-in"
                  onClick={() => handleImageClick('https://picsum.photos/seed/detail2/800/800')}
                >
                   <img 
                    src="https://picsum.photos/seed/detail2/800/800" 
                    alt="Detail 2" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Info Sidebar */}
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
                    {['Unity', 'C#', 'UI Toolkit', 'Addressables', 'Git'].map(tag => (
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
