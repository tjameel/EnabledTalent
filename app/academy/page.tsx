"use client";

import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GeometricShapes from '../components/GeometricShapes';

// 1. Watermark Logo Component
const WatermarkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
    <path 
      d="M50 28 C 56 28, 62 32, 62 38 C 62 44, 56 48, 50 48 C 44 48, 38 44, 38 38 C 38 32, 44 28, 50 28 Z M 35 55 C 25 65, 35 90, 50 90 C 65 90, 75 65, 65 55 M 35 55 C 30 45, 20 40, 15 45 M 65 55 C 70 45, 80 40, 85 45" 
      stroke="currentColor" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// 2. Timeline Swirl Icon
const TimelineSwirl = () => (
  <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path 
       d="M30 75 C 15 75, 5 55, 15 40 C 25 25, 45 25, 55 10" 
       stroke="#FCD34D" 
       strokeWidth="3" 
       strokeLinecap="round"
     />
     <circle cx="55" cy="5" r="4" fill="#FCD34D" />
  </svg>
);

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        .blob-shape { border-radius: 40% 60% 60% 40% / 40% 50% 50% 50%; }
        .orbit-circle { border: 1px dashed #e2e8f0; border-radius: 50%; }
        
        .btn-pill {
            display: inline-flex; align-items: center; justify-content: center; gap: 10px;
            padding: 14px 32px; border-radius: 9999px; font-weight: 700;
            transition: all 0.2s ease; text-decoration: none;
        }
        
        .check-item { display: flex; align-items: start; gap: 16px; margin-bottom: 20px; }
        
        .check-circle-solid { 
            min-width: 24px; height: 24px; background: #E06E45; border-radius: 50%; 
            color: white; display: flex; align-items: center; justify-content: center; 
            font-size: 12px; margin-top: 4px; flex-shrink: 0; 
        }
        
        .check-circle { min-width: 24px; height: 24px; background: #d94e33; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-top: 4px; flex-shrink: 0; }
        .check-circle.black { background: #0f172a; }

        .pill-tag {
            display: inline-flex; align-items: center; gap: 12px; padding: 12px 24px;
            border-radius: 50px; font-size: 0.95rem; font-weight: 600; color: #374151;
            box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        .pill-tag.yellow { background-color: #fff7ed; }
        .pill-icon.yellow { background-color: #f59e0b; color: white; }
        .pill-tag.blue { background-color: #eff6ff; }
        .pill-icon.blue { background-color: #1e3a8a; color: white; }
        
        .pill-icon {
            width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0;
        }

        .dot-pattern {
            background-image: radial-gradient(#e5e7eb 2px, transparent 2px);
            background-size: 16px 16px;
        }

        .watermark-container {
            position: absolute;
            z-index: 0;
            pointer-events: none;
        }
      `}</style>

      <main className="flex-grow">
        
        {/* ================= HERO SECTION (CREAM) ================= */}
        <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-[#fffbf0]">
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
             {/* LEFT: The Composition */}
             <div className="relative z-10 flex justify-center lg:justify-start h-[650px] w-full items-center">
                <div className="relative w-[550px] h-[650px]">
                    <div className="absolute top-16 left-6 w-[340px] h-[480px] border-2 border-black rounded-[40px] z-0 transform -rotate-3"></div>
                    <div className="absolute top-24 left-14 w-[340px] h-[480px] bg-[#1e293b] rounded-[40px] z-10 transform -rotate-3 shadow-2xl"></div>
                    <div className="absolute top-[300px] -left-8 z-20 w-[240px] h-[100px] border-[5px] border-white rounded-full transform -rotate-12 bg-transparent opacity-90"></div>
                    <div className="absolute top-0 left-24 w-[450px] h-[520px] bg-[#facc15] blob-shape z-20 shadow-none"></div>
                    <div className="absolute top-28 right-24 z-30"><svg width="80" height="260" viewBox="0 0 80 260" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10 C 60 10, 60 100, 70 130 C 60 160, 60 250, 10 250" /></svg></div>
                    <div className="absolute bottom-[170px] -right-4 z-30 transform rotate-6"><svg width="140" height="30" viewBox="0 0 140 30" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round"><path d="M0 15 Q 15 0, 30 15 T 60 15 T 90 15 T 120 15" /></svg></div>
                    <div className="absolute top-4 right-10 z-30">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="white" stroke="black" strokeWidth="2.5" className="absolute -top-6 -left-8 z-40"><path d="M30 0 L38 20 L58 28 L38 36 L30 56 L22 36 L2 28 L22 20 Z" /></svg>
                        <div className="w-28 h-12 bg-[#fca5a5] border-2 border-black rounded-lg transform rotate-12 flex items-center justify-end px-3 shadow-sm relative z-30"><div className="w-2 h-2 bg-black rounded-full mb-6 mr-1"></div></div>
                    </div>
                    <div className="absolute bottom-0 left-8 z-40 w-[440px] h-[560px]">
                        <Image src="/final-hero.png" alt="Student in wheelchair" fill className="object-contain" priority />
                    </div>
                </div>
             </div>
             {/* RIGHT: Text Content */}
             <div className="relative z-20 pl-0 lg:pl-4">
                <span className="text-[#d94e33] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">| ENABLED ACADEMY</span>
                <h1 className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-black mb-8 leading-[1.05]">Learn. Train. Grow.<br/>Get Ready for<br/>Opportunity.</h1>
                <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-medium">Enabled Academy is a training and job-readiness program that helps people build real skills while supporting employers with qualified, prepared, and confident talent.</p>
                <div className="flex flex-wrap gap-5">
                    <Link href="#talent" className="btn-pill bg-[#1e293b] text-white hover:bg-[#0f172a] shadow-xl">For Talents</Link>
                    <Link href="#employers" className="btn-pill bg-[#facc15] text-[#0f172a] hover:bg-[#eab308] shadow-xl">For Employers</Link>
                </div>
             </div>
           </div>
        </section>

        {/* ================= WHAT IS ENABLED ACADEMY? (WHITE - UPDATED ORBIT) ================= */}
        <section className="py-32 px-6 bg-white relative">
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
             {/* Text Content */}
             <div>
                <span className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide mb-8 inline-block">WHO WE ARE</span>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">What Is <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Enabled Academy?</span></h2>
                <div className="space-y-8 text-xl text-gray-500 leading-relaxed font-light">
                    <p>Enabled Academy is a skill-building and readiness hub that improves access to meaningful jobs.</p>
                    <p>We train individuals across different career paths, help them gain confidence, and connect them with employers who need job-ready talent.</p>
                    <p>We work closely with employers to understand their staffing needs and train candidates with the exact skills required for the role — from customer care to office support to IT and engineering.</p>
                </div>
             </div>

             {/* Orbit Diagram (UPDATED: Elements between each other) */}
             <div className="relative h-[600px] w-full flex items-center justify-center">
                {/* 1. Outer Orbit */}
                <div className="absolute w-[580px] h-[580px] orbit-circle border-dashed border-gray-200"></div>
                {/* 2. Middle Orbit */}
                <div className="absolute w-[420px] h-[420px] orbit-circle border-dashed border-gray-200"></div>
                {/* 3. Inner Orbit */}
                <div className="absolute w-[280px] h-[280px] orbit-circle border-dashed border-gray-200"></div>
                
                {/* Center Circle */}
                <div className="absolute w-[180px] h-[180px] bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100 z-20">
                    <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-loose">Purpose. Profit. Progress.</p>
                </div>

                {/* === SATELLITES & BUBBLES (Alternating Position) === */}

                {/* 1. Image: Top Left (Outer Ring) */}
                <div className="absolute top-[30%] left-[18%] z-30 w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100 relative">
                    <Image src="/orbit-person-3.png" alt="User" fill className="object-cover" />
                </div>

                {/* 2. Text Bubble: Top Right (Middle Ring - In between Image 1 and 3) */}
                <div className="absolute top-[15%] right-[20%] z-30 bg-white shadow-lg py-3 px-5 rounded-xl border border-gray-50">
                    <p className="text-xs font-bold text-black whitespace-nowrap">Inclusive work for all.</p>
                </div>

                {/* 3. Image: Right (Middle Ring) */}
                <div className="absolute bottom-[30%] right-[15%] z-30 w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100 relative">
                    <Image src="/orbit-person-2.png" alt="User" fill className="object-cover" />
                </div>

                {/* 4. Text Bubble: Bottom Right (Inner Ring - In between Image 3 and 5) */}
                <div className="absolute bottom-[30%] right-[10%] z-30 bg-white shadow-lg py-3 px-5 rounded-xl border border-gray-50">
                    <p className="text-xs font-bold text-black whitespace-nowrap">Equity in action.</p>
                </div>

                {/* 5. Image: Bottom Left (Inner Ring) */}
                <div className="absolute bottom-[25%] left-[30%] z-30 w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100 relative">
                    <Image src="/orbit-person-1.png" alt="User" fill className="object-cover" />
                </div>

                {/* 6. Text Bubble: Left (Outer Ring - In between Image 5 and 1) */}
                <div className="absolute top-[45%] left-[8%] z-30 bg-white shadow-lg py-3 px-5 rounded-xl border border-gray-50">
                    <p className="text-xs font-bold text-black whitespace-nowrap">Value through <br/> diverse talent.</p>
                </div>

             </div>
           </div>
        </section>

        {/* ================= 3. FOR TALENT (WHITE) ================= */}
        <section id="talent" className="py-24 px-6 bg-white relative overflow-hidden">
           <div className="absolute top-20 left-10 text-gray-100 opacity-40 w-64 h-64 z-0 pointer-events-none">
                <WatermarkIcon className="w-full h-full" />
           </div>

           <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20 relative z-10">
             <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-[400px] md:w-[480px] h-[500px] bg-[#FCD34D] rounded-[40px] flex items-end justify-center">
                  <div className="absolute -top-12 -right-12 z-0 hidden lg:block">
                     <svg width="180" height="180" viewBox="0 0 180 180" fill="none"><defs><pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#FCD34D" /></pattern></defs><circle cx="90" cy="90" r="90" fill="url(#dot-pattern)" /></svg>
                  </div>
                  <div className="relative z-10 w-[90%] h-[95%]">
                      <Image src="/final-float-1.png" alt="Enabled Academy Student" fill className="object-cover drop-shadow-xl" />
                  </div>
                  <div className="absolute top-16 -left-8 md:-left-16 flex flex-col gap-4 z-20">
                    <div className="bg-green-50 border border-green-100 py-2.5 px-6 rounded-full shadow-lg flex items-center gap-3"><span className="text-sm font-bold text-green-800">200+ Programs</span></div>
                    <div className="bg-blue-50 border border-blue-100 py-2.5 px-6 rounded-full shadow-lg flex items-center gap-3 ml-4"><span className="text-sm font-bold text-blue-800">Expert Instructors</span></div>
                    <div className="bg-orange-50 border border-orange-100 py-2.5 px-6 rounded-full shadow-lg flex items-center gap-3"><span className="text-sm font-bold text-orange-800">Certified Learning</span></div>
                  </div>
                </div>
             </div>
             <div className="w-full lg:w-1/2 space-y-6">
                <span className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">For Talent</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">What Is <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Enabled Academy?</span><br/>Become Job-Ready.</h2>
                <h3 className="font-bold text-2xl text-black mb-8">What You'll Receive</h3>
                <div className="space-y-4">
                   {["Role-based training for different industries", "One-on-one coaching and interview preparation", "Resume guidance", "Workplace readiness"].map((item, i) => (
                      <div key={i} className="check-item"><div className="check-circle">✓</div><span className="text-gray-700 font-medium text-lg leading-snug">{item}</span></div>
                   ))}
                </div>
             </div>
           </div>
        </section>

        {/* ================= 4. WHO THIS IS FOR (WHITE) ================= */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-6xl">
              <div className="bg-[#0f172a] rounded-[50px] p-12 md:p-28 text-center text-white relative overflow-hidden shadow-2xl">
                 <span className="bg-[#1e293b] text-white px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide mb-8 inline-block shadow-md border border-white/5">WHO WE SUPPORT</span>
                 <h2 className="text-4xl md:text-6xl font-extrabold mb-10">Who <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">This Is For</span></h2>
                 <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">Anyone looking to improve skills, start a career, or grow into new opportunities — including students, newcomers, career-changers, and people facing barriers.</p>
                 <Link href="/register" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-[#0f172a] bg-gradient-to-r from-[#FCD34D] to-[#F59E0B] hover:scale-105 transition-transform shadow-lg text-lg group">
                    Join Enabled Academy
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </Link>
              </div>
           </div>
        </section>

        {/* ================= 5. FOR EMPLOYERS (WHITE) ================= */}
        <section id="employers" className="py-24 px-6 bg-white relative overflow-hidden">
           <div className="absolute bottom-10 right-10 text-gray-100 opacity-40 w-72 h-72 z-0 pointer-events-none">
                <WatermarkIcon className="w-full h-full" />
           </div>

           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="relative w-full flex justify-center items-center">
                  <div className="relative w-[450px] h-[600px]">
                      <div className="absolute top-20 -left-10 w-48 h-48 bg-[#fffbf0] rounded-2xl shadow-lg z-10 border border-gray-100"></div>
                      <div className="absolute bottom-20 -right-10 w-56 h-56 bg-[#fffbf0] rounded-2xl shadow-lg z-10 border border-gray-100"></div>
                      <div className="relative z-0 h-full w-full rounded-[40px] overflow-hidden shadow-xl bg-transparent">
                          <Image src="/final-talent.png" alt="Employer" fill className="object-cover object-top" />
                      </div>
                  </div>
              </div>
              <div className="lg:pt-10">
                 <span className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">For Employers</span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">Your Workforce <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Training & <br/> Talent Partner</span></h2>
                 <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed font-medium">Enabled Academy helps employers build a stronger and more prepared workforce by training candidates based on real job requirements.</p>
                 <Link href="/contact" className="btn-pill bg-[#1e293b] text-white hover:bg-[#0f172a] text-lg mb-12 shadow-xl group">Book a Call Now</Link>
                 <h3 className="font-bold text-xl text-black mb-6">How We Support Employers</h3>
                 <div className="space-y-4">
                    {["We train them specifically for your roles", "We source and identify potential candidates", "We provide one-on-one coaching"].map((item, i) => (
                       <div key={i} className="check-item"><div className="check-circle-solid">✓</div><span className="text-gray-700 font-medium text-lg leading-snug">{item}</span></div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ================= 6. WE SUPPORT ALL ROLES (CREAM) ================= */}
        <section className="py-24 px-6 bg-[#fffbf0] text-center">
           <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-16">
                 We Support <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">All Types of Roles</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                 <span className="pill-tag yellow"><span className="pill-icon yellow">✓</span> Customer Service & Call Centre</span>
                 <span className="pill-tag blue"><span className="pill-icon blue">✓</span> HR & Recruitment</span>
                 <span className="pill-tag yellow"><span className="pill-icon yellow">✓</span> Administrative & Office Support</span>
                 <span className="pill-tag blue"><span className="pill-icon blue">✓</span> Operations & Logistics</span>
                 
                 <span className="pill-tag blue"><span className="pill-icon blue">✓</span> Data & Digital Roles</span>
                 <span className="pill-tag yellow"><span className="pill-icon yellow">✓</span> Sales & Retail</span>
                 <span className="pill-tag blue"><span className="pill-icon blue">✓</span> Business Analyst & Project Coordinator</span>
                 <span className="pill-tag yellow"><span className="pill-icon yellow">✓</span> Marketing & Social Media</span>
                 
                 <span className="pill-tag yellow"><span className="pill-icon yellow">✓</span> Software & Technical Roles</span>
                 <span className="pill-tag blue"><span className="pill-icon blue">✓</span> IT Support</span>
              </div>
              <p className="text-xl md:text-2xl font-bold mt-12 text-[#d94e33]">
                 ...and more — <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">we customize based on your staffing needs.</span>
              </p>
           </div>
        </section>

        {/* ================= 7. HOW IT WORKS (WHITE) ================= */}
        <section className="py-32 px-6 bg-white overflow-hidden">
           <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-24">
                 <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">HOW ENABLED ACADEMY WORKS</span>
                 <h2 className="text-4xl font-extrabold text-black mt-6 leading-tight">
                    A Simple, Clear Process that Supports <br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Both Talents and Employers.</span>
                 </h2>
              </div>
              
              <div className="relative">
                 {/* Top Swirl Icon */}
                 <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <TimelineSwirl />
                 </div>

                 {/* Center Line (Solid Yellow) */}
                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#FCD34D] hidden md:block z-0"></div>
                 
                 <div className="space-y-32 pt-10">
                    
                    {/* Step 1: Understand the Need */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full relative mb-16 md:mb-0">
                        {/* Image Left */}
                        <div className="w-full md:w-5/12 pr-0 md:pr-10 mb-8 md:mb-0 relative"> 
                           <div className="absolute -top-10 -left-10 w-40 h-40 dot-pattern rounded-full opacity-60 z-0"></div>
                           <div className="relative h-72 w-full z-10 rounded-[40px] overflow-hidden">
                                  <Image src="/img-train-coffee.jpg" alt="Understand the Need" fill className="object-cover" />
                                  <div className="absolute bottom-0 right-0 w-16 h-16">
                                      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                          <path d="M0 100 L 100 100 L 100 0 A 100 100 0 0 0 0 100" fill="#ffffff" />
                                      </svg>
                                  </div>
                           </div>
                        </div>
                        
                        {/* Center Marker */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                             <div className="w-5 h-5 rounded-full border-4 border-[#d97706] bg-white"></div>
                        </div>

                        {/* Text Right */}
                        <div className="w-full md:w-5/12 pl-0 md:pl-10"> 
                           <span className="text-[#d97706] font-bold text-xl mb-2 block">Understand the Need</span>
                           <div className="space-y-3 text-gray-600 text-lg">
                               <p>Employers share their role requirements and timelines.</p>
                               <p>Talents share their career goals and interests.</p>
                               <p>We align skills, expectations, accessibility needs, and growth paths.</p>
                           </div>
                        </div>
                    </div>

                    {/* Step 2: Train, Coach & Prepare */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full relative mb-16 md:mb-0">
                        <div className="w-full md:w-5/12 pr-0 md:pr-10 text-left md:text-right order-2 md:order-1"> 
                           <span className="text-[#d97706] font-bold text-xl mb-2 block">Train, Coach & Prepare</span>
                           <div className="space-y-3 text-gray-600 text-lg">
                               <p>We train talents based on employer needs.</p>
                               <p>We provide role-specific coaching.</p>
                               <p>We help talents build confidence through practice and support.</p>
                               <p>We focus on soft skills and workplace readiness.</p>
                           </div>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center order-2">
                             <div className="w-5 h-5 rounded-full border-4 border-[#d97706] bg-white"></div>
                        </div>

                        {/* Image Right */}
                        <div className="w-full md:w-5/12 pl-0 md:pl-10 mb-8 md:mb-0 order-1 md:order-3 relative"> 
                           <div className="absolute -top-10 -right-10 w-40 h-40 dot-pattern rounded-full opacity-60 z-0"></div>
                           <div className="relative h-72 w-full z-10 rounded-[40px] overflow-hidden">
                                  <Image src="/img-train-phone.jpg" alt="Train" fill className="object-cover" />
                                  <div className="absolute bottom-0 left-0 w-16 h-16 transform scale-x-[-1]">
                                      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                          <path d="M0 100 L 100 100 L 100 0 A 100 100 0 0 0 0 100" fill="#ffffff" />
                                      </svg>
                                  </div>
                           </div>
                        </div>
                    </div>

                    {/* Step 3: Match & Hire */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                        {/* Image Left */}
                        <div className="w-full md:w-5/12 pr-0 md:pr-10 mb-8 md:mb-0 relative"> 
                           <div className="absolute -bottom-10 -left-10 w-40 h-40 dot-pattern rounded-full opacity-60 z-0"></div>
                           <div className="relative h-72 w-full z-10 rounded-[40px] overflow-hidden">
                                  <Image src="/img-blind-man.jpg" alt="Hire" fill className="object-cover" />
                                  <div className="absolute bottom-0 right-0 w-16 h-16">
                                      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                          <path d="M0 100 L 100 100 L 100 0 A 100 100 0 0 0 0 100" fill="#ffffff" />
                                      </svg>
                                  </div>
                           </div>
                        </div>
                        
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                             <div className="w-5 h-5 rounded-full border-4 border-[#d97706] bg-white"></div>
                        </div>

                        <div className="w-full md:w-5/12 pl-0 md:pl-10"> 
                           <span className="text-[#d97706] font-bold text-xl mb-2 block">Match & Hire</span>
                           <div className="space-y-3 text-gray-600 text-lg">
                               <p>Employers meet trained, pre-screened candidates.</p>
                               <p>Talents interview with confidence.</p>
                               <p>We support onboarding to ensure a smooth transition.</p>
                           </div>
                        </div>
                    </div>

                 </div>
              </div>
           </div>
        </section>

        {/* ================= 8. SUCCESS STORIES (CREAM) ================= */}
        <section className="py-24 px-6 bg-[#fffbf0]">
           <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-16">
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Success</span> Stories
              </h2>
              <div className="flex flex-col lg:flex-row items-start gap-12">
                 
                 {/* Image Left */}
                 <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[3/2] w-full rounded-[40px] overflow-hidden shadow-lg bg-white">
                       <Image src="/img-friends-success.jpg" alt="Leslie Alexander" fill className="object-cover object-[center_30%]" />
                    </div>
                 </div>
                 
                 {/* Card Right */}
                 <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-200 relative h-full">
                       {/* Flipped quote marks in the top-right */}
                       <div className="absolute top-8 right-10 text-6xl text-[#d94e33] opacity-60 font-serif transform scale-x-[-1]">❝</div>
                       <h4 className="font-bold text-2xl text-black mb-1">Leslie Alexander</h4>
                       <p className="text-sm text-gray-500 mb-6 uppercase tracking-wide font-bold">PEOPLE OPERATIONS SPECIALIST AT CLARI</p>
                       <p className="text-lg text-gray-700 leading-relaxed mb-8">Enabled Academy helped me gain the confidence to return to work. The training was practical, and the support was incredible.</p>
                       <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-400 text-lg">★★★★★</span>
                          <span className="text-black font-bold text-sm">4.5/5.0</span>
                       </div>
                    </div>
                    
                    {/* Buttons Below */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                        <div className="flex gap-3">
                           <button className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition text-gray-500">←</button>
                           <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-black transition">→</button>
                        </div>
                        <button className="btn-pill bg-[#facc15] text-[#0f172a] hover:bg-yellow-400 px-8 py-3 w-full sm:w-auto font-bold">Read the Case Study</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ================= 9. FOOTER CTA (WHITE) ================= */}
        <section className="px-6 pb-24 bg-white">
           <div className="container mx-auto max-w-7xl">
             <div className="bg-[#0f172a] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                   <Image src="/final-footer.png" alt="Rainbow Road Background" fill className="object-cover object-bottom opacity-20" />
                   <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/50 to-transparent"></div>
                </div>
                <div className="relative z-10">
                   <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
                      Start Your Journey With <br/> 
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Enabled Academy</span>
                   </h2>
                   <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
                      Whether you're looking to grow your skills or build your team, Enabled Academy is here to help.
                   </p>
                   <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link href="/register" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold bg-[#facc15] text-[#0f172a] hover:translate-y-[-2px] transition shadow-lg">
                          Join as a Talent 
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold bg-white text-[#0f172a] hover:translate-y-[-2px] transition shadow-lg">
                          Partner as an Employer
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
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