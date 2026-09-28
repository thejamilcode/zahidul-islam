import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-badge">Z</div>
          <span>{personalInfo.name}</span>
        </a>

        <div className="navbar-right">
          {/* Navigation Links */}
          <nav className={`nav-menu ${isOpen ? 'open' : ''}`} role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme Switcher Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
