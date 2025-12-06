"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NotificationDropdown from "./notificationDropdown";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mobilePropertyOpen, setMobilePropertyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  return (
    <>
      <nav className="bg-white shadow-[0_4px_4px_rgba(0,0,0,0.08)] sticky w-full top-0 left-0 z-50">

        {/* Topbar */}
        <div className="w-full bg-gray-900 text-white text-xs sm:text-sm py-2 sm:px-6 md:px-25 flex flex-col md:flex-row justify-between items-center">
          <div className="flex max-[400px]:gap-[15px] gap-8 md:gap-5">
            <a href="tel:8886886822" className="hover:text-gray-400 transition flex items-center gap-1 sm:gap-2">
              <Image src="/assets/images/svg/phone.svg" className="w-[18px] h-[18px] max-[375px]:w-[14px] max-[375px]:h-[14px]" width={18} height={18} alt="phone" />
              Tel: 888 688 6822
            </a>
            <a href="mailto:contact@bkanconnect.com" className="hover:text-gray-400 transition flex items-center gap-1 sm:gap-2">
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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
              <Image src="/assets/images/svg/logo-twitter.svg" width={18} height={18} alt="twitter" className="transition-all duration-300 hover:brightness-0 hover:invert" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
              <Image src="/assets/images/svg/logo-facebook.svg" width={18} height={18} alt="fb" className="transition-all duration-300 hover:brightness-0 hover:invert" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
              <Image src="/assets/images/svg/logo-instagram.svg" width={18} height={18} alt="ig" className="transition-all duration-300 hover:brightness-0 hover:invert" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
              <Image src="/assets/images/svg/logo-linkedin.svg" width={18} height={18} alt="in" className="transition-all duration-300 hover:brightness-0 hover:invert" />
            </a>
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
            <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-1 justify-center">
              {[{ name: "Home", path: "/" }, { name: "Your Post", path: "/yourPost" }, { name: "About Us", path: "/about" }].map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className={`px-3 xl:px-4 py-2 text-sm font-semibold rounded-full border transition whitespace-nowrap
                  ${pathname === item.path
                      ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                      : "bg-white text-[var(--textDark)] border-[var(--border)] hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Property Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`flex items-center gap-2 px-3 xl:px-4 py-2 text-sm font-semibold rounded-full border transition whitespace-nowrap cursor-pointer
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
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <div className="flex items-center bg-white border border-[var(--border)] rounded-full px-3 xl:px-4 py-2 shadow-sm hover:border-[var(--accent)] focus-within:border-[var(--accent)] focus-within:ring-2 focus-within:ring-[var(--accent)]/20 transition-all duration-200">
                <Image src="/assets/images/svg/search.svg" width={18} height={18} alt="search" className="opacity-70 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 outline-none text-sm text-gray-700 bg-transparent w-24 xl:w-40 placeholder-gray-400 focus:placeholder-gray-300"
                />
              </div>
              <NotificationDropdown />
              <Link href="/login">
                <button className="bg-[#D4D5FF] text-[#1B1C57] px-3 xl:px-4 py-[9px] rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#170085] hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer whitespace-nowrap">
                  Sign Up!
                </button>
              </Link>
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
                <div className="nav-menu absolute top-10 right-0 w-[240px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-4 space-y-3 z-30">

                  <Link href="/" className="block text-[var(--textDark)] font-semibold">
                    Home
                  </Link>

                  <Link href="/yourPost" className="block text-[var(--textDark)] font-semibold">
                    Your Post
                  </Link>

                  <Link href="/about" className="block text-[var(--textDark)] font-semibold">
                    About Us
                  </Link>

                  {/* MOBILE PROPERTY DROPDOWN */}
                  <div>
                    <button
                      onClick={() => setMobilePropertyOpen(!mobilePropertyOpen)}
                      className="flex justify-between items-center w-full text-[var(--textDark)] font-semibold cursor-pointer"
                    >
                      Property
                      <Image
                        src="/assets/images/svg/down-arrow.svg"
                        width={16}
                        height={16}
                        alt="arrow"
                        className={`transition ${mobilePropertyOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobilePropertyOpen && (
                      <div className="mt-2 ml-3 space-y-2">
                        {["Flat", "Apartment", "Hostel", "Office", "Other"].map((item, i) => (
                          <Link
                            key={i}
                            href="/dashboard"
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm text-gray-600 font-medium hover:text-[var(--primary)]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href="/login">
                    <button className="bg-[#D4D5FF] text-[#1B1C57] w-full py-[10px] rounded-full text-sm font-semibold mt-2 hover:bg-[#170085] hover:text-white transition">
                      Sign Up!
                    </button>
                  </Link>

                </div>
              )}
            </div>


          </div>
        </div>
      </nav>

    </>
  );
}
