import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const projects = [
  {
    title: 'Graduation Banner',
    desc: 'Custom graduation congratulatory banner for New Era University College of Education.',
    tags: ['Canva', 'Graphic Design', 'Print'],
    color: '#1a2060',
    emoji: '🎓',
    size: 'large',
  },
  {
    title: 'Brand Identity Pack',
    desc: 'Complete brand identity package including logo, color palette, and typography guidelines.',
    tags: ['Figma', 'UI Design', 'Branding'],
    color: '#1a1030',
    emoji: '🎨',
    size: 'medium',
  },
  {
    title: 'YouTube Thumbnails',
    desc: 'High-CTR thumbnail designs for tech and lifestyle YouTube channels.',
    tags: ['Photoshop', 'Design'],
    color: '#201010',
    emoji: '▶️',
    size: 'medium',
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio site built with React and Framer Motion.',
    tags: ['React', 'CSS3', 'Framer Motion'],
    color: '#0a1428',
    emoji: '💻',
    size: 'small',
  },
  {
    title: 'Social Media Kit',
    desc: 'Cohesive set of templates for Instagram, Facebook, and Twitter.',
    tags: ['Canva', 'Graphic Design'],
    color: '#101830',
    emoji: '📱',
    size: 'small',
  },
  {
    title: 'Video Edit Reel',
    desc: 'Short-form video editing showcase using CapCut and DaVinci Resolve.',
    tags: ['CapCut', 'DaVinci', 'Video'],
    color: '#181018',
    emoji: '🎬',
    size: 'small',
  },
  {
    title: 'Event Poster Series',
    desc: 'Set of promotional posters for school events and organizations.',
    tags: ['Canva', 'Print Design'],
    color: '#0a1800',
    emoji: '📣',
    size: 'small',
  },
];

export default function Works() {
  return (
    <PageWrapper>
      <section style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Works</div>
        </motion.div>

        <div style={styles.masonryGrid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

function ProjectCard({ project, index }) {
  const isLarge = project.size === 'large';
  const isMedium = project.size === 'medium';

  return (
    <motion.div
      style={{
        ...styles.card,
        background: project.color,
        gridColumn: isLarge ? 'span 1' : isMedium ? 'span 1' : 'span 1',
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(160,32,240,0.5)' }}
    >
      <div style={styles.cardImage}>
        <motion.div
          style={styles.cardEmoji}
          whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          {project.emoji}
        </motion.div>
        <div style={styles.overlay}>
          <motion.button
            style={styles.viewBtn}
            whileHover={{ background: '#a020f0' }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
        </div>
      </div>
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>{project.title}</h3>
        <p style={styles.cardDesc}>{project.desc}</p>
        <div style={styles.tags}>
          {project.tags.map(t => (
            <span key={t} style={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem 5rem',
  },
  masonryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  cardImage: {
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cardEmoji: {
    fontSize: '4rem',
    transition: 'all 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(10,6,18,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    '&:hover': { opacity: 1 },
  },
  viewBtn: {
    background: 'rgba(160,32,240,0.8)',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 24px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  cardBody: { padding: '1.25rem' },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#e0d8f8',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.82rem',
    color: '#7a6890',
    lineHeight: 1.6,
    marginBottom: '0.85rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
  tag: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.7rem',
    background: 'rgba(160,32,240,0.15)',
    border: '1px solid rgba(160,32,240,0.3)',
    borderRadius: '10px',
    padding: '3px 10px',
    color: '#a020f0',
  },
};

// Hover overlay fix
const overlayStyle = document.createElement('style');
overlayStyle.textContent = `
  .project-card:hover .card-overlay { opacity: 1 !important; }
`;
document.head.appendChild(overlayStyle);
