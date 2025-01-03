import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-secondary text-white pt-32 pb-20 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-8 text-primary animate-fade-in">
            Empowering the Future of E-commerce in Ethiopia
          </h1>
          <p className="font-lora text-xl mb-12 text-white/90 leading-relaxed animate-fade-in-delay">
            Join our 3rd cohort incubation program and be part of Ethiopia's thriving digital economy. 
            We're looking for visionary entrepreneurs ready to scale their businesses and create jobs through digital innovation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row items-center animate-fade-in-delay-2">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Apply Now <ArrowRight className="ml-2" size={20} />
            </a>
            <div className="inline-flex items-center text-white/90 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-semibold">Application Deadline:</span>
              <span className="ml-2">Feb 2, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}