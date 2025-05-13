import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-4 md:px-10 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-100 mb-12">
          Real feedback from people who used SoftSell.
        </p>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            <ChevronLeft className="text-gray-700 dark:text-white" />
          </button>

          {/* Scroll Container */}
          <div ref={scrollRef} className="overflow-x-auto no-scrollbar px-2">
            <div className="flex gap-6 md:gap-8 w-max">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-[280px] max-w-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <p className="text-gray-700 dark:text-gray-100 italic mb-4">
                    “{t.feedback}”
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {t.role} at {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            <ChevronRight className="text-gray-700 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
