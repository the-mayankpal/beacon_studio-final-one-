'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import noiseBg from '@/public/assets/svg/noise.svg';

const projectsRow1 = [
  { title: "Beacon Studio", tag: "V1 Desktop", image: "/assets/images/project_1.jpg" },
  { title: "The Last Hire", tag: "AI Bot Loop", image: "/assets/images/project3.jpg" },
  { title: "Editorial Portal", tag: "V3 Light", image: "https://res.cloudinary.com/dkxe8h4cs/image/upload/v1774289035/photo_6201569219787296193_y_ylkwjy.jpg" },
  { title: "AI Employee Dashboard", tag: "Enterprise", image: "https://res.cloudinary.com/dkxe8h4cs/image/upload/v1771057298/ai_employou_dashbarod_nkrfxr.png" },
  { title: "AI Agent Pulse", tag: "System Loop", image: "https://res.cloudinary.com/dkxe8h4cs/video/upload/v1774290370/document_6201569219327302908_e34fot.mp4" },
  { title: "Quantum CRM", tag: "Web Platform", image: "/assets/images/service-2.jpg" },
  { title: "Vantage AI", tag: "Machine Learning", image: "/assets/images/service-4.jpg" },
  { title: "Data Visualization", tag: "V4 Analytics", image: "https://res.cloudinary.com/dkxe8h4cs/image/upload/v1774287631/photo_6201569219787296183_w_iigb1o.jpg" },
  { title: "Pulse Analytics", tag: "Data", image: "/assets/images/footer-bg.jpg" },
];

const projectsRow2 = [
  { title: "Future Waitlist", tag: "V2 Dark", image: "/assets/images/project_2.jpg" },
  { title: "Cheese Steak Shop", tag: "Web Menu", image: "/assets/images/project4.jpg" },
  { title: "Cyber Interface", tag: "Next Gen", image: "https://res.cloudinary.com/dkxe8h4cs/image/upload/v1774287737/photo_6201569219787296188_w_otkvxh.jpg" },
  { title: "Neural Workspace", tag: "V5 Studio", image: "https://res.cloudinary.com/dkxe8h4cs/image/upload/v1774288921/photo_6201569219787296192_w_f1fexi.jpg" },
  { title: "Neural Interface", tag: "Core Loop", image: "https://res.cloudinary.com/dkxe8h4cs/video/upload/v1774290370/document_6201569219327302909_ytxguq.mp4" },
  { title: "System Core", tag: "Data Stream", image: "https://res.cloudinary.com/dkxe8h4cs/video/upload/v1774290374/document_6201569219327302910_fqv2o4.mp4" },
  { title: "AI Sales Agent", tag: "AI Agent", image: "/assets/images/service-1.jpg" },
  { title: "Nexus Dashboard", tag: "Analytics", image: "/assets/images/service-3.jpg" },
  { title: "Orbit Platform", tag: "Cloud", image: "/assets/images/hero-bg.jpg" },
];

const Card = ({ title, tag, image }: { title: string; tag: string; image: string }) => {
  const isVideo = image.endsWith('.mp4');

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[420px] h-[180px] sm:h-[210px] lg:h-[260px] rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] relative group cursor-pointer transition-colors duration-500 hover:border-white/20">
      {isVideo ? (
        <video 
          src={image} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 scale-[1.05] group-hover:scale-100"
        />
      ) : (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 scale-[1.05] group-hover:scale-100"
          referrerPolicy="no-referrer"
        />
      )}
      
      {/* Premium Film Grain Effect on Card */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay z-10" 
        style={{ 
          backgroundImage: `url(${noiseBg.src})`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0" />
      
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-20">
        <div className="overflow-hidden">
          <span className="inline-block text-[10px] sm:text-[11px] text-white/60 uppercase tracking-[0.2em] font-medium mb-1 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-full">
            {tag}
          </span>
        </div>
        <h3 className="text-white font-medium text-base sm:text-lg lg:text-xl tracking-tight leading-tight group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tl1 = useRef<gsap.core.Timeline | null>(null);
  const tl2 = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    // Helper to setup marquee
    const setupMarquee = (el: HTMLDivElement, direction: number, duration: number) => {
      const totalWidth = el.scrollWidth / 2;
      
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      });

      // Direction 1: Left to Right (Start at -totalWidth, animate to 0)
      // Direction -1: Right to Left (Start at 0, animate to -totalWidth)
      
      if (direction > 0) {
        tl.fromTo(el, 
          { x: -totalWidth },
          { 
            x: 0, 
            duration: duration,
            modifiers: {
              x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0))
            }
          }
        );
      } else {
        tl.fromTo(el, 
          { x: 0 },
          { 
            x: -totalWidth, 
            duration: duration,
            modifiers: {
              x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0))
            }
          }
        );
      }

      return tl;
    };

    tl1.current = setupMarquee(row1Ref.current, 1, 40); // Row 1: Left to Right
    tl2.current = setupMarquee(row2Ref.current, -1, 45); // Row 2: Right to Left

    // Initial check for viewport
    if (directionRow1Ref.current) tl1.current.play();
    if (directionRow2Ref.current) tl2.current.play();

  }, { scope: containerRef });

  const handleMouseEnter = () => {
    gsap.to([tl1.current, tl2.current], { timeScale: 0.05, duration: 0.8, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to([tl1.current, tl2.current], { timeScale: 1, duration: 0.8, ease: "power2.in" });
  };

  // Necessary ref for GSAP scope
  const directionRow1Ref = useRef(true);
  const directionRow2Ref = useRef(true);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black py-12 sm:py-24 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Visual edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Row 1: Left to Right */}
      <div className="mb-6 sm:mb-8 flex">
        <div ref={row1Ref} className="flex gap-6 sm:gap-8 shrink-0">
          {[...projectsRow1, ...projectsRow1].map((p, i) => (
            <Card key={`r1-${i}`} {...p} />
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="flex">
        <div ref={row2Ref} className="flex gap-6 sm:gap-8 shrink-0">
          {[...projectsRow2, ...projectsRow2].map((p, i) => (
            <Card key={`r2-${i}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
