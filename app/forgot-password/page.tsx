"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/customInput";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reset password for:", email);
        // Redirect to OTP page
        router.push("/otp");
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Main Container */}
            <div className="w-[90%] max-w-[1064px] h-auto md:h-[90%] max-h-[713px] flex flex-col md:flex-row gap-[20px] md:gap-[70px] rounded-[16px] border border-[#A6A6A6] overflow-hidden bg-[#F5F5F5] p-[20px] md:p-[52px]">
                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 relative bg-[#F5F5F5] rounded-[8px] overflow-hidden min-h-[300px]">
                    <Image
                        src="/assets/images/png/login-img.png"
                        alt="Forgot Password"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-[#F5F5F5] px-[5px]">
                    <div className="w-full max-h-full overflow-y-auto hide-scrollbar flex flex-col gap-4">
                        {/* Heading */}
                        <h1
                            className="text-[32px] font-bold text-[#000000]"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Forgot <span className="text-[#407BFF]">Password?</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[14px] text-[#7D7F88] font-normal">
                            Enter your email address and we'll send you a link to reset your password
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

                            {/* Reset Password Button */}
                            <button
                                type="submit"
                                className="w-full h-[48px] bg-[#170085] hover:bg-white hover:text-[#170085] hover:border-1 hover:border-[#170085] hover:shadow-xl text-white border-1 border-transparent rounded-[8px] font-medium text-[16px] transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer mt-8"
                            >
                                Reset Password
                            </button>

                            {/* Back to Login Link */}
                            <p className="text-center text-[14px] text-[#000] font-normal">
                                Remember your password?{" "}
                                <Link href="/login" className="font-medium text-[#170085] hover:underline cursor-pointer">
                                    Back to Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
