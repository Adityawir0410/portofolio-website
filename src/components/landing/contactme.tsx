import type React from "react";
import { useState } from "react";

const ContactMe: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "68a0b925-8fb5-4d30-8cdc-8139c41056a1");

    const payload = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset(); // Reset the form on success
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
      console.error("Error:", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-12 lg:gap-16">
        {/* Left Section - Contact Info */}
        <div className="lg:pr-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Email, call, or complete the form to learn how we can help you.
          </p>
          <p className="text-xl text-gray-800 font-medium mb-3">info@yourcompany.com</p>
          <p className="text-lg text-gray-600 mb-8">+1 123-456-7890</p>
          <a href="#" className="text-lg text-blue-600 underline cursor-pointer mb-8 block">
            Customer Support
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg text-gray-800 font-semibold mb-2">Customer Support</h3>
              <p className="text-base text-gray-600">Available 24/7 for any concerns.</p>
            </div>
            <div>
              <h3 className="text-lg text-gray-800 font-semibold mb-2">Feedback</h3>
              <p className="text-base text-gray-600">Your input helps us improve.</p>
            </div>
            <div>
              <h3 className="text-lg text-gray-800 font-semibold mb-2">Media Inquiries</h3>
              <p className="text-base text-gray-600">media@yourcompany.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="mt-8 lg:mt-0">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-5 md:p-7 max-w-md mx-auto lg:mx-0"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Get in Touch</h3>
            <p className="text-sm text-gray-600 mb-6">
              You can reach us anytime by filling out this form.
            </p>

            {isSuccess && (
              <p className="text-green-600 text-center mb-4">Email sent successfully!</p>
            )}
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 px-4 text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
