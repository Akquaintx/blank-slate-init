import { motion } from "framer-motion";
import callToActionIllustration from "@/assets/svg/call-to-action.svg";

const CallToAction = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden h-full flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex w-full">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Join thousands of businesses and professionals who are already
              leveraging the power of AI-driven audience discovery.
            </p>
          </motion.div>

          {/* Getting Started Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-20 py-3 rounded-full bg-white text-secondary font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative hidden lg:flex items-center justify-end h-full"
        >
          <div className="relative h-[100%] w-[100%]">
            <img
              src={callToActionIllustration}
              alt="Call to action illustration"
              className="w-[70%] h-[70%] object-contain m-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;