import { motion } from "framer-motion";

const gigs = [
  { venue: "Ozora", city: "Kolkata, India" },
  { venue: "Bistro Y", city: "Kolkata, India" },
  { venue: "Makati", city: "Kolkata, India" },
  { venue: "Fusion Lounge", city: "Kolkata, India" },
  { venue: "Brewmaster", city: "Kolkata, India" },
  { venue: "Spin 360 Myx", city: "Kolkata, India" },
  { venue: "One Bottle Down", city: "Kolkata, India" },
  { venue: "Pearl Tree Hotel", city: "Kolkata, India" },
  { venue: "Uncle Chilli’s", city: "Malaysia" },
  { venue: "Hotel Saraton", city: "Thailand" },
  { venue: "Hotel Hilton", city: "Cambodia" },
  { venue: "Hotel Hilton", city: "Singapore" },
];

export default function ClubGigs() {
  return (
    <section className="py-20 b g-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Gigs & Tours
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 leading-relaxed mb-10 max-w-3xl text-xl"
        >
          Over the years, DJ Vicky Hussain has built a strong presence in the
          nightlife and live music scene through electrifying performances and
          unforgettable club nights. From high-energy dance floors in major
          cities to exclusive private events and international tours, his gigs
          are known for creating powerful musical experiences that keep
          audiences engaged from start to finish. With nearly two decades of
          experience behind the console, DJ Vicky Hussain has performed at
          numerous renowned clubs, hotels, and music venues across India and
          internationally. His performances combine powerful mixing techniques
          with a deep understanding of crowd energy, allowing him to adapt his
          sets to different audiences and atmospheres. From iconic nightlife
          spots in Kolkata to international stages in Malaysia, Thailand,
          Cambodia, and Singapore, every performance reflects his passion for
          music and dedication to entertaining audiences. Each gig becomes a
          journey of rhythm, lights, and high-energy beats that transform
          ordinary nights into unforgettable memories.
        </motion.p>

        {/* Gigs List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {gigs.map((gig, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500
              p-4 rounded-xl transition cursor-pointer"
            >
              <p className="font-semibold">{gig.venue}</p>
              <p className="text-sm text-gray-400">{gig.city}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
