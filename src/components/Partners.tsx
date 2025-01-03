import mint from "../logo/Logo_MinT.png"
import mastercard from "../logo/Logo_Mastercard_Foundation.png"
import iceaddis from "../logo/Logo_iceaddis_red-01-01.svg"
const partners = [
  {
    name: 'Ministry of Innovation and Technology',
    description: "Spearheading Ethiopia's tech and innovation landscape",
    logo: mint,
    url: 'https://mint.gov.et'
  },
  {
    name: 'Mastercard Foundation',
    description: 'Advancing dignified work opportunities for youth in Africa',
    logo: mastercard,
    url: 'https://mastercardfdn.org'
  },
  {
    name: 'iceaddis',
    description: "Ethiopia's premier tech incubator fostering startup innovation since 2011",
    logo: iceaddis,
    url: 'https://www.iceaddis.com'
  }
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Meet Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lora">
            Powered by leading organizations committed to Ethiopia's growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 animate-fade-in-delay">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="aspect-[3/2] relative mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="object-contain w-full h-full filter group-hover:brightness-110 transition-all"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 font-poppins text-gray-900">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 font-lora text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}