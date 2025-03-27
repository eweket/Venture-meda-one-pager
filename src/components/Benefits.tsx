import { BookOpen, Users, Coins, LineChart, Network, Globe, Lightbulb } from 'lucide-react';
import ScrollAnimation from "./ScrollAnimation";

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
    icon: Lightbulb,
    title: 'Idea Camp',
    description: 'A two-day intensive bootcamp to provide high-impact practical tools to review your business model through Design Thinking.',
    color: 'primary'
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
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Program <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
            What will you gain from joining Venture Meda elevateHER
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLastRow = index >= 4;
            return (
              <ScrollAnimation key={index}>
                <div className={`group ${isLastRow ? 'lg:col-span-1' : ''}`}>
                  <div className={`
                    bg-white p-6 rounded-xl
                    border border-gray-100 shadow-sm
                    transition-all duration-300 ease-in-out
                    h-[250px] group-hover:h-auto
                    relative overflow-hidden
                  `}>
                    {/* Header - Always Visible */}
                    <div className="mb-6">
                      <div className={`
                        w-12 h-12 bg-${benefit.color}/10 rounded-lg
                        flex items-center justify-center mb-4
                      `}>
                        <Icon className={`w-6 h-6 text-${benefit.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold font-poppins text-gray-900">
                        {benefit.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {benefit.description}
                      </p>

                      {benefit.details && (
                        <ul className="space-y-2">
                          {benefit.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-gray-600">
                              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="
                      absolute bottom-0 inset-x-0 h-20
                      bg-gradient-to-t from-white to-transparent
                      group-hover:opacity-0
                      transition-opacity duration-300
                    "/>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation>
          <div className="mt-16 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 font-poppins text-center">
              Why <span className="text-primary">Join</span>?
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            If you are looking to refine your business model, leverage social media and AI tools, validate your products, and enhance your market strategies with expert guidance, this six-month program is designed for you. <br></br>
            Gain valuable insights, receive tailored feedback, and expand your network by connecting with other women entrepreneurs.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}