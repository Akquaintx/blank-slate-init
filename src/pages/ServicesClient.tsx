import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicesClient = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    company: "",
    query: "",
  });

  // Fetch pricing plans
  const { data: pricingPlans } = useQuery({
    queryKey: ["pricingPlans"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .order("price");
      if (error) throw error;
      return data;
    },
  });

  // Handle demo request submission
  const demoRequestMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from("demo_requests").insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your demo request has been submitted successfully.",
      });
      setFormData({
        name: "",
        email: "",
        designation: "",
        company: "",
        query: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
      console.error("Demo request error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoRequestMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans?.map((plan) => (
                <div
                  key={plan.id}
                  className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold mb-6">
                    ${plan.price}
                    <span className="text-lg font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {(plan.features as string[]).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary-light">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Demo Request Form */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-8">
              Request a Demo
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Submit your proposal and we'll get back to you shortly
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="designation"
                  placeholder="Your Designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="query"
                  placeholder="Tell us about your requirements..."
                  value={formData.query}
                  onChange={handleInputChange}
                  required
                  className="h-32"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light"
                disabled={demoRequestMutation.isPending}
              >
                {demoRequestMutation.isPending
                  ? "Submitting..."
                  : "Submit Request"}
              </Button>
            </form>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesClient;