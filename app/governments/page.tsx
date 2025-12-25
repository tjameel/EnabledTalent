"use client";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ComingSoonPage() {
  
  // ✏️ CHANGE THESE FOR EACH PAGE
  const pageTitle = "Government Partners"; 
  const pageDesc = "Partnering for a more inclusive economy. We collaborate with government bodies to implement scalable workforce development strategies that empower underrepresented talent and drive sustainable economic growth.";
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .bg-cream { background-color: #fffbf0; }
        .text-gradient-orange {
            background: linear-gradient(90deg, #d94e33 0%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 14px 32px; border-radius: 9999px; font-weight: 700;
          transition: all 0.2s ease; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .btn-blue { background-color: #0f172a; color: white; }
      `}</style>

      <main className="flex-grow flex items-center justify-center relative overflow-hidden bg-cream py-32 px-6">
         {/* Background Shapes */}
         <div className="absolute top-0 right-0 w-[50%] h-full bg-[#fef3c7] rounded-bl-[300px] z-0 opacity-50"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d94e33] rounded-full blur-[100px] opacity-10 z-0"></div>

         <div className="relative z-10 text-center max-w-3xl">
            <span className="bg-white border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8 inline-block shadow-sm">
               Under Construction
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8 leading-tight">
               {pageTitle} <br/> 
               <span className="text-gradient-orange">Coming Soon.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
               {pageDesc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/" className="btn-pill btn-blue">
                  Back to Home
               </Link>
               <Link href="/contact" className="btn-pill bg-white border-2 border-gray-200 text-black hover:border-black">
                  Notify Me When Live
               </Link>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
}