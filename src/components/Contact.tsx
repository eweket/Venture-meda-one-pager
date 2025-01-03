import { Linkedin, Instagram, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/showcase/venturemeda',
    icon: Linkedin,
    hoverColor: 'hover:text-[#0077b5]'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/venturemeda',
    icon: Instagram,
    hoverColor: 'hover:text-[#E4405F]'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/venturemeda',
    icon: MessageCircle,
    hoverColor: 'hover:text-[#0088cc]'
  }
];

const contactInfo = [
  {
    type: 'Website',
    value: 'www.iceaddis.com/venture-meda-2',
    url: 'https://www.iceaddis.com/venture-meda-2',
    icon: ExternalLink
  },
  {
    type: 'Telegram Channel',
    value: '@venturemeda',
    url: 'https://t.me/venturemeda',
    icon: MessageCircle
  },
  {
    type: 'Email',
    value: 'apply@iceaddis.com',
    url: 'mailto:apply@iceaddis.com',
    icon: Mail
  },
  {
    type: 'Phone',
    value: '0911178129 / +251900045227',
    url: 'tel:+251911178129',
    icon: Phone
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Let's <span className="text-primary">Connect</span>!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
            Follow us on social media to stay updated with our latest news and announcements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-12 mb-16 animate-fade-in-delay">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className={`
                    text-gray-600 ${social.hoverColor} transition-all duration-300
                    transform hover:scale-110
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Icon size={36} />
                </a>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-delay-2">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.url}
                  className="group bg-secondary/5 p-6 rounded-xl hover:bg-secondary/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 font-poppins mb-1">
                        {info.type}
                      </h3>
                      <p className="text-gray-900 font-lora">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}