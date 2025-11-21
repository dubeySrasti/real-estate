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
  <div className="w-full bg-gray-900 text-white text-sm py-2 px-2 md:px-20 flex flex-col md:flex-row justify-between items-center">
    <div className="flex gap-5">
      <a href="tel:8886886822" className="hover:text-gray-300 transition flex items-center gap-2">
        <Image src="/assets/images/svg/phone.svg" width={18} height={18} alt="phone" />
        Tel: 888 688 6822
      </a>
      <a href="mailto:contact@bkanconnect.com" className="hover:text-gray-300 transition flex items-center gap-2">
        <Image src="/assets/images/svg/email.svg" width={18} height={18} alt="email" />
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
  <div className="max-w mx-auto px-5 md:px-20 py-2">
    <div className="flex justify-between items-center h-16">

      {/* Logo */}
      <Link href="/">
        <Image src="/assets/images/svg/logo.svg" width={65} height={60} alt="logo" />
      </Link>

      {/* Desktop Menu -> CHANGED md:flex → lg:flex */}
      <div className="hidden lg:flex items-center gap-4">

        {/* Default Menu Buttons */}
        {[
          { name: "Home", path: "/" },
          { name: "Your Post", path: "/post" },
          { name: "About Us", path: "/about" },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={`
              px-4 py-2 text-sm font-semibold rounded-full border transition
              ${
                pathname === item.path
                  ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                  : "bg-white text-[var(--textDark)] border-[var(--border)] hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300"
              }
            `}
          >
            {item.name}
          </Link>
        ))}

        {/* Property Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border transition
              ${
                pathname?.includes("/property")
                  ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                  : "bg-white text-[var(--textDark)] border-[var(--border)] hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300"
              }
            `}
          >
            Property
            <Image
              src="/assets/images/svg/down-arrow.svg"
              width={16}
              height={16}
              alt="arrow"
              className={`${isOpen ? "rotate-180" : ""} transition`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-lg ring-1 ring-gray-200 z-10">
              {["Buy", "Rent", "Commercial"].map((item, i) => (
                <Link
                  key={i}
                  href={`/property/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Right Icons + Buttons -> CHANGED md:flex → lg:flex */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex gap-4">
          <Image src="/assets/images/svg/search.svg" width={20} height={20} alt="search" />
          <Image src="/assets/images/svg/like.svg" width={20} height={20} alt="like" />
          <Image src="/assets/images/svg/notification.svg" width={20} height={20} alt="notification" />
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-[6px] flex items-center gap-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition">
            <Image src="/assets/images/svg/plus-icon.svg" width={20} height={20} alt="plus" />
            Create Post
          </button>

          <button className="bg-[#D4D5FF] text-[#1B1C57] px-4 py-[6px] rounded-full text-sm font-semibold transition">
            Sign Up!
          </button>
        </div>
      </div>

      {/* Mobile Menu Button -> CHANGED md:hidden → lg:hidden */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="lg:hidden bg-white px-4 pb-3 space-y-2 shadow-md">
      <Link href="/" className="block text-gray-700">Home</Link>
      <Link href="/about" className="block text-gray-700">About</Link>
      <Link href="/services" className="block text-gray-700">Services</Link>
      <Link href="/contact" className="block text-gray-700">Contact</Link>

      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </div>
  )}

</nav>

    </>
  );
}
