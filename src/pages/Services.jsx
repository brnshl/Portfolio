import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { SiHtml5, SiCss, SiJavascript, SiPython, SiMysql, SiFigma, SiCanva, SiDavinciresolve } from 'react-icons/si';
import { MdVideoLibrary, MdPhotoCamera } from 'react-icons/md';

const techStack = [
  { Icon: SiJavascript, name: 'JavaScript', color: '#f7df1e', bg: '#1a1810' },
  { Icon: SiCss, name: 'CSS3', color: '#264de4', bg: '#10121a' },
  { Icon: SiHtml5, name: 'HTML5', color: '#e34c26', bg: '#1a0e0a' },
  { Icon: SiMysql, name: 'SQL', color: '#4479a1', bg: '#0a1018' },
  { Icon: SiPython, name: 'Python', color: '#3776ab', bg: '#0a1015' },
];

const designTools = [
  { Icon: SiDavinciresolve, name: 'DaVinci', color: '#e8d5b7', bg: '#100e0a' },
  { Icon: MdVideoLibrary, name: 'CapCut', color: '#ffffff', bg: '#141414' },
  { Icon: SiFigma, name: 'Figma', color: '#f24e1e', bg: '#1a0e0a' },
  { Icon: MdPhotoCamera, name: 'Photoshop', color: '#31a8ff', bg: '#0a1018' },
  { Icon: SiCanva, name: 'Canva', color: '#00c4cc', bg: '#0a1618' },
];

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Building responsive, modern websites from scratch using the latest technologies and best practices.' },
  { icon: '⚡', title: 'Frontend Development', desc: 'Crafting pixel-perfect interfaces with smooth animations and optimal performance.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Designing intuitive user experiences and beautiful interfaces using Figma.' },
  { icon: '✏️', title: 'Graphic Design', desc: 'Creating compelling visual content for digital and print media using Canva and Photoshop.' },
];

function TechCard({ Icon, name, color, bg, index }) {
  return (
    <motion.div
      style={{ ...styles.techCard, background: bg }}
      initial={{ opacity: 0, y: 32, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ scale: 1.1, boxShadow: `0 0 24px ${color}55` }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon size={52} color={color} />
      </motion.div>
      <span style={styles.techName}>{name}</span>
    </motion.div>
  );
}

export default function Services() {
  return (
    <PageWrapper>
      <section style={styles.section}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="section-label">Services</div>
        </motion.div>

        <div style={styles.servicesGrid}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              style={styles.serviceCard}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(160,32,240,0.5)', y: -4 }}
            >
              <div style={styles.serviceIcon}>{s.icon}</div>
              <h3 style={styles.serviceTitle}>{s.title}</h3>
              <p style={styles.serviceDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={styles.stackSection}>
          <div className="section-divider">Tech Stack</div>
          <div style={styles.techRow}>
            {techStack.map((t, i) => <TechCard key={t.name} {...t} index={i} />)}
          </div>
        </div>

        <div style={styles.stackSection}>
          <div className="section-divider">Design and Media</div>
          <div style={styles.techRow}>
            {designTools.map((t, i) => <TechCard key={t.name} {...t} index={i} />)}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

const styles = {
  section: { maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem 5rem' },
  servicesGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem', marginBottom: '4rem',
  },
  serviceCard: {
    background: '#16102a', border: '1px solid rgba(160,32,240,0.15)',
    borderRadius: '16px', padding: '2rem', transition: 'all 0.3s ease',
  },
  serviceIcon: { fontSize: '2.2rem', marginBottom: '1rem' },
  serviceTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#e0d8f8', marginBottom: '0.6rem' },
  serviceDesc: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.88rem', color: '#7a6890', lineHeight: 1.7 },
  stackSection: { marginBottom: '3rem' },
  techRow: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' },
  techCard: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
    width: '130px', padding: '1.5rem 1rem', borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.07)', cursor: 'default', transition: 'all 0.3s ease',
  },
  techName: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#a020f0', letterSpacing: '0.05em', textTransform: 'uppercase' },
};
