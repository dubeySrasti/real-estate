"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomInput from "@/components/customInput";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login:", { email, password, rememberMe });
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Main Container */}
            <div className="w-[90%] max-w-[1064px] h-auto md:h-[90%] max-h-[713px] flex flex-col md:flex-row gap-[20px] md:gap-[70px] rounded-[16px] border border-[#A6A6A6] overflow-hidden bg-[#F5F5F5] p-[20px] md:p-[52px]">
                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 relative bg-[#F5F5F5] rounded-[8px] overflow-hidden min-h-[300px]">
                    <Image
                        src="/assets/images/png/login-img.png"
                        alt="Login"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-[#F5F5F5] px-[5px]">
                    <div className="w-full max-h-full overflow-y-auto hide-scrollbar flex flex-col gap-4">
                        {/* Heading */}
                        <h1 className="text-[32px] font-bold text-[#000000]" style={{ fontFamily: "Poppins, sans-serif" }}>
                            Log<span className="text-[#407BFF]">in</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[14px] text-[#7D7F88] font-normal">
                            Login to access your Easyget24 account
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
                            {/* Email Input */}
                            <CustomInput
                                label="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Easyget24@Gmail.Com"
                                required
                            />

                            {/* Password Input */}
                            <CustomInput
                                label="Password"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                required
                            />

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 border-1 border-[#170085] rounded bg-white peer-checked:bg-[#170085] transition-all duration-200 flex items-center justify-center">
                                            {rememberMe && (
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-[14px] text-[#000000] select-none">Remember Me</span>
                                </label>
                                <Link href="/forgot-password" className="text-[14px] font-medium text-[#170085] hover:underline cursor-pointer">
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full h-[48px] bg-[#170085] hover:bg-white hover:text-[#170085] hover:border-1 hover:border-[#170085] hover:shadow-xl text-white border-1 border-transparent rounded-[8px] font-medium text-[16px] transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer"
                            >
                                Login
                            </button>

                            {/* Register Link */}
                            <p className="text-center text-[14px] text-[#000000] font-normal">
                                Don't have an account in Easyget24 yet?{" "}
                                <Link href="/register" className="font-medium text-[#170085] hover:underline cursor-pointer">
                                    Register!
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
