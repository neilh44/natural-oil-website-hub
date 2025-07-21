import { ShoppingCart, Star, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import productsImage from '@/assets/products-lineup.jpg';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: '1 Litre Bottle',
      price: '₹500',
      description: 'Perfect for households',
      features: ['Premium G20 seeds', 'Traditional extraction', 'BPA-free bottle'],
      popular: false,
    },
    {
      id: 2,
      name: '5 Litre Container',
      price: '₹1,000',
      description: 'Ideal for small families',
      features: ['Food-grade container', 'Extended freshness', 'Value pack'],
      popular: true,
    },
    {
      id: 3,
      name: '15 Litre Container',
      price: '₹1,999',
      description: 'Best for large families/small businesses',
      features: ['Bulk savings', 'Commercial grade', 'Long-lasting'],
      popular: false,
    },
    {
      id: 4,
      name: '15 kg Bulk Pack',
      price: '₹2,400',
      description: 'Commercial/restaurant use',
      features: ['Wholesale pricing', 'Restaurant quality', 'Bulk delivery'],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Our Product Range</h2>
          <p className="text-premium max-w-3xl mx-auto">
            Choose from our carefully crafted range of premium groundnut oil containers, 
            each designed to meet different needs while maintaining the same superior quality.
          </p>
        </div>

        {/* Product Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] max-w-4xl mx-auto">
            <img 
              src={productsImage} 
              alt="Natural Groundnut Oil Product Range" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Made from Premium G20 Groundnut Seeds</h3>
              <p className="text-lg text-gray-200">Superior quality, traditional extraction</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="card-premium relative">
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="heading-tertiary mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-primary mb-2">{product.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToContact}
                  className={product.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Free Delivery</h4>
              <p className="text-sm text-muted-foreground">On orders above ₹1000</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold">Quality Assured</h4>
              <p className="text-sm text-muted-foreground">Premium G20 groundnut seeds</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-semibold">Bulk Orders</h4>
              <p className="text-sm text-muted-foreground">Special pricing available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;