"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .hero-gradient { background: linear-gradient(180deg, #d94e33 0%, #e68d24 100%); }
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 24px; border-radius: 9999px; font-weight: 700;
          transition: transform 0.2s ease; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); }
        .card-hover:hover { transform: translateY(-5px); transition: all 0.3s ease; }
      `}</style>

      <main className="flex-grow">
        {/* HERO */}
        <section className="hero-gradient pt-24 pb-12 px-6 rounded-b-[40px] text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Programs & Awards</h1>
          <p className="text-white text-xl max-w-2xl mx-auto opacity-90">
            Recognizing excellence in inclusive leadership and innovation.
          </p>
        </section>

        {/* AWARDS SECTION (From Video) */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-black mb-10 border-l-4 border-[#d94e33] pl-4">Awards & Recognition</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Award Card 1 */}
              <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100 card-hover">
                <div className="h-48 bg-gray-200 relative">
                   {/* Placeholder for Award Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">
                      [Award Image]
                   </div>
                </div>
                <div className="p-8">
                   <span className="text-xs font-bold text-[#d94e33] uppercase tracking-wide">Recognition</span>
                   <h3 className="text-2xl font-bold text-black mt-2 mb-4">Media Business Humanitarian Award</h3>
                   <p className="text-gray-600 mb-6">Recognized for outstanding contribution to inclusive employment and community support.</p>
                   <Link href="#" className="text-black font-bold underline decoration-2 hover:text-[#d94e33]">Read Article</Link>
                </div>
              </div>

              {/* Award Card 2 */}
              <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100 card-hover">
                <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">
                      [Profile Image]
                   </div>
                </div>
                <div className="p-8">
                   <span className="text-xs font-bold text-[#d94e33] uppercase tracking-wide">Leadership</span>
                   <h3 className="text-2xl font-bold text-black mt-2 mb-4">Amandipp Singh Honoured for Humanity</h3>
                   <p className="text-gray-600 mb-6">Celebrating the vision and dedication of our founder in building accessible pathways.</p>
                   <Link href="#" className="text-black font-bold underline decoration-2 hover:text-[#d94e33]">Read Article</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROGRAMS SECTION */}
        <section className="py-16 px-6 bg-[#fffbf0]">
           <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold text-black mb-10 border-l-4 border-black pl-4">Our Programs</h2>
              <div className="space-y-6">
                 <div className="bg-white p-8 rounded-[24px] flex flex-col md:flex-row gap-6 items-center shadow-sm">
                    <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">1</div>
                    <div>
                       <h3 className="text-xl font-bold text-black">The Inception Program</h3>
                       <p className="text-gray-600">A startup accelerator focused on disability-led ventures. We provide funding, mentorship, and resources.</p>
                    </div>
                 </div>
                 <div className="bg-white p-8 rounded-[24px] flex flex-col md:flex-row gap-6 items-center shadow-sm">
                    <div className="bg-[#facc15] text-black w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">2</div>
                    <div>
                       <h3 className="text-xl font-bold text-black">Global Mentorship Initiative</h3>
                       <p className="text-gray-600">Connecting senior leaders from Fortune 500 companies with emerging diverse talent.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}