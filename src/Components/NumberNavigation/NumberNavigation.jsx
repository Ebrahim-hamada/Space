import React from 'react';

const NumberNavigation = ({ items, activeIndex, onChange }) => {
  return (
    <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-8">
      {items.map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border flex items-center justify-center text-xl font-bold cursor-pointer transition-all duration-300 ${
            activeIndex === index
              ? "bg-white text-black border-white"
              : "text-white border-white/25 hover:border-white"
          }`}
          aria-label={`View technology ${index + 1}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default NumberNavigation;