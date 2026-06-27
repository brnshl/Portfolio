import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experiences' },
  { to: '/works', label: 'Works' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        style={styles.nav(scrolled)}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Link to="/" style={styles.logo}>
          <span style={styles.logoText}>&lt;/BRN&gt;</span>
        </Link>

        <div style={styles.links}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? '#c855ff' : '#b0a8c8',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          style={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    ...styles.mobileLink,
                    color: isActive ? '#c855ff' : '#ffffff',
                  })}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: scrolled ? 'rgba(10,6,18,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(160,32,240,0.15)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  }),
  logo: { display: 'flex', alignItems: 'center' },
  logoText: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '0.05em',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'color 0.2s',
    '@media (max-width: 768px)': { display: 'none' },
  },
  burger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    padding: '4px',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '280px',
    background: '#0f0a1e',
    borderLeft: '1px solid rgba(160,32,240,0.2)',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
    gap: '1rem',
  },
  mobileLink: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 600,
    display: 'block',
    padding: '0.5rem 0',
    transition: 'color 0.2s',
  },
};

// Inject responsive styles
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    nav a:not(.mobile-link) { display: none !important; }
    button[aria-label="Toggle menu"] { display: flex !important; }
  }
  @media (min-width: 769px) {
    button[aria-label="Toggle menu"] { display: none !important; }
  }
`;
document.head.appendChild(style);
