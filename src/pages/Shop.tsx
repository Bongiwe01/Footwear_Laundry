import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Filter, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// import cleaningKitImg from "@/assets/products/cleaning-kit.png";
import suedeBrushImg from "@/assets/products/suede-brush.png";
import flatLacesImg from "@/assets/products/flat-laces.png";
import protectionSprayImg from "@/assets/products/protection-spray.png";
import deepCleanImg from "@/assets/products/deep-clean-solution.png";
import brushKitImg from "@/assets/products/brush-kit.png";
// import ropeLacesImg from "@/assets/products/rope-laces.png";
import sneakerWipesImg from "@/assets/products/sneaker-wipes.png";
import leatherCreamImg from "@/assets/products/leather-cream.png";
// import suedekitImg from "@/assets/products/suede-kit.png";
// import leatherOilImg from "@/assets/products/leather-oil.png";
import suedeProtectorImg from "@/assets/products/suede-protector.png";
import sneakerFoamCleanerImg from "@/assets/products/sneaker-foam-cleaner.png";
import sneakerShampooImg from "@/assets/products/sneaker-shampoo.png";
const categories = ["All", "Cleaning Kits", "Brushes", "Solutions", "Laces", "Leather Care", "Suede Care", "Accessories"];

const products = [
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
    reviews: 89,
    category: "Brushes",
    image: suedeBrushImg,
    bestseller: false,
  },
  {
    id: 3,
    name: "Premium Flat Laces",
    description: "High-quality flat laces - multiple colors",
    price: 35,
    rating: 4.7,
    reviews: 203,
    category: "Laces",
    image: flatLacesImg,
    bestseller: true,
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
  {
    id: 5,
    name: "Protection Spray",
    description: "Water & stain repellent coating - 200ml",
    price: 150,
    rating: 4.9,
    reviews: 156,
    category: "Solutions",
    image: protectionSprayImg,
    bestseller: true,
  },
  {
    id: 6,
    name: "Deep Clean Solution",
    description: "Professional-grade cleaning solution - 250ml",
    price: 149,
    rating: 4.8,
    reviews: 94,
    category: "Solutions",
    image: deepCleanImg,
    bestseller: false,
  },
  {
    id: 7,
    name: "Premium Brush Kit",
    description: "3-piece brush set for all materials",
    price: 179,
    rating: 4.6,
    reviews: 67,
    category: "Brushes",
    image: brushKitImg,
    bestseller: false,
  },
  // {
  //   id: 8,
  //   name: "Rope Laces Pack",
  //   description: "Thick rope laces - 3 pairs",
  //   price: 99,
  //   rating: 4.5,
  //   reviews: 145,
  //   category: "Laces",
  //   image: ropeLacesImg,
  //   bestseller: false,
  // },
  {
    id: 9,
    name: "Sneaker Wipes",
    description: "Quick clean wipes - 30 pack",
    price: 89,
    rating: 4.4,
    reviews: 78,
    category: "Accessories",
    image: sneakerWipesImg,
    bestseller: false,
  },
  {
    id: 10,
    name: "Leather Care Cream",
    description: "Premium conditioner for leather sneakers",
    price: 169,
    rating: 4.9,
    reviews: 112,
    category: "Leather Care",
    image: leatherCreamImg,
    bestseller: true,
  },
  // {
  //   id: 11,
  //   name: "Leather Oil",
  //   description: "Restoration oil for worn leather - 100ml",
  //   price: 189,
  //   rating: 4.7,
  //   reviews: 84,
  //   category: "Leather Care",
  //   image: leatherOilImg,
  //   bestseller: false,
  // },
  // {
  //   id: 12,
  //   name: "Suede Care Kit",
  //   description: "Complete suede cleaning & care set",
  //   price: 249,
  //   rating: 4.8,
  //   reviews: 156,
  //   category: "Suede Care",
  //   image: suedekitImg,
  //   bestseller: true,
  // },
  {
    id: 13,
    name: "Suede Protector Spray",
    description: "Waterproof suede & nubuck protection - 200ml",
    price: 159,
    rating: 4.6,
    reviews: 98,
    category: "Suede Care",
    image: suedeProtectorImg,
    bestseller: false,
  },
];

const Shop = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart!",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Shop
            </span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 mb-6">
              SNEAKER <span className="text-gradient">CARE PRODUCTS</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Premium cleaning products, laces, and accessories to keep your kicks fresh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50 sticky top-20 bg-background/80 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(0_0%_0%/0.15)]">
                  {/* Bestseller Badge */}
                  {product.bestseller && (
                    <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Bestseller
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Add Button */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <Button
                        variant="hero"
                        className="w-full"
                        onClick={() => handleAddToCart(product.name)}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm text-foreground font-medium">
                        {product.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;
