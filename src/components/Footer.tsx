import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl text-gradient">
                FOOTWEAR LAUNDRY
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Premium footwear cleaning services and care products. 
              Every pair, perfection.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/footwear_laundry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/footwear_laundry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/27739022082"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Shop", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Deep Clean",
                "Suede Care",
                "Leather Treatment",
                "Sole Restoration",
                "Sneaker Protection",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>24 Albrecht St, Jeppestown, Johannesburg 2043</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/27739022082" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <WhatsAppIcon className="h-5 w-5 text-primary shrink-0" />
                  <span>073 902 2082</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/footwear_laundry" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary shrink-0" />
                  <span>@footwear_laundry</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/footwear_laundry" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5 text-primary shrink-0" />
                  <span>@footwear_laundry</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Footwear Laundry. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
