
import Link from 'next/link';
import { LucideBarChart2, CircleDollarSign, LineChart, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Select an asset",
      description: "Choose from various trading assets available.",
      icon: <CircleDollarSign size={24} className="text-amber-600" />
    },
    {
      number: 2, 
      title: "Monitor the chart",
      description: "Analyze price movements and market trends",
      icon: <LineChart size={24} className="text-amber-600" />
    },
    {
      number: 3,
      title: "Place a trade",
      description: "Make your prediction and execute the trade",
      icon: <LucideBarChart2 size={24} className="text-amber-600" />
    },
    {
      number: 4,
      title: "Get the result",
      description: "Receive your trading outcome and potential profit",
      icon: <DollarSign size={24} className="text-amber-600" />
    }
  ];

  return (
    <section className="py-12 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Start Trading in 4 Steps
          </h2>
          <div className="w-12 h-1 bg-emerald-300 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Grow your capital by making the right trading predictions. Will the price go up or down? 
            Predict the price movement of a trading asset and place a trade.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              {/* Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    {step.icon}
                </div>
                                
                {/* Title */}
                <h3 className="font-semibold text-base text-gray-800 mb-2">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                </p>
              </div>

              {/* Connection Arrow (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-amber-600">
                    <path 
                        d="M5 12h16m-7-7l7 7-7 7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                    </svg>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="#"
            className="bg-emerald-500 text-gray-50 px-8 py-3 rounded-md hover:bg-emerald-600 transition-colors inline-flex items-center font-semibold">
            Try it for free
          </Link>
          <p className="text-gray-500 text-sm mt-3 flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" clipRule="evenodd" />
            </svg>
            Practice on a demo account without registration
          </p>
        </div>
      </div>
    </section>
  );
}
