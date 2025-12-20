import Link from 'next/link'; // <--- Ensure Link is imported
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ... (keep imports)

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content area labeled for screen readers */}
      <main id="main-content" className="flex-grow container mx-auto p-8 max-w-5xl" role="main">
        
        {/* Hero Section */}
        <section className="text-center py-20 bg-gray-50 rounded-xl shadow-lg mb-12" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="text-5xl font-extrabold text-blue-800 mb-4">
            Bridging Talent and Opportunity
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connecting disabled job seekers (Mentees) with industry-leading professionals (Mentors) for career acceleration.
          </p>
          
          <div className="flex justify-center space-x-6">
            <Link 
              href="/talent" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md"
              aria-label="Learn more about becoming a mentee"
            >
              Become a Mentee
            </Link>
            <Link 
              href="/employers" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
              aria-label="Learn more about becoming a mentor"
            >
              Become a Mentor
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl font-bold text-center text-white-800 mb-10">
            Why Choose Enabled Talent?
          </h2>
          {/* ... rest of the section ... */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
