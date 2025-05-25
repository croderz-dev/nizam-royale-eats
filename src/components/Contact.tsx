
import React from 'react';
import { Star, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-royal-gold/10 border border-royal-gold/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-royal-gold mr-2" />
              <span className="text-royal-gold font-medium text-sm">Visit Us</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              <span className="royal-text-gradient">Reserve Your</span>
              <br />Royal Experience
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey through the flavors of Hyderabad. 
              Book your table today and experience the legacy of the Nizams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <Card className="border-royal-gold/20 bg-card hover:shadow-xl hover:shadow-royal-gold/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-royal-gold/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-royal-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-royal-gold mb-2">
                        Location
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 High Street<br />
                        Hounslow, TW3 1ES<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-royal-gold/20 bg-card hover:shadow-xl hover:shadow-royal-gold/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-royal-gold/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-royal-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-royal-gold mb-2">
                        Opening Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p><span className="font-medium">Monday - Thursday:</span> 5:00 PM - 11:00 PM</p>
                        <p><span className="font-medium">Friday - Saturday:</span> 5:00 PM - 12:00 AM</p>
                        <p><span className="font-medium">Sunday:</span> 4:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-royal-gold/20 bg-card hover:shadow-xl hover:shadow-royal-gold/5 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-royal-gold/10 p-2 rounded-full">
                        <Phone className="w-5 h-5 text-royal-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-royal-gold">Call Us</p>
                        <p className="text-sm text-muted-foreground">+44 20 8572 1234</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-royal-gold/20 bg-card hover:shadow-xl hover:shadow-royal-gold/5 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-royal-gold/10 p-2 rounded-full">
                        <Mail className="w-5 h-5 text-royal-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-royal-gold">Email Us</p>
                        <p className="text-sm text-muted-foreground">info@nizamsrestaurant.uk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map & Reservation */}
            <div className="space-y-8 animate-scale-in">
              {/* Map Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-royal-gold/20 to-royal-burgundy/20 rounded-xl border border-royal-gold/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-royal-gold mx-auto mb-2" />
                    <p className="text-royal-gold font-medium">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Get directions to our restaurant</p>
                  </div>
                </div>
              </div>

              {/* Reservation CTA */}
              <Card className="border-royal-gold/20 bg-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-playfair font-bold text-royal-gold mb-4">
                    Book Your Royal Table
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Secure your dining experience at The Great Nizam's Restaurant. 
                    We recommend booking in advance, especially for weekends.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      className="w-full bg-royal-gradient hover:opacity-90 text-background font-semibold py-4"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Reserve Table Online
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 py-4"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call to Book: +44 20 8572 1234
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    For parties of 8 or more, please call us directly
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
