import { BookOpen, Users, Coins, LineChart, Network, Globe } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Comprehensive Business Diagnosis',
    description: 'Assess your current gaps and collaborate with the iceaddis team to define key performance indicators (KPIs) tailored to achieve your goals effectively.',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Business Development Support',
    description: 'Participate in entrepreneurship workshops and boot camp sessions designed to empower you with essential business skills and strategies.',
    details: [
      'Identify and understand your customers',
      'Develop strong branding and marketing',
      'Focus on unique value proposition',
      'Test and refine your product',
      'Craft go-to-market strategy'
    ],
    color: 'secondary'
  },
  {
    icon: Network,
    title: 'Expert Advisory Sessions',
    description: 'Engage in regular one-on-one technical advisory sessions with seasoned industry experts to address specific challenges and refine your business approach.',
    color: 'primary'
  },
  {
    icon: Globe,
    title: 'Networking Opportunities',
    description: 'Access exclusive online and in-person networking platforms, Mastercard Foundations learning summits, and demo-day events to build meaningful connections.',
    color: 'secondary'
  },
  {
    icon: LineChart,
    title: 'Marketing and Promotion',
    description: 'Showcase your products through various networking platforms and gain opportunities to pitch to potential investors when ready.',
    color: 'primary'
  },
  {
    icon: Coins,
    title: 'Seed Funding',
    description:"Receive initial funding to support your startup's growth and operational needs.",
    color: 'secondary'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Program <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
            What you'll gain from joining Venture Meda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className={`
                  bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300
                  animate-fade-in-delay border border-${benefit.color}/10
                  transform hover:-translate-y-1
                `}
              >
                <div className={`
                  w-14 h-14 bg-${benefit.color}/10 rounded-xl 
                  flex items-center justify-center mb-6
                `}>
                  <Icon className={`w-7 h-7 text-${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-900">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 font-lora mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {benefit.details && (
                  <ul className="space-y-2 mt-4">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 font-lora">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-secondary/5 p-8 rounded-xl animate-fade-in-delay-2">
          <h3 className="text-2xl font-semibold mb-6 font-poppins text-center text-gray-900">
            Why <span className="text-primary">Join</span>?
          </h3>
          <p className="text-gray-600 font-lora leading-relaxed max-w-4xl mx-auto text-center">
            If your startup is fairly new in the market and you are thriving to refine your business model, 
            validate your products, and enhance your market strategies with tailored guidance and feedback, 
            you will benefit from this 6-month program. Additionally, being part of the Venture Meda incubator 
            program will help boost credibility and visibility, helping your startup overcome challenges and 
            scale effectively in a competitive environment.
          </p>
        </div>
      </div>
    </section>
  );
}