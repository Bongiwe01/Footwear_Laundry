import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Shield, Wrench, SprayCan, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
{
icon: Wrench,
title: "Suede/Nubuck Care",
description:
    "Gentle dry-clean and conditioning for suede and nubuck materials.",
price: 180,
duration: "2-4 days",
materials: ["Rubber", "EVA", "Boost"],
includes: [
    "Deep sole cleaning",
    "Whitening treatment",
    "Edge cleaning",
    "Final polish",
],
},
{
icon: SprayCan,
title: "Kids Sneaker Clean",
description:
    "Tailored cleaning for children's sneakers, gentle yet effective.",
price: 120,
duration: "1-2 days",
materials: ["All materials"],
includes: [
    "Surface preparation",
    "Protection spray",
    "Curing",
    "Quality check",
],
},
{
icon: Sparkles,
title: "De-Yellowing Treatment",
description:
    "Specialized process to remove yellowing.",
price: 180,
duration: "3-5 days",
materials: ["All materials"],
includes: [
    "Surface preparation",
    "Protection spray",
    "Curing",
    "Quality check",
],
},
];


const Services = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleBookNow = (serviceName: string, price: number) => {
    toast({
      title: "Service Selected!",
      description: `${serviceName} - R${price} + collection fee based on your location. Full booking system coming soon!`,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 mb-6">
              PROFESSIONAL <span className="text-gradient">SNEAKER CARE</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Choose the service that matches your sneaker's needs. Collection fee 
              is calculated based on your location for door-to-door pickup and delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-card rounded-2xl border transition-all duration-300 ${
                  selectedService === service.title
                    ? "border-primary/50 shadow-[0_0_40px_hsl(0_0%_0%/0.15)]"
                    : "border-border/50 hover:border-border"
                }`}
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.title ? null : service.title)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-5 flex-1">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl mb-1">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="font-display text-4xl text-primary">R{service.price}</p>
                      </div>
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow(service.title, service.price);
                        }}
                      >
                        Book Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedService === service.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-border/50 px-8 pb-8"
                  >
                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                      {/* Materials */}
                      <div>
                        <h4 className="font-display text-lg mb-4 text-primary">Suitable Materials</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.materials.map((material) => (
                            <span
                              key={material}
                              className="text-sm bg-secondary px-3 py-1 rounded-full"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Includes */}
                      <div>
                        <h4 className="font-display text-lg mb-4 text-primary">What's Included</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-muted-foreground">
                              <Check className="h-4 w-4 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration */}
                      <div>
                        <h4 className="font-display text-lg mb-4 text-primary">Turnaround Time</h4>
                        <p className="text-2xl font-display">{service.duration}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Express service available for additional fee
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
