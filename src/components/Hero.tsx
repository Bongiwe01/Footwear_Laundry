import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroSneaker from "@/assets/hero-sneaker.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wide">
                Premium Sneaker Care
              </span>
            </motion.div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
              <span className="text-foreground">FOOTWEAR</span>
              <br />
              <span className="text-gradient">LAUNDRY</span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              EVERY PAIR, PERFECTION.
            </p>

            <p className="font-body text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
              Professional sneaker cleaning services and premium care products.
              We restore your kicks to their former glory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services">
                <Button variant="hero" size="xl" className="group">
                  Book a Clean
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="glass" size="xl">
                  Shop Products
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Rotating Sneaker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              
              {/* Rotating Sneaker */}
              <img
                src={heroSneaker}
                alt="Premium Sneaker"
                className="relative w-full max-w-lg animate-rotate-sneaker drop-shadow-2xl"
              />

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 left-0 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50"
              >
                <p className="font-display text-3xl text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Sneakers Cleaned</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 right-0 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50"
              >
                <p className="font-display text-3xl text-primary">5★</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;