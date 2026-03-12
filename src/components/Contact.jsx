import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const infoItems = [
    {
      icon: (
        <Phone size={14} className="w-6 h-6 md:w-8 md:h-8  text-indigo-500" />
      ),
      text: "91 7003602094",
    },
    {
      icon: (
        <Phone size={14} className="w-6 h-6 md:w-8 md:h-8  text-indigo-500" />
      ),
      text: "+91 7278777038",
    },
    {
      icon: (
        <Mail size={14} className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
      ),
      text: "djvicky2006@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
      href: "https://www.instagram.com/djvickyhussain/",
      username: "@djvickyhussain",
    },
    {
      icon: <Facebook className="w-6 h-6 md:w-8 md:h-8" />,
      href: "https://www.facebook.com/DeejayVickyhussain/",
      username: "DeejayVickyhussain",
    },
    {
      icon: <Youtube className="w-6 h-6 md:w-8 md:h-8" />,
      href: "https://www.youtube.com/results?search_query=djvickyhussain",
      username: "@djvickyhussain",
    },
  ];

  return (
    <section className="b g-neutral-950 text-white py-20  md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-wide"
      >
        {/* <span className="text-indigo-500">M </span> 
         Vicky Hussain */}
        <Link to={"/"} className=" flex justify-center items-center">
          <img
            src="/logo1.png"
            alt="logo"
            className="w-50 h-10 object-center object-cover ml- [-40px] scale-150 hover:scale-170 transition-all duration-1000"
          />
        </Link>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between gap-12"
      >
        {/* Info Items */}
        <div className="flex flex-col max-md:items-center gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4"
            >
              {item.icon}
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col max-md:items-center gap-6 justify-center md:justify-start mt-6 md:mt-0">
          {socialLinks.map((link, index) => (
            <div className=" flex gap-6 items-center">
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2, color: "#6366F1" }}
                transition={{ duration: 0.3 }}
              >
                {link.icon}
              </motion.a>
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, color: "#6366F1" }}
                transition={{ duration: 0.3 }}
                className="text-xl underline text-indigo-500"
              >
                {link.username}
              </motion.a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
