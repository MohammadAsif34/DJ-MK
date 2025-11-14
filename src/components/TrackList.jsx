// src/components/GigsPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import VideoPlayer from "./VideoPlayer";

export default function TrackList() {
  const tracks = [
    {
      _id: 1001,
      title: "NYE Bollywood Trap MEGAMIX",
      trackUrl: "vGO-ZNhh6tY",
    },
    {
      _id: 1002,
      title: "Akhiyan Gulab (Bstyle Remix)",
      trackUrl: "kRlaJsxEQ4c",
    },
    {
      _id: 1003,
      title: "Billo Bagge  Billeyan Da Ki Krengi",
      trackUrl: "3nV1HY4f8dU",
    },
    {
      _id: 1004,
      title: "Nonstop Mashup 2025",
      trackUrl: "0WD6vxQz5-I",
    },
    {
      _id: 1005,
      title: "Koi Sheri Babu Remix",
      trackUrl: "4kivZpETWfc",
    },
  ];

  const [currTrack, setCurrTrack] = useState(tracks[0]);

  return (
    <section id="tracks" className="b g-neutral-950 py-20 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-white mb-20"
      >
        Our Compose & Track List
      </motion.h2>
      <div className="md:flex   gap-10 ">
        <div className="flex-3/5 max-md:mb-4">
          <VideoPlayer track={currTrack} />
        </div>
        <div className="flex-2/5 max-w-5xl mx-auto gap-6 ">
          {tracks.slice(0, 5).map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`mb-2 ${track._id === currTrack._id && "border"} 
               rounded-xl border-indigo-500  `}
            >
              <TrackListCard idx={i} track={track} setTrack={setCurrTrack} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-center "
          >
            <button
              className=" inline-block px-6 py-2 bg-indigo-500 text-white
          rounded-xl hover:bg-indigo-600"
            >
              see more
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const TrackListCard = ({ idx, track, setTrack }) => {
  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white/10 backdrop-blur-sm  bg-ppa px-5 py-2 md:py-4 flex gap-4 text-gray-500 rounded-xl shadow hover:shadow-indigo-400/20 transition"
        onClick={() => setTrack(track)}
      >
        <span>{idx + 1}</span>
        <p>{track.title} </p>
      </motion.div>
    </>
  );
};
