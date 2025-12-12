import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// About Page: Provides company information focused on the mission of inclusive mentorship.
// The structure is built with accessibility in mind (correct heading levels, contrast).
export default function About() {
  return (
    // Set min-height to ensure the footer sticks to the bottom on short pages
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8 max-w-4xl">
        {/* Main Header, using the required H1 tag for semantic structure */}
        <h1 className="text-4xl font-extrabold mb-8 text-blue-800 border-b pb-2">
          Our Mission: Accelerating Inclusive Careers
        </h1>

        {/* Section 1: Purpose - The core explanation of the platform */}
        <section className="mb-12" tabIndex={0}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Dedicated to Equitable Career Pathways
          </h2>
          {/* Using text-gray-600 for sufficient contrast */}
          <p className="text-gray-600 leading-relaxed mb-4">
            EnabledTalent is a focused mentorship application dedicated to creating equitable career pathways for disabled professionals. We connect high-potential individuals with established industry mentors who share a commitment to inclusion and professional development.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our platform provides structured guidance, skill-building opportunities, and a supportive community essential for accelerating careers in today's workforce.
          </p>
        </section>

        {/* Section 2: Core Focus - Highlights key aspects of the service */}
        <section className="mb-12">
          {/* Note: This H2 correctly follows the H1 above for proper screen-reader navigation */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Our Guiding Principles
          </h2>
          {/* Simple grid layout for responsiveness */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Accessibility First</h3>
              <p className="text-sm text-gray-500">
                The entire platform is built using Universal Design principles to ensure an intuitive and usable experience for all users.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Empowerment</h3>
              <p className="text-sm text-gray-500">
                We focus on matching mentees with mentors whose expertise directly aligns with their career goals for maximum impact.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Community</h3>
              <p className="text-sm text-gray-500">
                Fostering a network where both mentors and mentees can learn, grow, and advocate for inclusive workplaces.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}