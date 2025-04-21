import { useState, useEffect } from "react";

export default function useResponsiveBackground(desktop, tablet, mobile) {
  const [backgroundImage, setBackgroundImage] = useState(desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(mobile);
      } else if (window.innerWidth <= 1024) {
        setBackgroundImage(tablet);
      } else {
        setBackgroundImage(desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktop, tablet, mobile]);

  return backgroundImage;
}