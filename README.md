# Brean Ibañez — Portfolio Website

## Setup

```bash
npm install
npm run dev
```

## EmailJS Setup

1. Create account at emailjs.com
2. Create a service (Gmail recommended)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. In `src/pages/Contact.jsx`, replace:
   - `YOUR_SERVICE_ID` with your EmailJS service ID
   - `YOUR_TEMPLATE_ID` with your template ID
   - `YOUR_PUBLIC_KEY` with your public key

## Deploying to Vercel

1. Push code to GitHub
2. Import repo at vercel.com
3. Framework preset: Vite
4. Deploy — done!

## Adding Real Content

- **Profile image**: Replace the placeholder in `Home.jsx` with `<img src="/images/profile.jpg" />`
- **Resume**: Replace `/public/resume.pdf` with your actual resume
- **Works**: Add real project images to `/public/images/` and update `Works.jsx`
- **Certificates**: Add certificate images to `/public/certificates/` and update `Certificates.jsx`
