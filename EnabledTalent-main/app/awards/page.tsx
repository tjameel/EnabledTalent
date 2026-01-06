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

export default function AwardsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#fffbf0] text-gray-900 font-sans overflow-x-hidden">
      <Navbar />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

        body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; }
        .serif-number { font-family: 'Playfair Display', serif; }

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
            white-space: nowrap;
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

      <main className="flex-grow w-full" id="main-content">

        {/* --- HERO SECTION --- */}
        <section className="pt-24 md:pt-32 pb-0 relative overflow-hidden bg-[#fffbf0] w-full">
          <div className="container mx-auto max-w-5xl text-center z-30 relative px-6 mb-4 md:mb-0">
            <span
              className="text-[28px] font-semibold mb-4 block leading-[44px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'rgba(0, 0, 0, 0.88)' }}
            >
              Enabled Talent Awards
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-[72px] text-black mb-4 md:mb-6 font-extrabold leading-[1.26]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Celebrating Inclusive <br className="hidden md:block" />
              Leadership and Barrier-Free Workplaces
            </h1>
            <p
              className="text-[20px] font-normal text-black leading-[25px] mb-8 md:mb-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Where inclusion meets innovation.
            </p>
          </div>

          {/* HERO COMPOSITION WRAPPER */}
          {/* Mobile Layout - Simple and Readable */}
          <div className="block md:hidden px-6 mt-4">
            {/* Hero Image for Mobile */}
            <div className="relative w-full flex justify-center mb-4">
              <div className="relative w-[280px] h-[320px]">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-[#f6cf57] rounded-t-[100px] z-0"></div>
                <Image
                  src="/awards-hero.png"
                  alt="Woman celebrating inclusive leadership with a trophy"
                  fill
                  className="object-contain drop-shadow-xl z-10"
                  priority
                />
              </div>
            </div>

            {/* Floating Text for Mobile - Now Readable */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-6">
              <p className="text-black font-semibold text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                The Enabled Talent Awards recognize employers, community partners, and changemakers who are redefining what accessibility and opportunity mean in today's workforce.
              </p>
            </div>

            {/* Stats Card for Mobile */}
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">75k+</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Students Enrolled</p>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image src={`/avatar-${i}.jpg`} alt="Student avatar" width={32} height={32} className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Pills for Mobile - Using SVG */}
            <div className="flex justify-center">
              <Image
                src="/Group1000001645.svg"
                alt="200+ Programs, Expert Instructors, Certified Learning"
                width={280}
                height={197}
                className="w-full max-w-[280px] h-auto"
              />
            </div>
          </div>

          {/* Desktop Layout - Original Complex Composition */}
          <div className="hidden md:block relative w-full h-[450px] xl:h-[700px] mt-0 overflow-visible">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] transform md:scale-[0.55] xl:scale-100 origin-top transition-transform duration-300">

              {/* 1. Arch Background */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[440px] h-[480px] bg-arch rounded-t-[220px] z-0"></div>

              {/* 2. Hero Image (Center) */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-[850px] flex justify-center items-end">
                <Image
                  src="/awards-hero.png"
                  alt="Woman celebrating inclusive leadership with a trophy"
                  width={850}
                  height={1050}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {/* 3. Floating Text (Left) */}
              <div className="flex flex-col absolute left-[50px] bottom-[300px] z-20 w-[520px]">
                <p className="text-black font-semibold text-2xl leading-[36px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  The Enabled Talent Awards recognize employers, community partners, and changemakers who are redefining what accessibility and opportunity mean in today's workforce.
                </p>
              </div>

              {/* 4. Decorative Arrow (Left) */}
              <div className="block absolute left-[20%] bottom-[210px] z-20">
                <Image
                  src="/image 271.svg"
                  alt="Decorative pointing hand"
                  width={80}
                  height={80}
                  className="opacity-90"
                />
              </div>

              {/* 5. Feature Pills (Left Bottom) */}
              <div className="block absolute left-[26%] bottom-[80px] z-30">
                <Image
                  src="/Group1000001645.svg"
                  alt="200+ Programs, Expert Instructors, Certified Learning"
                  width={248}
                  height={174}
                />
              </div>

              {/* 6. Stat Card (Right Top) */}
              <div className="block absolute right-[8%] top-[140px] z-20">
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

              {/* 7. Braille Pattern (Bottom Right) */}
              <div className="absolute right-[-250px] bottom-[50px] z-10 opacity-10">
                <Image
                  src="/braille2.svg"
                  alt="Braille pattern decorative element"
                  width={733}
                  height={54}
                />
              </div>

            </div>
          </div>
        </section>


        {/* --- ABOUT SECTION --- */}
        <section className="py-16 md:py-24 px-6 bg-white w-full">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
            <div className="pr-0 lg:pr-8 order-2 lg:order-1 text-center lg:text-left">
              <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">About</span>
              <h2 className="text-3xl md:text-5xl text-black mb-6">About the <span className="text-[#F36D21]">Awards</span></h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                The Enabled Talent Awards honor individuals and organizations that go beyond compliance — creating workplaces that celebrate diversity, empower people of all abilities, and champion equitable access to meaningful work.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Through these awards, we shine a light on leaders who inspire change across Canada and beyond — in business, education, technology, and community development.
              </p>
            </div>

            {/* Images Grid */}
            <div className="w-full order-1 lg:order-2 flex flex-row items-end justify-center lg:justify-end gap-4 md:gap-6">
              <div className="relative w-[140px] md:w-[200px] h-[200px] md:h-[280px] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl bg-[#eecf58] shrink-0">
                <Image src="/img-why-matters.jpg" alt="Background student" fill className="object-cover mix-blend-multiply opacity-90" />
              </div>
              <div className="relative w-[180px] md:w-[320px] h-[300px] md:h-[450px] rounded-[30px] md:rounded-[40px] rounded-tl-[60px] md:rounded-tl-[100px] overflow-hidden shadow-xl bg-gray-100 border-[4px] md:border-[8px] border-white shrink-0">
                <Image src="/img-about-awards.jpg" alt="Blonde student foreground" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* --- CATEGORIES SECTION --- */}
        <section id="categories" className="py-16 md:py-24 px-6 bg-[#FDFCFB] w-full">
          <div className="container mx-auto max-w-7xl">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-[56px] font-bold leading-[71px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="text-black">Award </span>
                <span className="text-[#F36D21]">Categories</span>
              </h2>
            </div>

            {/* Categories Grid with Dotted Lines */}
            <div className="relative">
              {/* Dotted Line Separators */}
              <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 z-0">
                <Image src="/Line.svg" alt="" width={2} height={800} className="h-full object-cover" />
              </div>
              <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 z-0">
                <Image src="/Line.svg" alt="" width={2} height={800} className="h-full object-cover" />
              </div>

              {/* Categories Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                {/* Row 1: Categories 0, 1, 2 with staggered alignment */}
                {/* Category 1 - Top Left */}
                <div className="flex flex-col items-start p-6 lg:pt-0">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#FEEDEC] flex items-center justify-center">
                    <Image src={awardCategories[0].imageSrc} alt={awardCategories[0].title} width={32} height={32} className="object-contain icon-orange-filter" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{awardCategories[0].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{awardCategories[0].desc}</p>
                </div>

                {/* Category 2 - Top Center (offset down) */}
                <div className="flex flex-col items-start p-6 lg:pt-24">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#FEEDEC] flex items-center justify-center">
                    <Image src={awardCategories[1].imageSrc} alt={awardCategories[1].title} width={32} height={32} className="object-contain icon-orange-filter" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{awardCategories[1].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{awardCategories[1].desc}</p>
                </div>

                {/* Category 3 - Top Right (offset down more) */}
                <div className="flex flex-col items-start p-6 lg:pt-40">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#FEEDEC] flex items-center justify-center">
                    <Image src={awardCategories[2].imageSrc} alt={awardCategories[2].title} width={32} height={32} className="object-contain icon-orange-filter" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{awardCategories[2].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{awardCategories[2].desc}</p>
                </div>

                {/* Row 2: Categories 3, 4, 5 with staggered alignment */}
                {/* Category 4 - Bottom Left */}
                <div className="flex flex-col items-start p-6 lg:pt-0">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#FEEDEC] flex items-center justify-center">
                    <Image src={awardCategories[3].imageSrc} alt={awardCategories[3].title} width={32} height={32} className="object-contain icon-orange-filter" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{awardCategories[3].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{awardCategories[3].desc}</p>
                </div>

                {/* Category 5 - Bottom Center (offset down) */}
                <div className="flex flex-col items-start p-6 lg:pt-20">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#FEEDEC] flex items-center justify-center">
                    <Image src={awardCategories[4].imageSrc} alt={awardCategories[4].title} width={32} height={32} className="object-contain icon-orange-filter" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{awardCategories[4].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{awardCategories[4].desc}</p>
                </div>

                {/* Category 6 - Bottom Right (offset down more) */}
                <div className="flex flex-col items-start p-6 lg:pt-36">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#FEEDEC] flex items-center justify-center">
                    <Image src={awardCategories[5].imageSrc} alt={awardCategories[5].title} width={32} height={32} className="object-contain icon-orange-filter" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{awardCategories[5].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{awardCategories[5].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NOMINATION PROCESS --- */}
        <section id="nominate" className="py-16 md:py-24 bg-white w-full">
          <div className="container mx-auto max-w-7xl px-6 text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-[#C2410C] to-[#F36D21] bg-clip-text text-transparent">Nomination</span>
              <span className="text-[#1f2937]"> Process</span>
            </h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[auto] md:min-h-[450px]">
              {nominationSteps.map((item, i) => (
                <div key={i} className={`${item.bgColor} p-8 md:p-10 flex flex-col justify-start border-b md:border-b-0 md:border-r border-white/10 last:border-0`}>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-lg font-bold ${item.textColor}`}>Step</span>
                    <span className={`serif-number text-6xl md:text-8xl font-normal leading-none ${item.numberColor} translate-y-1`}>{item.step}</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className={`text-lg md:text-xl font-bold mb-4 leading-snug ${item.textColor}`}>{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${item.textColor} opacity-90`}>{item.desc}</p>
                    {item.subtext && <p className={`text-xs mt-6 font-semibold ${item.textColor}`}>{item.subtext}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY IT MATTERS --- */}
        <section className="py-16 md:py-24 px-6 bg-white w-full relative overflow-hidden">
          {/* Decorative Union2 SVG on the left */}
          <div className="absolute left-0 top-[60%] -translate-y-1/2 z-0 opacity-70">
            <Image
              src="/Union2.svg"
              alt=""
              width={180}
              height={340}
              className="object-contain"
            />
          </div>

          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Images Container */}
            <div className="w-full order-2 lg:order-1 flex flex-row items-center justify-center lg:justify-start relative">
              {/* First Image - Man with glasses */}
              <div className="relative z-20 w-[160px] h-[200px] md:w-[220px] md:h-[280px] rounded-[20px] overflow-hidden shadow-xl shrink-0">
                <Image src="/img-why-matters.jpg" alt="Man with glasses" fill className="object-cover" />
              </div>
              {/* Second Image - Woman with white border, tilted */}
              <div className="relative z-10 -ml-8 md:-ml-12 -mt-8 w-[160px] h-[200px] md:w-[220px] md:h-[280px] rounded-[20px] overflow-hidden shadow-xl border-[6px] border-white shrink-0 rotate-3">
                <Image src="/img-about-awards.jpg" alt="Woman smiling" fill className="object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2
                className="text-3xl md:text-4xl font-bold text-black mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Why It <span className="text-[#F36D21]">Matters?</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Every nomination tells a story of progress — of employers who open doors, educators who empower, and individuals who prove that talent has no limits.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                By recognizing these achievements, we're building momentum toward a more inclusive, accessible future of work — one where every person can thrive.
              </p>
            </div>
          </div>
        </section>

        {/* --- JOIN THE MOVEMENT CTA --- */}
        <section className="py-16 md:py-24 px-6 bg-white w-full">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-[#0f172a] rounded-[30px] md:rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#facc15] opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block relative z-10">Who We Support</span>
              <h2 className="text-3xl md:text-5xl text-white mb-8 relative z-10">
                Join the <span className="bg-gradient-to-r from-[#C2410C] to-[#F36D21] bg-clip-text text-transparent">Movement</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">Together, we can spotlight those shaping a world of work that includes everyone. Celebrate. Inspire.</p>
              <div className="flex justify-center gap-4 relative z-10">
                <Link href="#nominate" className="bg-[#facc15] text-[#0f172a] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition focus:ring-4 focus:ring-yellow-300 w-full sm:w-auto">Nominate Now</Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* GLOBAL FOOTER */}
      <Footer ctaType="awards" />
    </div>
  );
}