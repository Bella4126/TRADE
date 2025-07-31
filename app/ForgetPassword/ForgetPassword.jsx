"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, KeyRound, ChevronDown, Search, Check, X } from 'lucide-react';

const countries = [
  // Included for consistency, though not used in this form
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  // ... (rest of the countries list can be added if needed)
  { name: "Zimbabwe", code: "ZW" }
];

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '' });
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResending, setIsResending] = useState(false);

  // OTP timer
  useEffect(() => {
    if (timeLeft > 0 && showOTP) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showOTP]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (formData.email.trim() !== '') {
      setShowOTP(true); // Simulate sending OTP
    }
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (otp.every(digit => digit !== '')) {
      router.push('/MainLayout'); // Navigate to MainLayout on successful OTP submission
    }
  };

  const isEmailValid = formData.email.trim() !== '';
  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-[#2a3142] rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#232939] p-2 flex justify-center space-x-4">
            <button className="px-4 py-2 rounded bg-transparent text-white">Forgot Password</button>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-5 text-center">Forgot Password</h2>

            <form onSubmit={showOTP ? handleSubmitOtp : handleSubmitEmail} className="space-y-5">
              {!showOTP ? (
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

                  <button
                    type="submit"
                    disabled={!isEmailValid}
                    className={`w-full py-2.5 rounded-md text-white font-medium transition-colors ${
                      isEmailValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Send OTP
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-300 mb-5 text-sm text-center">
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
                        className="w-10 h-12 text-center text-lg font-medium bg-[#1a1f2e] border border-[#3a3f50] rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        maxLength={1}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={!isOtpComplete}
                    className={`w-full py-2.5 rounded-md text-white font-medium transition-colors ${
                      isOtpComplete ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Verify and Reset
                  </button>

                  <div className="text-center text-xs mt-4">
                    <p className="text-gray-400 mb-2">Didn't receive the code?</p>
                    {timeLeft > 0 ? (
                      <p className="text-gray-400">Resend code in <span className="text-white">{timeLeft}s</span></p>
                    ) : (
                      <button
                        onClick={handleResendOtp}
                        disabled={isResending}
                        className={`text-blue-400 hover:underline ${isResending ? 'opacity-50 cursor-wait' : ''}`}
                      >
                        {isResending ? 'Resending...' : 'Resend Code'}
                      </button>
                    )}
                  </div>
                </>
              )}

              <div className="mt-6 pt-6 border-t border-[#3a3f50]">
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#2a3142] text-gray-400 -mt-3">Back to</span>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link href="/Login" className="text-blue-400 hover:underline">Sign In</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}