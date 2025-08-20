import { Link } from 'react-router-dom';
import { Tv, MessageCircle, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Tv className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                StreamPro
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium IPTV streaming with HD/4K quality, global channels, and 24/7 support.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>24/7 Customer Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'Packages Plans', path: '/Packages' },
                { name: 'Setup Guide', path: '/setup' },
                { name: 'Channel List', path: '/channels' },
                { name: 'Reseller Program', path: '/reseller' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Support</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Support</span>
              </a>
              <a
                href="mailto:support@streampro.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Email Support</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Legal</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Refund Policy
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} StreamPro. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Premium IPTV streaming worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;