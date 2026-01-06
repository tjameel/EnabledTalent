"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Desktop dropdown state
  const pathname = usePathname();

  // STRUCTURE: Grouped links for cleaner UI
  const navStructure = [
    {
      name: 'For Talent',
      href: '/talent', // Main link
      dropdown: [
        { name: 'Career Coach', href: '/career-coach' },
        { name: 'Enabled Jobs', href: '/jobs' },
        { name: 'AI Agent', href: '/ai-agent' },
        { name: 'Academy', href: '/academy' },
      ]
    },
    {
      name: 'Partners',
      href: '#', // Placeholder
      dropdown: [
        { name: 'Educators', href: '/educators' },
        { name: 'NGOs', href: '/ngos' },
        { name: 'Governments', href: '/governments' },
      ]
    },
    { name: 'Programs & Awards', href: '/awards' },
    { name: 'For Employers', href: '/employers' },
  ];

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 border-b border-gray-100 font-sans">
      <div className="container mx-auto flex justify-between items-center relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-20 shrink-0">
          <div className="relative w-36 h-10 md:w-44 md:h-12">
            <Image
              src="/enabled-talent-logo.png"
              alt="Enabled Talent"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP LINKS (Centered & Grouped) */}
        <div className="hidden xl:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 w-max">
          {navStructure.map((item) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isDropdownActive = openDropdown === item.name;

            return (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                {/* Top Level Link */}
                <Link
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 ${pathname === item.href ? 'text-[#C0412C]' : 'text-gray-600 hover:text-[#C0412C]'
                    }`}
                >
                  {item.name}
                  {hasDropdown && (
                    <svg className={`w-4 h-4 transition-transform ${isDropdownActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${isDropdownActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#C0412C] transition-colors text-left"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4 z-20 shrink-0">
          {/* Global Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition">
              <Image src="/Rectangle 161124959.svg" alt="Globe" width={20} height={20} />
              <span>Global</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300"></div>

          <Link href="/login" className="text-sm font-semibold text-black hover:text-[#C0412C] transition">Sign in</Link>
          <Link href="/register" className="text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition shadow-lg" style={{ background: '#182434' }}>
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-black z-20 ml-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU (Full Screen Overlay) */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 h-[calc(100vh-80px)] overflow-y-auto z-40">
          {navStructure.map((item) => (
            <div key={item.name} className="flex flex-col gap-3">
              <Link
                href={item.href}
                onClick={() => !item.dropdown && setIsOpen(false)}
                className="text-lg font-extrabold text-black"
              >
                {item.name}
              </Link>

              {/* Mobile Sub-links */}
              {item.dropdown && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-gray-500 hover:text-[#C0412C]"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-4 pb-10 pt-4 border-t border-gray-100">
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#C0412C] text-center">
              Login
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)} className="bg-black text-white py-3 rounded-full text-center font-bold">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}