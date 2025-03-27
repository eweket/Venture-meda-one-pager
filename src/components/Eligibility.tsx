import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import visual from "../logo/eligibility.avif"

const criteria = [
  {
    title: 'Residency',
    detail: 'Must be based in Ethiopia'
  },
  {
    title: 'Age',
    detail: 'Founders aged 18–35'
  },
  {
    title: 'Team Composition',
    detail: 'All founding members should be women.'
  },
  {
    title: 'Revenue',
    detail: 'Business should be generating revenue for at least six months, with three months of profitability'
  },
  {
    title: 'Sector Focus',
    detail: 'All sectors such as fintech, edutech, logistics, health, service, retail are eligible. The business has to be tech-enabled or must use a digital platform'
  },
  {
    title: 'Job Creation',
    detail: 'Highly preferable if your startup has the potential to create jobs, especially for women'
  },
  {
    title: 'Registration',
    detail: 'Preferable if the business is registered with an updated business license'
  }
];

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Who Can <span className="text-primary">Apply</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
              Check if you meet our eligibility criteria
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {criteria.map((item, index) => (
              <ScrollAnimation key={index}>
                <motion.div 
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-lora">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="space-y-8">
            <ScrollAnimation>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={visual}
                  alt="Diverse team working"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  Special Consideration
                </h4>
                <p className="text-gray-600 font-lora leading-relaxed">
                  We strongly encourage applications from women-led businesses and 
                  marginalized groups, including individuals with disabilities and refugees.
                </p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}