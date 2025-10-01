import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white">🐝</span>
            </div>
            <span className="text-xl">techbeees</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('features')} className="hover:text-amber-500 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-amber-500 transition-colors">
              Portfolio
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-lg border-t">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 hover:text-amber-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover:text-amber-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 hover:text-amber-500 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 hover:text-amber-500 transition-colors">
              Portfolio
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}