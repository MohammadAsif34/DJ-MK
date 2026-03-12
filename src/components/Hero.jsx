// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } },
};

export default function Hero({ onPlay }) {
  return (
    <section
      id="home"
      className=" relative h-[60vh] md:h-screen px-6 md:px-10 lg:px-32 bg-gradient-to-br/30 backdrop-blur-2xl from-neutral-900/50 via-black/50 to-neutral-800/50 overflow-hidden flex"
    >
      {/* Background layers (parallax) */}
      <div className="absolute inset-0 -z-10">
        {/* background video or image */}
        <div className="w-full h-full bg-[url('/hero-loop.jpg')] bg-cover bg-center opacity-30 filter blur-sm" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* ================= Hero text area ============= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto h-full flex flex-col justify-center md:px-6 "
      >
        <motion.h1
          // variants={reveal}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight text-white "
        >
          <span className="font-thin font-serif text-4xl md:text-7xl">DJ</span>
          <p>
            M <span className="text-indigo-400">Vicky Hussain</span>
          </p>
        </motion.h1>
        <motion.p
          variants={reveal}
          className="mt-4 max-w-xl text-sm md:text-xl text-gray-300"
        >
          High-energy sets blending house, techno & breaks. Available for clubs
          and festivals worldwide.
        </motion.p>

        <motion.div variants={reveal} className="mt-12 flex gap-4">
          <button
            onClick={onPlay}
            className="inline-flex items-center text-xs md:text-xl gap-3 px-3 md:px-5 py-1.5 md:py-3 rounded-2xl bg-indigo-500/90 hover:bg-indigo-500/100 text-white shadow-2xl"
          >
            <Play size={18} />
            Play Latest Mix
          </button>

          <a
            href="#booking"
            className="text-xs md:text-xl px-3 md:px-5 py-1.5 md:py-3 rounded-2xl border border-neutral-700 text-neutral-200"
          >
            Book Me
          </a>
        </motion.div>
      </motion.div>
      {/* ================= Hero image area ============= */}

      <div className="hidden w-full sm:flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" w-full h-screen pt-20 pb-4 "
        >
          <img
            src="/p1.png"
            alt=""
            className="h-full w-full object-center object-contain scale-150"
          />
        </motion.div>
      </div>
      {/*
      <div className="hidden w-full xl:flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" w-full h-screen pt-20 pb-4 "
        >
          <div className=" w-full h-full p-5 relative">
            <div className="w-[40%]  h-1/2 absolute top-10 left-0 rounded-3xl z-20 overflow-hidden p-2 bg-black">
              <motion.img
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                src="/album/img-1.jpg"
                alt=""
                className=" w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
            <div className="w-3/5  h-4/5 absolute right-20 bottom-0 rounded-2xl z-10 overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                src="/album/img-102.jpg"
                alt=""
                className=" w-full h-full   object-cover object-center"
              />
            </div>

            <div className="w-[60%]  h-[38%] absolute -left-20 bottom-5 rounded-3xl z-10 overflow-hidden bg-black p-2">
              <motion.img
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                src="/album/img-3.jpg"
                alt=""
                className=" w-full h-full   object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div> */}
      {/* subtle decorative SVG (animated) */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        className="absolute  right-[-10%] bottom-0 w-[60vw] h-[60vh] pointer-events-none"
      >
        {/* decorative blob or waveform */}
      </motion.svg>
    </section>
  );
}
