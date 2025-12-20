"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Find a Mentor', href: '/talent' }, 
    { name: 'Become a Partner', href: '/employers' }, 
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm relative z-50" role="navigation" aria-label="Main Navigation">
      
      {/* 1. UPDATED CSS HOVER: Switched from Green to Figma Orange */}
      <style>{`
        .btn-nav-pill {
          background-color: #f59e0b !important; /* Figma Orange */
          transition: all 0.3s ease !important;
          color: white !important;
          text-decoration: none !important;
        }
        .btn-nav-pill:hover, .btn-nav-pill:active {
          background-color: #d97706 !important; /* Darker Orange for hover */
          cursor: pointer;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO: Actual image asset */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Enabled Talent Home">
              <Image
                src="/images/enabled-talent-logo.png"
                alt="Enabled Talent Logo"
                width={180}
                height={45}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* CENTERED LINKS: Gray text, Orange when active */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) 
                    ? 'text-[#f59e0b]' // Matches Figma active color
                    : 'text-gray-500 hover:text-[#f59e0b]' // Gray default
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 2. UPDATED CTA BUTTON: Now uses the Orange btn-nav-pill class */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/employers" 
              className="btn-nav-pill px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm"
            >
              Start Mentoring
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-500"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${isActive(link.href) ? 'text-[#f59e0b]' : 'text-gray-500'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link 
                href="/employers" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="btn-nav-pill block w-full text-center px-4 py-3 rounded-full text-base font-bold shadow-md"
              >
                Start Mentoring
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}