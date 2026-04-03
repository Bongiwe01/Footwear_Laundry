import { motion } from "framer-motion";
import { Sparkles, Droplets, Shield, ArrowRight, Wrench, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
{
icon: Sparkles,
title: "Standard Clean",
description:
    "Surface cleaning, midsole, & laces cleaning.",
price: 150,
duration: "3-5 days",
materials: ["Canvas", "Mesh", "Knit", "Synthetic"],
includes: [
    "Full exterior clean",
    "Sole restoration",
    "Insole treatment",
    "Deodorizing",
    "Lace cleaning",
],
},
{
icon: Droplets,
title: "Deep Clean",
description:
    "Standard + inner cleaning & stain removal.",
price: 200,
duration: "4-6 days",
materials: ["Suede", "Nubuck", "Velvet"],
includes: [
    "Gentle brushing",
    "Stain treatment",
    "Texture restoration",
    "Color refresh",
    "Protective coating",
],
},
{
icon: Shield,
title: "White Sneaker Brightening",
description:
    "Special treatment to restore white sneakers to their original brightness.",
price: 180,
duration: "3-5 days",
materials: ["Leather", "Patent Leather"],
includes: [
    "Deep clean",
    "Conditioning",
    "Polish",
    "Crack repair",
    "Protective layer",
],
},
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Our Services
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 mb-6">
            PROFESSIONAL <span className="text-gradient">CLEANING</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every sneaker deserves expert care. Choose the service that matches your 
            sneaker material and watch them come back to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-display text-2xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.materials.map((material) => (
                  <span
                    key={material}
                    className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                  >
                    {material}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="font-display text-2xl text-primary">
                  {service.price}
                </span>
                <Link to="/services">
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/services">
            <Button variant="hero" size="xl" className="group">
              View All Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
