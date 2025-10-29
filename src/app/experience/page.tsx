"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
 const experiences = [
  {
    title: "Bootcamp Full-Stack Web Developer – Purwadhika Digital Technology School",
    duration: "Januari 2025 – Juni 2025",
    responsibilities: [
      "Merancang, menganalisis, dan mengembangkan website pemesanan tiket.",
      "Membangun dan mengimplementasikan sistem manajemen tiket secara efisien.",
      "Berpartisipasi aktif dalam tim untuk mengembangkan fitur-fitur baru berbasis kebutuhan pengguna.",
      "Merancang, menganalisis, dan mengembangkan website e-commerce dengan antarmuka interaktif.",
      "Menggunakan teknologi modern seperti React, Next.js, Tailwind CSS, Express, dan Prisma dalam pengembangan proyek.",
    ],
  },
];


  return (
    <div
      className="min-h-screen flex flex-col justify-center px-6 py-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(147,51,234,0.8)), url(/bgblue.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow-md flex justify-center items-center gap-3">
          <Briefcase className="text-yellow-300" size={30} />
          Pengalaman
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 border-l-8 border-indigo-500 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-snug">
                  {exp.title}
                </h3>
                <span className="text-sm text-indigo-700 font-medium mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
