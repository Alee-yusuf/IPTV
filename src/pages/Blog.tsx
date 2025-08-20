import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Search, TrendingUp, Tv, Smartphone, Globe, Trophy, Scale } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of IPTV: Trends to Watch in 2025',
    excerpt: 'Discover the latest innovations in IPTV technology and how they\'re transforming the streaming landscape. From 8K streaming to AI-powered content recommendations.',
    image: <Tv className="h-16 w-16" aria-label="Television" />,
    category: 'Industry Trends',
    date: '2024-12-15',
    readTime: '8 min read',
    featured: true
  };

  const blogPosts = [
    {
      title: 'How to Choose the Best IPTV Player for Your Device',
      excerpt: 'Compare the top IPTV player applications and find the perfect one for your streaming setup.',
      image: <Smartphone className="h-10 w-10" aria-label="Smartphone" />,
      category: 'Setup Guide',
      date: '2024-12-10',
      readTime: '5 min read'
    },
    {
      title: 'IPTV vs Traditional Cable: The Complete Comparison',
      excerpt: 'Understanding the differences, benefits, and drawbacks of IPTV compared to traditional cable TV.',
      image: <Scale className="h-10 w-10" aria-label="Comparison" />,
      category: 'Comparison',
      date: '2024-12-08',
      readTime: '7 min read'
    },
    {
      title: 'Optimizing Your Internet for Better IPTV Streaming',
      excerpt: 'Tips and tricks to ensure smooth, buffer-free streaming on any internet connection.',
      image: <Globe className="h-10 w-10" aria-label="Internet" />,
      category: 'Technical',
      date: '2024-12-05',
      readTime: '6 min read'
    },
    {
      title: 'Top Sports Channels Available on IPTV',
      excerpt: 'A comprehensive guide to sports channels and live events you can watch through IPTV.',
      image: <Trophy className="h-10 w-10" aria-label="Sports" />,
      category: 'Sports',
      date: '2024-12-03',
      readTime: '4 min read'
    },
    {
      title: 'Setting Up IPTV on Smart TVs: Step-by-Step Guide',
      excerpt: 'Learn how to install and configure IPTV apps on popular smart TV brands.',
      image: <Tv className="h-10 w-10" aria-label="Television" />,
      category: 'Setup Guide',
      date: '2024-12-01',
      readTime: '8 min read'
    },
    {
      title: 'The Legal Aspects of IPTV Services',
      excerpt: 'Understanding the legal framework around IPTV services and how to choose legitimate providers.',
      image: <Scale className="h-10 w-10" aria-label="Legal" />,
      category: 'Legal',
      date: '2024-11-28',
      readTime: '10 min read'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24 },
    { name: 'Setup Guide', count: 8 },
    { name: 'Industry Trends', count: 6 },
    { name: 'Technical', count: 5 },
    { name: 'Sports', count: 3 },
    { name: 'Legal', count: 2 }
  ];

  const popularPosts = [
    'Complete IPTV Setup Guide for Beginners',
    'Best IPTV Apps for Android TV',
    'How to Fix IPTV Buffering Issues',
    'IPTV Channel Lists: What to Expect'
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            IPTV Insights
            <span className="bg-gradient-primary bg-clip-text text-transparent"> & News</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with the latest IPTV trends, setup guides, and industry insights.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <Card className="glass-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-gradient-primary text-white">
                      Featured
                    </Badge>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-surface flex items-center justify-center">
                  {featuredPost.image}
                </div>
              </div>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="glass-card hover-lift cursor-pointer group">
                  <div className="aspect-video bg-gradient-surface flex items-center justify-center">
                    {post.image}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <TrendingUp className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Search Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 hover:text-primary cursor-pointer transition-colors">
                      <span className="text-muted-foreground hover:text-primary transition-colors">{category.name}</span>
                      <span className="text-sm text-muted-foreground">({category.count})</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors leading-relaxed">
                        {post}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="/setup" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Smartphone className="h-4 w-4" />
                    <span>Setup Guide</span>
                  </a>
                  <a href="/channels" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Tv className="h-4 w-4" />
                    <span>Channel List</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;