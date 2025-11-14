// src/components/Footer.jsx
import React from "react";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Contact } from "./Contact";

export default function Footer() {
  return (
    <>
      <footer>
        <Contact />
        <section className="bg-black py-10 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DJ Nexora. All rights reserved.
            </p>

            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
