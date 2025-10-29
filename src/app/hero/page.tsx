"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaBook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  const socialLinks = [
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/hilman-hanifan-7a01a1367/",
      color: "#0077b5",
    },
    {
      Icon: FaTwitter,
      link: "https://twitter.com/yourprofile",
      color: "#1DA1F2",
    },
    {
      Icon: FaYoutube,
      link: "https://www.youtube.com/c/yourchannel",
      color: "#FF0000",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/Hilman001",
      color: "#333",
    },
    { Icon: FaBook, link: "https://yourwebsite.com", color: "#8B5CF6" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(147,51,234,0.8)), url(/bgblue.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay efek cahaya */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-200/10 to-transparent animate-pulse" />

      {/* Tombol toggle untuk mobile */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden fixed left-4 top-16 z-50 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md hover:scale-110 transition"
      >
        {showSidebar ? (
          <FaTimes className="text-purple-600 text-xl" />
        ) : (
          <FaBars className="text-purple-600 text-xl" />
        )}
      </button>

      {/* Konten utama */}
      <div className="text-center z-20 mt-20 sm:mt-0">
        <img
          src="/pasfoto.jpg"
          alt="foto"
          className="w-36 sm:w-44 md:w-52 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500 mx-auto block"
        />
        <h1 className="mt-6 font-bold text-white text-2xl sm:text-3xl md:text-4xl">
          <TypeAnimation
            sequence={[
              "Hello 🤚 I am Hilman Hanifan",
              1500,
              "Full Stack Web Developer 💻",
              1500,
              "Problem Solver ⚡",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="mt-4 text-gray-100 text-sm sm:text-base max-w-xl mx-auto">
          Passionate about building scalable, user-friendly web applications. I
          love turning ideas into reality through clean code and creative
          design.
        </p>

        <button className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition duration-300">
          🚀 View My Projects
        </button>
      </div>

      {/* Sidebar desktop */}
      <div className="hidden md:flex fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 flex-col space-y-4 z-30">
        {socialLinks.map(({ Icon, link, color }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div
              className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-md hover:scale-110 transition-transform duration-300"
              style={{ color }}
            >
              <Icon className="text-xl sm:text-2xl" />
            </div>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-gray-700 text-xs sm:text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
              {link.replace("https://", "").split("/")[0]}
            </span>
          </a>
        ))}
      </div>

      {/* Sidebar mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-52 bg-white/90 backdrop-blur-md shadow-xl flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 z-40 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {socialLinks.map(({ Icon, link, color }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:scale-110 transition"
            style={{ color }}
          >
            <Icon className="text-2xl" />
          </a>
        ))}
      </div>

      {/* Tombol chat WA */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/6285213357491"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
        >
          <span className="text-gray-700 font-medium">Chat with me 👋</span>
          <div className="bg-purple-600 text-white p-2 rounded-full animate-bounce">
            💬
          </div>
        </a>
      </div>
    </div>
  );
}
