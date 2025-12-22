"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'For Talents', href: '/talent' }, // <--- FIXED: Points to /talent now
    { name: 'Enabled Academy', href: '/academy' },
    { name: 'Programs & Awards', href: '/programs' },
    { name: 'For Employers', href: '/employers' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 border-b border-gray-100 font-sans">
      <div className="container mx-auto flex justify-between items-center relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-20">
           <div className="relative w-40 h-10 md:w-48 md:h-12">
             <Image 
               src="/enabled-talent-logo.png" 
               alt="Enabled Talent" 
               fill
               className="object-contain object-left"
               priority
             />
           </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-[#d94e33]' : 'text-black hover:text-[#d94e33]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4 z-20">
           <Link href="/register" className="text-sm font-bold text-black hover:text-[#d94e33] transition">Login</Link>
           <Link href="/register" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition">
             Get Started
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-black z-20">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 h-screen z-40">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-black border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/register" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#d94e33] pt-4">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}