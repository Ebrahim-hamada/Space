import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const useTechnologySwipe = (items, activeIndex, onChange, windowWidth) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (index) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    onChange(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (windowWidth <= 1024) {
        const nextIndex = (activeIndex + 1) % items.length;
        handleChange(nextIndex);
      }
    },
    onSwipedRight: () => {
      if (windowWidth <= 1024) {
        const prevIndex = (activeIndex - 1 + items.length) % items.length;
        handleChange(prevIndex);
      }
    },
    onSwipedUp: () => {
      if (windowWidth > 1024) {
        const nextIndex = (activeIndex + 1) % items.length;
        handleChange(nextIndex);
      }
    },
    onSwipedDown: () => {
      if (windowWidth > 1024) {
        const prevIndex = (activeIndex - 1 + items.length) % items.length;
        handleChange(prevIndex);
      }
    },
    delta: 30,
    trackTouch: true,
    trackMouse: true,
  });

  return { swipeHandlers, isAnimating };
};

export default useTechnologySwipe;