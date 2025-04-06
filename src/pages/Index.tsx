import { useRef, useEffect, useState } from "react";
import Hero from "../components/landing-page/Hero";
import Features from "../components/landing-page/Features";
import About from "../components/landing-page/About";
import PlatformFeatures from "../components/landing-page/PlatformFeatures";
import FAQ from "../components/landing-page/FAQ";
import StackedSection from "../components/landing-page/StackedSection";
import FooterSection from "../components/landing-page/FooterSection";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState([]);
  const [heroHeight, setHeroHeight] = useState(0);
  const [stackedSectionHeight, setStackedSectionHeight] = useState(0);
  const [canAnimateAbout, setCanAnimateAbout] = useState(false);

  // Get references to all sections after component mounts
  useEffect(() => {
    if (containerRef.current) {
      setSections(Array.from(containerRef.current.children));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSectionPosition = heroHeight + stackedSectionHeight; // Position of About section
      const triggerOffset = window.innerHeight * 0.5; // Trigger animation when section is halfway into view

      // Check if we're approaching the About section
      if (scrollPosition + window.innerHeight > aboutSectionPosition + triggerOffset) {
        setCanAnimateAbout(true);
      } else {
        setCanAnimateAbout(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroHeight, stackedSectionHeight]);

  const updateStackedSectionHeight = (newHeight) => {
    if (newHeight !== stackedSectionHeight) {
      setStackedSectionHeight(newHeight);
    }
  }

  // Calculate total scroll height (Hero section + each additional section)
  const totalHeight = heroHeight + (sections.length - 1) * stackedSectionHeight;


  const handleSectionClick = (index: number) => {
    window.scrollTo({
      top: heroHeight + (index - 1) * stackedSectionHeight,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'features') {
      handleSectionClick(1);
    } else if (sectionId === 'about') {
      handleSectionClick(2);
    }
  }

  return (
    <div 
      ref={containerRef} 
      className="relative bg-primary-light"
      style={{ height: totalHeight }}
    >
      {/* Hero section with highest z-index */}

      <Hero setHeroHeight={setHeroHeight} onSectionClick={scrollToSection} />

      {/* Remaining sections with scroll animations */}
      {[
        <Features />,
        <About canAnimate={canAnimateAbout} />,
        // <PlatformFeatures />,
        <FAQ />,
        <FooterSection />
      ].map((section, index) => (
        <StackedSection key={index} index={index + 1} heroHeight={heroHeight} updateStackedSectionHeight={updateStackedSectionHeight}>
          {section}
        </StackedSection>
      ))}
    </div>
  );
};

export default Index;