import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-secondary-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-secondary-900">
              Candy<span className="text-primary-500">Tech</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-secondary-600 hover:text-primary-600 transition-colors font-medium">
              ホーム
            </Link>
            <Link to="/products" className="text-secondary-600 hover:text-primary-600 transition-colors font-medium">
              コンテンツ
            </Link>
            <Link to="/about" className="text-secondary-600 hover:text-primary-600 transition-colors font-medium">
              会社概要
            </Link>
            <Link to="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors font-medium">
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link 
                to="/products" 
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                コンテンツ
              </Link>
              <Link 
                to="/about" 
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link 
                to="/contact" 
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 