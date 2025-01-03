import { Mail, Phone, Linkedin, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/showcase/venturemeda',
    icon: Linkedin,
    hoverColor: 'hover:text-[#0077b5]'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/venturemeda',
    icon: Instagram,
    hoverColor: 'hover:text-[#E4405F]'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/venturemeda',
    icon: MessageCircle,
    hoverColor: 'hover:text-[#0088cc]'
  }
];

const quickLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Benefits', href: '/#benefits' },
  { name: 'Eligibility', href: '/#eligibility' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold font-poppins text-primary">
                Venture Meda
              </h3>
            </Link>
            <p className="text-gray-400 font-lora leading-relaxed">
              Empowering the Future of E-commerce in Ethiopia through innovation, 
              mentorship, and strategic partnerships.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`transform hover:scale-110 transition-all duration-300 ${social.hoverColor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors font-lora inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins text-white/90">
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-400 font-lora">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:apply@iceaddis.com" 
                  className="hover:text-primary transition-colors"
                >
                  apply@iceaddis.com
                </a>
              </p>
              <p className="flex items-center gap-3 text-gray-400 font-lora">
                <Phone size={16} className="text-primary" />
                <span>0911178129 / +251900045227</span>
              </p>
              <p className="flex items-start gap-3 text-gray-400 font-lora">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>Bole, Addis Ababa, Ethiopia</span>
              </p>
              <p className="flex items-center gap-3 text-gray-400 font-lora">
                <Clock size={16} className="text-primary" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-lora text-sm">
              &copy; {new Date().getFullYear()} Venture Meda. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-lora">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-lora">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 