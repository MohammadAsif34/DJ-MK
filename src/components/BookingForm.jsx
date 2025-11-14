// src/components/BookingForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MapPin, Calendar } from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate send
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="bg-neutral-950/50 backdrop-blur-2xl shadow-md shadow-indigo-500/20 rounded-2xl py-20 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-white mb-20"
      >
        Book DJ Nexora
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-neutral-900/50 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-lg shadow-indigo-500/10 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Name"
            icon={<User size={18} />}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            icon={<Mail size={18} />}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Location"
            icon={<MapPin size={18} />}
            name="location"
            value={form.location}
            onChange={handleChange}
          />
          <Input
            label="Event Date"
            icon={<Calendar size={18} />}
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Message*</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Describe your event, venue, or collaboration idea..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl"
        >
          <Send size={18} />
          {submitted ? "Sent!" : "Send Request"}
        </motion.button>
      </motion.form>
    </section>
  );
}

function Input({ label, icon, ...props }) {
  return (
    <div className="relative">
      <label className="block text-gray-300 text-sm mb-2">{label}</label>
      <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-lg px-3">
        {icon && <span className="text-gray-400">{icon}</span>}
        <input
          {...props}
          className="w-full bg-transparent py-2 text-gray-200 focus:outline-none"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    </div>
  );
}
