'use client';

import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronRight, Check, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const Withdrawal = () => {
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqs = [
    {
      id: 1,
      question: "How to withdraw money from the account?",
      answer: "You can withdraw funds to the same payment method you used for depositing. Navigate to the Withdrawal section, select your payment method, enter the amount and confirm the transaction."
    },
    {
      id: 2,
      question: "How long does it take to withdraw funds?",
      answer: "Withdrawal requests are processed within 3 business days. The actual time it takes for the funds to reach your account depends on your payment provider."
    },
    {
      id: 3,
      question: "What is the minimum withdrawal amount?",
      answer: "The minimum withdrawal amount is ₹1000."
    },
    {
      id: 4,
      question: "Is there any fee for depositing or withdrawing funds from the account?",
      answer: "No, we don't charge any fees for deposits or withdrawals. However, your payment provider might have their own fees."
    },
    {
      id: 5,
      question: "Do I need to provide any documents to make a withdrawal?",
      answer: "You may need to verify your account before making a withdrawal. This includes providing identification documents in line with our KYC policy."
    },
    {
      id: 6,
      question: "What is account verification?",
      answer: "Account verification is a process where we confirm your identity to comply with regulatory requirements and prevent fraud."
    },
    {
      id: 7,
      question: "How to understand that I need to go through account verification?",
      answer: "You'll receive a notification if verification is required. You can also check your verification status in the Account section."
    },
    {
      id: 8,
      question: "How long does the verification process take?",
      answer: "The verification process typically takes 1-3 business days after all required documents are submitted."
    },
    {
      id: 9,
      question: "How do I know that I successfully passed verification?",
      answer: "You'll receive a confirmation email once your verification is complete. The verification status in your account will also be updated."
    }
  ];

  return (
    <div className="bg-[#1a1f2e] text-white min-h-screen">
      <div className="p-4">
        {/* Navigation Tabs */}
        <div className="bg-[#252b3b] rounded-lg mb-6 flex overflow-x-auto">
           <Link href="/Deposit">
            <button className="py-3 px-4 text-gray-400 whitespace-nowrap">
              Deposit
            </button>
          </Link>
            <Link href="/Withdraw"><button className="py-3 px-4 bg-[#2a3042] text-white whitespace-nowrap">Withdrawal</button></Link>
                    <Link href="/Transaction">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Transactions</button>
                </Link>
                <Link href="/Trade">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Trades</button>
                </Link>
                <Link href="/Account">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Account</button>
                </Link>
                <Link href="/Market">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Market</button>
                </Link>
                <Link href="/Tournament">
                  <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Tournaments</button>
                </Link>
                <Link href="/Analytics"><button className="py-3 px-4 text-gray-400 whitespace-nowrap">Analytics</button></Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Account Info */}
          <div className="space-y-6">
            <div className="bg-[#252b3b] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Account:</h2>
              
              <div className="border-b border-gray-700 pb-4 mb-4">
                <div className="text-gray-400 text-sm mb-1">In the account:</div>
                <div className="text-xl font-bold">0.00 ₹</div>
              </div>
              
              <div className="border-b border-gray-700 pb-4 mb-4">
                <div className="text-gray-400 text-sm mb-1">Available for withdrawal:</div>
                <div className="text-xl font-bold">0.00 ₹</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm mb-1">Commission:</div>
                <div className="text-xl font-bold">0.00 ₹</div>
              </div>
            </div>
          </div>

          {/* Right Side - Withdrawal Info */}
          <div className="space-y-6">
            <div className="bg-[#252b3b] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Withdrawal:</h2>
              
              <div className="bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-4 flex items-start mb-4">
                <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <div className="text-white text-sm">
                  You can withdraw money from your balance to your bank card or electronic purse you used for depositing. You can request withdrawal any time. Your withdrawal requests are processed in 3 business days.
                </div>
              </div>
              
              <Link href="/deposit" className="text-green-500 hover:text-green-400 font-medium">
                Make a deposit
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Requests Section */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Some of your latest requests:</h2>
            <Link href="/history" className="flex items-center text-blue-400 hover:text-blue-300">
              All financial history
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          {/* No requests to show - this would be replaced with actual requests data */}
          <div className="text-gray-400 text-center py-4">
            No withdrawal requests yet
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">FAQ:</h2>
            <Link href="/faq" className="flex items-center text-blue-400 hover:text-blue-300">
              Check out full FAQ
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map(faq => (
              <div key={faq.id} className="border-b border-gray-700 pb-3">
                <button 
                  className="flex justify-between items-center w-full text-left py-2"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFaqs[faq.id] ? (
                    <ChevronDown size={18} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400" />
                  )}
                </button>
                {expandedFaqs[faq.id] && (
                  <div className="text-gray-400 text-sm py-2 pr-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info and Security Badges */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center text-green-400">
              <div className="w-4 h-4 mr-2 flex-shrink-0">🏦</div>
              <span>Minimum deposit amount: <span className="text-green-500">₹1000</span></span>
            </div>
            
            <div className="flex items-center text-green-400">
              <div className="w-4 h-4 mr-2 flex-shrink-0">💳</div>
              <span>Minimum withdrawal amount: <span className="text-green-500">₹1000</span></span>
            </div>
            
            <div className="flex items-center text-green-400">
              <Zap className="mr-2" size={16} />
              <span>Quick withdrawal from your account</span>
            </div>
            
            <div className="flex items-center text-green-400">
              <Check className="mr-2" size={16} />
              <span>Without a fee</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-end gap-3">
            <div className="bg-white rounded p-2 flex items-center justify-center">
              <span className="text-gray-600 text-xs font-semibold">Verified by VISA</span>
            </div>
            
            <div className="bg-white rounded p-2 flex items-center justify-center">
              <Shield className="text-gray-600 mr-1" size={12} />
              <span className="text-gray-600 text-xs font-semibold">SECURE PAYMENT</span>
            </div>
            
            <div className="bg-white rounded p-2 flex items-center justify-center">
              <span className="text-gray-600 text-xs font-semibold">MasterCard SecureCode</span>
            </div>
            
            <div className="bg-white rounded p-2 flex items-center justify-center">
              <span className="text-gray-600 text-xs font-semibold">3D Secure</span>
            </div>
            
            <div className="bg-white rounded p-2 flex items-center justify-center">
              <Shield className="text-gray-600 mr-1" size={12} />
              <span className="text-gray-600 text-xs font-semibold">SECURE SSL ENCRYPTION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;