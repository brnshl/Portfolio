import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const tools = ['Figma', 'Vscode', 'Vercel', 'Capcut', 'Canva', 'GitHub'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function About() {
  return (
    <PageWrapper>
      <section style={styles.section}>
        <motion.div {...fadeUp(0)}>
          <div className="section-label">About</div>
        </motion.div>

        {/* Bio block */}
        <div style={styles.bioGrid}>
          <motion.div style={styles.imageCol} {...fadeUp(0.15)}>
            <div style={styles.imageFrame}>
              <div style={styles.imagePlaceholder}>
                <span style={styles.initials}>BI</span>
              </div>
            </div>
          </motion.div>

          <motion.div style={styles.textCol} {...fadeUp(0.25)}>
            <h2 style={styles.heading}>Hi, I'm BREAN IBAÑEZ</h2>
            <p style={styles.para}>
              I am a multi-disciplinary creative driven by a passion for visual
              storytelling. I live at the intersection of design, strategy, and
              technology—crafting digital experiences that don't just look good,
              but feel right.
            </p>
            <p style={styles.para}>
              Whether I'm designing a brand identity, cutting a fast-paced video,
              or building a sleek interface, my goal is always the same: to create
              impactful work that connects with people.
            </p>

            <div style={styles.tools}>
              {tools.map((t) => (
                <motion.span
                  key={t}
                  style={styles.toolBadge}
                  whileHover={{ borderColor: '#a020f0', color: '#c855ff' }}
                  transition={{ duration: 0.2 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Goals */}
        <div style={styles.cardsRow}>
          {[
            {
              title: 'Education',
              icon: '🎓',
              content:
                'Second-year college student pursuing a degree in Information Technology, with a focus on web development and UI/UX design.',
            },
            {
              title: 'Career Goals',
              icon: '🚀',
              content:
                'Aspiring to become a full-stack developer and creative director who bridges the gap between beautiful design and functional technology.',
            },
            {
              title: 'Interests',
              icon: '✨',
              content:
                "Passionate about open-source tools, video editing, graphic design, and building products that make people's lives easier and more enjoyable.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              style={styles.card}
              {...fadeUp(0.3 + i * 0.1)}
              whileHover={{ borderColor: 'rgba(160,32,240,0.5)', y: -4 }}
            >
              <div style={styles.cardIcon}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardText}>{card.content}</p>
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
  bioGrid: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: '3.5rem',
    alignItems: 'start',
    marginBottom: '4rem',
  },
  imageCol: {},
  imageFrame: {
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(160,32,240,0.25)',
    background: '#16102a',
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    minHeight: '280px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a1030, #2a1050)',
  },
  initials: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '4rem',
    fontWeight: 700,
    color: 'rgba(160,32,240,0.6)',
  },
  textCol: {},
  heading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.15,
    marginBottom: '1.25rem',
  },
  para: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.85rem',
    color: '#8878a8',
    lineHeight: 1.9,
    marginBottom: '1rem',
  },
  tools: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginTop: '1.5rem',
  },
  toolBadge: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.82rem',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '20px',
    padding: '6px 16px',
    color: '#b0a8c8',
    cursor: 'default',
    transition: 'all 0.2s',
  },
  cardsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#16102a',
    border: '1px solid rgba(160,32,240,0.15)',
    borderRadius: '16px',
    padding: '1.75rem',
    transition: 'all 0.3s ease',
  },
  cardIcon: { fontSize: '2rem', marginBottom: '0.75rem' },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#e0d8f8',
    marginBottom: '0.75rem',
  },
  cardText: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    color: '#7a6890',
    lineHeight: 1.7,
  },
};
