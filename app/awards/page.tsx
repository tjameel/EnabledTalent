"use client";

import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ==========================================
// DATA: Award Categories
// ==========================================
const awardCategories = [
  { 
    imageSrc: "/e4371f55548dd344d0c9e3729fd1dd3ff5d485eb.png", 
    title: "Barrier-Free Workplace of the Year", 
    desc: "Recognizing an employer that has demonstrated exceptional leadership in creating accessible, inclusive, and supportive work environments." 
  },
  { 
    imageSrc: "/498e74c033d50a930145899bf167b096a9a6b515.png", 
    title: "Inclusive Employer of the Year", 
    desc: "Honoring organizations that integrate accessibility into hiring, onboarding, and workplace culture — setting new standards for inclusion." 
  },
  { 
    imageSrc: "/8ee163c5bb1f681b5c2c9346c7fed9fa2c252a6c.png", 
    title: "Talent Leader of the Year", 
    desc: "Celebrating an individual who has overcome barriers to employment and continues to advocate for greater inclusion in their field." 
  },
  { 
    imageSrc: "/70a7a255a43fd582e96382f48e74d888f1c11ad9.png", 
    title: "Inclusive Partnership of the Year", 
    desc: "Recognizing a partnership between NGOs, government bodies, and educational institutions that has created measurable employment opportunities for people with disabilities." 
  },
  { 
    imageSrc: "/b18ec09abb761a2b938ffe68723fd8d508c23212.png", 
    title: "Innovative Learning & Upskilling Program", 
    desc: "Highlighting programs that have successfully trained, mentored, or upskilled job seekers through inclusive design and accessible technology." 
  },
  { 
    imageSrc: "/463542087917a0455523310f3ff18bb9a414567d.png", 
    title: "Emerging Talent Award", 
    desc: "For early-career professionals or students who exemplify resilience, creativity, and commitment to an inclusive future." 
  }
];

// ==========================================
// DATA: Nomination Steps
// ==========================================
const nominationSteps = [
  { 
    step: "01", 
    title: "Submit Your Nomination", 
    desc: "Share your story or nominate a deserving leader, organization, or partner.",
    subtext: "(Nominations open: March 1 – April 15, 2025)",
    bgColor: "bg-[#FFD166]", 
    textColor: "text-black",
    numberColor: "text-black/10"
  },
  { 
    step: "02", 
    title: "Review & Shortlisting", 
    desc: "A panel of accessibility experts, HR professionals, and community advocates will review all submissions.",
    subtext: null,
    bgColor: "bg-[#111827]", 
    textColor: "text-white",
    numberColor: "text-white/10"
  },
  { 
    step: "03", 
    title: "Finalists Announcement", 
    desc: "(May 2025) – Finalists will be featured on the Enabled Talent website and invited to the Awards Ceremony.",
    subtext: null,
    bgColor: "bg-[#111827]", 
    textColor: "text-white",
    numberColor: "text-white/10"
  },
  { 
    step: "04", 
    title: "Awards Ceremony & Celebration", 
    desc: "(June 2025) – Winners will be announced live at the Enabled Talent Global Summit.",
    subtext: null,
    bgColor: "bg-[#111827]", 
    textColor: "text-white",
    numberColor: "text-white/10"
  }
];

// Helper for icons
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 bg-[#fff0e6] rounded-2xl flex items-center justify-center mb-6 shrink-0">
    {children}
  </div>
);

export default function AwardsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffbf0] text-gray-900">
      <Navbar />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

        body { font-family: 'Inter', sans-serif; }
        .serif-number { font-family: 'Playfair Display', serif; }

        .bg-cream { background-color: #fffbf0; }
        .bg-arch { background-color: #f6cf57; }

        h1, h2, h3 { font-weight: 800; letter-spacing: -0.02em; }
        h1 { line-height: 1.1; }
        
        .icon-orange-filter {
            filter: invert(57%) sepia(96%) saturate(2335%) hue-rotate(349deg) brightness(98%) contrast(96%);
        }

        .feature-pill {
            background: white; 
            padding: 10px 24px; 
            border-radius: 50px; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
            display: flex; align-items: center; gap: 12px;
            font-weight: 700; color: #4b5563; font-size: 0.9rem;
            width: fit-content; border: 1px solid #ffffff;
            transition: transform 0.2s;
        }
        .feature-pill:hover { transform: scale(1.02); }

        .stat-card {
            background: white; padding: 24px;
            border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border: 1px solid white; width: 260px;
        }

        .dots-pattern {
            background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
            background-size: 24px 24px;
        }
      `}</style>

      <main className="flex-grow">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-2 pb-0 relative overflow-hidden bg-[#fffbf0]">
           <div className="container mx-auto max-w-5xl text-center z-30 relative px-4 mb-0">
             <span className="text-xl font-semibold text-gray-900 mb-2 block">Enabled Talent Awards</span>
             <h1 className="text-5xl md:text-6xl lg:text-[72px] text-black mb-1">
                 Celebrating Inclusive <br/>
                 Leadership and Barrier-Free Workplaces
             </h1>
             <p className="text-lg font-medium text-gray-600">Where inclusion meets innovation.</p>
           </div>

           <div className="relative w-full max-w-[1400px] mx-auto h-[700px] mt-[-60px]">
             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[440px] h-[480px] bg-arch rounded-t-[220px] z-0"></div>
             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-[850px] flex justify-center items-end">
                <Image src="/awards-hero.png" alt="Woman celebrating inclusive leadership with a trophy" width={850} height={1050} className="object-contain drop-shadow-xl" priority />
             </div>
             <div className="hidden xl:flex flex-col absolute left-[2%] bottom-[300px] z-20 w-[300px]">
                <p className="text-gray-900 font-medium leading-relaxed text-sm">
                   The Enabled Talent Awards recognize employers, community partners, and changemakers who are redefining what accessibility and opportunity mean in today's workforce.
                </p>
             </div>
             <div className="hidden xl:block absolute left-[20%] bottom-[210px] z-20">
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-black opacity-80 rotate-[15deg]">
                   <path d="M 20 10 C 50 10, 50 40, 20 40 C 5 40, 5 15, 35 15 C 65 15, 75 70, 85 85" strokeWidth="2" strokeLinecap="round" fill="none" />
                   <path d="M 75 80 L 85 85 L 90 75" strokeWidth="2" strokeLinecap="round" />
                </svg>
             </div>
             <div className="hidden xl:flex flex-col gap-3 items-start absolute left-[26%] bottom-[80px] z-30">
                   <div className="feature-pill"><span className="text-[#F36D21] text-lg">📚</span> 200+ Programs</div>
                   <div className="feature-pill"><span className="text-[#F36D21] text-lg">👥</span> Expert Instructors</div>
                   <div className="feature-pill"><span className="text-[#F36D21] text-lg">🎓</span> Certified Learning</div>
             </div>
             <div className="hidden xl:block absolute right-[8%] top-[140px] z-20">
                <div className="stat-card relative z-10">
                   <h3 className="text-4xl text-black mb-1">75k+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">Students Enrolled with us</p>
                   <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="w-10 h-10 rounded-full border-[2px] border-white overflow-hidden bg-gray-200">
                            <Image src={`/avatar-${i}.jpg`} alt="Student avatar" width={40} height={40} className="object-cover" />
                         </div>
                      ))}
                   </div>
                </div>
                <div className="absolute right-[-30px] bottom-[-50px] w-40 h-32 dots-pattern opacity-30 z-0"></div>
             </div>
           </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
             <div className="pr-8 order-2 lg:order-1">
                <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8 inline-block">About</span>
                <h2 className="text-4xl lg:text-5xl text-black mb-6">About the <span className="text-[#F36D21]">Awards</span></h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                   The Enabled Talent Awards honor individuals and organizations that go beyond compliance — creating workplaces that celebrate diversity, empower people of all abilities, and champion equitable access to meaningful work.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                   Through these awards, we shine a light on leaders who inspire change across Canada and beyond — in business, education, technology, and community development.
                </p>
             </div>
             <div className="w-full order-1 lg:order-2 mt-12 lg:mt-0 flex flex-row items-end justify-center lg:justify-end gap-6">
                <div className="relative w-[180px] md:w-[200px] h-[240px] md:h-[280px] rounded-[30px] overflow-hidden shadow-2xl bg-[#eecf58] shrink-0">
                  <Image src="/img-why-matters.jpg" alt="Background student" fill className="object-cover mix-blend-multiply opacity-90" />
                </div>
                <div className="relative w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-[40px] rounded-tl-[100px] overflow-hidden shadow-xl bg-gray-100 border-[8px] border-white shrink-0">
                  <Image src="/img-about-awards.jpg" alt="Blonde student foreground" fill className="object-cover" />
                </div>
             </div>
           </div>
        </section>

        {/* --- CATEGORIES SECTION --- */}
        <section id="categories" className="py-24 px-6 bg-[#fffbf0]">
           <div className="container mx-auto max-w-7xl">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awardCategories.map((cat, i) => (
                   <div key={i} className="flex flex-col items-start p-8 bg-white rounded-3xl border-2 border-transparent hover:border-[#F36D21] hover:shadow-xl transition-all duration-300">
                      <div className="mb-6 relative w-20 h-20">
                        <Image src={cat.imageSrc} alt={cat.title} fill className="object-contain icon-orange-filter" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4 leading-tight">{cat.title}</h3>
                      <p className="text-gray-500 text-base leading-relaxed">{cat.desc}</p>
                   </div>
                ))}
             </div>
           </div>
        </section>

        {/* --- NOMINATION PROCESS --- */}
        <section id="nominate" className="py-24 bg-white">
           <div className="container mx-auto max-w-7xl px-6 text-center mb-16">
             <h2 className="text-4xl font-extrabold">
                <span className="bg-gradient-to-r from-[#C2410C] to-[#F36D21] bg-clip-text text-transparent">Nomination</span>
                <span className="text-[#1f2937]"> Process</span>
             </h2>
           </div>
           <div className="w-full">
             <div className="grid md:grid-cols-4 min-h-[450px]">
                {nominationSteps.map((item, i) => (
                   <div key={i} className={`${item.bgColor} p-10 flex flex-col justify-start`}>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className={`text-lg font-bold ${item.textColor}`}>Step</span>
                        <span className={`serif-number text-8xl font-normal leading-none ${item.numberColor} translate-y-1`}>{item.step}</span>
                      </div>
                      <div className="relative z-10">
                        <h3 className={`text-xl font-bold mb-4 leading-snug ${item.textColor}`}>{item.title}</h3>
                        <p className={`text-sm leading-relaxed ${item.textColor} opacity-90`}>{item.desc}</p>
                        {item.subtext && <p className={`text-xs mt-6 font-semibold ${item.textColor}`}>{item.subtext}</p>}
                      </div>
                   </div>
                ))}
             </div>
           </div>
        </section>

        {/* --- WHY IT MATTERS --- */}
        <section className="py-24 px-6 bg-[#fffbf0]">
           <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
             <div className="w-full order-2 lg:order-1 flex flex-row items-end justify-center lg:justify-start gap-6">
                <div className="relative w-[180px] md:w-[200px] h-[240px] md:h-[280px] rounded-[30px] overflow-hidden shadow-2xl shrink-0">
                  <Image src="/img-about-awards.jpg" alt="Blonde professional woman" fill className="object-cover" />
                </div>
                <div className="relative w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-[40px] rounded-tl-[100px] overflow-hidden shadow-xl border-[8px] border-white shrink-0">
                  <Image src="/img-why-matters.jpg" alt="Man with glasses in striped shirt" fill className="object-cover" />
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="text-4xl text-black mb-6">Why It <span className="text-[#F36D21]">Matters?</span></h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">Every nomination tells a story of progress — of employers who open doors, educators empowering individuals, and people proving that talent has no limits.</p>
                <p className="text-lg text-gray-600 leading-relaxed">By recognizing these achievements, we're building momentum toward a more inclusive, accessible future of work.</p>
             </div>
           </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-5xl">
             <div className="bg-[#0f172a] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#facc15] opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block relative z-10">Who We Support</span>
                <h2 className="text-4xl md:text-5xl text-white mb-8 relative z-10">
                  Join the <span className="bg-gradient-to-r from-[#C2410C] to-[#F36D21] bg-clip-text text-transparent">Movement</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">Together, we can spotlight those shaping a world of work that includes everyone. Celebrate. Inspire.</p>
                <div className="flex justify-center gap-4 relative z-10">
                   <Link href="#nominate" className="bg-[#facc15] text-[#0f172a] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition focus:ring-4 focus:ring-yellow-300">Nominate Now</Link>
                </div>
             </div>
           </div>
        </section>

      </main>
      
      {/* THE GLOBAL FOOTER WITH A CUSTOM CTA TYPE:
         We pass 'ctaType="awards"' so the footer knows to render the 
         "Inclusive Success" text instead of the default "Start your journey".
      */}
      <Footer ctaType="awards" />
    </div>
  );
}