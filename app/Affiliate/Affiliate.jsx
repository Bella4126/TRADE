// "use client";
// import React, { useState } from 'react';
// import { Users, DollarSign, TrendingUp, Gift, Copy, Check, Star, Award, Target, BarChart3 } from 'lucide-react';

// const Affiliate = () => {
//   const [copied, setCopied] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const affiliateLink = "https://TRADE.io/en/sign-up/?lid=12345";

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(affiliateLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const commissionRates = [
//     { level: 'Bronze', deposits: '$0 - $999', commission: '35%', color: 'bg-orange-600' },
//     { level: 'Silver', deposits: '$1,000 - $4,999', commission: '45%', color: 'bg-gray-400' },
//     { level: 'Gold', deposits: '$5,000 - $9,999', commission: '55%', color: 'bg-yellow-500' },
//     { level: 'Platinum', deposits: '$10,000+', commission: '65%', color: 'bg-purple-500' },
//   ];

//   const benefits = [
//     {
//       icon: <DollarSign className="w-8 h-8" />,
//       title: "High Commissions",
//       description: "Earn up to 65% commission on referred traders' losses"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Multi-Level Program",
//       description: "Get additional rewards from sub-affiliates' referrals"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Real-time Analytics",
//       description: "Track your performance with detailed statistics"
//     },
//     {
//       icon: <Gift className="w-8 h-8" />,
//       title: "Marketing Materials",
//       description: "Access banners, landing pages, and promotional content"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Personal Manager",
//       description: "Dedicated support for top-performing affiliates"
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Weekly Payouts",
//       description: "Fast and reliable payments every week"
//     }
//   ];

//   const stats = [
//     { label: "Active Affiliates", value: "15,000+", icon: <Users className="w-6 h-6" /> },
//     { label: "Total Payouts", value: "$2.5M+", icon: <DollarSign className="w-6 h-6" /> },
//     { label: "Average Commission", value: "45%", icon: <TrendingUp className="w-6 h-6" /> },
//     { label: "Countries", value: "100+", icon: <BarChart3 className="w-6 h-6" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header */}
//       <div className="bg-gray-800 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="bg-emerald-500 p-2 rounded">
//                 <span className="text-white font-bold text-sm">TRADE</span>
//               </div>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
//               <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Affiliate</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
//             </nav>
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-300 hover:text-white transition-colors">Log in</button>
//               <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded transition-colors">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Become a <span className="text-emerald-400">TRADE</span> Partner
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Join thousands of successful affiliates earning substantial commissions. 
//               Start monetizing your traffic with our industry-leading affiliate program.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
//                 Join Affiliate Program
//               </button>
//               <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
//                 View Demo Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-gray-800 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="flex justify-center mb-4 text-emerald-400">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-gray-800 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8 overflow-x-auto">
//             {[
//               { id: 'overview', label: 'Overview' },
//               { id: 'commissions', label: 'Commission Structure' },
//               { id: 'benefits', label: 'Benefits' },
//               { id: 'materials', label: 'Marketing Materials' },
//               { id: 'faq', label: 'FAQ' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
//                   activeTab === tab.id
//                     ? 'border-emerald-400 text-emerald-400'
//                     : 'border-transparent text-gray-400 hover:text-gray-300'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
//         {/* Overview Tab */}
//         {activeTab === 'overview' && (
//           <div className="space-y-16">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold mb-6">Why Choose TRADE Affiliate Program?</h2>
//               <p className="text-gray-300 text-lg max-w-3xl mx-auto">
//                 Our affiliate program offers industry-leading commissions, comprehensive support, 
//                 and all the tools you need to maximize your earning potential.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors">
//                   <div className="text-emerald-400 mb-4">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
//                   <p className="text-gray-400">{benefit.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Affiliate Link Section */}
//             <div className="bg-gray-800 p-8 rounded-lg">
//               <h3 className="text-2xl font-bold mb-6 text-center">Your Affiliate Link</h3>
//               <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//                 <div className="flex-1 bg-gray-700 p-4 rounded border border-gray-600">
//                   <code className="text-emerald-400 break-all">{affiliateLink}</code>
//                 </div>
//                 <button
//                   onClick={copyToClipboard}
//                   className="bg-emerald-500 hover:bg-emerald-600 px-6 py-4 rounded transition-colors flex items-center space-x-2"
//                 >
//                   {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
//                   <span>{copied ? 'Copied!' : 'Copy Link'}</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Commission Structure Tab */}
//         {activeTab === 'commissions' && (
//           <div className="space-y-12">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold mb-6">Commission Structure</h2>
//               <p className="text-gray-300 text-lg">
//                 Earn higher commissions as your referred traders deposit more. No limits on earnings!
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {commissionRates.map((rate, index) => (
//                 <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
//                   <div className={`w-12 h-12 ${rate.color} rounded-lg flex items-center justify-center mb-4`}>
//                     <Star className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{rate.level}</h3>
//                   <p className="text-gray-400 mb-3">{rate.deposits}</p>
//                   <div className="text-2xl font-bold text-emerald-400">{rate.commission}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gray-800 p-8 rounded-lg">
//               <h3 className="text-2xl font-bold mb-6">How It Works</h3>
//               <div className="grid md:grid-cols-3 gap-8">
//                 <div className="text-center">
//                   <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-white font-bold">1</span>
//                   </div>
//                   <h4 className="font-semibold mb-2">Refer Traders</h4>
//                   <p className="text-gray-400">Share your unique affiliate link with potential traders</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-white font-bold">2</span>
//                   </div>
//                   <h4 className="font-semibold mb-2">They Trade</h4>
//                   <p className="text-gray-400">Your referrals deposit and start trading on the platform</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-white font-bold">3</span>
//                   </div>
//                   <h4 className="font-semibold mb-2">You Earn</h4>
//                   <p className="text-gray-400">Receive commissions based on their trading activity</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Benefits Tab */}
//         {activeTab === 'benefits' && (
//           <div className="space-y-12">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold mb-6">Affiliate Benefits</h2>
//               <p className="text-gray-300 text-lg">
//                 Everything you need to succeed as a TRADE affiliate partner
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Financial Benefits</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>Up to 65% commission on referred traders</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>Weekly payment schedule</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>No commission caps or limits</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>Multiple payment methods available</span>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Support & Tools</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>Dedicated affiliate manager</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>Professional marketing materials</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>Real-time tracking dashboard</span>
//                   </li>
//                   <li className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
//                     <span>24/7 customer support</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Marketing Materials Tab */}
//         {activeTab === 'materials' && (
//           <div className="space-y-12">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold mb-6">Marketing Materials</h2>
//               <p className="text-gray-300 text-lg">
//                 Professional promotional materials to boost your conversion rates
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-gray-800 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4">Banners & Creatives</h3>
//                 <p className="text-gray-400 mb-4">High-converting banner ads in multiple sizes and languages</p>
//                 <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded transition-colors">
//                   Download Pack
//                 </button>
//               </div>

//               <div className="bg-gray-800 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
//                 <p className="text-gray-400 mb-4">Pre-built landing pages optimized for conversions</p>
//                 <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded transition-colors">
//                   View Templates
//                 </button>
//               </div>

//               <div className="bg-gray-800 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4">Email Templates</h3>
//                 <p className="text-gray-400 mb-4">Ready-to-use email campaigns for your audience</p>
//                 <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded transition-colors">
//                   Get Templates
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* FAQ Tab */}
//         {activeTab === 'faq' && (
//           <div className="space-y-12">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
//             </div>

//             <div className="space-y-6">
//               {[
//                 {
//                   question: "How do I join the affiliate program?",
//                   answer: "Simply sign up for a free affiliate account, get your unique referral link, and start promoting TRADE to earn commissions."
//                 },
//                 {
//                   question: "When do I get paid?",
//                   answer: "Payments are processed weekly, every Friday, for the previous week's commissions. Minimum payout is $50."
//                 },
//                 {
//                   question: "How much can I earn?",
//                   answer: "There's no limit to your earnings. Top affiliates earn thousands of dollars monthly with commission rates up to 65%."
//                 },
//                 {
//                   question: "Do you provide marketing support?",
//                   answer: "Yes, we provide banners, landing pages, email templates, and dedicated support from your personal affiliate manager."
//                 },
//                 {
//                   question: "How do I track my referrals?",
//                   answer: "Use our real-time affiliate dashboard to monitor clicks, registrations, deposits, and commissions 24/7."
//                 }
//               ].map((faq, index) => (
//                 <div key={index} className="bg-gray-800 p-6 rounded-lg">
//                   <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
//                   <p className="text-gray-400">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-16">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
//           <p className="text-emerald-100 text-lg mb-8">
//             Join thousands of successful affiliates and start earning substantial commissions today
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
//               Join Affiliate Program
//             </button>
//             <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
//               Contact Support
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="bg-emerald-500 p-2 rounded w-fit mb-4">
//                 <span className="text-white font-bold text-sm">TRADE</span>
//               </div>
//               <p className="text-gray-400">
//                 Leading binary options trading platform with advanced tools and features.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Trading</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Platform</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Demo Account</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 TRADE. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Affiliate;



"use client";
import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Gift, Copy, Check, Star, Award, Target, BarChart3 } from 'lucide-react';

const Affiliate = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const affiliateLink = "https://TRADE.io/en/sign-up/?lid=12345";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commissionRates = [
    { level: 'Bronze', deposits: '$0 - $999', commission: '35%', color: 'bg-orange-600' },
    { level: 'Silver', deposits: '$1,000 - $4,999', commission: '45%', color: 'bg-gray-400' },
    { level: 'Gold', deposits: '$5,000 - $9,999', commission: '55%', color: 'bg-yellow-500' },
    { level: 'Platinum', deposits: '$10,000+', commission: '65%', color: 'bg-purple-500' },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "High Commissions",
      description: "Earn up to 65% commission on referred traders' losses"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Level Program",
      description: "Get additional rewards from sub-affiliates' referrals"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track your performance with detailed statistics"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Marketing Materials",
      description: "Access banners, landing pages, and promotional content"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Personal Manager",
      description: "Dedicated support for top-performing affiliates"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Weekly Payouts",
      description: "Fast and reliable payments every week"
    }
  ];

  const stats = [
    { label: "Active Affiliates", value: "15,000+", icon: <Users className="w-8 h-8" /> },
    { label: "Total Payouts", value: "$2.5M+", icon: <DollarSign className="w-8 h-8" /> },
    { label: "Average Commission", value: "45%", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Countries", value: "100+", icon: <BarChart3 className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-400 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Become a <span className="text-gray-900">TRADE</span> Partner
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of successful affiliates earning substantial commissions. 
              Start monetizing your traffic with our industry-leading affiliate program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Join Affiliate Program
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Demo Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-emerald-500">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'commissions', label: 'Commission Structure' },
              { id: 'benefits', label: 'Benefits' },
              // { id: 'materials', label: 'Marketing Materials' },
              { id: 'faq', label: 'FAQ' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose TRADE Affiliate Program?</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our affiliate program offers industry-leading commissions, comprehensive support, 
                and all the tools you need to maximize your earning potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors">
                  <div className="text-emerald-500 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Affiliate Link Section */}
            {/* <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Your Affiliate Link</h3>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 bg-gray-700 p-4 rounded border border-gray-600">
                  <code className="text-emerald-500 break-all">{affiliateLink}</code>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 px-6 py-4 rounded transition-colors flex items-center space-x-2"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div> */}
          </div>
        )}

        {/* Commission Structure Tab */}
        {activeTab === 'commissions' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Commission Structure</h2>
              <p className="text-gray-300 text-lg">
                Earn higher commissions as your referred traders deposit more. No limits on earnings!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commissionRates.map((rate, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className={`w-12 h-12 ${rate.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{rate.level}</h3>
                  <p className="text-gray-400 mb-3">{rate.deposits}</p>
                  <div className="text-2xl font-bold text-emerald-500">{rate.commission}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Refer Traders</h4>
                  <p className="text-gray-400">Share your unique affiliate link with potential traders</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">They Trade</h4>
                  <p className="text-gray-400">Your referrals deposit and start trading on the platform</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">You Earn</h4>
                  <p className="text-gray-400">Receive commissions based on their trading activity</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Affiliate Benefits</h2>
              <p className="text-gray-300 text-lg">
                Everything you need to succeed as a TRADE affiliate partner
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Financial Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>Up to 65% commission on referred traders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>Weekly payment schedule</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>No commission caps or limits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>Multiple payment methods available</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Support & Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>Dedicated affiliate manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>Professional marketing materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>Real-time tracking dashboard</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Marketing Materials Tab */}
        {/* {activeTab === 'materials' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Marketing Materials</h2>
              <p className="text-gray-300 text-lg">
                Professional promotional materials to boost your conversion rates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Banners & Creatives</h3>
                <p className="text-gray-400 mb-4">High-converting banner ads in multiple sizes and languages</p>
                <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 px-4 py-2 rounded transition-colors">
                  Download Pack
                </button>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
                <p className="text-gray-400 mb-4">Pre-built landing pages optimized for conversions</p>
                <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 px-4 py-2 rounded transition-colors">
                  View Templates
                </button>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Email Templates</h3>
                <p className="text-gray-400 mb-4">Ready-to-use email campaigns for your audience</p>
                <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 px-4 py-2 rounded transition-colors">
                  Get Templates
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I join the affiliate program?",
                  answer: "Simply sign up for a free affiliate account, get your unique referral link, and start promoting TRADE to earn commissions."
                },
                {
                  question: "When do I get paid?",
                  answer: "Payments are processed weekly, every Friday, for the previous week's commissions. Minimum payout is $50."
                },
                {
                  question: "How much can I earn?",
                  answer: "There's no limit to your earnings. Top affiliates earn thousands of dollars monthly with commission rates up to 65%."
                },
                {
                  question: "Do you provide marketing support?",
                  answer: "Yes, we provide banners, landing pages, email templates, and dedicated support from your personal affiliate manager."
                },
                {
                  question: "How do I track my referrals?",
                  answer: "Use our real-time affiliate dashboard to monitor clicks, registrations, deposits, and commissions 24/7."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
     <div className="bg-white py-16">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-6 text-black">Ready to Start Earning?</h2>
    <p className="text-gray-700 text-lg mb-8">
      Join thousands of successful affiliates and start earning substantial commissions today
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
        Join Affiliate Program
      </button>
      <button className="border-2 border-gray-300 text-black hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
        Contact Support
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Affiliate;