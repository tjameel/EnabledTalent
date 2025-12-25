"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AwardsPage() {
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

        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 14px 32px; border-radius: 9999px; font-weight: 700;
          transition: all 0.2s ease; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .btn-blue { background-color: #0f172a; color: white; }
        .btn-yellow { background-color: #facc15; color: #0f172a; }
        
        .category-card {
            background: white; padding: 2rem; border-radius: 24px;
            border: 1px solid #f3f4f6; transition: all 0.3s ease;
        }
        .category-card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.08); transform: translateY(-5px); border-color: #fcd34d; }
      `}</style>

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="pt-24 pb-20 px-6 bg-cream relative overflow-hidden">
           {/* Background Decorations */}
           <div className="absolute top-0 right-0 w-[40%] h-full bg-[#fef3c7] rounded-bl-[200px] z-0"></div>
           
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="pt-10">
                 <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-8 leading-tight">
                    Celebrating Inclusive <br/> Leadership and <span className="text-gradient-orange">Barrier-Free Workplaces</span>
                 </h1>
                 <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    The Enabled Talent Awards recognize employers, community partners, and changemakers who are redefining what accessibility and opportunity mean in today's workforce.
                 </p>
                 <div className="flex gap-4">
                    <Link href="#nominate" className="btn-pill btn-blue">Nominate Now</Link>
                    <Link href="#categories" className="btn-pill bg-white text-black border-2 border-gray-200 hover:border-black">View Categories</Link>
                 </div>
              </div>

              {/* Hero Image with Floating Badge */}
              <div className="relative h-[600px] w-full flex items-center justify-center">
                 <div className="relative z-10 w-full h-full rounded-[50px] overflow-hidden shadow-2xl bg-white border-4 border-white">
                     <Image 
                        src="/awards-hero.png" 
                        alt="Award Winner" 
                        fill 
                        className="object-cover object-top" 
                        priority 
                     />
                 </div>

                 {/* "75k+ Students" Floating Badge */}
                 <div className="absolute top-10 right-[-20px] bg-white p-4 rounded-2xl shadow-xl z-20 flex flex-col items-start border border-gray-100 animate-bounce-slow">
                    <span className="text-2xl font-extrabold text-black">75k+</span>
                    <span className="text-xs text-gray-500 font-bold uppercase mb-2">Students Enrolled with us</span>
                    <div className="flex -space-x-3">
                       {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                             <Image src={`/avatar-${i}.jpg`} alt="Student" fill className="object-cover" />
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 2. ABOUT THE AWARDS */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide mb-6 inline-block">About</span>
                 <h2 className="text-4xl font-extrabold text-black mb-6">About the <span className="text-gradient-orange">Awards</span></h2>
                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    The Enabled Talent Awards honor individuals and organizations that go beyond compliance — creating workplaces that celebrate diversity, empower people of all abilities, and champion equitable access to meaningful work.
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed">
                    Through these awards, we shine a light on leaders who inspire change across Canada and beyond — in business, education, technology, and community development.
                 </p>
              </div>
              <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl bg-gray-100">
                  <Image src="/img-about-awards.jpg" alt="About the Awards" fill className="object-cover" />
              </div>
           </div>
        </section>

        {/* 3. AWARD CATEGORIES */}
        <section id="categories" className="py-24 px-6 bg-gray-50">
           <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-extrabold text-black">Award <span className="text-gradient-orange">Categories</span></h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                    { icon: "🏢", title: "Barrier-Free Workplace of the Year", desc: "Recognizing an employer that has demonstrated exceptional leadership in creating accessible, inclusive, and supportive work environments." },
                    { icon: "🤝", title: "Inclusive Employer of the Year", desc: "Honoring organizations that integrate accessibility into hiring, onboarding, and workplace culture — setting new standards for inclusion." },
                    { icon: "🌟", title: "Talent Leader of the Year", desc: "Celebrating an individual who has overcome barriers to employment and continues to advocate for greater inclusion in their field." },
                    { icon: "❤️", title: "Inclusive Partnership of the Year", desc: "Recognizing a partnership between NGOs, government bodies, and educational institutions that has created measurable opportunities." },
                    { icon: "🚀", title: "Innovative Learning & Upskilling Program", desc: "Highlighting programs that have successfully trained, mentored, or upskilled job seekers through inclusive design." },
                    { icon: "🎓", title: "Emerging Talent Award", desc: "For early-career professionals or students who exemplify resilience, creativity, and commitment to an inclusive future." }
                 ].map((cat, i) => (
                    <div key={i} className="category-card">
                       <div className="w-12 h-12 bg-[#fffbf0] rounded-full flex items-center justify-center text-2xl mb-6">{cat.icon}</div>
                       <h3 className="text-xl font-bold text-black mb-4">{cat.title}</h3>
                       <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. NOMINATION PROCESS */}
        <section id="nominate" className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-7xl">
              <h2 className="text-4xl font-extrabold text-black text-center mb-20">Nomination <span className="text-gradient-orange">Process</span></h2>
              
              <div className="grid md:grid-cols-4 gap-8 relative">
                 {/* Connecting Line */}
                 <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-100 z-0"></div>

                 {[
                    { step: "01", title: "Submit Your Nomination", desc: "Share your story or nominate a deserving leader, organization, or partner." },
                    { step: "02", title: "Review & Shortlisting", desc: "A panel of accessibility experts, HR professionals, and community advocates will review all submissions." },
                    { step: "03", title: "Finalists Announcement", desc: "Finalists will be featured on the Enabled Talent website and invited to the Awards Ceremony." },
                    { step: "04", title: "Awards Ceremony", desc: "Winners will be announced live at the Enabled Talent Global Summit." }
                 ].map((item, i) => (
                    <div key={i} className="relative z-10 bg-white p-4">
                       <div className="w-16 h-16 bg-[#0f172a] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative">
                          <span className="text-[#facc15] text-[10px] font-bold uppercase absolute top-1 left-2">Step</span>
                          {item.step}
                       </div>
                       <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                       <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. WHY IT MATTERS */}
        <section className="py-24 px-6 bg-cream">
           <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl bg-white">
                  <Image src="/img-why-matters.jpg" alt="Why it Matters" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-4xl font-extrabold text-black mb-6">Why It <span className="text-gradient-orange">Matters?</span></h2>
                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Every nomination tells a story of progress — of employers opening doors, educators empowering individuals, and people proving that talent has no limits.
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed">
                    By recognizing these achievements, we're building momentum toward a more inclusive, accessible future of work — one where everyone can thrive.
                 </p>
              </div>
           </div>
        </section>

        {/* 6. JOIN THE MOVEMENT CTA */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-5xl">
              <div className="bg-dark-blue rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                 {/* Background Glow */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#facc15] opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                 
                 <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block relative z-10">Who We Support</span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 relative z-10">Join the <span className="text-[#facc15]">Movement</span></h2>
                 <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                    Together, we can spotlight those shaping a world of work that includes everyone. Celebrate. Inspire.
                 </p>
                 <Link href="#nominate" className="btn-pill btn-yellow text-lg relative z-10">
                    Nominate Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </Link>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}