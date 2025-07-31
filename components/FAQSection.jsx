

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I learn how to trade?",
      answer: "You can start with our free educational materials in the Knowledge Base section. We also provide a demo account with $10,000 to practice without risk."
    },
    {
      question: "How long does it take to withdraw funds?",
      answer: "Withdrawal processing usually takes 1-3 business days depending on your payment method. We strive to process all withdrawals as quickly as possible."
    },
    {
      question: "What is trading platform and when to buy/sell?",
      answer: "Our trading platform is a digital system for executing trading orders. The best time to buy or sell depends on market analysis, which you can learn about in our educational resources."
    },
    {
      question: "Can I trade using a phone / mobile device?",
      answer: "Yes, our platform is fully optimized for mobile devices. You can download our app from the App Store or Google Play Store."
    },
    {
      question: "What is the minimum deposit amount?",
      answer: "The minimum deposit amount is 10 USD, which allows you to start real trading on our platform."
    },
    {
      question: "Are there any deposit or withdrawal fees?",
      answer: "We don't charge any fees for deposits. For withdrawals, fees may vary depending on your payment method and region."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#1a2235] to-[#111827]">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Frequently asked questions
      </h2>
      <p className="text-gray-400 text-center text-sm mb-8">
        See the most common questions of new traders answered here.
      </p>

      {/* Split into two columns, full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          {faqs.slice(0, 3).map((faq, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:border-gray-600">
              <div
                className="px-6 py-4 flex justify-between items-center transition-colors duration-200 hover:bg-[#1a2540]"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-semibold text-gray-50">
                    {faq.question}
                </h3>
                <div className="transition-transform duration-300 ease-in-out">
                    {openIndex === index ? (
                        <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                    )}

                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-[#1a2235] border-t border-gray-700 text-gray-300">
                    <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {faqs.slice(3, 6).map((faq, index) => (
            <div
              key={index + 3}
              className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:border-gray-600">
              <div
                className="px-6 py-4 flex justify-between items-center transition-colors duration-200 hover:bg-[#1a2540]"
                onClick={() => toggleFaq(index + 3)}
              >
                <h3 className="font-semibold text-gray-50">
                    {faq.question}
                </h3>
                <div className="transition-transform duration-300 ease-in-out">
                    {openIndex === index + 3 ? (
                        <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                    )}

                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index + 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-[#1a2235] border-t border-gray-700 text-gray-300">
                    <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-12 text-center">
           <p className="text-gray-400 text-sm">
            Do you have other questions?
            <br />
            Feel free to <a href="#" className="text-blue-400 hover:underline transition-colors duration-200">contact our support team</a>.
          </p>
        </div>*/}
    </section>
  );
}