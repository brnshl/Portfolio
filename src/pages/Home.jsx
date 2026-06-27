import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiMailLine, RiDownloadLine } from 'react-icons/ri';
import PageWrapper from '../components/PageWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Home() {
  return (
    <PageWrapper>
      <section style={styles.hero}>
        {/* Radial bg glow */}
        <div style={styles.glow1} />
        <div style={styles.glow2} />

        <div style={styles.content}>
          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            10+ Project Completed
          </motion.div>

          <motion.p style={styles.greeting} {...fadeUp(0.2)}>
            Hi I'm
          </motion.p>

          <motion.h1 style={styles.name} {...fadeUp(0.3)}>
            BREAN
          </motion.h1>

          <motion.div style={styles.role} {...fadeUp(0.4)}>
            <span style={styles.roleSpan}>Web Deve</span>
            <span style={styles.roleAccent}>loper</span>
          </motion.div>

          <motion.p style={styles.tagline} {...fadeUp(0.5)}>
            Designing visuals and digital experiences that connect, inspire,<br />
            and leave impact.
          </motion.p>

          <motion.div style={styles.ctas} {...fadeUp(0.6)}>
            <Link to="/works" style={styles.btnPrimary}>
              View My Work <RiArrowRightLine />
            </Link>
            <Link to="/contact" style={styles.btnOutline}>
              <RiMailLine /> Lets Connect
            </Link>
            <a
              href="/resume.pdf"
              download="Brean_Ibanez_Resume.pdf"
              style={styles.btnOutline}
            >
              <RiDownloadLine /> Download CV
            </a>
          </motion.div>
        </div>

        {/* Floating profile image placeholder */}
        <motion.div
          style={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          animate2={{ y: [0, -14, 0] }}
        >
          <motion.div
            style={styles.imagePlaceholder}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div style={styles.imageInner}>
              <span style={styles.imageInitials}>BI</span>
            </div>
          </motion.div>
          <div style={styles.imageGlow} />
        </motion.div>
      </section>
    </PageWrapper>
  );
}

const styles = {
  hero: {
    minHeight: 'calc(100vh - 72px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4rem 2rem 4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    gap: '2rem',
  },
  glow1: {
    position: 'fixed',
    top: '-10%',
    right: '-5%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(120,20,180,0.35) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: -1,
  },
  glow2: {
    position: 'fixed',
    bottom: '-20%',
    right: '20%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(80,0,120,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: -1,
  },
  content: {
    flex: 1,
    maxWidth: '640px',
  },
  badge: {
    display: 'inline-block',
    border: '1px solid #a020f0',
    borderRadius: '20px',
    padding: '6px 16px',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.75rem',
    color: '#c855ff',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  },
  greeting: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    fontWeight: 400,
    color: '#e0d8f8',
    marginBottom: '0.25rem',
  },
  name: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(4rem, 10vw, 8rem)',
    fontWeight: 700,
    lineHeight: 0.9,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    marginBottom: '0.25rem',
  },
  role: {
    fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
    fontWeight: 600,
    marginBottom: '1.25rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.2em',
  },
  roleSpan: { color: '#c8bfe8' },
  roleAccent: { color: '#a020f0' },
  tagline: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
    color: '#8878a8',
    lineHeight: 1.7,
    marginBottom: '2.5rem',
  },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, #7b10d0, #a020f0)',
    border: 'none',
    borderRadius: '28px',
    padding: '14px 28px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 24px rgba(160,32,240,0.35)',
    cursor: 'pointer',
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'transparent',
    border: '1.5px solid rgba(255,255,255,0.3)',
    borderRadius: '28px',
    padding: '13px 24px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: '0.95rem',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  imageWrap: {
    position: 'relative',
    flexShrink: 0,
  },
  imagePlaceholder: {
    width: 'clamp(260px, 30vw, 380px)',
    height: 'clamp(260px, 30vw, 380px)',
    borderRadius: '28px',
    background: 'linear-gradient(135deg, #1a1030 0%, #2a1050 100%)',
    border: '1px solid rgba(160,32,240,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  imageInner: {
    width: '80%',
    height: '80%',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #a020f0 0%, #6010a0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  imageInitials: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '5rem',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.8)',
  },
  imageGlow: {
    position: 'absolute',
    inset: '-20px',
    borderRadius: '40px',
    background: 'radial-gradient(ellipse at center, rgba(160,32,240,0.2) 0%, transparent 70%)',
    zIndex: -1,
    pointerEvents: 'none',
  },
};
