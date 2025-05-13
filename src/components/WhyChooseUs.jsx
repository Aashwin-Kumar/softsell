import features from "../data/features";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
          Why Choose SoftSell?
        </h2>
        <p className="mt-2 text-gray-600 mb-10 dark:text-gray-800">
          Here's why thousands trust us with their unused software licenses.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={`/icon/${feature.icon}`}
                alt={feature.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm dark:text-gray-100">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
