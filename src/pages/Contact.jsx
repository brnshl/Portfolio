import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { RiMailLine, RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';
import PageWrapper from '../components/PageWrapper';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const contactInfo = [
  {
    Icon: RiMailLine,
    label: 'Email',
    value: 'brnsheinibanez@gmail.com',
    href: 'mailto:brnsheinibanez@gmail.com',
  },
  {
    Icon: RiLinkedinBoxLine,
    label: 'Linkedin',
    value: 'Brean Ibanez',
    href: 'https://linkedin.com/in/brean-ibanez',
  },
  {
    Icon: RiGithubLine,
    label: 'Github',
    value: 'breidev09',
    href: 'https://github.com/breidev09',
  },
];

export default function Contact() {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      toast.success('Message sent! I\'ll get back to you soon. 🚀');
      reset();
    } catch (err) {
      toast.error('Failed to send message. Please try again or email me directly.');
    }
  };

  return (
    <PageWrapper>
      <section style={styles.section}>
        <div style={styles.grid}>
          {/* Left side */}
          <motion.div
            style={styles.leftCol}
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.heading}>Let's Work Together.</h2>
            <p style={styles.subText}>
              Have a project in mind or just want to say hi? Feel free to reach
              out. I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div style={styles.contactList}>
              {contactInfo.map(({ Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactItem}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={styles.contactIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p style={styles.contactLabel}>{label}</p>
                    <p style={styles.contactValue}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            style={styles.formCard}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
              <div style={styles.field}>
                <label style={styles.label}>Name</label>
                <input
                  {...register('name')}
                  name="from_name"
                  style={styles.input}
                  placeholder=""
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span style={styles.error}>{errors.name.message}</span>}
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Email</label>
                <input
                  {...register('email')}
                  name="from_email"
                  type="email"
                  style={styles.input}
                  placeholder=""
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span style={styles.error}>{errors.email.message}</span>}
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Subject</label>
                <input
                  {...register('subject')}
                  name="subject"
                  style={styles.input}
                  placeholder=""
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <span style={styles.error}>{errors.subject.message}</span>}
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Message</label>
                <textarea
                  {...register('message')}
                  name="message"
                  style={styles.textarea}
                  rows={5}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span style={styles.error}>{errors.message.message}</span>}
              </div>

              <motion.button
                type="submit"
                style={styles.submitBtn}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Inject focus style */}
      <style>{`
        input:focus, textarea:focus {
          outline: none;
          border-color: rgba(160,32,240,0.6) !important;
          box-shadow: 0 0 0 3px rgba(160,32,240,0.12);
        }
      `}</style>
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
    gridTemplateColumns: '1fr 1.1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  leftCol: {},
  heading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3.2rem)',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.1,
    marginBottom: '1.25rem',
  },
  subText: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.95rem',
    color: '#7a6890',
    lineHeight: 1.8,
    marginBottom: '2.5rem',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    color: 'inherit',
  },
  contactIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b0a8c8',
    flexShrink: 0,
  },
  contactLabel: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.8rem',
    color: '#6b6080',
    marginBottom: '2px',
  },
  contactValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.92rem',
    color: '#e0d8f8',
    fontWeight: 500,
  },
  formCard: {
    background: '#16102a',
    border: '1px solid rgba(160,32,240,0.15)',
    borderRadius: '24px',
    padding: '2.5rem',
  },
  field: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.85rem',
    color: '#b0a8c8',
    marginBottom: '0.5rem',
    fontWeight: 500,
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '12px 14px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    color: '#ffffff',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  textarea: {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '12px 14px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    color: '#ffffff',
    resize: 'vertical',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  error: {
    display: 'block',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.78rem',
    color: '#ff6b6b',
    marginTop: '4px',
  },
  submitBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #7b10d0, #a020f0)',
    border: 'none',
    borderRadius: '12px',
    padding: '14px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '0.95rem',
    color: '#ffffff',
    cursor: 'pointer',
    marginTop: '0.5rem',
    transition: 'opacity 0.2s',
    boxShadow: '0 4px 20px rgba(160,32,240,0.3)',
  },
};
