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
                        text-black flex flex-col gap-0.5 sm:gap-1.5 py-2 sm:py-4 ps-2 sm:ps-4 md:ps-6 pe-3 sm:pe-6 md:pe-9
                        absolute bg-white shadow-xl rounded-xl sm:rounded-2xl z-10
                        top-[120px] right-[160px]
                        max-[700px]:right-[140px] max-[700px]:top-[110px]
                        max-[600px]:right-[120px] max-[600px]:top-[100px]
                        max-[500px]:right-[100px] max-[500px]:top-[90px]
                        max-[400px]:right-[85px] max-[400px]:top-[80px]
                        max-[350px]:right-[75px] max-[350px]:top-[75px]
                        floating-left
                    "
                    >
                        <Image src="/assets/images/svg/checkMark.svg" width={14} height={14} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                        <p className="text-[10px] sm:text-xs font-semibold">Monthly</p>
                        <h2 className="text-sm sm:text-lg md:text-[24px] lg:text-[32px] font-bold">$2,864</h2>

                        <div className="w-[80px] sm:w-[120px] md:w-[166px] h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-1 sm:h-1.5 bg-[#1B1C57] w-[70%] rounded-full"></div>
                        </div>
                    </div>

                    {/* MOBILE IMAGE */}
                    <div
                        className="
                                relative z-0
                                w-[180px]
                                sm:w-[220px]
                                md:w-[260px]
                                lg:w-[280px]
                                max-[400px]:w-[160px]
                                max-[350px]:w-[140px]
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
                            flex gap-2 sm:gap-3 text-black py-1.5 sm:py-2 px-2 sm:px-3.5 items-center
                            absolute bg-white shadow-xl rounded-xl sm:rounded-2xl z-10
                            right-[-80px] bottom-[100px]
                            max-[700px]:right-[-70px] max-[700px]:bottom-[90px]
                            max-[600px]:right-[-60px] max-[600px]:bottom-[80px]
                            max-[500px]:right-[-50px] max-[500px]:bottom-[70px]
                            max-[400px]:right-[-40px] max-[400px]:bottom-[60px]
                            max-[350px]:right-[-35px] max-[350px]:bottom-[55px]
                            floating-right
                        "
                    >
                        <Image
                            src="/assets/images/svg/premium_vector.svg"
                            alt="premium"
                            width={24}
                            height={24}
                            className="
                            w-4 h-4      
                            sm:w-6 sm:h-6 
                            md:w-8 md:h-8 
                            lg:w-[36px] lg:h-[36px] 
                        "
                        />

                        <div>
                            <p className="text-[9px] sm:text-xs font-semibold">Minimum Premium</p>
                            <h2 className="text-[11px] sm:text-base md:text-[18px] lg:text-[22px] font-semibold">$2,864/Month</h2>
                        </div>
                    </div>


                </div>
            </div>


            {/* Mobile view */}
            <div className="hero-mobile-view relative">
                {/* Title */}
                <div className="w-10/12 sm:w-8/12 m-auto flex flex-col gap-3 justify-center items-center pt-6 pb-8">
                    <h1 className="text-3xl xs:text-xl sm:text-3xl md:text-5xl lg:text-[64px]  font-extrabold text-black mb-0 text-center px-4 sm:px-0">
                        The Future Of <span className="text-[var(--primary)]">Real Estate</span>
                    </h1>
                    <p className="text-black font-normal text-[12px] sm:text-lg sm:w-8/12 text-center mb-0">
                        Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.
                    </p>
                </div>
                <div className="hero-mobile-img ">
                    <div className="w-[200px] m-auto relative">

                        {/* LEFT FLOATING CARD */}
                        <div className=" text-black flex flex-col gap-0.5 py-1.5 sm:py-2 px-2 sm:px-3
                        absolute 
                        right-[90px] sm:right-[120px]  
                        z-1
                        top-[50px] sm:top-[70px] 
                        bg-white shadow-xl rounded-lg sm:rounded-xl 
                        floating-left
                        max-[350px]:right-[75px] max-[350px]:top-[40px]
                    ">
                            <Image
                                src="/assets/images/svg/checkMark.svg"
                                alt="Mobile"
                                width={8}
                                height={8}
                                className="w-2 h-2 sm:w-2.5 sm:h-2.5"
                            />
                            <p className="text-[8px] sm:text-[10px] font-semibold">Monthly</p>
                            <h2 className="text-[10px] sm:text-xs font-bold">$2,864</h2>
                            <div className="w-[50px] sm:w-[70px] h-0.5 sm:h-1 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-0.5 sm:h-1 bg-[#1B1C57] w-[50%] rounded-full"></div>
                            </div>
                        </div>

                        {/* MOBILE IMAGE */}
                        <div className="flex justify-end -mb-[16px] relative z-0">
                            <Image
                                src="/assets/images/png/heroMobile_img.png"
                                alt="Image"
                                width={120}
                                height={240}
                                className="
                            object-contain
                            w-[100px] sm:w-[120px] md:w-[140px]
                            h-auto
                        "
                            />
                        </div>

                        {/* RIGHT FLOATING CARD */}
                        <div className=" flex gap-1.5 sm:gap-2 text-black py-1.5 sm:py-2 px-2 sm:px-2.5
                        absolute 
                        right-[-35px] sm:right-[-50px] 
                        bottom-[55px] sm:bottom-[75px] 
                        bg-white shadow-xl rounded-lg sm:rounded-xl  
                        floating-right
                        z-1
                        max-[350px]:right-[-30px] max-[350px]:bottom-[45px]
                    ">
                            <Image
                                src="/assets/images/svg/premium_vector.svg"
                                alt="Mobile"
                                width={12}
                                height={12}
                                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                            />
                            <div>
                                <p className="text-[7px] sm:text-[8px] font-semibold mb-0">Minimum Premium</p>
                                <h2 className="text-[8px] sm:text-[10px] font-semibold mb-0">$2,864/Month</h2>
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
                        <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">

                            <button className="flex gap-2 sm:gap-3 bg-white py-2 sm:py-1.5 px-3 sm:px-3 rounded-md items-center w-[115px] sm:w-[140px] md:w-[185px]">
                                <img src="/assets/images/svg/apple.svg" className="w-4 sm:w-5 md:w-7 flex-shrink-0" />
                                <div className="flex flex-col items-start">
                                    <h5 className="text-[8px] sm:text-[10px] md:text-sm font-semibold text-black leading-tight">Download on the</h5>
                                    <h6 className="text-[10px] sm:text-[12px] md:text-xl font-bold text-black leading-tight">App Store</h6>
                                </div>
                            </button>

                            <button className="flex gap-2 sm:gap-3 bg-white py-2 sm:py-1.5 px-3 sm:px-3 rounded-md items-center w-[115px] sm:w-[140px] md:w-[185px]">
                                <img src="/assets/images/svg/google-play.svg" className="w-4 sm:w-5 md:w-7 flex-shrink-0" />
                                <div className="flex flex-col items-start">
                                    <h5 className="text-[8px] sm:text-[10px] md:text-sm font-semibold text-black leading-tight">Get it on</h5>
                                    <h6 className="text-[10px] sm:text-[12px] md:text-xl font-bold text-black leading-tight">Google Play</h6>
                                </div>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
