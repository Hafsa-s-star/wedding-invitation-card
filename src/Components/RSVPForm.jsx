import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Heart, CheckCircle2, MessageSquare, User, Users, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RSVPForm = () => {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    attendance: 'attending',
    guests: '1',
    wish: '',
  });

  const [wishesList, setWishesList] = useState([
    {
      name: 'Usman & Family',
      attendance: 'attending',
      wish: 'Wishing Sophia and Oliver a lifetime of love, joy, and endless happiness! #Sophiver',
      time: 'Just now',
    },
    {
      name: 'Dr. Bilal Malik',
      attendance: 'declined',
      wish: 'Regrettably cannot join in person due to travel, but sending my warmest blessings for Sophia & Oliver!',
      time: '45 mins ago',
    },
    {
      name: 'Fatima Noor',
      attendance: 'attending',
      wish: 'May your marriage be blessed with peace, harmony, and togetherness forever!',
      time: '1 hour ago',
    },
    {
      name: 'Hamza Khan',
      attendance: 'attending',
      wish: 'So excited for the grand celebration! Congratulations to both of you! 🎉',
      time: '3 hours ago',
    },
  ]);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.wish.trim()) return;

    // Add new wish to list
    const newEntry = {
      name: formData.name.trim(),
      attendance: formData.attendance,
      wish: formData.wish.trim(),
      time: 'Just now',
    };

    setWishesList([newEntry, ...wishesList]);
    setSubmitted(true);

    // Launch confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#e6c86e', '#ffffff'],
    });

    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        name: '',
        attendance: 'attending',
        guests: '1',
        wish: '',
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section ref={containerRef} className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
          <span className="font-serif-title text-xs tracking-widest text-[#aa771c] uppercase font-bold">
            RSVP & Best Wishes
          </span>
          <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl text-[#2c221e] font-bold">
          Send Your Blessings to #Sophiver
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 font-sans-clean mt-2">
          Please confirm your attendance and leave a warm message for Sophia & Oliver
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-6 glass-gold rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl relative">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full gold-gradient-bg mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-stone-900" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#2c221e]">
                Thank You, {wishesList[0]?.name}!
              </h3>
              <p className="font-sans-clean text-xs text-gray-600 max-w-xs mx-auto">
                Your response and heartfelt wish have been recorded for Sophia & Oliver.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input */}
              <div>
                <label className="block font-sans-clean text-xs font-bold text-[#7a6040] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#d4af37]" /> Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Ahmed"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#d4af37]/40 text-stone-800 text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
                />
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block font-sans-clean text-xs font-bold text-[#7a6040] uppercase tracking-wider mb-1.5">
                  Will You Attend? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, attendance: 'attending' }))}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-bold font-sans-clean transition-all cursor-pointer ${
                      formData.attendance === 'attending'
                        ? 'gold-gradient-bg text-stone-900 border-[#d4af37] shadow-md'
                        : 'bg-white/80 border-[#d4af37]/30 text-stone-700 hover:bg-white'
                    }`}
                  >
                    🎉 Joyfully Accepts
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, attendance: 'declined' }))}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-bold font-sans-clean transition-all cursor-pointer ${
                      formData.attendance === 'declined'
                        ? 'bg-[#2c221e] text-[#e6c86e] border-[#2c221e] shadow-md'
                        : 'bg-white/80 border-[#d4af37]/30 text-stone-700 hover:bg-white'
                    }`}
                  >
                    💌 Regrettably Declines
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              {formData.attendance === 'attending' && (
                <div>
                  <label className="block font-sans-clean text-xs font-bold text-[#7a6040] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" /> Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#d4af37]/40 text-stone-800 text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">4+ Family Members</option>
                  </select>
                </div>
              )}

              {/* Wish Message */}
              <div>
                <label className="block font-sans-clean text-xs font-bold text-[#7a6040] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" /> Warm Wishes & Blessing *
                </label>
                <textarea
                  name="wish"
                  required
                  rows={3}
                  placeholder="Write a sweet congratulatory message for Sophia & Oliver..."
                  value={formData.wish}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#d4af37]/40 text-stone-800 text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 gold-gradient-bg text-stone-900 font-sans-clean font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer border border-[#d4af37]"
              >
                <Send className="w-4 h-4 fill-current" />
                Submit RSVP & Send Wish
              </button>
            </form>
          )}
        </div>

        {/* Live Wishes Wall Display */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-serif-title text-sm uppercase tracking-widest text-[#aa771c] font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" /> Wishes Wall ({wishesList.length})
            </h3>
            <span className="text-xs font-sans-clean text-gray-500">Live Updates</span>
          </div>

          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {wishesList.map((item, index) => (
              <div
                key={index}
                className="glass-gold p-4 rounded-2xl border border-[#d4af37]/30 shadow-sm relative text-left"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-playfair font-bold text-sm text-[#2c221e]">
                      {item.name}
                    </span>
                    {item.attendance === 'attending' ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        Attending
                      </span>
                    ) : (
                      <span className="bg-[#800020]/15 text-[#800020] border border-[#800020]/30 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        Not Attending
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 font-sans-clean">{item.time}</span>
                </div>
                <p className="text-xs font-sans-clean text-gray-700 leading-relaxed italic">
                  "{item.wish}"
                </p>
              </div>
            ))}]
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
