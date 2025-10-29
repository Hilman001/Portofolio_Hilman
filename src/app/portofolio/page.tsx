"use client";
import { motion } from "framer-motion";


export default function Portfolio() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(147,51,234,0.8)), url(/bgblue.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="container mx-auto p-4 sm:p-6 z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-white drop-shadow-md">
          Portofolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Proyek 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="p-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
              <img
                src="/rahmifarma.png"
                alt="Company"
                className="w-full h-24 sm:h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left text-gray-900">
                Website Manajemen Apotek
              </h2>
              <p><strong>Teknologi:</strong> React, Node.js</p>
              <p><strong>Situasi:</strong> Apotek Rahmi Farma ingin meningkatkan sistem manajemen inventaris obat.</p>
              <p><strong>Hasil:</strong> Memudahkan pencatatan dan melihat update stock obat</p>
              <a
                href="https://rahmifarmaapotek.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-indigo-600 hover:underline text-center"
              >
                Lihat Proyek
              </a>
            </div>
          </motion.div>

          {/* Proyek 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="p-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
              <img
                src="/Hoopass.png"
                alt="Portfolio Website"
                className="w-full h-24 sm:h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left text-gray-900">
                Website Pemesanan Ticket HoopPass
              </h2>
              <p><strong>Teknologi:</strong> React, Next.js, Tailwind CSS, Express Prisma</p>
              <p><strong>Situasi:</strong> Jual beli tiket Pertandingan Basket.</p>
              <p><strong>Hasil:</strong> Website responsif & menarik.</p>
              <a
                href="https://hooppass.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-indigo-600 hover:underline text-center"
              >
                Lihat Proyek
              </a>
            </div>
          </motion.div>

          {/* Proyek 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="p-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
              <img
                src="/blog.png"
                alt="Blog Website"
                className="w-full h-24 sm:h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left text-gray-900">
                Website Blogs
              </h2>
              <p><strong>Teknologi:</strong> React, Next.js, Tailwind CSS, Express Prisma</p>
              <p><strong>Situasi:</strong> Platform artikel dan berita personal.</p>
              <p><strong>Hasil:</strong> Tampilan modern dengan sistem CMS ringan.</p>
              <a
                href="https://hilmanblog.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-indigo-600 hover:underline text-center"
              >
                Lihat Proyek
              </a>
            </div>
          </motion.div>

          {/* Proyek 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="p-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
              <img
                src="/shop.co.png"
                alt="E-Commerce Website"
                className="w-full h-24 sm:h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left text-gray-900">
                Website E-Commerce SHOP.CO
              </h2>
              <p><strong>Teknologi:</strong> React, Next.js, Tailwind CSS, Express Prisma</p>
              <p><strong>Situasi:</strong> Membangun platform e-commerce untuk penjualan produk.</p>
              <p><strong>Hasil:</strong> Meningkatkan penjualan dan visibilitas produk.</p>
              <a
                href="https://shop-co-frontend-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-indigo-600 hover:underline text-center"
              >
                Lihat Proyek
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
