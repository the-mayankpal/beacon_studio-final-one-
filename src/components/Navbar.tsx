"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import beaconLogo from '@/public/assets/svg/beacon-logo.svg';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '#', label: 'Features' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Contact' },
];

const menuVars = {
  initial: { y: "-100%" },
  animate: { 
    y: 0, 
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const, staggerChildren: 0.1, delayChildren: 0.2 } 
  },
  exit: { 
    y: "-100%", 
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } 
  }
};

const linkVars = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } }
};

export default function Navbar({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isLight = theme === 'light';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="relative flex items-center justify-between py-8">
      <div className="flex items-center">
        <Link href="/" className="group flex items-center gap-4 relative z-50">
          <Image 
            src={beaconLogo} 
            alt="Beacon Studio" 
            className={`h-14 w-auto ${!isLight ? 'invert opacity-90' : 'opacity-90'} transition-all duration-500 will-change-transform group-hover:scale-105 group-hover:opacity-100`} 
          />
          <span className={`text-base font-semibold tracking-[0.3em] uppercase ${isLight ? 'text-black/90' : 'text-white/90'} transition-opacity duration-500 group-hover:opacity-100`}>
            BEACON STUDIO
          </span>
        </Link>
      </div>
      
      <div className={`hidden md:flex items-center space-x-10 text-sm font-medium ${isLight ? 'text-gray-600' : 'text-gray-200'}`}>
        <Link href="/about" className={`transition-colors ${isLight ? 'hover:text-black' : 'hover:text-white'}`}>About</Link>
        <a href="#" className={`transition-colors ${isLight ? 'hover:text-black' : 'hover:text-white'}`}>Features</a>
        <a href="#" className={`transition-colors ${isLight ? 'hover:text-black' : 'hover:text-white'}`}>FAQ</a>
        <a href="#" className={`transition-colors ${isLight ? 'hover:text-black' : 'hover:text-white'}`}>Contact</a>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-8">
        <button className={`hidden sm:block ${isLight ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'} px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors`}>
          Contact Us
        </button>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`sm:hidden flex items-center justify-center w-10 h-10 rounded-full border ${isLight ? 'border-black/20 text-black' : 'border-white/20 text-white'} transition-colors z-50 relative`}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
              initial={false}
              animate={{ 
                opacity: isMenuOpen ? 0 : 1, 
                rotate: isMenuOpen ? 90 : 0,
                scale: isMenuOpen ? 0.5 : 1
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              <Menu size={18} />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                rotate: isMenuOpen ? 0 : -90,
                scale: isMenuOpen ? 1 : 0.5
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              <X size={18} />
            </motion.div>
          </div>
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed inset-0 flex flex-col items-center justify-center space-y-8 z-40 ${isLight ? 'bg-white/95 backdrop-blur-md' : 'bg-black/98 backdrop-blur-md'}`}
          >
            {navLinks.map((link, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div variants={linkVars}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`block text-4xl font-light tracking-wide transition-opacity hover:opacity-60 ${isLight ? 'text-black' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
