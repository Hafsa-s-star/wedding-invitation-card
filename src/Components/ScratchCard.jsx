import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScratchCard = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const weddingDateText = "Sunday, November 15, 2026";
  const weddingTime = "6:00 PM onwards";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = canvas.width = canvas.parentElement.offsetWidth || 340;
    const height = canvas.height = 180;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#d4af37');
    gradient.addColorStop(0.5, '#f3e5ab');
    gradient.addColorStop(1, '#b8860b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#4a3810';
    ctx.font = 'bold 16px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH THE HEART ✨', width / 2, height / 2 - 25);
    ctx.font = '13px Montserrat, sans-serif';
    ctx.fillText('to reveal the Wedding Date', width / 2, height / 2 + 30);

    ctx.strokeStyle = '#8c6611';
    ctx.lineWidth = 3;
    drawHeartShape(ctx, width / 2, height / 2 - 2, 45);

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const drawHeartShape = (ctx, x, y, size) => {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.quadraticCurveTo(x, y, x - size / 2, y);
    ctx.quadraticCurveTo(x - size, y, x - size, y + size / 2);
    ctx.quadraticCurveTo(x - size, y + size, x, y + size * 1.3);
    ctx.quadraticCurveTo(x + size, y + size, x + size, y + size / 2);
    ctx.quadraticCurveTo(x + size, y, x + size / 2, y);
    ctx.quadraticCurveTo(x, y, x, y + size / 4);
    ctx.stroke();
    ctx.restore();
  };

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const scratch = (e) => {
    if (!isDrawing || isScratched) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pos = getPointerPos(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercent();
  };

  const checkScratchPercent = () => {
    if (isScratched) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentCount++;
    }

    const percent = Math.round((transparentCount / (pixels.length / 4)) * 100);

    if (percent > 35 && !isScratched) {
      setIsScratched(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3e5ab', '#ffffff', '#e28743'],
      });
    }
  };

  const startScratch = (e) => {
    setIsDrawing(true);
    scratch(e);
  };

  const stopScratch = () => {
    setIsDrawing(false);
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent("Ayesha & Muzzamil's Wedding #Ayemil");
    const details = encodeURIComponent("Join us in celebrating the wedding of Ayesha & Muzzamil! Hashtag: #Ayemil");
    const location = encodeURIComponent("Royal Palm Floral Garden Hall, Main Boulevard");
    const startDate = "20261115T180000";
    const endDate = "20261115T230000";
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <section ref={containerRef} className="py-12 px-4 max-w-xl mx-auto text-center">
      <div className="glass-gold rounded-3xl p-6 sm:p-8 border-2 border-[#d4af37]/40 shadow-2xl relative">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
          <span className="font-serif-title text-xs tracking-widest text-[#aa771c] uppercase font-bold">
            Interactive Secret Reveal
          </span>
          <Heart className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
        </div>

        <h2 className="font-playfair text-2xl sm:text-3xl text-[#2c221e] font-bold mb-2">
          Scratch to Reveal the Date
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 font-sans-clean mb-6">
          Use your finger or cursor to scratch off the heart card below!
        </p>

        <div className="relative w-full max-w-[340px] h-[180px] mx-auto rounded-2xl overflow-hidden shadow-inner border border-[#d4af37]/30 bg-gradient-to-br from-[#faf6f0] to-[#fffdf9] flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center text-center z-0 space-y-1">
            <Sparkles className="w-6 h-6 text-[#d4af37] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-serif-title text-xs uppercase tracking-widest text-[#aa771c] font-semibold">
              The Grand Wedding Day
            </span>
            <p className="font-playfair text-xl sm:text-2xl text-[#2c221e] font-bold text-[#9b7a37]">
              {weddingDateText}
            </p>
            <p className="font-sans-clean text-xs font-semibold text-gray-600">
              ⏰ {weddingTime}
            </p>
          </div>

          <canvas
            ref={canvasRef}
            onMouseDown={startScratch}
            onMouseMove={scratch}
            onMouseUp={stopScratch}
            onMouseLeave={stopScratch}
            onTouchStart={startScratch}
            onTouchMove={scratch}
            onTouchEnd={stopScratch}
            className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 z-10 ${
              isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />
        </div>

        {isScratched && (
          <div className="mt-4 text-emerald-700 font-sans-clean text-xs font-semibold flex items-center justify-center gap-1.5 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Date Revealed Successfully! See you on Nov 15, 2026!
          </div>
        )}

        {/* Save the Date Button (Download file button removed as requested) */}
        <div className="mt-8 space-y-3">
          <p className="font-serif-title text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
            Don't forget to mark your calendar
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleCalendar}
              className="w-full sm:w-auto flex items-center justify-center gap-2 gold-gradient-bg text-stone-900 font-sans-clean font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-[#d4af37]"
            >
              <Calendar className="w-4 h-4 text-stone-900" />
              Save Date in Google Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScratchCard;
