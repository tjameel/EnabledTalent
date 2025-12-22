"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <style jsx global>{`
        .hero-bg { background: linear-gradient(180deg, #d94e33 0%, #e68d24 100%); }
        .dots-pattern {
          background-image: radial-gradient(rgba(255,255,255,0.5) 2px, transparent 2px);
          background-size: 16px 16px; height: 60px; width: 100%; margin-top: 3rem; opacity: 0.8;
        }
      `}</style>
      <main className="flex-grow">
        <section className="hero-bg pt-24 pb-0 px-6 rounded-b-[50px] relative">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">Enabled Academy</h1>
            <p className="text-white text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-95">Upskill with courses designed to help you grow your confidence and career.</p>
            <div className="dots-pattern w-full"></div>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
            <div className="bg-[#f0f9ff] p-10 rounded-[40px] border border-blue-100">
                <h3 className="text-3xl font-bold text-black mb-4">Skill Building</h3>
                <p className="text-gray-700 text-lg">Practical courses on digital skills, leadership, and workplace communication.</p>
            </div>
            <div className="bg-[#fffbeb] p-10 rounded-[40px] border border-orange-100">
                <h3 className="text-3xl font-bold text-black mb-4">Mentorship</h3>
                <p className="text-gray-700 text-lg">Get matched with industry leaders who can guide your professional journey.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}