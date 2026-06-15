import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type BookingStatus = "pending" | "paid" | "in_progress" | "completed";

interface Booking {
  id: string;
  reference: string;
  customer_name: string;
  whatsapp: string;
  email: string;
  shoe_type: string;
  material: string;
  service_type: string;
  collection_date: string;
  collection_time: string | null;
  delivery_method: string;
  notes: string | null;
  status: BookingStatus;
  created_at: string;
}

const statusColors: Record<BookingStatus, string> = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  paid: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  in_progress: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
};

const statusLabels: Record<BookingStatus, string> = {
  pending: "Pending",
  paid: "Paid",
  in_progress: "In Progress",
  completed: "Completed",
};

const AdminBookings = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Failed to load bookings", description: error.message, variant: "destructive" });
    } else {
      setBookings(data as Booking[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, []);

  const handleStatusChange = async (id: string, status: BookingStatus) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
    } else {
      setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-display text-5xl md:text-6xl">BOOKINGS</h1>
                <p className="text-muted-foreground">{bookings.length} total bookings</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={fetchBookings} disabled={loading}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} /> Refresh
                </Button>
                <Button variant="outline" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" /> Sign Out
                </Button>
              </div>
            </div>

            {loading ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground text-lg">Loading bookings...</p>
              </div>
            ) : bookings.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground text-lg">No bookings yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="hidden lg:grid grid-cols-[120px_1fr_1fr_120px_120px_120px_1fr] gap-4 px-4 py-2 text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                  <span>Reference</span>
                  <span>Customer</span>
                  <span>Service</span>
                  <span>Date</span>
                  <span>Method</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-card border border-border rounded-lg p-4 lg:grid lg:grid-cols-[120px_1fr_1fr_120px_120px_120px_1fr] lg:items-center gap-4">
                    <span className="font-mono text-sm text-muted-foreground">{booking.reference}</span>

                    <div className="mt-2 lg:mt-0">
                      <p className="font-semibold">{booking.customer_name}</p>
                      <p className="text-sm text-muted-foreground">{booking.whatsapp}</p>
                    </div>

                    <div className="mt-2 lg:mt-0">
                      <p className="capitalize">{booking.service_type}</p>
                      <p className="text-sm text-muted-foreground">{booking.shoe_type} · {booking.material}</p>
                    </div>

                    <span className="mt-2 lg:mt-0 text-sm">{booking.collection_date}</span>

                    <span className="mt-2 lg:mt-0 text-sm capitalize">{booking.delivery_method === "pickup" ? "Pickup" : "Drop-off"}</span>

                    <div className="mt-2 lg:mt-0">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[booking.status]}`}>
                        {statusLabels[booking.status]}
                      </span>
                    </div>

                    <div className="mt-3 lg:mt-0 flex flex-wrap gap-2">
                      {booking.status !== "paid" && (
                        <Button size="sm" variant="outline" onClick={() => handleStatusChange(booking.id, "paid")}>Mark Paid</Button>
                      )}
                      {booking.status !== "in_progress" && (
                        <Button size="sm" variant="outline" onClick={() => handleStatusChange(booking.id, "in_progress")}>In Progress</Button>
                      )}
                      {booking.status !== "completed" && (
                        <Button size="sm" variant="outline" onClick={() => handleStatusChange(booking.id, "completed")}>Completed</Button>
                      )}
                      <Button size="sm" variant="glass" asChild>
                        <a href={`https://wa.me/${booking.whatsapp.replace(/\s/g, "").replace(/^0/, "27")}`} target="_blank" rel="noopener noreferrer">
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AdminBookings;
