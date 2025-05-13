import steps from "../data/steps";

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
          How It Works
        </h2>
        <p className="mt-2 text-gray-600 mb-10 dark:text-gray-400">
          A simple 3-step process to sell your software licenses.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={`/icon/${step.icon}`}
                alt={step.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-100">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
