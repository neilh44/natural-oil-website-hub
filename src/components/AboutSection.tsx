import { Users, Award, Leaf, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import groundnutsImage from '@/assets/groundnuts-natural.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural Purity',
      description: 'We believe in keeping things natural. No artificial additives, no preservatives - just pure groundnut oil.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Using only the finest G20 groundnut seeds, we ensure every bottle meets our highest quality standards.',
    },
    {
      icon: Users,
      title: 'Traditional Methods',
      description: 'Our time-tested extraction methods preserve the natural goodness and authentic taste of groundnuts.',
    },
    {
      icon: Heart,
      title: 'Health First',
      description: 'Rich in healthy fats, Vitamin E, and antioxidants - every drop supports your family\'s wellness.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '100%', label: 'Pure & Natural' },
    { number: '4.9/5', label: 'Customer Rating' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary mb-6">
              Crafting Pure <span className="text-primary">Groundnut Oil</span> Since 2008
            </h2>
            <p className="text-premium mb-8">
              At Natural, we're passionate about bringing you the purest groundnut oil using traditional methods 
              that have been perfected over generations. Our commitment to quality starts with sourcing the 
              finest G20 groundnut seeds and extends through every step of our careful extraction process.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium G20 Groundnut Seeds</h4>
                  <p className="text-muted-foreground">We source only the highest quality G20 variety groundnuts, known for their superior oil content and rich flavor profile.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Traditional Extraction Methods</h4>
                  <p className="text-muted-foreground">Our time-honored extraction process preserves the natural nutrients and authentic taste that makes our oil special.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-muted-foreground">Every batch undergoes rigorous testing to ensure purity, freshness, and adherence to our strict quality standards.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={groundnutsImage} 
                alt="Premium G20 Groundnut Seeds" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Premium G20 Seeds</h4>
                <p className="text-gray-200">The foundation of our superior oil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">Our Values</h3>
            <p className="text-premium max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing to production to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;