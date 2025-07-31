






// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import { Bell, Building2, ChevronDown, User, LogOut } from 'lucide-react';
// import Link from 'next/link';

// const NavBar = () => {
//   const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
//   const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
//   const [selectedAccount, setSelectedAccount] = useState('live'); // 'live' or 'demo'
//   const accountDropdownRef = useRef(null);
//   const notificationDropdownRef = useRef(null);

//   // Account balances
//   const accountBalances = {
//     live: '₹0.00',
//     demo: '₹699,981.80'
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
//         setIsAccountDropdownOpen(false);
//       }
//       if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
//         setIsNotificationDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Handle mark all as read and close notification panel
//   const handleMarkAllAsRead = () => {
//     setIsNotificationDropdownOpen(false);
//   };

//   // Handle account selection
//   const handleAccountSelection = (accountType) => {
//     setSelectedAccount(accountType);
//   };

//   return (
//     <div className="flex items-center justify-between bg-gray-900 h-16 px-4 border-b border-gray-800 relative">
//       {/* Left section */}
//       <div className="flex items-center">
//         <button className="mr-4 text-white lg:hidden">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//         <div className="flex items-center mr-6">
//           <div className="text-white font-bold text-xl flex items-center">
//             <Building2 className="mr-2" size={24} />
//             TRADE
//           </div>
//           <span className="text-gray-400 ml-4 hidden sm:block">WEB TRADING PLATFORM</span>
//         </div>
//       </div>

//       {/* Center section - Promotion */}
//       <Link href="/Deposit">
//         <div className="hidden md:flex items-center bg-green-500 rounded-full py-2 px-4 hover:bg-green-600 transition-colors">
//           <div className="flex items-center text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
//               <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9z" />
//             </svg>
//             Get a 30% bonus on your first deposit
//             <span className="ml-4 bg-gray-700 px-2 py-1 rounded-md text-sm">30%</span>
//           </div>
//         </div>
//       </Link>

//       {/* Right section */}
//       <div className="flex items-center">
//         {/* Notification Bell */}
//         <div className="relative" ref={notificationDropdownRef}>
//           <button 
//             className="text-white mr-4 relative hover:text-gray-300 transition-colors"
//             onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
//           >
//             <Bell size={20} />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
//           </button>

//           {/* Notification Dropdown */}
//           {isNotificationDropdownOpen && (
//             <div className="absolute right-0 top-12 w-96 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
//               <div className="flex items-center justify-between p-4 border-b border-gray-700">
//                 <h3 className="text-white font-semibold">Notifications</h3>
//                 <button 
//                   className="text-blue-400 text-sm hover:text-blue-300"
//                   onClick={handleMarkAllAsRead}
//                 >
//                   MARK ALL AS READ
//                 </button>
//               </div>
              
//               {/* Memorial Day Notification */}
//               <div className="p-4">
//                 <div className="bg-blue-900 rounded-lg p-4 mb-4">
//                   <div className="flex items-center mb-2">
//                     <div className="w-8 h-5 bg-red-500 rounded-sm mr-2 flex items-center justify-center">
//                       <div className="flex space-x-0.5">
//                         <div className="w-1 h-1 bg-white rounded-full"></div>
//                         <div className="w-1 h-1 bg-white rounded-full"></div>
//                       </div>
//                     </div>
//                     <span className="text-white text-xs">🇺🇸</span>
//                   </div>
//                   <h4 className="text-white font-bold text-lg mb-1">MEMORIAL DAY</h4>
//                   <p className="text-gray-300 text-sm mb-3">THE EXCHANGES ARE CLOSED ON MAY 26</p>
//                   <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">QUOTES - OTC</span>
//                 </div>

//                 {/* Trading Schedule Notification */}
//                 <div className="bg-gray-700 rounded-lg p-4">
//                   <div className="flex items-start">
//                     <div className="bg-orange-500 rounded p-1 mr-3 mt-1">
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h5 className="text-white font-semibold mb-2">Trading Schedule for May 26 has been Changed!</h5>
//                       <p className="text-gray-300 text-sm mb-2">
//                         On Monday, May 26, on the occasion of Memorial Day in the United States, stock exchanges will be closed, and participants in the financial and commodity markets are resting.
//                       </p>
//                       <p className="text-gray-300 text-sm">
//                         ⚠️ The trading schedule has been changed, all quotes during the day — OTC.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Account Dropdown */}
//         <div className="hidden md:flex items-center mr-4 relative" ref={accountDropdownRef}>
//           <button 
//             className="flex items-center text-white hover:text-gray-300 transition-colors"
//             onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
//           >
//             <div className="flex flex-col items-end mr-2">
//               <div className="text-gray-400 text-xs">
//                 {selectedAccount === 'live' ? 'LIVE ACCOUNT' : 'DEMO ACCOUNT'}
//               </div>
//               <div className="text-white font-bold">
//                 {accountBalances[selectedAccount]}
//               </div>
//             </div>
//             <ChevronDown 
//               size={16} 
//               className={`text-gray-400 transition-transform ${isAccountDropdownOpen ? 'rotate-180' : ''}`} 
//             />
//           </button>

//           {/* Account Dropdown Panel */}
//           {isAccountDropdownOpen && (
//             <div className="absolute right-0 top-12 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
//               {/* Account Header */}
//               <div className="p-4 border-b border-gray-700">
//                 <div className="flex items-center">
//                   <div className="bg-green-500 rounded-full p-2 mr-3">
//                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-green-400 text-sm font-semibold">+30% profit</div>
//                     <div className="text-gray-400 text-xs">singh.nikhil@webssseder.tech</div>
//                     <div className="text-gray-500 text-xs">ID: 59243077</div>
//                     <div className="text-gray-400 text-xs mt-1">
//                       Currency: <span className="text-white">INR</span>
//                       <button className="text-blue-400 text-xs ml-2 hover:text-blue-300">CHANGE</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Account Selection */}
//               <div className="p-4 border-b border-gray-700">
//                 <button 
//                   className="flex items-center mb-3 w-full hover:bg-gray-700 p-2 rounded transition-colors"
//                   onClick={() => handleAccountSelection('live')}
//                 >
//                   <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
//                     selectedAccount === 'live' ? 'bg-blue-500' : 'border border-gray-500'
//                   }`}>
//                     {selectedAccount === 'live' && (
//                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     )}
//                   </div>
//                   <div>
//                     <div className="text-white font-semibold">Live Account</div>
//                     <div className="text-white">₹0.00</div>
//                   </div>
//                 </button>
//                 <button 
//                   className="flex items-center w-full hover:bg-gray-700 p-2 rounded transition-colors"
//                   onClick={() => handleAccountSelection('demo')}
//                 >
//                   <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
//                     selectedAccount === 'demo' ? 'bg-blue-500' : 'border border-gray-500'
//                   }`}>
//                     {selectedAccount === 'demo' && (
//                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     )}
//                   </div>
//                   <div>
//                     <div className="text-white font-semibold">Demo Account</div>
//                     <div className="text-white">₹699,981.80</div>
//                   </div>
//                 </button>
//               </div>

//               {/* Menu Items */}
//               <div className="py-2">
//                 <Link href="/Deposit" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
//                   <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                   </svg>
//                   Deposit
//                 </Link>
//                 <Link href="/Withdraw" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
//                   <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                   Withdrawal
//                 </Link>
//                 <Link href="/Transaction" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
//                   <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
//                   </svg>
//                   Transactions
//                 </Link>
//                 <Link href="/Trade" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
//                   <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
//                   </svg>
//                   Trades
//                 </Link>
//                 <Link href="/Account" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
//                   <User size={16} className="mr-3" />
//                   Account
//                 </Link>
//                 <Link href="/" className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700 transition-colors border-t border-gray-700 mt-2">
//                   <LogOut size={16} className="mr-3" />
//                   Logout
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         <Link href="/Deposit">
//           <button className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center mr-2 hover:bg-green-600 transition-colors">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//             </svg>
//             Deposit
//           </button>
//         </Link>
//         <Link href="/Withdraw">
//           <button className="bg-transparent text-white py-2 px-4 border border-gray-600 rounded-md hidden md:block hover:bg-gray-800 transition-colors">
//             Withdrawal
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NavBar;


'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bell, Building2, ChevronDown, User, LogOut } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('live'); // 'live' or 'demo'
  const accountDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  // Account balances
  const accountBalances = {
    live: '₹0.00',
    demo: '₹699,981.80'
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setIsAccountDropdownOpen(false);
      }
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle account selection
  const handleAccountSelection = (accountType) => {
    setSelectedAccount(accountType);
    setIsAccountDropdownOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-900 py-3 px-4 border-b border-gray-800 relative">
      {/* Left section - Logo */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl flex items-center">
            <Building2 className="mr-2" size={24} />
            TRADE
          </div>
          {/* <span className="text-gray-400 ml-4 hidden sm:block">WEB TRADING PLATFORM</span> */}
        </div>
      </div>

      {/* Center section - Promotion (hidden on small screens, visible on medium and up) */}
      <div className="hidden md:block order-3 md:order-2 w-full md:w-auto mt-2 md:mt-0">
        <Link href="/Deposit">
          <div className="flex items-center justify-center bg-green-500 rounded-full py-2 px-4 hover:bg-green-600 transition-colors">
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9z" />
              </svg>
              <span className="hidden lg:inline">Get a 30% bonus on your first deposit</span>
              <span className="lg:hidden">30% bonus</span>
              <span className="ml-4 bg-gray-700 px-2 py-1 rounded-md text-sm">30%</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Right section - User controls */}
      <div className="flex items-center order-2 md:order-3">
        {/* Notification Bell */}
        <div className="relative" ref={notificationDropdownRef}>
          <button 
            className="text-white mr-4 relative hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
              setIsAccountDropdownOpen(false);
            }}
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>

          {/* Notification Dropdown */}
          {isNotificationDropdownOpen && (
            <div className="absolute right-0 top-12 w-96 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-w-[calc(100vw-20px)]">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-white font-semibold">Notifications</h3>
                <button 
                  className="text-blue-400 text-sm hover:text-blue-300"
                  onClick={() => setIsNotificationDropdownOpen(false)}
                >
                  MARK ALL AS READ
                </button>
              </div>
              
              {/* Memorial Day Notification */}
              <div className="p-4">
                <div className="bg-blue-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-5 bg-red-500 rounded-sm mr-2 flex items-center justify-center">
                      <div className="flex space-x-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-white text-xs">🇺🇸</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">MEMORIAL DAY</h4>
                  <p className="text-gray-300 text-sm mb-3">THE EXCHANGES ARE CLOSED ON MAY 26</p>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">QUOTES - OTC</span>
                </div>

                {/* Trading Schedule Notification */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-2">Trading Schedule for May 26 has been Changed!</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        On Monday, May 26, on the occasion of Memorial Day in the United States, stock exchanges will be closed, and participants in the financial and commodity markets are resting.
                      </p>
                      <p className="text-gray-300 text-sm">
                        ⚠️ The trading schedule has been changed, all quotes during the day — OTC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Account Dropdown */}
        <div className="hidden sm:flex items-center mr-4 relative" ref={accountDropdownRef}>
          <button 
            className="flex items-center text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setIsAccountDropdownOpen(!isAccountDropdownOpen);
              setIsNotificationDropdownOpen(false);
            }}
          >
            <div className="flex flex-col items-end mr-2">
              <div className="text-gray-400 text-xs">
                {selectedAccount === 'live' ? 'LIVE ACCOUNT' : 'DEMO ACCOUNT'}
              </div>
              <div className="text-white font-bold">
                {accountBalances[selectedAccount]}
              </div>
            </div>
            <ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform ${isAccountDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* Account Dropdown Panel */}
          {isAccountDropdownOpen && (
            <div className="absolute right-0 top-12 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
              {/* Account Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-green-400 text-sm font-semibold">+30% profit</div>
                    <div className="text-gray-400 text-xs">singh.nikhil@webseeder.tech</div>
                    <div className="text-gray-500 text-xs">ID: 59243077</div>
                    <div className="text-gray-400 text-xs mt-1">
                      Currency: <span className="text-white">INR</span>
                      <button className="text-blue-400 text-xs ml-2 hover:text-blue-300">CHANGE</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Selection */}
              <div className="p-4 border-b border-gray-700">
                <button 
                  className="flex items-center mb-3 w-full hover:bg-gray-700 p-2 rounded transition-colors"
                  onClick={() => handleAccountSelection('live')}
                >
                  <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                    selectedAccount === 'live' ? 'bg-blue-500' : 'border border-gray-500'
                  }`}>
                    {selectedAccount === 'live' && (
                      <svg className="w-3 h-3 text-white\" fill="currentColor\" viewBox="0 0 20 20">
                        <path fillRule="evenodd\" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-white font-semibold">Live Account</div>
                    <div className="text-white">{accountBalances.live}</div>
                  </div>
                </button>
                <button 
                  className="flex items-center w-full hover:bg-gray-700 p-2 rounded transition-colors"
                  onClick={() => handleAccountSelection('demo')}
                >
                  <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                    selectedAccount === 'demo' ? 'bg-blue-500' : 'border border-gray-500'
                  }`}>
                    {selectedAccount === 'demo' && (
                      <svg className="w-3 h-3 text-white\" fill="currentColor\" viewBox="0 0 20 20">
                        <path fillRule="evenodd\" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-white font-semibold">Demo Account</div>
                    <div className="text-white">{accountBalances.demo}</div>
                  </div>
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <Link href="/Deposit" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Deposit
                </Link>
                <Link href="/Withdraw" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Withdrawal
                </Link>
                <Link href="/Transaction" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                  Transactions
                </Link>
                <Link href="/Trade" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  Trades
                </Link>
                <Link href="/Account" className="flex items-center px-4 py-2 text-white hover:bg-gray-700 transition-colors">
                  <User size={16} className="mr-3" />
                  Account
                </Link>
                <Link href="/" className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700 transition-colors border-t border-gray-700 mt-2">
                  <LogOut size={16} className="mr-3" />
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          <Link href="/Deposit">
            <button className="bg-green-500 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-green-600 transition-colors text-sm sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>Deposit</span>
            </button>
          </Link>
          <Link href="/Withdraw" className="ml-2">
            <button className="bg-transparent text-white py-2 px-3 sm:px-4 border border-gray-600 rounded-md hidden sm:flex items-center hover:bg-gray-800 transition-colors text-sm sm:text-base">
              Withdraw
            </button>
          </Link>
        </div>
      </div>
      
      {/* Mobile-only promotion button (visible only on small screens) */}
      <div className="w-full order-4 mt-2 sm:hidden">
        <Link href="/Deposit" className="block">
          <div className="flex items-center justify-center bg-green-500 rounded-full py-2 px-4 hover:bg-green-600 transition-colors">
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9z" />
              </svg>
              <span>Get a 30% bonus on your first deposit</span>
              <span className="ml-4 bg-gray-700 px-2 py-1 rounded-md text-sm">30%</span>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Mobile Account Info (visible only on very small screens) */}
      <div className="w-full order-5 mt-2 flex items-center justify-between sm:hidden border-t border-gray-800 pt-2">
        <div className="flex items-center">
          <User size={16} className="text-gray-400 mr-2" />
          <div className="text-white text-sm">{selectedAccount === 'live' ? 'Live' : 'Demo'}</div>
        </div>
        <div className="font-bold text-white">{accountBalances[selectedAccount]}</div>
      </div>
    </div>
  );
};

export default Navbar;