import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Talent Page: Focuses on the benefits and opportunities for Mentees (disabled professionals/job seekers).
export default function Talent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8 max-w-5xl">
        {/* Main Header */}
        <h1 className="text-4xl font-extrabold mb-8 text-blue-800 border-b pb-2 text-center">
          Mentee Success: Accelerate Your Career
        </h1>

        {/* Hero Section */}
        <section className="bg-green-50 p-8 rounded-lg shadow-md mb-12" tabIndex={0}>
          <h2 className="text-3xl font-semibold mb-4 text-green-700">
            Find Your Mentor, Define Your Future
          </h2>
          <p className="text-lg text-gray-700">
            Our mentorship program is specifically designed to overcome barriers and connect you with industry leaders who are committed to inclusive growth. Gain personalized support, refine your interview skills, and access exclusive job pipelines.
          </p>
        </section>

        {/* Core Benefits Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            What You Will Gain
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Benefit 1 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Personalized Guidance</h3>
              <p className="text-gray-500">
                Weekly one-on-one sessions tailored to your specific career trajectory and needs.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Skill Portfolio Review</h3>
              <p className="text-gray-500">
                Get expert feedback on your resume, LinkedIn, and portfolio from hiring managers.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Inclusive Job Network</h3>
              <p className="text-gray-500">
                Direct access to companies pre-vetted for their commitment to accessibility and inclusion.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Button */}
        <div className="text-center pt-8 border-t">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition shadow-lg">
            Apply to be a Mentee Today
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}