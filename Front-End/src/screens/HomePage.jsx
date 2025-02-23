import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-4">
                    AI-Powered Solutions
                </h1>
                <p className="text-xl text-center text-gray-600 mb-8">
                    Choose the service that fits your needs
                </p>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Business Service Card */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="p-6">
                            <div className="text-4xl mb-4">💼</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                New Startup Planings
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Get AI-powered recommendations for your first business growth and location strategy.
                                <br />
                                What should I open?
                            </p>
                            
                            <button 
                                onClick={() => navigate('/travel')}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Grow Your Business
                            </button>
                        </div> 
                    </div>
 
                    {/* Travel Service Card */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="p-6">
                            <div className="text-4xl mb-4">✈️</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Expansion Planning 
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Discover personalized expansion recommendations and create your perfect itinerary.
                                <br />
                                Where should I open?
                            </p>
                         
                            <button 
                                onClick={() => navigate('/business')}
                                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                Expansion Planning 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Why Choose Our AI Solutions?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <BenefitCard 
                            icon="🎯"
                            title="Personalized"
                            description="Tailored recommendations based on your specific needs"
                        />
                        <BenefitCard 
                            icon="⚡"
                            title="Fast & Efficient"
                            description="Get instant insights and recommendations"
                        />
                        <BenefitCard 
                            icon="🤖"
                            title="AI-Powered"
                            description="Leveraging advanced AI technology for better results"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListItem = ({ text }) => (
    <li className="flex items-center text-gray-600">
        <span className="mr-2">•</span>
        {text}
    </li>
);

const BenefitCard = ({ icon, title, description }) => (
    <div className="text-center p-4">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

export default HomePage;

