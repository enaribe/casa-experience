'use client';

import React from 'react';

const LogoStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#E4E4E4] py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Sub Title */}
        <h2 className="text-[#0B0A0A] font-semibold text-base leading-[22px] text-center">
          Trusted by top-tier teams worldwide
        </h2>

        {/* Logos Wrapper - Horizontal Scrollable */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 min-w-max px-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {/* Netflix Logo 1 */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            {/* Netflix Logo 2 */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            {/* Netflix Logo 3 */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            {/* Netflix Logo 4 */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            {/* Netflix Logo 5 */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            {/* Netflix Logo 6 */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            {/* Additional logos for scrolling effect */}
            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>

            <div className="w-[150px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[#B4B9C9] font-bold text-lg">NETFLIX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
