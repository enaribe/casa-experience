'use client';

import React from 'react';

const ServicesCards: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1152px] mx-auto bg-white border border-[#E1E4ED] rounded-[25px] shadow-[0px_0px_12px_rgba(0,0,0,0.1)] p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[70px]">
            {/* Headings */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-[128px]">
              {/* Title */}
              <h2 className="text-[#1D1A15] font-extrabold text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[50px] max-w-[504px]">
                Nous transformons vos idées en émotions
              </h2>
              
              {/* Paragraph */}
              <p className="text-[#383434] font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] max-w-[393px]">
                Nous donnons vie à vos concepts avec une approche humaine, créative et technologique.
              </p>
            </div>

            {/* Cards Row */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-6">
              {/* Card 1 - Tourisme */}
              <div className="flex-1 bg-white rounded-lg p-6 flex flex-col gap-2.5">
                <div className="flex flex-col gap-2.5">
                  {/* Image */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                  
                  {/* Spacer */}
                  <div className="w-6 h-6"></div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-extrabold text-lg sm:text-xl lg:text-[20px] leading-[28px]">
                    Tourisme
                  </h3>
                  
                  {/* Spacer */}
                  <div className="w-4 h-4"></div>
                  
                  {/* Description */}
                  <p className="text-[#383434] font-normal text-sm sm:text-base lg:text-[16px] leading-[26px]">
                    Création d'expériences touristiques sur mesure et immersives, mettant en valeur le patrimoine local grâce à des parcours scénarisés.
                  </p>
                  
                  {/* Spacer */}
                  <div className="w-6 h-6"></div>
                  
                  {/* Link Button */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[rgba(247,178,44,0.25)] rounded w-fit">
                    <span className="text-[#4E4949] font-medium text-sm sm:text-base lg:text-[16px] leading-[22px]">
                      Contactez-nous
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path
                        d="M5.25 3.75L12.75 11.25M12.75 11.25H5.25M12.75 11.25V3.75"
                        stroke="#4E4949"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="hidden lg:block w-0 h-[331px] border-l-2 border-[#EFEFEF] rounded-[25px]"></div>

              {/* Card 2 - Événementiel */}
              <div className="flex-1 bg-white rounded-lg p-6 flex flex-col gap-2.5">
                <div className="flex flex-col gap-2.5">
                  {/* Image */}
                  <div className="w-[104px] h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
                  
                  {/* Spacer */}
                  <div className="w-6 h-6"></div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-extrabold text-lg sm:text-xl lg:text-[20px] leading-[28px]">
                    Événementiel
                  </h3>
                  
                  {/* Spacer */}
                  <div className="w-4 h-4"></div>
                  
                  {/* Description */}
                  <p className="text-[#383434] font-normal text-sm sm:text-base lg:text-[16px] leading-[26px]">
                    Organisation, scénographie et communication d'événements uniques, on transforme chaque événement en moment mémorable.
                  </p>
                  
                  {/* Spacer */}
                  <div className="w-6 h-6"></div>
                  
                  {/* Link Button */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[rgba(247,178,44,0.25)] rounded w-fit">
                    <span className="text-[#4E4949] font-medium text-sm sm:text-base lg:text-[16px] leading-[22px]">
                      Contactez-nous
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path
                        d="M5.25 3.75L12.75 11.25M12.75 11.25H5.25M12.75 11.25V3.75"
                        stroke="#4E4949"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="hidden lg:block w-0 h-[331px] border-l-2 border-[#EFEFEF] rounded-[25px]"></div>

              {/* Card 3 - Studio Digital */}
              <div className="flex-1 bg-white rounded-lg p-6 flex flex-col gap-2.5">
                <div className="flex flex-col gap-2.5">
                  {/* Image */}
                  <div className="w-[70px] h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"></div>
                  
                  {/* Spacer */}
                  <div className="w-6 h-6"></div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-extrabold text-lg sm:text-xl lg:text-[20px] leading-[28px]">
                    Studio Digital
                  </h3>
                  
                  {/* Spacer */}
                  <div className="w-4 h-4"></div>
                  
                  {/* Description */}
                  <p className="text-[#383434] font-normal text-sm sm:text-base lg:text-[16px] leading-[26px]">
                    Création de sites web, conception et développement de solutions digitales essentielles et à fort impact — le tout en un seul service.
                  </p>
                  
                  {/* Spacer */}
                  <div className="w-6 h-6"></div>
                  
                  {/* Link Button */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[rgba(247,178,44,0.25)] rounded w-fit">
                    <span className="text-[#4E4949] font-medium text-sm sm:text-base lg:text-[16px] leading-[22px]">
                      Contactez-nous
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path
                        d="M5.25 3.75L12.75 11.25M12.75 11.25H5.25M12.75 11.25V3.75"
                        stroke="#4E4949"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
