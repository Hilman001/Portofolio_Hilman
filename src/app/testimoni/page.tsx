"use client";

export default function Testimoni() {
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
      {/* Overlay lembut seperti di Skill section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/10 to-transparent animate-pulse" />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Testimoni Klien 💬
        </h1>
        <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
          Belum ada testimoni saat ini, tetapi saya terus berusaha memberikan hasil terbaik di setiap proyek yang saya kerjakan.
        </p>

        {/* Placeholder box */}
        <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 max-w-lg mx-auto text-white">
          <p className="italic text-gray-300">
            “Testimoni akan segera hadir setelah proyek berikutnya selesai 🚀”
          </p>
        </div>
      </div>
    </div>
  );
}
