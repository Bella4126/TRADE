

import Link from 'next/link';

export default function FeatureCard({ icon, title, description, ctaText, ctaLink = "#" }) {
  return (
    <div className="bg-white rounded-lg p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-200">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${icon.bgColor}`}>
        {icon.component}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      {/* Increased text size without affecting container */}
      <p className="text-gray-600 text-lg mb-6">
        {description}
      </p>
      <Link 
        href={ctaLink} 
        className="text-blue-600 hover:text-blue-700 flex items-center group transition-colors"
      >
        {ctaText} 
        <svg 
          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
