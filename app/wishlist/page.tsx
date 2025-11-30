"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PropertyCards from "@/components/propertyCards";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Wishlist() {
    const [sortBy, setSortBy] = useState("Popularity");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sortOptions = [
        "Popularity",
        "Price: Low to High",
        "Price: High to Low",
        "Newest",
        "Rating"
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <Navbar />

            {/* Hero Section with Background Image */}
            <div className="relative w-full h-[150px] sm:h-[200px] md:h-[155px] overflow-hidden">
                <Image
                    src="/assets/images/png/slider_img.png"
                    alt="Wishlist Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-white pt-[30px] pb-5 px-5 md:px-10 flex flex-col gap-[15px]">

                {/* Header with Title and Sort */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    {/* Page Title */}
                    <h1 className="text-2xl font-bold text-[var(--textDark)]">
                        Wishlist
                    </h1>

                    {/* Sort By Custom Dropdown */}
                    <div className="flex items-center gap-3 sm:gap-5">
                        <span className="text-[15px] font-bold text-[#1C2B38] whitespace-nowrap">Sort by</span>

                        <div ref={dropdownRef} className="relative flex-1 sm:flex-none sm:w-[310px]">
                            {/* Dropdown Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full flex items-center justify-between pl-5 pr-4 py-2.5 bg-[#F4F4F5] rounded-[3px] text-[14px] font-semibold text-[#495560] hover:bg-[#EAEAEB] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            >
                                <span>{sortBy}</span>
                                <svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <path
                                        d="M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z"
                                        fill="#495560"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden z-50 border border-gray-100">
                                    {sortOptions.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setSortBy(option);
                                                setIsOpen(false);
                                            }}
                                            className={`w-full text-left px-5 py-3 text-[14px] font-medium transition-colors duration-150 cursor-pointer ${sortBy === option
                                                ? 'bg-[#E8E8FF] text-[var(--accent)] font-semibold'
                                                : 'text-[#495560] hover:bg-[#F4F4F5]'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Property Cards */}
                <PropertyCards />
            </div>

            <Footer />
        </>
    );
}
