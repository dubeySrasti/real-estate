"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function SearchList() {
    const [priceRange, setPriceRange] = useState(75000);
    const [showFilters, setShowFilters] = useState(false);

    // Filter states
    const [roomRent, setRoomRent] = useState("Monthly");
    const [furniture, setFurniture] = useState("Full");
    const [bhkType, setBhkType] = useState("1 BHK");
    const [listedBy, setListedBy] = useState("Agent");
    const [bathType, setBathType] = useState("Safe");
    const [propertyType, setPropertyType] = useState("Pg");
    const [electricity, setElectricity] = useState("Include");
    const [livingPreference, setLivingPreference] = useState("Female");
    const [showAllCards, setShowAllCards] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const properties = [
        {
            id: 1,
            title: "705 Vinayak Tower",
            rating: 4.5,
            reviews: 98,
            price: 785,
            type: "1 BHK, Flat",
            category: "Apartment",
            availability: "Available",
            date: "03 Jun, 2024",
            image: "/assets/images/png/property_img1.png"
        },
        {
            id: 2,
            title: "Skyline Residency",
            rating: 4.2,
            reviews: 76,
            price: 650,
            type: "2 BHK, Flat",
            category: "Apartment",
            availability: "Available",
            date: "12 May, 2024",
            image: "/assets/images/png/property_img2.png"
        },
        {
            id: 3,
            title: "GreenVilla Homes",
            rating: 4.8,
            reviews: 112,
            price: 920,
            type: "Villa",
            category: "Independent",
            availability: "Coming Soon",
            date: "Soon",
            image: "/assets/images/png/property_img3.png"
        },
        {
            id: 4,
            title: "Lakeview Apartments",
            rating: 4.3,
            reviews: 84,
            price: 720,
            type: "Studio Room",
            category: "Apartment",
            availability: "Available",
            date: "18 Aug, 2024",
            image: "/assets/images/png/property_img4.png"
        },
        {
            id: 5,
            title: "Royal Heritage",
            rating: 4.7,
            reviews: 143,
            price: 1050,
            type: "3 BHK, Flat",
            category: "Luxury",
            availability: "Available",
            date: "22 Sep, 2024",
            image: "/assets/images/png/property_img5.png"
        },
        {
            id: 6,
            title: "Sunshine Residency",
            rating: 4.1,
            reviews: 65,
            price: 560,
            type: "1 BHK, Flat",
            category: "Apartment",
            availability: "Available",
            date: "11 Jan, 2024",
            image: "/assets/images/png/property_img6.png"
        }
    ];

    const FilterButton = ({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) => (
        <button
            onClick={onClick}
            className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm transition-all ${active
                ? 'bg-[#170085] text-white border-0 font-medium'
                : 'bg-[#F2F2F3] text-[#7D7F88] border border-[#E3E3E7] font-medium hover:bg-gray-200'
                }`}
        >
            {label}
        </button>
    );

    return (
        <>
            <Navbar />

            <div className="bg-white min-h-screen">
                {/* Hero Section with Background Image */}
                <div className="relative w-full h-[150px] sm:h-[200px] md:h-[155px] overflow-hidden">
                    <Image
                        src="/assets/images/png/slider_img.png"
                        alt="Wishlist Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="pt-[30px] pb-5 px-5 md:px-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Filters Sidebar */}
                        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-[280px] h-fit`}>
                            <div className="flex flex-col gap-4">
                                {/* Map Card */}
                                <div className="bg-[#EFEFEF] rounded border border-[#D9D9D9] p-3 w-full">
                                    <div className="mb-3">
                                        <button className="bg-white text-[#0369F0] text-xs font-normal hover:underline py-1 px-3 rounded">View larger map</button>
                                    </div>
                                    <div className="relative h-[197px] bg-[#EFEFEF] rounded overflow-hidden">
                                        {/* Map background pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="w-full h-full" style={{
                                                backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                                                backgroundSize: '20px 20px'
                                            }}></div>
                                        </div>

                                        {/* Map pins */}
                                        <div className="absolute" style={{ top: '45%', left: '35%' }}>
                                            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                                                <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22c0-7.732-6.268-14-14-14z" fill="#1E40AF" />
                                                <circle cx="14" cy="14" r="5" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="absolute" style={{ top: '45%', left: '52%' }}>
                                            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                                                <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22c0-7.732-6.268-14-14-14z" fill="#DC2626" />
                                                <circle cx="14" cy="14" r="5" fill="white" />
                                            </svg>
                                        </div>

                                        {/* Small white square in bottom left */}
                                        <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/40 border border-white/60 rounded"></div>

                                        {/* Zoom controls */}
                                        <div className="absolute top-[96px] right-[18px] flex flex-col gap-0 w-10 h-[81px] rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                                            <button className="w-10 h-10 bg-white border-b border-gray-300 flex items-center justify-center text-2xl font-black text-[#666666] hover:bg-gray-50">+</button>
                                            <button className="w-10 h-10 bg-white flex items-center justify-center text-2xl font-black text-[#666666] hover:bg-gray-50">−</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Card - Filter Price */}
                                <div className="bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.1)] w-full">
                                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#F4F4F5] px-3 pt-3">
                                        <h3 className="text-lg font-bold text-[#1C2B38]">Filter Price</h3>
                                        <svg className="w-6 h-6 text-[#666666]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="space-y-4 px-3 pb-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-normal text-[#BBBBBB]">Price</span>
                                            <span className="text-sm font-medium text-[#C2C2C2]">$ 0</span>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="range"
                                                min="0"
                                                max="122000"
                                                value={priceRange}
                                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                                className="w-full h-2 bg-[#EEEEEE] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[22px] [&::-webkit-slider-thumb]:h-[22px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#170085] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md"
                                            />
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-sm font-medium text-[#C2C2C2]">${priceRange}</span>
                                            <span className="text-sm font-medium text-[#C2C2C2]">$122000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Card - Filter By Category */}
                                <div className="bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.1)] w-full">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F4F4F5] px-3 pt-3">
                                        <h3 className="text-lg font-bold text-[#1C2B38]">Filter By Category</h3>
                                        <svg className="w-6 h-6 text-[#666666]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="flex flex-col gap-2.5 px-3 pb-3">
                                        {/* Room rent */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Room rent</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Any" active={roomRent === "Any"} onClick={() => setRoomRent("Any")} />
                                                <FilterButton label="Monthly" active={roomRent === "Monthly"} onClick={() => setRoomRent("Monthly")} />
                                                <FilterButton label="Annually" active={roomRent === "Annually"} onClick={() => setRoomRent("Annually")} />
                                                <FilterButton label="Per night" active={roomRent === "Per night"} onClick={() => setRoomRent("Per night")} />
                                            </div>
                                        </div>

                                        {/* Furniture */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Furniture</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Any" active={furniture === "Any"} onClick={() => setFurniture("Any")} />
                                                <FilterButton label="Full" active={furniture === "Full"} onClick={() => setFurniture("Full")} />
                                                <FilterButton label="Semi" active={furniture === "Semi"} onClick={() => setFurniture("Semi")} />
                                                <FilterButton label="Non" active={furniture === "Non"} onClick={() => setFurniture("Non")} />
                                            </div>
                                        </div>

                                        {/* BHK Type */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">BHK Type</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Any" active={bhkType === "Any"} onClick={() => setBhkType("Any")} />
                                                <FilterButton label="1 BHK" active={bhkType === "1 BHK"} onClick={() => setBhkType("1 BHK")} />
                                                <FilterButton label="2 BHK" active={bhkType === "2 BHK"} onClick={() => setBhkType("2 BHK")} />
                                                <FilterButton label="3 BHK" active={bhkType === "3 BHK"} onClick={() => setBhkType("3 BHK")} />
                                            </div>
                                        </div>

                                        {/* Listed by */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Listed by</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Owner" active={listedBy === "Owner"} onClick={() => setListedBy("Owner")} />
                                                <FilterButton label="Agent" active={listedBy === "Agent"} onClick={() => setListedBy("Agent")} />
                                            </div>
                                        </div>

                                        {/* Bath Type */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Bath Type</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Any" active={bathType === "Any"} onClick={() => setBathType("Any")} />
                                                <FilterButton label="Coman" active={bathType === "Coman"} onClick={() => setBathType("Coman")} />
                                                <FilterButton label="Safe" active={bathType === "Safe"} onClick={() => setBathType("Safe")} />
                                            </div>
                                        </div>

                                        {/* Property Type */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Property Type</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Hotal" active={propertyType === "Hotal"} onClick={() => setPropertyType("Hotal")} />
                                                <FilterButton label="Pg" active={propertyType === "Pg"} onClick={() => setPropertyType("Pg")} />
                                            </div>
                                        </div>

                                        {/* Electricity */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Electricity</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Any" active={electricity === "Any"} onClick={() => setElectricity("Any")} />
                                                <FilterButton label="Include" active={electricity === "Include"} onClick={() => setElectricity("Include")} />
                                            </div>
                                        </div>

                                        {/* Living preference */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm sm:text-base font-bold text-[#1A1E25]">Living preference</p>
                                            <div className="flex flex-wrap gap-2">
                                                <FilterButton label="Any" active={livingPreference === "Any"} onClick={() => setLivingPreference("Any")} />
                                                <FilterButton label="Male" active={livingPreference === "Male"} onClick={() => setLivingPreference("Male")} />
                                                <FilterButton label="Female" active={livingPreference === "Female"} onClick={() => setLivingPreference("Female")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Properties Grid */}
                        <div className="flex-1">
                            {/* Mobile Filter Toggle Button - Right Side (below 768px) */}
                            <div className="md:hidden flex justify-end mb-4">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="px-3 py-2 bg-[#170085] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1.5"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                    {showFilters ? "Hide Filters" : "Show Filters"}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                                {(showAllCards || isLargeScreen ? [...properties, ...properties.slice(0, 3)] : properties.slice(0, 4)).map((item, index) => (
                                    <Link
                                        key={`${item.id}-${index}`}
                                        href="/propertyDetails"
                                        className="w-full bg-white rounded-2xl overflow-hidden block cursor-pointer"
                                    >
                                        <div className="relative w-full h-44 overflow-hidden group">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-110 pointer-events-none"
                                            />

                                            <div className="absolute top-3 right-3 bg-[#272C35] rounded-full p-1.5 shadow pointer-events-none">
                                                <svg width="18" height="18" fill="#ff4b4b" viewBox="0 0 24 24">
                                                    <path d="M12 21s-6-4.35-9-7.97C-1.33 9.33.67 4.67 5 4.07A5.43 5.43 0 0112 7.33 5.43 5.43 0 0119 4.07c4.33.6 6.33 5.26 2 8.96C18 16.65 12 21 12 21z" />
                                                </svg>
                                            </div>

                                            <div className="absolute bottom-3 right-3 bg-[#FCFCFC] text-[var(--textDark)] text-sm font-normal px-2 py-0.5 rounded-full pointer-events-none">
                                                1 / 11
                                            </div>
                                        </div>

                                        <div className="p-4 pt-2 flex flex-col">
                                            <div className="flex justify-between">
                                                <h3 className="font-bold text-base text-[var(--textDark)] mb-0">
                                                    {item.title}
                                                </h3>

                                                <div className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FBBF24" viewBox="0 0 24 24">
                                                        <path d="M12 .587l3.668 7.568L24 9.748l-6 5.853L19.335 24 12 19.897 4.665 24 6 15.601 0 9.748l8.332-1.593z" />
                                                    </svg>
                                                    <span className="text-xs font-normal text-[var(--textDark)]">
                                                        {item.rating}
                                                    </span>
                                                    <span className="text-xs text-[#7D7F88] font-normal">
                                                        ({item.reviews})
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <p className="text-[var(--textDark)] font-bold text-lg mb-0">
                                                    ${item.price}{" "}
                                                    <span className="text-[#7D7F88] text-xs font-semibold">
                                                        / month
                                                    </span>
                                                </p>

                                                <p className="text-[#7D7F88] font-semibold text-sm mb-0">
                                                    {item.type}
                                                </p>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex flex-col">
                                                    <p className="text-black text-sm font-semibold mb-0">
                                                        {item.category}
                                                    </p>
                                                    <p className="text-[#00B31D] text-sm font-bold mb-0">
                                                        {item.availability}{" "}
                                                        <span className="text-[#7D7F88] text-xs">{item.date}</span>
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-2 pointer-events-none">
                                                    <div className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center">
                                                        <Image src="/assets/images/svg/whatsapp.svg" width={14} height={14} alt="whatsapp" />
                                                    </div>
                                                    <div className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center">
                                                        <Image src="/assets/images/svg/call-icon.svg" width={14} height={14} alt="phone" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* View More Button - Only show below 992px */}
                            {!showAllCards && (
                                <div className="lg:hidden flex justify-center mt-8">
                                    <button
                                        onClick={() => setShowAllCards(true)}
                                        className="px-6 py-2 bg-[#170085] text-white rounded-lg text-sm font-medium hover:bg-[#1a0099] transition-colors"
                                    >
                                        View More
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
