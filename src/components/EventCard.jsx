// src/components/EventCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export default function EventCard({ title, date, venue, city, ticketUrl }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-neutral-900 p-5 rounded-2xl shadow hover:shadow-indigo-400/20 transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <a href={ticketUrl} className="text-indigo-400 text-sm hover:underline">
          Tickets
        </a>
      </div>
      <p className="flex items-center gap-2 text-gray-400 text-sm">
        <Calendar size={15} /> {date}
      </p>
      <p className="flex items-center gap-2 text-gray-400 text-sm">
        <MapPin size={15} /> {venue}, {city}
      </p>
    </motion.div>
  );
}
