"use client";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Talent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <style>{`
        .btn-pill-apply {
          background-color: #f3f4f6 !important;
          transition: all 0.3s ease !important;
          color: black !important;
        }
        .btn-pill-apply:hover {
          background-color: #e5e7eb !important;
          transform: translateY(-2px);
        }
      `}</style>

      <main className="flex-grow container mx-auto p-8 max-w-6xl" role="main">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-4">Find Your Mentor</h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: BLUE FIGMA STYLE */}
          <div className="bg-[#f0f7ff] p-10 rounded-[40px] shadow-sm border border-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6"><span className="text-3xl">🧠</span></div>
              <h2 className="text-2xl font-extrabold text-black mb-4">Personalized Coaching</h2>
              <ul className="space-y-3 text-black font-medium">
                <li><span className="text-[#f59e0b]">→</span> Resume & Portfolio reviews</li>
                <li><span className="text-[#f59e0b]">→</span> Mock interview preparation</li>
              </ul>
            </div>
          </div>

          {/* Card 2: TAN FIGMA STYLE */}
          <div className="bg-[#fff9f0] p-10 rounded-[40px] shadow-sm border border-orange-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6"><span className="text-3xl">🔗</span></div>
              <h2 className="text-2xl font-extrabold text-black mb-4">Industry Connections</h2>
              <ul className="space-y-3 text-black font-medium">
                <li><span className="text-[#f59e0b]">→</span> Pre-vetted job opportunities</li>
                <li><span className="text-[#f59e0b]">→</span> Networking with leaders</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <Link href="/contact" className="btn-pill-apply px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm">
            Apply to be a Mentee
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}