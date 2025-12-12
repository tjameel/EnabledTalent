import Link from 'next/link';
import Button from './Button'; // Importing our new button

export default function Navbar() {
  return (
    // Main navigation container
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <div className="text-xl font-bold">
          <Link href="/">EnabledTalent</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-200 transition">
              Contact
            </Link>
          </li>
          {/* Using a small button for a call to action if needed later */}
        </ul>
      </div>
    </nav>
  );
}