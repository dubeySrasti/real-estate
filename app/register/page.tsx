"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomInput from "@/components/customInput";

export default function Register() {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        gender: "",
        profileType: "",
        state: "",
        city: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register:", formData);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Main Container */}
            <div className="w-[90%] max-w-[1064px] h-auto md:h-[90%] max-h-[713px] flex flex-col md:flex-row gap-[20px] md:gap-[70px] rounded-[16px] border border-[#A6A6A6] overflow-hidden bg-[#F5F5F5] p-[20px] md:p-[52px]">
                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 relative bg-[#F5F5F5] rounded-[8px] overflow-hidden min-h-[300px]">
                    <Image
                        src="/assets/images/png/login-img.png"
                        alt="Register"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side - Register Form */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-[#F5F5F5] px-[5px]">
                    <div className="w-full max-h-full overflow-y-auto hide-scrollbar flex flex-col gap-4">
                        {/* Heading */}
                        <h1
                            className="text-[32px] font-bold text-[#000000]"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Sign <span className="text-[#407BFF]">Up</span>
                        </h1>

                        {/* Register Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
                            {/* User Name */}
                            <CustomInput
                                label="User Name"
                                type="text"
                                id="userName"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                placeholder="Easyget24"
                                required
                            />

                            {/* Email */}
                            <CustomInput
                                label="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Easyget24@Gmail.com"
                                required
                            />

                            {/* Gender */}
                            <CustomInput
                                label="Gender"
                                type="text"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                placeholder="Select Gender"
                                required
                            />

                            {/* Profile Type */}
                            <CustomInput
                                label="Profile Type"
                                type="text"
                                id="profileType"
                                name="profileType"
                                value={formData.profileType}
                                onChange={handleChange}
                                placeholder="Owner, Tenant, Agent"
                                required
                            />

                            {/* State */}
                            <CustomInput
                                label="State"
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="Enter State"
                                required
                            />

                            {/* City */}
                            <CustomInput
                                label="City"
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter City"
                                required
                            />

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full h-[48px] bg-[#170085] hover:bg-white hover:text-[#170085] hover:border-1 hover:border-[#170085] hover:shadow-xl text-white border-1 border-transparent rounded-[8px] font-medium text-[16px] transition-all duration-300 ease-in-out px-4 py-2 cursor-pointer mt-4"
                            >
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
