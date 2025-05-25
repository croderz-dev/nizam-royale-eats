
import React from 'react';
import { Star, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-black/95 border-t border-royal-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/fa876845-d88e-42ee-8602-68934b428fd5.png" 
                  alt="The Nizam's Restaurant Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-playfair font-bold royal-text-gradient">
                    The Nizam's
                  </h3>
                  <p className="text-xs text-muted-foreground">Royal Cuisine</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experience the royal legacy of the Nizams with authentic Hyderabadi cuisine 
                in the heart of Hounslow, UK.
              </p>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-royal-gold text-royal-gold" />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-playfair font-semibold text-royal-gold">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Home
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Our Story
                </a>
                <a href="#menu" className="block text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Menu
                </a>
                <a href="#gallery" className="block text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Gallery
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-playfair font-semibold text-royal-gold">
                Services
              </h4>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Dine-in Experience</p>
                <p className="text-muted-foreground text-sm">Takeaway Orders</p>
                <p className="text-muted-foreground text-sm">Private Events</p>
                <p className="text-muted-foreground text-sm">Catering Services</p>
                <p className="text-muted-foreground text-sm">Corporate Bookings</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-playfair font-semibold text-royal-gold">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-royal-gold mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    123 High Street<br />
                    Hounslow, TW3 1ES<br />
                    United Kingdom
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-royal-gold flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">+44 20 8572 1234</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-royal-gold flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">info@nizamsrestaurant.uk</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-royal-gold flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">Mon-Thu: 5PM-11PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-royal-gold/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 The Great Nizam's Restaurant. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-royal-gold transition-colors text-sm">
                  Allergen Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
