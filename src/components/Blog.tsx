import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const articles = [
  {
    title: 'The Rise of AI-Powered Cyber Attacks',
    excerpt: 'Exploring how adversaries are leveraging artificial intelligence to create more sophisticated threats and how organizations can defend against them.',
    category: 'Threat Intelligence',
    date: '2025-10-02',
    readTime: '8 min read',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Zero Trust Architecture: A Complete Guide',
    excerpt: 'Understanding the principles of Zero Trust security and implementing a comprehensive strategy for modern enterprises.',
    category: 'Best Practices',
    date: '2025-09-28',
    readTime: '12 min read',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Quantum Computing and Cryptography',
    excerpt: 'Preparing your organization for the post-quantum era and implementing quantum-resistant encryption methods.',
    category: 'Future Tech',
    date: '2025-09-25',
    readTime: '10 min read',
    gradient: 'from-purple-500 to-magenta-600',
  },
];

export default function Blog() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              Insights & Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity trends, threat analyses, and expert perspectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

                <div className="relative z-10 p-8 space-y-6">
                  <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${article.gradient} rounded-full text-sm font-semibold`}>
                    {article.category}
                  </div>

                  <h3 className="text-2xl font-bold leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 pt-4 border-t border-cyan-500/20">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
            <span className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
