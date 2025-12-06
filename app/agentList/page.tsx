"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AgentList() {
    // Agent data array
    const agents = Array(15).fill({
        name: "Fisher Allston",
        role: "Estate Trading Consultant",
        phone: "+1234567890", // Add phone number for each agent
    });

    return (
        <>
            <Navbar />

            {/* Main Content */}
            <div className="min-h-screen bg-[#fff] pt-[30px] pb-20 sm:pb-32 md:pb-[200px] px-5 md:px-17 lg:px-16 xl:px-20 2xl:px-24 flex flex-col gap-6 sm:gap-8 md:gap-[30px]">

                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-black">
                    Agent List
                </h1>

                {/* Agent Grid */}
                <div className="grid grid-cols-1 max-[575px]:grid-cols-1 min-[576px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                    {agents.map((agent, index) => (
                        <div
                            key={index}
                            className="bg-[var(--cardBg)] rounded-[16px] min-[375px]:rounded-[18px] sm:rounded-[20px] border border-[#E2E8F0] pt-4 pb-5 px-4 min-[375px]:pt-5 min-[375px]:pb-6 min-[375px]:px-6 min-[480px]:px-8 sm:pt-5 sm:pb-7 sm:px-8 md:pt-5 md:pb-7 md:px-[34px] flex flex-col items-center transition-all duration-300 gap-4 sm:gap-[18px]"
                        >
                            <div className="flex flex-col justify-center items-center gap-4 sm:gap-[18px]">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#8AB4F8] to-[#5B9BF3] flex items-center justify-center shadow-md overflow-hidden">
                                    <Image
                                        src="/assets/images/svg/avtar.svg"
                                        alt="Agent Avatar"
                                        width={112}
                                        height={112}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-base sm:text-[18px] font-semibold text-black text-center mb-0">
                                        {agent.name}
                                    </h3>

                                    <p className="text-[11px] sm:text-[12px] font-medium text-[var(--subtitle)] text-center mb-0">
                                        {agent.role}
                                    </p>
                                </div>
                            </div>

                            <a 
                                href={`tel:${agent.phone}`}
                                className="bg-[var(--accent)] hover:bg-[#0f0066] text-white py-1.5 sm:py-1.5 px-3 sm:px-4 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-300 flex items-center justify-center gap-[5px] cursor-pointer"
                            >
                                <Image
                                    src="/assets/images/svg/call-icon.svg"
                                    alt="call"
                                    width={18}
                                    height={18}
                                    className="w-[18px] h-[18px] brightness-0 invert"
                                />
                                Call for information
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
