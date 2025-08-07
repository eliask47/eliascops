import React, { useState } from 'react';
import { Menu, X, Home, Mail, Users, ArrowRight, Star, Shield, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#101010' }}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-800" style={{ backgroundColor: 'rgba(16, 16, 16, 0.8)' }}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white">ELIASCOPS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="flex items-center text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </a>
                <a href="#contact" className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
                <a href="#about" className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  <Users className="w-4 h-4 mr-2" />
                  About Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800" style={{ backgroundColor: '#101010' }}>
                <a href="#home" className="flex items-center text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </a>
                <a href="#contact" className="flex items-center text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
                <a href="#about" className="flex items-center text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                  <Users className="w-4 h-4 mr-2" />
                  About Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            ELIASCOPS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lead Generation That Drives More Cars To Your Front Steps.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We turn cold leads into booked clients. Proven lead generation and ad strategies built specifically for detailing, tint, wrap, and PPF shops.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600" style={{ backgroundColor: '#2a2a2a' }}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We don’t just run ads — we build full funnels designed to convert. Every click is tracked, every dollar optimized.
              </p>
            </div>
            
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600" style={{ backgroundColor: '#2a2a2a' }}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Built by marketers who know the auto industry inside and out. We help shops fill calendars and scale profitably.
              </p>
            </div>
            
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600" style={{ backgroundColor: '#2a2a2a' }}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Stay ahead of your competition with the latest in automation, targeting, and real-time data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16" style={{ backgroundColor: '#101010' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
               Built by marketers with years of experience scaling campaigns to multiple 6-figures in revenues, ELIASCOPS strives to streamline the lead generation process for you.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From innovating your marketing strategies to booking appointments, we handle the full marketing and lead generation process for you, A-Z.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="rounded-2xl p-8 border border-gray-600" style={{ background: 'linear-gradient(to bottom right, #2a2a2a, #1a1a1a)' }}>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EC</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Elias Kim</h3>
                <p className="text-gray-300">
                  Founder & CEO of ELIASCOPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn more about what package is right for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl shadow-lg border border-gray-600" style={{ backgroundColor: '#2a2a2a' }}>
              <h3 className="text-xl font-semibold text-white mb-4">Mobile Detailing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full stack lead generation services for mobile detailers who specialize in ceramic coatings.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="p-8 rounded-xl shadow-lg border border-gray-600" style={{ backgroundColor: '#2a2a2a' }}>
              <h3 className="text-xl font-semibold text-white mb-4">Auto Cosmetic Spas</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full stack lead generation services for automobile cosmetic spas who specialize in wraps, PPF, and tinting.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16" style={{ backgroundColor: '#101010' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            We'd love to work with you, regardless of how big or small your business is.
          </p>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Contact start@eliascops.com to book your free consultation call today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Contact Us
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ELIASCOPS</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              EST 2025.
            </p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 ELIASCOPS. All rights reserved. Customize this copyright notice as needed.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
