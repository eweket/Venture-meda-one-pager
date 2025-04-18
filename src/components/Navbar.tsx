import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../logo/venture-meda-logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    // Update this when banner visibility changes
    const checkBannerVisibility = () => {
      const bodyPadding = parseInt(document.body.style.paddingTop);
      setBannerVisible(bodyPadding > 0);
    };

    const observer = new MutationObserver(checkBannerVisibility);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: '/#about', label: 'About' },
    { href: '/#benefits', label: 'Benefits' },
    { href: '/#eligibility', label: 'Eligibility' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 bg-white z-40 shadow-sm
      transition-all duration-300
      ${bannerVisible ? 'mt-[48px]' : 'mt-0'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={Logo}
              alt="Venture Meda Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-primary transition-colors font-poppins"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Link 
            to="/apply"
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-poppins"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          md:hidden bg-white/80 border-b
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'}
        `}
      >
        <div className="px-4 py-2 space-y-3 bg-white/80">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/apply"
            className="block w-full text-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
} 