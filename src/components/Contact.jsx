import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  MessageCircleMore,
  Youtube,
} from "lucide-react";
// import { user } from "../data/about.js";

export const Contact = () => {
  // console.log(user);
  const infoItems = [
    // {
    //   icon: <MapPin size={14} className="w-6 h-6  text-indigo-500" />,
    //   text: "123 DJ Street, Music City, USA",
    // },
    {
      icon: (
        <Phone size={14} className="w-6 h-6 md:w-8 md:h-8  text-indigo-500" />
      ),
      text: "+1 234 567 890",
    },
    {
      icon: (
        <MessageCircleMore
          size={14}
          className="w-6 h-6 md:w-8 md:h-8  text-indigo-500"
        />
      ),
      text: "+1 234 567 890",
    },
    {
      icon: (
        <Mail size={14} className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
      ),
      text: "contact@djnexora.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
      href: "#",
      username: "username",
    },
    {
      icon: <Facebook className="w-6 h-6 md:w-8 md:h-8" />,
      href: "#",
      username: "username",
    },
    {
      icon: <Twitter className="w-6 h-6 md:w-8 md:h-8" />,
      href: "#",
      username: "username",
    },
    {
      icon: <Youtube className="w-6 h-6 md:w-8 md:h-8" />,
      href: "#",
      username: "username",
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
        Contact DJ Nexora
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between gap-12"
      >
        {/* Info Items */}
        <div className="flex flex-col gap-8">
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
        <div className="flex md:flex-col items-center gap-6 justify-center md:justify-start mt-6 md:mt-0">
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
                className="text-xl "
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
