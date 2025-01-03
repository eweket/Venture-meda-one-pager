import { Mail, AlertCircle } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-secondary/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Alert Banner */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
            <AlertCircle size={16} />
            <span className="font-poppins text-sm">Coming Soon</span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins animate-fade-in">
            Venture <span className="text-primary">Meda</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-lora max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            We're building Ethiopia's premier e-commerce startup incubator. 
            Join us in shaping the future of digital commerce.
          </p>

          {/* Contact Info */}
          <div className="mt-8 inline-flex items-center gap-2 text-gray-600 animate-fade-in-delay-2">
            <Mail size={20} className="text-primary" />
            <a 
              href="mailto:apply@iceaddis.com"
              className="font-lora hover:text-primary transition-colors"
            >
              apply@iceaddis.com
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 font-lora">
        <p>&copy; {new Date().getFullYear()} Venture Meda. All rights reserved.</p>
      </footer>
    </div>
  );
} 