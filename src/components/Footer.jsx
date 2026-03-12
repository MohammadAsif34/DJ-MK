// src/components/Footer.jsx
import React from "react";

import { Contact } from "./Contact";

export default function Footer() {
  return (
    <>
      <footer>
        <Contact />
        <section className="bg-black py-10 border-t border-neutral-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} All rights reserved{" "}
            <span className="inline-block px-2 text-gray-600">|</span> DJ Vicky
            Hussain
          </p>
        </section>
      </footer>
    </>
  );
}
