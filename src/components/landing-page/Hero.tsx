
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/svg/hero-bg.svg";
import heroIllustration from "@/assets/svg/hero-illustration.svg";
import illustration from "@/assets/svg/illustration.svg";
import illustrationHand from "@/assets/svg/illustration-hand.svg";
import atoms from "@/assets/svg/atoms.svg";
import paperPlane from "@/assets/svg/paper-plane.svg";
import Steps from "./Steps";

type HeroProps = {
  setHeroHeight: (height: number) => void;
  onSectionClick: (sectionId: string) => void;
};

const Hero = ({ setHeroHeight, onSectionClick }: HeroProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const slidingTexts = [
    "Powered by AI",
    "Driven by Innovation",
    "Built for Success",
    "Designed for Growth"
  ];

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        setHeroHeight(ref.current.offsetHeight);
      }
    });
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % slidingTexts.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const getSectionClickHandler = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onSectionClick(sectionId);
  };

  return (
    <section 
      ref={ref}
      className="min-h-[120vh] overflow-hidden relative rounded-b-[100px] z-50"
      style={{
        background: "linear-gradient(135deg, #008080 0%, #00A3A3 100%)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <nav className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-4xl font-semibold text-white">
              AkquaintX
            </Link>
            <div className="flex items-center gap-8">
              <a 
                href="#features" 
                onClick={getSectionClickHandler('features')}
                className="text-white hover:text-white/80 transition-colors"
              >
                Features
              </a>
              <a 
                href="#about" 
                onClick={getSectionClickHandler('about')}
                className="text-white hover:text-white/80 transition-colors"
              >
                About
              </a>
              <Link to="/auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-body font-medium transition-colors tracking-[1px] text-sm"
                >
                  SIGN UP
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pt-12 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          > 
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-[1.5px] !leading-[1.2] mb-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Connect with the Right Audience
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block text-primary font-light text-4xl sm:text-4xl lg:text-6xl !leading-[1.2]"
              >
                {slidingTexts[currentTextIndex]}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-xl text-lg sm:text-xl text-white/90 mb-10"
            >
              AkquaintX connects businesses with their ideal audience for research,
              testing, and insights. Discover the power of AI-driven collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full bg-primary hover:bg-primary-light text-body font-medium transition-colors w-full sm:min-w-[180px] tracking-[1px]"
                >
                  JOIN US
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* <motion.div
              animate={{
                rotate: [-15, 0]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut"
              }}
              className="absolute top-[140px] left-[146px] origin-bottom-right"
            >
              <img src={illustrationHand} alt="Floating Item 2" className="w-32 h-32" />
            </motion.div> */}
            <img
              src={heroIllustration}
              alt="Startup Illustration"
              className="w-full h-auto max-w-2xl"
              style={{
                filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))'
              }}
            />
            {/* Floating Elements */}
            {/* <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-10"
            >
              <img src={paperPlane} alt="Floating Item 1" className="w-20 h-20" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-20 top-20"
            >
              <img src={atoms} alt="Floating Item 2" className="w-16 h-16" />
            </motion.div> */}
          </motion.div>
        </div>

        {/* Steps Section */}
        <div className="relative z-10">
          <Steps />
        </div>
      </div>
    </section>
  );
};

export default Hero;
