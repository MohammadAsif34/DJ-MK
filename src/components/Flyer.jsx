import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

export const Flyer = () => {
  const slides = [
    "https://picsum.photos/800/450?random=1",
    "https://picsum.photos/800/450?random=2",
    "https://picsum.photos/800/450?random=3",
    "https://picsum.photos/800/450?random=4",
    "https://picsum.photos/800/450?random=5",
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loaded, setLoaded] = useState(false);

  // Preload all images on mount
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [index]);

  // Slide animation variants (horizontal only)
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
    }),
    center: {
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <>
      {/* <h1>Top Show</h1> */}
      <section className="relative w-full  justify-center py-20 ">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-20 "
        >
          Upcomming Events
        </motion.h2>
        <div className="relative w-full ma x-w-5xl overflow-hidden rounded-2xl shadow-lg bo rder border-neutral-800">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={slides[index]}
              src={slides[index]}
              alt={`Flyer ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              onLoad={() => setLoaded(true)}
            />
          </AnimatePresence>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-indigo-500 scale-110" : "bg-gray-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
