"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  return (
    <>
      <nav className="bg-white shadow-[0_4px_4px_rgba(0,0,0,0.08)] sticky w-full top-0 left-0 z-50">

        {/* Topbar */}
        <div className="w-full bg-gray-900 text-white text-xs sm:text-sm py-2 px-2 md:px-25 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-3 sm:gap-5">
            <a href="tel:8886886822" className="hover:text-gray-300 transition flex items-center gap-1 sm:gap-2">
              <Image src="/assets/images/svg/phone.svg" className="w-[18px] h-[18px] max-[375px]:w-[14px] max-[375px]:h-[14px]" width={18} height={18} alt="phone" />
              Tel: 888 688 6822
            </a>
            <a href="mailto:contact@bkanconnect.com" className="hover:text-gray-300 transition flex items-center gap-1 sm:gap-2">
              <Image
                src="/assets/images/svg/email.svg"
                width={18}
                height={18}
                alt="email"
                className="w-[18px] h-[18px] max-[375px]:w-[14px] max-[375px]:h-[14px]"
              />

              contact@bkanconnect.com
            </a>
          </div>

          <div className="hidden md:flex gap-6">
            <Image src="/assets/images/svg/logo-twitter.svg" width={18} height={18} alt="twitter" />
            <Image src="/assets/images/svg/logo-facebook.svg" width={18} height={18} alt="fb" />
            <Image src="/assets/images/svg/logo-instagram.svg" width={18} height={18} alt="ig" />
            <Image src="/assets/images/svg/logo-linkedin.svg" width={18} height={18} alt="in" />
          </div>
        </div>

        {/* Navbar */}
        <div className="max-w mx-auto px-5 md:px-17 py-2">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/">
              <Image src="/assets/images/svg/logo.svg" width={65} height={60} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
              {[{ name: "Home", path: "/" }, { name: "Your Post", path: "/post" }, { name: "About Us", path: "/about" }].map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-full border transition
                  ${pathname === item.path
                      ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                      : "bg-white text-[var(--textDark)] border-[var(--border)] hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Property Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border transition
                  ${pathname === "/dashboard"
                      ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                      : "bg-white text-[var(--textDark)] border-[var(--border)] hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300"
                    }`}
                >
                  Property
                  <Image
                    src="/assets/images/svg/down-arrow.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className={`transition ${isOpen ? "rotate-180" : ""} ${pathname === "/dashboard" ? "invert brightness-0" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-20 overflow-hidden">
                    {["Flat", "Apartment", "Hostel", "Office", "Other"].map((item, i) => (
                      <Link
                        key={i}
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-[var(--textDark)] text-sm font-medium transition-all hover:bg-[#ededff] hover:text-[var(--primary)]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center bg-white border border-[var(--border)] rounded-full px-4 py-2 shadow-sm hover:border-[#0033a4]">
                <Image src="/assets/images/svg/search.svg" width={18} height={18} alt="search" className="opacity-70" />
                <input type="text" placeholder="Search anything..." className="ml-3 outline-none text-sm text-gray-700 bg-transparent w-48" />
              </div>
              <button className="bg-[#D4D5FF] text-[#1B1C57] px-4 py-[9px] rounded-full text-sm font-semibold transition">
                Sign Up!
              </button>
            </div>

            {/* MOBILE TOGGLE + MENU */}
            <div className="lg:hidden relative">

              {/* Hamburger Button */}
              <div
                className={`nav-toggle ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Mobile Menu */}
              {menuOpen && (
                <div className="
                nav-menu absolute top-10 right-0 w-[220px]
                bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                p-4 space-y-2
              ">
                  <Link href="/" className="block text-[var(--textDark)] font-semibold">Home</Link>
                  <Link href="/about" className="block text-[var(--textDark)] font-semibold">About</Link>
                  <Link href="/services" className="block text-[var(--textDark)] font-semibold">Services</Link>
                  <Link href="/contact" className="block text-[var(--textDark)] font-semibold">Contact</Link>

                  <button className="bg-[#D4D5FF] text-[#1B1C57] px-6 py-[9px] rounded-full text-sm font-semibold transition">
                    Sign Up!
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>

    </>
  );
}
