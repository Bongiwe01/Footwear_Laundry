import { motion } from "framer-motion";
import { Truck, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Truck,
    title: "Door Collection",
    description: "We collect your sneakers from your location",
  },
  {
    icon: Clock,
    title: "48hr Turnaround",
    description: "Quick service without compromising quality",
  },
  {
    icon: Shield,
    title: "100% Guarantee",
    description: "Not satisfied? We'll clean them again free",
  },
];

const BookingCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-primary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Book Your Clean
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 mb-6">
              READY TO MAKE YOUR <span className="text-gradient">KICKS FRESH?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Book a sneaker cleaning service today. Collection fee is calculated 
              based on your location. We handle the rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button variant="hero" size="xl" className="group">
                  Book Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="glass" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
