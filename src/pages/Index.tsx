import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import ShopPreview from "@/components/ShopPreview";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <ShopPreview />
      <BookingCTA />
      <Footer />
    </main>
  );
};

export default Index;
