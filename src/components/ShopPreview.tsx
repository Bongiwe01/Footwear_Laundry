import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// import cleaningKitImg from "@/assets/products/cleaning-kit.png";
import suedeBrushImg from "@/assets/products/suede-brush.png";
import flatLacesImg from "@/assets/products/flat-laces.png";
import protectionSprayImg from "@/assets/products/protection-spray.png";
import sneakerFoamCleanerImg from "@/assets/products/sneaker-foam-cleaner.png";
import sneakerShampooImg from "@/assets/products/sneaker-shampoo.png";

const products = [
  // {
  //   id: 1,
  //   name: "Premium Cleaning Kit",
  //   description: "Complete kit with brush, solution & microfiber cloth",
  //   price: 349,
  //   rating: 4.9,
  //   image: cleaningKitImg,
  // },
    {
    id: 1,
    name: "Sneaker Shampoo",
    description: "Cleaning shampoo for all sneaker materials - 100ml",
    price: 30,
    rating: 4.9,
    reviews: 156,
    category: "Solutions",
    image: sneakerShampooImg,
    bestseller: true,
  },
  {
    id: 2,
    name: "Suede Brush Set",
    description: "Soft bristle brushes for delicate materials",
    price: 129,
    rating: 4.8,
    image: suedeBrushImg,
  },
  {
    id: 3,
    name: "Premium Laces Pack",
    description: "High-quality flat laces in multiple colors",
    price: 79,
    rating: 4.7,
    image: flatLacesImg,
  },
    {
    id: 4,
    name: "Foam Cleaner",
    description: "Deep cleaning foam sneaker cleanser - 200ml",
    price: 60,
    rating: 4.9,
    reviews: 127,
    category: "Cleaning Kits",
    image: sneakerFoamCleanerImg,
    bestseller: true,
  },

];

const ShopPreview = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Shop
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4">
              CARE <span className="text-gradient">PRODUCTS</span>
            </h2>
          </div>
          <Link to="/shop">
            <Button variant="outline" size="lg" className="group">
              View All Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-soft">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Add Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Button variant="hero" className="w-full">
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <p className="font-display text-2xl text-primary">
                    R{product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;
