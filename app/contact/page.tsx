import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// The contact page layout, reusing the components we just created.
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Contact Us</h1>
        <p className="mb-6 text-white-700">Have questions? We'd love to hear from you.</p>
        
        {/* Simple form structure - no backend needed as per requirements [cite: 7] */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Message</label>
            <textarea className="w-full p-2 border rounded h-32" placeholder="How can we help?"></textarea>
          </div>
          {/* Wrap the button in a div and use the 'text-center' class to center content */}
          <div className="text-center">
            <button 
              type="button" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}