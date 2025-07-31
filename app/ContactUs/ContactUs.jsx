"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowCircleRight, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
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
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage("Thank you! We will get back to you within 24 hours.");
      setFormData({ firstName: "", lastName: "", email: "", contact: "", message: "" });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        <div className="bg-[#2a3142] rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#232939] p-2 flex justify-center">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
          </div>
          <div className="p-6">
            <div className="md:flex justify-between gap-8">
              {/* Address Information */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="text-white">
                  <p className="text-gray-400 mb-6">
                    Have a project in mind or need more information about our services? <br /> We'd love to hear from you. Reach out and our team will get back to you shortly.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <FaPhone className="text-blue-400" />
                    <a href="tel:+918041234567" className="text-gray-400 hover:text-blue-400">
                      +91 9994145508
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <IoMdMail />
                    <a href="mailto:info@yaazhtron.com" className="text-gray-400 hover:text-blue-400">
                      info@yaazhtron.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <IoMdMail />
                    <a href="mailto:sales@yaazhtron.com" className="text-gray-400 hover:text-blue-400">
                      sales@yaazhtron.com
                    </a>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-white mb-2">Office Address:</p>
                    <p className="text-gray-400">
                      Yaazhtron Engineering Pvt Ltd <br />
                      25, Bommasandra Industrial Area, Opp. <br /> Arvind Fashions, near Times of India, <br /> Hosur Road, Bangalore – 560099
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full md:w-1/2 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-full">
                      <label htmlFor="firstName" className="block text-sm font-bold text-gray-300 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="w-full bg-[#1a1f2e] px-4 py-3 border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-300 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="w-full bg-[#1a1f2e] px-4 py-3 border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-[#1a1f2e] px-4 py-3 border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-bold text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full bg-[#1a1f2e] px-4 py-3 border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message"
                      rows="5"
                      className="w-full bg-[#1a1f2e] px-4 py-3 border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
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
                    {!isSubmitting && <FaArrowCircleRight size={20} />}
                  </button>

                  {submitMessage && (
                    <p className="text-center text-green-400 mt-4">{submitMessage}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}