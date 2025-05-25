
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const categories = [
    { id: 'signature', name: 'Signature Dishes', icon: '👑' },
    { id: 'starters', name: 'Royal Starters', icon: '🥘' },
    { id: 'mains', name: 'Main Course', icon: '🍛' },
    { id: 'biryanis', name: 'Dum Biryanis', icon: '🍚' },
    { id: 'kebabs', name: 'Charcoal Kebabs', icon: '🍢' },
    { id: 'desserts', name: 'Royal Desserts', icon: '🍮' },
  ];

  const menuItems = {
    signature: [
      {
        name: 'Nizami Dum Biryani',
        description: 'Slow-cooked aromatic basmati rice with tender mutton, aged spices, and saffron',
        price: '£18.95',
        spiceLevel: 2,
        tags: ['Signature', 'Spicy'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
      {
        name: 'Royal Hyderabadi Haleem',
        description: 'Traditional slow-cooked lentil and meat stew, garnished with crispy onions',
        price: '£14.95',
        spiceLevel: 2,
        tags: ['Signature', 'Traditional'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
    ],
    starters: [
      {
        name: 'Shikampuri Kebab',
        description: 'Delicate minced meat patties stuffed with cottage cheese and mint',
        price: '£8.95',
        spiceLevel: 1,
        tags: ['Kebab', 'Mild'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
      {
        name: 'Boti Kebab',
        description: 'Succulent chunks of marinated lamb grilled to perfection',
        price: '£9.95',
        spiceLevel: 2,
        tags: ['Kebab', 'Grilled'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
    ],
    mains: [
      {
        name: 'Nizami Korma',
        description: 'Rich and creamy curry with tender meat in aromatic Mughlai spices',
        price: '£16.95',
        spiceLevel: 1,
        tags: ['Creamy', 'Mild'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
      {
        name: 'Hyderabadi Keema',
        description: 'Spiced minced meat cooked with onions, tomatoes, and traditional spices',
        price: '£15.95',
        spiceLevel: 3,
        tags: ['Spicy', 'Traditional'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
    ],
    biryanis: [
      {
        name: 'Chicken Dum Biryani',
        description: 'Aromatic basmati rice layered with spiced chicken and slow-cooked',
        price: '£16.95',
        spiceLevel: 2,
        tags: ['Biryani', 'Chicken'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
      {
        name: 'Vegetable Biryani',
        description: 'Fragrant rice with seasonal vegetables and aromatic spices',
        price: '£14.95',
        spiceLevel: 1,
        tags: ['Vegetarian', 'Biryani'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
    ],
    kebabs: [
      {
        name: 'Seekh Kebab',
        description: 'Charcoal-grilled minced meat kebabs with traditional spices',
        price: '£10.95',
        spiceLevel: 2,
        tags: ['Kebab', 'Grilled'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
      {
        name: 'Chapli Kebab',
        description: 'Traditional flat kebabs with herbs and spices from the frontier',
        price: '£11.95',
        spiceLevel: 3,
        tags: ['Kebab', 'Spicy'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
    ],
    desserts: [
      {
        name: 'Hyderabadi Kheer',
        description: 'Traditional rice pudding with cardamom, nuts, and rose water',
        price: '£6.95',
        spiceLevel: 0,
        tags: ['Sweet', 'Traditional'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
      {
        name: 'Double Ka Meetha',
        description: 'Bread pudding soaked in sweetened milk with nuts and raisins',
        price: '£7.95',
        spiceLevel: 0,
        tags: ['Sweet', 'Signature'],
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
      },
    ],
  };

  const getSpiceIcons = (level: number) => {
    return '🌶️'.repeat(level) + '⚪'.repeat(3 - level);
  };

  return (
    <section id="menu" className="py-20 lg:py-32 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-royal-gold/10 border border-royal-gold/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-royal-gold mr-2" />
              <span className="text-royal-gold font-medium text-sm">Our Royal Menu</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              <span className="royal-text-gradient">Culinary Excellence</span>
              <br />From the Nizam's Kitchen
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each dish is a tribute to Hyderabadi flavors, spotlighting slow-cooked dum biryani, 
              charcoal-grilled kebabs, and aromatic Mughlai curries
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-royal-gradient text-background border-none'
                    : 'border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <div 
                key={index}
                className="group bg-card border border-royal-gold/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-royal-gold/10 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-royal-gold/90 backdrop-blur-sm text-background px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-background/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-royal-gold group-hover:text-royal-gold-light transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-sm" title={`Spice Level: ${item.spiceLevel}/3`}>
                      {getSpiceIcons(item.spiceLevel)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-royal-gradient hover:opacity-90 text-background font-semibold px-8 py-4"
            >
              <Star className="w-5 h-5 mr-2" />
              View Full Menu & Order Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
