import { useSwipeable } from "react-swipeable";
import { useState } from "react";

const useSwipeableNavigation = (items, activeIndex, setActiveIndex) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (index) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const nextIndex = (activeIndex + 1) % items.length;
      handleChange(nextIndex);
    },
    onSwipedRight: () => {
      const prevIndex = (activeIndex - 1 + items.length) % items.length;
      handleChange(prevIndex);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return { swipeHandlers, isAnimating, handleChange };
};

export default useSwipeableNavigation;
