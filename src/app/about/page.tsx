"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 py-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.85), rgba(147,51,234,0.85)), url(/bgblue.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Efek gradasi lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/10 to-transparent animate-pulse" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl">
        {/* Gambar Profil dengan animasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/pasfoto.jpg"
            alt="Foto Hilman Hanifan"
            width={320}
            height={320}
            className="rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Informasi Profil */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center text-center md:text-left max-w-2xl text-white"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            Hilman Hanifan
          </h1>
          <p className="text-lg font-semibold text-gray-100 mt-2">
            Full Stack Web Developer
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 text-white/90">
            Biografi Singkat
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-100/90">
            Saya adalah lulusan <strong>S1 Teknik Informatika Universitas Putra Indonesia YPTK Padang</strong>.
            Saya memiliki kemampuan dalam mengelola dan menganalisis data, serta pengalaman
            dalam pengembangan perangkat lunak berbasis web. Saya selalu bersemangat untuk
            mempelajari teknologi baru, beradaptasi dengan cepat, serta berkomitmen untuk
            memberikan hasil kerja yang optimal dengan ketelitian dan tanggung jawab tinggi.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 text-white/90">
            Keterampilan Utama
          </h2>
          <ul className="mt-3 text-sm sm:text-base text-gray-100/90 space-y-1">
            <li>✅ Microsoft Office (Word, Excel, PowerPoint)</li>
            <li>✅ Pengelolaan dan Analisis Data</li>
            <li>✅ Pengembangan Web: HTML, CSS, JavaScript</li>
            <li>✅ Database Management: MySQL, PostgreSQL, Prisma ORM</li>
            <li>✅ Backend: ExpressJS, REST API Development</li>
            <li>✅ Frontend: React.js, Next.js, Tailwind CSS</li>
            <li>✅ Cloud & Deployment: Cloudinary, Vercel, Render</li>
            <li>✅ Problem Solving dan Team Collaboration</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 text-white/90">
            Nilai Utama
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-100/90">
            Ketepatan waktu, tanggung jawab, perhatian terhadap detail,
            dan komunikasi yang jelas.
          </p>

          {/* Sosial Media */}
          <div className="flex justify-center md:justify-start items-center gap-6 mt-8">
            <a
              href="https://hilmanhanifan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-transform hover:scale-110"
            >
              <FaGlobe size={28} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-200 transition-transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/hilman-hanifan-7a01a1367/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
