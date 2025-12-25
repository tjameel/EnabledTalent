"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobsPage() {
  
  // Mock Job Data
  const jobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Clari",
      location: "Remote (Canada)",
      type: "Full-time",
      salary: "$110k - $140k",
      tags: ["Screen Reader Friendly", "Flexible Hours"],
      posted: "2 days ago",
      logo: "C"
    },
    {
      id: 2,
      title: "Customer Success Manager",
      company: "Shopify",
      location: "Toronto, ON",
      type: "Full-time",
      salary: "$80k - $100k",
      tags: ["Wheelchair Accessible", "Neurodiverse Friendly"],
      posted: "5 hours ago",
      logo: "S"
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Telus",
      location: "Vancouver, BC",
      type: "Contract",
      salary: "$50/hr",
      tags: ["Remote", "Closed Captioning Meetings"],
      posted: "1 day ago",
      logo: "T"
    },
    {
      id: 4,
      title: "Accessibility Specialist",
      company: "RBC",
      location: "Montreal, QC",
      type: "Full-time",
      salary: "$90k - $120k",
      tags: ["Assistive Tech Provided", "Barrier-Free Office"],
      posted: "3 days ago",
      logo: "R"
    },
    {
      id: 5,
      title: "Human Resources Coordinator",
      company: "Enabled Talent",
      location: "Ottawa, ON",
      type: "Part-time",
      salary: "$30/hr",
      tags: ["Mentorship Program", "Inclusive Health Benefits"],
      posted: "Just now",
      logo: "E"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <style jsx global>{`
        .bg-cream { background-color: #fffbf0; }
        .bg-dark-blue { background-color: #0f172a; }
        
        .text-gradient-orange {
            background: linear-gradient(90deg, #d94e33 0%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 10px 24px; border-radius: 9999px; font-weight: 700; font-size: 0.9rem;
          transition: all 0.2s ease; text-decoration: none;
        }
        .btn-pill:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .btn-blue { background-color: #0f172a; color: white; }
        .btn-yellow { background-color: #facc15; color: #0f172a; }
        
        .job-card {
            border: 1px solid #f3f4f6; border-radius: 24px; padding: 24px;
            transition: all 0.2s ease; background: white; position: relative;
        }
        .job-card:hover { border-color: #facc15; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transform: translateY(-2px); }
        
        .tag {
            background: #fffbf0; color: #d94e33; padding: 6px 14px; border-radius: 50px;
            font-size: 0.75rem; font-weight: 700; display: inline-block;
        }
        
        /* Custom Checkbox */
        .custom-checkbox {
            accent-color: #d94e33; width: 18px; height: 18px; cursor: pointer;
        }
      `}</style>

      <main className="flex-grow bg-gray-50">
        
        {/* 1. SEARCH HERO */}
        <section className="bg-white pt-12 pb-16 px-6 border-b border-gray-100">
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Search Inputs */}
              <div>
                  <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">Enabled Jobs</span>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-8 leading-tight">
                     Find Meaningful, <br/> <span className="text-gradient-orange">Inclusive Work.</span>
                  </h1>
                  
                  {/* Search Box */}
                  <div className="bg-white p-2 rounded-[30px] shadow-2xl border border-gray-100 flex flex-col gap-2">
                     <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                        <span className="text-xl">🔍</span>
                        <input type="text" placeholder="Job title, keywords, or company" className="w-full outline-none text-gray-700 font-medium placeholder-gray-400 h-10" />
                     </div>
                     <div className="flex items-center gap-3 px-4 py-3">
                        <span className="text-xl">📍</span>
                        <input type="text" placeholder="City, province, or 'Remote'" className="w-full outline-none text-gray-700 font-medium placeholder-gray-400 h-10" />
                     </div>
                     <button className="bg-[#0f172a] text-white w-full py-4 rounded-[20px] font-bold hover:bg-[#d94e33] transition mt-2">
                        Search Jobs
                     </button>
                  </div>
              </div>

              {/* Right: Image (Handshake - Symbolizing Hiring) */}
              <div className="relative h-[500px] w-full hidden lg:block rounded-[50px] overflow-hidden shadow-2xl border-4 border-white">
                 <Image
                    src="/final-employer.jpg" 
                    alt="Hiring Agreement" 
                    fill 
                    className="object-cover object-center" 
                    priority
                 />
              </div>
           </div>
        </section>

        {/* 2. MAIN CONTENT (Sidebar + Job List) */}
        <section className="py-16 px-6">
           <div className="container mx-auto max-w-7xl grid lg:grid-cols-4 gap-10">
              
              {/* SIDEBAR FILTERS */}
              <div className="hidden lg:block lg:col-span-1 space-y-10">
                 <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-black mb-6 text-lg">Job Type</h3>
                    <div className="space-y-3">
                       {['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'].map(t => (
                          <label key={t} className="flex items-center gap-3 text-gray-600 text-sm cursor-pointer hover:text-black font-medium">
                             <input type="checkbox" className="custom-checkbox" />
                             {t}
                          </label>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-black mb-6 text-lg">Accessibility Features</h3>
                    <div className="space-y-3">
                       {['Remote First', 'Wheelchair Accessible', 'Screen Reader Friendly', 'Neurodiverse Inclusive', 'Closed Captioning', 'Assistive Tech Provided'].map(t => (
                          <label key={t} className="flex items-center gap-3 text-gray-600 text-sm cursor-pointer hover:text-black font-medium">
                             <input type="checkbox" className="custom-checkbox" />
                             {t}
                          </label>
                       ))}
                    </div>
                 </div>
              </div>

              {/* JOB LISTINGS */}
              <div className="lg:col-span-3 space-y-6">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-2xl text-black">Latest Opportunities</h2>
                    <span className="text-gray-500 font-medium">128 Jobs Found</span>
                 </div>

                 {jobs.map((job) => (
                    <div key={job.id} className="job-card flex flex-col md:flex-row gap-6 items-start md:items-center">
                       {/* Company Logo Placeholder */}
                       <div className="w-16 h-16 rounded-2xl bg-[#0f172a] text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                          {job.logo}
                       </div>
                       
                       {/* Job Info */}
                       <div className="flex-grow">
                          <h3 className="text-xl font-extrabold text-black mb-1 group-hover:text-[#d94e33] transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap gap-x-4 text-sm text-gray-500 mb-4 font-medium">
                             <span className="text-black">{job.company}</span>
                             <span className="text-gray-300">•</span>
                             <span>{job.location}</span>
                             <span className="text-gray-300">•</span>
                             <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-md">{job.salary}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                             {job.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                          </div>
                       </div>

                       {/* Action Button */}
                       <div className="flex flex-col items-end gap-3 min-w-max w-full md:w-auto mt-4 md:mt-0">
                          <Link href={`/jobs/${job.id}`} className="btn-pill btn-blue px-8 w-full md:w-auto text-center">
                             Apply Now
                          </Link>
                          <span className="text-xs text-gray-400 font-bold">{job.posted}</span>
                       </div>
                    </div>
                 ))}

                 <div className="pt-12 text-center">
                    <button className="btn-pill bg-white border-2 border-gray-200 text-gray-600 hover:border-black hover:text-black px-12 py-4 text-lg">
                       Load More Jobs
                    </button>
                 </div>
              </div>

           </div>
        </section>

        {/* 3. EMPLOYER CTA BANNER */}
        <section className="py-24 px-6">
           <div className="container mx-auto max-w-6xl bg-dark-blue rounded-[50px] p-12 md:p-20 flex flex-col-reverse md:flex-row items-center gap-16 relative overflow-hidden shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#d94e33] opacity-20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

              {/* Image: Woman Walking (Ready for work) */}
              <div className="w-full md:w-5/12 relative h-80 rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg transform rotate-[-3deg]">
                 <Image
                    src="/talent-hero.png" 
                    alt="Talent Ready" 
                    fill 
                    className="object-cover object-top" 
                 />
              </div>

              {/* Content */}
              <div className="w-full md:w-7/12 relative z-10 text-center md:text-left">
                 <span className="text-[#facc15] font-bold tracking-widest uppercase text-xs mb-4 block">For Employers</span>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Hiring? Find Talent That <br/> Drives <span className="text-[#facc15]">Innovation.</span></h2>
                 <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto md:mx-0">
                    Post your open roles to a community of qualified, diverse, and job-ready candidates.
                 </p>
                 <Link href="/employers" className="btn-pill btn-yellow text-lg px-10 py-4">
                    Post a Job for Free
                 </Link>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}