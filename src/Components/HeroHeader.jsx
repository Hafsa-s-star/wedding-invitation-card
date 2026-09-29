import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Heart, Sparkles } from 'lucide-react';

const HeroHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim-1', {
        y: -40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-hashtag', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'back.out(1.7)',
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={headerRef}
      className="relative pt-20 pb-20 sm:pt-32 sm:pb-28 text-center px-4 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center"
    >
      {/* Beautiful Background Image Behind Ayesha & Muzzamil */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="Wedding Floral Background"
          className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Soft Gold & Pearl Dark Vignette Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/65 to-[#faf6f0]" />
      </div>

      {/* Main Content Card Container over the image */}
      <div className="relative z-10 max-w-3xl mx-auto glass-dark p-8 sm:p-14 rounded-3xl border border-[#d4af37]/40 shadow-2xl backdrop-blur-md">
        {/* Decorative Golden Floral Top Crest */}
        <div className="hero-anim-1 flex justify-center items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="font-serif-title text-xs sm:text-sm tracking-[0.3em] uppercase text-[#e6c86e] font-semibold">
              Together With Their Families
            </span>
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Monogram Seal */}
        <div className="hero-anim-1 my-6 flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#d4af37] flex items-center justify-center p-2 relative bg-stone-950/80 shadow-2xl">
            <div className="w-full h-full rounded-full border border-dashed border-[#d4af37]/70 flex items-center justify-center">
              <span className="font-script text-3xl sm:text-4xl text-[#e6c86e] font-bold">
                S & O
              </span>
            </div>
            <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37] absolute -bottom-2 bg-stone-900 px-0.5" />
          </div>
        </div>

        {/* Main Wedding Invitation Heading */}
        <p className="hero-anim-1 font-serif-title text-xs sm:text-sm uppercase tracking-[0.25em] text-[#e6c86e]/90 mb-2">
          Request the pleasure of your company at the celebration of their union
        </p>

        <div className="hero-anim-1 my-4">
          <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-white leading-tight drop-shadow-2xl">
            Sophia <span className="text-[#e6c86e] font-playfair font-normal text-4xl sm:text-6xl md:text-7xl align-middle px-2">&</span> Oliver
          </h1>
        </div>

        {/* Hashtag Tag */}
        <div className="hero-hashtag inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/35 to-[#d4af37]/20 px-6 py-2 rounded-full border border-[#d4af37]/60 shadow-lg my-4">
          <Sparkles className="w-4 h-4 text-[#e6c86e]" />
          <span className="font-sans-clean font-bold text-base sm:text-lg text-[#e6c86e] tracking-widest uppercase">
            #Sophiver
          </span>
          <Sparkles className="w-4 h-4 text-[#e6c86e]" />
        </div>

        {/* Aesthetic Separator */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="h-[1px] w-20 sm:w-36 bg-gradient-to-r from-transparent to-[#d4af37]/80" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#d4af37] bg-[#d4af37]/50" />
          <div className="h-[1px] w-20 sm:w-36 bg-gradient-to-l from-transparent to-[#d4af37]/80" />
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
