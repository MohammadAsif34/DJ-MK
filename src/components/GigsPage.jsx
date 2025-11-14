// src/components/GigsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";

export default function GigsPage() {
  const gigs = [
    {
      title: "Electric Pulse Festival",
      date: "Dec 22, 2025",
      venue: "Bangalore Arena",
      city: "Bangalore",
      ticketUrl: "#",
    },
    {
      title: "Neon Beats Tour",
      date: "Jan 15, 2026",
      venue: "Sunburn Goa",
      city: "Goa",
      ticketUrl: "#",
    },
    {
      title: "Midnight Wave Session",
      date: "Feb 10, 2026",
      venue: "Kolkata Underground",
      city: "Kolkata",
      ticketUrl: "#",
    },
  ];

  return (
    <section id="gigs" className="bg-neutral-950/50 py-20 md:px-6 backdrop-blur-2xl rounded-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-white mb-20"
      >
        Upcoming Gigs & Tours
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <EventCard {...gig} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400">Want to book a date on the next tour?</p>
        <a
          href="#booking"
          className="inline-block mt-4 px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}
