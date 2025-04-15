import React, { useEffect, useState } from "react";
import desktopBackground from "../../assets/image/technology/background-technology-desktop.jpg";
import tabletBackground from "../../assets/image/technology/background-technology-tablet.jpg";
import mobileBackground from "../../assets/image/technology/background-technology-mobile.jpg";
import VEHICLE from "../../assets/image/technology/image-launch-vehicle-portrait.jpg";
import SPACEPORT from "../../assets/image/technology/image-spaceport-portrait.jpg";
import CAPSULE from "../../assets/image/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(desktopBackground);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 1024) {
        setBackgroundImage(width <= 768 ? mobileBackground : tabletBackground);
      } else {
        setBackgroundImage(desktopBackground);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const technologies = [
    {
      id: 0,
      name: "LAUNCH VEHICLE",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space.",
      imageUrl: VEHICLE,
    },
    {
      id: 1,
      name: "SPACEPORT",
      description: "A spaceport or cosmodrome is a site for launching spacecraft.",
      imageUrl: SPACEPORT,
    },
    {
      id: 2,
      name: "SPACE CAPSULE",
      description: "A space capsule is a crewed spacecraft that uses a blunt-body capsule to reenter Earth's atmosphere.",
      imageUrl: CAPSULE,
    },
  ];

  const handleChangeTechnology = (index) => {
    setActiveTechnology(index);
  };

  const currentTech = technologies[activeTechnology];

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center p-6"
    >
      <div className="flex space-x-4 mb-6">
        {technologies.map((tech, index) => (
          <button
            key={tech.id}
            onClick={() => handleChangeTechnology(index)}
            className={`w-12 h-12 rounded-full border ${
              activeTechnology === index
                ? "bg-white text-black"
                : "text-white border-white/25"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <img
        src={currentTech.imageUrl}
        alt={currentTech.name}
        className="max-w-md mb-6"
      />
      <h2 className="text-3xl mb-4">{currentTech.name}</h2>
      <p className="max-w-xl text-center">{currentTech.description}</p>
    </div>
  );
};

export default Technology;
