import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Smartphone, Tv, Monitor, Download, Settings, Play } from 'lucide-react';

const Setup = () => {
  const steps = [
    {
      number: '01',
      title: 'Purchase & Receive Credentials',
      description: 'Contact us on WhatsApp to purchase your plan. You\'ll receive your login credentials instantly.',
      icon: <MessageCircle className="h-8 w-8 text-primary" />
    },
    {
      number: '02',
      title: 'Download IPTV App',
      description: 'Install the recommended IPTV player app on your device. We support all major platforms.',
      icon: <Download className="h-8 w-8 text-primary" />
    },
    {
      number: '03',
      title: 'Configure & Enjoy',
      description: 'Enter your credentials in the app and start streaming thousands of channels instantly.',
      icon: <Play className="h-8 w-8 text-primary" />
    }
  ];

  const devices = [
    {
      name: 'Android Devices',
      icon: <Smartphone className="h-8 w-8 text-white" />,
      description: 'Android phones, tablets, and Android TV boxes',
      apps: ['IPTV Smarters Pro', 'TiviMate', 'Perfect Player']
    },
    {
      name: 'Smart TVs',
      icon: <Tv className="h-8 w-8 text-white" />,
      description: 'Samsung, LG, Sony, and other smart TV brands',
      apps: ['Smart IPTV', 'SS IPTV', 'IPTV Smarters']
    },
    {
      name: 'iOS Devices',
      icon: <Smartphone className="h-8 w-8 text-white" />,
      description: 'iPhone, iPad, and Apple TV',
      apps: ['IPTV Smarters Pro', 'GSE SMART IPTV', 'nPlayer']
    },
    {
      name: 'PC & Mac',
      icon: <Monitor className="h-8 w-8 text-white" />,
      description: 'Windows computers and Mac devices',
      apps: ['VLC Media Player', 'IPTV Smarters Pro', 'Kodi']
    },
    {
      name: 'Amazon Fire Stick',
      icon: <Tv className="h-8 w-8 text-white" />,
      description: 'All Fire TV Stick models',
      apps: ['IPTV Smarters Pro', 'TiviMate', 'Perfect Player']
    },
    {
      name: 'MAG Devices',
      icon: <Settings className="h-8 w-8 text-white" />,
      description: 'MAG254, MAG322, MAG424 and similar',
      apps: ['Built-in Portal', 'STB Emulator']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Get Started in
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 3 Easy Steps</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Setting up your IPTV streaming is simple and takes just a few minutes. We provide full support.
          </p>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    {step.icon}
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Compatible with All Your Devices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stream on any device you own. Our service works seamlessly across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {devices.map((device, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    {device.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{device.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {device.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Recommended Apps:</h4>
                    <ul className="space-y-1">
                      {device.apps.map((app, appIndex) => (
                        <li key={appIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Need Help with Setup?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert support team is available 24/7 to help you get started. Free setup assistance included!
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Setup Help on WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Setup;