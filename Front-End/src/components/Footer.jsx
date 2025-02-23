import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🤖</span>
              <span className="font-bold text-xl text-gray-800">AI Solutions</span>
            </div>
            <p className="text-gray-600 text-sm">
              AI-powered solutions for business growth and travel planning
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-600 hover:text-blue-600 text-sm">
                  Business Growth
                </Link>
              </li>
              <li>
                <Link to="/travel" className="text-gray-600 hover:text-blue-600 text-sm">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm flex items-center space-x-2">
                <span>📍</span>
                <span>123 Business Street, London</span>
              </li>
              <li className="text-gray-600 text-sm flex items-center space-x-2">
                <span>📧</span>
                <span>info@athena-ai.com</span>
              </li>
              <li className="text-gray-600 text-sm flex items-center space-x-2">
                <span>📱</span>
                <span>+44 (0) 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
