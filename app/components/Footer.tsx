"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ ctaType = "default" }) {

   // Define social media links and their corresponding images
   const socialLinks = [
      {
         name: 'LinkedIn',
         src: '/02622749efaddb844bc28cb684f923b28254357a.png',
         href: '#'
      },
      {
         name: 'X',
         src: '/fcdb99cc61a3ae90aceab35eb48c1650f7437058.png',
         href: '#'
      },
      {
         name: 'Slack',
         src: '/3967632023d70e4ed0ef46f0fc2b5a648cc962c2.png',
         href: '#'
      },
      {
         name: 'YouTube',
         src: '/c2f9f5d51a6d4eb5545e422ae833d7cb422950f5.png',
         href: '#'
      }
   ];

   return (
      <footer className="relative w-full pt-32 pb-12 px-6 overflow-hidden bg-white">

         {/* 1. RAINBOW ROAD BACKGROUND (Covers everything) */}
         <div className="absolute inset-0 z-0">
            <Image
               src="/final-footer.png"
               alt="Rainbow Road Background"
               fill
               className="object-cover object-bottom"
            />
            {/* Strong white gradient at top, fading to show mountains at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 via-40% to-transparent"></div>
         </div>

         <div className="relative z-10 container mx-auto max-w-7xl flex flex-col items-center">

            {/* 2. DYNAMIC CTA SECTION */}
            <div className="text-center mb-24 max-w-4xl">

               {/* OPTION A: AWARDS PAGE TEXT */}
               {ctaType === "awards" ? (
                  <>
                     <h2
                        className="text-4xl md:text-5xl font-bold text-black mb-8 italic"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                     >
                        Inclusive Success <br />
                        Starts with a Conversation.
                     </h2>
                     <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Whether you're hiring, job-seeking, or building inclusion into your programs, we're here to help you turn purpose into progress.
                     </p>
                     <div className="flex justify-center">
                        <Link
                           href="/contact"
                           className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                           style={{
                              background: 'linear-gradient(90deg, #FFD071 0%, #EFB745 100%)',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                           }}
                        >
                           Sales demo
                           <span className="w-10 h-10 bg-[#E5A93D] rounded-full flex items-center justify-center">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                 <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                           </span>
                        </Link>
                     </div>
                  </>
               ) : (
                  /* OPTION B: DEFAULT / ACADEMY TEXT */
                  <>
                     <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-8">
                        Start Your Journey With <br />
                        Enabled Academy
                     </h2>
                     <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
                        Whether you're looking to grow your skills or build your team, Enabled Academy is here to help.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-8">
                        {/* Yellow Button - Join as a Talent */}
                        <Link
                           href="/register"
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: '0px 8px 0px 24px',
                              gap: '20px',
                              width: '240px',
                              height: '64px',
                              background: 'linear-gradient(90deg, #FFD071 0%, #EFB745 100%)',
                              borderRadius: '32px',
                              filter: 'drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16))',
                              textDecoration: 'none'
                           }}
                        >
                           <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '20px', lineHeight: '25px', color: '#000000' }}>Join as a Talent</span>
                           <span style={{
                              width: '48px',
                              height: '48px',
                              background: 'rgba(0, 0, 0, 0.16)',
                              borderRadius: '24px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                           }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#182434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </span>
                        </Link>
                        {/* Blue Button - Partner as an Employer */}
                        <Link
                           href="/contact"
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: '0px 8px 0px 24px',
                              gap: '20px',
                              width: '319px',
                              height: '64px',
                              background: 'linear-gradient(90deg, #2B476D 0%, #182434 100%)',
                              borderRadius: '32px',
                              filter: 'drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.16))',
                              textDecoration: 'none'
                           }}
                        >
                           <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '20px', lineHeight: '25px', color: '#FFFFFF' }}>Partner as an Employer</span>
                           <span style={{
                              width: '48px',
                              height: '48px',
                              background: 'rgba(255, 255, 255, 0.16)',
                              borderRadius: '24px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                           }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </span>
                        </Link>
                     </div>
                  </>
               )}
            </div>

            {/* 3. FOOTER LINKS CARD (Same for all pages) */}
            <div className="w-full bg-white/90 backdrop-blur-md rounded-[50px] p-12 md:p-20 shadow-xl border border-white/60">

               <div className="grid lg:grid-cols-2 gap-16 mb-16">
                  <div style={{ maxWidth: '500px' }}>
                     <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '40px', lineHeight: '52px', color: '#000000', marginBottom: '24px' }}>
                        Building Infrastructure<br />
                        <span style={{ whiteSpace: 'nowrap' }}>for meaningful employment</span>
                     </h2>
                     <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgba(0, 0, 0, 0.5)' }}>
                        Stay informed with cutting-edge AI insights, wellness innovation, and inclusive tech-driven hiring – connecting diverse talent with forward-thinking employers!
                     </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-6">
                     <div className="relative w-48 h-12">
                        <Image src="/enabled-talent-logo.png" alt="Enabled Talent" fill className="object-contain object-left lg:object-right" />
                     </div>

                     {/* Social Media Icons Section */}
                     <div className="flex gap-4">
                        {socialLinks.map((social) => (
                           <Link
                              key={social.name}
                              href={social.href}
                              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition relative overflow-hidden"
                              aria-label={social.name}
                           >
                              <div className="relative w-6 h-6">
                                 <Image
                                    src={social.src}
                                    alt={social.name}
                                    fill
                                    className="object-contain"
                                 />
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>

               <hr className="border-gray-100 mb-16" />

               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {/* Product */}
                  <div className="flex flex-col" style={{ gap: '0px' }}>
                     <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: '#000000', marginBottom: '32px' }}>Product</h4>
                     <Link href="/talent" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>For Talent</Link>
                     <Link href="/career-coach" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Career Coach</Link>
                     <Link href="/jobs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Enabled Jobs</Link>
                     <Link href="/ai-agent" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Enabled AI Agent</Link>
                     <Link href="/academy" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Enabled Academy</Link>
                     <Link href="/educators" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>For Educators</Link>
                     <Link href="/ngos" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>For NGOs</Link>
                     <Link href="/governments" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>For Governments</Link>
                  </div>
                  {/* Case Studies */}
                  <div className="flex flex-col" style={{ gap: '0px' }}>
                     <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: '#000000', marginBottom: '32px' }}>Case Studies</h4>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Durham</Link>
                  </div>
                  {/* Countries */}
                  <div className="flex flex-col" style={{ gap: '0px' }}>
                     <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: '#000000', marginBottom: '32px' }}>Countries</h4>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>EnabledAfrica</Link>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Spain</Link>
                  </div>
                  {/* Resources */}
                  <div className="flex flex-col" style={{ gap: '0px' }}>
                     <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: '#000000', marginBottom: '32px' }}>Resources</h4>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Blog</Link>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>FAQs</Link>
                  </div>
                  {/* Company */}
                  <div className="flex flex-col" style={{ gap: '0px' }}>
                     <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: '#000000', marginBottom: '32px' }}>Company</h4>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>About</Link>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Partners</Link>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Careers</Link>
                  </div>
                  {/* Legal */}
                  <div className="flex flex-col" style={{ gap: '0px' }}>
                     <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '30px', color: '#000000', marginBottom: '32px' }}>Legal</h4>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Privacy policy</Link>
                     <Link href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.5)', textDecoration: 'none' }}>Terms of service</Link>
                  </div>
               </div>

               <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                  <p>© 2025 Enabled Talent. All rights reserved.</p>
               </div>

            </div>
         </div>
      </footer>
   );
}