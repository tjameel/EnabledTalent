"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EmployersPage() {
  const [pricingMode, setPricingMode] = useState<'single' | 'multi' | 'enterprise'>('single');

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .btn-employer {
          display: inline-flex; align-items: center; justify-content: space-between;
          padding: 14px 24px; border-radius: 9999px; font-weight: 800;
          font-size: 1rem; transition: all 0.2s ease;
        }
        .btn-employer:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        
        .feature-card {
           background: #fff; border: 1px solid #f3f4f6; border-radius: 20px; padding: 24px;
           transition: all 0.3s ease;
        }
        .feature-card:hover { border-color: #d94e33; transform: translateY(-3px); }

        .toggle-btn {
            padding: 8px 20px; border-radius: 9999px; font-weight: 700; font-size: 0.9rem;
            transition: all 0.3s ease; cursor: pointer;
        }
        .toggle-active { background-color: #000; color: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .toggle-inactive { color: #6b7280; background-color: transparent; }
        .toggle-inactive:hover { background-color: #f3f4f6; }
      `}</style>

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="pt-24 pb-20 px-6 bg-[#fffbf0]">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl font-extrabold text-black mb-8 leading-tight">
                Hire Better. <br/> <span className="text-gray-400">Hire Inclusively.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                EnabledJobs helps employers find qualified talent faster. Create a company profile, post roles, and instantly see top-matched candidates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/register" className="btn-employer bg-[#0f172a] text-white hover:bg-black">
                    <span>Create Employer Account</span>
                    <svg className="ml-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </Link>
                 <Link href="/contact" className="btn-employer bg-[#facc15] text-[#0f172a]">
                    <span>Book a Demo</span>
                    <svg className="ml-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </Link>
              </div>
            </div>
            {/* Dashboard Visual */}
            <div className="relative">
               <div className="absolute top-10 right-10 w-full h-full bg-[#fde68a] rounded-full blur-3xl opacity-20"></div>
               <div className="relative bg-white p-6 rounded-[32px] shadow-2xl border border-gray-100 max-w-md mx-auto transform rotate-[-2deg]">
                  <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                     <span className="font-bold text-gray-400 text-xs tracking-widest uppercase">Best Matches</span>
                     <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Active Job</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">JW</div>
                     <div className="flex-1"><h4 className="font-bold text-sm text-black">Jenny Wilson</h4><p className="text-xs text-gray-500">UX Designer • 5 Yrs</p></div>
                     <span className="text-green-600 font-bold">97%</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4 p-3 bg-white rounded-xl">
                     <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">SJ</div>
                     <div className="flex-1"><h4 className="font-bold text-sm text-black">Samantha John</h4><p className="text-xs text-gray-500">Python Dev • 7 Yrs</p></div>
                     <span className="text-green-600 font-bold">94%</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. STEPS SECTION */}
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">How Enabled Jobs Works</span>
                    <h2 className="text-4xl font-extrabold text-black mt-4">Simple, Fast & <span className="text-[#d97706]">Designed for Real Hiring</span></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-[#fff7ed] p-10 rounded-[30px] border border-orange-100">
                        <span className="bg-[#d97706] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase mb-6 inline-block">Step 1</span>
                        <h3 className="text-2xl font-bold text-black mb-3">Create Your Company Profile</h3>
                        <p className="text-gray-600">Add your company details, logo, team size, hiring goals, and accessibility preferences.</p>
                    </div>
                    <div className="bg-[#eff6ff] p-10 rounded-[30px] border border-blue-100">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase mb-6 inline-block">Step 2</span>
                        <h3 className="text-2xl font-bold text-black mb-3">Post Your Jobs</h3>
                        <p className="text-gray-600">Publish openings with clear requirements and accessibility notes.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. CANDIDATE INSIGHTS GRID (The "Stuff Above") */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
           <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-extrabold text-black">See Your Best Candidates <span className="text-[#d94e33]">Instantly</span></h2>
                 <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">Our matching system compares your job requirements with each applicant's skills — then ranks them automatically.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="feature-card">
                    <h4 className="text-[#d94e33] font-bold text-xl mb-2">Match Score</h4>
                    <div className="text-4xl font-extrabold text-black mb-2">0% to 100%</div>
                    <p className="text-gray-500 text-sm">Instantly see how well a candidate fits your role based on skills and experience.</p>
                 </div>
                 <div className="feature-card">
                    <h4 className="text-[#d94e33] font-bold text-xl mb-2">Top 3 Candidate Highlights</h4>
                    <div className="flex gap-2 mb-2">
                       <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-black"> leadership</span>
                       <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-black"> python</span>
                       <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-black"> remote-ready</span>
                    </div>
                    <p className="text-gray-500 text-sm">Quick summary of the candidate's strongest attributes.</p>
                 </div>
                 <div className="feature-card">
                    <h4 className="text-[#d94e33] font-bold text-xl mb-2">Accessibility Notes</h4>
                    <p className="text-gray-500 text-sm">Clear info on accommodations needed (e.g., Screen Reader, Wheelchair Access) so you can prepare.</p>
                 </div>
                 <div className="feature-card">
                    <h4 className="text-[#d94e33] font-bold text-xl mb-2">Skill Alignment Tags</h4>
                    <p className="text-gray-500 text-sm">Visual tags showing exactly which required skills the candidate matches.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. SMART TECHNOLOGY SECTION (Dark/Black) */}
        <section className="bg-[#0f172a] py-24 px-6 text-white text-center">
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
            </div>
        </section>

        {/* 5. SMART MESSAGING SECTION (Dark Blue #1e3a8a) */}
        <section className="bg-[#1e3a8a] py-24 px-6 text-white text-center relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
               <span className="inline-block px-4 py-1 border border-blue-400/30 rounded-full text-xs font-bold tracking-widest text-blue-200 mb-8 uppercase bg-blue-900/50">
                  Auto-Generated Employer Email Templates
               </span>
               <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
                  Save Time With <br/><span className="text-[#facc15]">Smart Messaging</span>
               </h2>
               <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                  EnabledJobs creates ready-to-send emails for every stage of your hiring process. Shortlist, Interview, or Reject with one click.
               </p>
               
               {/* Email Visual Card */}
               <div className="bg-white text-left p-8 rounded-3xl max-w-md mx-auto shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                     <div className="w-10 h-10 bg-[#d97706] rounded-full flex items-center justify-center text-white font-bold">ET</div>
                     <div>
                        <div className="text-black font-bold text-sm">EnabledTalent System</div>
                        <div className="text-gray-400 text-xs">To: Jeby (Candidate)</div>
                     </div>
                  </div>
                  <h4 className="font-bold text-black text-lg mb-2">Hi Jeby,</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                     Thanks for applying to the <span className="font-bold text-[#d97706]">Senior Manager</span> role. Based on your experience and skills, we'd love to move you to the next stage!
                  </p>
                  <div className="bg-gray-100 text-center py-3 rounded-lg text-black font-bold text-sm cursor-pointer hover:bg-gray-200">
                     Schedule Interview →
                  </div>
               </div>
            </div>
        </section>

        {/* 6. PARTNERS */}
        <section className="py-20 bg-white border-b border-gray-100">
           <div className="container mx-auto text-center">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Forward thinking companies use Enabled Jobs</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale items-center">
                 <span className="font-bold text-xl">THE GLOBE AND MAIL</span>
                 <span className="font-bold text-xl font-serif">FOUNDERS</span>
                 <span className="font-bold text-xl text-red-800">SUN</span>
                 <span className="font-bold text-xl italic">betakit</span>
                 <span className="font-bold text-xl">Yahoo! Finance</span>
              </div>
           </div>
        </section>

        {/* 7. PRICING SECTION */}
        <section className="py-20 px-6 bg-[#fffbf0]">
           <div className="container mx-auto max-w-5xl text-center">
              <span className="bg-white border border-gray-200 text-gray-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Pricing Teaser</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-6 mb-8">Flexible Plans for Every Team</h2>
              
              {/* TOGGLE BUTTONS */}
              <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm mb-12">
                 <button onClick={() => setPricingMode('single')} className={`toggle-btn ${pricingMode === 'single' ? 'toggle-active' : 'toggle-inactive'}`}>Single Job Post</button>
                 <button onClick={() => setPricingMode('multi')} className={`toggle-btn ${pricingMode === 'multi' ? 'toggle-active' : 'toggle-inactive'}`}>Multi Job Package</button>
                 <button onClick={() => setPricingMode('enterprise')} className={`toggle-btn ${pricingMode === 'enterprise' ? 'toggle-active' : 'toggle-inactive'}`}>Enterprise</button>
              </div>
              
              {/* DYNAMIC CARD CONTENT */}
              <div className="bg-white rounded-[40px] p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto min-h-[400px] flex flex-col justify-center transition-all duration-300">
                 {pricingMode === 'single' && (
                    <div className="animate-fadeIn">
                       <h3 className="text-3xl font-extrabold text-black mb-2">Single Job Post</h3>
                       <p className="text-gray-500 mb-8">Perfect for quick hiring needs.</p>
                       <div className="text-5xl font-extrabold text-black mb-2">CAD 300</div>
                       <div className="text-sm text-gray-400 font-bold uppercase mb-8">per job post</div>
                       <Link href="/register" className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 transition mb-6 block">Get Started</Link>
                    </div>
                 )}
                 {pricingMode === 'multi' && (
                    <div className="animate-fadeIn">
                       <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Most Popular</span>
                       <h3 className="text-3xl font-extrabold text-black mb-2">Multi Job Package</h3>
                       <p className="text-gray-500 mb-8">Great for growing teams.</p>
                       <div className="text-5xl font-extrabold text-black mb-2">CAD 1,500</div>
                       <div className="text-sm text-gray-400 font-bold uppercase mb-8">10 job credits</div>
                       <Link href="/register" className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 transition mb-6 block">Buy Package</Link>
                    </div>
                 )}
                 {pricingMode === 'enterprise' && (
                    <div className="animate-fadeIn">
                       <h3 className="text-3xl font-extrabold text-black mb-2">Enterprise</h3>
                       <p className="text-gray-500 mb-8">High volume & custom integrations.</p>
                       <div className="text-5xl font-extrabold text-black mb-2">Custom</div>
                       <div className="text-sm text-gray-400 font-bold uppercase mb-8">Unlimited posts</div>
                       <Link href="/contact" className="w-full bg-[#d94e33] text-white font-bold py-4 rounded-full hover:bg-red-700 transition mb-6 block">Contact Sales</Link>
                    </div>
                 )}
              </div>
           </div>
        </section>

        {/* 8. CTA BLUE SECTION */}
        <section className="bg-[#0f172a] py-20 px-6 text-center">
           <div className="container mx-auto max-w-4xl">
              <div className="w-16 h-16 bg-[#d97706] rounded-full flex items-center justify-center mx-auto mb-8">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Start Building Your <br/> Talent Pipeline Today</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                  <Link href="/register" className="btn-employer bg-[#facc15] text-[#0f172a]">Create Employer Profile</Link>
                  <Link href="/contact" className="btn-employer bg-transparent border border-gray-600 text-white hover:bg-white hover:text-black">Talk to our Team</Link>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}