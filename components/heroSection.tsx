"use client";
import Image from "next/image";

export default function HeroSection() {
    return (

        <>
            {/* Desktop view */}
            <div className="hero-background-img">
                {/* Title */}
                <div className="w-10/12 sm:w-8/12  md:w-7/12 lg:w-7/12 xl:w-7/12 m-auto flex flex-col gap-3 justify-center items-center pt-6 pb-8">
                    <h1 className="text-3xl xs:text-xl sm:text-3xl md:text-[36px] lg:text-[48px]  xl:text-[54px] font-extrabold text-black mb-0 text-center px-4 sm:px-0">
                        The Future Of <span className="text-[var(--primary)]">Real Estate</span>
                    </h1>
                    <p className="text-black font-normal text-[12px] sm:text-sm md:text-base lg:text-lg text-center mb-0">
                        Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.
                    </p>
                </div>
                <div className="relative w-[57%] sm:w-[55%] md:w-[50%] lg:w-[42%] xl:w-[38%] mx-auto flex justify-end items-center mt-10">

                    {/* LEFT FLOATING CARD */}
                    <div
                        className="
                        text-black flex flex-col gap-0.5 sm:gap-1.5 py-4 ps-4 sm:ps-6 sm:pe-9 pe-6
                        absolute bg-white shadow-xl rounded-2xl  z-10
                        top-[160px] right-[220px]
                        max-[700px]:right-[180px] max-[700px]:top-[140px]
                        max-[600px]:right-[160px] max-[600px]:top-[130px]
                        floating-left
                    "
                    >
                        <Image src="/assets/images/svg/checkMark.svg" width={18} height={18} alt="" />
                        <p className="text-xs font-semibold">Monthly</p>
                        <h2 className="text-lg sm:text-[24px] md:text-[32px] font-bold">$2,864</h2>

                        <div className="w-[120px] sm:w-[166px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-1.5 bg-[#1B1C57] w-[70%] rounded-full"></div>
                        </div>
                    </div>

                    {/* MOBILE IMAGE */}
                    <div
                            className="
                                relative z-0
                                w-[260px]
                                md:w-[280px]
                                max-[700px]:w-[240px]
                                max-[600px]:w-[220px]
                               
                            "
                    >
                        <Image
                            src="/assets/images/png/heroMobile_img.png"
                            width={267}
                            height={543}
                            alt="Mobile"
                            className="w-full object-contain  -mb-4"
                        />
                    </div>


                    {/* RIGHT FLOATING CARD */}
                    <div
                        className="
                            flex gap-3 text-black py-2 px-3.5 items-center
                            absolute bg-white shadow-xl rounded-2xl  z-10
                            right-[-130px] bottom-[135px]
                            max-[700px]:right-[-120px] max-[700px]:bottom-[120px]
                            max-[600px]:right-[-90px] max-[600px]:bottom-[110px]
                            floating-right
                        "
                    >
                        <Image
                            src="/assets/images/svg/premium_vector.svg"
                            alt="premium"
                            width={36}
                            height={36}
                            className="
                            w-6 h-6      
                            sm:w-8 sm:h-8 
                            md:w-9 md:h-9 
                            lg:w-[36px] lg:h-[36px] 
                        "
                        />

                        <div>
                            <p className="text-xs font-semibold">Minimum Premium</p>
                            <h2 className="text-base sm:text-[18px] md:text-[22px] font-semibold">$2,864/Month</h2>
                        </div>
                    </div>


                </div>
            </div>


            {/* Mobile view */}
            <div className="hero-mobile-view relative">
                {/* Title */}
                <div className="w-10/12 sm:w-8/12 m-auto flex flex-col gap-3 justify-center items-center pt-6 pb-8">
                    <h1 className="text-4xl xs:text-xl sm:text-3xl md:text-5xl lg:text-[64px]  font-extrabold text-black mb-0 text-center px-4 sm:px-0">
                        The Future Of <span className="text-[var(--primary)]">Real Estate</span>
                    </h1>
                    <p className="text-black font-normal text-[12px] sm:text-lg sm:w-8/12 text-center mb-0">
                        Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.
                    </p>
                </div>
                <div className="hero-mobile-img ">
                    <div className="w-[230px] m-auto relative">

                        {/* LEFT FLOATING CARD */}
                        <div className=" text-black flex flex-col gap-0.5 py-2 px-3
                        absolute 
                        right-[120px]  
                        z-1
                        top-[70px] 
                        bg-white shadow-xl rounded-xl 
                        floating-left
                    ">
                            <Image
                                src="/assets/images/svg/checkMark.svg"
                                alt="Mobile"
                                width={10}
                                height={10}
                            />
                            <p className="text-[10px] font-semibold">Monthly</p>
                            <h2 className=" text-xs sm:text-sm font-bold">$2,864</h2>
                            <div className="w-[70px] h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-1 bg-[#1B1C57] w-[50%] rounded-full"></div>
                            </div>
                        </div>

                        {/* MOBILE IMAGE */}
                        <div className="flex justify-end -mb-[16px] relative z-0">
                            <Image
                                src="/assets/images/png/heroMobile_img.png"
                                alt="Image"
                                width={140}
                                height={275}
                                className="
                            object-contain
                                   
                        "
                            />
                        </div>

                        {/* RIGHT FLOATING CARD */}
                        <div className=" flex gap-2 text-black py-2 px-2.5
                        absolute 
                        right-[-50px] 
                        bottom-[75px] 
                        bg-white shadow-xl rounded-xl  
                        floating-right
                        z-1
                    ">
                            <Image
                                src="/assets/images/svg/premium_vector.svg"
                                alt="Mobile"
                                width={14}
                                height={14}
                            />
                            <div>
                                <p className="text-[8px] font-semibold mb-0">Minimum Premium</p>
                                <h2 className="text-[10px] font-semibold mb-0">$2,864/Month</h2>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            {/* App download */}
            <div
                className="w-full bg-black py-6 z-[1] relative"
            >
                <div className="container mx-auto px-4">

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col gap-3 sm:gap-4 items-center">

                        {/* TITLES */}
                        <h2 className="text-white text-sm sm:text-2xl font-bold">
                            Download the My Rental App
                        </h2>

                        {/* BUTTONS */}
                        <div className="flex gap-1.5 sm:gap-3 flex-wrap justify-start">

                            <button className="flex gap-3 bg-white py-1.5 px-2 sm:px-3 rounded-md">
                                <img src="/assets/images/svg/apple.svg" className="w-3 sm:w-7" />
                                <div className="flex flex-col items-start">
                                    <h5 className="text-[7px] sm:text-sm font-semibold text-black">Download on the</h5>
                                    <h6 className="text-[8px] sm:text-xl font-bold text-black">App Store</h6>
                                </div>
                            </button>

                            <button className="flex gap-2 bg-white py-1.5 px-2 sm:px-3 rounded-md">
                                <img src="/assets/images/svg/google-play.svg" className="w-3 sm:w-7" />
                                <div className="flex flex-col items-start">
                                    <h5 className="text-[7px] sm:text-sm font-semibold text-black">Get in on</h5>
                                    <h6 className="text-[8px] sm:text-xl font-bold text-black">Google Play</h6>
                                </div>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
