
import React from 'react';
import { Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <div className="inline-flex items-center bg-royal-gold/10 border border-royal-gold/20 rounded-full px-4 py-2 mb-6">
                  <Star className="w-4 h-4 text-royal-gold mr-2" />
                  <span className="text-royal-gold font-medium text-sm">Our Heritage</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
                  A <span className="royal-text-gradient">Royal Legacy</span> 
                  <br />Reimagined
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Great Nizam's Restaurant is a luxurious culinary destination inspired by the 
                  regal legacy of the Nizams of Hyderabad, meticulously crafted by passionate food 
                  enthusiasts for lovers of authentic Indian cuisine.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Located in the heart of Hounslow, UK, our restaurant offers a rich, immersive 
                  experience that blends tradition with modern sophistication through elegant 
                  interiors, ambient lighting, and vibrant royal decor.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-playfair font-semibold text-royal-gold">
                    Authentic Flavors
                  </h3>
                  <p className="text-muted-foreground">
                    Traditional Hyderabadi cuisine with recipes passed down through generations
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-playfair font-semibold text-royal-gold">
                    Royal Ambiance
                  </h3>
                  <p className="text-muted-foreground">
                    Elegant interiors inspired by the grandeur of Nizam palaces
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-playfair font-semibold text-royal-gold">
                    Culinary Fusion
                  </h3>
                  <p className="text-muted-foreground">
                    Bold fusion of South Asian, Turkic, Arabic, and Persian influences
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-playfair font-semibold text-royal-gold">
                    Premium Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Every detail crafted to provide an unforgettable dining experience
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=700&fit=crop" 
                  alt="Elegant restaurant interior" 
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-background border border-royal-gold/20 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-royal-gold text-royal-gold" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Premium Dining</p>
                    <p className="font-semibold">Excellence Since Day One</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
