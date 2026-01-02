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
    <footer className="relative w-full pt-32 pb-12 px-6 overflow-hidden bg-gray-50">
      
      {/* 1. RAINBOW ROAD BACKGROUND (Covers everything) */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/final-footer.png" 
            alt="Rainbow Road Background" 
            fill 
            className="object-cover object-bottom" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl flex flex-col items-center">
         
         {/* 2. DYNAMIC CTA SECTION */}
         <div className="text-center mb-24 max-w-4xl">
            
            {/* OPTION A: AWARDS PAGE TEXT */}
            {ctaType === "awards" ? (
                <>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-8">
                        Inclusive Success <br/> 
                        Starts with a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Conversation.</span>
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
                        Whether you're hiring, job-seeking, or building inclusion into your programs, we're here to help you turn purpose into progress.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold bg-[#0f172a] text-white hover:translate-y-[-2px] transition shadow-lg">
                            Sales demo
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </>
            ) : (
                /* OPTION B: DEFAULT / ACADEMY TEXT */
                <>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-8">
                        Start Your Journey With <br/> 
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d94e33] to-[#f59e0b]">Enabled Academy</span>
                    </h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
                        Whether you're looking to grow your skills or build your team, Enabled Academy is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/register" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold bg-[#facc15] text-[#0f172a] hover:translate-y-[-2px] transition shadow-lg">
                            Join as a Talent 
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold bg-[#0f172a] text-white hover:translate-y-[-2px] transition shadow-lg">
                            Partner as an Employer
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </>
            )}
         </div>

         {/* 3. FOOTER LINKS CARD (Same for all pages) */}
         <div className="w-full bg-white/90 backdrop-blur-md rounded-[50px] p-12 md:p-20 shadow-xl border border-white/60">
            
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
               <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                     Building Infrastructure <br/>
                     for <span className="text-gray-400">meaningful employment</span>
                  </h2>
                  <p className="text-lg text-gray-500 max-w-md">
                     Stay informed with cutting-edge AI insights, wellness innovation, and inclusive tech-driven hiring.
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

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
               <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-black mb-2">Product</h4>
                  <Link href="/talent" className="text-gray-500 hover:text-[#d94e33]">For Talent</Link>
                  <Link href="/career-coach" className="text-gray-500 hover:text-[#d94e33]">Career Coach</Link>
                  <Link href="/jobs" className="text-gray-500 hover:text-[#d94e33]">Enabled Jobs</Link>
                  <Link href="/ai-agent" className="text-gray-500 hover:text-[#d94e33]">Enabled AI Agent</Link>
                  <Link href="/academy" className="text-gray-500 hover:text-[#d94e33]">Enabled Academy</Link>
               </div>
               <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-black mb-2">Case Studies</h4>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">Durham</Link>
               </div>
               <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-black mb-2">Countries</h4>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">EnabledAfrica</Link>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">Spain</Link>
               </div>
               <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-black mb-2">Resources</h4>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">Blog</Link>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">FAQs</Link>
               </div>
               <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-black mb-2">Company</h4>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">About</Link>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">Partners</Link>
                  <Link href="#" className="text-gray-500 hover:text-[#d94e33]">Careers</Link>
               </div>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
               <p>© 2025 Enabled Talent. All rights reserved.</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <Link href="#" className="hover:text-black">Privacy policy</Link>
                  <Link href="#" className="hover:text-black">Terms of service</Link>
               </div>
            </div>

         </div>
      </div>
    </footer>
  );
}