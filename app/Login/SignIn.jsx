// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import { ArrowRight, Facebook } from 'lucide-react';

// export default function SignIn() {
//   const [activeTab, setActiveTab] = useState('login');
//   const [rememberMe, setRememberMe] = useState(false);
  
//   return (
//     <div className="min-h-screen bg-[#1a1f2e] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
//       {/* Background chart line */}
//       <div className="absolute bottom-0 left-0 right-0 opacity-20">
//         <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
//           <path 
//             d="M0,100 C150,180 350,0 500,100 C650,200 800,80 950,120 C1100,160 1300,0 1440,80 L1440,200 L0,200 Z" 
//             fill="none" 
//             stroke="#4299e1" 
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
      
//       <h1 className="text-white text-3xl font-bold mb-8">Sign In To Your Account</h1>
      
//       <div className="bg-[#2a3142] rounded-lg w-full max-w-md overflow-hidden shadow-lg">
//         {/* Tabs */}
//         <div className="flex border-b border-gray-700">
//           <button 
//             className={`flex-1 py-3 text-center font-medium text-sm transition-colors ${
//               activeTab === 'login' ? 'text-white bg-[#2a3142]' : 'text-gray-400 bg-[#252b3b] hover:text-gray-300'
//             }`}
//             onClick={() => setActiveTab('login')}
//           >
//             Login
//           </button>
//           <button 
//             className={`flex-1 py-3 text-center font-medium text-sm transition-colors ${
//               activeTab === 'registration' ? 'text-white bg-[#2a3142]' : 'text-gray-400 bg-[#252b3b] hover:text-gray-300'
//             }`}
//             onClick={() => setActiveTab('registration')}
//           >
//             Registration
//           </button>
//         </div>
        
//         {/* Form Content */}
//         <div className="p-6">
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 className="w-full bg-[#202531] border border-gray-700 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 placeholder="Email"
//               />
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input 
//                 type="password" 
//                 id="password" 
//                 className="w-full bg-[#202531] border border-gray-700 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 placeholder="Password"
//               />
//             </div>
            
//             <div className="flex items-center justify-between mb-6">
//               <label className="flex items-center">
//                 <input 
//                   type="checkbox" 
//                   className="w-4 h-4 text-blue-500 bg-[#202531] border-gray-700 rounded"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                 />
//                 <span className="ml-2 text-sm text-gray-300">Remember me</span>
//               </label>
//               <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
//                 Forgot your password?
//               </Link>
//             </div>
            
//             <button 
//               type="submit" 
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded flex items-center justify-center transition-colors"
//             >
//               Sign in
//               <ArrowRight size={16} className="ml-2" />
//             </button>
//           </form>
          
//           {/* Social Login */}
//           <div className="mt-8">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-[#2a3142] text-gray-400">Sign in via</span>
//               </div>
//             </div>
            
//             <div className="mt-6 flex justify-center space-x-4">
//               <button className="bg-[#1877f2] hover:bg-blue-700 w-12 h-12 rounded-md flex items-center justify-center transition-colors">
//                 <Facebook size={24} color="white" />
//               </button>
//               <button className="bg-white hover:bg-gray-200 w-12 h-12 rounded-md flex items-center justify-center transition-colors">
//                 <svg width="24" height="24" viewBox="0 0 24 24">
//                   <path 
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
//                     fill="#4285F4" 
//                   />
//                   <path 
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
//                     fill="#34A853" 
//                   />
//                   <path 
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
//                     fill="#FBBC05" 
//                   />
//                   <path 
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
//                     fill="#EA4335" 
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, KeyRound, ChevronDown, Search, Check, Facebook } from 'lucide-react';

const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Costa Rica", code: "CR" },
  { name: "Côte d'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Grenada", code: "GD" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, North", code: "KP" },
  { name: "Korea, South", code: "KR" },
  { name: "Kosovo", code: "XK" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "North Macedonia", code: "MK" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestine", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Vatican City", code: "VA" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
  // ... (rest of the countries list remains unchanged)
  { name: "Zimbabwe", code: "ZW" }
];

export default function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Password validation state
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    hasLower: false,
    hasUpper: false,
    hasSpecial: false,
  });

  useEffect(() => {
    const hasLowercase = /[a-z]/.test(formData.password);
    const hasUppercase = /[A-Z]/.test(formData.password);
    const hasSpecial = /[^A-Za-z0-9]/.test(formData.password);
    let score = 0;
    if (formData.password.length > 0) score += 1;
    if (hasLowercase) score += 1;
    if (hasUppercase) score += 1;
    if (hasSpecial) score += 1;
    if (formData.password.length >= 8) score += 1;
    setPasswordStrength({ score: Math.min(score, 5), hasLower: hasLowercase, hasUpper: hasUppercase, hasSpecial: hasSpecial });
  }, [formData.password]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isCountryDropdownOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isCountryDropdownOpen]);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({ ...prev, country }));
    setIsCountryDropdownOpen(false);
    setSearchTerm("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (isLoginFormValid()) router.push('/MainLayout');
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (isRegistrationValid()) router.push('/MainLayout');
  };

  const isLoginFormValid = () => formData.email.trim() !== '' && formData.password.trim() !== '';
  const isPasswordValid = passwordStrength.hasUpper && passwordStrength.hasLower && passwordStrength.hasSpecial && formData.password.length >= 8;
  const isRegistrationValid = () => formData.firstName.trim() !== '' && formData.lastName.trim() !== '' && formData.email.trim() !== '' && isPasswordValid && formData.country && termsAgreed;

  return (
    <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-[#2a3142] rounded-lg shadow-lg overflow-hidden">
          {/* Toggle Buttons at the Top */}
          <div className="bg-[#232939] p-2 flex justify-center space-x-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded ${isLogin ? 'bg-blue-500 text-white' : 'bg-transparent text-white'}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded ${!isLogin ? 'bg-blue-500 text-white' : 'bg-transparent text-white'}`}
            >
              Registration
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-5 text-center">
              {isLogin ? 'Sign In To Your Account' : 'Create Your Account'}
            </h2>

            <form onSubmit={isLogin ? handleSignIn : handleRegistration} className="space-y-5">
              {isLogin ? (
                <>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full pl-10 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full pl-10 pr-10 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <label className="flex items-center text-gray-300">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="w-4 h-4 bg-[#1a1f2e] border-[#3a3f50] rounded"
                      />
                      <span className="ml-2">Remember me</span>
                    </label>
                    <Link href="/ForgetPassword" className="text-blue-400 hover:text-blue-300">Forgot your password?</Link>
                  </div>

                  <button
                    type="submit"
                    disabled={!isLoginFormValid()}
                    className={`w-full py-2.5 rounded-md text-white font-medium transition-colors ${
                      isLoginFormValid() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-full pl-3 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full pl-3 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full pl-10 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-10 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div
                          key={index}
                          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                            index <= passwordStrength.score
                              ? passwordStrength.score < 3
                                ? 'bg-red-500'
                                : passwordStrength.score < 5
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                              : 'bg-[#3a3f50]'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      <span className={passwordStrength.hasUpper ? 'text-green-400' : ''}>Uppercase</span>
                      {' • '}
                      <span className={passwordStrength.hasLower ? 'text-green-400' : ''}>Lowercase</span>
                      {' • '}
                      <span className={passwordStrength.hasSpecial ? 'text-green-400' : ''}>Special character</span>
                    </div>
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white"
                    >
                      {formData.country ? (
                        <div className="flex items-center">
                          <img
                            src={`https://flagcdn.com/w20/${formData.country.code.toLowerCase()}.png`}
                            alt={formData.country.name}
                            className="w-4 h-3 mr-2 object-cover"
                          />
                          <span className="text-sm">{formData.country.name}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">Select your country</span>
                      )}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isCountryDropdownOpen && (
                      <div className="absolute z-50 mt-2 w-full bg-[#1a1f2e] border border-[#3a3f50] rounded-md shadow-lg max-h-60 overflow-y-auto">
                        <div className="sticky top-0 bg-[#1a1f2e] p-2 border-b border-[#3a3f50]">
                          <div className="relative">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
                            <input
                              ref={searchRef}
                              type="text"
                              placeholder="Search countries..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full pl-7 pr-3 py-1.5 bg-[#232939] border border-[#3a3f50] rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        <ul>
                          {filteredCountries.map((country) => (
                            <li
                              key={country.code}
                              onClick={() => handleCountrySelect(country)}
                              className={`flex items-center px-3 py-2 hover:bg-[#232939] cursor-pointer ${
                                formData.country?.code === country.code ? 'bg-[#232939]' : ''
                              }`}
                            >
                              <img
                                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                alt={country.name}
                                className="w-4 h-3 mr-2 object-cover"
                              />
                              <span className="text-white text-sm">{country.name}</span>
                              {formData.country?.code === country.code && <Check className="w-3 h-3 ml-auto text-blue-500" />}
                            </li>
                          ))}
                          {filteredCountries.length === 0 && (
                            <li className="px-3 py-2 text-gray-400 text-center text-sm">No countries found</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start mt-3">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={termsAgreed}
                      onChange={() => setTermsAgreed(!termsAgreed)}
                      className="w-4 h-4 bg-[#1a1f2e] border-[#3a3f50] rounded"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                      I agree to the <Link href="#" className="text-blue-400 hover:underline">Terms and Conditions</Link> and <Link href="#" className="text-blue-400 hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!isRegistrationValid()}
                    className={`w-full py-2.5 rounded-md text-white font-medium transition-colors ${
                      isRegistrationValid() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Create Account
                  </button>
                </>
              )}

              <div className="mt-6 pt-6 border-t border-[#3a3f50]">
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#2a3142] text-gray-400 -mt-3">Sign in via</span>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="bg-[#1877f2] hover:bg-blue-700 w-10 h-10 rounded-md flex items-center justify-center">
                    <Facebook size={20} color="white" />
                  </button>
                  <button className="bg-white hover:bg-gray-200 w-10 h-10 rounded-md flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5 text-center text-sm">
              <p className="text-gray-400">
                {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 hover:underline"
                >
                  {isLogin ? 'Register' : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}