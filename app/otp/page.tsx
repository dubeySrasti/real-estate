"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OTP() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto focus next input
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("OTP:", otp.join(""));
    };

    const handleResendOTP = () => {
        if (canResend) {
            console.log("Resend OTP");
            setOtp(["", "", "", "", "", ""]);
            setTimer(60);
            setCanResend(false);
            inputRefs.current[0]?.focus();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden p-4">
            {/* Main Container */}
            <div className="w-full max-w-[400px] md:max-w-[1064px] h-auto md:h-[90%] max-h-[713px] flex flex-col md:flex-row gap-[20px] md:gap-[70px] rounded-[16px] border border-[#A6A6A6] overflow-hidden bg-[#F5F5F5] p-[20px] md:p-[52px]">
                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 relative bg-[#F5F5F5] rounded-[8px] overflow-hidden min-h-[300px]">
                    <Image
                        src="/assets/images/png/login-img.png"
                        alt="OTP"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-[#F5F5F5] px-[5px]">
                    <div className="w-full max-h-full overflow-y-auto hide-scrollbar flex flex-col gap-3 md:gap-4">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <Link href="/">
                                <Image
                                    src="/assets/images/svg/logo.svg"
                                    width={142}
                                    height={130}
                                    alt="Logo"
                                    className="w-[80px] h-[73px] md:w-[142px] md:h-[130px]"
                                />
                            </Link>
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-[24px] md:text-[32px] font-bold text-[#000000]"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Log<span className="text-[#407BFF]">in</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[10px] md:text-[12px] text-[#7D7F88] font-normal leading-relaxed">
                            Log In to your Placoo account to explore your dream place to live across the whole world!
                        </p>

                        {/* OTP Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 md:gap-4">
                            {/* OTP Input */}
                            <div className="flex flex-col gap-3 md:gap-4">
                                <label className="text-[14px] md:text-[16px] font-semibold text-[#000000]">
                                    Enter OTP
                                </label>
                                <div className="flex gap-[8px] sm:gap-[8px] md:gap-[12px] lg:gap-[15px] justify-center px-1 sm:px-2">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => {
                                                inputRefs.current[index] = el;
                                            }}
                                            type="text"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px] lg:w-[48px] lg:h-[48px] text-center border-[0.8px] border-[#A6A6A6] rounded-[6px] md:rounded-[8px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#000000] bg-[#FFFFFF] focus:outline-none focus:border-transparent focus:bg-[#F1F1FE] focus:shadow-lg transition-all duration-300"
                                            style={{
                                                background: digit ? 'linear-gradient(#F1F1FE, #F1F1FE) padding-box, linear-gradient(180deg, #170085, #6246EA) border-box' : '#FFFFFF',
                                                border: digit ? '1px solid transparent' : '0.8px solid #A6A6A6'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.background = 'linear-gradient(#F1F1FE, #F1F1FE) padding-box, linear-gradient(180deg, #170085, #6246EA) border-box';
                                                e.target.style.border = '1px solid transparent';
                                            }}
                                            onBlur={(e) => {
                                                if (!digit) {
                                                    e.target.style.background = '#FFFFFF';
                                                    e.target.style.border = '0.8px solid #A6A6A6';
                                                }
                                            }}
                                        />
                                    ))}
                                </div>
                                {/* Resend OTP */}
                                <div className="flex justify-end">
                                    {canResend ? (
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            className="text-[12px] md:text-[14px] font-normal text-[#170085] hover:underline cursor-pointer"
                                        >
                                            Resend OTP
                                        </button>
                                    ) : (
                                        <span className="text-[11px] md:text-[13px] font-normal text-[#000]">
                                            Resend OTP in {timer}s
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full h-[44px] md:h-[48px] bg-[#170085] hover:bg-white hover:text-[#170085] hover:border-1 hover:border-[#170085] hover:shadow-xl text-white border-1 border-transparent rounded-[8px] font-medium text-[14px] md:text-[16px] transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
