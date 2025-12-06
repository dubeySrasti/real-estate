"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PropertyHeroSection() {
  const router = useRouter();
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center">
      {/* LEFT CONTENT */}
      <div className="col-span-12 lg:col-span-5 h-full">
        <div className="bg-[linear-gradient(to_top,rgba(12,21,55,1)_0%,rgba(12,21,55,0)_50%)] px-5 py-10 sm:p-10 sm:pb-[136px] flex flex-col gap-6 sm:gap-8 h-full">

          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#170085] leading-tight">
              Find The Place To Live
              <span className="text-outline text-[32px] sm:text-[48px] font-bold mx-2 sm:mx-3">Your Dreams</span>
              Easily Here
            </h2>
            <p className="text-[#626687] font-normal text-sm sm:text-base">
              Everything you need about finding your place to live will be here, where it will be easier for you
            </p>
          </div>

          <div className="bg-white rounded-full shadow flex p-1 justify-between w-full sm:max-w-[450px]">
            <div className="gap-2 sm:gap-4 py-2 sm:py-3 pl-3 sm:pl-8 pe-1 flex items-center flex-1 min-w-0">
              <Image
                src="/assets/images/svg/location.svg"
                alt="arrow"
                width={18}
                height={18}
                className="sm:w-6 sm:h-6 flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => router.push('/map')}
              />
              <input
                type="text"
                placeholder="Search for the location you want!"
                className="flex-1 outline-none text-[11px] sm:text-sm font-medium text-[#888B97] min-w-0"
              />
            </div>
            <button className="bg-[#170085] text-white px-3 sm:pe-3 sm:pl-5 py-2 rounded-full gap-1 flex items-center justify-center text-xs sm:text-sm font-semibold whitespace-nowrap flex-shrink-0">
              Search
              <Image
                src="/assets/images/svg/arrowSearch.svg"
                alt="arrow"
                width={18}
                height={18}
                className="sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="col-span-12 md:col-span-7 hidden lg:block h-full">
        <div className="relative h-full overflow-hidden ">

          {/* Background Image */}
          <div className="relative w-full overflow-x-hidden h-full">
            <Image
              src="/assets/images/png/propertyBack_img.png"
              alt="House"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>


          {/* ==== OVERLAY CARDS ==== */}
          <div
            className="
    absolute 
    bottom-[40px]  
    items-center   
    justify-end  
    left-[56%]       
    -translate-x-1/2 
    flex 
    gap-4 
    flex-wrap 
    md:flex-nowrap
    z-20
    px-4
    w-full
  "
          >
            {/* Card 1 */}
            <div
              className="
      bg-white shadow-md rounded-4xl 
      flex items-center gap-4
      transition-all duration-300
      xl:px-6 xl:py-6
      lg:px-5 lg:py-5
      md:px-4 md:py-4
    "
            >
              <div className="flex">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  className="
          rounded-full 
          xl:w-14 xl:h-14
          lg:w-10 lg:h-10
          md:w-10 md:h-10
        "
                />
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="
          rounded-full ml-[-20px]
          xl:w-14 xl:h-14
          lg:w-10 lg:h-10
          md:w-10 md:h-10
        "
                />
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  className="
          rounded-full ml-[-20px]
          xl:w-14 xl:h-14
          lg:w-10 lg:h-10
          md:w-10 md:h-10
        "
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="
        font-bold text-[#170085]
        xl:text-base 
        lg:text-sm 
        md:text-xs
      ">
                  1K+ People
                </p>

                <p className="
        font-normal text-[#68799F]
        xl:text-xs 
        lg:text-[10px] 
        md:text-[10px]
      ">
                  Successfully Getting <br /> Home
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
      bg-white shadow-md rounded-4xl 
      flex items-center gap-4
      transition-all duration-300
      xl:px-6 xl:py-6
      lg:px-5 lg:py-5
      md:px-4 md:py-4
    "
            >
              <img
                src="https://randomuser.me/api/portraits/men/12.jpg"
                className="
        rounded-full
        xl:w-14 xl:h-14
        lg:w-10 lg:h-10
        md:w-10 md:h-10
      "
              />

              <div className="flex flex-col gap-0.5">
                <p className="
        font-bold text-[#170085]
        xl:text-base 
        lg:text-sm 
        md:text-xs
      ">
                  56 Houses
                </p>

                <p className="
        font-normal text-[#68799F]
        xl:text-xs 
        lg:text-[10px] 
        md:text-[10px]
      ">
                  Sold Monthly
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="
      bg-white shadow-md rounded-4xl 
      flex items-center gap-4
      transition-all duration-300
      xl:px-6 xl:py-6
      lg:px-5 lg:py-5
      md:px-4 md:py-4
    "
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="
        rounded-full
        xl:w-14 xl:h-14
        lg:w-10 lg:h-10
        md:w-10 md:h-10
      "
              />

              <div className="flex flex-col gap-0.5">
                <p className="
        font-bold text-[#170085]
        xl:text-base 
        lg:text-sm 
        md:text-xs
      ">
                  4K+
                </p>

                <p className="
        font-normal text-[#68799F]
        xl:text-xs 
        lg:text-[10px] 
        md:text-[10px]
      ">
                  People Looking
                </p>
              </div>
            </div>
          </div>



          {/* extra margin so content niche na chipke */}
          <div className="mt-20"></div>

          {/* Top-left highlight */}
          <div className="absolute top-[29px] left-[200px] w-16 h-23 border-t-4 border-l-4 border-[#EF4444] rounded-tl-xl"></div>

          {/* Right highlight */}
          <div className="absolute top-[97px] right-[150px] w-10 h-24 border-r-4 border-t-4 border-[#F59E0B] rounded-tr-xl"></div>
        </div>
      </div>
    </div>
  );
}
