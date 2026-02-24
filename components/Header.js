import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-toggle')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link href="/">Poojith</Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link href="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
            <li className="mobile-only"><Link href="/#education" onClick={() => setIsMenuOpen(false)}>Education</Link></li>
            <li className="mobile-only"><Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li className="more-links desktop-only">
              <div className="more-trigger">
                <Icon name="more-links" />
                <ul className="submenu">
                  <li><Link href="/#education">Education</Link></li>
                  <li><Link href="/#contact">Contact</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className="right-content">
          <button 
            className="mobile-menu-toggle" 
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle navigation menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}