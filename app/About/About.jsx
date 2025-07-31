import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading the future of digital trading with innovative technology and intelligent investment solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              TRADE was founded with a simple yet powerful vision: to democratize financial trading and make sophisticated investment tools accessible to everyone. Since our inception, we've been at the forefront of financial technology innovation.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our platform combines cutting-edge technology with user-friendly design, enabling both novice and experienced traders to navigate the financial markets with confidence and precision.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we serve millions of users worldwide, providing them with the tools, resources, and support they need to achieve their financial goals.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Active Users</span>
                <span className="text-emerald-400 font-bold text-xl">2M+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Countries Served</span>
                <span className="text-emerald-400 font-bold text-xl">150+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Daily Transactions</span>
                <span className="text-emerald-400 font-bold text-xl">500K+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Years of Experience</span>
                <span className="text-emerald-400 font-bold text-xl">8+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower individuals worldwide with innovative trading technology, comprehensive education, and unwavering support, enabling them to make informed investment decisions and achieve financial independence.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the world's most trusted and innovative digital trading platform, setting new standards for accessibility, security, and user experience in the financial technology sector.
            </p>
          </div>
        </div>

        {/* Core Values */}
        </div>

        {/* Core Values - Breaking out of container for full width */}
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Security First
              </h3>
              <p className="text-gray-900">
                Your funds and data are protected by industry-leading security measures and encryption protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-900">
                We believe in complete transparency in our operations, pricing, and communication with our users.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-900">
                Continuous innovation drives us to develop cutting-edge solutions that exceed user expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
        {/* Team Section */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">John Davis</h3>
              <p className="text-emerald-400 mb-3">Chief Executive Officer</p>
              <p className="text-gray-300 text-sm">15+ years in fintech with expertise in digital transformation and strategic growth.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SK</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sarah Kim</h3>
              <p className="text-emerald-400 mb-3">Chief Technology Officer</p>
              <p className="text-gray-300 text-sm">Former Silicon Valley engineer with deep expertise in blockchain and trading systems.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MR</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Michael Rodriguez</h3>
              <p className="text-emerald-400 mb-3">Chief Financial Officer</p>
              <p className="text-gray-300 text-sm">Wall Street veteran with 20+ years experience in financial markets and risk management.</p>
            </div>
          </div>
        </div> */}

        {/* Platform Features */}
       {/* Platform Features */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose TRADE?</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-8">
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Low Minimum Deposit</h3>
      <p className="text-emerald-400 mb-3">Accessible Trading</p>
      <p className="text-gray-300 text-sm">Start trading with just $50 minimum deposit and begin your investment journey without breaking the bank.</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Fast Execution</h3>
      <p className="text-emerald-400 mb-3">Lightning Speed</p>
      <p className="text-gray-300 text-sm">Lightning-fast order execution in milliseconds ensures you never miss a trading opportunity in volatile markets.</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
      <p className="text-emerald-400 mb-3">Always Available</p>
      <p className="text-gray-300 text-sm">Round-the-clock customer support in multiple languages with dedicated experts ready to assist you anytime.</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Advanced Tools</h3>
      <p className="text-emerald-400 mb-3">Professional Grade</p>
      <p className="text-gray-300 text-sm">Professional-grade analytical and trading tools with cutting-edge technology for informed decision making.</p>
    </div>
  </div>
</div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-8 text-center mb-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
  <h2 className="text-3xl font-bold text-black mb-4">Ready to Start Trading?</h2>
  <p className="text-gray-600 mb-6 text-lg">Join millions of traders who trust TRADE for their investment journey</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/Registration" className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:from-emerald-500 hover:to-emerald-700 transition-all duration-300 inline-block">
      Create Free Account
    </a>
    <a href="/Registration" className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-colors inline-block">
      Try Demo Account
    </a>
  </div>
  <p className="text-gray-500 text-sm mt-4">* The minimum deposit amount to start real trading is 50 USD</p>
</div>
      </div>
    </div>
  );
};

export default About;