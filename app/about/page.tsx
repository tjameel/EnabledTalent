"use client";

import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* 1. FIGMA PILL BUTTON HOVER LOGIC */}
      <style>{`
        .btn-pill-cta {
          background-color: #f3f4f6 !important;
          transition: all 0.3s ease !important;
          color: black !important;
          display: inline-block;
          text-decoration: none !important;
        }
        .btn-pill-cta:hover {
          background-color: #e5e7eb !important;
          transform: translateY(-2px);
          cursor: pointer;
        }
      `}</style>

      <main id="main-content" className="flex-grow container mx-auto p-8 max-w-6xl" role="main">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-4">About Enabled Talent</h1>
          <p className="text-xl text-black">Our mission is to foster inclusive professional growth.</p>
        </header>

        {/* MISSION CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Card 1: Our Vision (BLUE FIGMA STYLE) */}
          <div className="bg-[#f0f7ff] p-10 rounded-[40px] shadow-sm border border-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
                <span className="text-3xl" aria-hidden="true">🌟</span>
              </div>
              <h2 className="text-2xl font-extrabold text-black mb-4">Our Vision</h2>
              <p className="text-black">
                We envision a world where disability is never a barrier to professional success. By bridging the gap between talent and opportunity, we create a more equitable workforce for everyone.
              </p>
            </div>
          </div>

          {/* Card 2: Our Approach (TAN FIGMA STYLE) */}
          <div className="bg-[#fff9f0] p-10 rounded-[40px] shadow-sm border border-orange-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
                <span className="text-3xl" aria-hidden="true">🛠️</span>
              </div>
              <h2 className="text-2xl font-extrabold text-black mb-4">Our Approach</h2>
              <p className="text-black">
                We focus on mentorship-led development. By connecting experienced leaders with skilled disabled professionals, we facilitate knowledge transfer that benefits both the individual and the organization.
              </p>
            </div>
          </div>
        </div>

        {/* 2. NEW DUAL CTA SECTION */}
        <section className="text-center py-12 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-black mb-8">Ready to Join Our Community?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            
            {/* Mentee Button */}
            <Link 
              href="/talent" 
              className="btn-pill-cta px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm"
            >
              Apply to be a Mentee
            </Link>

            {/* Mentor Button */}
            <Link 
              href="/employers" 
              className="btn-pill-cta px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm"
            >
              Become a Partner
            </Link>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}