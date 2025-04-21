import React from 'react';

const DotNavigation = ({ items, activeIndex, onChange }) => {
  return (
    <div className="flex space-x-8 justify-center lg:justify-start my-8 lg:my-0">
      {items.map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            activeIndex === index
              ? "bg-white scale-110"
              : "bg-gray-600 hover:bg-gray-400"
          }`}
          aria-label={`View item ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;