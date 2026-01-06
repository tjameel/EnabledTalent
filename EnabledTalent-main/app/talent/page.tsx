"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TalentPage() {
   return (
      <div className="min-h-screen flex flex-col bg-[#fffbf0] font-sans">
         <Navbar />

         <style jsx global>{`
        .text-highlight { color: #d94e33; }
        
        .btn-arrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px; border-radius: 9999px; font-weight: 700;
          transition: transform 0.2s ease;
        }
        .btn-arrow:hover { transform: translateX(4px); }
        .btn-dark { background-color: #0f172a; color: white; }
        
        .support-card {
           padding: 2.5rem; border-radius: 30px; background: white;
           border: 1px solid #f3f4f6; box-shadow: 0 10px 30px rgba(0,0,0,0.03);
           text-align: center; height: 100%; display: flex; flex-direction: column; align-items: center;
           transition: transform 0.3s ease;
        }
        .support-card:hover { transform: translateY(-5px); }
        
        .step-circle {
           width: 60px; height: 60px; border-radius: 50%; background: white;
           display: flex; align-items: center; justify-content: center;
           box-shadow: 0 4px 14px rgba(0,0,0,0.05); font-weight: 800; font-size: 1.25rem;
           margin-bottom: 1rem; color: #d97706;
        }
      `}</style>

         <main className="flex-grow" id="main-content" role="main">

            {/* 1. HERO SECTION (Yellow Card with "Confident Person Walking") */}
            <section className="pt-16 pb-24 px-6">
               <div className="container mx-auto max-w-5xl">
                  <div className="bg-[#facc15] rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-lg">
                     <div className="relative z-10 max-w-3xl mx-auto mb-32 md:mb-48"> {/* Added margin-bottom to make room for image overlap */}
                        <span className="font-bold tracking-[0.2em] text-black/70 uppercase text-sm mb-6 block">For Talents</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-10 leading-tight">
                           A Smarter <br /> Way to Get <br /> Hired
                        </h1>
                        <Link href="/register" className="btn-arrow btn-dark text-lg">
                           <span>Join Enabled Talent</span>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                     </div>

                     {/* Decorative Background Elements */}
                     <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  {/* HERO IMAGE: Confident Woman Walking */}
                  <div className="relative -mt-40 mx-auto max-w-4xl rounded-[40px] overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-8 border-white">
                     <Image
                        src="/talent-hero.png"
                        alt="Confident professional walking"
                        fill
                        className="object-cover object-top"
                        priority
                     />
                  </div>
               </div>
            </section>

            {/* 2. RECOGNITION SECTION (White BG) */}
            <section className="py-24 px-6 bg-white">
               <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

                  {/* Image: Woman in Wheelchair */}
                  <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-xl bg-gray-100 order-2 lg:order-1">
                     <Image
                        src="/img-train-phone.jpg                                                                                                                                                                                                                                                                                                                                                                                                       "
                        alt="Professional in wheelchair"
                        fill
                        className="object-cover"
                     />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-12 order-1 lg:order-2">
                     <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                           Your Journey Deserves <br /> <span className="text-highlight">Recognition</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                           At Enabled Talent, we believe in careers built on strength—not stigma. For professionals with disabilities, we offer more than opportunity. We offer a platform that sees you, supports you, and matches you with employers ready to champion your brilliance.
                        </p>
                     </div>

                     <div>
                        <h2 className="text-3xl font-extrabold text-black mb-4">
                           A Place where <span className="text-highlight">You Belong</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                           Here, you're not just applying. You're being welcomed into workplaces built to help you thrive. We only partner with employers who truly embrace difference.
                        </p>
                     </div>
                  </div>

               </div>
            </section>

            {/* 3. SUPPORT GRID (Cream BG) */}
            <section className="py-24 px-6 bg-[#fffbf0]">
               <div className="container mx-auto max-w-6xl">
                  <h2 className="text-4xl font-extrabold text-black text-center mb-16">
                     How we <span className="text-highlight">support you</span>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                     {/* Card 1 */}
                     <div className="support-card group">
                        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">Career Advancement</h3>
                        <p className="text-gray-600 text-lg">Prepare your profile to highlight your skills and experience, allowing recruiters to discover your talent in context.</p>
                     </div>

                     {/* Card 2 */}
                     <div className="support-card group">
                        <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600 group-hover:scale-110 transition-transform">
                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">Precision Matching</h3>
                        <p className="text-gray-600 text-lg">Your data algorithmically pairs you with employers seeking your unique talents. Get matched to your preferences.</p>
                     </div>

                     {/* Card 3 */}
                     <div className="support-card group">
                        <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8 text-yellow-600 group-hover:scale-110 transition-transform">
                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">Complete Privacy</h3>
                        <p className="text-gray-600 text-lg">You control what information you share. Your privacy, dignity, and professional story are protected.</p>
                     </div>

                     {/* Card 4 */}
                     <div className="support-card group">
                        <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-purple-600 group-hover:scale-110 transition-transform">
                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">Professional Network</h3>
                        <p className="text-gray-600 text-lg">Connect with mentors and peers who understand your journey. Access resources tailored to your growth.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. HOW IT WORKS */}
            <section className="py-24 px-6 bg-white">
               <div className="container mx-auto max-w-5xl">
                  <h2 className="text-4xl font-extrabold text-black mb-16 text-center">How it <span className="text-[#d97706]">works</span></h2>

                  <div className="space-y-8">
                     {/* Step 1 */}
                     <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-8 md:p-12 rounded-[40px] hover:shadow-lg transition">
                        <div className="step-circle bg-white text-orange-600 shrink-0">1</div>
                        <div>
                           <h3 className="text-2xl font-bold text-black mb-3">Create Your Profile</h3>
                           <p className="text-gray-600 text-lg">Build a rich profile that highlights your skills and experience. Include your accommodation needs, work preferences, and career goals.</p>
                        </div>
                     </div>

                     {/* Step 2 */}
                     <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-8 md:p-12 rounded-[40px] hover:shadow-lg transition">
                        <div className="step-circle bg-white text-blue-600 shrink-0">2</div>
                        <div>
                           <h3 className="text-2xl font-bold text-black mb-3">Set Your Preferences</h3>
                           <p className="text-gray-600 text-lg">Define career goals, preferred work environments, and industry interests. Our smart filters ensure you see aligned opportunities.</p>
                        </div>
                     </div>

                     {/* Step 3 */}
                     <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-8 md:p-12 rounded-[40px] hover:shadow-lg transition">
                        <div className="step-circle bg-white text-green-600 shrink-0">3</div>
                        <div>
                           <h3 className="text-2xl font-bold text-black mb-3">Get Matched Precisely</h3>
                           <p className="text-gray-600 text-lg">Let our smart AI do the work. Get opportunities tailored to your preferences, with tools to help you shine.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. OPPORTUNITY AWAITS CTA */}
            <section className="py-24 px-6 bg-[#fffbf0] text-center">
               <div className="container mx-auto max-w-4xl">
                  <div className="mb-10 relative h-[300px] w-[300px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                     <Image
                        src="/interview.png"
                        alt="Interview success"
                        fill
                        className="object-cover"
                     />
                  </div>
                  <h2 className="text-5xl font-extrabold text-black mb-6">Your Next <br /><span className="text-[#d94e33]">Opportunity Awaits</span></h2>
                  <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                     Continue to grow with AI-driven resume optimization and personalized interview coaching. Connect with a community of peers.
                  </p>
                  <Link href="/register" className="btn-arrow btn-dark bg-black text-white px-10 py-5 rounded-full text-xl hover:bg-gray-800">
                     Get Started
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
               </div>
            </section>

         </main>
         <Footer />
      </div>
   );
}