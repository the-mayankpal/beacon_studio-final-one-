"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate, useMotionValue, useTransform, useScroll } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import { ArrowUpRight, ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import noiseBg from '@/public/assets/svg/noise.svg';
import { CursorIcon, AnthropicIcon, N8nIcon, PythonIcon, OpenAIIcon, TelegramIcon } from '@/src/components/Icons';
import { NetworkAnimation } from '@/src/components/ui/network-animation';
import { TestimonialSlider } from '@/src/components/ui/testimonial-slider';
import { MarqueeSection } from '@/src/components/ui/marquee-section';
import { WaitlistCTA } from '@/src/components/ui/WaitlistCTA';
import { FadeIn } from '@/src/components/ui/FadeIn';

const services = [
  { 
    title: "Predictive Analytics", 
    desc: "Anticipate market trends with real-time data processing. Make informed decisions before the market shifts.",
    image: "/assets/images/service-1.jpg"
  },
  { 
    title: "Automated Workflows", 
    desc: "Connect your favorite tools with zero-code integrations. Streamline your operations and save countless hours.",
    image: "/assets/images/service-2.jpg"
  },
  { 
    title: "Cognitive Security", 
    desc: "Enterprise-grade protection powered by machine learning. Keep your data safe with proactive threat detection.",
    image: "/assets/images/service-3.jpg"
  },
  { 
    title: "Natural Language", 
    desc: "Conversational interfaces that understand context and nuance. Communicate with your data as naturally as a human.",
    image: "/assets/images/service-4.jpg"
  }
];


const revealText = "We believe that technology should amplify human potential, not replace it. By building intuitive tools and powerful agents, we are creating a future where complex challenges are solved with elegant simplicity.";
const revealWords = revealText.split(" ");

const Word = ({ word, progress, range }: { word: string; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.05, 1]);
  return (
    <motion.span 
      style={{ opacity }}
      className="reveal-word inline-block mr-[0.25em] mb-2 sm:mb-4 text-white"
    >
      {word}
    </motion.span>
  );
};

const ScrollRevealSection = () => {
  return (
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center overflow-hidden px-6 sm:px-10">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="reveal-text-container text-3xl sm:text-4xl md:text-[52px] lg:text-6xl font-sans leading-[1.3] flex flex-wrap justify-center">
          {revealWords.map((word, i) => (
            <span key={i} className="reveal-word inline-block mr-[0.25em] mb-2 sm:mb-4 text-white opacity-5">
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  startAnimation?: boolean;
}

const AnimatedNumber = ({ value, suffix = "", startAnimation = false }: AnimatedNumberProps) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (startAnimation) {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [startAnimation, value, motionValue]);

  return <motion.span className="font-sans">{rounded}</motion.span>;
};


const HeroContent = () => (
  <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
    {/* Background Image & Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://res.cloudinary.com/dkxe8h4cs/image/upload/v1774549132/file_000000009bf871fab5ef5600980f17fd_ps10bh.png" 
        alt="Mystical forest background" 
        className="w-full h-full object-cover opacity-80"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
      
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-screen" 
        style={{ 
          backgroundImage: `url(${noiseBg.src})`,
        }}
      ></div>
    </div>

    <div className="relative z-10 flex flex-col min-h-screen w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center text-center pt-8 pb-12 md:pt-12 md:pb-24">
        <div className="max-w-3xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 mb-6 md:mb-8">
            <div className="bg-white text-black rounded-full p-1">
              <ArrowUpRight size={14} strokeWidth={3} />
            </div>
            <span className="text-xs font-medium text-gray-200 pr-2 whitespace-nowrap">200+ hours saved for our clients</span>
          </div>

          <h1 className="font-serif text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[80px] font-medium sm:leading-[1.1] mb-4 md:mb-6 tracking-tight max-w-[640px] sm:max-w-4xl mx-auto text-white">
            Honestly? Your Business Needs Two Things.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mb-8 md:mb-10 leading-relaxed font-light">
            A website that works for you and AI agents that never stop. We do both.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Contact Us <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>

      <div className="pb-8 md:pb-12 flex flex-col items-center justify-center w-full">
        <p className="text-sm font-medium text-gray-400 mb-6 md:mb-8">Powered by Leading AI Technologies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-70 text-white">
          <div className="flex items-center gap-2">
            <CursorIcon className="w-6 h-6 fill-current" />
            <span className="font-bold text-xl tracking-tight">Cursor</span>
          </div>
          <div className="flex items-center gap-2">
            <AnthropicIcon className="w-6 h-6 fill-current" />
            <span className="font-bold text-xl tracking-tight">Anthropic</span>
          </div>
          <div className="flex items-center gap-2">
            <N8nIcon className="w-6 h-6 fill-current" />
            <span className="font-bold text-xl tracking-tight">n8n</span>
          </div>
          <div className="flex items-center gap-2">
            <PythonIcon className="w-6 h-6 fill-current" />
            <span className="font-bold text-xl tracking-tight">Python</span>
          </div>
          <div className="flex items-center gap-2">
            <OpenAIIcon className="w-6 h-6 fill-current" />
            <span className="font-bold text-xl tracking-tight">OpenAI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MiniStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
        <FadeIn className="max-w-lg">
          <p className="text-white text-lg sm:text-xl font-sans font-medium leading-relaxed">
            You know what? Agents don't ask for breaks.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-10 sm:gap-16 w-full md:w-auto">
          <div className="flex flex-col border-l border-white/10 pl-6">
            <span className="text-[11px] font-bold tracking-widest text-gray-400 font-sans uppercase mb-1">Faster</span>
            <span className="text-5xl sm:text-6xl font-medium text-white font-sans tracking-tight"><AnimatedNumber value={10} suffix="x" startAnimation={isInView} /></span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-6">
            <span className="text-[11px] font-bold tracking-widest text-gray-400 font-sans uppercase mb-1">Time Saved</span>
            <span className="text-5xl sm:text-6xl font-medium text-white font-sans tracking-tight"><AnimatedNumber value={80} suffix="%" startAnimation={isInView} /></span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-6">
            <span className="text-[11px] font-bold tracking-widest text-gray-400 font-sans uppercase mb-1">Availability</span>
            <span className="text-5xl sm:text-6xl font-medium text-white font-sans tracking-tight"><AnimatedNumber value={24} suffix="/7" startAnimation={isInView} /></span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cinematicContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovering]);
  useGSAP(() => {
    if (!cinematicContainer.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cinematicContainer.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Word-by-word text reveal — dull to bright, one by one
    tl.to(".reveal-word", {
      opacity: 1,
      stagger: 0.06,
      duration: 0.4,
      ease: "power2.out"
    });

  }, { scope: cinematicContainer });

  return (
    <>
      {/* Content layer — scrolls above the fixed footer */}
      <div className="relative z-[2]">
      <HeroContent />
      
      <div className="bg-black relative z-10">
        <MiniStatsSection />
      </div>

      {/* Text Reveal Section — pinned while words fill in */}
      <div id="cinematic-track" ref={cinematicContainer} className="relative w-full h-[200vh] bg-black">
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <ScrollRevealSection />
        </div>
      </div>

      {/* Services Section — normal vertical scroll */}
      <section className="relative w-full bg-black py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Premium Film Grain Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-0" 
          style={{ 
            backgroundImage: `url(${noiseBg.src})`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Service Image Preview */}
            <FadeIn>
            <div className="lg:h-[500px] min-h-[300px] sm:min-h-[400px] rounded-xl border border-white/10 flex flex-col justify-end relative overflow-hidden group bg-[#0a0a0a]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={services[activeService].image} 
                  alt={services[activeService].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            </FadeIn>

            {/* Service Details Accordion */}
            <FadeIn delay={0.15}>
            <div 
              className="flex flex-col justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:h-[500px] self-center gap-2 lg:pl-4 w-full"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {services.map((item, i) => {
                const isActive = i === activeService;
                return (
                  <motion.div 
                    key={i} 
                    layout
                    onClick={() => setActiveService(i)}
                    className={`relative flex items-center justify-between group cursor-pointer overflow-hidden rounded-xl transition-colors duration-500 ${isActive ? 'bg-white/5 border border-white/10 p-6' : 'bg-transparent border border-transparent p-4'}`}
                  >
                    <div className="relative z-10">
                      <motion.h3 layout className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-white mb-2' : 'text-gray-500'}`}>
                        {item.title}
                      </motion.h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm md:text-base text-[#888888] leading-relaxed max-w-md">{item.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.div layout className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 relative z-10 shrink-0 ml-4 ${isActive ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 group-hover:text-white group-hover:border-white/30'}`}>
                      {isActive ? (
                        <ArrowRight size={18} />
                      ) : (
                        <ArrowUpRight size={18} />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <MarqueeSection />

      <WaitlistCTA />
      </div>

      <Footer />
    </>
  );
}
