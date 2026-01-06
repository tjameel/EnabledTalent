"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Desktop dropdown state
  const pathname = usePathname();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !Object.values(dropdownRefs.current).some(ref => ref?.contains(event.target as Node))) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle keyboard navigation for dropdowns
  const handleDropdownKeyDown = useCallback((event: React.KeyboardEvent, itemName: string, hasDropdown: boolean) => {
    if (!hasDropdown) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setOpenDropdown(openDropdown === itemName ? null : itemName);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (openDropdown !== itemName) {
          setOpenDropdown(itemName);
        }
        // Focus first dropdown item
        const firstItem = dropdownRefs.current[itemName]?.querySelector('a');
        firstItem?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        setOpenDropdown(null);
        break;
    }
  }, [openDropdown]);

  // Handle keyboard navigation within dropdown menu
  const handleMenuItemKeyDown = useCallback((event: React.KeyboardEvent, itemName: string, currentIndex: number, totalItems: number) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (currentIndex < totalItems - 1) {
          const nextItem = dropdownRefs.current[itemName]?.querySelectorAll('a')[currentIndex + 1];
          nextItem?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentIndex > 0) {
          const prevItem = dropdownRefs.current[itemName]?.querySelectorAll('a')[currentIndex - 1];
          prevItem?.focus();
        } else {
          // Return focus to trigger button
          const triggerButton = dropdownRefs.current[itemName]?.previousElementSibling as HTMLElement;
          triggerButton?.focus();
          setOpenDropdown(null);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setOpenDropdown(null);
        const trigger = dropdownRefs.current[itemName]?.previousElementSibling as HTMLElement;
        trigger?.focus();
        break;
      case 'Tab':
        // Close dropdown when tabbing out
        if (event.shiftKey && currentIndex === 0) {
          setOpenDropdown(null);
        } else if (!event.shiftKey && currentIndex === totalItems - 1) {
          setOpenDropdown(null);
        }
        break;
    }
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white py-4 px-6 sticky top-0 z-50 border-b border-gray-100 font-sans"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-20 shrink-0" aria-label="Enabled Talent - Home">
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
        <div className="hidden xl:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 w-max" role="menubar">
          {navStructure.map((item) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isDropdownActive = openDropdown === item.name;
            const dropdownId = `dropdown-${item.name.replace(/\s+/g, '-').toLowerCase()}`;

            return (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                ref={(el) => { if (hasDropdown) dropdownRefs.current[item.name] = el; }}
              >
                {/* Top Level Link */}
                {hasDropdown ? (
                  <button
                    type="button"
                    className={`text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 ${pathname === item.href ? 'text-[#C0412C]' : 'text-gray-600 hover:text-[#C0412C]'
                      }`}
                    aria-expanded={isDropdownActive}
                    aria-haspopup="menu"
                    aria-controls={dropdownId}
                    onKeyDown={(e) => handleDropdownKeyDown(e, item.name, hasDropdown)}
                    onClick={() => setOpenDropdown(isDropdownActive ? null : item.name)}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdownActive ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 ${pathname === item.href ? 'text-[#C0412C]' : 'text-gray-600 hover:text-[#C0412C]'
                      }`}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div
                    id={dropdownId}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${isDropdownActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          role="menuitem"
                          tabIndex={isDropdownActive ? 0 : -1}
                          className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#C0412C] transition-colors text-left"
                          onKeyDown={(e) => handleMenuItemKeyDown(e, item.name, index, item.dropdown.length)}
                          onClick={() => setOpenDropdown(null)}
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
            <button
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
              aria-label="Select region: Global"
            >
              <Image src="/Rectangle 161124959.svg" alt="" width={20} height={20} aria-hidden="true" />
              <span>Global</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300" aria-hidden="true"></div>

          <Link href="/login" className="text-sm font-semibold text-black hover:text-[#C0412C] transition">Sign in</Link>
          <Link href="/register" className="text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition shadow-lg" style={{ background: '#182434' }}>
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          className="xl:hidden p-2 text-black z-20 ml-auto"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <div
          id="mobile-menu"
          className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 h-[calc(100vh-80px)] overflow-y-auto z-40"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          {navStructure.map((item) => (
            <div key={item.name} className="flex flex-col gap-3" role="none">
              <Link
                href={item.href}
                onClick={() => !item.dropdown && setIsOpen(false)}
                className="text-lg font-extrabold text-black"
                role="menuitem"
              >
                {item.name}
              </Link>

              {/* Mobile Sub-links */}
              {item.dropdown && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100" role="group" aria-label={`${item.name} options`}>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-gray-500 hover:text-[#C0412C]"
                      role="menuitem"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-4 pb-10 pt-4 border-t border-gray-100">
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#C0412C] text-center" role="menuitem">
              Login
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)} className="bg-black text-white py-3 rounded-full text-center font-bold" role="menuitem">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}