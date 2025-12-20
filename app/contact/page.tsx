"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <style>{`
        .btn-pill-submit {
          background-color: #2563eb !important;
          transition: all 0.3s ease !important;
          color: white !important;
        }
        .btn-pill-submit:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
        }
      `}</style>

      <main className="flex-grow container mx-auto p-8 max-w-3xl" role="main">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-black">Contact Us</h1>
        </header>

        <section className="bg-white p-10 rounded-[40px] shadow-lg border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-black mb-2">Full Name</label>
              <input type="text" className="w-full px-5 py-3 border border-gray-200 rounded-2xl text-black focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Email Address</label>
              <input type="email" className="w-full px-5 py-3 border border-gray-200 rounded-2xl text-black focus:ring-2 focus:ring-blue-500 outline-none" placeholder="jane@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Message</label>
              <textarea rows={4} className="w-full px-5 py-3 border border-gray-200 rounded-2xl text-black focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help?" required></textarea>
            </div>
            <button type="submit" className="btn-pill-submit w-full py-4 rounded-full text-lg font-bold shadow-md">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}