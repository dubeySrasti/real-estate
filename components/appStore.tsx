"use client";
import Image from "next/image";

export default function AppStore() {
    return (

        <>
            {/* Latest download */}
            <div
                className="w-full relative"
                style={{
                    background: "linear-gradient(90deg, #1B1C57 0%, #170085 50%, #3A6BE3 100%)",
                }}
            >
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-2 items-center  sm:gap-6
                                gap-4 md:gap-12 lg:gap-20 xl:gap-28 relative">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center w-full h-full ">
                            <img
                                src="/assets/images/png/appLatestImg.png"
                                alt="App"
                                className="
                                mobile-img
                                object-contain absolute
                                top-[-18px]     
                                sm:top-[-20px]
                                md:top-[-28px]
                                lg:top-[-23px]
                                xl:top-[-50px]
                                w-auto
                                max-w-[170px]     
                                sm:max-w-[276px]
                                md:max-w-[370px]
                                lg:max-w-[400px]
                                xl:max-w-[550px]
                                2xl:max-w-[560px]

                            "
                            />
                        </div>


                        {/* RIGHT TEXT */}
                        <div className="pt-3 sm:pt-5 sm:pb-10 md:pt-9 pb-4 md:pb-14 flex flex-col gap-2 sm:gap-3">

                            <h2 className="
                            text-white font-extrabold leading-tight right-heading
                            text-sm
                            sm:text-xl
                            md:text-2xl
                            lg:text-[38px]
                            xl:text-[54px]
                            ">
                                Download Latest Version Of The App From
                            </h2>

                            <p className="
                                text-white font-medium
                                text-[6px]
                                sm:text-[10px]
                                md:text-base
                                lg:text-base
                                md:pe-6
                               
                                ">
                                Leap Social hosts some of the largest singles events in the world!
                                Our Ai matchmaker even suggests who to speak to.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex gap-1.5 sm:gap-3 sm:justify-start justify-start">

                                <button className="flex gap-2 bg-black py-1.5 px-2 sm:px-3 md:px-5 rounded-md">
                                    <img src="/assets/images/svg/apple.svg" className="w-2 sm:w-4 md:w-6 invert brightness-0" />
                                    <div className="flex flex-col items-start">
                                        <h5 className="text-[6px] sm:text-xs md:text-sm font-light text-white">Download on the</h5>
                                        <h6 className="text-[7px] sm:text-base md:text-sm font-bold text-white">App Store</h6>
                                    </div>
                                </button>

                                <button className="flex gap-2 bg-black py-1.5 px-2 sm:px-3 md:px-5  rounded-md">
                                    <img src="/assets/images/svg/google-play.svg" className="w-2 sm:w-4 md:w-6" />
                                    <div className="flex flex-col items-start">
                                        <h5 className="text-[6px] sm:text-xs md:text-sm font-light text-white">Get in on</h5>
                                        <h6 className="text-[7px] sm:text-base md:text-sm font-bold text-white">Google Play</h6>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* App store */}
            <div className="container mx-auto px-4 pt-18 pb-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <!-- First Column --> */}
                    <div className="p-4">
                        <div className="flex flex-col gap-4 mb-6">
                            <h2 className="text-black text-2xl sm:text-[32px] md:text-[30px] lg:text-[42px] font-bold">You Can Find Your Sweet Home Hassle Free.</h2>
                            <h3 className="text-black text-sm sm:text-base md:text-base lg:text-lg font-semibold pe-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</h3>
                        </div>
                        <div className="flex gap-3 flex-wrap justify-start ">
                            <button className="flex gap-2 bg-black py-1.5 px-3 sm:px-5 rounded-md">
                                <img src="/assets/images/svg/apple.svg" className="w-4 sm:w-7 invert brightness-0" />
                                <div className="flex flex-col items-start">
                                    <h5 className="text-sm font-light text-white">Download on the</h5>
                                    <h6 className="text-sm sm:text-xl font-bold text-white">App Store</h6>
                                </div>
                            </button>

                            <button className="flex gap-2 bg-black py-1.5 px-3 sm:px-5 rounded-md">
                                <img src="/assets/images/svg/google-play.svg" className="w-4 sm:w-7" />
                                <div className="flex flex-col items-start">
                                    <h5 className="text-sm font-light text-white">Get in on</h5>
                                    <h6 className="text-sm sm:text-xl font-bold text-white">Google Play</h6>
                                </div>
                            </button>
                        </div>
                        <div className="flex items-center gap-17 sm:gap-0 mt-7 justify-start ">
                            <div>
                                <h4 className="font-extrabold text-black text-4xl sm:text-[38px] md:text-[42px] lg:text-[54px]">
                                    169<sup>M</sup>
                                </h4>
                                <h5 className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-black">App Downloads</h5>
                            </div>

                            {/*  Divider Line */}
                            <div className="hidden sm:block border-l-2 border-gray-300 mx-13 h-20"></div>
                            <div>
                                <h4 className="font-extrabold text-black text-4xl sm:text-[38px] md:text-[42px] lg:text-[54px]">
                                    256<sup>M</sup>
                                </h4>
                                <h5 className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-black">User Reviews</h5>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Second Column --> */}
                    <div
                        className="
                    relative w-full h-full flex justify-center
                    order-1           
                    max-sm:order-[-2] 
                "
                    >
                        <Image
                            src="/assets/images/png/appStoreImg.png"
                            alt="Image"
                            width={388}
                            height={510}
                            className="
                        object-contain
                        w-full          
                        max-w-[250px]   
                        sm:max-w-[260px]  
                        md:max-w-[320px]  
                        lg:max-w-[388px] 
                    "
                        />

                    </div>
                </div>
            </div>
        </>
    );
}
