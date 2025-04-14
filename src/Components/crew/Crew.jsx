import React, { useEffect, useState } from 'react'
import desktopBackground from "../../assets/image/crew/background-crew-desktop.jpg";
import tabletBackground from "../../assets/image/crew/background-crew-tablet.jpg";
import mobileBackground from "../../assets/image/crew/background-crew-mobile.jpg";
import DOUGLAS from "../../assets/image/crew/image-douglas-hurley.png";
import MARK from "../../assets/image/crew/image-mark-shuttleworth.png";
import VICTOR from "../../assets/image/crew/image-victor-glover.png";
import ANOUSHEH from "../../assets/image/crew/image-anousheh-ansari.png";

const Crew = () => {
    const [activeCrewMember, setActiveCrewMember] = useState(0);
     const [backgroundImage, setBackgroundImage] = useState(desktopBackground);
    
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


  const crewMembers = [
    {
      id: 0,
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2, the first crewed test flight of the SpaceX Crew Dragon.",
      imageUrl: DOUGLAS
    },
    {
      id: 1,
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      imageUrl:MARK
    },
    {
      id: 2,
      role: "PILOT",
      name: "VICTOR GLOVER",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      imageUrl:VICTOR
    },
    {
      id: 3,
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      imageUrl:ANOUSHEH 
    }
  ];

  const currentMember = crewMembers[activeCrewMember];

    
  return (
    <div
      className=" min-h-screen text-white bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
          <div className="min-h-screen text-white overflow-hidden">
      <div className="w-[80%] mx-auto px-6 min-h-[700px] flex flex-col">
        <header className="pt-20 pb-6">
          <div className="flex items-center">
            <span className="text-gray-500 font-bold mr-4">02</span>
            <h1 className="text-xl md:text-2xl tracking-widest">MEET YOUR CREW</h1>
          </div>
        </header>

        <main className="flex-1 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <div className="max-w-xl">
              <h2 className="text-gray-400 text-xl md:text-2xl mb-2">{currentMember.role}</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">{currentMember.name}</h3>
              <p className="text-gray-300 mb-12 leading-relaxed">
                {currentMember.bio}
              </p>
              
              <div className="flex space-x-4 mb-8">
                {crewMembers.map((member, index) => (
                  <button 
                    key={member.id}
                    onClick={() => setActiveCrewMember(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer whitespace-nowrap !rounded-button ${
                      activeCrewMember === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`View ${member.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-[30%] h-full flex items-end justify-center overflow-visible">
  <div className="relative w-full h-full max-h-[700px] overflow-visible">
    <img
      src={currentMember.imageUrl}
      alt={currentMember.name}
      className="object-contain object-bottom h-full w-full floating-img"
      style={{
        clipPath: 'inset(0 0 -20% 0)',
        transformOrigin: 'bottom center'
      }}
    />
  </div>
</div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Crew

