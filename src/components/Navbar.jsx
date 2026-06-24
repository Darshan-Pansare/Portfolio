import React, { useState } from 'react';
import { Database, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#achievements' },
  ];

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '0.75rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Brand Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem' }}>
        <Database size={24} color="var(--brand-primary)" />
        <span>Darshan<span className="gradient-text">.dev</span></span>
      </a>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }} className="nav-hover">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          style={{
            background: 'var(--bg-accent)',
            border: '1px solid var(--border-light)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            transition: 'var(--transition)'
          }}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} color="var(--brand-primary)" /> : <Moon size={18} color="var(--brand-secondary)" />}
        </button>

        <a href="#contact" className="btn-primary desktop-nav" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
          Contact
        </a>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-toggle"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="glass" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '0.5rem',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)' }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="btn-primary" 
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', textAlign: 'center', justifyContent: 'center' }}
          >
            Contact
          </a>
        </div>
      )}

      <style>{`
        .nav-hover:hover {
          color: var(--brand-primary) !important;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
