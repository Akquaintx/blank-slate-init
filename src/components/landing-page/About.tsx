import { motion, AnimatePresence } from "framer-motion";
import { Users, Code2, Rocket } from "lucide-react";
import aboutUsIllustration from "@/assets/svg/about-us.svg";
import { useState } from "react";

type FeatureType = "community" | "tech" | "growth" | null;

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
  textColor: string;
  onHover: () => void;
}

const FeatureItem = ({ icon, title, bgColor, textColor, onHover }: FeatureItemProps) => (
  <motion.div 
    whileHover={{ x: -4 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={`flex items-center gap-4 px-4 py-2 ${bgColor} rounded-2xl cursor-pointer`}
    onMouseEnter={onHover}
  >
    <div className={textColor}>{icon}</div>
    <span className={textColor}>{title}</span>
  </motion.div>
);

interface FeatureContentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureContent = ({ icon, title, description, canAnimate }: FeatureContentProps & { canAnimate?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={canAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex items-start gap-6"
  >
    <div className="bg-primary-light p-4 rounded-xl">
      <div className="w-10 h-10">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

type AboutProps = {
  canAnimate?: boolean;
};

type FloatingInfoProps = {
  setActiveFeature: (feature: FeatureType) => void;
  canAnimate?: boolean;
};

const FloatingInfo = ({ setActiveFeature, canAnimate }: FloatingInfoProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={canAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="bg-white rounded-[24px] shadow-lg p-6 w-72"
    >      
      <div className="space-y-2">
        <FeatureItem 
          icon={<Users className="w-5 h-5" />}
          title="Community Driven"
          bgColor="bg-primary-light"
          textColor="text-orange-500"
          onHover={() => setActiveFeature("community")}
        />

        <FeatureItem 
          icon={<Code2 className="w-5 h-5" />}
          title="Tech Integration"
          bgColor="bg-secondary-light/10"
          textColor="text-secondary"
          onHover={() => setActiveFeature("tech")}
        />

        <FeatureItem 
          icon={<Rocket className="w-5 h-5" />}
          title="Growth Platform"
          bgColor="bg-blue-50"
          textColor="text-blue-600"
          onHover={() => setActiveFeature("growth")}
        />
      </div>
    </motion.div>
  );
};

const About = ({ canAnimate = false }: AboutProps) => {
  const [activeFeature, setActiveFeature] = useState<FeatureType>("community");

  const features = {
    community: {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Community-Driven",
      description: "Building and nurturing professional communities that drive innovation and growth"
    },
    tech: {
      icon: <Code2 className="w-10 h-10 text-secondary" />,
      title: "Tech Integration",
      description: "Leveraging AI and advanced technologies to enhance collaboration and insights"
    },
    growth: {
      icon: <Rocket className="w-10 h-10 text-blue-600" />,
      title: "Growth Platform",
      description: "Creating opportunities for professional development and business success"
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white h-screen">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_5fr] gap-12 items-start h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={canAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col h-full pt-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Communities Through Technology
            </h2>
            <p className="text-lg text-gray-600">
              We're building the future of professional collaboration, where technology meets community development
            </p>
            
            <div className="relative mt-20 w-full">
              <div className="w-[70%]">
                <AnimatePresence mode="wait">
                  {activeFeature && (
                    <FeatureContent 
                      key={activeFeature}
                      {...features[activeFeature]}
                      canAnimate={canAnimate}
                    />
                  )}
                </AnimatePresence>
              </div>
              <div className="absolute -top-10 -right-[180px] z-50 flex items-center justify-center">
                <FloatingInfo 
                  setActiveFeature={setActiveFeature} 
                  canAnimate={canAnimate}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={canAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-end"
          >
            <div className="relative lg:h-[60vh] lg:w-[60vh]">
              <div className="absolute inset-0 bg-primary rounded-[40px] transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary-light rounded-[40px] shadow-sm flex">
                <img
                  src={aboutUsIllustration}
                  alt="About Illustration"
                  className="w-[70%] h-[70%] object-contain m-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;