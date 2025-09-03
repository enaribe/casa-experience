'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[630px] bg-[#1D1A15] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] mx-auto mt-4 sm:mt-6 lg:mt-8 overflow-hidden">
                  {/* Background Image Grid - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-[-261px] w-[1028px] h-[626px] transform scale-y-[-1]">
              {/* Frame 1000005854 - Column 1 (left: 0, top: 0) - 3 rectangles */}
              <div className="absolute left-0 top-0 w-[100px] flex flex-col gap-4 transform scale-y-[-1]">
                <div className="w-[100px] h-[132px] bg-white/25 opacity-25 rounded-[15px] transform scale-y-[-1]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-green-400 to-blue-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005855 - Column 2 (left: 116, top: 48) - 3 rectangles */}
              <div className="absolute left-[116px] top-[48px] w-[100px] flex flex-col gap-4 transform scale-y-[-1]">
                <div className="w-[100px] h-[132px] bg-white/25 opacity-25 rounded-[15px] transform scale-y-[-1]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-orange-400 to-red-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-pink-400 to-purple-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005856 - Column 3 (left: 232, top: 114) - 2 rectangles */}
              <div className="absolute left-[232px] top-[114px] w-[100px] flex flex-col gap-4 transform scale-y-[-1]">
                <div className="w-[100px] h-[132px] bg-white/25 opacity-25 rounded-[15px] transform scale-y-[-1]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-teal-400 to-green-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005857 - Column 4 (left: 348, top: 198) - 1 rectangle */}
              <div className="absolute left-[348px] top-[198px] w-[100px] flex flex-col gap-4 transform scale-y-[-1]">
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005858 - Column 5 (left: 464, top: 144) - 1 rectangle (centre) */}
              <div className="absolute left-[464px] top-[144px] w-[100px] flex flex-col gap-4 transform scale-y-[-1]">
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-indigo-400 to-purple-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005862 - Column 6 (left: 580, top: 198) - 1 rectangle */}
              <div className="absolute left-[580px] top-[198px] w-[100px] flex flex-col gap-4 transform rotate-180">
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005861 - Column 7 (left: 696, top: 114) - 2 rectangles */}
              <div className="absolute left-[696px] top-[114px] w-[100px] flex flex-col gap-4 transform rotate-180">
                <div className="w-[100px] h-[132px] bg-white/25 opacity-25 rounded-[15px] transform rotate-180"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005860 - Column 8 (left: 812, top: 48) - 3 rectangles */}
              <div className="absolute left-[812px] top-[48px] w-[100px] flex flex-col gap-4 transform rotate-180">
                <div className="w-[100px] h-[132px] bg-white/25 opacity-25 rounded-[15px] transform rotate-180"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-rose-400 to-pink-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-violet-400 to-purple-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>

              {/* Frame 1000005859 - Column 9 (left: 928, top: 0) - 3 rectangles */}
              <div className="absolute left-[928px] top-0 w-[100px] flex flex-col gap-4 transform rotate-180">
                <div className="w-[100px] h-[132px] bg-white/25 opacity-25 rounded-[15px] transform rotate-180"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-amber-400 to-yellow-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
                <div className="w-[100px] h-[132px] bg-gradient-to-br from-lime-400 to-green-500 rounded-[15px] shadow-[2px_2px_12px_rgba(247,178,44,0.15)]"></div>
              </div>
            </div>

      {/* Content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[536px] px-4 sm:px-6 lg:px-0 h-auto flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8" style={{top: 'calc(50% - 148.5px - 116.5px)'}}>
        {/* Title */}
        <h1 className="w-full text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight sm:leading-[40px] lg:leading-[54px] text-center">
          Créez des expériences touristiques grâce au digital.
        </h1>

        {/* Description */}
        <p className="w-full text-white font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] text-center">
          Nous imaginons et réalisons des moments qui marquent — entre lieux, humains et technologie.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <button className="flex items-center justify-center px-4 sm:px-[18px] py-3 sm:py-[14px] bg-[#F7B22C] rounded-md gap-1 hover:bg-[#F4A409] transition-colors w-full sm:w-auto">
            <span className="text-[#FAFAFA] font-semibold text-sm sm:text-[14px] leading-[20px]">
              Commencer l'aventure
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
            >
              <path
                d="M1.8 1.88L10.2 1.88M10.2 1.88L6.12 5.96M10.2 1.88L6.12 10.12"
                stroke="#FAFAFA"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Secondary Button */}
          <button className="flex items-center justify-center px-4 sm:px-[18px] py-3 sm:py-[15px] border border-[#B4B9C9] rounded-md hover:border-white transition-colors w-full sm:w-auto">
            <span className="text-white font-semibold text-sm sm:text-[14px] leading-[20px]">
              En savoir plus
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
