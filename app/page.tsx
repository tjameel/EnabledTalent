"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .hero-gradient { background: linear-gradient(180deg, #d94e33 0%, #e68d24 100%); }
        .dots-pattern {
          background-image: radial-gradient(rgba(255,255,255,0.4) 2px, transparent 2px);
          background-size: 14px 14px; height: 40px; width: 100%; opacity: 0.6; margin-top: 2rem;
        }
        
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: space-between;
          padding: 12px 12px 12px 28px; border-radius: 9999px; font-weight: 700;
          font-size: 1.125rem; transition: transform 0.2s ease; width: 100%; max-width: 340px;
          text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); }
        .btn-pill:hover svg {
          transform: translateX(6px);
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .btn-blue { background-color: #0f172a; color: white; }
        .btn-gold { background-color: #facc15; color: #0f172a; }
        
        .icon-circle {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 50%; margin-left: 12px;
          transition: transform 0.3s ease;
        }
        .btn-blue .icon-circle { background-color: rgba(255,255,255,0.2); }
        .btn-gold .icon-circle { background-color: rgba(15,23,42,0.1); }
      `}</style>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="hero-gradient pt-20 pb-10 px-6 rounded-b-[40px]">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Where Ability <br/> Meets <br/> Opportunity
            </h1>
            <p className="text-white text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
              We connect people of all abilities with inclusive employers around the world — giving you the tools, training, and support to grow in your career.
            </p>

            <div className="flex flex-col items-center gap-4 mb-12">
              <Link href="/talent" className="btn-pill btn-blue group">
                <span>Find Your Next Job</span>
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>

              <Link href="/employers" className="btn-pill btn-gold group">
                <span>Post a Job</span>
                <div className="icon-circle">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>
            </div>

            <div className="dots-pattern w-full"></div>
            
            <p className="text-white/80 text-sm font-bold tracking-widest uppercase mt-8">
              Trusted by organizations building the future of work
            </p>
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section className="py-12 text-center bg-white">
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all">
             <div className="relative h-12 w-24 md:w-32">
                <Image src="/aws.png" alt="AWS" fill className="object-contain" />
             </div>
             <div className="relative h-12 w-32 md:w-40">
                <Image src="/microsoft.png" alt="Microsoft" fill className="object-contain" />
             </div>
             <div className="relative h-12 w-32 md:w-40">
                <Image src="/nvidia.png" alt="NVIDIA" fill className="object-contain" />
             </div>
             <div className="relative h-12 w-32 md:w-40">
                <Image src="/unicef.png" alt="UNICEF" fill className="object-contain" />
             </div>
             <div className="relative h-12 w-32 md:w-40">
                <Image src="/startup.png" alt="Startup Lab" fill className="object-contain" />
             </div>
           </div>
        </section>

        {/* MISSION BANNER (New Image) */}
        <section className="py-16 px-6">
            <div className="container mx-auto max-w-5xl rounded-[40px] overflow-hidden shadow-2xl relative">
               {/* This image replaces the text mission section */}
               <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                  <Image 
                    src="/mission-banner.png" 
                    alt="Build careers that last" 
                    fill 
                    className="object-cover"
                  />
               </div>
            </div>
        </section>

        {/* CARDS SECTION */}
        <section className="py-12 px-6 space-y-8 bg-gray-50">
           
           {/* 1. Talent Card */}
           <div className="bg-[#fffbeb] rounded-[30px] overflow-hidden max-w-4xl mx-auto border border-orange-100 shadow-sm">
              <div className="relative h-72 w-full">
                 <Image 
                    src="/talent.png" 
                    alt="For Talents" 
                    fill 
                    className="object-cover object-top" 
                 />
              </div>
              <div className="p-8">
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">For Talents</span>
                  <h3 className="text-3xl font-bold text-black mb-4">Looking for a job that matches your skills?</h3>
                  <p className="text-gray-600 mb-8">Make a free profile and tell us about your experience.</p>
                  <Link href="/talent" className="btn-pill btn-blue w-full md:w-auto mb-8">
                     <span>Start your Job Search</span>
                     <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                     </div>
                  </Link>
              </div>
           </div>
           
           {/* 2. Employer Card */}
           <div className="bg-[#f0f9ff] rounded-[30px] overflow-hidden max-w-4xl mx-auto border border-blue-100 shadow-sm">
              <div className="relative h-72 w-full">
                 <Image 
                    src="/man-in-suit.jpg" 
                    alt="For Employers" 
                    fill 
                    className="object-cover object-top" 
                 />
              </div>
              <div className="p-8">
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">For Employers</span>
                  <h3 className="text-3xl font-bold text-black mb-4">Ready to hire skilled professionals?</h3>
                  <p className="text-gray-600 mb-8">Post your job and reach qualified candidates.</p>
                  <Link href="/employers" className="btn-pill btn-blue w-full md:w-auto">
                     <span>Post a Job</span>
                     <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                     </div>
                  </Link>
              </div>
           </div>
           
           {/* 3. Academy Card */}
           <div className="bg-white rounded-[30px] overflow-hidden max-w-4xl mx-auto border border-gray-100 shadow-sm text-center">
              <div className="relative h-64 w-full">
                 <Image 
                    src="/academy.png" 
                    alt="Enabled Academy" 
                    fill 
                    className="object-cover" 
                 />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-black mb-4 text-[#d94e33]">Enabled Academy</h3>
                <p className="text-gray-600 mb-8">Learn new skills with support that fits your needs.</p>
                <Link href="/academy" className="btn-pill btn-blue w-full md:w-auto mx-auto">
                    <span>Register for free</span>
                    <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </Link>
              </div>
           </div>
        </section>

        {/* SMART TECH */}
        <section className="bg-[#0f172a] py-20 px-6 text-white text-center">
            <div className="container mx-auto max-w-4xl">
               <div className="inline-block px-4 py-1 border border-gray-700 rounded-full text-xs font-bold tracking-widest text-gray-400 mb-8 uppercase">
                  How our partners are getting the benefits
               </div>
               <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
                  <span className="text-[#d94e33]">Smart Technology.</span><br/>
                  Human Understanding.<br/>
                  Real Outcomes.
               </h2>
               <p className="text-xl text-gray-400 mb-12">
                  Our platform links NGOs, educators, governments, and talents to build accessible pathways from learning to meaningful work.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/employers" className="px-8 py-3 rounded-full border border-white font-bold hover:bg-white hover:text-black transition">For Employers</Link>
                  <Link href="/talent" className="px-8 py-3 rounded-full bg-[#d94e33] border border-[#d94e33] font-bold hover:bg-orange-600 transition">For Talents</Link>
               </div>
            </div>
        </section>

        {/* INCLUSIVE EDGE */}
        <section className="bg-[#1e293b] py-20 px-6 text-white border-t border-gray-800">
           <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-4xl font-bold mb-6">Turn Inclusive Hiring into Your Edge</h2>
                  <ul className="space-y-6">
                     <li className="border-l-4 border-[#d94e33] pl-6">
                        <h4 className="text-xl font-bold">Better Matches, Faster</h4>
                        <p className="text-gray-400">AI identifies candidates whose skills align with your needs.</p>
                     </li>
                     <li className="border-l-4 border-gray-600 pl-6">
                        <h4 className="text-xl font-bold">Expert Guidance Included</h4>
                        <p className="text-gray-400">Support on workplace optimization and accommodation.</p>
                     </li>
                     <li className="border-l-4 border-gray-600 pl-6">
                        <h4 className="text-xl font-bold">Network Advantage</h4>
                        <p className="text-gray-400">Access rigorously vetted professionals who bring diverse perspectives.</p>
                     </li>
                  </ul>
                  <div className="mt-10">
                     <Link href="/employers" className="btn-pill btn-gold">
                        <span>Get Started</span>
                        <div className="icon-circle">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                     </Link>
                  </div>
               </div>
               
               {/* Inclusive Hiring Image */}
               <div className="rounded-[30px] overflow-hidden h-[500px] relative shadow-2xl bg-gray-700">
                  <Image 
                    src="/inclusive-hiring.png" 
                    alt="Inclusive Hiring" 
                    fill 
                    className="object-cover" 
                  />
               </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}