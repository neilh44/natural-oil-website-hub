import { Heart, Zap, Shield, Thermometer, Leaf, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Heart Healthy',
      description: 'Rich in monounsaturated fats that support cardiovascular health and help maintain healthy cholesterol levels.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Shield,
      title: 'Rich in Vitamin E',
      description: 'Natural antioxidants that protect cells from damage and support immune system function.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Thermometer,
      title: 'High Smoking Point',
      description: 'Perfect for all cooking methods including deep frying, with a smoking point of 450°F (230°C).',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Zap,
      title: 'Healthy Fats',
      description: 'Contains beneficial polyunsaturated and monounsaturated fats essential for body functions.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Leaf,
      title: 'Natural Antioxidants',
      description: 'Packed with natural compounds that help fight inflammation and support overall wellness.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Star,
      title: 'No Additives',
      description: 'Pure groundnut oil with no artificial preservatives, colors, or flavoring agents added.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  const nutritionFacts = [
    { label: 'Monounsaturated Fat', value: '46%', description: 'Heart-healthy fats' },
    { label: 'Polyunsaturated Fat', value: '32%', description: 'Essential fatty acids' },
    { label: 'Vitamin E', value: 'High', description: 'Natural antioxidant' },
    { label: 'Saturated Fat', value: '17%', description: 'Minimal amount' },
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-background to-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Health Benefits of <span className="text-primary">Groundnut Oil</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            Discover why groundnut oil made from premium G20 seeds is the perfect choice for 
            health-conscious families who don't want to compromise on taste.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-premium group">
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nutrition Facts */}
        <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-tertiary mb-6">Nutritional Profile</h3>
              <p className="text-premium mb-8">
                Our premium groundnut oil provides an excellent balance of healthy fats and essential nutrients, 
                making it an ideal choice for everyday cooking.
              </p>
              
              <div className="space-y-6">
                {nutritionFacts.map((fact, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold text-foreground">{fact.label}</div>
                      <div className="text-sm text-muted-foreground">{fact.description}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 shadow-[var(--shadow-glow)]">
                  <div className="text-center text-primary-foreground">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-lg font-medium">Pure & Natural</div>
                    <div className="text-sm opacity-90">No Additives</div>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Premium G20 Quality</h4>
              <p className="text-muted-foreground">
                Made exclusively from the finest G20 groundnut variety, known for superior 
                oil content and nutritional benefits.
              </p>
            </div>
          </div>
        </div>

        {/* Cooking Applications */}
        <div className="mt-16 text-center">
          <h3 className="heading-tertiary mb-8">Perfect for All Cooking Methods</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Deep Frying', temp: '450°F' },
              { name: 'Sautéing', temp: 'Medium Heat' },
              { name: 'Baking', temp: '350°F' },
              { name: 'Salad Dressing', temp: 'Room Temp' },
            ].map((method, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-4">
                <div className="font-semibold text-foreground mb-1">{method.name}</div>
                <div className="text-sm text-muted-foreground">{method.temp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;