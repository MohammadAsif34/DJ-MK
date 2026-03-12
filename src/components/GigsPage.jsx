// src/components/GigsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { gigsAndTours } from "../data/dataset";

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
    <section
      id="gigs"
      className="b g-neutral-950/50 py-20 md:px-6 backdrop-blur-2xl rounded-2xl"
    >
      {/* ===== Club Gigs ====== */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-white my-10"
      >
        Club Gigs
      </motion.h2>
      <div className="mb-20 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigsAndTours?.clubGigs?.map((gig, i) => (
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

      {/* ===== International Tours ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-white my-10"
      >
        International Tours
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigsAndTours?.internationalTours?.map((gig, i) => (
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
    </section>
  );
}
