"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .hero-gradient { background: linear-gradient(180deg, #d94e33 0%, #e68d24 100%); }
        .event-card { transition: all 0.3s ease; }
        .event-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
      `}</style>

      <main className="flex-grow">
        {/* HERO */}
        <section className="hero-gradient pt-24 pb-12 px-6 rounded-b-[40px] text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Events</h1>
          <p className="text-white text-xl max-w-2xl mx-auto opacity-90">
            Join our community for launches, workshops, and networking.
          </p>
        </section>

        {/* LATEST EVENTS */}
        <section className="py-16 px-6">
           <div className="container mx-auto max-w-5xl">
              
              {/* Featured Event (From Video) */}
              <div className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 mb-12 event-card">
                 <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto bg-gray-200">
                        {/* You can use academy.png here as a placeholder for the launch event */}
                        <Image src="/academy.png" alt="Launch Event" fill className="object-cover" />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                       <span className="bg-[#d94e33] text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">LATEST NEWS</span>
                       <h2 className="text-3xl font-bold text-black mb-4">Enabled Talent Launches from Brampton</h2>
                       <p className="text-gray-600 mb-8 text-lg">
                          A historic milestone as we unveil our global platform connecting inclusive employers with diverse talent.
                       </p>
                       <div className="flex gap-4">
                          <Link href="#" className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition">Read Recap</Link>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Upcoming List */}
              <h3 className="text-2xl font-bold text-black mb-8">Upcoming Sessions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                 {/* Event 1 */}
                 <div className="bg-gray-50 p-6 rounded-[24px] border border-gray-100">
                    <span className="text-[#d94e33] font-bold text-sm block mb-2">OCT 24, 2025</span>
                    <h4 className="text-xl font-bold text-black mb-2">Inclusive Hiring 101</h4>
                    <p className="text-gray-500 text-sm mb-4">Webinar for Employers</p>
                    <Link href="#" className="text-black font-bold text-sm underline">Register Now</Link>
                 </div>
                 
                 {/* Event 2 */}
                 <div className="bg-gray-50 p-6 rounded-[24px] border border-gray-100">
                    <span className="text-[#d94e33] font-bold text-sm block mb-2">NOV 10, 2025</span>
                    <h4 className="text-xl font-bold text-black mb-2">Resume Workshop</h4>
                    <p className="text-gray-500 text-sm mb-4">Live Coaching for Talents</p>
                    <Link href="#" className="text-black font-bold text-sm underline">Register Now</Link>
                 </div>

                 {/* Event 3 */}
                 <div className="bg-gray-50 p-6 rounded-[24px] border border-gray-100">
                    <span className="text-[#d94e33] font-bold text-sm block mb-2">DEC 05, 2025</span>
                    <h4 className="text-xl font-bold text-black mb-2">Tech Innovator Summit</h4>
                    <p className="text-gray-500 text-sm mb-4">Networking Event</p>
                    <Link href="#" className="text-black font-bold text-sm underline">Register Now</Link>
                 </div>
              </div>

           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}