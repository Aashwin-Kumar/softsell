import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";


function App() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;
