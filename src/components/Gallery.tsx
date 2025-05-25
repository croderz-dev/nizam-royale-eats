
import React from 'react';
import { Star } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop',
      alt: 'Signature Dum Biryani',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop',
      alt: 'Royal Dining Hall',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop',
      alt: 'Grilled Kebabs',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=500&fit=crop',
      alt: 'Ambient Lighting',
      category: 'Atmosphere'
    },
    {
      src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop',
      alt: 'Traditional Desserts',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=600&fit=crop',
      alt: 'Royal Decor',
      category: 'Interior'
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-royal-gold/10 border border-royal-gold/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-royal-gold mr-2" />
              <span className="text-royal-gold font-medium text-sm">Visual Journey</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              <span className="royal-text-gradient">A Feast</span>
              <br />For Your Eyes
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into our world of royal ambiance, exquisite cuisine, and memorable moments 
              that define the Nizami dining experience
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-card border border-royal-gold/20 hover:shadow-2xl hover:shadow-royal-gold/10 transition-all duration-500 animate-scale-in ${
                  index === 1 || index === 5 ? 'md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative overflow-hidden ${
                  index === 1 || index === 5 ? 'h-80 md:h-full' : 'h-64'
                }`}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <span className="bg-royal-gold/90 backdrop-blur-sm text-background px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                        {image.category}
                      </span>
                      <h3 className="text-lg font-playfair font-semibold">
                        {image.alt}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Link */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Follow us on Instagram for more culinary adventures
            </p>
            <div className="inline-flex items-center bg-royal-gold/10 border border-royal-gold/20 rounded-full px-6 py-3 hover:bg-royal-gold/20 transition-colors cursor-pointer">
              <span className="text-royal-gold font-medium">@TheNizamsRestaurant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
