import React, { useEffect, useState } from 'react';
import './Destination.css'
import desktopBackground from "../../assets/image/destination/background-destination-desktop.jpg";
import tabletBackground from "../../assets/image/destination/background-destination-tablet.jpg";
import mobileBackground from "../../assets/image/destination/background-destination-mobile.jpg";
import moon from "../../assets/image/destination/image-moon.png";
import mars from "../../assets/image/destination/image-mars.png";
import europa from "../../assets/image/destination/image-europa.png";
import titan from "../../assets/image/destination/image-titan.png";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState('MOON');
  const [backgroundImage, setBackgroundImage] = useState(desktopBackground); // تصحيح خطأ كتابة desktop
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(mobileBackground);
      } else if (window.innerWidth <= 1024) {
        setBackgroundImage(tabletBackground);
      } else {
        setBackgroundImage(desktopBackground);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const destinations = {
    MOON: {
      title: 'MOON',
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: '384,400 KM',
      estTravelTime: '3 DAYS',
      image: moon // إزالة الأقواس المعقوفة
    },
    MARS: {
      title: 'MARS',
      description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      avgDistance: '225 MIL. KM',
      estTravelTime: '9 MONTHS',
      image: mars // إزالة الأقواس المعقوفة
    },
    EUROPA: {
      title: 'EUROPA',
      description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\'s dream. With an icy surface, it\'s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      avgDistance: '628 MIL. KM',
      estTravelTime: '3 YEARS',
      image: europa // إزالة الأقواس المعقوفة
    },
    TITAN: {
      title: 'TITAN',
      description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      avgDistance: '1.6 BIL. KM',
      estTravelTime: '7 YEARS',
      image: titan // إزالة الأقواس المعقوفة
    }
  };

  const currentDest = destinations[activeDestination];

  return (
    <div 
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-6 py-8 max-w-7xl min-h-screen flex flex-col">
        <div className="mt-20">
          <div className="flex items-center space-x-4">
            <span className="text-[#4D4D56] font-bold text-2xl">01</span>
            <h1 className="text-2xl tracking-[4.75px] text-white">PICK YOUR DESTINATION</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 flex-grow mt-12">
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={currentDest.image} 
              alt={currentDest.title}
              className="w-full max-w-[445px] h-auto object-contain animate-fade-in"
            />
          </div>

          <div className="lg:w-1/2 max-w-[445px] text-white text-center lg:text-start">
            <div className="flex space-x-8 mb-8">
              {Object.keys(destinations).map((dest) => (
                <button 
                  key={dest}
                  onClick={() => setActiveDestination(dest)}
                  className={`pb-2 text-base tracking-[2.7px] cursor-pointer whitespace-nowrap ${
                    activeDestination === dest 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-[#D0D6F9] border-b-2 border-transparent hover:border-gray-500'
                  }`}
                >
                  {dest}
                </button>
              ))}
            </div>

            <h2 className="text-[80px] md:text-[100px] font-normal leading-none mb-4">
              {currentDest.title}
            </h2>
            
            <p className="text-[#D0D6F9] leading-relaxed mb-12 text-lg">
              {currentDest.description}
            </p>

            <div className="pt-8 border-t border-[#383B4B]">
              <div className="flex flex-col sm:flex-row justify-start gap-8 sm:gap-16">
                <div>
                  <span className="block text-[#D0D6F9] text-sm tracking-[2.35px] mb-3">AVG. DISTANCE</span>
                  <span className="block text-2xl text-white">{currentDest.avgDistance}</span>
                </div>
                <div>
                  <span className="block text-[#D0D6F9] text-sm tracking-[2.35px] mb-3">EST. TRAVEL TIME</span>
                  <span className="block text-2xl text-white">{currentDest.estTravelTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;