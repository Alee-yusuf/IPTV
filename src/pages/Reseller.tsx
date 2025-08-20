import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, DollarSign, Users, Headphones, Star, TrendingUp, Shield, Zap, UserRound } from 'lucide-react';

const Reseller = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: 'High Profit Margins',
      description: 'Earn up to 70% profit on every sale with our competitive wholesale pricing.'
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: 'Instant Setup',
      description: 'Get started immediately with instant access to our reseller portal and tools.'
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: 'Dedicated Support',
      description: '24/7 priority support for all your reseller needs and customer inquiries.'
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: 'Reliable Service',
      description: '99.9% uptime guarantee ensures your customers always have access to content.'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$200',
      description: 'Perfect for new resellers',
      credits: '20 Credits',
      costPerCredit: '$10/credit',
      features: [
        '20 IPTV subscriptions',
        'Basic reseller panel',
        'Email support',
        'Standard profit margins',
        'Monthly billing'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$450',
      description: 'Most popular for growing businesses',
      credits: '50 Credits',
      costPerCredit: '$9/credit',
      features: [
        '50 IPTV subscriptions',
        'Advanced reseller panel',
        'Priority WhatsApp support',
        'Higher profit margins',
        'Custom branding options',
        'Monthly/Quarterly billing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$800',
      description: 'For established reseller businesses',
      credits: '100 Credits',
      costPerCredit: '$8/credit',
      features: [
        '100 IPTV subscriptions',
        'White-label solution',
        'Dedicated account manager',
        'Maximum profit margins',
        'Full branding customization',
        'Flexible billing terms',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'TechStream Solutions',
      quote: 'StreamPro\'s reseller program helped me build a successful IPTV business. Great support and reliable service!',
      rating: 5,
      avatar: <UserRound className="h-6 w-6" aria-label="User avatar" />
    },
    {
      name: 'Mike Rodriguez',
      business: 'Global Stream Co.',
      quote: 'The profit margins are excellent and my customers love the service quality. Highly recommended!',
      rating: 5,
      avatar: <UserRound className="h-6 w-6" aria-label="User avatar" />
    },
    {
      name: 'Emma Chen',
      business: 'StreamMaster Pro',
      quote: 'Been a reseller for 2 years now. The platform is stable and the support team is always helpful.',
      rating: 5,
      avatar: <UserRound className="h-6 w-6" aria-label="User avatar" />
    }
  ];

  const stats = [
    { label: 'Active Resellers', value: '500+', icon: <Users className="h-6 w-6" /> },
    { label: 'Customer Satisfaction', value: '99%', icon: <Star className="h-6 w-6" /> },
    { label: 'Monthly Growth', value: '25%', icon: <TrendingUp className="h-6 w-6" /> },
    { label: 'Countries Served', value: '50+', icon: <Shield className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Start Your Own
            <span className="bg-gradient-primary bg-clip-text text-transparent"> IPTV Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our successful reseller network and build a profitable IPTV business with our premium platform and dedicated support.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Business Today
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Reseller Program?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and grow a successful IPTV business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Reseller Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package to start or grow your IPTV business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`glass-card hover-lift relative ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                    <div className="text-primary font-semibold">{plan.credits}</div>
                    <div className="text-sm text-muted-foreground">{plan.costPerCredit}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Resellers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Success stories from our reseller community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.business}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your IPTV Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful resellers and start earning with our proven IPTV platform today.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Apply for Reseller Program
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reseller;