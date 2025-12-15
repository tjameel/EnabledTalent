import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // NEW LINK: Talent/Job Seekers Page
    { name: 'Find a Mentor', href: '/talent' }, 
    // NEW LINK: Employers/Mentors Page
    { name: 'Become a Partner', href: '/employers' }, 
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Site Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Enabled Talent
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button (For Employers) */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* The CTA button should link directly to the Employers/Partner page */}
            <Link 
              href="/employers" // Ensure this link is correct
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out shadow-md"
            >
              Start Mentoring
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}