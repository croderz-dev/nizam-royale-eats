
import React, { useState, useEffect } from 'react';
import { Menu, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fa876845-d88e-42ee-8602-68934b428fd5.png" 
              alt="The Nizam's Restaurant Logo" 
              className="h-10 w-auto lg:h-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-playfair font-bold royal-text-gradient">
                The Nizam's
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Royal Cuisine</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-royal-gold transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-royal-gold transition-colors font-medium"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-royal-gold transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-royal-gold transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-royal-gold transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex bg-royal-gradient hover:opacity-90 text-background font-semibold px-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Book Table
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-foreground hover:text-royal-gold transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-foreground hover:text-royal-gold transition-colors font-medium py-2"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left text-foreground hover:text-royal-gold transition-colors font-medium py-2"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-foreground hover:text-royal-gold transition-colors font-medium py-2"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-royal-gold transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-royal-gradient hover:opacity-90 text-background font-semibold mt-4"
              >
                <Star className="w-4 h-4 mr-2" />
                Book Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
