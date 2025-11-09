import React from "react";
import "../styles/Header.css";

interface HeaderProps {
  onNavClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const handleNavClick = (section: string) => {
    onNavClick(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">SR</span>
          </div>

          <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-links">
            <a
              href="https://github.com/shreyasraut0707"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.72a9.583 9.583 0 012.502.336c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.168 20 14.42 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/shreyas-raut-ba1103297"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M16.9 1.5H3.1C2.1 1.5 1.3 2.3 1.3 3.3v13.4c0 1 .8 1.8 1.8 1.8h13.8c1 0 1.8-.8 1.8-1.8V3.3c0-1-.8-1.8-1.8-1.8zM6.2 15.7H3.7V8h2.5v7.7zM4.95 6.8c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM16.3 15.7h-2.5v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-1 .4-1.2.8-.1.1-.1.3-.1.5v4h-2.5V8h2.4v1.1c.3-.5 1-1.2 2.4-1.2 1.8 0 3.1 1.2 3.1 3.7v4.1z" />
              </svg>
            </a>
            <a href="mailto:shreyasraut0007@gmail.com" className="social-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.5 2.5h15v11h-15zm0 0L10 8.5 17.5 2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1"
                />
              </svg>
            </a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
