import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import AdminBookings from "./pages/AdminBookings";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/confirmation" element={<BookingConfirmation />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/bookings" element={<AdminRoute><AdminBookings /></AdminRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
