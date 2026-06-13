import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface ConfirmationState {
  reference: string;
  serviceLabel: string;
  shoeType: string;
  collectionDate: string;
  deliveryMethod: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const state = location.state as ConfirmationState | undefined;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl mb-4">BOOKING RECEIVED!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thanks! We'll review your booking and confirm payment details on WhatsApp.
            </p>
            {state && (
              <div className="bg-card border border-border rounded-lg p-6 text-left space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reference</span>
                  <span className="font-semibold font-mono">{state.reference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service</span>
                  <span>{state.serviceLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shoe Type</span>
                  <span>{state.shoeType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Collection Date</span>
                  <span>{state.collectionDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Method</span>
                  <span>{state.deliveryMethod === "pickup" ? "We Pick Up" : "Drop Off"}</span>
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/27739022082" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BookingConfirmation;
