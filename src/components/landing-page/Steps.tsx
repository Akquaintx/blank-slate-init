import { motion } from "framer-motion";
import { UserCircle, Users, Handshake } from "lucide-react";
import iconBg from "@/assets/svg/icon-bg.svg";

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up and complete your professional profile in minutes",
    icon: UserCircle
  },
  {
    title: "Join Communities",
    description: "Connect with like-minded professionals in your field",
    icon: Users
  },
  {
    title: "Start Collaborating",
    description: "Participate in research, testing, and consulting opportunities",
    icon: Handshake
  },
];

const Steps = () => {
  return (
    <section className="py-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-body mb-4">
            Start in 3 Simple Steps
          </h2>
          <p className="text-lg text-body/80 max-w-2xl mx-auto">
            Join our platform and start making an impact today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="bg-primary-light rounded-xl p-8 h-full shadow-lg">
                <div className="flex items-center justify-center mb-6 relative">
                  <img src={iconBg} alt="" className="absolute w-28 h-28" />
                  <step.icon className="w-12 h-12 text-body relative z-10" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-body">{step.title}</h3>
                  <p className="text-body/70">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-body"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;