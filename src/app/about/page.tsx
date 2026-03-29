import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import noiseBg from '@/public/assets/svg/noise.svg';

export const metadata: Metadata = {
  title: "About Us - Beacon Studio",
  description: "By building the right products and developing the right agents, we can amplify human potential.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-sans text-white relative">
      <section className="relative min-h-[40vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2532&auto=format&fit=crop" 
            alt="Mystical forest background" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
          
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen" 
            style={{ 
              backgroundImage: `url(${noiseBg.src})`,
            }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <Navbar />
        </div>
      </section>

      <main className="relative z-10 flex-grow flex flex-col items-center pt-16 pb-32 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden sm:overflow-visible">
        
        <div className="max-w-2xl text-center mb-8">
          <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed tracking-wide">
            AI should enable people to work less and do more. To live less burdened by the<br className="hidden sm:block" />
            difficulty of the world. Yet, the work seems more complicated every day.
          </p>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] leading-[1.2] sm:leading-[1.15] text-center max-w-3xl mb-12 sm:mb-16 text-white px-2">
          By building the right products, and<br className="hidden sm:block" />
          developing the right agents, we can fix that.
        </h1>

        <div className="relative w-full max-w-[640px] mb-20 sm:mb-0">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 pb-12 sm:p-12 shadow-2xl border border-white/10 relative z-10">
            
            <div className="space-y-5 sm:space-y-6 text-[14px] sm:text-[16px] leading-[1.7] text-gray-300">
              <p>
                We envision a future where people orchestrating swarms of agents can run vast, complex businesses, and agents handle most of the work in a business's day. To stay, every business owner should have a full staff of agents available 24/7 as if they ran a digital Fortune 500.
              </p>
              
              <p>
                There's over 400 million businesses globally, and a billion more will be founded in the coming years. Our goal is to enable every one of them to become agent-native. We're building a world where anyone with an idea can start a business.
              </p>
              
              <p>
                Our name, The General Intelligence Company of New York, references general intelligence on the horizon. We're going to use that to run companies.
              </p>
              
              <p>
                But this isn't just about automation. It's about fundamentally reshaping how humans interact with their life's work. By removing the repetitive friction of traditional operations, we free creators, founders, and teams to focus purely on strategy, expression, and vision.
              </p>
              
              <p>
                We rely on highly specialized, context-aware AI models that don't just respond to prompts—they anticipate needs, orchestrate micro-tasks, and relentlessly pursue the business objectives you set for them. They are tireless digital teammates built for the next era of the internet.
              </p>
              
              <p>
                We're starting from the ground up, reimagining enterprise software as an intuitive, ambient layer of intelligence. We invite you to join us in building a world where human ambition is the only bottleneck.
              </p>
            </div>


          </div>

          <div 
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 sm:-bottom-16 sm:-right-24 z-20" 
            style={{ filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4))' }}
          >
            <div 
              className="bg-white p-2 sm:p-2.5 rotate-[8deg] transition-transform hover:rotate-[10deg] duration-300"
              style={{
                WebkitMaskImage: 'linear-gradient(black, black), radial-gradient(circle at 5px 5px, transparent 4px, black 4.5px)',
                WebkitMaskSize: 'calc(100% - 10px) calc(100% - 10px), 14px 14px',
                WebkitMaskPosition: 'center, -5px -5px',
                WebkitMaskRepeat: 'no-repeat, repeat',
                maskImage: 'linear-gradient(black, black), radial-gradient(circle at 5px 5px, transparent 4px, black 4.5px)',
                maskSize: 'calc(100% - 10px) calc(100% - 10px), 14px 14px',
                maskPosition: 'center, -5px -5px',
                maskRepeat: 'no-repeat, repeat'
              }}
            >
              <div className="w-36 h-24 sm:w-44 sm:h-32 overflow-hidden relative border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop" 
                  alt="New York Stamp" 
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
