import React, { useState, useEffect } from 'react';

interface AnimatedNavProps {
  scrollY: number;
  onNavigate: (targetId: string) => void;
}

const AnimatedNav: React.FC<AnimatedNavProps> = ({ scrollY, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock/unlock body scroll based on menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (targetId: string) => {
    onNavigate(targetId);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
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

            {/* Hamburger Toggle Button */}
            <button
              className="hamburger-button"
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

      {/* Sidebar Menu */}
      <div className={`sidebar-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        {/* Backdrop */}
        <div className="sidebar-backdrop" onClick={toggleMenu}></div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {/* Sidebar Header */}
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <span className="sidebar-logo-text">
                Vintique Studio
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-nav-links">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="sidebar-nav-button"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <span className="sidebar-nav-text">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="sidebar-footer">
            <p className="sidebar-tagline">Where Vintage Meets Modern</p>
            <div className="sidebar-contact">
              <span>hello@vintiquestudio.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedNav;
