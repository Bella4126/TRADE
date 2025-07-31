'use client';

import React, { useState } from 'react';
import { Camera, Check, X, ChevronDown, Pencil } from 'lucide-react';
import Link from 'next/link';


const Account = () => {
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('(UTC+05:30)');
  const [country, setCountry] = useState('India');

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
        <button className="py-3 px-4 bg-[#2a3042] text-white whitespace-nowrap">Account</button>
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
            <span className="text-gray-400">My current currency</span>
            <div className="flex items-center">
              <span className="mr-2">₹ INR</span>
              <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-xs">
                CHANGE
              </button>
            </div>
            <span className="text-gray-400">Available for withdrawal</span>
            <span>0.00₹</span>
            <span className="text-gray-400">In the account</span>
            <span>0.00₹</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Data Section */}
          <div className="bg-[#252b3b] rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <Camera size={24} className="text-white" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-gray-400 text-sm mr-2">singh.nikhil@webseeder.tech</span>
                </div>
                <div className="text-sm text-gray-400 mb-2">ID: 59245077</div>
                <div className="flex items-center">
                  <X size={16} className="text-red-500 mr-1" />
                  <span className="text-red-500 text-xs bg-red-500 bg-opacity-20 px-2 py-1 rounded">
                    Not verified
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Personal data:</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Nickname</label>
                <input
                  type="text"
                  value="#59245077"
                  className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Empty"
                  className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Empty"
                  className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Date of birth</label>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Aadhaar</label>
                <input
                  type="text"
                  placeholder="Empty"
                  className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value="singh.nikhil@webseeder.tech"
                    className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white pr-20"
                    readOnly
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                    <span className="text-green-500 text-xs mr-2">Verified</span>
                    <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-xs">
                      RESEND
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Country</label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white appearance-none pr-10"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Empty"
                  className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-gray-400"
                />
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold">
                Save
              </button>
            </div>

            {/* Security Section */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h3 className="text-lg font-semibold mb-4">Security:</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-3" />
                    <div>
                      <div className="font-medium">Two-step verification</div>
                      <div className="text-sm text-gray-400 flex items-center">
                        Receiving codes via Email 
                        <Pencil size={12} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>To enter the platform</span>
                </div>

                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>To withdraw funds</span>
                </div>
              </div>

              {/* Password Change Section */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Old password</label>
                  <input
                    type="password"
                    className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">New password</label>
                  <input
                    type="password"
                    className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Confirm new password</label>
                  <input
                    type="password"
                    className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white"
                  />
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Document Verification Section */}
            <div className="bg-[#252b3b] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Documents verification:</h3>
              
              <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 flex items-start">
                <div className="bg-red-500 rounded-full p-1 mr-3 mt-0.5">
                  <X size={12} className="text-white" />
                </div>
                <span className="text-red-300">
                  You need fill identity information before verification your profile.
                </span>
              </div>
            </div>

            {/* Settings Section */}
            <div className="bg-[#252b3b] rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Language</label>
                  <div className="relative">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white appearance-none pr-10"
                    >
                      <option value="English">🌐 English</option>
                      <option value="Spanish">🌐 Spanish</option>
                      <option value="French">🌐 French</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Timezone</label>
                  <div className="relative">
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full bg-[#1a1f2e] border border-gray-600 rounded px-3 py-2 text-white appearance-none pr-10"
                    >
                      <option value="(UTC+05:30)">(UTC+05:30)</option>
                      <option value="(UTC+00:00)">(UTC+00:00)</option>
                      <option value="(UTC-05:00)">(UTC-05:00)</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="pt-4">
                  <button className="text-red-400 hover:text-red-300 flex items-center">
                    <X size={16} className="mr-2" />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;