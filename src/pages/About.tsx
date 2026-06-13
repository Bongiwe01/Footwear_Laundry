import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.png";
const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every sneaker receives meticulous attention to detail.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're sneakerheads who understand your love for kicks.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Only premium products and proven cleaning methods.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a community of sneaker lovers in South Africa.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 mb-6">
              WE LIVE FOR <span className="text-gradient">FRESH KICKS</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Founded by footwear enthusiasts, Footwear Laundry was born from a simple 
              frustration — there was no premium footwear care service in South Africa 
              that truly understood the culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                OUR <span className="text-gradient">STORY</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It started in 2020 in a small garage in Johannesburg. Armed with 
                  nothing but a passion for sneakers and professional-grade cleaning 
                  supplies, we restored our first pair of beat-up Jordan 1s.
                </p>
                <p>
                  Word spread quickly. Friends became customers, customers became 
                  regulars, and before we knew it, we had cleaned over 10,000 pairs 
                  of sneakers from across South Africa.
                </p>
                <p>
                  Today, we're proud to be the leading sneaker care service in the 
                  country, combining our love for the culture with professional 
                  expertise to give every sneaker the treatment it deserves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="max-w-md mx-auto aspect-square rounded-2xl border border-border/50 overflow-hidden">
                <img src={aboutImage} alt="About Sneaker" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 border border-border/50">
                <p className="font-display text-5xl text-primary">10K+</p>
                <p className="text-muted-foreground">Sneakers Restored</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              WHAT WE <span className="text-gradient">STAND FOR</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
