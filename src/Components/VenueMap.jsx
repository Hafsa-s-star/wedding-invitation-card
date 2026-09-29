import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VenueMap = () => {
  const containerRef = useRef(null);

  const venueName = "Royal Palm Floral Garden & Grand Ballroom";
  const venueAddress = "Main Boulevard, Canal Bank Road, Lahore, Punjab";
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venueName + " " + venueAddress
  )}`;

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

  return (
    <section ref={containerRef} className="py-16 px-4 max-w-5xl mx-auto text-center">
      <div className="flex justify-center items-center gap-2 mb-2">
        <Compass className="w-4 h-4 text-[#d4af37]" />
        <span className="font-serif-title text-xs tracking-widest text-[#aa771c] uppercase font-bold">
          Location & Venue
        </span>
      </div>

      <h2 className="font-playfair text-3xl sm:text-4xl text-[#2c221e] font-bold mb-4">
        Where Love Unites Us
      </h2>

      <p className="text-sm font-sans-clean text-gray-600 max-w-xl mx-auto mb-8">
        We would be honored by your presence as we celebrate our special day at this luxurious venue.
      </p>

      <div className="glass-gold rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 text-left">
        {/* Left Venue Details */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#fffdf9] to-[#faf4eb]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#aa771c] text-xs font-bold font-sans-clean mb-4">
              <MapPin className="w-3.5 h-3.5" /> Official Wedding Venue
            </div>

            <h3 className="font-playfair text-2xl font-bold text-[#2c221e] mb-3 leading-snug">
              {venueName}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-sans-clean leading-relaxed mb-6">
              {venueAddress}
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-xl bg-white/80 border border-[#d4af37]/20 text-xs font-sans-clean text-gray-700 flex items-center justify-between">
                <span className="font-semibold text-stone-800">Parking Facility:</span>
                <span className="text-emerald-700 font-medium">Valet & Ample Parking Available</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#d4af37]/20 text-xs font-sans-clean text-gray-700 flex items-center justify-between">
                <span className="font-semibold text-stone-800">Accessibility:</span>
                <span className="text-emerald-700 font-medium">Wheelchair Accessible</span>
              </div>
            </div>
          </div>

          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 gold-gradient-bg text-stone-900 font-sans-clean font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer border border-[#d4af37]"
          >
            <Navigation className="w-4 h-4 fill-current" />
            Get Directions on Google Maps
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
          </a>
        </div>

        {/* Right Embedded Google Map */}
        <div className="lg:col-span-7 h-[320px] lg:h-auto min-h-[320px] relative bg-stone-200">
          <iframe
            title="Wedding Venue Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.554310577938!2d74.3768565!3d31.5089304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919058b73a25d2b%3A0xcf9588bf3a07c3!2sRoyal%20Palm%20Golf%20%26%20Country%20Club!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
          />
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
