"use client";

import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AcademyPage() {
   return (
      <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
         <Navbar />

         <style jsx global>{`
         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
         
         body { font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; padding: 0; }
         
         .btn-pill {
             display: inline-flex; align-items: center; justify-content: center; gap: 10px;
             height: 64px; padding: 0 8px 0 24px; border-radius: 32px; font-weight: 600; font-size: 20px;
             transition: all 0.2s ease; text-decoration: none;
             filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16));
         }
         
         .btn-arrow {
             width: 48px; height: 48px; border-radius: 24px; display: flex;
             align-items: center; justify-content: center;
         }
         
         .check-item { display: flex; align-items: center; gap: 14px; margin-bottom: 8px; }
         
         .check-circle { 
             min-width: 24px; height: 24px; 
             background: linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%);
             border-radius: 50%; 
             display: flex; align-items: center; justify-content: center; 
             flex-shrink: 0; 
         }

         .pill-tag {
             display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px;
             border-radius: 50px; font-size: 16px; font-weight: 500;
         }
         
         .pill-icon {
             width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
         }

         .timeline-line {
             position: absolute;
             left: 50%;
             top: 0;
             bottom: 0;
             width: 2px;
             background: #E5E7EB;
             transform: translateX(-50%);
         }

         .timeline-dot {
             position: absolute;
             left: 50%;
             transform: translateX(-50%);
             width: 16px;
             height: 16px;
             border-radius: 50%;
             background: #F5A623;
             z-index: 10;
         }
       `}</style>

         <main className="flex-grow w-full" id="main-content">

            {/* ================= SECTION 1: HERO ================= */}
            <section className="py-16 md:py-24 px-6 w-full relative overflow-hidden" style={{ background: '#FDF6E8' }}>
               {/* Braille dots decoration - hidden on smaller screens, light opacity, positioned at very bottom */}
               <div className="hidden xl:block absolute bottom-4 right-[10%] z-0 opacity-[0.15]">
                  <Image src="/Vector-5.svg" alt="" width={733} height={54} />
               </div>

               {/* Curly spiral design - hidden on smaller screens */}
               <div className="hidden xl:block absolute right-8 top-[25%] z-0">
                  <Image src="/Vector-3.svg" alt="" width={64} height={371} />
               </div>

               <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                  {/* LEFT: Hero Image Composition */}
                  <div className="relative z-10 flex justify-center lg:justify-start h-auto w-full items-center">
                     <div className="relative w-[520px] h-[689px]">
                        {/* Main hero image composite - includes all decorations */}
                        <Image
                           src="/final-hero-composite.png"
                           alt="Enabled Academy Student"
                           fill
                           className="object-contain"
                           priority
                        />
                     </div>
                  </div>

                  {/* RIGHT: Text Content */}
                  <div className="relative z-20 pl-0 lg:pl-4 lg:pr-20 xl:pr-28 text-center lg:text-left">
                     {/* ENABLED ACADEMY label */}
                     <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                        <span className="w-1 h-6 bg-gradient-to-b from-[#C0412C] to-[#F4C15D]"></span>
                        <span className="font-bold tracking-[0.2em] uppercase text-xl" style={{
                           background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                        }}>
                           ENABLED ACADEMY
                        </span>
                     </div>

                     <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black mb-8 leading-[1.15]">
                        Learn. Train. Grow.<br />Get Ready for<br />Opportunity.
                     </h1>

                     <p className="text-lg md:text-xl text-[#373737] mb-10 max-w-[652px] mx-auto lg:mx-0 leading-[1.5] lg:pr-4" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>
                        Enabled Academy is a training and job-readiness program that helps people build real skills while supporting employers with qualified, prepared, and confident talent. Whether you're an individual looking to grow your career — or an employer looking for trained talent — Enabled Academy is here to support your journey.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start relative z-10">
                        <Link href="/register" className="btn-pill text-white" style={{ background: 'linear-gradient(90deg, #2B476D 0%, #182434 100%)' }}>
                           For Talents
                           <span className="btn-arrow" style={{ background: 'rgba(255, 255, 255, 0.16)' }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </span>
                        </Link>
                        <Link href="/employers" className="btn-pill text-black" style={{ background: 'linear-gradient(90deg, #FFD071 0%, #EFB745 100%)' }}>
                           For Employers
                           <span className="btn-arrow" style={{ background: 'rgba(0, 0, 0, 0.16)' }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#182434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </section>


            {/* ================= SECTION 2: WHO WE ARE / WHAT IS ENABLED ACADEMY ================= */}
            <section className="py-20 md:py-28 px-6 w-full bg-white">
               <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                  {/* LEFT: Text Content */}
                  <div className="text-center lg:text-left">
                     <span className="bg-[rgba(0,0,0,0.06)] text-black px-6 py-4 rounded-full text-xl font-semibold uppercase tracking-wide mb-8 inline-block">WHO WE ARE</span>
                     <h2 className="text-4xl md:text-[56px] font-bold text-black mb-8 leading-[1.27]">
                        What Is <span style={{
                           background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                        }}>Enabled Academy?</span>
                     </h2>
                     <p className="text-lg md:text-2xl text-[rgba(0,0,0,0.5)] mb-6 leading-relaxed" style={{ fontWeight: 500 }}>
                        Enabled Academy is a skill-building and readiness hub that improves access to meaningful jobs.
                     </p>
                     <p className="text-lg md:text-2xl text-[rgba(0,0,0,0.5)] mb-6 leading-relaxed" style={{ fontWeight: 500 }}>
                        We train individuals across different career paths, help them gain confidence, and connect them with employers who need job-ready talent.
                     </p>
                     <p className="text-lg md:text-2xl text-[rgba(0,0,0,0.5)] leading-relaxed" style={{ fontWeight: 500 }}>
                        We work closely with employers to understand their staffing needs and train candidates with the exact skills required for the role — from customer care to office support to IT and engineering.
                     </p>
                  </div>

                  {/* RIGHT: Orbit Diagram */}
                  <div className="relative flex justify-center items-center min-h-[520px]">
                     <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
                        {/* Outer dashed orbit ring */}
                        <div className="absolute inset-0 rounded-full" style={{ border: '2.25px dashed rgba(63, 63, 70, 0.1)' }}></div>

                        {/* Inner dashed orbit ring */}
                        <div className="absolute inset-[15%] rounded-full" style={{ border: '2.25px dashed rgba(63, 63, 70, 0.1)' }}></div>

                        {/* Center circle with text */}
                        <div className="absolute inset-[25%] rounded-full flex items-center justify-center" style={{ border: '8px solid #F2F2F2' }}>
                           <p className="text-center text-sm text-[rgba(18,20,29,0.7)] font-normal">Purpose. Profit. Progress.</p>
                        </div>

                        {/* Floating avatar top-left */}
                        <div className="absolute -top-2 left-12">
                           <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white" style={{ boxShadow: '0px 4.49px 67.36px rgba(0, 0, 0, 0.08)' }}>
                              <Image src="/orbit-person-1.png" alt="Person" width={56} height={56} className="object-cover" />
                           </div>
                        </div>

                        {/* Floating avatar top-right */}
                        <div className="absolute top-8 -right-1">
                           <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white" style={{ boxShadow: '0px 4.49px 67.36px rgba(0, 0, 0, 0.08)' }}>
                              <Image src="/orbit-person-2.png" alt="Person" width={56} height={56} className="object-cover" />
                           </div>
                        </div>

                        {/* Floating avatar bottom-left */}
                        <div className="absolute bottom-12 -left-4">
                           <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white" style={{ boxShadow: '0px 4.49px 67.36px rgba(0, 0, 0, 0.08)' }}>
                              <Image src="/orbit-person-3.png" alt="Person" width={56} height={56} className="object-cover" />
                           </div>
                        </div>

                        {/* Value proposition cards */}
                        <div className="absolute -top-6 right-[70px] bg-white rounded-lg px-4 py-3 text-sm font-semibold text-[#12141D]" style={{ boxShadow: '0px 4.09px 61.31px rgba(0, 0, 0, 0.08)' }}>
                           Inclusive work for all.
                        </div>

                        <div className="absolute top-1/3 -left-[40px] bg-white rounded-lg px-4 py-3 text-sm font-semibold text-[#12141D] text-center" style={{ boxShadow: '0px 4.09px 61.31px rgba(0, 0, 0, 0.08)' }}>
                           Value through<br />diverse talent.
                        </div>

                        <div className="absolute bottom-[-30px] right-[60px] bg-white rounded-lg px-4 py-3 text-sm font-semibold text-[#12141D]" style={{ boxShadow: '0px 4.09px 61.31px rgba(0, 0, 0, 0.08)' }}>
                           Equity in action.
                        </div>
                     </div>
                  </div>
               </div>
            </section>


            {/* ================= SECTION 3: FOR TALENT ================= */}
            <section id="talent" className="py-16 md:py-28 px-4 md:px-6 w-full relative overflow-hidden" style={{ background: '#FBFBFB' }}>
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

            {/* LEFT: Image with floating badges */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
      
            {/* WRAPPER: Added 'mb-12' to push text down on mobile so yellow bg doesn't overlap */}
            <div className="relative w-full max-w-[360px] md:max-w-[480px] lg:max-w-none mb-12 lg:mb-0">
        
         {/* Yellow background card */}
         {/* Changed to w-full h-full with top-4 left-4 offset. The mb-12 on parent handles the extra height. */}
               <div className="absolute top-4 left-4 w-full h-full lg:top-[88px] lg:left-[85px] lg:w-[554px] lg:h-[644px] rounded-[32px] -z-10" style={{ background: '#F9C760' }}></div>

        {/* Main image */}
        <div className="relative z-10 w-full aspect-[2/3] lg:w-[486px] lg:h-[729px] lg:ml-[85px] lg:aspect-auto">
          <Image src="/final-float-1.png" alt="Enabled Academy Student" fill className="object-cover object-top rounded-[33px] shadow-lg" />
        </div>

                        {/* Floating badges on left */}
                        <div className="absolute top-[147px] left-0 flex flex-col gap-3.5 z-20 scale-75 lg:scale-100">
                           <div className="bg-white py-3 px-5 rounded-full flex items-center gap-2.5" style={{ boxShadow: '0px 2px 10px rgba(118, 118, 118, 0.25)' }}>
                              <span className="w-6 h-6 bg-[#24C07C] rounded flex items-center justify-center">
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                              </span>
                              <span className="text-lg font-medium text-[rgba(0,0,0,0.8)]">200+ Programs</span>
                           </div>
                           <div className="bg-white py-3 px-5 rounded-full flex items-center gap-2.5" style={{ boxShadow: '0px 2px 10px rgba(118, 118, 118, 0.25)' }}>
                              <span className="w-6 h-6 bg-[#14CBF2] rounded flex items-center justify-center">
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><circle cx="8" cy="7" r="4" /><circle cx="16" cy="7" r="4" /><path d="M4 21v-2c0-2 2-4 4-4h8c2 0 4 2 4 4v2" /></svg>
                              </span>
                              <span className="text-lg font-medium text-[rgba(0,0,0,0.8)]">Expert Instructors</span>
                           </div>
                           <div className="bg-white py-3 px-5 rounded-full flex items-center gap-2.5" style={{ boxShadow: '0px 2px 10px rgba(118, 118, 118, 0.25)' }}>
                              <span className="w-6 h-6 bg-[#F04E1A] rounded flex items-center justify-center">
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" /></svg>
                              </span>
                              <span className="text-lg font-medium text-[rgba(0,0,0,0.8)]">Certified Learning</span>
                           </div>
                        </div>

                        {/* Stats card bottom right */}
                        <div className="absolute bottom-[56px] right-0 bg-white rounded-[20px] p-6 z-20 w-[272px]" style={{ boxShadow: '0px 2px 10px rgba(118, 118, 118, 0.25)' }}>
                           <p className="text-[32px] font-bold text-black leading-[36px]">75k+</p>
                           <p className="text-lg text-[rgba(0,0,0,0.8)] mb-4">Students Enrolled with us</p>
                           <div className="flex -space-x-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"><Image src="/avatar-1.jpg" alt="" width={48} height={48} className="object-cover" /></div>
                              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"><Image src="/avatar-2.jpg" alt="" width={48} height={48} className="object-cover" /></div>
                              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"><Image src="/avatar-3.jpg" alt="" width={48} height={48} className="object-cover" /></div>
                              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"><Image src="/avatar-4.jpg" alt="" width={48} height={48} className="object-cover" /></div>
                              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"><Image src="/avatar-5.jpg" alt="" width={48} height={48} className="object-cover" /></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* RIGHT: Content */}
                  <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                     <span className="bg-[rgba(0,0,0,0.06)] text-black px-6 py-4 rounded-full text-xl font-semibold uppercase tracking-wide inline-block">FOR TALENT</span>
                     <h2 className="text-4xl md:text-[56px] font-bold text-black leading-[1.27]">
                        What Is <span style={{
                           background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                        }}>Enabled Academy?</span><br />Become Job-Ready.
                     </h2>
                     <p className="text-lg text-[rgba(0,0,0,0.5)] max-w-lg font-medium">
                        Enabled Academy helps you learn practical skills, prepare for interviews, and become confident in your career journey. Our programs are designed for all skill levels and support a wide range of career interests.
                     </p>

                     <h3 className="font-bold text-xl text-black pt-4">What You'll Receive</h3>
                     <div className="space-y-2 text-left inline-block lg:block">
                        {[
                           "Role-based training for different industries",
                           "One-on-one coaching and interview preparation",
                           "Resume and profile guidance",
                           "Communication and workplace readiness training",
                           "Accessibility support and learning accommodations",
                           "Direct connections to employer partners",
                           "A supportive learning environment focused on your success"
                        ].map((item, i) => (
                           <div key={i} className="check-item">
                              <div className="check-circle">
                                 <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </div>
                              <span className="font-medium text-[#12141D] text-[21.6px] opacity-70" style={{ letterSpacing: '-0.6px' }}>{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>


            {/* ================= SECTION 4: WHO THIS IS FOR (Dark Card) ================= */}
            <section className="py-16 px-6 w-full bg-white">
               <div className="container mx-auto max-w-[1440px]">
                  <div className="rounded-[48px] p-16 md:p-24 text-center text-white relative overflow-hidden" style={{ background: '#182434' }}>
                     <span className="bg-[rgba(255,255,255,0.1)] text-white px-6 py-4 rounded-full text-lg font-semibold uppercase tracking-wide mb-8 inline-block">WHO WE SUPPORT</span>
                     <h2 className="text-4xl md:text-[56px] font-bold mb-8 leading-tight">
                        Who <span style={{
                           background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                        }}>This Is For</span>
                     </h2>
                     <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Anyone looking to improve skills, start a career, restart a career, or grow into new opportunities — including students, newcomers, career-changers, and people facing barriers.
                     </p>
                     <Link href="/register" className="btn-pill text-black inline-flex" style={{ background: 'linear-gradient(90deg, #FFD071 0%, #EFB745 100%)' }}>
                        Join Enabled Academy
                        <span className="btn-arrow" style={{ background: 'rgba(0, 0, 0, 0.16)' }}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#182434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                     </Link>
                  </div>
               </div>
            </section>


            {/* ================= SECTION 5: FOR EMPLOYERS ================= */}
            <section id="employers" className="py-20 md:py-28 px-6 w-full bg-white relative overflow-hidden">
               <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[117px] items-center relative z-10">
                  {/* Decorative curly spiral design - anchored to container */}
                  <div className="absolute left-[-360px] top-[72%] -translate-y-1/2 -z-10 hidden lg:block">
                     <Image src="/Union-9.svg" alt="" width={279} height={458} />
                  </div>

                  {/* LEFT: Image with stats card */}
                  <div className="relative w-full flex justify-center items-center order-2 lg:order-1">
                     <div className="relative w-[586px] h-[599px]">
                        <Image src="/Frame 427319326.svg" alt="Employer" fill className="object-contain" />
                     </div>
                  </div>

                  {/* RIGHT: Content */}
                  <div className="order-1 lg:order-2 text-center lg:text-left">
                     <span className="bg-[rgba(0,0,0,0.06)] text-black px-6 py-4 rounded-full text-lg font-semibold uppercase tracking-wide mb-6 inline-block">FOR EMPLOYERS</span>
                     <h2 className="text-4xl md:text-[48px] font-bold text-black mb-6 leading-tight">
                        Your Workforce <span style={{
                           background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                        }}>Training & Talent Partner</span>
                     </h2>
                     <p className="text-lg text-[rgba(0,0,0,0.5)] mb-4 max-w-lg font-medium">
                        Enabled Academy helps employers build a stronger and more prepared workforce by training candidates based on real job requirements.
                     </p>
                     <p className="text-lg text-[rgba(0,0,0,0.5)] mb-8 max-w-lg font-medium">
                        We support you with a flexible, inclusive, and job-ready talent pipeline.
                     </p>
                     <Link href="/contact" className="btn-pill text-white mb-8 inline-flex" style={{ background: '#182434' }}>
                        Book a Call Now
                        <span className="btn-arrow" style={{ background: 'rgba(255, 255, 255, 0.16)' }}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </span>
                     </Link>

                     <h3 className="font-bold text-xl text-black mb-4">How We Support Employers</h3>
                     <div className="space-y-2 text-left inline-block lg:block">
                        {[
                           "We train them specifically for your roles",
                           "We source and identify potential candidates",
                           "We provide one-on-one coaching and readiness support",
                           "We support inclusive hiring practices across all departments",
                           "We reduce onboarding challenges and help improve retention",
                           "We prepare candidates to fully understand your workflows, tools, and expectations"
                        ].map((item, i) => (
                           <div key={i} className="check-item">
                              <div className="check-circle">
                                 <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </div>
                              <span className="font-medium text-[#12141D] text-lg opacity-70">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>


            {/* ================= SECTION 6: WE SUPPORT ALL ROLES ================= */}
            <section className="py-20 md:py-28 px-6 w-full text-center" style={{ background: '#FFF8EE' }}>
               <div className="container mx-auto max-w-6xl">
                  <h2 className="text-4xl md:text-[48px] font-bold text-black mb-12 leading-tight">
                     We Support <span style={{
                        background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                     }}>All Types of Roles</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                     {/* Row 1 */}
                     <span className="pill-tag" style={{ background: 'rgba(253, 221, 167, 0.4)' }}>
                        <span className="pill-icon" style={{ background: '#FFB82C' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Customer Service & Call Centre</span>
                     </span>
                     <span className="pill-tag" style={{ background: '#E9F3FE' }}>
                        <span className="pill-icon" style={{ background: '#2A466B' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">HR & Recruitment</span>
                     </span>
                     <span className="pill-tag" style={{ background: 'rgba(253, 221, 167, 0.4)' }}>
                        <span className="pill-icon" style={{ background: '#FFB82C' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Administrative & Office Support</span>
                     </span>
                     <span className="pill-tag" style={{ background: '#E9F3FE' }}>
                        <span className="pill-icon" style={{ background: '#2A466B' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Operations & Logistics</span>
                     </span>

                     {/* Row 2 */}
                     <span className="pill-tag" style={{ background: '#E9F3FE' }}>
                        <span className="pill-icon" style={{ background: '#2A466B' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Data & Digital Roles</span>
                     </span>
                     <span className="pill-tag" style={{ background: 'rgba(253, 221, 167, 0.4)' }}>
                        <span className="pill-icon" style={{ background: '#FFB82C' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Sales & Retail</span>
                     </span>
                     <span className="pill-tag" style={{ background: '#E9F3FE' }}>
                        <span className="pill-icon" style={{ background: '#2A466B' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Business Analyst & Project Coordinator</span>
                     </span>
                     <span className="pill-tag" style={{ background: 'rgba(253, 221, 167, 0.4)' }}>
                        <span className="pill-icon" style={{ background: '#FFB82C' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Marketing & Social Media</span>
                     </span>

                     {/* Row 3 */}
                     <span className="pill-tag" style={{ background: 'rgba(253, 221, 167, 0.4)' }}>
                        <span className="pill-icon" style={{ background: '#FFB82C' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">Software & Technical Roles</span>
                     </span>
                     <span className="pill-tag" style={{ background: '#E9F3FE' }}>
                        <span className="pill-icon" style={{ background: '#2A466B' }}>
                           <svg width="12" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L4.5 8.5L12.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-700 font-medium">IT Support</span>
                     </span>
                  </div>
                  <p className="text-lg font-medium mt-10" style={{
                     background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                  }}>
                     ...and more — we customize based on your staffing needs.
                  </p>
               </div>
            </section>


            {/* ================= SECTION 7: HOW IT WORKS ================= */}
            <section className="py-20 md:py-28 px-6 w-full bg-white overflow-hidden">
               <div className="container mx-auto max-w-5xl">
                  <div className="text-center mb-16">
                     <span className="bg-[rgba(0,0,0,0.06)] text-black px-6 py-4 rounded-full text-lg font-semibold uppercase tracking-wide">HOW ENABLED ACADEMY WORKS</span>
                     <h2 className="text-4xl md:text-[48px] font-bold text-black mt-8 leading-tight">
                        A Simple, Clear Process that Supports<br />
                        <span style={{
                           background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                        }}>Both Talents and Employers.</span>
                     </h2>
                  </div>

                  <div className="relative">
                     {/* Vertical timeline line */}
                     {/* Top decoration - Union-6 */}
                     <div className="hidden md:flex absolute -top-[55px] left-1/2 transform -translate-x-1/2 z-10">
                        <Image src="/Union-6.svg" alt="" width={66} height={109} />
                     </div>

                     <div className="space-y-20 pt-12">

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full relative gap-8">
                           <div className="w-full md:w-5/12">
                              <div className="relative h-64 md:h-80 w-full rounded-[24px] overflow-hidden shadow-lg">
                                 <Image src="/MaskGroup1.png" alt="Understand the Need" fill className="object-cover" />
                              </div>
                           </div>
                           {/* Timeline dot */}
                           {/* Timeline dot & connectors */}
                           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center">
                              <Image src="/Ellipse 1825.svg" width={22} height={22} alt="" />
                              {/* Line 1 going UP */}
                              <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2">
                                 <Image src="/Line 1.svg" width={4} height={97} alt="" />
                              </div>
                              {/* Line 2 going DOWN */}
                              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2">
                                 <Image src="/Line 2.svg" width={4} height={469} alt="" />
                              </div>
                           </div>
                           <div className="w-full md:w-5/12 md:pl-12 text-center md:text-left">
                              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                                 <div className="w-2 h-2 rounded-full bg-[#F5A623]"></div>
                                 <span className="text-[#000] font-bold text-2xl">Understand the Need</span>
                              </div>
                              <div className="space-y-2 text-gray-600 text-base">
                                 <p>Employers share their role requirements and timelines</p>
                                 <p>Talents share their career goals and interests</p>
                                 <p>We align skills, expectations, accessibility needs, and growth paths.</p>
                              </div>
                           </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full relative gap-8">
                           <div className="w-full md:w-5/12 md:pr-12 text-center md:text-right">
                              <div className="flex items-center gap-2 mb-4 justify-center md:justify-end">
                                 <span className="text-[#000] font-bold text-2xl">Train, Coach & Prepare</span>
                                 <div className="w-2 h-2 rounded-full bg-[#F5A623]"></div>
                              </div>
                              <div className="space-y-2 text-gray-600 text-base">
                                 <p>We train talents based on employer needs</p>
                                 <p>We provide role-specific coaching</p>
                                 <p>We help talents build confidence through practice and support</p>
                                 <p>We focus on soft skills and workplace readiness</p>
                              </div>
                           </div>
                           {/* Timeline dot */}
                           {/* Timeline dot & connectors */}
                           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center">
                              <Image src="/Ellipse 1825.svg" width={22} height={22} alt="" />
                              {/* Line 3 going DOWN */}
                              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2">
                                 <Image src="/Line 3.svg" width={4} height={582} alt="" />
                              </div>
                           </div>
                           <div className="w-full md:w-5/12">
                              <div className="relative h-64 md:h-80 w-full rounded-[24px] overflow-hidden shadow-lg">
                                 <Image src="/MaskGroup2.png" alt="Train" fill className="object-cover" />
                              </div>
                           </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full relative gap-8">
                           <div className="w-full md:w-5/12">
                              <div className="relative h-64 md:h-80 w-full rounded-[24px] overflow-hidden shadow-lg">
                                 <Image src="/MaskGroup3.png" alt="Match & Hire" fill className="object-cover" />
                              </div>
                           </div>
                           {/* Timeline dot */}
                           {/* Timeline dot & connectors */}
                           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center">
                              <Image src="/Ellipse 1825.svg" width={22} height={22} alt="" />
                              {/* Line 4 going DOWN - clipped to prevent overlap */}
                              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 h-[200px] overflow-hidden">
                                 <Image src="/Line 4.svg" width={4} height={492} alt="" />
                              </div>
                           </div>
                           <div className="w-full md:w-5/12 md:pl-12 text-center md:text-left">
                              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                                 <div className="w-2 h-2 rounded-full bg-[#F5A623]"></div>
                                 <span className="text-[#000] font-bold text-2xl">Match & Hire</span>
                              </div>
                              <div className="space-y-2 text-gray-600 text-base">
                                 <p>Employers meet trained, pre-screened candidates</p>
                                 <p>Talents interview with confidence</p>
                                 <p>We support onboarding to ensure a smooth transition</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

                  {/* Result statement */}
                  <p className="text-center text-lg md:text-xl font-bold mt-16" style={{
                     background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                  }}>
                     The Result: Job-ready talent and employers who hire with confidence.
                  </p>
               </div>
            </section>


            {/* ================= SECTION 8: SUCCESS STORIES ================= */}
            <section className="py-20 md:py-28 px-6 w-full bg-white">
               <div className="container mx-auto max-w-5xl">
                  <h2 className="text-4xl md:text-[48px] font-bold text-black text-center mb-12 leading-tight">
                     <span style={{
                        background: 'linear-gradient(103.34deg, #C0412C 14.95%, #F4C15D 98.33%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                     }}>Success</span> Stories
                  </h2>
                  <div className="flex flex-col lg:flex-row items-start gap-10 relative">

                     {/* Image Left */}
                     <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-lg">
                           <Image src="/img-friends-success.jpg" alt="Leslie Alexander" fill className="object-cover object-[center_30%]" />
                        </div>
                     </div>

                     {/* Card Right */}
                     <div className="w-full lg:w-1/2 relative">
                        <div style={{ background: '#FBFBFB', borderRadius: '30px', padding: '40px', position: 'relative' }}>
                           {/* Quote mark */}
                           <div className="absolute top-8 right-8">
                              <Image src="/Mask group.svg" alt="Quote" width={70} height={56} />
                           </div>

                           <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '26px', lineHeight: '33px', color: '#000000', marginBottom: '8px' }}>Leslie Alexander</h4>
                           <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '32px', color: '#7D7D7D', marginBottom: '24px' }}>People Operations Specialist at Clari</p>
                           <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '24px', lineHeight: '32px', color: '#7D7D7D', marginBottom: '24px', maxWidth: '500px' }}>
                              Enabled Academy helped me gain the confidence to return to work.
                           </p>
                           {/* Star rating - positioned to bottom right */}
                           <div className="flex items-center gap-2 justify-end">
                              <span style={{ color: '#FFC814', fontSize: '20px' }}>★</span>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '18px', lineHeight: '44px', color: '#000000' }}>4.5/5.0</span>
                           </div>
                        </div>

                        {/* Buttons Below */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                           <div className="flex gap-3">
                              <button className="hover:opacity-80 transition">
                                 <Image src="/Group 63529.svg" alt="Previous" width={64} height={64} />
                              </button>
                              <button className="hover:opacity-80 transition">
                                 <Image src="/Group 1410066137.svg" alt="Next" width={64} height={64} />
                              </button>
                           </div>
                           <button className="px-6 py-3 rounded-full bg-[#facc15] text-[#0f172a] hover:bg-yellow-400 font-semibold shadow-md text-sm">Read the Case Study</button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Note: Section 9 "Start Your Journey CTA" is removed - the Footer component already includes this CTA */}

         </main>

         <Footer />
      </div>
   );
}