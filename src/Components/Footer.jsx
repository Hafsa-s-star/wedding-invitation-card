import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-12 pb-16 px-4 bg-[#1a1412] text-[#f7f3ed] text-center border-t border-[#d4af37]/30 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/10 to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 space-y-4">
        <div className="flex justify-center items-center gap-2">
          <Heart className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
        </div>

        <h3 className="font-script text-4xl sm:text-5xl text-[#e6c86e]">
          Sophia & Oliver
        </h3>

        <p className="font-serif-title text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
          #Sophiver • November 15, 2026
        </p>

        <p className="font-playfair italic text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        <div className="pt-6 border-t border-white/10 text-[11px] font-sans-clean text-stone-400">
          With Love & Blessings from the Families of Sophia & Oliver
        </div>
      </div>
    </footer>
  );
};

export default Footer;
