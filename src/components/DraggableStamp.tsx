'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/all';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, Draggable);
}

export default function DraggableStamp() {
  const stampRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ensuring the DOM is entirely painted before attaching physics
    let dragger: any;
    const initDraggable = () => {
      if (stampRef.current instanceof HTMLElement) {
        dragger = Draggable.create(stampRef.current, {
          type: 'x,y',
          bounds: 'body',
          inertia: false, // Disabling inertia to prevent potential missing plugin warnings on basic grab
        });
      }
    };
    
    // Timeout pushes initialization to end of the call stack guaranteeing literal DOM mount
    setTimeout(initDraggable, 0);

    return () => {
      if (dragger && dragger[0]) {
        dragger[0].kill();
      }
    };
  }, { scope: stampRef });

  return (
    <div 
      ref={stampRef}
      // Pushed further outward (sm:-right-24 sm:-bottom-16) to completely avoid covering text
      className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 sm:-bottom-16 sm:-right-24 z-20 cursor-grab active:cursor-grabbing" 
      style={{ filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4))' }}
    >
      <div 
        // Inner rotation wrapper prevents GSAP x/y translation matrix conflicts with CSS rotations
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
            // Pointer events none is critical to avoid Native Browser Image Dragging conflicting with GSAP
            className="w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
