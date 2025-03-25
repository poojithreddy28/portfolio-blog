import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Layout({ children, title = 'Poojith Reddy Annachedu' }) {
  const [theme, setTheme] = useState('light');
  
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

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Poojith Reddy's Portfolio and Blog" />
        <link rel="icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link href="/">
              Poojith
            </Link>
          </div>
          <nav className="nav">
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
            <div className="theme-color-toggle" onClick={toggleTheme}>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </div>
            <a href="/PoojithResume.pdf" target="_blank" className="btn btn-outline-light download-resume">Resume</a>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/poojithreddy28" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/poojith-reddy-annachedu/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="copyright">© {new Date().getFullYear()} - Poojith Reddy <span className="bold">Annachedu</span></p>
      </footer>
    </div>
  );
}