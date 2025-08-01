import React, { useState, useEffect } from 'react';

interface AnimatedNavProps {
  scrollY: number;
  onNavigate: (targetId: string) => void;
}

const AnimatedNav: React.FC<AnimatedNavProps> = ({ scrollY, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    if (isMenuOpen && scrollY > 0) {
      setIsMenuOpen(false);
    }
  }, [scrollY, isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (targetId: string) => {
    onNavigate(targetId);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-vintage-cream/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-display font-bold text-vintage-charcoal">
              Vintique Studio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-vintage-charcoal hover:text-vintage-gold transition-colors duration-200 font-body font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Animated Hamburger Button */}
            <button
              className="md:hidden hamburger-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        {/* Background with vintage texture */}
        <div className="mobile-menu-background"></div>
        
        {/* Menu Content */}
        <div className="mobile-menu-content">
          {/* Close Button */}
          <button
            className="close-button"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>

          {/* Navigation Links */}
          <nav className="mobile-nav-links">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="mobile-nav-link"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <span className="nav-link-text">{item.name}</span>
                <span className="nav-link-underline"></span>
              </button>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="mobile-menu-footer">
            <p className="menu-tagline">Where Vintage Meets Modern</p>
            <div className="menu-contact">
              <span>hello@vintiquestudio.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedNav;