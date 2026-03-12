// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { about } from "../data/dataset";

export default function About() {
  return (
    <section
      id="about"
      className="b g-neutral-950 py-20 md:px-6 text-center text-gray-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-white mb-20"
      >
        About DJ Vicky Hussain
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className=" md:mx-40 md:text-xl   text-justify"
      >
        {about}
      </motion.p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { label: "Live Shows", value: "100+" },
          { label: "Countries", value: "4" },
          { label: "Years in Scene", value: "8" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 rounded-2xl p-6"
          >
            <h3 className="text-4xl font-bold text-indigo-400">{stat.value}</h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
