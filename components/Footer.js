export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/poojithreddy28" target="_blank" rel="noopener noreferrer">
              {/* GitHub icon */}
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/poojith-reddy-annachedu/" target="_blank" rel="noopener noreferrer">
              {/* LinkedIn icon */}
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="copyright">© <span className="year">{currentYear}</span> - Poojith Reddy<span className="bold"> Annachedu</span></p>
      </footer>
    );
  }