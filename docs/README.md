# Shriya Patel Portfolio

A production-grade personal portfolio for Shriya Patel, built with the Next.js App Router, TypeScript, TailwindCSS, Framer Motion, next-themes, EmailJS, Lucide React, and React Icons.

The site showcases Shriya's backend engineering experience, cloud-native architecture work, distributed systems expertise, projects, Springer publications, certifications, resume, and contact flow.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.local.example .env.local
```

3. Add EmailJS credentials to `.env.local`.

4. Run the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Environment Variables

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service connected to Shriya's Zoho email | Yes for contact form sending |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template used for contact messages | Yes for contact form sending |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS browser public key | Yes for contact form sending |

## EmailJS Setup

1. Go to emailjs.com and create a free account.
2. Create a service connected to `shriya2223@zohomail.com`.
3. Create an email template with fields for `from_name`, `from_email`, `subject`, `message`, and `to_email`.
4. Copy the service ID, template ID, and public key into `.env.local`.

## Resume

The resume modal and download button are wired to:

```txt
public/shriya-patel-resume.pdf
```

Add Shriya's final PDF to the `public` folder with that exact lowercase, hyphen-separated filename before deploying. The public URL will be `/shriya-patel-resume.pdf`.

## Deployment

Deploy on Vercel by importing the project, adding the EmailJS environment variables, and running the default Next.js build command:

```bash
npm run build
```

Vercel will serve the App Router pages, static assets, resume PDF, and optimized production bundle automatically.
