import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import noiseBg from '@/public/assets/svg/noise.svg';
import { XIcon } from '@/src/components/Icons';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-[1] w-full flex flex-col">
      {/* Top Section: Links & Socials (Dark Mode Seamless) */}
      <div className="w-full bg-black text-gray-400 py-12 px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Links */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          {/* Right side: Socials */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-3 justify-center w-full sm:w-auto">
              <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-white">
                <XIcon className="w-3.5 h-3.5 fill-current" />
              </button>
              <button className="w-9 h-9 shrink-0 flex items-center justify-center border border-white/10 rounded-lg hover:bg-white/5 transition-colors font-bold text-sm text-gray-400 hover:text-white">
                in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Image & Copyright */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px]">
        <img 
          src="/assets/images/footer-landscape.jpg" 
          alt="Footer landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Film Grain Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen" 
          style={{ 
            backgroundImage: `url(${noiseBg.src})`,
          }}
        ></div>

        {/* Copyright Text */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 lg:p-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-white/90">
          <p className="font-bold tracking-wide">© BEACON STUDIO 2026</p>
          <p className="font-bold tracking-wide">Design by BEACON STUDIO</p>
        </div>
      </div>
    </footer>
  );
}
