import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import useResponsiveBackground from "../../hooks/useResponsiveBackground";
import usePageHeader from "../../hooks/usePageHeader";
import desktopBackground from "../../assets/image/technology/background-technology-desktop.jpg";
import tabletBackground from "../../assets/image/technology/background-technology-tablet.jpg";
import mobileBackground from "../../assets/image/technology/background-technology-mobile.jpg";
import VEHICLE from "../../assets/image/technology/image-launch-vehicle-portrait.jpg";
import SPACEPORT from "../../assets/image/technology/image-spaceport-portrait.jpg";
import CAPSULE from "../../assets/image/technology/image-space-capsule-portrait.jpg";
import PageTransition from "../../Components/PageTransition/PageTransition";
import NumberNavigation from "../../Components/NumberNavigation/NumberNavigation";

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);
  const backgroundImage = useResponsiveBackground(
    desktopBackground,
    tabletBackground,
    mobileBackground
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const technologies = [
    {
      id: 0,
      name: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imageUrl: VEHICLE,
    },
    {
      id: 1,
      name: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      imageUrl: SPACEPORT,
    },
    {
      id: 2,
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imageUrl: CAPSULE,
    },
  ];

  const handleChangeTechnology = (index) => {
    if (index === activeTechnology || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTechnology(index);
      setIsAnimating(false);
    }, 300);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (windowWidth <= 1024) {
        const nextIndex = (activeTechnology + 1) % technologies.length;
        handleChangeTechnology(nextIndex);
      }
    },
    onSwipedRight: () => {
      if (windowWidth <= 1024) {
        const prevIndex =
          (activeTechnology - 1 + technologies.length) % technologies.length;
        handleChangeTechnology(prevIndex);
      }
    },
    onSwipedUp: () => {
      if (windowWidth > 1024) {
        const nextIndex = (activeTechnology + 1) % technologies.length;
        handleChangeTechnology(nextIndex);
      }
    },
    onSwipedDown: () => {
      if (windowWidth > 1024) {
        const prevIndex =
          (activeTechnology - 1 + technologies.length) % technologies.length;
        handleChangeTechnology(prevIndex);
      }
    },
    delta: 30,
    trackTouch: true,
    trackMouse: true,
  });

  const currentTech = technologies[activeTechnology];
  const header = usePageHeader("03", "SPACE LAUNCH 101");

  return (
    <PageTransition>
      <div
        {...swipeHandlers}
        className="min-h-screen text-center lg:text-start font text-white bg-cover bg-center bg-no-repeat touch-pan-y"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="lg:w-[80%] mx-auto py-8 max-w-7xl min-h-screen flex flex-col">
          {header}

          <main className="flex-1 flex flex-col lg:flex-row-reverse items-center justify-between gap-8 cursor-pointer">
            <div
              className={`w-full lg:w-[50%] order-first h-full flex items-center justify-center transition-all duration-700 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="relative w-full flex justify-center overflow-visible">
                <img
                  src={currentTech.imageUrl}
                  alt={currentTech.name}
                  className={`w-full 
                  ${
                    windowWidth <= 768
                      ? "h-[300px] object-cover"
                      : windowWidth <= 1024
                      ? "h-[400px] object-cover object-bottom"
                      : "h-[500px] object-contain lg:w-[80%]"
                  }`}
                />
              </div>
            </div>

            <div className="w-[80%] mx-auto lg:w-[45%] z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <NumberNavigation
                  items={technologies}
                  activeIndex={activeTechnology}
                  onChange={handleChangeTechnology}
                />

                <div
                  className={`max-w-[500px] mx-auto lg:mx-0 transition-all duration-700 mt-6 lg:mt-0 ${
                    isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <h2 className="text-gray-400 text-2xl tracking-widest mb-4">
                    THE TERMINOLOGY...
                  </h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                    {currentTech.name}
                  </h3>
                  <p className="text-blue-100 mb-12 leading-relaxed">
                    {currentTech.description}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
};

export default Technology;
