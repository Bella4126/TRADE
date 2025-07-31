

"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Building2, Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 py-5 px-6 md:px-12 flex items-center justify-between relative z-50 bg-gray-50 backdrop-blur-md border-b border-gray-300 shadow-lg">
      <div className="flex items-center">
        <Link href="/" className="flex items-center text-black text-xl font-bold hover:text-emerald-500 transition-all duration-300">
          <div className="mr-3 p-2 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg">
            <Building2 size={20} color="#ffffff" />
          </div>
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 font-semibold text-lg relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="About" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 font-semibold text-lg relative group">
          About us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="Blog" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 font-semibold text-lg relative group">
          Blog
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {/* <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 font-semibold text-lg relative group">
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link> */}
        <Link href="Affiliate" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 font-semibold text-lg relative group">
          Affiliate
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/ContactUs" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 font-semibold text-lg relative group">
          Contact Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/Login" className="bg-gray-500/80 hover:bg-gray-400/90 px-5 py-2.5 rounded-lg text-gray-50 font-semibold transition-all duration-300 hover:shadow-md border border-gray-400">
          Log in/Sign up
        </Link>
        <Link href="/Registration" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 px-5 py-2.5 rounded-lg text-gray-50 font-semibold transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
          Demo account
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-50 backdrop-blur-md py-6 px-6 flex flex-col space-y-4 border-b border-gray-300 shadow-2xl">
          <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            Home
          </Link>
          <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            About us
          </Link>
          <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            Blog
          </Link>
          <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            FAQ
          </Link>
          <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            Affiliate
          </Link>
          <Link href="#" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            Contact us
          </Link>
          <hr className="border-gray-300 my-2" />
          <Link href="/Login" className="text-gray-900 hover:text-emerald-500 transition-all duration-300 py-2">
            Log in/Sign up
          </Link>
          <Link href="/Registration" className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 rounded-lg text-gray-50 font-semibold hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-md">
            Sign up
          </Link>
          <button className="flex items-center text-gray-900">
            <Globe size={20} className="mr-1" />
            EN
          </button>
        </div>
      )}

    </nav>
  );
}




