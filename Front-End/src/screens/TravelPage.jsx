import { useState } from 'react';
import axios from 'axios';

const TravelPage = () => {
    const [message, setMessage] = useState('');
    const [location, setLocation] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await axios.post('http://localhost:5000/travel', {
                location: location,
                prompt: message
            });
            
            console.log(response);
            setApiResponse(response.data.results[0].generated_text);
        } catch (error) {
            console.error('Hata:', error);
            setApiResponse('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4"> 
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        New Startup
                    </h1>

                    {/* Query Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Location Input */}
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Enter your location..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Travel Query Input */}
                            <div>
                                <label htmlFor="travelQuery" className="block text-sm font-medium text-gray-700 mb-2">
                                    Describe your new startup plan
                                </label>
                                <textarea
                                    id="travelQuery"
                                    rows="3"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="I have 100 cows in the village of Bibury, Gloucestershire, I am trying to run a dairy farm, what would you recommend me?"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`px-6 py-3 rounded-lg text-white font-medium ${
                                        isLoading 
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
                                    ) : 'Create Plan'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Responses and Suggestions Section */}
                    <div className="space-y-6">
                        {apiResponse && (
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <span className="text-2xl">💼</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Startup Recommendation</h3>
                                        <div className="prose max-w-none text-gray-700">
                                            <p className="whitespace-pre-wrap">{apiResponse}</p>
                                        </div>
                                        <div className="mt-4">
                                            <img 
                                                src="/Lyon.jpg" 
                                                alt="Lyon" 
                                                className="w-full rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPage;
