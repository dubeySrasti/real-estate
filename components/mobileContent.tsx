"use client";
import Image from "next/image";

export default function MobileContent() {
    const features = [
        {
            icon: "/assets/images/svg/setting.svg",
            title: "Fully Functional",
            desc: "Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.",
        },
        {
            icon: "/assets/images/svg/download.svg",
            title: "Download Anyway",
            desc: "Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.",
        },
        {
            icon: "/assets/images/svg/users.svg",
            title: "User Friendly",
            desc: "Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.",
        },
        {
            icon: "/assets/images/svg/service.svg",
            title: "24hrs Support",
            desc: "Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis nunc ultricies enim nunc elementum vulputate.",
        },
    ];

    return (
        <>
            <div className="container mx-auto ">
                {/* Dream House */}
                {/* Title */}
                <div className="pt-11 pb-18 flex flex-col gap-10">
                    <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 m-auto text-center">
                        <h2 className=" max-[400px]:text-xl text-2xl sm:text-[34px] md:text-[38px] lg:text-[42px] font-bold text-black mb-2">
                            Find Your Dream Home Easily
                        </h2>
                        <p className="text-black font-semibold  max-[400px]:text-[10px] text-xs sm:text-base  lg:text-lg sm:px-14 px-12">
                            Whether you’re moving for work, study, or family — MyRental helps you find a place that truly feels like home.
                        </p>
                    </div>
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-6 sm:gap-10 px-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-3 sm:gap-5 items-start"
                            >
                                {/* SVG ICON CIRCLE */}
                                <div
                                    className="
                                    w-7 h-7 sm:w-15 sm:h-15 
                                    rounded-full bg-[var(--secondary)] 
                                    flex justify-center items-center aspect-square
                                    "
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={28}
                                        height={28}
                                        className="
                                        w-3 h-3 
                                        sm:w-8 sm:h-8 
                                        invert brightness-0 contrast-200
                                    "
                                    />
                                </div>

                                {/* TEXT */}
                                <div className="flex flex-col gap-1">
                                    <h3
                                        className="
                                            text-[10px] sm:text-xl 
                                            font-bold text-black
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                        text-[6px] sm:text-sm 
                                        text-black
                                    "
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Connections Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 sm:gap-18 gap-9 px-6 pb-8">

                    {/* col-md-8 (Image) */}
                    <div className="md:col-span-6 w-full h-full order-2 md:order-none flex justify-center">
                        <Image
                            src="/assets/images/png/appConnections_img1.png"
                            alt="Image"
                            width={572}
                            height={513}
                            className="
                            object-contain
                            w-full
                            max-[575px]:max-w-[250px]   
                            max-[767px]:max-w-[400px]   
                            md:max-w-none                     
                        "
                        />
                    </div>

                    {/* col-md-4 (Content) */}
                    <div className="md:col-span-5 flex flex-col gap-3.5 justify-center order-1 md:order-none">
                        <div className="flex flex-col md:gap-8 gap-4 ">
                            <h2 className=" text-black 
                                text-2xl 
                                sm:text-[34px] 
                                md:text-[32px] 
                                lg:text-[42px]
                                font-bold
                                max-[400px]:text-xl
                                ">
                                Genuine connections for Free
                            </h2>
                            <h3 className="text-black  max-[400px]:text-xs text-sm sm:text-lg md:text-xl font-semibold">
                                It’s always FREE to see profiles, connect, and take a Leap online.
                            </h3>
                        </div>
                    </div>

                </div>

                {/* Offline Content */}
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 px-6">

                    {/*col-md-5 */}
                    <div className="w-full md:w-5/12">
                        <div className="flex flex-col gap-3.5 ">
                            <div className="flex flex-col md:gap-8 gap-4">
                                <h2 className="text-black  text-2xl 
                                sm:text-[34px] 
                                md:text-[32px] 
                                lg:text-[42px]
                                font-bold
                                max-[400px]:text-xl sm:pe-10 lg:pe-38 pe-0">
                                    Go OFFLINE Like... in real life.
                                </h2>
                                <h3 className="text-black  max-[400px]:text-xs text-sm sm:text-lg md:text-xl font-semibold">
                                    Leap Social hosts some of the largest singles events in the world!
                                    Our Ai matchmaker even suggests who to speak to.
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* col-md-6 */}
                    <div className="w-full md:w-6/12 flex justify-center">
                        <Image
                            src="/assets/images/png/appConnections_img2.png"
                            alt="Image"
                            width={529}
                            height={513}
                            className="
                            object-contain
                            w-full
                            max-[575px]:max-w-[250px]   
                            max-[767px]:max-w-[400px]    
                            mx-0                         
                        "
                        />


                    </div>

                </div>

            </div >
        </>
    )
}

