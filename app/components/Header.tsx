'use client';

import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-[rgba(223,229,236,0.5)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-1.5 w-auto sm:w-[213.22px] h-10 sm:h-12 rounded-md">
            {/* Logo Image */}
            <div className="relative w-32 sm:w-[189.22px] h-5 sm:h-[30.13px]">
              <Image
                src="/images/logo.png"
                alt="CasaExperience Logo"
                width={189}
                height={30}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 w-auto lg:w-[588px] h-10">
          {/* Menu Items */}
          <nav className="flex items-center gap-1 w-auto lg:w-[388px] h-10">
            <a
              href="#"
              className="flex items-center justify-center px-2 lg:px-3 py-2.5 w-auto lg:w-[81px] h-10 rounded text-[#F7B22C] font-semibold text-sm lg:text-[15px] leading-[22px] hover:bg-gray-50 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-2 lg:px-3 py-2.5 w-auto lg:w-[93px] h-10 rounded text-[#0B0A0A] font-semibold text-sm lg:text-[15px] leading-[22px] hover:bg-gray-50 transition-colors"
            >
              À propos
            </a>
            <div className="relative group">
              <a
                href="#"
                className="flex items-center justify-center px-2 lg:px-3 py-2.5 w-auto lg:w-[123px] h-10 rounded text-[#0B0A0A] font-semibold text-sm lg:text-[15px] leading-[22px] hover:bg-gray-50 transition-colors gap-2"
              >
                Services
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M6 9L12 3L0 3L6 9Z"
                    stroke="#0B0A0A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <a
              href="#"
              className="flex items-center justify-center px-2 lg:px-3 py-2.5 w-auto lg:w-[79px] h-10 rounded text-[#0B0A0A] font-semibold text-sm lg:text-[15px] leading-[22px] hover:bg-gray-50 transition-colors"
            >
              Galerie
            </a>
          </nav>

          {/* Contact Button */}
          <button className="flex items-center justify-center px-3 lg:px-[18px] py-[14px] w-auto lg:w-[168px] h-10 bg-white border border-[#F4A409] rounded-md shadow-[0px_1px_4px_rgba(25,33,61,0.08)] hover:shadow-md transition-shadow gap-1">
            <span className="text-[#F4A409] font-semibold text-xs lg:text-[14px] leading-[20px] whitespace-nowrap">
              Contactez-nous
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
                stroke="#F4A409"
                strokeWidth="1.29"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-50 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#0B0A0A]"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
