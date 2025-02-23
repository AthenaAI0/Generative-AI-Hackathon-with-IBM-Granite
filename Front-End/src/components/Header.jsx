import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const isActivePath = (path) => {
        return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl">🤖</span>
                        <span className="font-bold text-xl text-gray-800">AI Solutions</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`${isActivePath('/')} transition-colors duration-200`}>
                            Home
                        </Link>
                        <Link to="/business" className={`${isActivePath('/business')} transition-colors duration-200`}>
                             Expansion
                        </Link>
                        <Link to="/travel" className={`${isActivePath('/travel')} transition-colors duration-200`}>
                            New Startup
                        </Link>
                        <Link to="/about" className={`${isActivePath('/about')} transition-colors duration-200`}>
                            About Us
                        </Link>
                        <Link to="/contact" className={`${isActivePath('/contact')} transition-colors duration-200`}>
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2">
                        <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu (Hidden by default) */}
            <div className="md:hidden hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
                    <Link to="/business" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Business Growth</Link>
                    <Link to="/travel" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Travel</Link>
                    <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About Us</Link>
                    <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;






