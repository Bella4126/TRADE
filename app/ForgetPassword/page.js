import ForgetPassword from "./ForgetPassword";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";   
export default function ForgetPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2235] to-[#111827] text-white">
      <Navbar />
      <ForgetPassword />
      <Footer />
    </div>
  );
}