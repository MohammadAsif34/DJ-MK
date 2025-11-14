// src/components/MixCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";

export default function MixCard({ title, cover, genre, date, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:shadow-indigo-500/20"
    >
      <img
        src={cover}
        alt={title}
        className="w-full h-60 object-cover group-hover:opacity-80 transition"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">
          {genre} · {date}
        </p>
        <a
          href={link}
          className="mt-2 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          <Play size={16} /> Listen Now
        </a>
      </div>
    </motion.div>
  );
}
