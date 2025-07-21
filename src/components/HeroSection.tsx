import { ArrowRight, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-oil.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">100% Natural</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="heading-primary mb-6 text-white">
            Pure. Natural. <span className="text-primary">Nutritious.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-gray-200">
            Premium groundnut oil made from finest G20 seeds using traditional extraction methods. 
            Experience the golden purity in every drop.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Premium G20 Seeds</h3>
              <p className="text-sm text-gray-200">Sourced from the finest groundnut varieties</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Traditional Methods</h3>
              <p className="text-sm text-gray-200">Time-tested extraction processes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Pure & Healthy</h3>
              <p className="text-sm text-gray-200">No artificial additives or preservatives</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={() => scrollToSection('#products')}
              className="btn-primary group"
            >
              View Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              Get Quote Now
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg font-medium text-gray-200">
              Call us now: <span className="text-primary font-bold">+91 98765 43210</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;