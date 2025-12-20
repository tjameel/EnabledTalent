import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

export default function Resources() {
  const articles = [
    { 
      title: "5 Tips for Writing an Accessible Resume", 
      date: "Dec 10, 2025", 
      summary: "Key formatting and content rules to ensure your resume passes accessibility checks and impresses recruiters.", 
      category: "Mentee Focus",
      icon: "📄"
    },
    { 
      title: "The Business Case for Inclusive Hiring", 
      date: "Dec 5, 2025", 
      summary: "Data-driven reasons why investing in disabled talent leads to stronger innovation and business results.", 
      category: "Employer Focus",
      icon: "📊"
    },
    { 
      title: "Mastering the Remote Interview Process", 
      date: "Nov 28, 2025", 
      summary: "Strategies for video interviews, platform accessibility, and communicating accommodation needs effectively.", 
      category: "Mentee Focus",
      icon: "💻"
    },
    { 
      title: "Leading with Empathy: A Mentor's Guide", 
      date: "Nov 20, 2025", 
      summary: "Practical advice for mentors on fostering an open, supportive, and effective mentoring relationship.", 
      category: "Mentor Focus",
      icon: "🤝"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content area with ARIA role for screen readers */}
      <main id="main-content" className="flex-grow container mx-auto p-8 max-w-5xl" role="main">
        
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 id="resources-heading" className="text-4xl font-extrabold mb-4 text-red-800 border-b-4 border-red-500 inline-block pb-2">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            Curated guides and tools to support inclusive career growth.
          </p>
        </header>

        {/* Article Grid labeled for accessibility */}
        <section aria-labelledby="resources-heading" className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="bg-white p-6 border-l-4 border-red-500 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl" aria-hidden="true">{article.icon}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${article.category.includes("Mentee") ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                  {article.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <time dateTime={article.date}>{article.date}</time>
                <Link 
                  href="/" 
                  className="text-red-600 font-semibold hover:text-red-700 focus:ring-2 focus:ring-red-500 rounded"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="text-center pt-8 border-t border-gray-200" aria-label="Call to action">
          <p className="text-lg text-gray-700 mb-6">
            Looking for more personalized support?
          </p>
          <Link 
            href="/talent" 
            className="inline-block bg-red-600 text-white px-10 py-3 rounded-lg text-lg font-bold hover:bg-red-700 transition shadow-md focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Find a Mentor
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}