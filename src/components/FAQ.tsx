import { useState } from 'react';
import { ChevronDown, Mail, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Is there a cost to apply?',
    answer: 'No, applying to the program is completely free.'
  },
  {
    question: 'How long is the program?',
    answer: 'The program is 6 months long but is designed to be flexible and convenient for busy founders.'
  },
  {
    question: 'What kind of businesses are eligible?',
    answer: `We're looking for technology-enabled or digital startups in sectors including:
    • Logistics and delivery
    • FinTech (Digital banking, Payment gateways, Peer-to-peer lending, Cryptocurrency and blockchain, microloans)
    • HealthTech and Wellness
    • EdTech
    • Inventory management systems
    • SaaS (Software as a Service) Platforms
    • Fashion and Lifestyle
    • Real Estate Tech (PropTech)
    • Entertainment and Media
    • Agriculture Tech (AgriTech)
    • Recruitment and Job Platforms`
  },
  {
    question: 'Can I apply as a solo entrepreneur?',
    answer: 'Preferably not, you must have a team of at least two people to qualify.'
  },
  {
    question: 'What happens after I submit my application?',
    answer: 'Shortlisted applicants will be contacted for interviews and a pitch session.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
            Find answers to common questions about Venture Meda
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-delay">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <h3 className="font-poppins font-semibold text-lg text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-200
                      ${openIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-200 ease-in-out
                    ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <p className="text-gray-600 font-lora whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary/5 rounded-xl animate-fade-in-delay-2">
            <h3 className="text-xl font-semibold mb-6 font-poppins text-center text-gray-900">
              Still have questions?
            </h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:apply@iceaddis.com" className="font-lora">
                  apply@iceaddis.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span className="font-lora">0911178129 / +251900045227</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}