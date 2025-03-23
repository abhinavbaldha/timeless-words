
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-navy text-xl font-semibold tracking-tight"
        >
          Inscribe.so
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-navy/80 hover:text-navy transition-colors duration-200"
          >
            Features
          </Link>
          <Link 
            to="/" 
            className="text-navy/80 hover:text-navy transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link 
            to="/" 
            className="text-navy/80 hover:text-navy transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            to="/" 
            className="text-navy/80 hover:text-navy transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            to="/" 
            className="premium-button text-offwhite bg-navy px-5 py-2 rounded-md hover:bg-navy-light transition-all duration-300"
          >
            Start Writing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-navy/80 hover:text-navy transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/" 
              className="text-navy/80 hover:text-navy transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/" 
              className="text-navy/80 hover:text-navy transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/" 
              className="text-navy/80 hover:text-navy transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/" 
              className="premium-button text-offwhite bg-navy px-5 py-2 rounded-md hover:bg-navy-light transition-all duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Writing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
