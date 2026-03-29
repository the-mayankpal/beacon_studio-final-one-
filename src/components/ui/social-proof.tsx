'use client';

import React from 'react';
import Image from 'next/image';

interface SocialProofProps {
  count: string;
  className?: string;
}

const SocialProof = ({ count, className = "" }: SocialProofProps) => {
  // Use the one generated avatar and some placeholders/existing ones
  const avatars = [
    { src: '/assets/images/user-avatar-1.png', alt: 'User 1' },
    { src: '/assets/images/denis.png', alt: 'User 2' },
    { src: '/assets/images/service-1.jpg', alt: 'User 3' },
  ];

  return (
    <div className={`flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full w-fit ${className}`}>
      <div className="flex -space-x-2">
        {avatars.map((avatar, i) => (
          <div 
            key={i} 
            className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-gray-800"
          >
            <img 
              src={avatar.src} 
              alt={avatar.alt} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-l border-white/10 pl-3">
        <span className="text-[11px] font-medium text-white/50 tracking-wide">
          Join <span className="text-white font-semibold">{count}</span> people on waitlist
        </span>
      </div>
    </div>
  );
};

export default SocialProof;
