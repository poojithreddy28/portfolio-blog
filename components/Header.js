import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          {/* Logo content */}
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/#experience">Experience</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="right-content">
          <div className="theme-color-toggle">
            {/* Theme toggle */}
          </div>
          <a href="/assets/PoojithResume.pdf" target="_blank" className="btn btn-outline-light download-resume">Resume</a>
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Menu icon */}
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}