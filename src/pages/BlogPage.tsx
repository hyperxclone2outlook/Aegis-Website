import { ArrowRight, Calendar, Clock, Search, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const articles = [
  {
    title: 'The Rise of AI-Powered Cyber Attacks',
    excerpt: 'Exploring how adversaries are leveraging artificial intelligence to create more sophisticated threats and how organizations can defend against them.',
    content: 'As artificial intelligence becomes more accessible, threat actors are using AI to automate attacks, create convincing phishing campaigns, and bypass traditional security measures...',
    category: 'Threat Intelligence',
    date: '2025-10-02',
    readTime: '8 min read',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Zero Trust Architecture: A Complete Guide',
    excerpt: 'Understanding the principles of Zero Trust security and implementing a comprehensive strategy for modern enterprises.',
    content: 'Zero Trust is not a product or service—it\'s a security paradigm that assumes no user, device, or network should be trusted by default...',
    category: 'Best Practices',
    date: '2025-09-28',
    readTime: '12 min read',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Quantum Computing and Cryptography',
    excerpt: 'Preparing your organization for the post-quantum era and implementing quantum-resistant encryption methods.',
    content: 'Quantum computers pose an existential threat to current encryption standards. Organizations must start preparing now for the quantum future...',
    category: 'Future Tech',
    date: '2025-09-25',
    readTime: '10 min read',
    gradient: 'from-purple-500 to-magenta-600',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Securing Cloud-Native Applications',
    excerpt: 'Best practices for implementing security in containerized environments and Kubernetes clusters.',
    content: 'Cloud-native security requires a shift in mindset from perimeter-based defense to container-level protection...',
    category: 'Best Practices',
    date: '2025-09-20',
    readTime: '9 min read',
    gradient: 'from-cyan-500 to-purple-600',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Advanced Persistent Threats: Detection and Response',
    excerpt: 'Identifying and mitigating APTs that evade traditional security controls through sophisticated tactics.',
    content: 'Advanced Persistent Threats represent some of the most dangerous cyber attacks, often remaining undetected for months...',
    category: 'Threat Intelligence',
    date: '2025-09-15',
    readTime: '11 min read',
    gradient: 'from-blue-500 to-magenta-600',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The Human Factor in Cybersecurity',
    excerpt: 'Understanding social engineering attacks and building a security-aware culture within your organization.',
    content: 'Despite advances in technology, humans remain the weakest link in cybersecurity. Training and awareness are critical...',
    category: 'Best Practices',
    date: '2025-09-10',
    readTime: '7 min read',
    gradient: 'from-magenta-500 to-pink-600',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Ransomware 2025: Evolution and Defense',
    excerpt: 'How ransomware attacks have evolved and comprehensive strategies to protect against them.',
    content: 'Ransomware has become more sophisticated, with attackers now using double and triple extortion tactics...',
    category: 'Threat Intelligence',
    date: '2025-09-05',
    readTime: '10 min read',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.pexels.com/photos/6266549/pexels-photo-6266549.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Implementing DevSecOps in Your Organization',
    excerpt: 'Integrating security into every stage of the development lifecycle for more secure applications.',
    content: 'DevSecOps shifts security left in the development process, making it everyone\'s responsibility...',
    category: 'Best Practices',
    date: '2025-08-30',
    readTime: '13 min read',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Supply Chain Security: Protecting Third-Party Risk',
    excerpt: 'Addressing the growing threat landscape of supply chain attacks and vendor security.',
    content: 'Supply chain attacks have increased dramatically, with attackers targeting the weakest link in the chain...',
    category: 'Threat Intelligence',
    date: '2025-08-25',
    readTime: '9 min read',
    gradient: 'from-purple-500 to-magenta-600',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = ['All', 'Threat Intelligence', 'Best Practices', 'Future Tech'];

export default function BlogPage() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-cyan-400">Insights & Intelligence</span>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
              Security Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Stay informed with the latest cybersecurity trends, threat analyses, and expert perspectives from the Aegis research team
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="mb-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 animate-fadeIn">
              <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-gray-800/50 border border-cyan-500/30 hover:border-cyan-400/50 text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="text-gray-400 mb-6">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No articles found matching your criteria</p>
          </div>
        )}

        <NewsletterSection />
      </div>
    </div>
  );
}

function ArticleCard({ article, index }: { article: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
        <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />

        <div className="aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative z-10 p-8 space-y-4">
          <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${article.gradient} rounded-full text-sm font-semibold`}>
            {article.category}
          </div>

          <h3 className="text-2xl font-bold leading-tight group-hover:text-cyan-400 transition-colors duration-300">
            {article.title}
          </h3>

          <p className="text-gray-300 leading-relaxed line-clamp-3">
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
  );
}

function NewsletterSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-magenta-500/10 backdrop-blur-sm border border-cyan-500/30 p-16 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-magenta-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 bg-clip-text text-transparent">
          Stay Informed
        </h2>
        <p className="text-lg text-gray-300">
          Subscribe to our newsletter for weekly security insights, threat intelligence, and best practices delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            {subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-sm text-gray-400">
          Join 10,000+ security professionals. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
