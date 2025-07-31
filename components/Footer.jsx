"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage("Thank you! We will get back to you within 24 hours.");
      setFormData({ name: "", contact: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1a1f2e] text-white py-12">
      {/* Have a Question Form - Full Width */}
      <div className="bg-white py-8 mb-12">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Have a Question?</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="md:flex justify-between gap-8">
              {/* Left Side: Name, Contact, Email */}
              <div className="w-full md:w-1/2 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-bold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Right Side: Message and Submit Button */}
              <div className="w-full md:w-1/2 space-y-5">
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    rows="5"
                    className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 rounded-md text-white font-medium transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
            {submitMessage && (
              <p className="text-center text-green-600 mt-4">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Yaazhtron Engineering Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">
              Yaazhtron Engineering Pvt Ltd is a leading provider of innovative
              engineering solutions, committed to excellence and customer
              satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+919994145508" className="text-gray-400 hover:text-blue-400">
                  +91 9994145508
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:info@yaazhtron.com" className="text-gray-400 hover:text-blue-400">
                  info@yaazhtron.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-400">
                  25, Bommasandra Industrial Area, Bangalore
                </span>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">FAQ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq#question1" className="text-gray-400 hover:text-blue-400">
                  What services do you offer?
                </Link>
              </li>
              <li>
                <Link href="/faq#question2" className="text-gray-400 hover:text-blue-400">
                  How can I get a quote?
                </Link>
              </li>
              <li>
                <Link href="/faq#question3" className="text-gray-400 hover:text-blue-400">
                  What is your project timeline?
                </Link>
              </li>
              <li>
                <Link href="/faq#question4" className="text-gray-400 hover:text-blue-400">
                  Do you provide support?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          {/* <p className="text-gray-400">
            © {new Date().getFullYear()} Yaazhtron Engineering Pvt Ltd. All rights reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
}