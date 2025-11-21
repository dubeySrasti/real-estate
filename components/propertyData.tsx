"use client";
import Image from "next/image";

export default function PropertyData() {
  const parkingOptions = [
    { name: "Car", icon: "/assets/images/svg/car.svg" },
    { name: "Bike", icon: "/assets/images/svg/bike.svg" },
    { name: "Basement", icon: "/assets/images/svg/basement.svg" },
    { name: "Street", icon: "/assets/images/svg/street.svg" },
  ];
  const mealTypes = [
    { name: "Breakfast", icon: "/assets/images/svg/breakfast.svg" },
    { name: "Lunch", icon: "/assets/images/svg/lunch.svg" },
    { name: "Dinner", icon: "/assets/images/svg/dinner.svg" },
    { name: "Tea/Coffee", icon: "/assets/images/svg/tea.svg" },
    { name: "Snacks", icon: "/assets/images/svg/snacks.svg" },
  ];
  const facilities = [
    { name: "Hospital", icon: "/assets/images/svg/hospital.svg" },
    { name: "Gas stations", icon: "/assets/images/svg/gas.svg" },
    { name: "Mosque", icon: "/assets/images/svg/mosque.svg" },
    { name: "Mall", icon: "/assets/images/svg/bag.svg" },
  ];
  const overviewData = [
    { label: "Room Type", icon: "/assets/images/svg/bed.svg", value: "Separate room" },
    { label: "Bath Type", icon: "/assets/images/svg/bath.svg", value: "Attached" },
    { label: "Timing", icon: "/assets/images/svg/time.svg", value: "6 AM to 7 PM" },
    { label: "Independent", icon: "/assets/images/svg/person.svg", value: "Yes" },
    { label: "Living Preference", icon: "/assets/images/svg/home.svg", value: "Family" },
    { label: "Furniture Type", icon: "/assets/images/svg/furniture.svg", value: "Furnished" },
  ];
  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 px-4 lg:px-10 py-10 bg-white gap-8 lg:gap-[45px]">

      {/* LEFT SECTION */}
      <div className="col-span-12  md:col-span-6 lg:col-span-7 xl:col-span-8">
        <div className="flex flex-col items-start gap-3.5">
          {/* Top Badge */}
          <span className="border border-[#25BA00] text-[#00B31D] text-sm px-3 py-1 rounded-md font-bold">
            Available <span className="text-[#7D7F88] text-xs font-semibold"> 03 Jun, 2024</span>
          </span>

          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold text-black mb-0">
              Entire Bromo mountain view Cabin in Surabaya
            </h1>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-[#0038FF] text-base font-bold cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Malang, Probolinggo</span>
            </div>
          </div>
          {/* Overview Card */}
          <div className="border border-[#94A3B8] rounded-xl p-5 w-full">
            <h2 className="text-xl text-[#1C2B38] font-bold border-b border-b-[#CEDADF] pb-3.5">
              Hotel Overview
            </h2>

            {/* TABLE STYLE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6 text-[15px] mt-3.5">
              {overviewData.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-[var(--textLight)] text-sm font-normal">{item.label}</p>

                  <p className="text-sm font-bold flex items-center gap-1 text-[#1C2B38]">
                    <Image src={item.icon} width={18} height={18} alt={item.label} />
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Meal Type */}
          <div className="w-full flex flex-col gap-3.5 border-b border-b-[#CEDADF] pb-3.5">
            <p className="text-[var(--textDark)] text-lg font-bold">Meal Type</p>

            <div className="flex flex-wrap gap-6">
              {mealTypes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#F9F5FF] text-[#7F56D9] px-2.5 py-1.5 rounded-md text-sm font-semibold text-[var(--textDark)]"
                >
                  <Image src={item.icon} width={18} height={18} alt={item.name} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          {/* Location & Public Fasilities*/}
          <div className="w-full flex flex-col gap-3.5">
            <p className="text-[var(--textDark)] text-lg font-bold">
              Location & Public Facilities
            </p>

            <div className="flex flex-wrap gap-6">
              {facilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#F9F5FF] text-[#7F56D9] px-2.5 py-1.5 rounded-md text-sm font-semibold text-[var(--textDark)]"
                >
                  <Image src={item.icon} width={18} height={18} alt={item.name} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          {/* Map */}
          <div className="w-full space-y-3 flex flex-col gap-3.5">

            <u className="text-sm font-extrabold text-[#7BBCB0] mb-0">
              Open in Google Maps
            </u>

            {/* Google Map */}
            <div className="w-full">
              <Image
                src="/assets/images/png/map.png"
                alt="map"
                width={1400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>


          </div>
          {/* Rental Info */}
          <div className="w-full flex flex-col gap-3.5   border-b border-b-[#CEDADF] pb-3.5">
            <h2 className="text-[var(--textDark)] text-lg font-bold">
              Rental Info
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Security Deposit */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold text-[#1C2B38]">
                  Security Deposit
                </p>
                <p className="flex items-center gap-2.5 text-sm font-semibold text-[#495560]">
                  <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                  ₹ 2,00,000
                </p>
              </div>

              {/* Electricity */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold text-[#1C2B38]">
                  Electricity
                </p>
                <p className="flex items-center gap-2.5 text-sm font-semibold text-[#495560]">
                  <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                  ₹ 10 Per Unit
                </p>
              </div>

              {/* Is Negotiable */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold text-[#1C2B38]">
                  Is Negotiable
                </p>
                <p className="flex items-center gap-2.5 text-sm font-semibold text-[#495560]">
                  <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                  No
                </p>
              </div>

            </div>
          </div>
          {/* Parking*/}
          <div className="w-full flex flex-col gap-3.5 border-b border-b-[#CEDADF] pb-3.5">
            <p className="text-[var(--textDark)] text-lg font-bold">Parking</p>

            <div className="flex flex-wrap gap-6">
              {parkingOptions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#F9F5FF] text-[#7F56D9] px-2.5 py-1.5 rounded-md text-sm font-semibold text-[var(--textDark)]"
                >
                  <Image src={item.icon} width={18} height={18} alt={item.name} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          {/* Documents */}
          <div className="w-full flex flex-col gap-3.5  border-b border-b-[#CEDADF] pb-3.5">
            <h2 className="text-[var(--textDark)] text-lg font-bold">
              Documents
            </h2>

            <ul className="space-y-2 text-sm text-[#495560]">
              <li className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                Aadhar Card
              </li>

              <li className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                Pan Card
              </li>

              <li className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                Voter ID
              </li>

              <li className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-2 h-2 bg-[#495560] rounded-full"></span>
                Driving License
              </li>

              <li className="flex items-center gap-3 text-sm font-semibold">
                <span className="w-2 h-2 bg-[#455A64] rounded-full"></span>
                Passport Size Photo
              </li>
            </ul>
          </div>
          {/* Description */}
          <div className="w-full flex flex-col gap-3.5">
            {/* Heading */}
            <p className="text-[var(--textDark)] text-lg font-bold">
              Description
            </p>

            {/* Description Text */}
            <div className="space-y-4 text-sm font-medium text-[#475467]">
              <p>
                See the highlights of London via 2 classic modes of transport on this half-day adventure.
                First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the
                London Eye, as you meander through the historic streets on board a vintage double decker bus.
              </p>

              <p>
                Continue to see St. Paul's Cathedral, Sir Christopher Wren's architectural masterpiece, where
                Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married.
                Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.
              </p>

              <p>
                Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing
                palace has been used as a fortress and a prison throughout its history. Your guide will take
                you to Traitors Gate, where prisoners entered the Tower for the last time.
              </p>

              <p>
                Next, take a short trip along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle,
                and London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham
                Palace. Make your way to the perfect spot to watch the world-famous Changing of the Guard ceremony
                as the soldiers, dressed in their fabulous tunics and busbies, march to military music.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 custom-right-box">
        <div className="w-full flex flex-col items-center gap-6 py-6">

          {/* Location Card */}
          <div className="w-full bg-white px-6 md:px-8 py-5 rounded-2xl border border-[#E2E8F0] flex flex-col gap-3">
            <p className="text-base font-bold text-[var(--textDark)]">Location</p>

            <div className="bg-[#F4F4F5] py-3 px-5">
              <p className="text-[#495560] text-sm font-semibold">Gulab Bag Colony</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold text-[#778088]">Subtotal</p>
              <p className="text-3xl font-extrabold text-[#170085]">₹785 / Month</p>
            </div>

            <button className="w-full bg-[#170085] text-white py-2.5 rounded-xl font-bold text-xl">
              Rent
            </button>

            <button className="w-full border border-[#E2E8F0] py-2.5 rounded-xl text-[#778088] text-base font-semibold flex justify-center gap-2">
              <Image src="/assets/images/svg/share.svg" width={24} height={24} alt="share" />
              Share The Activity
            </button>
          </div>

          {/* Agent Card */}
          <div className="w-full py-8 px-6 md:px-10 rounded-2xl border border-[#E2E8F0] flex flex-col items-center gap-5">
            <Image
              src="/assets/images/svg/avtar.svg"
              width={74}
              height={74}
              alt="Profile"
              className="rounded-full object-cover aspect-square"
            />

            <div className="text-center">
              <p className="text-lg font-bold text-black">Fisher Aliston</p>
              <p className="text-[#65676B] text-sm font-semibold">Sales Training Consultant</p>
            </div>

            <div className="flex w-full gap-3">
              <button className="flex-1 bg-[#170085] text-white py-1.5 text-sm font-semibold flex items-center justify-center gap-1.5 rounded-full">
                <Image src="/assets/images/svg/phone_card.svg" width={18} height={18} alt="call" className="invert brightness-0" />
                Call
              </button>

              <button className="flex-1 border border-[#E2E8F0] py-1.5 text-[#718096] text-sm font-semibold flex items-center justify-center gap-1.5 rounded-full">
                <Image src="/assets/images/svg/uil-comment.svg" width={18} height={18} alt="whatsapp" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full rounded-2xl border border-[#E2E8F0] py-5 px-6 flex flex-col gap-4">
            <p className="font-bold text-base text-[var(--textDark)] border-b pb-3">Contact Info</p>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#F7F3FF] rounded-full flex items-center justify-center">
                <Image src="/assets/images/svg/call.svg" width={24} height={24} alt="call" />
              </div>

              <div>
                <p className="text-sm font-medium text-[#ABAFB1]">Alternative Number</p>
                <p className="font-bold text-sm text-[var(--textDark)]">+91 91234 56789</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#F7F3FF] rounded-full flex items-center justify-center">
                <Image src="/assets/images/svg/message.svg" width={24} height={24} alt="email" />
              </div>

              <div>
                <p className="text-sm font-medium text-[#ABAFB1]">Email</p>
                <p className="font-bold text-sm text-[var(--textDark)]">shoprentals.indore@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
