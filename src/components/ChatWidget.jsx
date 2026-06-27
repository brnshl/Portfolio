import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMessage2Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.wrapper}>
      <AnimatePresence>
        {open && (
          <motion.div
            style={styles.bubble}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <p style={styles.bubbleText}>👋 Hi! Want to work together?</p>
            <Link to="/contact" onClick={() => setOpen(false)} style={styles.bubbleBtn}>
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        style={styles.btn}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Brean"
      >
        {open ? <RiCloseLine size={20} /> : <RiMessage2Line size={18} />}
        {!open && <span style={styles.btnLabel}>Chat with Brean</span>}
      </motion.button>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.75rem',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(160,32,240,0.15)',
    border: '1px solid rgba(160,32,240,0.4)',
    borderRadius: '24px',
    padding: '10px 16px',
    color: '#ffffff',
    fontSize: '0.85rem',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    backdropFilter: 'blur(12px)',
    cursor: 'pointer',
  },
  btnLabel: { fontSize: '0.85rem' },
  bubble: {
    background: '#16102a',
    border: '1px solid rgba(160,32,240,0.3)',
    borderRadius: '12px',
    padding: '1rem 1.25rem',
    maxWidth: '220px',
    boxShadow: '0 8px 32px rgba(160,32,240,0.2)',
  },
  bubbleText: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    color: '#e0d8f8',
    marginBottom: '0.75rem',
    lineHeight: 1.5,
  },
  bubbleBtn: {
    display: 'block',
    background: 'linear-gradient(135deg, #a020f0, #c855ff)',
    borderRadius: '8px',
    padding: '8px 16px',
    textAlign: 'center',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#ffffff',
  },
};
