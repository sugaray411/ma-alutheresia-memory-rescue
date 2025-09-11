import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Ma AluTheresia Memory Rescue</h3>
                <p className="text-sm text-gray-300">Glitter of Hope Health Inc.</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong>Copyright Advisory:</strong> We appreciate your interest in our work! All content is protected by copyright and may not be reproduced without permission. If you'd like to share our work or collaborate, please contact us at nvengeeric@yahoo.com or 10312 Garson Terrace, Lanham, MD 20706. We'd be happy to discuss permissions or potential partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Programs & Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">240-310-5210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">nvengeeric@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  10312 Garson Terrace<br />
                  Lanham, MD 20706
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Supporting memory health and cardiovascular wellness in our community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
