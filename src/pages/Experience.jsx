import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const experiences = [
  {
    period: '2025–PRESENT',
    title: 'PUBLIC MATERIAL CREATOR',
    subtitle: 'Chairman, Multimedia Committee',
    location: 'QUEZON CITY, PH',
    type: 'organization',
    bullets: [
      'Led creation of publication materials for the school department',
      'Expertise in Canva and CapCut',
      'Managed and directed multimedia creative outputs',
    ],
  },
  {
    period: '2025',
    title: 'SHORT-FORM YOUTUBE VIDEO EDITOR',
    subtitle: 'Freelance',
    location: 'LONDON, UK',
    type: 'freelance',
    bullets: [
      'Edited 5 YouTube videos weekly using Descript and CapCut',
      'Created engaging animations and visual enhancements',
      'Researched YouTube automation strategies using Spotter Studio and ChatGPT',
      'Helped improve audience reach and viewer retention',
    ],
  },
  {
    period: '2022–2024',
    title: 'FREELANCE GRAPHIC ARTIST',
    subtitle: 'Freelance',
    location: 'QUEZON CITY, PH',
    type: 'freelance',
    bullets: [
      'Produced 5+ publish-ready materials daily',
      'Fast and efficient design workflow using Canva',
      'Delivered high-quality graphics with strong visual consistency',
    ],
  },
];

const typeColor = {
  organization: '#a020f0',
  freelance: '#ff6b35',
};

export default function Experience() {
  return (
    <PageWrapper>
      <section style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Experiences</div>
        </motion.div>

        <div style={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              style={styles.item}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
            >
              <div style={styles.period}>{exp.period}</div>

              <div style={styles.dot}>
                <motion.div
                  style={styles.dotInner}
                  animate={{ boxShadow: ['0 0 0px #a020f0', '0 0 10px #a020f0', '0 0 0px #a020f0'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
              </div>

              <div style={styles.content}>
                <div style={styles.titleRow}>
                  <h3 style={styles.jobTitle}>{exp.title}</h3>
                  <span style={styles.location}>{exp.location}</span>
                </div>
                <p style={{ ...styles.subtitle, color: typeColor[exp.type] || '#a020f0' }}>
                  {exp.subtitle}
                </p>
                <ul style={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={styles.bullet}>
                      <span style={styles.bulletArrow}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

const styles = {
  section: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '4rem 2rem 5rem',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    position: 'relative',
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '140px 24px 1fr',
    gap: '0 1.5rem',
    alignItems: 'start',
  },
  period: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.75rem',
    color: '#6b6080',
    paddingTop: '4px',
    letterSpacing: '0.05em',
    textAlign: 'right',
  },
  dot: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '6px',
  },
  dotInner: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#a020f0',
    flexShrink: 0,
  },
  content: { flex: 1 },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '0.35rem',
  },
  jobTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '0.02em',
  },
  location: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.75rem',
    color: '#6b6080',
    letterSpacing: '0.05em',
  },
  subtitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 600,
    marginBottom: '0.85rem',
  },
  bullets: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  bullet: {
    display: 'flex',
    gap: '0.6rem',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.88rem',
    color: '#8878a8',
    lineHeight: 1.6,
    alignItems: 'flex-start',
  },
  bulletArrow: { color: '#6b6080', flexShrink: 0 },
};
