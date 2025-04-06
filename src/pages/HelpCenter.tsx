import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to AkquaintX Help Center
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get the support you need to make the most of our platform
            </p>

            <div className="max-w-2xl mx-auto space-y-8">
              {/* Query Form */}
              <div className="space-y-4">
                <textarea
                  className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Write your query here..."
                />
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                  Submit Query
                </button>
              </div>

              {/* Demo Video */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Demo video coming soon...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;