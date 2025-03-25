// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function Layout({ children, title = 'Poojith Reddy Annachedu' }) {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme-color');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme-color', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Poojith Reddy's Portfolio and Blog" />
        <link rel="icon" href="/assets/favicon/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/img/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="header">
        <div className="container">
          <div className="logo" data-aos-delay="200" data-aos="fade-down">
            {/* <Link href="/">Home</Link> */}
          </div>
          <nav className="nav">
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li className="services" data-aos-delay="200" data-aos="fade-down">
                <Link href="/#services">Skills</Link>
              </li>
              <li className="portfolios" data-aos-delay="250" data-aos="fade-down">
                <Link href="/#portfolios">Projects</Link>
              </li>
              <li className="experience" data-aos-delay="300" data-aos="fade-down">
                <Link href="/#experience">Experience</Link>
              </li>

              <li className="blog" data-aos-delay="350" data-aos="fade-down">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="education-skill mobile-link" data-aos-delay="350" data-aos="fade-down">
                <Link href="/#education">Education</Link>
              </li>
              <li className="contact mobile-link" data-aos-delay="350" data-aos="fade-down">
                <Link href="/#contact">Contact</Link>
              </li>
              <li className="mobile-link" data-aos-delay="350" data-aos="fade-down">
                <a href="/assets/PoojithResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
              <li data-aos-delay="400" data-aos="fade-down" className="more-links">
                <div className="more-links-icon">
                  <Icon name="more-links" />
                </div>
                <ul className="menu-list">
                  <li className="education-skill">
                    <Link href="/#education">Education</Link>
                  </li>
                  <li className="contact">
                    <Link href="/#contact">Contact</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="right-content" data-aos-delay="500" data-aos="fade-down">
            <div className="theme-color-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <Icon name="moon" /> : <Icon name="sun" />}
            </div>
            <a href="/assets/PoojithResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light download-resume">
              Resume
            </a>
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              <Icon name="menu" />
            </div>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="footer">
        <ul className="social-icons" data-aos="fade-up" data-aos-delay="50">
          <li>
            <a href="https://github.com/poojithreddy28" target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/poojith-reddy-annachedu/" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" />
            </a>
          </li>
        </ul>
        <p className="copyright" data-aos="fade-up" data-aos-delay="100">
          © {new Date().getFullYear()} - Poojith Reddy<span className="bold"> Annachedu</span>
        </p>
      </footer>
    </div>
  );
}