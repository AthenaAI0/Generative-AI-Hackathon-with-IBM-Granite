import { useState } from 'react';
import axios from 'axios';
const LandingPage = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [businessType, setBusinessType] = useState('');
    const [location, setLocation] = useState('');
    const [apiResponse, setApiResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            if (!businessType.trim() || !location.trim() || !prompt.trim()) {
                throw new Error('Lütfen tüm alanları doldurun');
            }

            const response = await axios.post('http://localhost:5000/business', {
                location: location,
                place_type: businessType,
                prompt: prompt
            });

            console.log(response);
            
            setApiResponse(response.data.results[0].generated_text);
        } catch (error) {
            console.error('Hata:', error);
            setApiResponse(error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        Grow Your Business
                    </h1>

                    {/* Question Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                                    What type of business would you like to open?
                                </label>
                                <textarea
                                    id="businessType"
                                    rows="2"
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    placeholder="Example: Coffee shop, restaurant, boutique store..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                    Where would you like to open your business?
                                </label>
                                <textarea
                                    id="location"
                                    rows="2"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Example: London City Center, New York Manhattan..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="businessQuery" className="block text-sm font-medium text-gray-700 mb-2">
                                    Tell us about your business and goals
                                </label>
                                <textarea
                                    id="businessQuery"
                                    rows="3"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Example: I run a coffee shop in London and want to open new branches. What strategy should I follow?"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isLoading || !prompt.trim() || !businessType.trim() || !location.trim()}
                                    className={`px-6 py-3 rounded-lg text-white font-medium ${
                                        isLoading || !prompt.trim() || !businessType.trim() || !location.trim()
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center space-x-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Processing...</span>
                                        </div>
                                    ) : 'Analyze'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Response and Suggestions Section */}
                    {apiResponse && (
                        <div className="space-y-6">
                            {/* Main Suggestion Card */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <span className="text-2xl">💡</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategy Suggestion</h3>
                                        <div className="prose max-w-none text-gray-700">
                                            <p className="whitespace-pre-wrap">{apiResponse}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="mt-4">
                                            <img 
                                                src="/London.jpg" 
                                                alt="Lyon" 
                                                className="w-full rounded-lg shadow-md"
                                            />
                                        </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
