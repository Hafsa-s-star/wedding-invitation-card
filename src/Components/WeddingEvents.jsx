import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  Clock,
  Sparkles,
  Utensils,
  Award,
  Heart,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WeddingEvents = () => {
  const sectionRef = useRef(null);

  const events = [
    {
      title: 'Sacred Nikkah Ceremony',
      time: '04:30 PM',
      date: 'Sunday, Nov 15, 2026',
      desc: 'The solemnization of vows as Sophia & Oliver unite in Holy Matrimony under divine blessings, surrounded by family love & prayers.',
      image:
        ' https://i.pinimg.com/originals/77/eb/3d/77eb3d502b03a7c9ac52c35212bf3e51.jpg',
      badge: 'Spiritual Union',
      icon: Sparkles,
    },
    {
      title: 'Grand Baraat & Reception',
      time: '07:00 PM',
      date: 'Sunday, Nov 15, 2026',
      desc: 'Welcome of the Baraat followed by a royal dinner banquet, floral decorations, live music, and joyful celebrations.',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      badge: 'Royal Banquet',
      icon: Award,
    },
    {
      title: 'Walima Celebration',
      time: '07:30 PM',
      date: 'Monday, Nov 16, 2026',
      desc: 'A grand celebratory feast hosted by the groom’s family to share gratitude, laughter, and happiness with loved ones.',
      image:
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      badge: 'Gratitude Feast',
      icon: Utensils,
    },
  ];

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      '.event-card',
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 max-w-7xl mx-auto text-center"
    >
      {/* Section Heading */}
      <div className="flex justify-center items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-[#d4af37]" />

        <span className="font-serif-title text-xs tracking-widest text-[#aa771c] uppercase font-bold">
          Program Schedule
        </span>

        <Sparkles className="w-4 h-4 text-[#d4af37]" />
      </div>

      <h2 className="font-playfair text-3xl sm:text-5xl text-[#2c221e] font-bold mb-4">
        Wedding Celebrations & Events
      </h2>

      <p className="text-sm font-sans-clean text-gray-600 max-w-xl mx-auto mb-12">
        We invite you to be part of every magical moment as we celebrate love,
        culture, and togetherness.
      </p>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {events.map((event, index) => {
          const IconComp = event.icon;

          return (
            <div
              key={index}
              className="event-card glass-gold rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl flex flex-col h-full min-w-0 text-left hover:border-[#d4af37] transition-all duration-500 transform hover:-translate-y-3 group"
            >
              {/* Event Image Banner */}
              <div className="relative h-52 overflow-hidden shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-black/30 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-[#e6c86e] text-[10px] font-bold font-sans-clean uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#d4af37]/40">
                  {event.badge}
                </div>

                {/* Title + Icon */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3 text-white">
                  <h3 className="font-playfair text-xl font-bold drop-shadow-md leading-tight">
                    {event.title}
                  </h3>

                  <div className="w-8 h-8 min-w-8 rounded-full gold-gradient-bg p-[1px]">
                    <div className="w-full h-full bg-[#1c1613] rounded-full flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-[#e6c86e]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date + Time */}
                  <div className="space-y-2 mb-4 text-xs font-sans-clean">
                    <div className="flex items-start gap-2 font-bold text-[#aa771c] text-sm">
                      <Calendar className="w-4 h-4 shrink-0 mt-0.5" />

                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2 font-semibold text-gray-700 text-xs">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />

                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-sans-clean leading-relaxed">
                    {event.desc}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between gap-3 text-xs text-[#aa771c] font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37] shrink-0" />

                    <span>Joyfully Awaited</span>
                  </span>

                  <span className="text-[11px] text-gray-500 font-normal text-right">
                    Royal Banquet Hall
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WeddingEvents;