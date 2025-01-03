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
            Apply to <span className="text-primary">Venture Meda</span>
          </h1>
          <p className="text-xl text-gray-600 font-lora">
            Fill out the form below to start your application process
          </p>
        </div>

        {/* HubSpot form will be rendered here */}
        <div 
          id="hubspot-form-container" 
          className="bg-white shadow-lg rounded-xl p-8"
        ></div>
      </div>
    </div>
  );
} 