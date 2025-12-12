// Footer Component: Used on every public-facing page
export default function Footer() {
  // Using a consistent, dark background for a professional look and high contrast (accessibility)
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 shadow-inner">
      <div className="container mx-auto text-center">
        
        {/* Simple Navigation or quick links section */}
        <div className="flex justify-center space-x-6 mb-3 text-sm">
          {/* Using basic 'a' tags for simple navigation */}
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Use</a>
          <a href="/contact" className="hover:text-blue-400">Support</a>
        </div>
        
        {/* Copyright notice (Required element for a professional site) */}
        <p className="text-sm text-gray-400">
          &copy; 2025 EnabledTalent. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}