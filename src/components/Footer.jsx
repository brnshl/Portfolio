export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 Brean Ibanez. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid rgba(160,32,240,0.12)',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    background: '#0a0612',
  },
  text: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.85rem',
    color: '#6b6080',
  },
};
