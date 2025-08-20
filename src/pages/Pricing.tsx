import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, MessageCircle, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Monthly',
      price: '$15',
      period: '/month',
      description: 'Perfect for trying our service',
      features: [
        '12,000+ HD Channels',
        '30,000+ Movies & Series',
        'All Sports Channels',
        'Multi-Device Support',
        '24/7 Customer Support',
        '99.9% Uptime Guarantee'
      ],
      popular: false,
    },
    {
      name: 'Quarterly',
      price: '$35',
      period: '/3 months',
      description: 'Most popular choice - Save 22%',
      features: [
        '12,000+ HD/4K Channels',
        '30,000+ Movies & Series',
        'All Sports & PPV Events',
        'Multi-Device Support',
        'Priority Support',
        '99.9% Uptime Guarantee',
        'Free Setup Assistance'
      ],
      popular: true,
    },
    {
      name: 'Yearly',
      price: '$99',
      period: '/year',
      description: 'Best value - Save 45%',
      features: [
        '12,000+ HD/4K Channels',
        '30,000+ Movies & Series',
        'All Sports & PPV Events',
        'Multi-Device Support',
        'VIP Support',
        '99.9% Uptime Guarantee',
        'Free Setup Assistance',
        'Exclusive Content Access'
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-white" />,
      title: 'Instant Activation',
      description: 'Get access within minutes of payment'
    },
    {
      icon: <Star className="h-5 w-5 text-white" />,
      title: 'Premium Quality',
      description: 'HD/4K streams with buffer-free experience'
    },
    {
      icon: <Check className="h-5 w-5 text-white" />,
      title: 'Money-Back Guarantee',
      description: '7-day satisfaction guarantee'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Simple & Transparent
            <span className="bg-gradient-primary bg-clip-text text-transparent"> IPTV Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your streaming needs. All plans include the same premium features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative glass-card hover-lift ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90' 
                        : 'bg-surface hover:bg-surface-accent'
                    }`}
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Order on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Streaming?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium IPTV streaming worldwide.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Started on WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;