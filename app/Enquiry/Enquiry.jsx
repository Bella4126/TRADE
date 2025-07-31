"use client";
import { useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';

export default function EnquiryForm() {
  // Inquiry form state
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryQuery, setInquiryQuery] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  // Check if inquiry form is valid
  const isInquiryFormValid = inquiryEmail.trim() !== '' && inquiryQuery.trim() !== '';
  
  // Inquiry form handler
  const handleInquirySubmit = () => {
    if (isInquiryFormValid) {
      // Handle inquiry submission here
      console.log('Inquiry submitted:', { email: inquiryEmail, query: inquiryQuery });
      
      // Show success popup
      setShowSuccessPopup(true);
      
      // Reset form
      setInquiryEmail('');
      setInquiryQuery('');
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    }
  };
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 relative animate-pulse">
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
              Enquiry Delivered!
            </h4>
            <p className="text-gray-600 text-center text-sm">
              Your inquiry has been successfully submitted. We'll get back to you soon.
            </p>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-8 text-center">Have a Question?</h3>
            
            <div className="bg-[#2a3142] rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-6 text-center">
                  We're here to help. Send us your inquiry and we'll get back to you soon.
                </p>
                
                <div className="flex flex-col">
                  <div className="mb-4">
                    <label htmlFor="inquiry-email" className="block text-sm text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="inquiry-email" 
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-[#202531] border border-gray-700 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="inquiry-query" className="block text-sm text-gray-400 mb-1">
                      Your Question
                    </label>
                    <textarea 
                      id="inquiry-query" 
                      rows="5"
                      value={inquiryQuery}
                      onChange={(e) => setInquiryQuery(e.target.value)}
                      className="w-full bg-[#202531] border border-gray-700 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none transition-all duration-200"
                      placeholder="Describe your question or concern in detail..."
                    />
                  </div>
                  
                  <button 
                    type="button"
                    onClick={handleInquirySubmit}
                    disabled={!isInquiryFormValid}
                    className={`w-full py-3 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] ${
                      isInquiryFormValid 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg hover:shadow-xl' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Submit Inquiry
                    <Send size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}