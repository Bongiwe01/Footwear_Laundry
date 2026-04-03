import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBookings, updateBookingStatus, type Booking } from "@/lib/bookingStore";

const statusColors: Record<Booking["status"], string> = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  paid: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  in_progress: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
};

const statusLabels: Record<Booking["status"], string> = {
  pending: "Pending",
  paid: "Paid",
  in_progress: "In Progress",
  completed: "Completed",
};

const AdminBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const refresh = () => setBookings(getBookings().reverse());

  useEffect(() => { refresh(); }, []);

  const handleStatusChange = (id: string, status: Booking["status"]) => {
    updateBookingStatus(id, status);
    refresh();
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
              <Button variant="outline" onClick={refresh}>
                <RefreshCw className="h-4 w-4 mr-2" /> Refresh
              </Button>
            </div>

            {bookings.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground text-lg">No bookings yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Desktop Table Header */}
                <div className="hidden lg:grid grid-cols-[100px_1fr_1fr_120px_120px_120px_1fr] gap-4 px-4 py-2 text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                  <span>ID</span>
                  <span>Customer</span>
                  <span>Service</span>
                  <span>Date</span>
                  <span>Method</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-card border border-border rounded-lg p-4 lg:grid lg:grid-cols-[100px_1fr_1fr_120px_120px_120px_1fr] lg:items-center gap-4">
                    {/* Mobile layout uses stacked; desktop uses grid */}
                    <span className="font-mono text-sm text-muted-foreground">{booking.id}</span>
                    
                    <div className="mt-2 lg:mt-0">
                      <p className="font-semibold">{booking.customerName}</p>
                      <p className="text-sm text-muted-foreground">{booking.whatsapp}</p>
                    </div>

                    <div className="mt-2 lg:mt-0">
                      <p className="capitalize">{booking.serviceType} Clean</p>
                      <p className="text-sm text-muted-foreground">{booking.shoeType} · {booking.material}</p>
                    </div>

                    <span className="mt-2 lg:mt-0 text-sm">{booking.collectionDate}</span>

                    <span className="mt-2 lg:mt-0 text-sm capitalize">{booking.deliveryMethod === "pickup" ? "Pickup" : "Drop-off"}</span>

                    <div className="mt-2 lg:mt-0">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[booking.status]}`}>
                        {statusLabels[booking.status]}
                      </span>
                    </div>

                    <div className="mt-3 lg:mt-0 flex flex-wrap gap-2">
                      {booking.status !== "paid" && (
                        <Button size="sm" variant="outline" onClick={() => handleStatusChange(booking.id, "paid")}>
                          Mark Paid
                        </Button>
                      )}
                      {booking.status !== "in_progress" && (
                        <Button size="sm" variant="outline" onClick={() => handleStatusChange(booking.id, "in_progress")}>
                          In Progress
                        </Button>
                      )}
                      {booking.status !== "completed" && (
                        <Button size="sm" variant="outline" onClick={() => handleStatusChange(booking.id, "completed")}>
                          Completed
                        </Button>
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
