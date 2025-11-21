"use client";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white text-white pt-40 overflow-hidden">

      <div className="footer-background-img pt-2 sm:pt-34 pb-10">

        {/* Top Right Circular Image */}
        <div
          className="
        absolute
        z-20
        /* MOBILE */
        w-[260px]
        top-[70px]
        right-[-96px]

        /* TABLET */
        sm:w-[360px]
        sm:top-10
        sm:right-0

        /* SMALL LAPTOP */
        md:w-[420px]
        md:top-6
        md:right-0

        /* LARGE SCREEN */
        lg:w-[500px]
        lg:top-0
        lg:right-0

        /* EXTRA LARGE */
        xl:w-[532px]
        xl:top-0
        xl:right-0
      "
        >
          <Image
            src="/assets/images/png/footer_img.png"
            alt="Footer Circle"
            width={560}
            height={560}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Main Content (FULL WIDTH – NO CONTAINER) */}
        <div
          className="
   w-full             
    px-8 
    md:px-15   
    xl:px-20          
    grid
    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-3
    lg:grid-cols-12
    gap-10
    pt-10
    items-baseline
  "
        >

          {/* LEFT SECTION */}
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5">
            <div className="flex flex-col gap-8">
              <img
                src="/assets/images/svg/footer-logo.svg"
                className="w-56"
                alt="Logo"
              />

              <div className="flex flex-col gap-6">

                {/* APP BUTTONS → always row */}
                <div className="flex gap-3 flex-wrap sm:flex-nowrap app-buttons">
                  <button className="flex gap-4 bg-white py-2 px-6 rounded-full">
                    <img src="/assets/images/svg/apple.svg" className="w-5" />
                    <div className="flex flex-col items-start">
                      <h5 className="text-xs font-normal text-black">Download on the</h5>
                      <h6 className="text-sm font-bold text-black">App Store</h6>
                    </div>
                  </button>

                  <button className="flex gap-4 bg-white py-2 px-6 rounded-full">
                    <img src="/assets/images/svg/google-play.svg" className="w-5" />
                    <div className="flex flex-col items-start">
                      <h5 className="text-xs font-normal text-black">Get in on</h5>
                      <h6 className="text-sm font-bold text-black">Google Play</h6>
                    </div>
                  </button>
                </div>

                <p className="text-[#DEDFEF] text-sm font-light sm:font-normal max-w-xs">
                  We provide information about properties such as houses, villas
                  and apartments to help people find their dream home.
                </p>

              <div className="hidden sm:block">
                  <div className="flex gap-4">
                  <a>
                    <img src="/assets/images/svg/footer_face.svg" className="w-8" alt="facebook" />
                  </a>
                  <a>
                    <img src="/assets/images/svg/footer_twit.svg" className="w-8" alt="twitter" />
                  </a>
                  <a>
                    <img src="/assets/images/svg/footer_inst.svg" className="w-8" alt="instagram" />
                  </a>
                </div>
              </div>

              </div>
            </div>
          </div>

          {/* PROPERTY */}
          <div className="col-span-6 lg:col-span-2 sm:col-span-6 md:col-span-1 flex flex-col gap-6">
            <h4 className="font-semibold text-lg text-white">Property</h4>
            <ul className="text-[#C5CADC] text-sm font-light flex flex-col gap-4">
              <li>House</li>
              <li>Apartment</li>
              <li>Villa</li>
            </ul>
          </div>

          {/* ARTICLE */}
          <div className="col-span-6 sm:col-span-6 md:col-span-1 lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-semibold text-lg text-white">Article</h4>
            <ul className="text-[#C5CADC] text-sm font-light flex flex-col gap-4">
              <li>New Article</li>
              <li>Popular Article</li>
              <li>Most Read</li>
              <li>Tips & Tricks</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-span-10 lg:col-span-3 sm:col-span-12 md:col-span-1 flex flex-col gap-2 sm:gap-6 sm:items-start items-center">
            <h4 className="font-semibold text-lg text-white">Contact</h4>
            <ul className="text-[#C5CADC] text-sm font-light flex flex-col gap-2 sm:gap-4 sm:items-start items-center">
              <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
              <li>(671) 555-0110</li>
              <li>info@hounter.com</li>
            </ul>
            <div className="block sm:hidden">
              <div className="flex gap-4">
                <a>
                  <img src="/assets/images/svg/footer_face.svg" className="w-8" alt="facebook" />
                </a>
                <a>
                  <img src="/assets/images/svg/footer_twit.svg" className="w-8" alt="twitter" />
                </a>
                <a>
                  <img src="/assets/images/svg/footer_inst.svg" className="w-8" alt="instagram" />
                </a>
              </div>
            </div>

          </div>

        </div>


        {/* Bottom Line */}
        <div className="mt-12 border-t border-white/20 pt-4 text-center text-[#C5CADC] font-light text-sm relative z-10">
          © 2024 MY RENTAL. All rights reserved.
        </div>

      </div>
    </footer>

  );
}
