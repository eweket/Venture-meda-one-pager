import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt?: any;
  }
}

export default function Forms() {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // Create HubSpot form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "48492375",
          formId: "c71058fc-0675-4112-ba5e-a9071dad86ba",
          target: "#hubspot-form-container"
        });
      }
    });

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Apply to <span className="text-primary">ElevateHER</span>
          </h1>
          <p className="text-xl text-gray-600 font-lora">
            Fill out the form below to start your application process
          </p>
        </div>

        {/* Google Form*/}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyN2CymXoOdpg_K_Hhl62k30zQF8Hl-B4fG5zmn3m7tqs8zw/viewform?embedded=true"
            width="100%"
            height="800px"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="mx-auto"
            title="Venture Meda Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
} 