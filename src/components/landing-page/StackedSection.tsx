import { useState, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

// Component for each stacked section
const StackedSection = ({ children, index, heroHeight, updateStackedSectionHeight }) => {
  const [isFixed, setIsFixed] = useState(true);
  const [stackedSectionHeight, setStackedSectionHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  // Adjust trigger points to start after hero section
  const triggerStart = heroHeight + (index - 1) * stackedSectionHeight;
  const triggerEnd = triggerStart + stackedSectionHeight;
  
  useEffect(() => {
    if (ref.current) {
      setStackedSectionHeight(ref.current?.offsetHeight);
      updateStackedSectionHeight(ref.current?.offsetHeight);
    }
  }, []);
  
  const y = useTransform(
    scrollY,
    [triggerStart, triggerEnd],
    ["0vh", "-100vh"],
    {
      clamp: false // Allow smooth transitions
    }
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < triggerStart && !isFixed) {
      setIsFixed(true);
    } else if (latest > triggerStart && isFixed) {
      setIsFixed(false);
    }
  })

  return (
    <motion.section
      ref={ref}
      className="w-screen h-screen overflow-hidden bg-primary-light fixed top-0 left-0 rounded-b-[100px]"
      style={{ 
        zIndex: 40 - index, // Lower z-index than Hero but still layered properly
        ...(!isFixed ? {
          y,
        } : {})
      }}
    >
      {children}
    </motion.section>
  );
};

export default StackedSection;