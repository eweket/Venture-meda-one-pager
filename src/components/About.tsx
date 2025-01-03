export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            What is <span className="text-primary">Venture Meda</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
            A five-year initiative designed to create over 60,000 jobs by incubating 
            and accelerating e-commerce startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-delay">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
          </div>

          <div className="space-y-8 animate-fade-in-delay-2">
            <p className="text-lg text-gray-600 font-lora leading-relaxed">
              Venture Meda is a groundbreaking initiative designed to empower Ethiopia's 
              entrepreneurs in the digital economy. With the support of the Mastercard 
              Foundation, the Ministry of Innovation and Technology, and iceaddis, we aim 
              to create dignified employment for over 56,000 young adults.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 font-poppins">
                Through our programs, we will:
              </h3>
              <ul className="space-y-4">
                {[
                  'Support early-stage startups to scale and create impact',
                  'Equip growth-oriented businesses with resources to thrive',
                  'Foster connections between startups, investors, and key stakeholders'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </span>
                    <span className="text-gray-600 font-lora">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10">
              <h4 className="text-xl font-semibold text-secondary mb-3 font-poppins">
                Our Ultimate Goal
              </h4>
              <p className="text-gray-600 font-lora">
                To stimulate sustainable economic growth and build a robust e-commerce 
                ecosystem in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}