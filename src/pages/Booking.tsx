import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, Camera, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addBooking } from "@/lib/bookingStore";
import { useToast } from "@/hooks/use-toast";

const shoeTypes = ["Sneakers", "Boots", "Heels", "Loafers", "Sandals", "Other"];
const materials = ["Suede", "Leather", "Canvas", "Mesh", "Nubuck", "Synthetic", "Mixed"];

const serviceTypes = [
  { 
    value: "standard", 
    label: "Standard Clean", 
    price: "R150", 
    desc: "Surface cleaning, midsole, & laces cleaning." 
  },
  { 
    value: "deep", 
    label: "Deep Clean", 
    price: "R200", 
    desc: "Standard + inner cleaning & stain removal." 
  },
  { 
    value: "brightening", 
    label: "White Sneaker Brightening", 
    price: "R180", 
    desc: "Special treatment to restore white sneakers to their original brightness." 
  },
  { 
    value: "suede", 
    label: "Suede/Nubuck Care", 
    price: "R180", 
    desc: "Gentle dry-clean and conditioning for suede and nubuck materials." 
  },
  { 
    value: "kids", 
    label: "Kids Sneaker Clean", 
    price: "R120", 
    desc: "Tailored cleaning for children's sneakers, gentle yet effective." 
  },
  { 
    value: "deyellow", 
    label: "De-Yellowing Treatment", 
    price: "R180", 
    desc: "Specialized process to remove yellowing." 
  },
];

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [photos, setPhotos] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    customerName: "",
    whatsapp: "",
    email: "",
    shoeType: "",
    material: "",
    serviceType: "",
    collectionDate: "",
    collectionTime: "",
    deliveryMethod: "pickup",
    notes: "",
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      if (photos.length >= 4) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setPhotos((prev) => [...prev.slice(0, 3), ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.whatsapp || !formData.email || !formData.shoeType || !formData.material || !formData.serviceType || !formData.collectionDate) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    const booking = addBooking({ ...formData, photoUrls: photos });
    navigate("/booking/confirmation", { state: { booking } });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-5xl md:text-6xl mb-4 text-center">BOOK A CLEAN</h1>
            <p className="text-muted-foreground text-center mb-12">
              Fill in the details below and we'll confirm your booking on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h2 className="font-display text-2xl mb-2">Your Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="e.g. Alex Mokoena" value={formData.customerName} onChange={(e) => updateField("customerName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input id="whatsapp" placeholder="e.g. 073 902 2082" value={formData.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                </div>
              </div>

              {/* Shoe Details */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h2 className="font-display text-2xl mb-2">Shoe Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Shoe Type *</Label>
                    <Select onValueChange={(v) => updateField("shoeType", v)}>
                      <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        {shoeTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Material *</Label>
                    <Select onValueChange={(v) => updateField("material", v)}>
                      <SelectTrigger><SelectValue placeholder="Select material" /></SelectTrigger>
                      <SelectContent>
                        {materials.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h2 className="font-display text-2xl mb-2">Service</h2>
                <RadioGroup value={formData.serviceType} onValueChange={(v) => updateField("serviceType", v)} className="space-y-3">
                  {serviceTypes.map((s) => (
                    <label key={s.value} className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${formData.serviceType === s.value ? "border-primary bg-secondary" : "border-border hover:border-muted-foreground"}`}>
                      <RadioGroupItem value={s.value} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{s.label}</span>
                          <span className="font-display text-xl">{s.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Submit Booking
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Booking;