import { motion } from "framer-motion";
import { Users, Briefcase, Newspaper, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Communities",
    description: "Join thriving professional communities, share knowledge, and grow together",
  },
  {
    icon: Briefcase,
    title: "Consulting Work",
    description: "Access exclusive consulting opportunities and showcase your expertise",
  },
  {
    icon: Newspaper,
    title: "News",
    description: "Stay updated with industry trends, insights, and community highlights",
  },
  {
    icon: MessageSquare,
    title: "Jobs",
    description: "Discover career opportunities aligned with your skills and interests",
  },
];

const PlatformFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the tools and features designed to enhance your professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-accent hover:bg-primary/5 rounded-lg p-8 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;