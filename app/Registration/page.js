import Registration from "./Registration";
// import AuthLayout from "./Authlayout";
import Navbar from "@/components/Navbar";
export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2235] to-[#111827] text-white">
      <Navbar />
        <Registration />
      
    </div>
  );
}