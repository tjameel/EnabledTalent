import React from 'react';

const GeometricShapes: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffcf5] p-10">
      <div className="relative w-[500px] h-[600px]">
        {/* 1. Black Outline (Behind Blue) */}
        <div className="absolute top-8 left-8 w-64 h-96 border-2 border-black rounded-[30px] z-0 transform -rotate-3"></div>

        {/* 2. Dark Blue Rectangle */}
        <div className="absolute top-12 left-16 w-64 h-96 bg-[#1e3a5f] rounded-[30px] z-10 transform -rotate-3 shadow-lg"></div>

        {/* 3. White Outline (Overlapping Blue) */}
        <div className="absolute top-64 left-0 w-40 h-24 border-4 border-white rounded-full z-20 transform rotate-12"></div>

        {/* 4. Golden-Yellow "Bell/Tombstone" Shape */}
        <div className="absolute top-0 left-32 w-80 h-96 bg-[#f4c55f] rounded-t-full rounded-b-[30px] z-10 transform rotate-3 flex items-center justify-end pr-8 shadow-md">
          {/* 5. White Curly Bracket */}
          <svg
            width="80"
            height="180"
            viewBox="0 0 100 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white z-20"
          >
            <path
              d="M90 10 C 60 10, 50 60, 20 100 C 50 140, 60 190, 90 190"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M20 100 L 5 100"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 6. Black Outline (Right of Blue) */}
        <div className="absolute top-72 left-64 w-48 h-64 border-2 border-black rounded-[20px] z-0"></div>

        {/* 7. Top-Right Starburst & Rectangle */}
        <div className="absolute -top-8 right-0 z-30 flex items-start">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-black mr-1">
            <path d="M25 0 L 30 18 L 48 20 L 32 30 L 38 48 L 25 35 L 12 48 L 18 30 L 2 20 L 20 18 Z" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="w-20 h-10 bg-[#f7c5b9] border-2 border-black rounded-sm transform -rotate-6"></div>
        </div>

        {/* 8. Bottom-Right Wavy Line */}
        <div className="absolute bottom-24 right-10 z-30">
          <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
            <path d="M0 10 Q 15 0, 30 10 T 60 10 T 90 10 T 120 10" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* 9. Bottom Black Outline */}
        <div className="absolute -bottom-8 left-24 w-64 h-16 border-2 border-black rounded-[20px] z-0"></div>

      </div>
    </div>
  );
};

export default GeometricShapes;