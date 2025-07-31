'use client';
import SignIn from "./SignIn";
// import AuthLayout from "./AuthLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2235] to-[#111827] text-white">
      <Navbar />
      <SignIn />
    <Footer />
    </div>
  );
}
