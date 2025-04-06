import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "About",
    questions: [
      {
        question: "What is AkquaintX?",
        answer: "AkquaintX is a professional community platform that connects experts, researchers, and businesses.",
      },
      {
        question: "How does AkquaintX work?",
        answer: "We provide a platform for collaboration between professionals and businesses seeking expertise.",
      },
    ],
  },
  {
    title: "My Account",
    questions: [
      {
        question: "How do I create an account?",
        answer: "Simply click the 'Sign Up' button and follow the registration process.",
      },
      {
        question: "Can I have multiple profiles?",
        answer: "No, we maintain one profile per user to ensure authenticity.",
      },
    ],
  },
  // Add more categories as needed
];

const FAQPage = () => {
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to all your questions about AkquaintX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <a
                    key={category.title}
                    href={`#${category.title.toLowerCase()}`}
                    className="block px-4 py-2 rounded-lg hover:bg-primary/10 text-gray-600 hover:text-primary transition-colors"
                  >
                    {category.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* FAQ Content */}
            <div className="md:col-span-3">
              {categories.map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                  id={category.title.toLowerCase()}
                >
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category.title}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;