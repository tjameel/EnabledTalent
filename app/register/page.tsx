"use client";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 28px; border-radius: 9999px; font-weight: 700;
          font-size: 1.1rem; transition: transform 0.2s ease; width: 100%; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); }
        .btn-blue { background-color: #0f172a; color: white; }
        .btn-gold { background-color: #facc15; color: #0f172a; }
      `}</style>

      <main className="flex-grow flex flex-col items-center justify-center py-24 px-6 bg-gray-50">
        <div className="max-w-4xl w-full text-center">
          <span className="text-[#d94e33] font-bold tracking-widest uppercase text-sm mb-4 block">Get Started</span>
          <h1 className="text-5xl font-extrabold text-black mb-6">Join Enabled Talent</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            How would you like to use our platform today?
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* TALENT CARD */}
            <div className="p-10 rounded-[40px] border-2 border-orange-100 bg-white hover:border-[#d94e33] hover:shadow-xl transition-all text-center group">
               <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d94e33]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               </div>
               <h2 className="text-3xl font-bold text-black mb-4">I am a Talent</h2>
               <p className="text-gray-600 mb-8 text-lg">
                 Find inclusive jobs, get career coaching, and upskill.
               </p>
               <Link href="/talent" className="btn-pill btn-blue">
                 Join as Talent
               </Link>
            </div>

            {/* EMPLOYER CARD */}
            <div className="p-10 rounded-[40px] border-2 border-blue-100 bg-white hover:border-[#facc15] hover:shadow-xl transition-all text-center group">
               <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0f172a]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
               </div>
               <h2 className="text-3xl font-bold text-black mb-4">I am an Employer</h2>
               <p className="text-gray-600 mb-8 text-lg">
                 Post jobs, access verified talent, and build diverse teams.
               </p>
               <Link href="/employers" className="btn-pill btn-gold">
                 Hire Talent
               </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}