import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = ({ autoStart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Soft romantic melody background audio URL
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-piano-112191.mp3";

  useEffect(() => {
    if (autoStart) {
      playAudio();
    }
  }, [autoStart]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Audio autoplay prevented by browser:", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      <button
        onClick={toggleAudio}
        aria-label="Toggle background music"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#2c221e]/90 hover:bg-[#2c221e] text-[#e6c86e] p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-[#d4af37]/40 backdrop-blur-md transition-all transform hover:scale-105"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 animate-pulse text-[#e6c86e]" />
            <span className="hidden sm:inline font-sans-clean text-xs tracking-wider">Music On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 text-gray-400" />
            <span className="hidden sm:inline font-sans-clean text-xs tracking-wider text-gray-300">Play Music</span>
          </>
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
