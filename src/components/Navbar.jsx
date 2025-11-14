// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", href: "#home" },
  { name: "Tracks", href: "#tracks" },
  // { name: "Mixes", href: "#mixes" },
  { name: "Gigs", href: "#gigs" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Booking", href: "#booking" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scroll ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* <a
          href="/"
          className="flex items-center gap-2 text-white text-xl font-bold"
        >
          <Music2 className="text-indigo-400" />
          NEXORA
        </a> */}

        {/* logo  */}
        <Link to={"/"}>
          <img
            src="/logo1.png"
            alt="logo"
            className="w-50 h-10 object-center object-cover ml-[-40px]"
          />
        </Link>
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 text-gray-200 mt-4">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
