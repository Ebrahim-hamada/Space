import { useState } from "react";
import useResponsiveBackground from "../../hooks/UseResponsiveBackground";
import useSwipeableNavigation from "../../hooks/useSwipeableNavigation";
import usePageHeader from "../../hooks/usePageHeader";
import desktopBackground from "../../assets/image/crew/background-crew-desktop.jpg";
import tabletBackground from "../../assets/image/crew/background-crew-tablet.jpg";
import mobileBackground from "../../assets/image/crew/background-crew-mobile.jpg";
import DOUGLAS from "../../assets/image/crew/image-douglas-hurley.png";
import MARK from "../../assets/image/crew/image-mark-shuttleworth.png";
import VICTOR from "../../assets/image/crew/image-victor-glover.png";
import ANOUSHEH from "../../assets/image/crew/image-anousheh-ansari.png";
import PageTransition from "./../../Components/PageTransition/PageTransition";
import DotNavigation from "../../Components/DotNavigation/DotNavigation";

const Crew = () => {
  const [activeCrewMember, setActiveCrewMember] = useState(0);
  const backgroundImage = useResponsiveBackground(
    desktopBackground,
    tabletBackground,
    mobileBackground
  );

  const crewMembers = [
    {
      id: 0,
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2, the first crewed test flight of the SpaceX Crew Dragon.",
      imageUrl: DOUGLAS,
    },
    {
      id: 1,
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH ",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      imageUrl: MARK,
    },
    {
      id: 2,
      role: "PILOT",
      name: "VICTOR GLOVER",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      imageUrl: VICTOR,
    },
    {
      id: 3,
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      imageUrl: ANOUSHEH,
    },
  ];

  const { swipeHandlers, isAnimating, handleChange } = useSwipeableNavigation(
    crewMembers,
    activeCrewMember,
    setActiveCrewMember
  );

  const currentMember = crewMembers[activeCrewMember];
  const header = usePageHeader("02", "MEET YOUR CREW");

  return (
    <PageTransition>
      <div
        className="min-h-screen text-center lg:text-start text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        {...swipeHandlers}
      >
        <div className="container mx-auto px-6 py-8 max-w-7xl min-h-screen flex flex-col">
          {header}

          <main className="flex-1 flex flex-col lg:flex-row  items-center lg:items-end justify-between gap-8 mt-10 cursor-pointer">
            <div
              className={`w-full lg:w-[35%] order-last h-full flex items-center justify-center transition-all duration-700 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="relative w-full flex justify-center lg:justify-start max-h-[500px]">
                <img
                  src={currentMember.imageUrl}
                  alt={currentMember.name}
                  className="object-contain object-bottom h-auto max-h-[250px] md:max-h-[500px] lg:max-h-[620px] w-[60%] sm:w-[55%] md:w-[50%] lg:w-[100%] transition-all duration-700"
                  style={{
                    clipPath: "inset(0 0 -20% 0)",
                    transformOrigin: "bottom center",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, #0b0e17 0%, transparent 70%)",
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2 z-10`}>
              <div className={`max-w-[500px] mx-auto lg:mx-0 mt-10 lg:mb-50 transition-all duration-700 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}>
                <h2 className="text-gray-400 text-xl tracking-widest md:text-2xl mb-2">
                  {currentMember.role}
                </h2>
                <h3 className="text-4xl md:text-5xl mb-6">
                  {currentMember.name}
                </h3>
                <p className="text-blue-100 ">
                  {currentMember.bio}
                </p>
              </div>

              <DotNavigation 
                items={crewMembers} 
                activeIndex={activeCrewMember}
                onChange={handleChange}
              />
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default Crew;