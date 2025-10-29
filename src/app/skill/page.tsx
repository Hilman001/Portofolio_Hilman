"use client";

import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiPostgresql, SiPrisma } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.85), rgba(147,51,234,0.85)), url(/bgblue.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay efek halus */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/10 to-transparent animate-pulse" />

      <div className="relative z-10 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Keahlian Saya ⚙️
        </h1>
        <p className="mt-3 text-gray-200 text-lg">
          Teknologi dan alat yang saya kuasai sebagai Full Stack Developer
        </p>
      </div>

      {/* Marquee animasi ikon skill */}
      <Marquee className="mb-10 text-4xl text-gray-100" speed={60} gradient={false}>
        <FaHtml5 className="mx-5 text-orange-500" />
        <FaCss3Alt className="mx-5 text-blue-500" />
        <FaJs className="mx-5 text-yellow-400" />
        <FaReact className="mx-5 text-cyan-400" />
        <SiNextdotjs className="mx-5 text-white" />
        <FaNodeJs className="mx-5 text-green-500" />
        <SiExpress className="mx-5 text-gray-300" />
        <SiPostgresql className="mx-5 text-sky-400" />
        <SiPrisma className="mx-5 text-indigo-400" />
        <FaGitAlt className="mx-5 text-orange-500" />
        <FaDatabase className="mx-5 text-gray-200" />
      </Marquee>

      {/* Kartu Skill */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 mt-6">
        {/* Frontend Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center text-white hover:shadow-purple-400/40 transition"
        >
          <h2 className="text-2xl font-bold mb-3">Front-End Development</h2>
          <p className="text-gray-200 text-base">
            Pengalaman dalam membangun antarmuka interaktif dan responsif menggunakan:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-gray-100">
            <li>✨ HTML5, CSS3, JavaScript (ES6+)</li>
            <li>⚛️ React.js & Next.js</li>
            <li>🎨 Tailwind CSS</li>
            <li>📱 Desain Responsif</li>
          </ul>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center text-white hover:shadow-purple-400/40 transition"
        >
          <h2 className="text-2xl font-bold mb-3">Back-End Development</h2>
          <p className="text-gray-200 text-base">
            Membangun sistem server yang efisien dan aman menggunakan:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-gray-100">
            <li>🟢 Node.js & Express.js</li>
            <li>🗃️ PostgreSQL, MySQL</li>
            <li>🧩 Prisma ORM</li>
            <li>☁️ REST API, JWT Authentication</li>
          </ul>
        </motion.div>

        {/* DevOps & Tools */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center text-white hover:shadow-purple-400/40 transition"
        >
          <h2 className="text-2xl font-bold mb-3">Tools & DevOps</h2>
          <p className="text-gray-200 text-base">
            Terbiasa menggunakan alat bantu pengembangan dan deployment:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-gray-100">
            <li>🐳 Git, GitHub</li>
            <li>💻 VS Code, Postman</li>
            <li>☁️ Cloudinary, Vercel, Render</li>
            <li>🔄 CI/CD Workflow</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
