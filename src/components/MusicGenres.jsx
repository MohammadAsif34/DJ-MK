import { motion } from "framer-motion";

const genres = [
  "Bollywood",
  "Commercial",
  "Deep House",
  "House",
  "Hip Hop",
  "Nu Disco",
  "Indie House",
  "Tech House",
  "Progressive",
  "Minimal",
  "Techno",
  "Afro House",
];

export default function MusicGenres() {
  return (
    <section className="py-20 bg -black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Music Genres
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 leading-relaxed mb-10 max-w-3xl text-xl"
        >
          Music is the heartbeat of every unforgettable performance, and DJ
          Vicky Hussain brings a diverse soundscape that keeps the dance floor
          alive. With years of experience performing across clubs, festivals,
          private events, and international venues, he blends different genres
          seamlessly to create a unique musical journey for every audience. His
          style is defined by powerful transitions, energetic drops, and the
          ability to read the crowd in real time. From high-energy commercial
          hits and Bollywood anthems to underground house grooves and deep
          electronic sounds, every set is carefully crafted to match the mood of
          the moment. Whether it's a club night, festival stage, or exclusive
          party, DJ Vicky Hussain delivers music that connects people through
          rhythm, energy, and emotion. His versatility allows him to explore
          multiple genres while maintaining a signature sound that keeps
          audiences engaged from the first beat to the last track.
        </motion.p>

        {/* Genre List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {genres.map((genre, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500 
              p-4 rounded-xl text-center transition cursor-pointer"
            >
              {genre}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
