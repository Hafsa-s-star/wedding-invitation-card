import React, { useState } from 'react';
import VideoOverlay from './VideoOverlay';
import HeroHeader from './HeroHeader';
import ScratchCard from './ScratchCard';
import CountdownTimer from './CountdownTimer';
import WeddingEvents from './WeddingEvents';
import VenueMap from './VenueMap';
import RSVPForm from './RSVPForm';
import Footer from './Footer';
import AudioPlayer from './AudioPlayer';
import FloatingPetals from './FloatingPetals';

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [autoStartAudio, setAutoStartAudio] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setAutoStartAudio(true);
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#2c221e] font-sans-clean relative overflow-x-hidden selection:bg-[#d4af37] selection:text-white">
      {/* Intro Video Screen Overlay (Fullscreen Video, No Controls, Click to Open) */}
      {!isOpen && <VideoOverlay onOpen={handleOpenInvitation} />}

      {/* Main Digital Invitation Card */}
      <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-[0.01]'}`}>
        {/* Floating Ambient Music Control */}
        <AudioPlayer autoStart={autoStartAudio} />

        {/* Canvas Floating Golden Petals Animation */}
        {isOpen && <FloatingPetals />}

        {/* Soft Background Radial Lighting */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-25">
          <div className="absolute top-10 left-[10%] w-80 h-80 rounded-full bg-[#d4af37] blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-[#e6c86e] blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        {/* Card Main Wrapper */}
        <main className="relative z-10">
          <HeroHeader />
          <ScratchCard />
          <CountdownTimer />
          <WeddingEvents />
          <VenueMap />
          <RSVPForm />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Invitation;