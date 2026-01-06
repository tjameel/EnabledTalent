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
        
        /* Button Styles with Focus States for AODA */
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: space-between;
          padding: 12px 12px 12px 28px; border-radius: 9999px; font-weight: 700;
          font-size: 1rem; /* Smaller font on mobile */
          transition: all 0.3s ease; width: 100%; max-width: 340px;
          text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        @media (min-width: 768px) {
            .btn-pill { font-size: 1.125rem; }
        }

        .btn-pill:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
        .btn-pill:focus-visible { 
            outline: 3px solid #3b82f6; 
            outline-offset: 4px; 
        }
        .btn-pill:hover svg {
          transform: translateX(4px);
        }

        .btn-blue { background-color: #0f172a; color: white; }
        .btn-gold { background-color: #facc15; color: #0f172a; }
        .btn-orange { background-color: #d94e33; color: white; }
        
        .icon-circle {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 50%; margin-left: 12px;
          transition: transform 0.3s ease;
        }
        .btn-blue .icon-circle { background-color: rgba(255,255,255,0.2); }
        .btn-gold .icon-circle { background-color: rgba(15,23,42,0.1); }
        .btn-orange .icon-circle { background-color: rgba(255,255,255,0.2); }
      `}</style>

      <main className="flex-grow" id="main-content">
        {/* ================= HERO SECTION ================= */}
        <section 
            className="hero-gradient pt-28 pb-12 px-6 md:pt-32 md:pb-16 rounded-b-[40px] md:rounded-b-[50px] shadow-xl relative z-10"
            aria-label="Introduction"
        >
          <div className="container mx-auto max-w-4xl text-center">
            {/* Responsive Text Size: 4xl on mobile, 7xl on desktop */}
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Where Ability <br/> Meets <br/> Opportunity
            </h1>
            <p className="text-white text-lg md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto opacity-95 font-medium leading-relaxed">
              We connect people of all abilities with inclusive employers around the world — giving you the tools, training, and support to grow in your career.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
              <Link href="/talent" className="btn-pill btn-blue group" aria-label="Find Your Next Job">
                <span>Find Your Next Job</span>
                <div className="icon-circle" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>

              <Link href="/employers" className="btn-pill btn-gold group" aria-label="Post a Job for Employers">
                <span>Post a Job</span>
                <div className="icon-circle" aria-hidden="true">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>
            </div>

            <div className="dots-pattern w-full" aria-hidden="true"></div>
            
            <p className="text-white/90 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mt-8 md:mt-10">
              Trusted by organizations building the future of work
            </p>
          </div>
        </section>

        {/* ================= PARTNERS SECTION ================= */}
        <section className="py-12 md:py-16 bg-white" aria-label="Our Partners">
           <div className="container mx-auto max-w-6xl px-6">
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="relative h-8 w-20 md:h-10 md:w-28"><Image src="/aws.png" alt="Amazon Web Services Logo" fill className="object-contain" /></div>
               <div className="relative h-8 w-28 md:h-10 md:w-36"><Image src="/microsoft.png" alt="Microsoft Logo" fill className="object-contain" /></div>
               <div className="relative h-8 w-24 md:h-10 md:w-32"><Image src="/nvidia.png" alt="NVIDIA Logo" fill className="object-contain" /></div>
               <div className="relative h-10 w-24 md:h-12 md:w-32"><Image src="/unicef.png" alt="UNICEF Logo" fill className="object-contain" /></div>
               <div className="relative h-10 w-24 md:h-12 md:w-32"><Image src="/startup.png" alt="Startup Lab Logo" fill className="object-contain" /></div>
             </div>
           </div>
        </section>

        {/* ================= MISSION BANNER ================= */}
        <section className="py-8 md:py-12 px-4 md:px-6" aria-label="Our Mission">
            <div className="container mx-auto max-w-6xl">
               <div className="relative w-full aspect-[16/9] md:aspect-[14/9] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl group bg-gray-100">
                  <Image 
                    src="/mission-banner.png" 
                    alt="Group of diverse professionals working together in a modern office environment" 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
               </div>
            </div>
        </section>

        {/* ================= SEGMENTS SECTION (Zig-Zag) ================= */}
        <section className="py-12 md:py-20 px-6 space-y-16 md:space-y-24 bg-white">
           <div className="container mx-auto max-w-6xl space-y-16 md:space-y-24">
             
             {/* 1. FOR TALENT (Image Left / Text Right) */}
             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-[4/3] w-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-[#fffbeb]">
                      <Image 
                         src="/final-hero.png" 
                         alt="Smiling professional in a wheelchair working on a laptop" 
                         fill 
                         className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                      />
                   </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                   <span className="inline-block px-4 py-1 bg-orange-50 text-[#c2410c] rounded-full text-xs font-extrabold tracking-widest uppercase mb-4 md:mb-6">For Talents</span>
                   <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 leading-tight">
                      Looking for a job that matches your skills?
                   </h2>
                   <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
                      Don't let barriers hold you back. Make a free profile, highlight your abilities, and get matched with employers who value what you bring to the table.
                   </p>
                   <div className="flex justify-center md:justify-start">
                       <Link href="/talent" className="btn-pill btn-blue w-auto inline-flex" aria-label="Start Your Job Search">
                          <span>Start Your Job Search</span>
                          <div className="icon-circle" aria-hidden="true">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                       </Link>
                   </div>
                </div>
             </div>

             {/* 2. FOR EMPLOYERS (Text Left / Image Right) */}
             {/* Note: flex-col-reverse ensures image is on TOP on mobile, but right on desktop */}
             <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20">
                <div className="w-full md:w-1/2 text-center md:text-left">
                   <span className="inline-block px-4 py-1 bg-blue-50 text-[#1e3a8a] rounded-full text-xs font-extrabold tracking-widest uppercase mb-4 md:mb-6">For Employers</span>
                   <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 leading-tight">
                      Ready to hire skilled professionals?
                   </h2>
                   <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
                      Tap into a diverse, qualified talent pool. We make it easy to post jobs, find the right candidates, and build an inclusive workforce that drives results.
                   </p>
                   <div className="flex justify-center md:justify-start">
                       <Link href="/employers" className="btn-pill btn-gold w-auto inline-flex" aria-label="Post a Job">
                          <span>Post a Job</span>
                          <div className="icon-circle" aria-hidden="true">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                       </Link>
                   </div>
                </div>
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-[4/3] w-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-[#f0f9ff]">
                      <Image 
                         src="/man-in-suit.jpg" 
                         alt="Confident business professional standing in an office" 
                         fill 
                         className="object-cover object-center hover:scale-105 transition-transform duration-700" 
                      />
                   </div>
                </div>
             </div>

             {/* 3. ENABLED ACADEMY (Image Left / Text Right) */}
             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-[4/3] w-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow bg-gray-50">
                      <Image 
                         src="/academy.png" 
                         alt="Students learning in a classroom environment" 
                         fill 
                         className="object-cover object-center hover:scale-105 transition-transform duration-700" 
                      />
                   </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                   <span className="inline-block px-4 py-1 bg-yellow-50 text-[#854d0e] rounded-full text-xs font-extrabold tracking-widest uppercase mb-4 md:mb-6">Learning Hub</span>
                   <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 leading-tight">
                      Enabled <span className="text-[#d94e33]">Academy</span>
                   </h2>
                   <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
                      Upskill for the jobs of tomorrow. Access courses, mentorship, and resources designed to help you succeed in your chosen career path.
                   </p>
                   <div className="flex justify-center md:justify-start">
                       <Link href="/academy" className="btn-pill btn-orange w-auto inline-flex" aria-label="Register for Enabled Academy for Free">
                          <span>Register for Free</span>
                          <div className="icon-circle" aria-hidden="true">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                       </Link>
                   </div>
                </div>
             </div>

           </div>
        </section>

        {/* ================= SMART TECH SECTION ================= */}
        <section className="bg-[#0f172a] py-16 md:py-24 px-6 text-white text-center rounded-[30px] md:rounded-[50px] mx-4 md:mx-8 mb-8 shadow-2xl relative overflow-hidden" aria-label="Technology Impact">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
                <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-blue-500 blur-[120px]"></div>
                <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-orange-500 blur-[120px]"></div>
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
               <div className="inline-block px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest text-gray-300 mb-8 md:mb-10 uppercase">
                  Our Impact Methodology
               </div>
               <h2 className="text-3xl md:text-7xl font-extrabold mb-8 md:mb-10 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Smart Technology.</span><br/>
                  Human Understanding.<br/>
                  Real Outcomes.
               </h2>
               <p className="text-lg md:text-2xl text-gray-300 mb-12 md:mb-16 font-light max-w-3xl mx-auto">
                  Our platform links NGOs, educators, governments, and talents to build accessible pathways from learning to meaningful work.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                  <Link 
                    href="/employers" 
                    className="px-10 py-4 rounded-full border-2 border-white font-bold hover:bg-white hover:text-[#0f172a] transition text-lg focus:ring-4 focus:ring-white/50 focus:outline-none"
                  >
                    For Employers
                  </Link>
                  <Link 
                    href="/talent" 
                    className="px-10 py-4 rounded-full bg-[#d94e33] border-2 border-[#d94e33] font-bold hover:bg-[#b93c23] hover:border-[#b93c23] transition text-lg shadow-lg shadow-orange-900/20 focus:ring-4 focus:ring-orange-500/50 focus:outline-none"
                  >
                    For Talents
                  </Link>
               </div>
            </div>
        </section>

        {/* ================= INCLUSIVE EDGE SECTION ================= */}
        <section className="bg-white py-16 md:py-24 px-6" aria-label="Benefits of Inclusive Hiring">
           <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
               
               {/* Left Content */}
               <div className="order-2 md:order-1">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-8 md:mb-10 leading-tight">
                    Turn Inclusive Hiring <br/> into Your <span className="text-[#d94e33]">Edge</span>
                  </h2>
                  <div className="space-y-6 md:space-y-8">
                      <div className="border-l-4 border-[#d94e33] pl-6 py-2">
                         <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2">Better Matches, Faster</h3>
                         <p className="text-gray-700 text-base md:text-lg">AI identifies candidates whose skills align with your needs, reducing bias and time-to-hire.</p>
                      </div>
                      <div className="border-l-4 border-gray-200 pl-6 py-2 hover:border-[#facc15] transition-colors duration-300">
                         <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2">Expert Guidance Included</h3>
                         <p className="text-gray-700 text-base md:text-lg">Support on workplace optimization and accommodation to ensure retention.</p>
                      </div>
                      <div className="border-l-4 border-gray-200 pl-6 py-2 hover:border-[#facc15] transition-colors duration-300">
                         <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2">Network Advantage</h3>
                         <p className="text-gray-700 text-base md:text-lg">Access rigorously vetted professionals who bring diverse perspectives and resilience.</p>
                      </div>
                  </div>
                  <div className="mt-10 md:mt-12 text-center md:text-left">
                     <Link href="/employers" className="btn-pill btn-gold inline-flex" aria-label="Get Started with Inclusive Hiring">
                        <span>Get Started</span>
                        <div className="icon-circle" aria-hidden="true">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                     </Link>
                  </div>
               </div>
               
               {/* Right Image */}
               <div className="order-1 md:order-2 relative h-72 md:h-[600px] w-full rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl group bg-gray-100">
                  <Image 
                    src="/inclusive-hiring.png" 
                    alt="Two colleagues discussing work in an inclusive office setting" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
               </div>

           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}