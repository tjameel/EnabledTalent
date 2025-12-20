"use client";

import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Employers Page - Figma Design Implementation
 * Uses alternating light blue (#f0f7ff) and light tan (#fff9f0) cards.
 */
export default function Employers() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* FIGMA PILL BUTTON HOVER LOGIC */}
      <style>{`
        .btn-pill-action {
          background-color: #f3f4f6 !important; /* Figma Gray */
          transition: all 0.3s ease !important;
          color: black !important;
          display: inline-block;
          text-decoration: none !important;
        }
        .btn-pill-action:hover {
          background-color: #e5e7eb !important;
          transform: translateY(-2px);
          cursor: pointer;
        }
      `}</style>

      <main id="main-content" className="flex-grow container mx-auto p-8 max-w-6xl" role="main">
        
        {/* Main Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-4">
            Partner with Us: Invest in Inclusive Talent
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Build a more inclusive workforce by connecting with skilled disabled professionals.
          </p>
        </header>

        {/* HERO SECTION - FIGMA BLUE STYLE */}
        <section className="bg-[#f0f7ff] p-10 rounded-[40px] shadow-sm border border-blue-50 relative overflow-hidden mb-12">
          {/* Subtle Blue Dot Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-black mb-4">
              The Strategic Advantage of Inclusive Mentorship
            </h2>
            <p className="text-lg text-black mb-0">
              Engage your leaders as mentors and gain a direct pipeline to highly-skilled disabled professionals. 
              Our program enhances your corporate social responsibility and boosts employee engagement.
            </p>
          </div>
        </section>

        {/* KEY BENEFITS GRID - ALTERNATING FIGMA COLORS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-black text-center">
            Employer Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Benefit 1: TAN STYLE */}
            <div className="bg-[#fff9f0] p-8 rounded-[40px] shadow-sm border border-orange-50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Talent Pipeline</h3>
                <p className="text-black">
                  Pre-screened, motivated candidates with in-demand skills, ready to transition into your workforce.
                </p>
              </div>
            </div>

            {/* Benefit 2: BLUE STYLE */}
            <div className="bg-[#f0f7ff] p-8 rounded-[40px] shadow-sm border border-blue-50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Leadership Growth</h3>
                <p className="text-black">
                  Your employees gain valuable coaching and leadership skills as mentors for disabled talent.
                </p>
              </div>
            </div>

            {/* Benefit 3: TAN STYLE */}
            <div className="bg-[#fff9f0] p-8 rounded-[40px] shadow-sm border border-orange-50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">DEI Impact</h3>
                <p className="text-black">
                  Demonstrate a commitment to DEI that resonates with customers and investors globally.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* UPDATED PILL BUTTON: "Start Mentoring" */}
        <div className="flex justify-center mt-12 mb-10">
          <Link 
            href="/contact" 
            className="btn-pill-action px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm"
            aria-label="Contact us to start mentoring"
          >
            Start Mentoring
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}