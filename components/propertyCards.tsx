"use client";
import { useState, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardsProps {
    activeTab?: number;
}

const PropertyCards = forwardRef<HTMLDivElement, PropertyCardsProps>(
    ({ activeTab = 0 }, ref) => {
        const cards = [
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
            },
            {
                id: 7,
                title: "Elite Greens",
                rating: 4.6,
                reviews: 101,
                price: 870,
                type: "2 BHK, Flat",
                category: "Modern",
                availability: "Available",
                date: "05 Feb, 2024",
                image: "/assets/images/png/property_img7.png"
            },
            {
                id: 8,
                title: "Hilltop Villa",
                rating: 4.9,
                reviews: 156,
                price: 1250,
                type: "Villa",
                category: "Premium",
                availability: "Available",
                date: "28 Mar, 2024",
                image: "/assets/images/png/property_img8.png"
            },
            {
                id: 9,
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
                id: 10,
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
                id: 11,
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
                id: 12,
                title: "Lakeview Apartments",
                rating: 4.3,
                reviews: 84,
                price: 720,
                type: "Studio Room",
                category: "Apartment",
                availability: "Available",
                date: "18 Aug, 2024",
                image: "/assets/images/png/property_img4.png"
            }
        ];

        return (
            <div
                ref={ref}
                className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6"
            >
                {cards.map((item) => (
                    <Link
                        key={item.id}
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
        );
    }
);

PropertyCards.displayName = "PropertyCards";

export default PropertyCards;
