"use client";
import Link from 'next/link';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* UNIVERSAL HOVER STYLES: Figma Orange */}
      <style>{`
        .btn-get-started {
          background-color: #f59e0b !important; 
          transition: all 0.3s ease !important;
          color: white !important;
          display: inline-block;
          text-decoration: none !important;
        }
        .btn-get-started:hover {
          background-color: #d97706 !important; 
          transform: translateY(-2px);
          cursor: pointer;
        }
        .btn-pill-gray {
          background-color: #f3f4f6 !important; 
          transition: all 0.3s ease !important;
          color: black !important;
          display: inline-block;
          text-decoration: none !important;
        }
        .btn-pill-gray:hover {
          background-color: #e5e7eb !important;
          transform: translateY(-2px);
          cursor: pointer;
        }
      `}</style>

      <main className="flex-grow container mx-auto p-8 max-w-6xl" role="main">
        {/* Hero Section - FIGMA BLUE BACKGROUND */}
        <section className="text-center py-20 bg-[#f0f7ff] rounded-[40px] mb-12 shadow-sm border border-blue-50 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-black mb-6 tracking-tight">
              Bridging the Gap for Disabled Talent
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto mb-10 leading-relaxed">
              Empowering disabled professionals through mentorship and inclusive employer partnerships.
            </p>
            
            <Link href="/talent" className="btn-get-started px-10 py-4 rounded-full font-bold shadow-md">
              Get Started Today
            </Link>
          </div>
        </section>

        <div className="flex justify-center mt-12 mb-10">
          <Link 
            href="/about" 
            className="btn-pill-gray px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm"
          >
            Why Choose Enabled Jobs
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}