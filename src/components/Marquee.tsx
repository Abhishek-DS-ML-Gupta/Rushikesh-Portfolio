'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

/* `scale` compensates for logos with heavy internal whitespace (e.g. square marks) */
const CLIENTS: { name: string; logo: string; scale?: number }[] = [];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;
    gsap.to(track, {
      x: -totalWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
    return () => gsap.killTweensOf(track);
  }, []);

  const items = [...CLIENTS, ...CLIENTS];

  return (
    <div data-theme="dark" className="w-full bg-[#0A0A0A] border-t border-white/6 py-8 overflow-hidden">
      <div ref={trackRef} className="flex items-center gap-16 w-max">
        {items.map((client, i) => (
          <div key={`${client.name}-${i}`} className="flex items-center gap-16 shrink-0">
            <div className="relative h-14 w-56 opacity-25 hover:opacity-60 transition-opacity duration-300">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
              />
            </div>
            <span className="text-white/10 text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
