import { useState } from "react";
import { Mail, User, Briefcase, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const licenseOptions = ["Windows", "Adobe", "Office", "Other"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.licenseType)
      newErrors.licenseType = "Please select a license type";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", form);
      alert("Thank you! We'll get back to you soon.");
      setForm({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl transition-all">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Get in Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 md:grid-cols-2"
          noValidate
        >
          {/* Name */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-orange-500 bg-white dark:bg-gray-800">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-orange-500 bg-white dark:bg-gray-800">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Company
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ring-orange-500 bg-white dark:bg-gray-800">
              <Briefcase className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
                placeholder="Company Name"
              />
            </div>
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>

          {/* License Type */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              License Type
            </label>
            <select
              name="licenseType"
              value={form.licenseType}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 ring-orange-500 bg-white dark:bg-gray-800 dark:text-white"
            >
              <option value="">-- Select --</option>
              {licenseOptions.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
            )}
          </div>

          {/* Message - full width */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Message
            </label>
            <div className="flex border rounded-lg px-3 py-2 focus-within:ring-2 ring-orange-500 bg-white dark:bg-gray-800">
              <MessageSquare className="text-gray-400 mt-1 mr-2" size={18} />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
                placeholder="Type your message..."
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button - full width */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
