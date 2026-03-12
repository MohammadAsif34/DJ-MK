// src/components/EventCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const bg = [
  "https://static.vecteezy.com/system/resources/thumbnails/026/432/447/small/dark-music-background-with-playing-dj-photo.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/026/432/376/small/dark-music-background-with-playing-dj-photo.jpg",
  "https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?semt=ais_rp_progressive&w=740&q=80",
  "https://img.freepik.com/free-photo/dj-spinning-mixing-scratching-track-controls-dj-s-deck-strobe-dj-music-club-life-concept_627829-8276.jpg?semt=ais_rp_progressive&w=740&q=80",
  "https://png.pngtree.com/thumb_back/fh260/background/20251223/pngtree-dj-mixing-music-on-professional-sound-controller-with-neon-lights-in-image_20789693.webp",
  "https://static.vecteezy.com/system/resources/thumbnails/050/696/153/small/a-stage-with-a-dj-setup-and-a-geometric-patterned-backdrop-the-lights-are-on-and-the-stage-is-ready-for-a-performance-photo.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/026/364/781/small/dj-playing-live-music-ona-a-night-club-ai-generated-photo.jpg",
  "https://img.freepik.com/free-photo/back-view-audience-with-arms-raised-front-stage-music-concert_637285-640.jpg?semt=ais_rp_50_assets&w=740&q=80",
  "https://png.pngtree.com/thumb_back/fh260/background/20251124/pngtree-dj-mixing-music-tracks-on-turntables-with-vibrant-stage-lights-and-image_20573026.webp",
  "https://img.freepik.com/premium-photo/dj-party-nightclub-crowd-rave-stage-background-stranger-djs_1168123-81547.jpg?semt=ais_rp_progressive&w=740&q=80",
];
export default function EventCard({
  title,
  venue,
  city,
  location = "",
  image = bg,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.05 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-2xl shadow-lg group"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image[Math.floor(Math.random() * image.length)]})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-52">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        <p className="my-2 flex items-center gap-2 text-gray-200 text-lg font-bold">
          <Calendar size={15} /> {venue}
        </p>

        <p className="flex items-center gap-2 text-gray-200 text-sm mt-1">
          <MapPin size={15} /> {city} {location}
        </p>
      </div>
    </motion.div>
  );
}
