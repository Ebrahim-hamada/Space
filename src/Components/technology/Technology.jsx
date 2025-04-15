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

  const currentTech = technologies[activeTechnology];

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
    >
      <div>
        <h1>Technology Page</h1>
        <h2>{currentTech.name}</h2>
        <p>{currentTech.description}</p>
      </div>
    </div>
  );
};

export default Technology;
