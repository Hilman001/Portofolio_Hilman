"use client";

import { useState, useEffect } from "react";
import Contact from "@/app/contact/page";
import Profile from "@/app/about/page";
import Portofolio from "@/app/portofolio/page";
import { Menu, X } from "lucide-react";
import Experience from "@/app/experience/page";
import Skill from "@/app/skill/page";
import Testimoni from "@/app/testimoni/page";
import Home from "@/app/hero/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Ubah warna link aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop)
          current = section.getAttribute("id") || "";
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Utama */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-[70px]">
          {/* Nama dan Foto */}
          <div className="flex items-center gap-3">
            <img
              src="/pasfoto.jpg"
              alt="Hilman Hanifan"
              className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
            />
            <h1 className="font-bold text-lg md:text-xl text-gray-800">
              Hilman Hanifan
            </h1>
          </div>

          {/* Tombol Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigasi Desktop */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <NavItem href="#hero" active={activeSection}>
              Home
            </NavItem>
            <NavItem href="#about" active={activeSection}>
              About
            </NavItem>
            <NavItem href="#skill" active={activeSection}>
              Skill
            </NavItem>
            <NavItem href="#portofolio" active={activeSection}>
              Portofolio
            </NavItem>
            <NavItem href="#experience" active={activeSection}>
              Experience
            </NavItem>
            <NavItem href="#testimoni" active={activeSection}>
              Testimoni
            </NavItem>
            <NavItem href="#contact" active={activeSection}>
              Contact
            </NavItem>
          </ul>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
              <NavItem
                href="#hero"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavItem>
              <NavItem
                href="#about"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavItem>
              <NavItem
                href="#skill"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                Skill
              </NavItem>
              <NavItem
                href="#portofolio"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                Portofolio
              </NavItem>
              <NavItem
                href="#experience"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                Experience
              </NavItem>
              <NavItem
                href="#testimoni"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                Testimoni
              </NavItem>
              <NavItem
                href="#contact"
                active={activeSection}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavItem>
            </ul>
          </div>
        )}
      </nav>

      {/* Konten Halaman */}
      <main className="pt-[70px] space-y-20">
        <Section id="hero">
          <Home />
        </Section>
        <Section id="about">
          <Profile />
        </Section>
        <Section id="skill">
          <Skill />
        </Section>
        <Section id="portofolio">
          <Portofolio />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="testimoni">
          <Testimoni />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </>
  );
}

/* ===============================
   🔹 Komponen Navigasi Link
================================ */
type NavItemProps = {
  href: string;
  active: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavItem({ href, active, children, onClick }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = active === href.replace("#", "");

  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          handleClick(e);
          if (onClick) onClick();
        }}
        className={`transition-all duration-200 hover:text-blue-600 ${
          isActive ? "text-blue-600 font-semibold" : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
}

/* ===============================
   🔹 Komponen Section Halaman
================================ */
type SectionProps = {
  id: string;
  children: React.ReactNode;
};

function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center bg-gray-50"
    >
      {children}
    </section>
  );
}
