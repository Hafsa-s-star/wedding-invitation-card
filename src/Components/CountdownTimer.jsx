import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CountdownTimer = () => {
  const containerRef = useRef(null);

  // Target date: November 15, 2026 18:00:00
  const targetDate = new Date('2026-11-15T18:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section ref={containerRef} className="py-12 px-4 max-w-4xl mx-auto text-center">
      <div className="flex justify-center items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-[#d4af37]" />
        <span className="font-serif-title text-xs tracking-widest text-[#aa771c] uppercase font-bold">
          Counting Down To Forever
        </span>
      </div>

      <h2 className="font-playfair text-3xl sm:text-4xl text-[#2c221e] font-bold mb-8">
        The Big Day Countdown
      </h2>

      {/* Countdown Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {timeUnits.map((item, index) => (
          <div
            key={index}
            className="glass-gold p-4 sm:p-6 rounded-2xl border border-[#d4af37]/40 shadow-xl flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform"
          >
            <span className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#9b7a37] mb-1">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="font-sans-clean text-xs uppercase tracking-widest text-gray-600 font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center gap-2 text-xs font-sans-clean text-[#7a6040]">
        <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
        <span>Every second brings us closer to our forever #Ayemil</span>
        <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
      </div>
    </section>
  );
};

export default CountdownTimer;
