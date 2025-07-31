'use client';

import React, { useState } from 'react';
import { ChevronDown, Info, Rocket, Shield, Check, CreditCard, Zap, Coins } from 'lucide-react';
import Link from 'next/link';
const Deposit = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedEPayment, setSelectedEPayment] = useState(null);

  const cryptoOptions = [
    { id: 1, name: 'USD Tether (TRC-20)', icon: '₮', color: 'text-green-500' },
    { id: 2, name: 'USD Tether (ERC-20)', icon: '₮', color: 'text-green-500' },
    { id: 3, name: 'Ethereum (ETH)', icon: 'Ξ', color: 'text-blue-400' },
    { id: 4, name: 'USD Tether (Polygon)', icon: '₮', color: 'text-purple-500' },
    { id: 5, name: 'USD Coin (ERC-20)', icon: '$', color: 'text-blue-500' },
    { id: 6, name: 'USD Coin (Polygon)', icon: '$', color: 'text-purple-500' },
    { id: 7, name: 'Binance Pay', icon: 'B', color: 'text-yellow-500' },
    { id: 8, name: 'USD Tether (BEP-20)', icon: '₮', color: 'text-yellow-500' },
    { id: 9, name: 'Bitcoin (BTC)', icon: '₿', color: 'text-orange-500' },
    { id: 10, name: 'Litecoin (LTC)', icon: 'Ł', color: 'text-gray-400' },
    { id: 11, name: 'Bitcoin Cash', icon: '₿', color: 'text-green-400' },
    { id: 12, name: 'Tron (TRX)', icon: 'T', color: 'text-red-500' },
    { id: 13, name: 'Dash', icon: 'D', color: 'text-blue-400' },
    { id: 14, name: 'Dai', icon: 'D', color: 'text-orange-400' },
    { id: 15, name: 'Solana', icon: 'S', color: 'text-purple-400' },
    { id: 16, name: 'Polkadot', icon: '●', color: 'text-pink-500' },
    { id: 17, name: 'Dogecoin', icon: 'Ð', color: 'text-yellow-400' },
    { id: 18, name: 'Ripple', icon: 'X', color: 'text-gray-500' },
    { id: 19, name: 'ApeCoin (APE)', icon: 'A', color: 'text-blue-400' },
    { id: 20, name: 'Uniswap (UNI)', icon: 'U', color: 'text-pink-400' },
    { id: 21, name: 'Avalanche (AVAX)', icon: 'A', color: 'text-red-400' }
  ];

  const ePaymentOptions = [
    { id: 1, name: 'NetWallet', icon: 'N', color: 'text-red-500' },
    { id: 2, name: 'UPI', icon: 'U', color: 'text-orange-500' }
  ];

  return (
    <div className="bg-[#1a1f2e] text-white min-h-screen">
      <div className="p-4">
        {/* Navigation Tabs */}
        <div className="bg-[#252b3b] rounded-lg mb-6 flex overflow-x-auto">
          <Link href="/Deposit">
           <button className="py-3 px-4 bg-[#2a3042] text-white whitespace-nowrap">
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
                 <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Market</button>
               </Link>
               <Link href="/Tournament">
                 <button className="py-3 px-4 text-gray-400 whitespace-nowrap">Tournaments</button>
               </Link>
               <Link href="/Analytics"><button className="py-3 px-4 text-gray-400 whitespace-nowrap">Analytics</button></Link>
        </div>

        {/* Currency Info */}
        <div className="flex flex-wrap justify-between items-center mb-6 text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="text-gray-400">Available for withdrawal</span>
            <span>0.00₹</span>
            <span className="text-gray-400">In the account</span>
            <span>0.00₹</span>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 mb-6 flex items-center">
          <Rocket className="text-white mr-3" size={24} />
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Special Offer — 30% Deposit BONUS!</h3>
            <p className="text-white text-sm opacity-90">
              Add $100 or more to your Real account balance and get a 30% bonus. Please complete the Deposit process to receive this bonus.
            </p>
          </div>
        </div>

        {/* Info Notice */}
        <div className="bg-blue-500 bg-opacity-20 border border-blue-500 rounded-lg p-3 mb-6 flex items-start">
          <Info className="text-blue-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
          <span className="text-blue-300 text-sm">
            Some options may not be available at times, due to the maintenance on the side of the financial providers, or other reasons. Please watch for updates, and consider using the other available variants.
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cryptocurrencies Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#252b3b] rounded-lg p-6">
              <div className="flex items-center mb-6">
                <Coins className="text-white mr-3" size={20} />
                <h3 className="text-lg font-semibold">Cryptocurrencies</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cryptoOptions.map((crypto) => (
                  <div
                    key={crypto.id}
                    className={`bg-white rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg ${
                      selectedCrypto === crypto.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedCrypto(crypto.id)}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 ${crypto.color} font-bold`}>
                        {crypto.icon}
                      </div>
                      <span className="text-gray-800 font-medium">{crypto.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* E-payments Section */}
            <div className="bg-[#252b3b] rounded-lg p-6 mt-6">
              <div className="flex items-center mb-6">
                <CreditCard className="text-white mr-3" size={20} />
                <h3 className="text-lg font-semibold">E-payments</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ePaymentOptions.map((payment) => (
                  <div
                    key={payment.id}
                    className={`bg-white rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg ${
                      selectedEPayment === payment.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedEPayment(payment.id)}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-3 ${payment.color} font-bold`}>
                        {payment.icon}
                      </div>
                      <span className="text-gray-800 font-medium">{payment.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Deposit Features */}
            <div className="bg-[#252b3b] rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm">Minimum deposit amount: ₹1000</span>
                </div>
                
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm">Minimum withdrawal amount: ₹1000</span>
                </div>

                <div className="flex items-center text-green-400">
                  <Zap className="text-green-400 mr-3" size={16} />
                  <span className="text-sm">Quick withdrawal from your account</span>
                </div>

                <div className="flex items-center text-green-400">
                  <Check className="text-green-400 mr-3" size={16} />
                  <span className="text-sm">Without a fee</span>
                </div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="bg-[#252b3b] rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4">
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
                
                <div className="bg-white rounded p-2 flex items-center justify-center col-span-2">
                  <Shield className="text-gray-600 mr-1" size={12} />
                  <span className="text-gray-600 text-xs font-semibold">SECURE SSL ENCRYPTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;