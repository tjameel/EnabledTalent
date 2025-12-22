"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Column 1: Product */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-black mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-black transition">For Talent</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Career Coach</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Enabled Jobs</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Enabled AI Agent</Link></li>
              <li><Link href="/academy" className="text-gray-500 hover:text-black transition">Enabled Academy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">For Educators</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">For NGOs</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">For Governments</Link></li>
            </ul>
          </div>

          {/* Column 2: Blog & Resources */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
             <div className="mb-10">
                <h4 className="font-bold text-black mb-6 text-lg">Resources</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-gray-500 hover:text-black transition">Blog</Link></li>
                  <li><Link href="#" className="text-gray-500 hover:text-black transition">FAQs</Link></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-black mb-6 text-lg">Case Studies</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-gray-500 hover:text-black transition">Durham</Link></li>
                </ul>
             </div>
          </div>

          {/* Column 3: Countries */}
          <div>
            <h4 className="font-bold text-black mb-6 text-lg">Countries</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-black transition">EnabledAfrica</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Spain</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Canada</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Chile</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Hungary</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Kenya</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-bold text-black mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-500 hover:text-black transition">About</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Partners</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Careers</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Press</Link></li>
            </ul>
          </div>

           {/* Column 5: Legal */}
           <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-black mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Privacy policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Terms of service</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition">Do not sell my data</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-6">
           
           {/* Logo */}
           <div className="relative w-40 h-10">
              <Image 
                src="/enabled-talent-logo.png" 
                alt="Enabled Talent" 
                fill 
                className="object-contain object-left" 
              />
           </div>

           {/* Social Icons (Colored) */}
           <div className="flex gap-4">
              {/* LinkedIn (Blue) */}
              <a href="#" className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center text-white hover:opacity-90 transition">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Slack (White with colored icon) */}
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.042 15.123a2.52 2.52 0 0 1-2.52 2.52c-1.39 0-2.522-1.13-2.522-2.52 0-1.39 1.13-2.52 2.522-2.52h2.52v2.52ZM6.313 15.123a2.52 2.52 0 0 1 2.521-2.52 2.52 2.52 0 0 1 2.521 2.52v6.303a2.52 2.52 0 0 1-2.52 2.52c-1.39 0-2.522-1.13-2.522-2.52v-6.303ZM8.834 5.042a2.52 2.52 0 0 1-2.521-2.52A2.52 2.52 0 0 1 8.834 0c1.39 0 2.521 1.13 2.521 2.521v2.52h-2.521ZM8.834 6.313a2.52 2.52 0 0 1 2.521 2.521 2.52 2.52 0 0 1-2.52 2.521H2.522A2.52 2.52 0 0 1 0 8.834c0-1.39 1.13-2.521 2.522-2.521h6.312ZM18.956 8.834a2.52 2.52 0 0 1 2.522-2.521A2.52 2.52 0 0 1 24 8.834c0 1.39-1.13 2.521-2.522 2.521h-2.522V8.834ZM17.688 8.834a2.52 2.52 0 0 1-2.522 2.521 2.52 2.52 0 0 1-2.522-2.521V2.522A2.52 2.52 0 0 1 15.166 0c1.39 0 2.522 1.13 2.522 2.522v6.312ZM15.166 18.956a2.52 2.52 0 0 1 2.522 2.522c0 1.39-1.13 2.522-2.522 2.522a2.52 2.52 0 0 1-2.522-2.522v-2.522h2.522ZM15.166 17.688a2.52 2.52 0 0 1-2.522-2.522 2.52 2.52 0 0 1 2.522-2.522h6.312a2.52 2.52 0 0 1 2.522 2.522c0 1.39-1.13 2.522-2.522 2.522h-6.312Z" fill="#E01E5A"/>
                    <path d="M5.042 15.123a2.52 2.52 0 0 1-2.52 2.52c-1.39 0-2.522-1.13-2.522-2.52 0-1.39 1.13-2.52 2.522-2.52h2.52v2.52Z" fill="#36C5F0"/>
                    <path d="M18.956 8.834a2.52 2.52 0 0 1 2.522-2.521A2.52 2.52 0 0 1 24 8.834c0 1.39-1.13 2.521-2.522 2.521h-2.522V8.834Z" fill="#2EB67D"/>
                    <path d="M8.834 5.042a2.52 2.52 0 0 1-2.521-2.52A2.52 2.52 0 0 1 8.834 0c1.39 0 2.521 1.13 2.521 2.521v2.52h-2.521Z" fill="#ECB22E"/>
                 </svg>
              </a>
              {/* YouTube (Red) */}
              <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:opacity-90 transition">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              {/* X / Twitter (Black) */}
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-90 transition">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
           </div>

        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm font-medium">
           © 2025 Enabled Talent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}