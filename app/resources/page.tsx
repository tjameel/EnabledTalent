"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8 max-w-6xl" role="main">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-4">Resources</h1>
          <p className="text-xl text-black">Tools and guides to help you succeed in an inclusive workplace.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Resource 1: Accessibility Guides (TAN) */}
          <div className="bg-[#fff9f0] p-8 rounded-[40px] shadow-sm border border-orange-50 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Accessibility Guides</h3>
              <p className="text-black">Best practices for creating inclusive digital and physical environments.</p>
            </div>
          </div>

          {/* Resource 2: Mentorship Toolkits (BLUE) */}
          <div className="bg-[#f0f7ff] p-8 rounded-[40px] shadow-sm border border-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🧰</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Mentorship Toolkits</h3>
              <p className="text-black">Frameworks and templates to maximize the impact of your mentoring sessions.</p>
            </div>
          </div>

          {/* Resource 3: Career Prep (TAN) */}
          <div className="bg-[#fff9f0] p-8 rounded-[40px] shadow-sm border border-orange-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Career Prep</h3>
              <p className="text-black">Resume builders and interview tips specifically for disabled professionals.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}