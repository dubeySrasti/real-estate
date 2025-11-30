"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function YourPost() {
    // Post data array
    const posts = Array(8).fill({
        title: "705 Vinayak Tower",
        type: "Apartment",
        beds: "3 Beds, 2 Bath",
        available: "Available 03 Jun 2024",
        price: "$785",
        period: "/ month",
        image: "/assets/images/png/property_img1.png"
    });

    return (
        <>
            <Navbar />

            {/* Main Content */}
            <div className="min-h-screen bg-white pt-4 sm:pt-6 md:pt-8 lg:pt-[30px] pb-16 sm:pb-24 md:pb-32 lg:pb-[200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[30px]">

                {/* Page Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1A1E25]">
                    Your Posts
                </h1>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-5 lg:gap-6 xl:gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[10px] shadow-[0_0_20px_rgba(67,67,67,0.1)] hover:shadow-[0_0_30px_rgba(67,67,67,0.15)] transition-all duration-300 flex flex-col min-[400px]:flex-row p-3 sm:p-4 md:p-3 lg:p-4 xl:py-2 xl:pl-[11px] xl:pr-5 gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-[26px]"
                        >
                            {/* Image Section */}
                            <div className="relative w-full min-[400px]:w-[140px] sm:w-[160px] md:w-[150px] lg:w-[180px] xl:w-[220px] 2xl:w-[253px] h-[180px] min-[400px]:h-[140px] sm:h-[160px] md:h-[130px] lg:h-[140px] xl:h-[140px] 2xl:h-[153px] flex-shrink-0 rounded-[5px] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col w-full justify-between gap-2 md:gap-1.5 lg:gap-2">
                                <div className="flex flex-col gap-1 sm:gap-1.5">
                                    {/* Title and Edit Button */}
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-base sm:text-lg md:text-base lg:text-[18px] xl:text-[20px] font-bold text-[var(--textDark)] leading-tight">
                                            {post.title}
                                        </h3>
                                        <button className="text-[10px] font-semibold whitespace-nowrap hover:opacity-80 transition-opacity duration-300 flex items-center gap-[5px] flex-shrink-0">
                                            <div className="w-[14px] h-[14px] rounded-[3px] bg-[#E3EFFF] flex items-center justify-center p-[2px]">
                                                <Image
                                                    src="/assets/images/svg/edit.svg"
                                                    width={10}
                                                    height={10}
                                                    alt="edit"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <span className="bg-gradient-to-r from-[#170085] to-[#6246EA] bg-clip-text text-transparent text-[10px] font-semibold">
                                                Edit Post
                                            </span>
                                        </button>
                                    </div>

                                    <div className="flex flex-col gap-0.5">
                                        {/* Property Type */}
                                        <p className="text-[var(--black)] text-xs sm:text-sm md:text-[13px] lg:text-[14px] font-semibold">
                                            {post.type}
                                        </p>

                                        {/* Beds & Bath */}
                                        <p className="text-[var(--textGray)] text-xs sm:text-[13px] font-semibold">
                                            {post.beds}
                                        </p>

                                        {/* Available Date */}
                                        <p className="text-xs sm:text-sm md:text-[13px] lg:text-[14px] font-bold">
                                            <span className="text-[#00B31D]">Available</span>
                                            <span className="text-[var(--textGray)] font-semibold"> 03 Jun 2024</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Price */}
                                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[24px]">
                                    <span className="text-[var(--textDark)] font-bold">{post.price}</span>
                                    <span className="text-[var(--textGray)] text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] font-bold"> {post.period}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
