'use client';

import React from 'react';
import { Clock, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const Market = () => {
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
           <Link href="/Withdraw"><button className="py-3 px-4 text-gray-400 whitespace-nowrap">Withdrawal</button></Link>
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
                 <button className="py-3 px-4 bg-[#2a3042] text-white whitespace-nowrap">Market</button>
               </Link>
               <Link href="/Tournament">
                 <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Tournaments</button>
               </Link>
               <Link href="/Analytics"><button className="py-3 px-4 text-gray-400 whitespace-nowrap">Analytics</button></Link>
        </div>
        
        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Risk Free Card */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-blue-500 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Risk Free</h3>
                  <p className="text-green-500 text-xs">0 PROMO CODES AVAILABLE</p>
                </div>
              </div>
              <button className="text-blue-400">
                <HelpCircle size={24} />
              </button>
            </div>
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 text-center border-t border-gray-700 py-2 text-gray-400 text-xs">
              <div>PROMO CODE</div>
              <div>STATUS</div>
              <div>USING</div>
            </div>
            
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center text-gray-500">
              <div className="bg-gray-700 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-sm mb-1">You do not have a promo code</p>
              <p className="text-sm">history yet. You can add a promo</p>
              <p className="text-sm">code using the button below.</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between p-4 border-t border-gray-700">
              <button className="flex items-center text-white bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                <Clock size={16} className="mr-2" />
                Show all history
              </button>
              <div className="flex space-x-2">
                <button className="bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                  Get 210₹ Free
                </button>
                <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                  Enter promo code
                </button>
              </div>
            </div>
          </div>
          
          {/* Cashback Card */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-purple-500 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cashback</h3>
                  <p className="text-green-500 text-xs">0 PROMO CODES AVAILABLE</p>
                </div>
              </div>
              <button className="text-blue-400">
                <HelpCircle size={24} />
              </button>
            </div>
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 text-center border-t border-gray-700 py-2 text-gray-400 text-xs">
              <div>PROMO CODE</div>
              <div>STATUS</div>
              <div>USING</div>
            </div>
            
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center text-gray-500">
              <div className="bg-gray-700 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-sm mb-1">You do not have a promo code</p>
              <p className="text-sm">history yet. You can add a promo</p>
              <p className="text-sm">code using the button below.</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between p-4 border-t border-gray-700">
              <button className="flex items-center text-white bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                <Clock size={16} className="mr-2" />
                Show all history
              </button>
              <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                Enter promo code
              </button>
            </div>
          </div>
          
          {/* Deposit Bonus Card */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-orange-500 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Deposit Bonus</h3>
                  <p className="text-green-500 text-xs">0 PROMO CODES AVAILABLE</p>
                </div>
              </div>
              <button className="text-blue-400">
                <HelpCircle size={24} />
              </button>
            </div>
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 text-center border-t border-gray-700 py-2 text-gray-400 text-xs">
              <div>PROMO CODE</div>
              <div>STATUS</div>
              <div>USING</div>
            </div>
            
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center text-gray-500">
              <div className="bg-gray-700 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-sm mb-1">You do not have a promo code</p>
              <p className="text-sm">history yet. You can add a promo</p>
              <p className="text-sm">code using the button below.</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between p-4 border-t border-gray-700">
              <button className="flex items-center text-white bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                <Clock size={16} className="mr-2" />
                Show all history
              </button>
              <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                Enter promo code
              </button>
            </div>
          </div>
          
          {/* Percentage of turnover Card */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-purple-500 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Percentage of turnover</h3>
                  <p className="text-green-500 text-xs">0 PROMO CODES AVAILABLE</p>
                </div>
              </div>
              <button className="text-blue-400">
                <HelpCircle size={24} />
              </button>
            </div>
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 text-center border-t border-gray-700 py-2 text-gray-400 text-xs">
              <div>PROMO CODE</div>
              <div>STATUS</div>
              <div>USING</div>
            </div>
            
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center text-gray-500">
              <div className="bg-gray-700 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-sm mb-1">You do not have a promo code</p>
              <p className="text-sm">history yet. You can add a promo</p>
              <p className="text-sm">code using the button below.</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between p-4 border-t border-gray-700">
              <button className="flex items-center text-white bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                <Clock size={16} className="mr-2" />
                Show all history
              </button>
              <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                Enter promo code
              </button>
            </div>
          </div>
          
          {/* Balance Bonus Card */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-blue-400 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Balance Bonus</h3>
                  <p className="text-green-500 text-xs">0 PROMO CODES AVAILABLE</p>
                </div>
              </div>
              <button className="text-blue-400">
                <HelpCircle size={24} />
              </button>
            </div>
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 text-center border-t border-gray-700 py-2 text-gray-400 text-xs">
              <div>PROMO CODE</div>
              <div>STATUS</div>
              <div>USING</div>
            </div>
            
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center text-gray-500">
              <div className="bg-gray-700 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-sm mb-1">You do not have a promo code</p>
              <p className="text-sm">history yet. You can add a promo</p>
              <p className="text-sm">code using the button below.</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between p-4 border-t border-gray-700">
              <button className="flex items-center text-white bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                <Clock size={16} className="mr-2" />
                Show all history
              </button>
              <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                Enter promo code
              </button>
            </div>
          </div>
          
          {/* Cancel X points Card */}
          <div className="bg-[#252b3b] rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-teal-500 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cancel X points</h3>
                  <p className="text-green-500 text-xs">0 PROMO CODES AVAILABLE</p>
                </div>
              </div>
              <button className="text-blue-400">
                <HelpCircle size={24} />
              </button>
            </div>
            
            {/* Table Headers */}
            <div className="grid grid-cols-3 text-center border-t border-gray-700 py-2 text-gray-400 text-xs">
              <div>PROMO CODE</div>
              <div>STATUS</div>
              <div>USING</div>
            </div>
            
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center text-gray-500">
              <div className="bg-gray-700 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <p className="text-sm mb-1">You do not have a promo code</p>
              <p className="text-sm">history yet. You can add a promo</p>
              <p className="text-sm">code using the button below.</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between p-4 border-t border-gray-700">
              <button className="flex items-center text-white bg-[#2a3042] hover:bg-[#323a4e] py-2 px-4 rounded">
                <Clock size={16} className="mr-2" />
                Show all history
              </button>
              <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                Enter promo code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
