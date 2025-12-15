import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Employers Page: Focuses on the benefits for companies (Mentors).
export default function Employers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8 max-w-5xl">
        
        {/* Main Header */}
        <h1 className="text-4xl font-extrabold mb-8 text-indigo-800 border-b pb-2 text-center">
          Partner with Us: Invest in Inclusive Talent
        </h1>

        {/* Hero Section */}
        <section className="bg-indigo-50 p-8 rounded-lg shadow-md mb-12" tabIndex={0}>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700">
            The Strategic Advantage of Inclusive Mentorship
          </h2>
          <p className="text-lg text-gray-700">
            Engage your leaders as mentors and gain a direct pipeline to highly-skilled disabled professionals. Our program enhances your corporate social responsibility, boosts employee engagement, and solves talent shortages simultaneously.
          </p>
        </section>

        {/* Key Benefits Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Employer Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Benefit 1 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-green-600">Talent Pipeline</h3>
              <p className="text-gray-500">
                Pre-screened, motivated candidates with in-demand skills, ready to transition into your workforce.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-green-600">Leadership Development</h3>
              <p className="text-gray-500">
                Your employees gain valuable coaching and leadership skills as mentors.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-green-600">Enhanced Diversity Score</h3>
              <p className="text-gray-500">
                Demonstrate a commitment to DEI that resonates with customers and investors.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Button */}
        <div className="text-center pt-8 border-t">
          <button className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-indigo-700 transition shadow-lg">
            Request Partnership Details
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}