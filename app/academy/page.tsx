"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .bg-cream { background-color: #fffbf0; }
        .bg-dark-blue { background-color: #0f172a; }
        .text-gradient-orange {
            background: linear-gradient(90deg, #d94e33 0%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }
        .sticky-wrapper { position: sticky; top: 100px; height: fit-content; align-self: start; }
        
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 14px 32px; border-radius: 9999px; font-weight: 700;
          transition: all 0.2s ease; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .btn-blue { background-color: #0f172a; color: white; }
        .btn-yellow { background-color: #facc15; color: #0f172a; }
        .btn-outline { background-color: transparent; border: 2px solid #0f172a; color: #0f172a; }
        
        /* ORBIT ANIMATION */
        .orbit-container { position: relative; width: 550px; height: 550px; }
        .orbit-ring { 
            position: absolute; inset: 0; border: 1px dashed #e5e7eb; border-radius: 50%;
            animation: spin 60s linear infinite;
        }
        /* Positions for Orbit Items */
        .orbit-person-1 { position: absolute; top: 10%; left: 20%; width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .orbit-person-2 { position: absolute; bottom: 20%; left: 10%; width: 50px; height: 50px; border-radius: 50%; overflow: hidden; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .orbit-person-3 { position: absolute; top: 40%; right: 0%; width: 70px; height: 70px; border-radius: 50%; overflow: hidden; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        
        .orbit-label {
            position: absolute; background: white; padding: 10px 20px; border-radius: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-size: 0.75rem; font-weight: 700;
            color: #374151; white-space: nowrap;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }

        .check-item { display: flex; align-items: start; gap: 16px; margin-bottom: 20px; }
        .check-circle { min-width: 24px; height: 24px; background: #d94e33; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-top: 4px; flex-shrink: 0; }
        .check-circle.black { background: #0f172a; }
        .pill-tag { background: white; border: 1px solid #e5e7eb; padding: 10px 20px; border-radius: 50px; font-size: 0.9rem; font-weight: 600; color: #374151; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      `}</style>

      <main className="flex-grow">
        
        {/* 1. HERO */}
        <section className="pt-24 pb-20 px-6 bg-cream overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[55%] h-full bg-[#fef3c7] rounded-bl-[150px] z-0"></div>
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 lg:order-1 pt-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-[#d94e33]"></div>
                    <span className="text-gradient-orange font-bold tracking-widest uppercase text-sm">Enabled Academy</span>
                 </div>
                 <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8 leading-[1.1]">
                    Learn. Train. Grow. <br/>
                    Get Ready for <br/> <span className="text-gradient-orange">Opportunity.</span>
                 </h1>
                 <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                    <span className="text-gradient-orange font-bold">Enabled Academy</span> is a training and job-readiness program that helps people build real skills.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link href="#talent" className="btn-pill btn-blue">For Talents</Link>
                    <Link href="#employers" className="btn-pill btn-outline">For Employers</Link>
                 </div>
              </div>
              <div className="relative order-1 lg:order-2 h-[600px] w-full flex items-center justify-center">
                 <div className="absolute top-6 left-8 w-full h-full border-2 border-black rounded-[50px] z-0 translate-x-4 translate-y-4"></div>
                 <div className="relative z-10 w-full h-full rounded-[50px] overflow-hidden shadow-2xl bg-white">
                     <Image src="/final-hero.png" alt="Hero" fill className="object-cover object-top" priority />
                 </div>
              </div>
           </div>
        </section>

        {/* 2. WHO WE ARE (With Orbit Portraits) */}
        <section className="py-32 px-6 bg-white overflow-hidden">
           <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide mb-8 inline-block">Who We Are</span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">What Is <span className="text-gradient-orange">Enabled Academy?</span></h2>
                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">Enabled Academy is a skill-building and readiness hub that improves access to meaningful jobs.</p>
                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">We train individuals across different career paths, help them gain confidence, and connect them with employers who need job-ready talent.</p>
              </div>
              
              {/* ORBIT VISUAL */}
              <div className="flex items-center justify-center relative h-[600px]">
                 <div className="orbit-container flex items-center justify-center">
                    <div className="orbit-ring"></div>
                    <div className="relative z-10 bg-white p-12 rounded-full shadow-2xl border border-gray-50 text-center w-56 h-56 flex flex-col items-center justify-center">
                       <span className="text-xs font-black text-gray-400 uppercase tracking-widest leading-loose">
                          Purpose.<br/>Profit.<br/>Progress.
                       </span>
                    </div>
                    <div className="orbit-person-1"><Image src="/orbit-person-1.png" alt="Person 1" fill className="object-cover" /></div>
                    <div className="orbit-person-2"><Image src="/orbit-person-2.png" alt="Person 2" fill className="object-cover" /></div>
                    <div className="orbit-person-3"><Image src="/orbit-person-3.png" alt="Person 3" fill className="object-cover" /></div>
                    <div className="orbit-label top-0 right-10">Inclusive work for all.</div>
                    <div className="orbit-label bottom-70 left-0">Equity in action.</div>
                    <div className="orbit-label bottom-32 right-0">Value through diverse talent.</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. FOR TALENT */}
        <section id="talent" className="py-24 px-6 bg-gray-50">
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-start">
              <div className="order-2 lg:order-1 sticky-wrapper hidden lg:block w-full">
                  <div className="relative h-[700px] w-full rounded-[50px] overflow-hidden shadow-2xl bg-gray-200">
                      <Image src="/final-talent.png" alt="Student" fill className="object-cover object-top" />
                  </div>
              </div>
              <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl bg-gray-200 lg:hidden">
                  <Image src="/final-talent.png" alt="Student" fill className="object-cover object-top" />
              </div>
              <div className="order-1 lg:order-2 lg:pt-10">
                 <span className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">For Talent</span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">What Is <span className="text-gradient-orange">Enabled Academy?</span><br/>Become Job-Ready.</h2>
                 <h3 className="font-bold text-2xl text-black mb-8">What You'll Receive</h3>
                 <div className="space-y-4">
                    {["Role-based training", "One-on-one coaching", "Resume guidance", "Workplace readiness"].map((item, i) => (
                       <div key={i} className="check-item"><div className="check-circle">✓</div><span className="text-gray-700 font-medium text-lg leading-snug">{item}</span></div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. WHO THIS IS FOR */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-6xl">
              <div className="bg-dark-blue rounded-[50px] p-12 md:p-28 text-center text-white relative overflow-hidden shadow-2xl">
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">Who We Support</span>
                 <h2 className="text-4xl md:text-6xl font-extrabold mb-10">Who This Is For</h2>
                 <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">Anyone looking to improve skills, start a career, or grow into new opportunities.</p>
                 <Link href="/register" className="btn-pill btn-yellow text-lg">Join Enabled Academy</Link>
                 <div className="absolute top-16 left-16 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/20 hidden lg:block rotate-[-6deg] shadow-lg">
                    <Image src="/final-float-1.png" alt="Student" fill className="object-cover object-top" />
                 </div>
                 <div className="absolute bottom-16 right-16 w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/20 hidden lg:block rotate-[6deg] shadow-lg">
                    <Image src="/img-portrait-man.jpg" alt="Student" fill className="object-cover object-top" />
                 </div>
              </div>
           </div>
        </section>

        {/* 5. FOR EMPLOYERS */}
        <section id="employers" className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-start">
              <div className="lg:pt-10">
                 <span className="text-[#d94e33] font-bold uppercase tracking-widest text-sm mb-4 block">For Employers</span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">Your Workforce Training & <br/> <span className="text-gradient-orange">Talent Partner</span></h2>
                 <div className="mb-12">
                     <h3 className="font-bold text-xl text-black mb-6">How We Support Employers</h3>
                     <div className="space-y-4">
                        {["Specific role training", "Candidate sourcing", "Coaching support"].map((item, i) => (
                           <div key={i} className="check-item"><div className="check-circle black">✓</div><span className="text-gray-700 font-medium text-lg leading-snug">{item}</span></div>
                        ))}
                     </div>
                 </div>
                 <Link href="/contact" className="btn-pill btn-blue text-lg">Book a Call Now</Link>
              </div>
              <div className="sticky-wrapper hidden lg:block w-full">
                  <div className="relative h-[700px] w-full rounded-[50px] overflow-hidden shadow-2xl bg-gray-100">
                      <Image src="/final-employer.jpg" alt="Employer" fill className="object-cover object-top" />
                  </div>
              </div>
              <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl bg-gray-100 lg:hidden">
                  <Image src="/final-employer.jpg" alt="Employer" fill className="object-cover object-top" />
              </div>
           </div>
        </section>

        {/* 6. WE SUPPORT ALL ROLES */}
        <section className="py-20 px-6 bg-cream text-center">
           <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12">We Support <span className="text-gradient-orange">All Types of Roles</span></h2>
              <div className="flex flex-wrap justify-center gap-4">
                 {["Customer Service", "HR & Recruitment", "Admin Support", "Operations", "Data & Digital", "Sales", "IT Support"].map((role) => (
                    <span key={role} className="pill-tag"><span className="w-5 h-5 bg-[#d94e33] rounded-full text-white flex items-center justify-center text-[10px]">✓</span> {role}</span>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. HOW IT WORKS (ZIGZAG WITH INCREASED SPACING) */}
        <section className="py-32 px-6 bg-white overflow-hidden">
           <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-24">
                 <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">How <span className="text-gradient-orange">Enabled Academy</span> Works</span>
                 <h2 className="text-4xl font-extrabold text-black mt-4">A Simple, Clear Process</h2>
              </div>
              <div className="relative">
                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#fde68a] hidden md:block"></div>
                 <div className="space-y-32">
                    
                    {/* Step 1: Image Left, Text Right */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full relative mb-16 md:mb-0">
                        <div className="w-full md:w-5/12 pr-0 md:pr-20 mb-8 md:mb-0"> {/* Increased padding pr-20 */}
                           <div className="relative h-64 md:h-80 rounded-[40px] overflow-hidden shadow-xl border-4 border-white">
                              <Image src="/img-train-coffee.jpg" alt="Need" fill className="object-cover" />
                           </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#d97706] rounded-full hidden md:block"></div>
                        <div className="w-full md:w-5/12 pl-0 md:pl-20"> {/* Increased padding pl-20 */}
                           <span className="text-[#d97706] font-bold text-xl mb-2 block">01</span>
                           <h3 className="text-3xl font-bold text-black mb-4">Understand the Need</h3>
                           <p className="text-gray-600 leading-relaxed text-lg">Employers share requirements. Talents share goals.</p>
                        </div>
                    </div>

                    {/* Step 2: Text Left, Image Right */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full relative mb-16 md:mb-0">
                        {/* Image first on mobile, right on desktop */}
                        <div className="w-full md:w-5/12 pl-0 md:pl-20 mb-8 md:mb-0 order-1 md:order-3"> {/* Increased padding pl-20 */}
                           <div className="relative h-64 md:h-80 rounded-[40px] overflow-hidden shadow-xl border-4 border-white">
                              <Image src="/img-train-phone.jpg" alt="Train" fill className="object-cover" />
                           </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#d97706] rounded-full hidden md:block order-2"></div>
                        {/* Text second on mobile, left on desktop */}
                        <div className="w-full md:w-5/12 pr-0 md:pr-20 text-center md:text-right order-2 md:order-1"> {/* Increased padding pr-20 */}
                           <span className="text-[#d97706] font-bold text-xl mb-2 block">02</span>
                           <h3 className="text-3xl font-bold text-black mb-4">Train, Coach & Prepare</h3>
                           <p className="text-gray-600 leading-relaxed text-lg">We provide role-specific coaching and workplace readiness.</p>
                        </div>
                    </div>

                    {/* Step 3: Image Left, Text Right */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                        <div className="w-full md:w-5/12 pr-0 md:pr-20 mb-8 md:mb-0"> {/* Increased padding pr-20 */}
                           <div className="relative h-64 md:h-80 rounded-[40px] overflow-hidden shadow-xl border-4 border-white">
                              <Image src="/img-blind-man.jpg" alt="Hire" fill className="object-cover" />
                           </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#d97706] rounded-full hidden md:block"></div>
                        <div className="w-full md:w-5/12 pl-0 md:pl-20"> {/* Increased padding pl-20 */}
                           <span className="text-[#d97706] font-bold text-xl mb-2 block">03</span>
                           <h3 className="text-3xl font-bold text-black mb-4">Match & Hire</h3>
                           <p className="text-gray-600 leading-relaxed text-lg">Employers meet trained candidates. We support onboarding.</p>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8. SUCCESS STORIES (Redesigned) */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-16">
                 <span className="text-[#d97706]">Success</span> Stories
              </h2>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                 {/* Left: Image (Couple) */}
                 <div className="w-full lg:w-1/2">
                    <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-lg">
                       <Image src="/img-friends-success.jpg" alt="Success Story Couple" fill className="object-cover" />
                    </div>
                 </div>
                 {/* Right: Testimonial Card */}
                 <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 relative">
                       <div className="absolute top-10 right-10 text-6xl text-[#d97706] opacity-30 font-serif">❝</div>
                       <h4 className="font-bold text-2xl text-black mb-1">Leslie Alexander</h4>
                       <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide font-bold">People Operations Specialist at Clari</p>
                       <p className="text-xl text-gray-600 leading-relaxed mb-8">Enabled Academy helped me gain the confidence to return to work. The training was practical, and the support was incredible.</p>
                       <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-400 text-lg">★★★★★</span>
                          <span className="text-black font-bold text-sm">4.5/5.0</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 mt-8">
                        <div className="flex gap-2">
                           <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">←</button>
                           <button className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center hover:bg-black transition">→</button>
                        </div>
                        <button className="btn-pill bg-[#facc15] text-[#0f172a] hover:bg-yellow-400 px-8 py-3">Read the Case Study</button>
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