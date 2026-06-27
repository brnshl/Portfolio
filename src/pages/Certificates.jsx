import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const certs = [
  { title: 'Web Development Fundamentals', org: 'freeCodeCamp', date: '2024', emoji: '🌐', color: '#0a1428' },
  { title: 'Responsive Web Design', org: 'freeCodeCamp', date: '2024', emoji: '📱', color: '#0a1820' },
  { title: 'Figma UI Design Basics', org: 'Coursera', date: '2024', emoji: '🎨', color: '#1a0a28' },
  { title: 'Python for Beginners', org: 'Udemy', date: '2023', emoji: '🐍', color: '#0a1808' },
  { title: 'Digital Marketing Essentials', org: 'Google', date: '2023', emoji: '📊', color: '#1a1008' },
  { title: 'Video Editing Masterclass', org: 'Skillshare', date: '2023', emoji: '🎬', color: '#180a0a' },
];

export default function Certificates() {
  return (
    <PageWrapper>
      <section style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Certifications</div>
        </motion.div>

        <div style={styles.grid}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              style={{ ...styles.card, background: cert.color }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(160,32,240,0.5)', y: -4 }}
            >
              <div style={styles.cardTop}>
                <div style={styles.certEmoji}>{cert.emoji}</div>
                <span style={styles.date}>{cert.date}</span>
              </div>
              <h3 style={styles.certTitle}>{cert.title}</h3>
              <p style={styles.certOrg}>{cert.org}</p>
              <div style={styles.ribbon} />
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

const styles = {
  section: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '4rem 2rem 5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '20px',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  certEmoji: { fontSize: '2rem' },
  date: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.75rem',
    color: '#6b6080',
    letterSpacing: '0.05em',
  },
  certTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#e0d8f8',
    marginBottom: '0.4rem',
    lineHeight: 1.35,
  },
  certOrg: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.82rem',
    color: '#a020f0',
    fontWeight: 600,
  },
  ribbon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, transparent 50%, rgba(160,32,240,0.15) 50%)',
    borderRadius: '0 20px 0 0',
  },
};
