import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import desktopBackground from "../../assets/image/crew/background-crew-desktop.jpg";
import tabletBackground from "../../assets/image/crew/background-crew-tablet.jpg";
import mobileBackground from "../../assets/image/crew/background-crew-mobile.jpg";
import DOUGLAS from "../../assets/image/crew/image-douglas-hurley.png";
import MARK from "../../assets/image/crew/image-mark-shuttleworth.png";
import VICTOR from "../../assets/image/crew/image-victor-glover.png";
import ANOUSHEH from "../../assets/image/crew/image-anousheh-ansari.png";
import PageTransition from "../PageTransition/PageTransition";

const Crew = () => {
  const [activeCrewMember, setActiveCrewMember] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(desktopBackground);
  const [fade, setFade] = useState(false);

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
      imageUrl: DOUGLAS,
    },
    {
      id: 1,
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
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

  const handleChangeMember = (index) => {
    if (index === activeCrewMember) return;
    setFade(true);
    setTimeout(() => {
      setActiveCrewMember(index);
      setFade(false);
    }, 300);
  };

  // swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const nextIndex = (activeCrewMember + 1) % crewMembers.length;
      handleChangeMember(nextIndex);
    },
    onSwipedRight: () => {
      const prevIndex =
        (activeCrewMember - 1 + crewMembers.length) % crewMembers.length;
      handleChangeMember(prevIndex);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentMember = crewMembers[activeCrewMember];

  return (
    <PageTransition>
      <div
        className="min-h-screen text-center lg:text-start text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        {...swipeHandlers}
      >
        <div className="container mx-auto px-6 py-8 max-w-7xl min-h-screen flex flex-col">
          <div className="mt-20">
            <div className="flex justify-center lg:justify-start items-center space-x-4">
              <span className="text-[#4D4D56] font-bold text-2xl">02</span>
              <h1 className="text-xl tracking-[1.75px] lg:text-xl lg:tracking-[4.75px] text-white">
                MEET YOUR CREW
              </h1>
            </div>
          </div>

          <main className="flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
            <div
              className={`w-full lg:w-[35%] order-last lg:order-last h-full flex items-center justify-center transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="relative w-full h-full flex justify-center lg:justify-start lg:right-25 max-h-[900px]  overflow-visible">
                <img
                  src={currentMember.imageUrl}
                  alt={currentMember.name}
                  className="object-contain object-bottom h-full  w-full md:w-[50%] lg:w-[90%] floating-img"
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

            <div className="w-full lg:w-1/2 z-10">
              <div
                className={`max-w-[500px] mx-auto lg:mx-0 transition-opacity duration-300 mt-10 lg:mb-50 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <h2 className="text-gray-400 text-xl md:text-2xl mb-2">
                  {currentMember.role}
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {currentMember.name}
                </h3>
                <p className="text-blue-100 mb-12 leading-relaxed">
                  {currentMember.bio}
                </p>
              </div>

              {/* نقاط التحكم */}
              <div className="flex space-x-8 justify-center lg:justify-start my-8 lg:my-0">
                {crewMembers.map((member, index) => (
                  <button
                    key={member.id}
                    onClick={() => handleChangeMember(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ${
                      activeCrewMember === index
                        ? "bg-white scale-110"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`View ${member.name}`}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default Crew;
