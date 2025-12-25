"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EducatorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold text-black mb-6">For <span className="text-[#d94e33]">Educators</span></h1>
          <p className="text-xl text-gray-600 mb-10">Empower your students with the tools they need to succeed in the workforce.</p>
          <div className="bg-gray-50 p-10 rounded-[30px] border border-gray-100">
             <p className="text-gray-500 italic">Partnership Details Coming Soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}