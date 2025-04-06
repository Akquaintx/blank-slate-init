import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const categories = [
  "All Stories",
  "Research",
  "Technology",
  "Community",
  "Industry Insights",
  "Case Studies",
];

const Blogs = () => {
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
              AkquaintX Blog
            </h1>
            <p className="text-lg text-gray-600">
              Insights, updates, and stories from our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full px-4 py-2 text-left rounded-lg hover:bg-primary/10 text-gray-600 hover:text-primary transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>

            {/* Blog Posts */}
            <div className="md:col-span-3">
              <p className="text-gray-600 text-center">Blog posts coming soon...</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;