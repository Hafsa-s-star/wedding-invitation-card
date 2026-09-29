import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Play } from 'lucide-react';

const VideoOverlay = ({ onOpen }) => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  const handleClick = () => {
    // Only start video playback when user clicks/taps on screen
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.log('Playback error:', err));
    }

    // Smoothly animate video zoom and curtain lift to open envelope
    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpen) onOpen();
      },
    });

    tl.to(videoRef.current, {
      scale: 1.1,
      duration: 1.2,
      ease: 'power2.inOut',
    }).to(
      overlayRef.current,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        opacity: 0,
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '-=0.4'
    );
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer overflow-hidden select-none"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      {/* Video envelope - NO autoplay, NO controls. Only plays when user clicks */}
      <video
        ref={videoRef}
        src="/video-envelope.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 pointer-events-none"
      />

      {/* Subtle floating click indicator */}
      <div className="absolute bottom-12 z-20 flex flex-col items-center pointer-events-none opacity-90 animate-bounce">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md text-[#e6c86e] px-7 py-3 rounded-full border border-[#d4af37]/50 shadow-2xl">
          <Play className="w-4 h-4 text-[#e6c86e] fill-[#e6c86e]" />
          <span className="font-sans-clean text-xs font-bold tracking-widest uppercase">
            Click Anywhere to Open Card
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
