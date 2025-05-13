import React from "react";

const companyLogos = [
  {
    light: "/logos/microsoft.png",
    dark: "logos/white-microsoft-60.png",
    alt: "Microsoft",
  },
  {
    light: "/logos/adobe-96.png",
    dark: "/logos/white-adobe-100.png",
    alt: "Adobe",
  },
  {
    light: "/logos/hubspot-50.png",
    dark: "/logos/white-hubspot-96.png",
    alt: "Hubspot",
  },
  {
    light: "/logos/aws-96.png",
    dark: "/logos/white-aws-96.png",
    alt: "AWS",
  },
  {
    light: "/logos/oracle-100.png",
    dark: "/logos/white-oracle-150.png",
    alt: "Oracle",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-1 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8">
          Resell Your Unused <br className="hidden sm:block" />
          Software Licenses with{" "}
          <span className="text-orange-500">SoftSell</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
          Turn your unused software licenses into cash. Join our secure
          marketplace to list and sell with ease.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Start Selling
          </button>
          <button className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Learn More
          </button>
        </div>

        {/* Trusted Logos */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Trusted by top software resellers
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
            {companyLogos.map((logo, i) => (
              <div key={i} className="relative h-8">
                {/* Light mode logo */}
                <img
                  src={logo.light}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain block dark:hidden grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                />
                {/* Dark mode logo */}
                <img
                  src={logo.dark}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain hidden dark:block grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
