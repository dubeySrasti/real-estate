"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Map() {
    return (
        <>
            <Navbar />

            {/* Main Content */}
            <div className="min-h-screen bg-white px-3 min-[375px]:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-[30px] pb-0 flex flex-col gap-5">

                {/* Search Bar */}
                <div className="flex items-center bg-[#F2F2F3] border border-[#E3E3E7] rounded-full px-3 min-[375px]:px-4 sm:px-5  min-[375px]:py-3 sm:py-[13px] hover:border-[var(--accent)] focus-within:border-[var(--accent)] focus-within:ring-2 focus-within:ring-[var(--accent)]/20 transition-all duration-200 w-full">
                    <Image src="/assets/images/svg/search.svg" width={18} height={18} alt="search" className="opacity-70 w-4 h-4 min-[375px]:w-[18px] min-[375px]:h-[18px]" />
                    <input
                        type="text"
                        placeholder="Search address, city, location"
                        className="ml-2 min-[375px]:ml-3 outline-none text-sm font-normal text-gray-700 bg-transparent flex-1 placeholder-gray-400 focus:placeholder-gray-300"
                    />
                </div>

                {/* Map Container */}
                <div className="flex-1">
                    <div className="w-full h-[calc(100vh-200px)] bg-gray-100 overflow-hidden">
                        {/* Actual Map with Location */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3f3f3%3A0x5045675218ce840!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}