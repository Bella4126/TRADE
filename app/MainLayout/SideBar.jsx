
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { HelpCircle, User, Trophy, BarChart3, MoreHorizontal, X, Settings, Volume2, ChevronDown, ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSupportPanel, setShowSupportPanel] = useState(false);
//   const [showMorePanel, setShowMorePanel] = useState(false);
//   const [showTopPanel, setShowTopPanel] = useState(false);
//   const [showSignalsPanel, setShowSignalsPanel] = useState(false);
//   const [hoveredUser, setHoveredUser] = useState(null);
//   const [currentSupportView, setCurrentSupportView] = useState('main');
//   const [showTutorialModal, setShowTutorialModal] = useState(null);
//   const pathname = usePathname();

//   const supportData = {
//     main: {
//       title: 'Help',
//       items: [
//         { id: 'faq', icon: '📋', title: 'FAQ', subtitle: 'Open the database' },
//         { id: 'tutorials', icon: '💾', title: 'Tutorials', subtitle: 'Use the hints' },
//       ]
//     },
//     tutorials: {
//       title: 'Tutorials',
//       backTo: 'Help',
//       items: [
//         { id: 'trade-tutorial', icon: '📈', title: 'How to trade', action: 'modal' },
//         { id: 'verification-tutorial', icon: '✓', title: 'How to pass verification', action: 'modal' },
//       ]
//     },
//     faq: {
//       title: 'FAQ',
//       backTo: 'Help',
//       items: [
//         { id: 'general', icon: '◊', title: 'General', subtitle: '11 questions' },
//         { id: 'account', icon: '👤', title: 'Account', subtitle: '4 questions' },
//         { id: 'verification', icon: '◊', title: 'Verification', subtitle: '5 questions' },
//       ]
//     },
//     general: {
//       title: 'General',
//       backTo: 'FAQs',
//       subtitle: '11 questions',
//       questions: [
//         'What are digital options?',
//         'What is the expiration period of a trade?',
//         'What is the gist of digital options trading?',
//         'What are the possible results of the placed trades?',
//         'Does your trading platform have a demo account in order to understand the process of working with digital options without spending your own money?',
//         'What determines profit size?',
//         'What are the varieties of',
//       ]
//     },
//     account: {
//       title: 'Account',
//       backTo: 'FAQs',
//       subtitle: '4 questions',
//       questions: [
//         'Can I close my account? How to do it?',
//         'If I made a mistake during entering data into my individual account, how can I fix this?',
//         'What data is required to register on the Company website?',
//         'In what currency is the Client\'s account opened? Can I change the currency of the Client\'s account?',
//       ]
//     },
//     verification: {
//       title: 'Verification',
//       backTo: 'FAQs',
//       subtitle: '5 questions',
//       questions: [
//         'What is account verification?',
//         'How to understand that I need to go through account verification?',
//         'How do I know that I successfully passed verification?',
//         'Is it possible to indicate other people\'s (fake) data when registering on the website?',
//         'How long does the verification process take?',
//       ]
//     }
//   };

//   const leaderboardData = [
//     { id: 1, name: '#Jai_Shree_Shyaam', amount: '$19,461.29', avatar: '👑', country: 'India', trades: 141, profitable: 76, profit: '$19,461.29', avgProfit: '$138.02', minTrade: '$11.42', maxTrade: '$2,291.04' },
//     { id: 2, name: 'Chaska Lover', amount: '$19,374.00', avatar: '🎭', country: 'USA', trades: 98, profitable: 45, profit: '$19,374.00', avgProfit: '$197.69', minTrade: '$50.00', maxTrade: '$1,500.00' },
//     { id: 3, name: '#538741_IQ', amount: '$16,468.69', avatar: '🏆', country: 'UK', trades: 112, profitable: 67, profit: '$16,468.69', avgProfit: '$147.04', minTrade: '$25.00', maxTrade: '$1,800.00' },
//     { id: 4, name: 'TECHNICAL GURUJI', amount: '$14,258.48', avatar: '🧠', country: 'Canada', trades: 89, profitable: 52, profit: '$14,258.48', avgProfit: '$160.21', minTrade: '$30.00', maxTrade: '$1,200.00' },
//     { id: 5, name: 'Zinou Dz', amount: '$13,710.00', avatar: '🌟', country: 'France', trades: 76, profitable: 41, profit: '$13,710.00', avgProfit: '$180.39', minTrade: '$40.00', maxTrade: '$1,100.00' },
//     { id: 6, name: '#489888_IQ', amount: '$13,586.00', avatar: '💎', country: 'Germany', trades: 94, profitable: 58, profit: '$13,586.00', avgProfit: '$144.53', minTrade: '$20.00', maxTrade: '$900.00' },
//     { id: 7, name: '#447179_IQ', amount: '$13,055.33', avatar: '🔮', country: 'Spain', trades: 82, profitable: 49, profit: '$13,055.33', avgProfit: '$159.21', minTrade: '$35.00', maxTrade: '$1,300.00' }
//   ];

//   const signalsData = [
//     { pair: 'AUD/USD (OTC)', direction: 'up', duration: '15:00', time: '26.05 00:09', flags: ['🇦🇺', '🇺🇸'] },
//     { pair: 'AUD/NZD (OTC)', direction: 'down', duration: '03:00:00', time: '26.05 00:09', flags: ['🇦🇺', '🇳🇿'] },
//     { pair: 'Silver (OTC)', direction: 'up', duration: '15:00', time: '26.05 00:10', flags: ['💎', '💎'] },
//     { pair: 'GBP/NZD (OTC)', direction: 'up', duration: '05:00', time: '26.05 00:10', flags: ['🇬🇧', '🇳🇿'] }
//   ];

//   const pastSignalsData = [
//     { pair: 'USD/ZAR (OTC)', direction: 'down', duration: '15:00', time: '26.05 00:35', flags: ['🇺🇸', '🇿🇦'] },
//     { pair: 'UKBrent (OTC)', direction: 'up', duration: '45:00', time: '26.05 00:06', flags: ['🇬🇧', '🛢️'] },
//     { pair: 'USD/TRY (OTC)', direction: 'down', duration: '30:00', time: '26.05 00:06', flags: ['🇺🇸', '🇹🇷'] }
//   ];

//   const getActiveItem = () => {
//     if (pathname === '/Account') return 'ACCOUNT';
//     if (pathname === '/Market') return 'MARKET';
//     if (pathname === '/Tournament') return 'TOURNAMENTS';
//     if (pathname === '/support') return 'SUPPORT';
//     if (pathname === '/more') return 'MORE';
//   };

//   const [activeItem, setActiveItem] = useState(getActiveItem());

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setShowSupportPanel(false);
//     setShowMorePanel(false);
//     setShowTopPanel(false);
//     setShowSignalsPanel(false);
//     setShowTutorialModal(null);
//   };

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//     if (itemName === 'SUPPORT') {
//       setShowSupportPanel(true);
//       setCurrentSupportView('main');
//       setShowMorePanel(false);
//       setShowTopPanel(false);
//       setShowSignalsPanel(false);
//     } else if (itemName === 'MORE') {
//       setShowMorePanel(true);
//       setShowSupportPanel(false);
//       setShowTopPanel(false);
//       setShowSignalsPanel(false);
//     } else {
//       setShowSupportPanel(false);
//       setShowMorePanel(false);
//       setShowTopPanel(false);
//       setShowSignalsPanel(false);
//     }
//   };

//   const handleMoreItemClick = (item) => {
//     if (item === 'Analytics') {
//       setShowMorePanel(false);
//       window.location.href = '/Analytics';
//     } else if (item === 'TOP') {
//       setShowMorePanel(false);
//       setShowTopPanel(true);
//     } else if (item === 'Signals') {
//       setShowMorePanel(false);
//       setShowSignalsPanel(true);
//     }
//   };

//   useEffect(() => {
//     setActiveItem(getActiveItem());
//   }, [pathname]);

//   useEffect(() => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       if (isOpen || showSupportPanel || showMorePanel || showTopPanel || showSignalsPanel) {
//         mainContent.classList.add('blur-sm');
//       } else {
//         mainContent.classList.remove('blur-sm');
//       }
//     }
//   }, [isOpen, showSupportPanel, showMorePanel, showTopPanel, showSignalsPanel]);

//   // Updated renderNavItem function with consistent hover behavior
//   const renderNavItem = (icon, label, active, multiline = false, onClick) => (
//     <div 
//       className={`w-full flex flex-col items-center py-4 px-2 cursor-pointer transition-all duration-200 ${
//         active ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-gray-800 hover:text-blue-300'
//       }`}
//       onClick={onClick}
//     >
//       <div className="relative">{icon}</div>
//       <div className={`mt-1 text-xs font-medium ${multiline ? 'text-center leading-tight' : ''}`}>
//         {multiline && !isOpen ? (
//           <>TOURNA-<br />MENTS</>
//         ) : (
//           label
//         )}
//       </div>
//     </div>
//   );

//   const renderUserProfileCard = (user) => (
//     <div className="absolute left-80 top-1/4 w-64 bg-gray-800 p-4 rounded-lg shadow-lg">
//       <div className="flex items-center mb-4">
//         <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
//           <span className="text-white text-lg">{user.avatar}</span>
//         </div>
//         <div>
//           <div className="text-white">{user.country}</div>
//           <div className="text-sm text-blue-400 flex items-center">
//             {user.name} <span className="ml-1 text-purple-400">💎</span>
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-3 mb-4">
//         <div>
//           <div className="text-2xl font-bold">{user.trades}</div>
//           <div className="text-xs text-gray-400">Trades count</div>
//         </div>
//         <div>
//           <div className="text-2xl font-bold">{user.profitable}</div>
//           <div className="text-xs text-gray-400">Profitable trades</div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-3 mb-4">
//         <div>
//           <div className="text-2xl font-bold text-green-500">{user.profit}</div>
//           <div className="text-xs text-gray-400">Trades profit</div>
//         </div>
//         <div>
//           <div className="text-2xl font-bold">{user.avgProfit}</div>
//           <div className="text-xs text-gray-400">Average profit</div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-3">
//         <div>
//           <div className="text-xl font-bold">{user.minTrade}</div>
//           <div className="text-xs text-gray-400">Min trade amount</div>
//         </div>
//         <div>
//           <div className="text-xl font-bold">{user.maxTrade}</div>
//           <div className="text-xs text-gray-400">Max trade amount</div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {(isOpen || showSupportPanel || showMorePanel || showTopPanel || showSignalsPanel) && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-10"
//           onClick={toggleSidebar}
//         />
//       )}
      
//       <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white flex flex-col justify-between transition-all duration-300 z-20 ${
//         isOpen ? 'w-64' : 'w-16'
//       }`}>
//         {!isOpen && (
//           <button onClick={toggleSidebar} className="w-full flex justify-center items-center py-4 hover:bg-gray-800">
//             <div className="w-6 h-5 flex flex-col justify-between">
//               {[...Array(3)].map((_, i) => (
//                 <span key={i} className="w-full h-0.5 bg-white" />
//               ))}
//             </div>
//           </button>
//         )}

//         {isOpen && (
//           <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white hover:text-gray-300">
//             <X size={20} />
//           </button>
//         )}

//         <div className="flex flex-col items-center">
//           {/* Navigation Items - Wrapped in div elements for consistent hover behavior */}
//           <div className="w-full">
//             <Link href="/Trade" className="block w-full">
//               {renderNavItem(
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.7L22 12V6H16Z"/>
//                   <path d="M2 6H8V8H4V12H2V6Z"/>
//                 </svg>,
//                 'TRADE',
//                 activeItem === 'TRADE',
//                 false,
//                 () => handleItemClick('TRADE')
//               )}
//             </Link>
//           </div>

//           <div className="w-full">
//             {renderNavItem(
//               <HelpCircle size={24} />, 
//               'SUPPORT', 
//               activeItem === 'SUPPORT', 
//               false, 
//               () => handleItemClick('SUPPORT')
//             )}
//           </div>
          
//           <div className="w-full">
//             <Link href="/Account" className="block w-full">
//               {renderNavItem(
//                 <User size={24} />, 
//                 'ACCOUNT', 
//                 activeItem === 'ACCOUNT', 
//                 false, 
//                 () => handleItemClick('ACCOUNT')
//               )}
//             </Link>
//           </div>

//           <div className="w-full">
//             <Link href="/Tournament" className="block w-full">
//               {renderNavItem(
//                 <div className="relative">
//                   <Trophy size={24} />
//                   <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                     3
//                   </span>
//                 </div>,
//                 'TOURNAMENTS',
//                 activeItem === 'TOURNAMENTS',
//                 true,
//                 () => handleItemClick('TOURNAMENTS')
//               )}
//             </Link>
//           </div>

//           <div className="w-full">
//             <Link href="/Market" className="block w-full">
//               {renderNavItem(
//                 <BarChart3 size={24} />, 
//                 'MARKET', 
//                 activeItem === 'MARKET', 
//                 false, 
//                 () => handleItemClick('MARKET')
//               )}
//             </Link>
//           </div>

//           <div className="w-full">
//             {renderNavItem(
//               <MoreHorizontal size={24} />, 
//               'MORE', 
//               activeItem === 'MORE', 
//               false, 
//               () => handleItemClick('MORE')
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col mb-4 w-full">
//           {isOpen ? (
//             <>
//               <div className="px-4 py-2 text-sm text-gray-400">singh.nikhil@webseeder.tech</div>
//               {['Deposit', 'Withdraw', 'Transaction', 'Trade', 'Account'].map(item => (
//                 <Link key={item} href={`/${item}`} className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200">
//                   {item}
//                 </Link>
//               ))}
//             </>
//           ) : (
//             <div className="flex flex-col items-center mb-4">
//               <button className="p-2 rounded-full hover:bg-gray-800 hover:text-blue-300 mb-2 transition-colors duration-200">
//                 <Settings size={20} />
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-800 hover:text-blue-300 mb-2 transition-colors duration-200">
//                 <Volume2 size={20} />
//               </button>
//               <Link href="/join" className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded mt-2 transition-colors duration-200">
//                 JOIN US
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {showSupportPanel && (
//         <div className="fixed left-16 top-0 h-full w-80 bg-gray-800 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
//           <div className="flex items-center justify-between p-4 border-b border-gray-700">
//             <div className="flex items-center space-x-3">
//               {currentSupportView !== 'main' && (
//                 <button 
//                   onClick={() => {
//                     if (currentSupportView === 'faq') {
//                       setCurrentSupportView('main');
//                     } else {
//                       setCurrentSupportView('faq');
//                     }
//                   }}
//                   className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
//                 >
//                   <ArrowLeft size={16} className="mr-1" />
//                   Go back to {supportData[currentSupportView].backTo}
//                 </button>
//               )}
//             </div>
//             <button onClick={() => setShowSupportPanel(false)} className="text-gray-400 hover:text-white">
//               <X size={20} />
//             </button>
//           </div>

//           <div className="p-4">
//             <div className="flex items-center space-x-2 mb-2">
//               {currentSupportView === 'main' && <div className="text-blue-400 text-xl">📋</div>}
//               {currentSupportView === 'faq' && <div className="text-blue-400 text-xl">📋</div>}
//               {(currentSupportView === 'general' || currentSupportView === 'verification') && <div className="text-blue-400 text-xl">◊</div>}
//               {currentSupportView === 'account' && <div className="text-blue-400 text-xl">👤</div>}
//               <h2 className="text-lg font-semibold text-white">{supportData[currentSupportView].title}</h2>
//             </div>
//             {supportData[currentSupportView].subtitle && (
//               <p className="text-gray-400 text-sm">{supportData[currentSupportView].subtitle}</p>
//             )}
//           </div>

//           <div className="flex-1 overflow-y-auto">
//             {supportData[currentSupportView].items && (
//               <div className="space-y-0">
//                 {supportData[currentSupportView].items.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => {
//                       if (item.action === 'modal') {
//                         if (item.id === 'trade-tutorial') {
//                           setShowTutorialModal('trade');
//                         } else if (item.id === 'verification-tutorial') {
//                           setShowTutorialModal('verification');
//                         }
//                       } else {
//                         setCurrentSupportView(item.id);
//                       }
//                     }}
//                     className="w-full p-4 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className="text-blue-400 text-lg flex-shrink-0 w-6 flex justify-center">
//                         {item.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-white font-medium text-base">{item.title}</div>
//                         {item.subtitle && <div className="text-gray-400 text-sm mt-0.5">{item.subtitle}</div>}
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {supportData[currentSupportView].questions && (
//               <div className="space-y-0">
//                 {supportData[currentSupportView].questions.map((question, index) => (
//                   <div key={index} className="p-4 border-b border-gray-700 last:border-b-0">
//                     <div className="flex items-start justify-between">
//                       <div className="text-white text-sm pr-4 leading-relaxed flex-1">{question}</div>
//                       <ChevronDown size={16} className="text-gray-400 flex-shrink-0 mt-1" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="p-4 border-t border-gray-700">
//             {currentSupportView === 'main' ? (
//               <div className="text-center">
//                 <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
//                   <span className="text-white font-bold">?</span>
//                 </div>
//                 <p className="text-white text-sm mb-2">Did not find an answer to your question?</p>
//                 <button className="text-blue-400 hover:text-blue-300 text-sm underline">
//                   Contact support
//                 </button>
//               </div>
//             ) : (
//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 transition-colors">
//                 <ExternalLink size={16} />
//                 <span>Open FAQ page</span>
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {showMorePanel && (
//         <div className="fixed left-16 top-0 h-full w-80 bg-gray-900 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
//           <div className="flex items-center justify-between p-4 border-b border-gray-800">
//             <h2 className="text-lg font-semibold">More</h2>
//             <button onClick={() => setShowMorePanel(false)} className="text-gray-400 hover:text-white">
//               <X size={20} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto">
//             {[
//               { name: 'Analytics', icon: <BarChart3 size={20} /> },
//               { name: 'TOP', icon: <Trophy size={20} /> },
//               { name: 'Signals', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> }
//             ].map(item => (
//               <button
//                 key={item.name}
//                 onClick={() => handleMoreItemClick(item.name)}
//                 className="w-full p-4 text-left hover:bg-gray-800 hover:text-blue-300 transition-colors border-b border-gray-800 flex items-center justify-between"
//               >
//                 <div className="flex items-center">
//                   <span className="text-blue-400 mr-4">{item.icon}</span>
//                   <span>{item.name}</span>
//                 </div>
//                 <ChevronRight size={16} className="text-gray-400" />
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {showTopPanel && (
//         <div className="fixed left-16 top-0 h-full w-80 bg-gray-900 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
//           <div className="flex items-center p-4 border-b border-gray-800">
//             <button 
//               onClick={() => {
//                 setShowTopPanel(false);
//                 setShowMorePanel(true);
//               }}
//               className="text-gray-400 hover:text-white mr-3"
//             >
//               <ArrowLeft size={18} />
//             </button>
//             <div>
//               <h2 className="text-lg font-semibold">Leader Board</h2>
//               <p className="text-xs text-gray-400">of the Day</p>
//             </div>
//             <button onClick={() => setShowTopPanel(false)} className="text-gray-400 hover:text-white ml-auto">
//               <X size={20} />
//             </button>
//           </div>

//           <div className="p-4 border-b border-gray-800">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">
//                   <span className="text-xs">💰</span>
//                 </div>
//                 <span className="text-sm">#59245077</span>
//               </div>
//               <span className="text-green-500">$0.00</span>
//             </div>
//             <div className="mt-2 text-xs text-gray-400">Your position: 57213</div>
//           </div>

//           <div className="p-3 bg-gray-800 mx-4 mt-4 rounded flex items-center">
//             <Trophy size={16} className="text-yellow-500 mr-2" />
//             <span className="text-xs text-blue-400">How does this rating work?</span>
//           </div>

//           <div className="flex-1 overflow-y-auto mt-4">
//             {leaderboardData.map((user, index) => (
//               <div
//                 key={user.id}
//                 className="p-3 border-b border-gray-800 flex items-center justify-between hover:bg-gray-800 hover:text-blue-300 transition-colors"
//                 onMouseEnter={() => setHoveredUser(user)}
//                 onMouseLeave={() => setHoveredUser(null)}
//               >
//                 <div className="flex items-center">
//                   <span className="text-gray-400 mr-2 w-4">{index + 1}</span>
//                   <span className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2">
//                     {user.avatar}
//                   </span>
//                   <span className="text-sm">{user.name}</span>
//                 </div>
//                 <span className="text-green-500 text-sm">{user.amount}</span>
//               </div>
//             ))}
//           </div>

//           {hoveredUser && renderUserProfileCard(hoveredUser)}
//         </div>
//       )}

//       {showSignalsPanel && (
//         <div className="fixed left-16 top-0 h-full w-80 bg-gray-900 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
//           <div className="flex items-center p-4 border-b border-gray-800">
//             <button 
//               onClick={() => {
//                 setShowSignalsPanel(false);
//                 setShowMorePanel(true);
//               }}
//               className="text-gray-400 hover:text-white mr-3"
//             >
//               <ArrowLeft size={18} />
//             </button>
//             <div>
//               <h2 className="text-lg font-semibold">Trading signals</h2>
//               <p className="text-xs text-blue-400">WHAT IS IT?</p>
//             </div>
//             <button onClick={() => setShowSignalsPanel(false)} className="text-gray-400 hover:text-white ml-auto">
//               <X size={20} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto">
//             {signalsData.map((signal, index) => (
//               <div key={index} className="p-3 bg-gray-800 rounded-lg m-2 hover:bg-gray-700 transition-colors">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center">
//                     <div className="flex items-center justify-center mr-2">
//                       {signal.flags.map((flag, i) => (
//                         <span key={i} className="text-sm bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center ml-1">
//                           {flag}
//                         </span>
//                       ))}
//                     </div>
//                     <span className="text-sm font-medium">{signal.pair}</span>
//                   </div>
//                   <div className={`rounded-full px-2 py-0.5 flex items-center ${signal.direction === 'up' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
//                     {signal.direction === 'up' ? '↑' : '↓'}
//                   </div>
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-400">
//                   <div>Duration: {signal.duration}</div>
//                   <div>{signal.time}</div>
//                 </div>
//               </div>
//             ))}
            
//             <div className="mt-4 mb-2 px-4">
//               <h3 className="text-sm font-bold text-gray-400">PAST SIGNALS</h3>
//             </div>
            
//             {pastSignalsData.map((signal, index) => (
//               <div key={index} className="p-3 bg-gray-800 rounded-lg m-2 hover:bg-gray-700 transition-colors">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center">
//                     <div className="flex items-center justify-center mr-2">
//                       {signal.flags.map((flag, i) => (
//                         <span key={i} className="text-sm bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center ml-1">
//                           {flag}
//                         </span>
//                       ))}
//                     </div>
//                     <span className="text-sm font-medium">{signal.pair}</span>
//                   </div>
//                   <div className={`rounded-full px-2 py-0.5 flex items-center ${signal.direction === 'up' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
//                     {signal.direction === 'up' ? '↑' : '↓'}
//                   </div>
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-400">
//                   <div>Duration: {signal.duration}</div>
//                   <div>{signal.time}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {showTutorialModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-gray-700 rounded-lg p-6 max-w-md w-full mx-4 relative">
//             <button onClick={() => setShowTutorialModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//               <X size={20} />
//             </button>
            
//             <div className="mb-4">
//               {showTutorialModal === 'trade' && <div className="text-2xl mb-2">😊</div>}
//               <h3 className="text-white text-lg font-semibold mb-2">
//                 {showTutorialModal === 'trade' ? 'HOW TO TRADE?' : 'VERIFICATION STATUS'}
//               </h3>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {showTutorialModal === 'trade'
//                   ? 'Learn how to use the chart and place trades.'
//                   : 'Your account is currently not verified. If prompted to pass this verification, you can submit the required files using these tips.'}
//               </p>
//               {showTutorialModal === 'trade' && (
//                 <div className="mt-3 text-yellow-400 text-sm">👉 You will be practicing on a free demo account.</div>
//               )}
//             </div>
            
//             <div className="flex space-x-3 mt-6">
//               <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition-colors">
//                 Skip
//               </button>
//               <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
//                 {showTutorialModal === 'trade' ? 'Continue' : 'Next'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SideBar;







// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { 
//   HelpCircle, 
//   User, 
//   BarChart3, 
//   LineChart,
//   X, 
//   Settings, 
//   Volume2, 
//   ChevronDown, 
//   ArrowLeft, 
//   ExternalLink,
//   LogOut,
//   Wallet,
//   ArrowUpDown,
//   FileText
// } from 'lucide-react';

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSupportPanel, setShowSupportPanel] = useState(false);
//   const [hoveredUser, setHoveredUser] = useState(null);
//   const [currentSupportView, setCurrentSupportView] = useState('main');
//   const [showTutorialModal, setShowTutorialModal] = useState(null);
//   const [showLogoutText, setShowLogoutText] = useState(false);
//   const pathname = usePathname();

//   const supportData = {
//     main: {
//       title: 'Help',
//       items: [
//         { id: 'faq', icon: '📋', title: 'FAQ', subtitle: 'Open the database' },
//         { id: 'tutorials', icon: '💾', title: 'Tutorials', subtitle: 'Use the hints' },
//       ]
//     },
//     tutorials: {
//       title: 'Tutorials',
//       backTo: 'Help',
//       items: [
//         { id: 'trade-tutorial', icon: '📈', title: 'How to trade', action: 'modal' },
//         { id: 'verification-tutorial', icon: '✓', title: 'How to pass verification', action: 'modal' },
//       ]
//     },
//     faq: {
//       title: 'FAQ',
//       backTo: 'Help',
//       items: [
//         { id: 'general', icon: '◊', title: 'General', subtitle: '11 questions' },
//         { id: 'account', icon: '👤', title: 'Account', subtitle: '4 questions' },
//         { id: 'verification', icon: '◊', title: 'Verification', subtitle: '5 questions' },
//       ]
//     }
//   };

//   const getActiveItem = () => {
//     if (pathname === '/Account') return 'ACCOUNT';
//     if (pathname === '/Market') return 'MARKET';
//     if (pathname === '/Analytics') return 'ANALYTICS';
//     if (pathname === '/support') return 'SUPPORT';
//   };

//   const [activeItem, setActiveItem] = useState(getActiveItem());

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setShowSupportPanel(false);
//     setShowTutorialModal(null);
//   };

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//     if (itemName === 'SUPPORT') {
//       setShowSupportPanel(true);
//       setCurrentSupportView('main');
//     } else {
//       setShowSupportPanel(false);
//     }
//   };

//   useEffect(() => {
//     setActiveItem(getActiveItem());
//   }, [pathname]);

//   useEffect(() => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       if (isOpen || showSupportPanel) {
//         mainContent.classList.add('blur-sm');
//       } else {
//         mainContent.classList.remove('blur-sm');
//       }
//     }
//   }, [isOpen, showSupportPanel]);

//   const renderNavItem = (icon, label, active, onClick) => (
//     <div 
//       className={`w-full flex items-center py-4 px-4 cursor-pointer transition-all duration-200 ${
//         active ? 'bg-blue-500 text-white' : 'hover:bg-gray-800 hover:text-blue-300'
//       }`}
//       onClick={onClick}
//     >
//       <div className="flex-shrink-0">{icon}</div>
//       {isOpen && <span className="ml-3 text-sm">{label}</span>}
//     </div>
//   );

//   return (
//     <>
//       {(isOpen || showSupportPanel) && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-10"
//           onClick={toggleSidebar}
//         />
//       )}
      
//       <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white flex flex-col justify-between transition-all duration-300 z-20 ${
//         isOpen ? 'w-64' : 'w-16'
//       }`}>
//         {!isOpen ? (
//           <button onClick={toggleSidebar} className="w-full flex justify-center items-center py-4 hover:bg-gray-800">
//             <div className="w-6 h-5 flex flex-col justify-between">
//               {[...Array(3)].map((_, i) => (
//                 <span key={i} className="w-full h-0.5 bg-white" />
//               ))}
//             </div>
//           </button>
//         ) : (
//           <div className="flex items-center justify-between p-4">
//             <div>
//               <div className="font-medium">John Doe</div>
//               <div className="text-xs text-gray-400">#59245077</div>
//             </div>
//             <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
//               <X size={20} />
//             </button>
//           </div>
//         )}

//         <div className="flex-grow">
//           <Link href="/Trade">
//             {renderNavItem(
//               <LineChart size={20} />,
//               'TRADE',
//               activeItem === 'TRADE',
//               () => handleItemClick('TRADE')
//             )}
//           </Link>

//           <div>
//             {renderNavItem(
//               <HelpCircle size={20} />,
//               'SUPPORT',
//               activeItem === 'SUPPORT',
//               () => handleItemClick('SUPPORT')
//             )}
//           </div>

//           <Link href="/Account">
//             {renderNavItem(
//               <User size={20} />,
//               'ACCOUNT',
//               activeItem === 'ACCOUNT',
//               () => handleItemClick('ACCOUNT')
//             )}
//           </Link>

//           <Link href="/Analytics">
//             {renderNavItem(
//               <BarChart3 size={20} />,
//               'ANALYTICS',
//               activeItem === 'ANALYTICS',
//               () => handleItemClick('ANALYTICS')
//             )}
//           </Link>

//           <Link href="/Market">
//             {renderNavItem(
//               <LineChart size={20} />,
//               'MARKET',
//               activeItem === 'MARKET',
//               () => handleItemClick('MARKET')
//             )}
//           </Link>
//         </div>

//         <div className="mt-auto">
//           {isOpen ? (
//             <>
//               <div className="px-4 py-2 text-sm text-gray-400">singh.nikhil@webseeder.tech</div>
//               <Link href="/Deposit" className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
//                 <Wallet size={16} className="mr-2" />
//                 Deposit
//               </Link>
//               <Link href="/Withdraw" className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
//                 <ArrowUpDown size={16} className="mr-2" />
//                 Withdraw
//               </Link>
//               <Link href="/Transaction" className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
//                 <FileText size={16} className="mr-2" />
//                 Transaction
//               </Link>
//               <div className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 cursor-pointer flex items-center">
//                 <LogOut size={18} className="mr-2" />
//                 <span>Logout</span>
//               </div>
//             </>
//           ) : (
//             <div className="flex flex-col items-center gap-2 mb-4">
//               <button className="p-2 rounded-full hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200">
//                 <Settings size={20} />
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200">
//                 <Volume2 size={20} />
//               </button>
//               <div 
//                 className="p-2 rounded-full hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 relative cursor-pointer"
//                 onMouseEnter={() => setShowLogoutText(true)}
//                 onMouseLeave={() => setShowLogoutText(false)}
//               >
//                 <LogOut size={20} />
//                 {showLogoutText && (
//                   <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
//                     Logout
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {showSupportPanel && (
//         <div className="fixed left-16 top-0 h-full w-80 bg-gray-800 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
//           <div className="flex items-center justify-between p-4 border-b border-gray-700">
//             <div className="flex items-center space-x-3">
//               {currentSupportView !== 'main' && (
//                 <button 
//                   onClick={() => setCurrentSupportView('main')}
//                   className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
//                 >
//                   <ArrowLeft size={16} className="mr-1" />
//                   Back to Help
//                 </button>
//               )}
//             </div>
//             <button onClick={() => setShowSupportPanel(false)} className="text-gray-400 hover:text-white">
//               <X size={20} />
//             </button>
//           </div>

//           <div className="p-4">
//             <h2 className="text-lg font-semibold">{supportData[currentSupportView].title}</h2>
//           </div>

//           <div className="flex-1 overflow-y-auto">
//             {supportData[currentSupportView].items?.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   if (item.action === 'modal') {
//                     setShowTutorialModal(item.id);
//                   } else {
//                     setCurrentSupportView(item.id);
//                   }
//                 }}
//                 className="w-full p-4 text-left hover:bg-gray-700 transition-colors border-b border-gray-700"
//               >
//                 <div className="flex items-center">
//                   <span className="text-2xl mr-3">{item.icon}</span>
//                   <div>
//                     <div className="font-medium">{item.title}</div>
//                     <div className="text-sm text-gray-400">{item.subtitle}</div>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {showTutorialModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-gray-700 rounded-lg p-6 max-w-md w-full mx-4 relative">
//             <button onClick={() => setShowTutorialModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//               <X size={20} />
//             </button>
            
//             <div className="mb-4">
//               <h3 className="text-white text-lg font-semibold mb-2">
//                 {showTutorialModal === 'trade-tutorial' ? 'How to Trade?' : 'Verification Status'}
//               </h3>
//               <p className="text-gray-300 text-sm">
//                 {showTutorialModal === 'trade-tutorial'
//                   ? 'Learn how to use the chart and place trades.'
//                   : 'Your account is currently not verified. Complete verification to access all features.'}
//               </p>
//             </div>
            
//             <div className="flex space-x-3">
//               <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded">
//                 Skip
//               </button>
//               <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SideBar;
















// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { 
//   HelpCircle, 
//   User, 
//   BarChart3, 
//   LineChart,
//   X, 
//   Settings, 
//   Volume2, 
//   ChevronDown, 
//   ArrowLeft, 
//   ExternalLink,
//   LogOut,
//   Wallet,
//   ArrowUpDown,
//   FileText
// } from 'lucide-react';

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSupportPanel, setShowSupportPanel] = useState(false);
//   const [currentSupportView, setCurrentSupportView] = useState('main');
//   const [showTutorialModal, setShowTutorialModal] = useState(null);
//   const [showLogoutText, setShowLogoutText] = useState(false);
//   const pathname = usePathname();

//   const supportData = {
//     main: {
//       title: 'Help',
//       items: [
//         { id: 'faq', icon: '📋', title: 'FAQ', subtitle: 'Open the database' },
//         { id: 'tutorials', icon: '💾', title: 'Tutorials', subtitle: 'Use the hints' },
//       ]
//     },
//     tutorials: {
//       title: 'Tutorials',
//       backTo: 'Help',
//       items: [
//         { id: 'trade-tutorial', icon: '📈', title: 'How to trade', action: 'modal' },
//         { id: 'verification-tutorial', icon: '✓', title: 'How to pass verification', action: 'modal' },
//       ]
//     },
//     faq: {
//       title: 'FAQ',
//       backTo: 'Help',
//       items: [
//         { id: 'general', icon: '◊', title: 'General', subtitle: '11 questions' },
//         { id: 'account', icon: '👤', title: 'Account', subtitle: '4 questions' },
//         { id: 'verification', icon: '◊', title: 'Verification', subtitle: '5 questions' },
//       ]
//     }
//   };

//   const getActiveItem = () => {
//     if (pathname === '/Account') return 'ACCOUNT';
//     if (pathname === '/Market') return 'MARKET';
//     if (pathname === '/Analytics') return 'ANALYTICS';
//     if (pathname === '/support') return 'SUPPORT';
//   };

//   const [activeItem, setActiveItem] = useState(getActiveItem());

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setShowSupportPanel(false);
//     setShowTutorialModal(null);
//   };

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//     if (itemName === 'SUPPORT') {
//       setShowSupportPanel(true);
//       setCurrentSupportView('main');
//     } else {
//       setShowSupportPanel(false);
//     }
//   };

//   useEffect(() => {
//     setActiveItem(getActiveItem());
//   }, [pathname]);

//   useEffect(() => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       if (isOpen || showSupportPanel) {
//         mainContent.classList.add('blur-sm');
//       } else {
//         mainContent.classList.remove('blur-sm');
//       }
//     }
//   }, [isOpen, showSupportPanel]);

//   const renderNavItem = (icon, label, active, onClick) => (
//     <div 
//       className={`w-full flex items-center py-3 px-4 cursor-pointer transition-all duration-200 ${
//         active ? 'bg-blue-500 text-white' : 'hover:bg-gray-800 hover:text-blue-300'
//       }`}
//       onClick={onClick}
//     >
//       <div className="flex-shrink-0">{icon}</div>
//       {isOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
//     </div>
//   );

//   return (
//     <>
//       {(isOpen || showSupportPanel) && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-10"
//           onClick={toggleSidebar}
//         />
//       )}
      
//       <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white flex flex-col justify-between transition-all duration-300 z-20 ${
//         isOpen ? 'w-64' : 'w-16'
//       }`}>
//         {!isOpen ? (
//           <button onClick={toggleSidebar} className="w-full flex justify-center items-center py-3 hover:bg-gray-800">
//             <div className="w-5 h-4 flex flex-col justify-between">
//               {[...Array(3)].map((_, i) => (
//                 <span key={i} className="w-full h-0.5 bg-white" />
//               ))}
//             </div>
//           </button>
//         ) : (
//           <div className="flex items-center justify-between p-4 border-b border-gray-800">
//             <div>
//               <div className="font-medium">John Doe</div>
//               <div className="text-xs text-gray-400">#59245077</div>
//             </div>
//             <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
//               <X size={18} />
//             </button>
//           </div>
//         )}

//         <div className="flex-grow pt-2">
//           <Link href="/Trade">
//             {renderNavItem(
//               <LineChart size={18} />,
//               'TRADE',
//               activeItem === 'TRADE',
//               () => handleItemClick('TRADE')
//             )}
//           </Link>

//           <div>
//             {renderNavItem(
//               <HelpCircle size={18} />,
//               'SUPPORT',
//               activeItem === 'SUPPORT',
//               () => handleItemClick('SUPPORT')
//             )}
//           </div>

//           <Link href="/Account">
//             {renderNavItem(
//               <User size={18} />,
//               'ACCOUNT',
//               activeItem === 'ACCOUNT',
//               () => handleItemClick('ACCOUNT')
//             )}
//           </Link>

//           <Link href="/Analytics">
//             {renderNavItem(
//               <BarChart3 size={18} />,
//               'ANALYTICS',
//               activeItem === 'ANALYTICS',
//               () => handleItemClick('ANALYTICS')
//             )}
//           </Link>

//           <Link href="/Market">
//             {renderNavItem(
//               <LineChart size={18} />,
//               'MARKET',
//               activeItem === 'MARKET',
//               () => handleItemClick('MARKET')
//             )}
//           </Link>
//         </div>

//         <div className="mt-auto border-t border-gray-800">
//           {isOpen ? (
//             <>
//               <div className="px-4 py-3 text-sm">
//                 <div className="text-gray-400">#59245077</div>
//                 <div className="text-gray-400">singh.nikhil@webseeder.tech</div>
//               </div>
//               <Link href="/Deposit" className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
//                 <Wallet size={16} className="mr-2" />
//                 Deposit
//               </Link>
//               <Link href="/Withdraw" className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
//                 <ArrowUpDown size={16} className="mr-2" />
//                 Withdraw
//               </Link>
//               <Link href="/Transaction" className="px-4 py-2 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
//                 <FileText size={16} className="mr-2" />
//                 Transaction
//               </Link>
//               <div className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 cursor-pointer flex items-center">
//                 <LogOut size={16} className="mr-2" />
//                 <span>Logout</span>
//               </div>
//             </>
//           ) : (
//             <div className="flex flex-col items-center gap-2 py-4">
//               <div className="text-xs text-gray-400 mb-2">
//                 #59245077
//               </div>
//               <Link href="/Deposit" className="p-2 hover:text-blue-300">
//                 <Wallet size={18} />
//               </Link>
//               <Link href="/Withdraw" className="p-2 hover:text-blue-300">
//                 <ArrowUpDown size={18} />
//               </Link>
//               <Link href="/Transaction" className="p-2 hover:text-blue-300">
//                 <FileText size={18} />
//               </Link>
//               <div 
//                 className="p-2 hover:text-blue-300 relative cursor-pointer"
//                 onMouseEnter={() => setShowLogoutText(true)}
//                 onMouseLeave={() => setShowLogoutText(false)}
//               >
//                 <LogOut size={18} />
//                 {showLogoutText && (
//                   <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
//                     Logout
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {showSupportPanel && (
//         <div className="fixed left-16 top-0 h-full w-80 bg-gray-800 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
//           <div className="flex items-center justify-between p-4 border-b border-gray-700">
//             <div className="flex items-center space-x-3">
//               {currentSupportView !== 'main' && (
//                 <button 
//                   onClick={() => setCurrentSupportView('main')}
//                   className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
//                 >
//                   <ArrowLeft size={16} className="mr-1" />
//                   Back to Help
//                 </button>
//               )}
//             </div>
//             <button onClick={() => setShowSupportPanel(false)} className="text-gray-400 hover:text-white">
//               <X size={18} />
//             </button>
//           </div>

//           <div className="p-4">
//             <h2 className="text-lg font-semibold">{supportData[currentSupportView].title}</h2>
//           </div>

//           <div className="flex-1 overflow-y-auto">
//             {supportData[currentSupportView].items?.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   if (item.action === 'modal') {
//                     setShowTutorialModal(item.id);
//                   } else {
//                     setCurrentSupportView(item.id);
//                   }
//                 }}
//                 className="w-full p-4 text-left hover:bg-gray-700 transition-colors border-b border-gray-700"
//               >
//                 <div className="flex items-center">
//                   <span className="text-2xl mr-3">{item.icon}</span>
//                   <div>
//                     <div className="font-medium">{item.title}</div>
//                     <div className="text-sm text-gray-400">{item.subtitle}</div>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {showTutorialModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-gray-700 rounded-lg p-6 max-w-md w-full mx-4 relative">
//             <button onClick={() => setShowTutorialModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//               <X size={18} />
//             </button>
            
//             <div className="mb-4">
//               <h3 className="text-white text-lg font-semibold mb-2">
//                 {showTutorialModal === 'trade-tutorial' ? 'How to Trade?' : 'Verification Status'}
//               </h3>
//               <p className="text-gray-300 text-sm">
//                 {showTutorialModal === 'trade-tutorial'
//                   ? 'Learn how to use the chart and place trades.'
//                   : 'Your account is currently not verified. Complete verification to access all features.'}
//               </p>
//             </div>
            
//             <div className="flex space-x-3">
//               <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded">
//                 Skip
//               </button>
//               <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SideBar;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HelpCircle, 
  User, 
  BarChart3, 
  LineChart,
  X, 
  Settings, 
  Volume2, 
  ChevronDown, 
  ArrowLeft, 
  ExternalLink,
  LogOut,
  Wallet,
  ArrowUpDown,
  FileText,
  Sun,
  Moon,
  Check,
  Minus,
  Plus
} from 'lucide-react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSupportPanel, setShowSupportPanel] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [currentSupportView, setCurrentSupportView] = useState('main');
  const [showTutorialModal, setShowTutorialModal] = useState(null);
  const [showLogoutText, setShowLogoutText] = useState(false);
  const [showSettingsText, setShowSettingsText] = useState(false);
  const pathname = usePathname();

  // Settings state
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('(UTC+05:30)');
  const [themeMode, setThemeMode] = useState('Full Night'); // Light Mode, Twilight, Full Night
  const [gridOpacity, setGridOpacity] = useState(8);
  const [autoScrolling, setAutoScrolling] = useState(true);
  const [oneClickTrade, setOneClickTrade] = useState(true);
  const [performanceMode, setPerformanceMode] = useState(true);
  const [shortOrderLabel, setShortOrderLabel] = useState(false);
  const [upTrendColor, setUpTrendColor] = useState(1);
  const [downTrendColor, setDownTrendColor] = useState(1);

  const upTrendColors = [
    { id: 0, color: 'bg-green-500' },
    { id: 1, color: 'bg-green-600' },
    { id: 2, color: 'bg-blue-500' },
    { id: 3, color: 'bg-cyan-300' },
    { id: 4, color: 'bg-white' }
  ];

  const downTrendColors = [
    { id: 0, color: 'bg-red-400' },
    { id: 1, color: 'bg-red-500' },
    { id: 2, color: 'bg-orange-500' },
    { id: 3, color: 'bg-purple-400' },
    { id: 4, color: 'bg-black' }
  ];

  const supportData = {
    main: {
      title: 'Help',
      items: [
        { id: 'faq', icon: '📋', title: 'FAQ', subtitle: 'Open the database' },
        { id: 'tutorials', icon: '💾', title: 'Tutorials', subtitle: 'Use the hints' },
      ]
    },
    tutorials: {
      title: 'Tutorials',
      backTo: 'Help',
      items: [
        { id: 'trade-tutorial', icon: '📈', title: 'How to trade', action: 'modal' },
        { id: 'verification-tutorial', icon: '✓', title: 'How to pass verification', action: 'modal' },
      ]
    },
    faq: {
      title: 'FAQ',
      backTo: 'Help',
      items: [
        { id: 'general', icon: '◊', title: 'General', subtitle: '11 questions' },
        { id: 'account', icon: '👤', title: 'Account', subtitle: '4 questions' },
        { id: 'verification', icon: '◊', title: 'Verification', subtitle: '5 questions' },
      ]
    }
  };

  const getActiveItem = () => {
    if (pathname === '/Account') return 'ACCOUNT';
    if (pathname === '/Market') return 'MARKET';
    if (pathname === '/Analytics') return 'ANALYTICS';
    if (pathname === '/support') return 'SUPPORT';
  };

  const [activeItem, setActiveItem] = useState(getActiveItem());

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setShowSupportPanel(false);
    setShowSettingsPanel(false);
    setShowTutorialModal(null);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (itemName === 'SUPPORT') {
      setShowSupportPanel(true);
      setShowSettingsPanel(false);
      setCurrentSupportView('main');
    } else {
      setShowSupportPanel(false);
    }
  };

  const handleSettingsClick = () => {
    setShowSettingsPanel(true);
    setShowSupportPanel(false);
  };

  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [pathname]);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (isOpen || showSupportPanel || showSettingsPanel) {
        mainContent.classList.add('blur-sm');
      } else {
        mainContent.classList.remove('blur-sm');
      }
    }
  }, [isOpen, showSupportPanel, showSettingsPanel]);

  const renderNavItem = (icon, label, active, onClick) => (
    <div 
      className={`w-full flex items-center py-3 px-4 cursor-pointer transition-all duration-200 ${
        active ? 'bg-blue-500 text-white' : 'hover:bg-gray-800 hover:text-blue-300'
      }`}
      onClick={onClick}
    >
      <div className="flex-shrink-0">{icon}</div>
      {isOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
    </div>
  );

  const handleIncreaseOpacity = () => {
    if (gridOpacity < 10) setGridOpacity(gridOpacity + 1);
  };

  const handleDecreaseOpacity = () => {
    if (gridOpacity > 0) setGridOpacity(gridOpacity - 1);
  };

  return (
    <>
      {(isOpen || showSupportPanel || showSettingsPanel) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}
      
      <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white flex flex-col transition-all duration-300 z-20 ${
        isOpen ? 'w-64' : 'w-16'
      }`}>
        {!isOpen ? (
          <>
            <button onClick={toggleSidebar} className="w-full flex justify-center items-center py-3 hover:bg-gray-800">
              <div className="w-5 h-4 flex flex-col justify-between">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="w-full h-0.5 bg-white" />
                ))}
              </div>
            </button>
            {/* Collapsed state - show UID at top */}
            {/* <div className="px-2 py-2 text-center border-b border-gray-800">
              <div className="text-xs text-gray-400">#59245077</div>
            </div> */}
          </>
        ) : (
          <>
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-gray-400">#59245077</div>
              </div>
              <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            {/* Expanded state - show email below user info */}
            <div className="px-4 py-2 border-b border-gray-800">
              <div className="text-xs text-gray-400">singh.nikhil@webseeder.tech</div>
            </div>
          </>
        )}

        <div className="flex-grow pt-2">
          <Link href="/Trade">
            {renderNavItem(
              <LineChart size={18} />,
              'TRADE',
              activeItem === 'TRADE',
              () => handleItemClick('TRADE')
            )}
          </Link>

          <div>
            {renderNavItem(
              <HelpCircle size={18} />,
              'SUPPORT',
              activeItem === 'SUPPORT',
              () => handleItemClick('SUPPORT')
            )}
          </div>

          <Link href="/Account">
            {renderNavItem(
              <User size={18} />,
              'ACCOUNT',
              activeItem === 'ACCOUNT',
              () => handleItemClick('ACCOUNT')
            )}
          </Link>

          <Link href="/Analytics">
            {renderNavItem(
              <BarChart3 size={18} />,
              'ANALYTICS',
              activeItem === 'ANALYTICS',
              () => handleItemClick('ANALYTICS')
            )}
          </Link>

          <Link href="/Market">
            {renderNavItem(
              <LineChart size={18} />,
              'MARKET',
              activeItem === 'MARKET',
              () => handleItemClick('MARKET')
            )}
          </Link>
        </div>

        <div className="border-t border-gray-800">
          {isOpen ? (
            <>
              <Link href="/Deposit\" className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
                <Wallet size={16} className="mr-2" />
                Deposit
              </Link>
              <Link href="/Withdraw" className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
                <ArrowUpDown size={16} className="mr-2" />
                Withdraw
              </Link>
              <Link href="/Transaction" className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 flex items-center">
                <FileText size={16} className="mr-2" />
                Transaction
              </Link>
              <div 
                className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 cursor-pointer flex items-center"
                onClick={handleSettingsClick}
              >
                <Settings size={16} className="mr-2" />
                <span>Settings</span>
              </div>
              <Link href="/">
              <div className="px-4 py-3 hover:bg-gray-800 hover:text-blue-300 transition-colors duration-200 cursor-pointer flex items-center">
                <LogOut size={16} className="mr-2" />
                <span>Logout</span>
              </div>
              </Link>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2 py-4">
              <Link href="/Deposit" className="p-2 hover:text-blue-300">
                <Wallet size={18} />
              </Link>
              <Link href="/Withdraw" className="p-2 hover:text-blue-300">
                <ArrowUpDown size={18} />
              </Link>
              <Link href="/Transaction" className="p-2 hover:text-blue-300">
                <FileText size={18} />
              </Link>
              <div 
                className="p-2 hover:text-blue-300 relative cursor-pointer"
                onClick={handleSettingsClick}
                onMouseEnter={() => setShowSettingsText(true)}
                onMouseLeave={() => setShowSettingsText(false)}
              >
                <Settings size={18} />
                {showSettingsText && (
                  <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Settings
                  </div>
                )}
              </div>
              <div 
                className="p-2 hover:text-blue-300 relative cursor-pointer"
                onMouseEnter={() => setShowLogoutText(true)}
                onMouseLeave={() => setShowLogoutText(false)}
              >
                <LogOut size={18} />
                {showLogoutText && (
                  <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Logout
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {showSupportPanel && (
        <div className="fixed left-16 top-0 h-full w-80 bg-gray-800 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              {currentSupportView !== 'main' && (
                <button 
                  onClick={() => setCurrentSupportView('main')}
                  className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back to Help
                </button>
              )}
            </div>
            <button onClick={() => setShowSupportPanel(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold">{supportData[currentSupportView].title}</h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            {supportData[currentSupportView].items?.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.action === 'modal') {
                    setShowTutorialModal(item.id);
                  } else {
                    setCurrentSupportView(item.id);
                  }
                }}
                className="w-full p-4 text-left hover:bg-gray-700 transition-colors border-b border-gray-700"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {showSettingsPanel && (
        <div className="fixed top-0 h-full w-80 bg-gray-800 text-white z-30 flex flex-col" style={{ left: isOpen ? '256px' : '64px' }}>
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Settings</h2>
            <button onClick={() => setShowSettingsPanel(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-1">Language</div>
                <div className="relative">
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded py-2 px-3 appearance-none pr-8 text-white"
                  >
                    <option>English</option>
                    <option>Español</option>
                    <option>Français</option>
                    <option>Deutsch</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-400 mb-1">Timezone</div>
                <div className="relative">
                  <select 
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded py-2 px-3 appearance-none pr-8 text-white"
                  >
                    <option>(UTC+05:30)</option>
                    <option>(UTC+00:00)</option>
                    <option>(UTC-05:00)</option>
                    <option>(UTC+01:00)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-b border-gray-700">
              <div className="mb-1 uppercase text-xs font-semibold text-gray-400">Template</div>
              
              <div className="mb-2">
                <button 
                  className={`w-full flex items-center justify-between p-3 rounded-lg my-2 transition-colors ${themeMode === 'Light Mode' ? 'bg-blue-900 border border-blue-700' : 'bg-gray-900 border border-gray-700'}`}
                  onClick={() => setThemeMode('Light Mode')}
                >
                  <div className="flex items-center">
                    <Sun size={18} className="text-yellow-400 mr-2" />
                    <span>Light Mode</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full p-1 flex items-center ${themeMode === 'Light Mode' ? 'bg-blue-500 justify-end' : 'bg-gray-700 justify-start'}`}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </button>
              </div>

              <div className="mb-2">
                <button 
                  className={`w-full flex items-center justify-between p-3 rounded-lg my-2 transition-colors ${themeMode === 'Twilight' ? 'bg-blue-900 border border-blue-700' : 'bg-gray-900 border border-gray-700'}`}
                  onClick={() => setThemeMode('Twilight')}
                >
                  <div className="flex items-center">
                    <div className="text-amber-400 mr-2">🌆</div>
                    <span>Twilight</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full p-1 flex items-center ${themeMode === 'Twilight' ? 'bg-blue-500 justify-end' : 'bg-gray-700 justify-start'}`}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </button>
              </div>

              <div>
                <button 
                  className={`w-full flex items-center justify-between p-3 rounded-lg my-2 transition-colors ${themeMode === 'Full Night' ? 'bg-blue-900 border border-blue-700' : 'bg-gray-900 border border-gray-700'}`}
                  onClick={() => setThemeMode('Full Night')}
                >
                  <div className="flex items-center">
                    <div className="text-amber-400 mr-2">🌙</div>
                    <span>Full Night</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full p-1 flex items-center ${themeMode === 'Full Night' ? 'bg-blue-500 justify-end' : 'bg-gray-700 justify-start'}`}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="p-4 border-b border-gray-700">
              <div className="mb-3 uppercase text-xs font-semibold text-gray-400">Platform</div>
              
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-1">Grid's opacity</div>
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-gray-900 hover:bg-gray-700 rounded-l border border-gray-700"
                    onClick={handleDecreaseOpacity}
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-full h-8 flex items-center justify-center bg-gray-900 border-t border-b border-gray-700">
                    {gridOpacity}
                  </div>
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-gray-900 hover:bg-gray-700 rounded-r border border-gray-700"
                    onClick={handleIncreaseOpacity}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div 
                  className={`w-5 h-5 flex-shrink-0 ${autoScrolling ? 'bg-blue-500' : 'border border-gray-600 bg-gray-900'} rounded flex items-center justify-center cursor-pointer`}
                  onClick={() => setAutoScrolling(!autoScrolling)}
                >
                  {autoScrolling && <Check size={14} className="text-white" />}
                </div>
                <div className="ml-3">
                  <div>Auto-scrolling</div>
                  <div className="text-xs text-gray-400">Automatic graphic scrolling</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div 
                  className={`w-5 h-5 flex-shrink-0 ${oneClickTrade ? 'bg-blue-500' : 'border border-gray-600 bg-gray-900'} rounded flex items-center justify-center cursor-pointer`}
                  onClick={() => setOneClickTrade(!oneClickTrade)}
                >
                  {oneClickTrade && <Check size={14} className="text-white" />}
                </div>
                <div className="ml-3">
                  <div>1-click trade</div>
                  <div className="text-xs text-gray-400">Open trades without confirmation</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div 
                  className={`w-5 h-5 flex-shrink-0 ${performanceMode ? 'bg-blue-500' : 'border border-gray-600 bg-gray-900'} rounded flex items-center justify-center cursor-pointer`}
                  onClick={() => setPerformanceMode(!performanceMode)}
                >
                  {performanceMode && <Check size={14} className="text-white" />}
                </div>
                <div className="ml-3">
                  <div>Performance Mode</div>
                  <div className="text-xs text-gray-400">Use optimized rendering for chart and candles</div>
                </div>
              </div>

              <div className="flex items-center">
                <div 
                  className={`w-5 h-5 flex-shrink-0 ${shortOrderLabel ? 'bg-blue-500' : 'border border-gray-600 bg-gray-900'} rounded flex items-center justify-center cursor-pointer`}
                  onClick={() => setShortOrderLabel(!shortOrderLabel)}
                >
                  {shortOrderLabel && <Check size={14} className="text-white" />}
                </div>
                <div className="ml-3">
                  <div>Short order label</div>
                  <div className="text-xs text-gray-400">Use short order element mode</div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-3 uppercase text-xs font-semibold text-gray-400">Graph colors</div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Up Trend</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {upTrendColors.map((color) => (
                    <button 
                      key={color.id}
                      className={`h-8 ${color.color} rounded flex items-center justify-center cursor-pointer`}
                      onClick={() => setUpTrendColor(color.id)}
                    >
                      {upTrendColor === color.id && <Check size={16} className="text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Down Trend</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {downTrendColors.map((color) => (
                    <button 
                      key={color.id}
                      className={`h-8 ${color.color} rounded flex items-center justify-center cursor-pointer`}
                      onClick={() => setDownTrendColor(color.id)}
                    >
                      {downTrendColor === color.id && <Check size={16} className="text-white" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTutorialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-gray-700 rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button onClick={() => setShowTutorialModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={18} />
            </button>
            
            <div className="mb-4">
              <h3 className="text-white text-lg font-semibold mb-2">
                {showTutorialModal === 'trade-tutorial' ? 'How to Trade?' : 'Verification Status'}
              </h3>
              <p className="text-gray-300 text-sm">
                {showTutorialModal === 'trade-tutorial'
                  ? 'Learn how to use the chart and place trades.'
                  : 'Your account is currently not verified. Complete verification to access all features.'}
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded">
                Skip
              </button>
              <button onClick={() => setShowTutorialModal(null)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;