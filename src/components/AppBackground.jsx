import React from "react";
import { motion } from "framer-motion";

export const AppBackground = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white ">
      {/* Neon Animated Background Layers */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 opacity-10 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 opacity-10 blur-2xl"
      />

      {/* Optional Floating Glowing Circles */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 rounded-full bg-indigo-500 opacity-20 top-20 left-10 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 rounded-full bg-pink-500 opacity-20 bottom-10 right-10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 ">{children}</div>
    </div>
  );
};
