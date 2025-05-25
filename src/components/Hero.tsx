
import React from 'react';
import { Star, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1920&h=1080&fit=crop&crop=center')`
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
        <div className="animate-fade-in">
          {/* Royal Badge */}
          <div className="inline-flex items-center bg-royal-gold/20 border border-royal-gold/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-royal-gold mr-2" />
            <span className="text-royal-gold font-medium text-sm">Est. in the Legacy of Nizams</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            <span className="royal-text-gradient">The Great</span>
            <br />
            <span className="text-white">Nizam's</span>
            <br />
            <span className="royal-text-gradient">Restaurant</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            Experience Royalty in Every Bite
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Authentic Hyderabadi cuisine crafted with the passion of food enthusiasts, 
            inspired by the regal legacy of the Nizams
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToMenu}
              size="lg"
              className="bg-royal-gradient hover:opacity-90 text-background font-semibold px-8 py-4 text-lg"
            >
              <Star className="w-5 h-5 mr-2" />
              Explore Our Menu
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-background px-8 py-4 text-lg"
            >
              Book Your Table
            </Button>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center bg-background/10 backdrop-blur-sm border border-royal-gold/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-royal-gold rounded-full mr-3 animate-pulse" />
            <span className="text-royal-gold-light font-medium">Now Open in Hounslow, UK</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-royal-gold" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-royal-gold/20 rounded-full opacity-50" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-royal-gold/30 rounded-full opacity-30" />
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-royal-gold rounded-full opacity-60" />
      <div className="absolute top-1/3 right-5 w-3 h-3 bg-royal-gold-light rounded-full opacity-40" />
    </section>
  );
};

export default Hero;
