"use client";
import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, X, Check } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [email, setEmail] = useState('');

  const categories = ['All', 'Trading Tips', 'Market Analysis', 'Education', 'News', 'Strategy'];

  const blogPosts = [
    {
      id: 1,
      title: 'Smart Investment Strategies for Beginners',
      excerpt: 'Learn the fundamentals of smart investing and how to build a diversified portfolio that works for your financial goals.',
      category: 'Education',
      author: 'John Smith',
      date: '2024-05-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Market Volatility in 2024',
      excerpt: 'Explore how market volatility affects your investments and strategies to navigate uncertain times.',
      category: 'Market Analysis',
      author: 'Sarah Johnson',
      date: '2024-05-25',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Top 10 Trading Mistakes to Avoid',
      excerpt: 'Common pitfalls that new traders face and how to avoid them for better trading success.',
      category: 'Trading Tips',
      author: 'Mike Chen',
      date: '2024-05-22',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Cryptocurrency vs Traditional Assets',
      excerpt: 'A comprehensive comparison between cryptocurrency investments and traditional asset classes.',
      category: 'Market Analysis',
      author: 'Emma Davis',
      date: '2024-05-20',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Risk Management in Binary Options',
      excerpt: 'Essential risk management techniques every binary options trader should know.',
      category: 'Strategy',
      author: 'David Wilson',
      date: '2024-05-18',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Market News: Federal Reserve Updates',
      excerpt: 'Latest updates from the Federal Reserve and their impact on global markets.',
      category: 'News',
      author: 'Lisa Anderson',
      date: '2024-05-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleSubscribe = () => {
    if (email.trim()) {
      setShowSubscriptionPopup(true);
      setEmail('');
    }
  };

  const closePopup = () => {
    setShowSubscriptionPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trading Insights & 
            <span className="text-emerald-400"> Market Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of the markets with expert insights, trading strategies, and educational content designed for smart investors.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full mr-3">
                    FEATURED
                  </span>
                  <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-emerald-400 cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar size={14} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <button className="mt-4 flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
                  Read More <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Get the latest trading insights and market analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Subscription Success Popup */}
      {showSubscriptionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-auto">
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 p-6 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                    <Check size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Subscribed!</h3>
                </div>
                <button
                  onClick={closePopup}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-4">
                Thank you for subscribing to our newsletter! You'll receive the latest trading insights and market analysis in your inbox.
              </p>
              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200"
              >
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;