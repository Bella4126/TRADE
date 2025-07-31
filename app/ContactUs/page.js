import ContactUs from "./ContactUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a2235] to-[#111827] text-white">
            <Navbar />
            <ContactUs />
            <Footer />
        </div>
    );
}