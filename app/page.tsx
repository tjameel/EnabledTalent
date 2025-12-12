import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// This is the main component for the Home Page. 
// It integrates the reusable Header (Navbar) and Footer components.
export default function Home() {
  return (
    // Set min-h-screen and flex-col to ensure the footer sticks to the bottom on short pages
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8">
        
        {/* Hero Section - The main welcoming area */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">Enabling Talent, Fostering Inclusion.</h1>
          <p className="text-lg text-gray-700 mb-8">
            Connecting skilled individuals with disabilities to mentorship and meaningful career opportunities.
          </p>
          {/* This button is a placeholder, demonstrating a Call to Action */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </section>

        {/* Feature/Overview Section - Focused on Mentor/Mentee Roles */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Section 1: For Mentors (Industry Leaders) */}
          <div className="p-8 border rounded-lg shadow-lg bg-black hover:shadow-xl transition duration-300" tabIndex={0}>
            <h2 className="text-2xl font-extrabold mb-3 text-blue-800" tabIndex={0}>
              For Mentors
            </h2>
            <p className="text-white-600 mb-4">
              Connect with high-potential disabled professionals. Share your expertise to shape an inclusive future workforce and find rewarding advisory roles.
            </p>
            {/* Using a secondary button style to differentiate from the main Hero CTA */}
            <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Become a Mentor
            </button>
          </div>

          {/* Section 2: For Mentees (Talent/Job Seekers) */}
          <div className="p-8 border rounded-lg shadow-lg bg-black hover:shadow-xl transition duration-300" tabIndex={0}>
            <h2 className="text-2xl font-extrabold mb-3 text-blue-800" tabIndex={0}>
              For Mentees
            </h2>
            <p className="text-white-600 mb-4">
              Gain personalized guidance, skill-building, and direct access to companies committed to inclusive hiring practices.
            </p>
            <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Find a Mentor
            </button>
          </div>
        </section>
        
        {/* Placeholder for future sections like Academy/Learning */}
      </main>

      <Footer />
    </div>
  );
}