import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Search, Tv, Film, Globe, Baby, Trophy, Music, Newspaper, Popcorn, Package, Sparkles, Medal, Radio, Flag } from 'lucide-react';
import { useState } from 'react';

const Channels = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Channels', icon: <Globe className="h-5 w-5" />, count: '12,000+' },
    { id: 'sports', name: 'Sports', icon: <Trophy className="h-5 w-5" />, count: '500+' },
    { id: 'movies', name: 'Movies & Series', icon: <Film className="h-5 w-5" />, count: '30,000+' },
    { id: 'news', name: 'News', icon: <Tv className="h-5 w-5" />, count: '200+' },
    { id: 'kids', name: 'Kids', icon: <Baby className="h-5 w-5" />, count: '150+' },
    { id: 'music', name: 'Music', icon: <Music className="h-5 w-5" />, count: '100+' },
  ];

  const featuredChannels = [
    { name: 'ESPN', logo: <Trophy className="h-8 w-8" aria-label="Sports" />, category: 'Sports', quality: '4K' },
    { name: 'HBO Max', logo: <Film className="h-8 w-8" aria-label="Movies" />, category: 'Movies', quality: 'HD' },
    { name: 'CNN', logo: <Newspaper className="h-8 w-8" aria-label="News" />, category: 'News', quality: 'HD' },
    { name: 'Disney+', logo: <Sparkles className="h-8 w-8" aria-label="Kids" />, category: 'Kids', quality: '4K' },
    { name: 'MTV', logo: <Music className="h-8 w-8" aria-label="Music" />, category: 'Music', quality: 'HD' },
    { name: 'Netflix', logo: <Popcorn className="h-8 w-8" aria-label="Movies" />, category: 'Movies', quality: '4K' },
    { name: 'Sky Sports', logo: <Trophy className="h-8 w-8" aria-label="Sports" />, category: 'Sports', quality: '4K' },
    { name: 'BBC One', logo: <Radio className="h-8 w-8" aria-label="Radio" />, category: 'News', quality: 'HD' },
    { name: 'Cartoon Network', logo: <Film className="h-8 w-8" aria-label="Kids" />, category: 'Kids', quality: 'HD' },
    { name: 'Fox News', logo: <Newspaper className="h-8 w-8" aria-label="News" />, category: 'News', quality: 'HD' },
    { name: 'NBA TV', logo: <Medal className="h-8 w-8" aria-label="Sports" />, category: 'Sports', quality: '4K' },
    { name: 'Amazon Prime', logo: <Package className="h-8 w-8" aria-label="Movies" />, category: 'Movies', quality: '4K' },
  ];

  const countries = [
    { name: 'United States', channels: '2,500+', flag: 'US' },
    { name: 'United Kingdom', channels: '1,800+', flag: 'UK' },
    { name: 'Canada', channels: '900+', flag: 'CA' },
    { name: 'Germany', channels: '1,200+', flag: 'DE' },
    { name: 'France', channels: '1,100+', flag: 'FR' },
    { name: 'Spain', channels: '800+', flag: 'ES' },
    { name: 'Italy', channels: '700+', flag: 'IT' },
    { name: 'Netherlands', channels: '600+', flag: 'NL' },
    { name: 'Australia', channels: '500+', flag: 'AU' },
    { name: 'Brazil', channels: '900+', flag: 'BR' },
    { name: 'India', channels: '1,500+', flag: 'IN' },
    { name: 'Turkey', channels: '400+', flag: 'TR' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            All Your Favorite Channels
            <span className="bg-gradient-primary bg-clip-text text-transparent"> in One Place</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Access 12,000+ live channels and 30,000+ movies & series from around the world in HD and 4K quality.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for channels, shows, or movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-primary text-white border-primary'
                      : 'bg-background border-border text-muted-foreground hover:text-foreground hover:border-primary'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Channels
            </h2>
            <p className="text-xl text-muted-foreground">
              Popular channels from our extensive collection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {featuredChannels.map((channel, index) => (
              <Card key={index} className="glass-card hover-lift group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {channel.logo}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{channel.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{channel.category}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    channel.quality === '4K' 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-surface-accent text-muted-foreground'
                  }`}>
                    {channel.quality}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Global Coverage
            </h2>
            <p className="text-xl text-muted-foreground">
              Channels from every corner of the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {countries.map((country, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">
                    <Flag className="h-8 w-8" aria-label={`${country.name} flag`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{country.name}</h3>
                  <p className="text-primary font-medium">{country.channels}</p>
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
            Want to See the Full Channel List?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us on WhatsApp for the complete channel lineup and start streaming today!
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Full Channel List
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Channels;