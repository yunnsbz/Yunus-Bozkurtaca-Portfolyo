
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl font-black tracking-tighter">YB.</p>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Yunus Bozkurtaca. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/yunnsbz" target="_blank" className="text-gray-400 hover:text-black transition-colors">Github</a>
          <a href="https://linkedin.com/in/yunusbozkurtaca" target="_blank" className="text-gray-400 hover:text-black transition-colors">LinkedIn</a>
          <a href="mailto:yunus21bzkrtc@gmail.com" className="text-gray-400 hover:text-black transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
