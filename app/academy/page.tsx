"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .text-purple-highlight { color: #7c3aed; }
        
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 32px; border-radius: 9999px; font-weight: 700;
          font-size: 1rem; transition: transform 0.2s ease; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); }
        .btn-dark { background-color: #0f172a; color: white; }
        .btn-outline { background-color: transparent; border: 2px solid #e5e7eb; color: #0f172a; }
        .btn-outline:hover { border-color: #0f172a; }

        .course-card {
           border: 1px solid #f3f4f6; border-radius: 24px; overflow: hidden;
           transition: all 0.3s ease; background: white;
        }
        .course-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border-color: #7c3aed; }
      `}</style>

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="bg-[#f5f3ff] pt-24 pb-20 px-6 rounded-b-[50px]">
           <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="order-2 lg:order-1">
                 <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">
                    Enabled Academy
                 </span>
                 <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-8 leading-tight">
                    Upskill for the <br/> <span className="text-purple-highlight">Future of Work</span>
                 </h1>
                 <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                    Access accessible courses, mentorship programs, and certifications designed to help you land your dream job.
                 </p>
                 <div className="flex gap-4">
                    <Link href="/register" className="btn-pill btn-dark">
                       Start Learning Free
                    </Link>
                 </div>
              </div>

              {/* Hero Image - Uses academy.jpg */}
              <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl order-1 lg:order-2 border-8 border-white">
                 <Image 
                    src="/academy.jpg" 
                    alt="Students learning together" 
                    fill 
                    className="object-cover"
                    priority 
                 />
              </div>
           </div>
        </section>

        {/* 2. COURSES SECTION */}
        <section className="py-24 px-6 bg-white">
           <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-extrabold text-black mb-4">Popular Learning Paths</h2>
                 <p className="text-gray-500">Curated curriculums to get you job-ready.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {/* Course 1 */}
                 <div className="course-card group">
                    <div className="h-48 bg-blue-50 relative flex items-center justify-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm">💻</div>
                    </div>
                    <div className="p-8">
                       <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Tech</span>
                       <h3 className="text-2xl font-bold text-black mt-2 mb-3">Full Stack Development</h3>
                       <p className="text-gray-600 mb-6 text-sm">Learn React, Node.js, and modern web architecture with accessible tools.</p>
                       <Link href="#" className="font-bold text-black underline decoration-2 hover:text-blue-600">View Curriculum</Link>
                    </div>
                 </div>

                 {/* Course 2 */}
                 <div className="course-card group">
                    <div className="h-48 bg-green-50 relative flex items-center justify-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm">📊</div>
                    </div>
                    <div className="p-8">
                       <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Data</span>
                       <h3 className="text-2xl font-bold text-black mt-2 mb-3">Data Analytics</h3>
                       <p className="text-gray-600 mb-6 text-sm">Master Excel, SQL, and Python to tell stories with data.</p>
                       <Link href="#" className="font-bold text-black underline decoration-2 hover:text-green-600">View Curriculum</Link>
                    </div>
                 </div>

                 {/* Course 3 */}
                 <div className="course-card group">
                    <div className="h-48 bg-orange-50 relative flex items-center justify-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm">🎨</div>
                    </div>
                    <div className="p-8">
                       <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Design</span>
                       <h3 className="text-2xl font-bold text-black mt-2 mb-3">UX/UI Design</h3>
                       <p className="text-gray-600 mb-6 text-sm">Design inclusive digital experiences that work for everyone.</p>
                       <Link href="#" className="font-bold text-black underline decoration-2 hover:text-orange-600">View Curriculum</Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. MENTORSHIP CTA */}
        <section className="py-20 px-6 bg-black text-white text-center">
           <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Learn from the Best</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                 Our mentorship program pairs you with industry leaders who provide guidance, career advice, and networking opportunities.
              </p>
              <Link href="/register" className="bg-[#facc15] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition">
                 Find a Mentor
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}