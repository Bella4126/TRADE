

"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, AtSign, KeyRound, User, Mail, ChevronDown, Search, Check, X } from 'lucide-react';

// Countries data
const countries = [
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
  { name: "Zimbabwe", code: "ZW" }
];

export default function Registration() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: null,
  });
  
  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [marketingOpt, setMarketingOpt] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Password validation state
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    hasLower: false,
    hasUpper: false,
    hasSpecial: false,
  });

  // OTP state
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResending, setIsResending] = useState(false);
  
  // Refs
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Password validation
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
    
    setPasswordStrength({
      score: Math.min(score, 5),
      hasLower: hasLowercase,
      hasUpper: hasUppercase,
      hasSpecial: hasSpecial,
    });
  }, [formData.password]);

  // OTP timer
  useEffect(() => {
    if (timeLeft > 0 && showOTP) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showOTP]);

  // Click outside handler for country dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
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

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);
    
    if (value && index < 5) {
      const nextInput = e.target.nextElementSibling;
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = e.target.previousElementSibling;
      if (prevInput) prevInput.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim().slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;
    
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6) newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
  };

  const handleResendOtp = () => {
    setIsResending(true);
    setTimeout(() => {
      setTimeLeft(60);
      setIsResending(false);
      setOtp(['', '', '', '', '', '']);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowOTP(true);
    }
  };

  const handleVerify = () => {
    window.location.href = '/MainLayout';
  };

  const isPasswordValid = 
    passwordStrength.hasUpper && 
    passwordStrength.hasLower && 
    passwordStrength.hasSpecial && 
    formData.password.length >= 8;

  const isFormValid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    formData.email.trim() !== '' && 
    isPasswordValid && 
    formData.country !== null &&
    termsAgreed;

  const isOtpComplete = otp.every(digit => digit !== '');

 return (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-md px-6">
      <div className="bg-[#232939] rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-5 text-center">Create Your TRADE Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full pl-10 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#10b981]"
                />
              </div>
              
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-full pl-10 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#10b981]"
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
                required
                className="w-full pl-10 pr-3 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#10b981]"
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
                required
                className="w-full pl-10 pr-10 py-2.5 bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#10b981]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
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
                        className="w-full pl-7 pr-3 py-1.5 bg-[#232939] border border-[#3a3f50] rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#10b981]"
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
                        {formData.country?.code === country.code && (
                          <Check className="w-3 h-3 ml-auto text-[#10b981]" />
                        )}
                      </li>
                    ))}
                    {filteredCountries.length === 0 && (
                      <li className="px-3 py-2 text-gray-400 text-center text-sm">No countries found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center h-4 mt-0.5">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={() => setTermsAgreed(!termsAgreed)}
                    className="h-3.5 w-3.5 bg-[#1a1f2e] border-[#3a3f50] rounded focus:ring-[#10b981]"
                  />
                </div>
                <div className="ml-2 text-xs">
                  <label htmlFor="terms" className="text-gray-300">
                    I agree to the <Link href="#" className="text-[#10b981] hover:underline">Terms and Conditions</Link> and <Link href="#" className="text-[#10b981] hover:underline">Privacy Policy</Link>
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-4 mt-0.5">
                  <input
                    id="marketing"
                    type="checkbox"
                    checked={marketingOpt}
                    onChange={() => setMarketingOpt(!marketingOpt)}
                    className="h-3.5 w-3.5 bg-[#1a1f2e] border-[#3a3f50] rounded focus:ring-[#10b981]"
                  />
                </div>
                <div className="ml-2 text-xs">
                  <label htmlFor="marketing" className="text-gray-300">
                    I agree to receive marketing communications from TRADE
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2.5 rounded-md text-white font-medium transition-colors ${
                  isFormValid 
                    ? 'bg-[#10b981] hover:bg-opacity-90' 
                    : 'bg-[#10b981] bg-opacity-50 cursor-not-allowed'
                }`}
              >
                Create Account
              </button>
            </div>
          </form>
          
          <div className="mt-5 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/Login" className="text-[#10b981] hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {showOTP && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="bg-[#1a1f2e] rounded-lg p-5 w-full max-w-sm mx-4 relative shadow-2xl border border-[#3a3f50]">
            <button 
              onClick={() => setShowOTP(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            
            <h2 className="text-lg font-semibold text-white mb-2">Verify Your Email</h2>
            <p className="text-gray-300 mb-5 text-sm">
              We've sent a verification code to <strong>{formData.email}</strong>
            </p>
            
            <div className="flex justify-center gap-2 mb-5" onPaste={handleOtpPaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  className="w-10 h-12 text-center text-lg font-medium bg-[#232939] border border-[#3a3f50] rounded-md text-white focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]"
                  maxLength={1}
                />
              ))}
            </div>
           
            <button
              onClick={handleVerify}
              disabled={!isOtpComplete}
              className={`w-full py-2.5 rounded-md text-white font-medium mb-4 transition ${
                isOtpComplete 
                  ? 'bg-[#10b981] hover:bg-opacity-90' 
                  : 'bg-[#10b981] bg-opacity-50 cursor-not-allowed'
              }`}
            >
              Verify Account
            </button>
          
            <div className="text-center text-xs">
              <p className="text-gray-400 mb-2">Didn't receive the code?</p>
              {timeLeft > 0 ? (
                <p className="text-gray-400">Resend code in <span className="text-white">{timeLeft}s</span></p>
              ) : (
                <button
                  onClick={handleResendOtp}
                  disabled={isResending}
                  className={`text-[#10b981] hover:underline ${isResending ? 'opacity-50 cursor-wait' : ''}`}
                >
                  {isResending ? 'Resending...' : 'Resend Code'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);
}