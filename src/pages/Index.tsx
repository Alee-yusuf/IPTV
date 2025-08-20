import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Play, 
  Shield, 
  Headphones, 
  Zap, 
  Star, 
  Trophy, 
  Film, 
  Tv, 
  Baby,
  Download,
  Settings,
  CheckCircle,
  ArrowRight,
  Globe
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Play className="h-8 w-8 text-white" />,
      title: 'HD/4K Quality',
      description: 'Crystal clear streaming with no buffering. Enjoy your favorite content in stunning quality.'
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: 'Global Channels',
      description: '12,000+ live channels from around the world. Sports, movies, news, and entertainment.'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Instant Activation',
      description: 'Get instant access after purchase. No waiting, no delays - start streaming immediately.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-white" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via WhatsApp. We\'re here whenever you need help.'
    }
  ];

  const PackagesPlans = [
    {
      name: 'Monthly',
      price: '$15',
      period: '/month',
      popular: false
    },
    {
      name: 'Quarterly',
      price: '$35',
      period: '/3 months',
      popular: true,
      savings: 'Save 22%'
    },
    {
      name: 'Yearly',
      price: '$99',
      period: '/year',
      popular: false,
      savings: 'Save 45%'
    }
  ];

  const categories = [
    {
      name: 'Sports',
      icon: <Trophy className="h-6 w-6" />,
      count: '500+',
      color: 'bg-red-500/10 text-red-400 border-red-500/20'
    },
    {
      name: 'Movies',
      icon: <Film className="h-6 w-6" />,
      count: '30,000+',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      name: 'News',
      icon: <Tv className="h-6 w-6" />,
      count: '200+',
      color: 'bg-green-500/10 text-green-400 border-green-500/20'
    },
    {
      name: 'Kids',
      icon: <Baby className="h-6 w-6" />,
      count: '150+',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: 'Purchase & Receive',
      description: 'Contact us on WhatsApp to purchase your plan and receive instant credentials.',
      icon: <MessageCircle className="h-6 w-6 text-white" />
    },
    {
      step: 2,
      title: 'Download App',
      description: 'Install the recommended IPTV player on your device (Android, iOS, Smart TV, etc.).',
      icon: <Download className="h-6 w-6 text-white" />
    },
    {
      step: 3,
      title: 'Start Streaming',
      description: 'Enter your credentials and enjoy instant access to thousands of channels.',
      icon: <Play className="h-6 w-6 text-white" />
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      rating: 5,
      comment: 'Amazing service! Crystal clear quality and excellent customer support. Highly recommended!',
      location: 'New York, USA'
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      comment: 'Best IPTV service I\'ve used. Great channel selection and very reliable streaming.',
      location: 'Madrid, Spain'
    },
    {
      name: 'David Wilson',
      rating: 5,
      comment: 'Fantastic value for money. Setup was easy and the support team is very helpful.',
      location: 'London, UK'
    }
  ];

  const faqs = [
    {
      question: 'What is IPTV and how does it work?',
      answer: 'IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. You simply need a stable internet connection and a compatible device to start streaming.'
    },
    {
      question: 'What devices are supported?',
      answer: 'Our service works on Android devices, iOS devices, Smart TVs, Fire TV Stick, MAG boxes, PC/Mac computers, and most IPTV-compatible devices.'
    },
    {
      question: 'How many devices can I use simultaneously?',
      answer: 'All our plans support multiple device connections. You can stream on up to 3 devices simultaneously with any subscription.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'We offer a 7-day money-back guarantee instead of a free trial. If you\'re not satisfied with our service, we\'ll refund your payment.'
    },
    {
      question: 'How do I get customer support?',
      answer: 'We provide 24/7 customer support via WhatsApp. Our team is always ready to help with setup, troubleshooting, or any questions you may have.'
    },
    {
      question: 'Is the service legal and safe?',
      answer: 'Yes, our IPTV service is completely legal and safe. We operate as a legitimate streaming service provider with proper licensing and security measures.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="inline-block">Unlimited IPTV in</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> HD/4K</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Affordable, Reliable, 24/7 Support — Stream 12,000+ channels and 30,000+ movies worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Streaming Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/Packages" className="flex items-center">
                  See Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose StreamPro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver the best IPTV experience with premium features and unmatched reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift text-center group">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simple Packages Plans
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your streaming needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PackagesPlans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`glass-card hover-lift text-center relative ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-foreground mt-4">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <Badge variant="outline" className="mt-2">{plan.savings}</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/Packages">
              <Button variant="outline" size="lg">
                View All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover content across all your favorite categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className={`glass-card hover-lift cursor-pointer group border ${category.color}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} channels</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/channels">
              <Button variant="outline" size="lg">
                See Full Channel List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Setup in 3 Easy Steps
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes with our simple setup process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Mobile vertical line */}
              <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/30 md:hidden pointer-events-none z-0" />
              {/* Desktop horizontal line */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-white/20 via-white/10 to-white/20 pointer-events-none z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {setupSteps.map((step, index) => (
                  <div key={index} className="relative md:text-center pl-16 md:pl-0 group">
                    {/* Dot on line (mobile) with number */}
                    <div className="md:hidden absolute left-8 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-white text-[11px] font-semibold flex items-center justify-center ring-4 ring-primary/20 transition-transform duration-200 group-hover:scale-110 z-10">
                      {step.step}
                    </div>
                    {/* Dot on line (desktop) with number */}
                    <div className="hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white text-xs font-semibold items-center justify-center ring-4 ring-white/30 border-2 border-white/60 drop-shadow-md transition-transform duration-200 group-hover:scale-110 z-20">
                      {step.step}
                    </div>

                    <div className="relative">
                      <div className="md:mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mt-8 md:mt-10 mb-2 md:mb-6 shadow-lg shadow-black/10">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 md:mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/setup">
              <Button variant="outline" size="lg">
                View Setup Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our IPTV service
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Streaming?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium IPTV streaming worldwide. 
            Get instant access with our 7-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link to="/Packages" className="flex items-center">
                View All Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;