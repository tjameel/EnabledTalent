import Link from 'next/link'; // <--- Ensure Link is imported
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8 max-w-5xl">
        {/* Main Hero Section */}
        <section className="text-center py-20 bg-black-50 rounded-xl shadow-lg mb-12">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
            Bridging Talent and Opportunity
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connecting disabled job seekers (Mentees) with industry-leading professionals (Mentors) for career acceleration.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-6">
            
            {/* 1. BECOME A MENTEE BUTTON (Links to /talent) */}
            <Link 
              href="/talent" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Become a Mentee
            </Link>
            
            {/* 2. BECOME A MENTOR BUTTON (Links to /employers) */}
            <Link 
              href="/employers" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              Become a Mentor
            </Link>
            
          </div>
        </section>

        {/* ... rest of your home page content ... */}
        
      </main>

      <Footer />
    </div>
  );
}