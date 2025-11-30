"use client";
import Image from "next/image";

export default function HouseTourSection() {
    return (
        <section className="container mx-auto  pb-15 pt-0 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* LEFT SIDE */}
                <div className="flex flex-col gap-16 py-7">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-6 sm:w-8 h-[2px] bg-[#F59E0B] rounded-full"></div>
                                <h2 className="text-xs sm:text-sm font-medium text-[#F59E0B] mb-0">
                                    Our Recommendation
                                </h2>
                            </div>
                            <h3 className="text-[#170085] mb-0 text-2xl sm:text-[32px] font-semibold leading-tight">
                                Let’s tour and see our house!
                            </h3>
                        </div>

                        <p className="text-[#6B7280] text-base max-w-sm">
                            Houses recommended by our partners that have been curated to
                            become the home of your dreams!
                        </p>
                        <h3 className="mb-0 text-base font-semibold text-[#170085]">
                            House Detail
                        </h3>
                        {/* House Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 text-[#3C4563] font-medium text-sm sm:text-base">
                            <div className="flex gap-2 sm:gap-4 items-center">
                                <Image
                                    src="/assets/images/svg/bedroom.svg"
                                    width={24}
                                    height={24}
                                    alt="bedrooms"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <span>4 Bedrooms</span>
                            </div>
                            <div className="flex gap-2 sm:gap-4 items-center">
                                <Image
                                    src="/assets/images/svg/bathrooms.svg"
                                    width={24}
                                    height={24}
                                    alt="bathrooms"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <span>2 Bathrooms</span>
                            </div>
                            <div className="flex gap-2 sm:gap-4 items-center">
                                <Image
                                    src="/assets/images/svg/carport.svg"
                                    width={24}
                                    height={24}
                                    alt="car"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <span>1 Carport</span>
                            </div>
                            <div className="flex gap-2 sm:gap-4 items-center">
                                <Image
                                    src="/assets/images/svg/floors.svg"
                                    width={24}
                                    height={24}
                                    alt="floor"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <span>2 Floors</span>
                            </div>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className=" flex 
                            flex-col md:flex-row       
                            items-start md:items-center 
                            gap-6 md:gap-14        
                            flex-wrap     
                            ">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/assets/images/svg/avtar.svg"
                                width={56}
                                height={56}
                                alt="Profile"
                                className="rounded-full object-cover aspect-square"
                            />
                            <div className="flex flex-col">
                                <h5 className="font-medium text-lg text-[#0E1735] mb-0">
                                    Dianne Russell
                                </h5>
                                <h6 className="text-base font-medium text-[#888B97] mb-0">
                                    Manager Director
                                </h6>
                            </div>
                        </div>

                        <button
                            className="
                            bg-[#170085] text-white text-sm md:text-base px-4 py-3 rounded-full font-semibold
                            shadow-md hover:opacity-90 transition flex items-center gap-3
                        "
                        >
                            <Image
                                src="/assets/images/svg/call-icon.svg"
                                width={24}
                                height={24}
                                alt="call"
                                className="invert brightness-0"
                            />
                            Contact Now
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="relative w-full flex justify-center md:justify-end">

                    {/* BIG IMAGE */}
                    <div className="relative w-full max-w-[488px] md:w-[96%] rounded-xl overflow-hidden">
                        <Image
                            src="/assets/images/png/houseTour_img.png"
                            width={488}
                            height={416}
                            alt="Main House"
                            className="
                            rounded-sm object-cover w-full
                            h-[240px]         
                            sm:h-[260px]      
                            md:h-[320px]       
                            lg:h-[416px]       
                            transition-transform duration-500 
                            hover:scale-105
                        "
                        />

                        {/* PLAY BUTTON */}
                        <button
                            className="
                        absolute inset-0 m-auto 
                        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                        bg-white bg-opacity-70 
                        flex justify-center items-center
                        rounded-full shadow-md 
                        hover:bg-opacity-90 transition
                    "
                        >
                            <svg width="28" height="28" fill="#0E1735" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>

                    {/* SMALL IMAGES */}
                    <div
                        className="
                        absolute 
                        -bottom-[18px]           
                        sm:-bottom-[14px]         
                        md:-bottom-[10px]         
                        lg:-bottom-[40px]              
                        right-[10px]
                        sm:right-[14px]
                        md:right-[18px]
                        lg:right-[16px]
                        flex items-end gap-3
                        "
                    >
                        {/* IMG 1 */}
                        <Image
                            src="/assets/images/png/home_img1.png"
                            width={296}
                            height={168}
                            alt="img1"
                            className="
                            rounded-md
                            transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl
                            w-[45%]               
                            sm:w-[200px]          
                            md:w-[240px]          
                            lg:w-[296px]        
                        "
                        />

                        {/* IMG 2 */}
                        <Image
                            src="/assets/images/png/home_img2.png"
                            width={96}
                            height={80}
                            alt="img2"
                            className="
                            rounded-md
                            transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl
                            w-[55px]
                            sm:w-[70px]
                            md:w-[85px]
                            lg:w-[96px]
                        "
                        />

                        {/* IMG 3 */}
                        <Image
                            src="/assets/images/png/home_img3.png"
                            width={96}
                            height={80}
                            alt="img3"
                            className="
                                rounded-md
                                transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl
                                w-[55px]
                                sm:w-[70px]
                                md:w-[85px]
                                lg:w-[96px]
                            "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
