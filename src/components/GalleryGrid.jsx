// src/components/GalleryGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { ImgGrid } from "./ImgGrid";

export default function GalleryGrid({ items }) {
  return (
    <section className="py-20 bg-black">
      {/* <h2 className="text-3xl font-bold text-center text-white mb-10">
        Gallery
      </h2> */}
      <ImgGrid />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {/* {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={"https://picsum.photos/300?random=1"}
              alt={item.caption || "gallery"}
              className="w-full h-48 object-cover hover:opacity-80 transition"
            />
          </motion.div>
        ))} */}
      </div>
    </section>
  );
}
