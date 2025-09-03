'use client';

import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1152px] mx-auto bg-[#F7B22C] border border-[#E1E4ED] rounded-[25px] p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-[136px]">
            {/* Text Section */}
            <div className="flex flex-col gap-6 w-full lg:w-[477px]">
              {/* Image */}
              <div className="w-[100px] h-[100px] bg-white rounded-[10px] flex items-center justify-center">
                <div className="w-[88px] h-[88px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
              </div>
              
              {/* Spacer */}
              <div className="w-6 h-6"></div>
              
              {/* Heading */}
              <h2 className="text-[#0B0A0A] font-extrabold text-2xl sm:text-3xl lg:text-[30px] leading-[36px]">
                Chiffres clés mettant en avant nos réalisations
              </h2>
              
              {/* Spacer */}
              <div className="w-6 h-6"></div>
              
              {/* Paragraph */}
              <p className="text-[#1D1A15] font-normal text-sm sm:text-base lg:text-[16px] leading-[24px]">
                Cette section met en avant les chiffres clés qui reflètent nos performances et succès récents. Elle souligne des aspects tels que la satisfaction client, la croissance des revenus et les nouveaux produits lancés, offrant un aperçu des résultats marquants de notre entreprise.
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[22px] w-full lg:w-auto">
              {/* Column 1 */}
              <div className="flex flex-col gap-6 w-full lg:w-[260px]">
                {/* Stat 1 - Satisfaction */}
                <div className="bg-white border border-[#E1E4ED] rounded-[10px] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] p-8 flex flex-col gap-2.5">
                  <div className="flex flex-col items-center gap-4">
                    {/* Big Number */}
                    <div className="text-[#F4A409] font-bold text-3xl sm:text-4xl lg:text-[36px] leading-[40px]">
                      90%
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Heading */}
                    <h3 className="text-[#0B0A0A] font-semibold text-base lg:text-[16px] leading-[22px] text-center">
                      Satisfaction
                    </h3>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Paragraph */}
                    <p className="text-[#6D758F] font-normal text-sm lg:text-[14px] leading-[20px] text-center">
                      Nous priorisons votre satisfaction et nous efforçons de dépasser vos attentes à chaque étape.
                    </p>
                  </div>
                </div>

                {/* Stat 2 - Clients */}
                <div className="bg-white border border-[#E1E4ED] rounded-[10px] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] p-8 flex flex-col gap-2.5">
                  <div className="flex flex-col items-center gap-4">
                    {/* Big Number */}
                    <div className="text-[#F4A409] font-bold text-3xl sm:text-4xl lg:text-[36px] leading-[40px]">
                      57+
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Heading */}
                    <h3 className="text-[#0B0A0A] font-semibold text-base lg:text-[16px] leading-[22px] text-center">
                      Clients
                    </h3>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Paragraph */}
                    <p className="text-[#6D758F] font-normal text-sm lg:text-[14px] leading-[20px] text-center">
                      Nous priorisons votre satisfaction et nous efforçons de dépasser vos attentes à chaque étape.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6 w-full lg:w-[260px] lg:pt-8">
                {/* Stat 3 - Projets informatiques */}
                <div className="bg-[#1D1A15] rounded-[10px] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] p-8 flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-4">
                    {/* Big Number */}
                    <div className="text-[#F4A409] font-bold text-3xl sm:text-4xl lg:text-[36px] leading-[40px]">
                      12+
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Heading */}
                    <h3 className="text-white font-semibold text-base lg:text-[16px] leading-[22px] text-center">
                      Projets informatiques
                    </h3>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Paragraph */}
                    <p className="text-white font-normal text-sm lg:text-[14px] leading-[20px] text-center">
                      Découvrez les détails de notre dernier projet, où l'innovation rencontre l'excellence.
                    </p>
                  </div>
                </div>

                {/* Stat 4 - Membre de l'équipe */}
                <div className="bg-white border border-[#E1E4ED] rounded-[10px] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] p-8 flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-4">
                    {/* Big Number */}
                    <div className="text-[#F4A409] font-bold text-3xl sm:text-4xl lg:text-[36px] leading-[40px]">
                      08+
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Heading */}
                    <h3 className="text-[#0B0A0A] font-semibold text-base lg:text-[16px] leading-[22px] text-center">
                      Membre de l'équipe
                    </h3>
                    
                    {/* Spacer */}
                    <div className="w-4 h-4"></div>
                    
                    {/* Paragraph */}
                    <p className="text-[#6D758F] font-normal text-sm lg:text-[14px] leading-[20px] text-center">
                      Collaborez efficacement avec nos coéquipiers pour atteindre des objectifs communs.
                    </p>
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

export default StatsSection;
