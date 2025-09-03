'use client';

import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 sm:gap-20 lg:gap-24">
          {/* First Section - Title + Video */}
          <div className="flex flex-col items-center gap-16 sm:gap-20 lg:gap-24 w-full max-w-[876px]">
            {/* Text Content */}
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-[#0B0A0A] font-black text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[46px] text-center max-w-[584px]">
                  Qui se cache derrière les expériences mémorables ?
                </h2>
                <p className="text-[#0B0A0A] font-normal text-sm sm:text-base lg:text-[15px] leading-relaxed sm:leading-[26px] text-center max-w-[552px] opacity-90">
                  Nous mettons notre expertise au service de ceux qui veulent raconter une histoire différente. Avec le digital comme levier, nous donnons vie aux lieux, aux événements et aux émotions.
                </p>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="w-full max-w-[808px] h-[300px] sm:h-[350px] lg:h-[400px] bg-[#D9D9D9] border border-[#E1E4ED] rounded-[10px] flex items-center justify-center">
              <div className="relative w-[96.35px] h-[96.35px]">
                {/* Circle Background */}
                <div className="absolute w-full h-full bg-[#F1F3F7] rounded-full"></div>
                {/* Play Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30.49px] h-[30.49px] bg-[#6D758F] rounded-sm rotate-90"></div>
              </div>
            </div>
          </div>

          {/* Second Section - Title + Service Cards */}
          <div className="flex flex-col items-center gap-16 sm:gap-20 lg:gap-24 w-full">
            {/* Text Content */}
            <div className="flex flex-col items-center gap-8 w-full max-w-[876px]">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-[#0B0A0A] font-black text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[46px] text-center max-w-[744px]">
                  Une vision 360° : tourisme, événements, digital — tout se relie.
                </h2>
                <p className="text-[#0B0A0A] font-normal text-sm sm:text-base lg:text-[15px] leading-relaxed sm:leading-[26px] text-center max-w-[552px] opacity-90">
                  Chez Casa Expérience, on ne se contente pas d'être bons dans plusieurs domaines. On fait converger ces expertises pour créer quelque chose d'unique : des expériences humaines, amplifiées par le digital.
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="w-full max-w-[1152px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5">
              {/* Service Card 1 - Orange */}
              <div className="w-full h-[286px] bg-[#F4A409] border border-[#F4A409] rounded-[10px] p-5 flex flex-col items-end gap-3">
                <div className="w-full flex flex-col gap-3">
                  {/* Header with number and arrow */}
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-[#0B0A0A] font-black text-2xl sm:text-3xl lg:text-[44px] leading-[130%] tracking-[-0.02em] uppercase">
                      o1
                    </span>
                    <div className="w-10 h-10 border border-[#0B0A0A] rounded border-opacity-30 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#0B0A0A] rotate-45"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-bold text-base sm:text-lg lg:text-[18px] leading-[150%]">
                    Expertise sectorielle
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#0B0A0A] font-normal text-sm sm:text-base lg:text-[15px] leading-[150%] opacity-70">
                    On comprend les enjeux du tourisme et de l'événementiel. Notre approche est ancrée dans le terrain, la culture locale et les attentes des visiteurs.
                  </p>
                </div>
              </div>

              {/* Service Card 2 - White */}
              <div className="w-full h-[286px] bg-white border border-[#EFEFEF] rounded-[10px] p-5 flex flex-col items-end gap-3">
                <div className="w-full flex flex-col gap-3">
                  {/* Header with number and arrow */}
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-[#0B0A0A] font-black text-2xl sm:text-3xl lg:text-[44px] leading-[130%] tracking-[-0.02em] uppercase">
                      o2
                    </span>
                    <div className="w-10 h-10 border border-[#0B0A0A] rounded border-opacity-30 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#0B0A0A] rotate-45"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-bold text-base sm:text-lg lg:text-[18px] leading-[150%]">
                    Approche globale
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#0B0A0A] font-normal text-sm sm:text-base lg:text-[15px] leading-[150%] opacity-70">
                    De l'idée à la réalisation, on imagine des expériences complètes : physique ET digitale, stratégique ET opérationnelle.
                  </p>
                </div>
              </div>

              {/* Service Card 3 - White */}
              <div className="w-full h-[286px] bg-white border border-[#EFEFEF] rounded-[10px] p-5 flex flex-col items-end gap-3">
                <div className="w-full flex flex-col gap-3">
                  {/* Header with number and arrow */}
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-[#0B0A0A] font-black text-2xl sm:text-3xl lg:text-[44px] leading-[130%] tracking-[-0.02em] uppercase">
                      o3
                    </span>
                    <div className="w-10 h-10 border border-[#0B0A0A] rounded border-opacity-30 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#0B0A0A] rotate-45"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-bold text-base sm:text-lg lg:text-[18px] leading-[150%]">
                    Innovation accessible
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#0B0A0A] font-normal text-sm sm:text-base lg:text-[15px] leading-[150%] opacity-70">
                    On utilise des technologies modernes (sites interactifs, réalité augmentée, applications mobiles…) tout en gardant une simplicité d'usage.
                  </p>
                </div>
              </div>

              {/* Service Card 4 - White */}
              <div className="w-full h-[286px] bg-white border border-[#EFEFEF] rounded-[10px] p-5 flex flex-col items-end gap-3">
                <div className="w-full flex flex-col gap-3">
                  {/* Header with number and arrow */}
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-[#0B0A0A] font-black text-2xl sm:text-3xl lg:text-[44px] leading-[130%] tracking-[-0.02em] uppercase">
                      o4
                    </span>
                    <div className="w-10 h-10 border border-[#0B0A0A] rounded border-opacity-30 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#0B0A0A] rotate-45"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#0B0A0A] font-bold text-base sm:text-lg lg:text-[18px] leading-[150%]">
                    Engagement humain
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#0B0A0A] font-normal text-sm sm:text-base lg:text-[15px] leading-[150%] opacity-70">
                    Chaque projet est unique. On travaille main dans la main avec les acteurs locaux pour co-créer des expériences authentiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
