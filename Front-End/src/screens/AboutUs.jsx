import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Athena
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-Powered Business Analysis Platform Transforming the Business World
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Providing innovative solutions that maximize business potential by building 
              bridges between urban and rural areas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">💡</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Technology</h2>
            <p className="text-gray-600">
              Location-based analysis, customer profile assessment, and business success 
              prediction using IBM Granite infrastructure and AI technologies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">⚡</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Sustainable business models, inclusive economic growth, and 
              data-driven decision-making processes.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Location Analysis
                </h3>
                <p className="text-gray-600">
                  Detailed location analysis and business concept recommendations
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">🤖</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI Support
                </h3>
                <p className="text-gray-600">
                  AI-powered customer profile analysis
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">🌍</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Regional Analysis
                </h3>
                <p className="text-gray-600">
                  Assessment of urban and rural area opportunities
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Strategic Planning
                </h3>
                <p className="text-gray-600">
                  SWOT analysis and revenue model recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
