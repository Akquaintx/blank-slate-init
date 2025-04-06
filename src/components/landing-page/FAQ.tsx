import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import faqIllustration from "@/assets/svg/faq.svg";

const primaryQuestions = [
  {
    question: "What is AkquaintX?",
    answer: "AkquaintX is a professional community platform that connects experts, researchers, and businesses for collaboration, consulting, and growth opportunities.",
  },
  {
    question: "How do I join the platform?",
    answer: "Simply click the 'Join Us' button, create your profile, and start connecting with communities relevant to your expertise.",
  },
  {
    question: "What kind of opportunities are available?",
    answer: "We offer consulting work, research opportunities, job postings, and community engagement across various professional domains.",
  },
  {
    question: "Is it free to join?",
    answer: "Yes, creating a basic profile is free. Premium features and certain opportunities may require a subscription.",
  },
  {
    question: "How do payments work?",
    answer: "We handle secure payments for consulting work and ensure timely payouts through our trusted payment system.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 pb-4 pt-2 sm:px-6 lg:px-8 bg-primary h-full">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2> */}
          <img src={faqIllustration} alt="FAQ" className="w-1/2 mx-auto" />
          <p className="text-lg text-text-body">
            Find quick answers to common questions about AkquaintX
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {primaryQuestions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            {/* <Link to="/faq"> */}
              <Button variant="outline" className="font-medium">
                Discover More
              </Button>
            {/* </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;