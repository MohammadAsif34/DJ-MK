// src/components/AudioPlayer.jsx
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setTime(a.currentTime);
    a.addEventListener("timeupdate", onTime);
    return () => a.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <div className="w-full max-w-3xl bg-neutral-900/60 p-4 rounded-2xl backdrop-blur-md">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => {
            const a = audioRef.current;
            if (!a) return;
            if (playing) {
              a.pause();
              setPlaying(false);
            } else {
              a.play();
              setPlaying(true);
            }
          }}
          className="p-3 rounded-full bg-white/5"
        >
          {playing ? <Pause /> : <Play />}
        </button>

        <div className="flex-1">
          <div className="text-sm text-neutral-300">Latest Mix</div>
          <div className="text-xs text-neutral-400">
            {Math.floor(time / 60)}:
            {String(Math.floor(time % 60)).padStart(2, "0")}
          </div>
          <input
            type="range"
            min="0"
            max={audioRef.current?.duration || 100}
            value={audioRef.current?.currentTime || 0}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
              setTime(e.target.value);
            }}
            className="w-full mt-2"
          />
        </div>
      </div>
    </div>
  );
}
