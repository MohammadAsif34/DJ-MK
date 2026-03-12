import { motion } from "framer-motion";
import React from "react";

export const UpcomingEvent = () => {
  return (
    <>
      <section id="gallery" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-20"
        >
          Upcomming Events
        </motion.h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(5)].map((b, idx) => (
            <motion.div
              class="grid gap-4 h-96 overflow-hidden relative rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full absolute top-0 left-0 flex flex-col">
                <div className="flex-1 h-full w-full bg-white/20 invisible hover:visible">
                  s
                </div>
                <button className="w-fit m-2 rounded-full bg-indigo-500 py-2 px-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">Book Ticket</button>
              </div>
              <motion.img
                // initial={{ opacity: 0, scale: 0.9, y: 20 }}
                // whileInView={{ opacity: 1, scale: 1, y: 0 }}
                // viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="h-auto max-w-full rounded-lg"
                src="/album/img-101.jpg"
                // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
