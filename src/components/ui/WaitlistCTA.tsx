'use client';

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import SocialProof from './social-proof';
import noiseBg from '@/public/assets/svg/noise.svg';

const versionDots = ["V1", "V2", "V3", "V4", "V5"];

const CTAImageGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-3 h-[400px] sm:h-[500px] lg:h-full min-h-[500px]">
      {/* Top Left: Car (Tall) */}
      <div className="row-span-2 rounded-2xl overflow-hidden border border-white/10 group">
        <img 
          src="/assets/images/cta-car.png" 
          alt="Modern Car" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Top Right: Cityscape (Short) */}
      <div className="rounded-2xl overflow-hidden border border-white/10 group">
        <img 
          src="/assets/images/footer-landscape.jpg" 
          alt="Cityscape" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Middle Right: Portrait (Tall) */}
      <div className="row-span-2 rounded-2xl overflow-hidden border border-white/10 group">
        <img 
          src="/assets/images/cta-portrait.png" 
          alt="Portrait" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Bottom Left: Abstract (Short) */}
      <div className="rounded-2xl overflow-hidden border border-white/10 group">
        <img 
          src="/assets/images/cta-abstract.png" 
          alt="Abstract Art" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export const WaitlistCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-black py-16 sm:py-32 px-4 sm:px-10 lg:px-20 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="bg-[#0a0a0a] rounded-[32px] overflow-hidden border border-white/5 relative shadow-2xl">
          
          {/* Film Grain */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-10" 
            style={{ 
              backgroundImage: `url(${noiseBg.src})`,
              backgroundRepeat: 'repeat',
            }}
          ></div>

          <div className="flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left Column: Content */}
            <div className="flex-1 p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative z-20">
              
              {/* V-Switcher Decoration */}
              <div className="flex items-center gap-6 mb-12 sm:mb-16">
                <span className="text-[11px] font-bold text-white tracking-[0.2em]">CLICK</span>
                <div className="flex items-center gap-4">
                  {versionDots.map((v, i) => (
                    <span 
                      key={v} 
                      className={`text-[10px] sm:text-[11px] font-medium tracking-widest cursor-default ${i === 1 ? 'text-white' : 'text-white/30'}`}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-[1.1] tracking-tight max-w-xl">
                Be First in Line for <br className="hidden sm:block" />
                the Future
              </h2>
              
              <p className="text-sm sm:text-base text-white/40 mb-10 max-w-md leading-relaxed">
                We&#39;re building something awesome—and you&#39;re invited. Join our waitlist to get early access, exclusive updates, and a sneak peek before anyone else.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 p-1 rounded-[20px] bg-white/[0.03] border border-white/5 mb-10 max-w-lg transition-all focus-within:border-white/20 focus-within:bg-white/[0.05]">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-white px-5 py-3.5 flex-1 placeholder:text-white/20 text-sm"
                />
                <button className="bg-[#e25d24] hover:bg-[#ff6d31] text-white px-8 py-3 rounded-[16px] font-medium transition-all text-sm active:scale-95 shadow-lg shadow-[#e25d24]/20">
                  Subscribe
                </button>
              </div>

              <SocialProof count="3000+" />
            </div>

            {/* Right Column: Decorative Grid */}
            <div className="flex-1 relative p-4 sm:p-8 lg:p-10 lg:border-l border-white/5">
              <CTAImageGrid />
              
              {/* Subtle ambient glow in the corner */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#e25d24]/5 blur-[120px] pointer-events-none rounded-full" />
            </div>
          </div>

          {/* Bottom Branding Footer */}
          <div className="px-8 sm:px-12 py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-20">
            <div className="flex items-center gap-6 text-[10px] tracking-[0.1em] text-white/30 uppercase font-medium">
              <span className="hover:text-white/60 cursor-pointer transition-colors">Get template</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span className="hover:text-white/60 cursor-pointer transition-colors">Made in framer</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span className="hover:text-white/60 cursor-pointer transition-colors">Built in framer</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
