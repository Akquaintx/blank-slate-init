import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Welcome",
    description: "Start your journey with our comprehensive platform",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Members",
    description: "Join our growing community of experts and innovators",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Feed",
    description: "Stay updated with the latest research and insights",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Courses",
    description: "Expand your knowledge with expert-led courses",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Events",
    description: "Participate in exclusive online and offline events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Live",
    description: "Experience real-time interactive sessions",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chat",
    description: "Connect directly with experts and peers",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Analytics",
    description: "Track your progress and measure success",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary-light overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
        </motion.div>

        <div className="relative">
          {/* Navigation Bar */}
          <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-full p-2 mb-8 shadow-lg">
            {features.map((feature, index) => (
              <motion.button
                key={feature.title}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                          ${activeFeature === index 
                            ? 'bg-primary text-white shadow-md' 
                            : 'text-gray-600 hover:text-primary'}`}
                onMouseEnter={() => {
                  setActiveFeature(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.title}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div
            className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              key={features[activeFeature].image}
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
              <p className="text-lg text-white/90">{features[activeFeature].description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;