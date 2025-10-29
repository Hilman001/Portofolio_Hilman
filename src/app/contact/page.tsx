"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16 text-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.85), rgba(147,51,234,0.85)), url(/bgblue.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay efek lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/10 to-transparent animate-pulse" />

      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <motion.img
            src="/pasfoto.jpg"
            alt="Foto Profil"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
          />
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mt-4 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hubungi Saya 📞
          </motion.h2>
          <motion.p
            className="text-gray-200 mt-3 max-w-2xl text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Gunakan informasi di bawah ini untuk menghubungi saya, atau kirim
            pesan melalui media sosial yang tertera di halaman utama.
          </motion.p>
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 mt-10 text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "🏫 Tentang Saya",
              content1: "Full Stack Web Developer",
              content2: "Purwadhika Technology School",
            },
            {
              title: "📱 Telepon",
              content1: "+62 852 1335 7491",
            },
            {
              title: "📍 Lokasi",
              content1: "Kec. Lengkong, Kota Bandung",
              content2: "Jawa Barat",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:scale-105 transition-transform shadow-md border border-white/20"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(147,51,234,0.4)",
              }}
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.content1}</p>
              {item.content2 && (
                <p className="text-gray-300 text-sm">{item.content2}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
