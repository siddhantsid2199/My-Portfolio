# Siddhant Singh: Data Analytics Portfolio

A cinematic, responsive portfolio presenting Siddhant Singh's work as a Data Analyst specializing in business intelligence, AI-enabled analytics, performance reporting, KPI analytics, and data-driven decision-making.

The portfolio translates a traditional resume into an interactive professional experience. It combines a video-led hero, measurable work history, technical skills, project case studies, recommendations, education, certifications, and direct contact options in one polished single-page application.

## Purpose

This project was built to:

- Present analytics experience and business impact beyond a standard resume.
- Demonstrate projects through screenshots, reports, technical stacks, outcomes, source repositories, and live resources.
- Make professional credentials, recommendations, and resume materials easy to review.
- Give recruiters and collaborators a clear way to contact Siddhant.
- Preserve a premium, cinematic visual identity across desktop, tablet, and mobile devices.

## Portfolio Sections

The page follows this content flow:

1. **Hero** — Full-screen visual introduction with Siddhant's portrait as the video poster, professional positioning, social profiles, portfolio navigation, resume download, and an interactive Play control.
2. **About** — Professional summary and core analytics stack with an elastic hanging portrait that can be dragged with a mouse or touch and springs back into position.
3. **My Skillset** — Categorized proficiency cards covering business intelligence, Power Platform, programming, data engineering, and analytics.
4. **Professional Journey** — Resume-aligned experience cards with roles, dates, locations, and verbatim achievement bullets.
5. **My Process** — A compact visual explanation of how research, design, analysis, and delivery turn ideas into practical solutions.
6. **Featured Projects** — Responsive two-column case-study cards with project imagery, business outcomes, technology tags, documents, GitHub repositories, and demos where available.
7. **Recommendation** — Side-by-side professional recommendations from Northeastern University and Viatris, with full-screen image viewing.
8. **Education** — Academic background and graduate credentials.
9. **Certificates** — Direct access to professional certification PDFs.
10. **Contact** — A responsive contact form with EmailJS support and a prefilled email fallback.
11. **Footer** — Professional positioning, credentials, social links, and closing navigation.

## Featured Projects

The portfolio currently includes:

- Population Health Analysis
- Virtual Bank
- Alteryx Workflows
- Weekly Issues (Power Apps)
- Logistics Performance Analysis
- Meet the Workforce — HR Analytics
- Supply Chain Management
- NYC Parking & Camera Violations
- Martlytics

The first four projects are intentionally pinned in that order. Remaining projects follow afterward.

## Key Interactions

- **Play:** The site attempts to play the talking video once with sound. If the browser blocks sound-on autoplay, the poster and highlighted Play control remain available without showing an error.
- **Playback safeguards:** The reel never loops, pauses when the Hero leaves the viewport or the browser tab becomes hidden, and does not restart automatically when the visitor returns.
- **Video poster:** Displays the hero image before playback and while the video loads.
- **Elastic portrait:** Supports constrained pointer and touch dragging; the thread stretches and changes angle before the portrait springs back.
- **Scroll animation:** Content enters using configured AOS transitions while Framer Motion drives interactive and scroll-linked motion.
- **Project navigation:** Project images and buttons connect to reports, repositories, and live demos.
- **Recommendation viewer:** Recommendation images can be opened in the browser's full-screen viewer.
- **Resume download:** Downloads the current PDF resume directly from the hero.
- **Contact form:** Sends through EmailJS when configured and otherwise opens a prefilled email to Siddhant.
- **Responsive navigation:** Provides section-based navigation across desktop and mobile layouts.

## Design Direction

The interface uses a high-contrast red, black, and white palette with yellow reserved for the Viatris title accent. Its visual language includes:

- Cinematic full-screen hero media
- Oversized editorial typography
- Alternating light, dark, and red section backgrounds
- Rounded cards and subtle glass effects
- Grid textures and soft ambient glows
- Scroll reveals, parallax movement, hover transitions, and spring motion
- Responsive one- and two-column layouts

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based application structure |
| Vite 8 | Development server and production bundling |
| Tailwind CSS 4 | Responsive styling and design system |
| Framer Motion | Drag, spring, parallax, and motion-value interactions |
| AOS | Scroll-triggered entrance animations |
| EmailJS | Optional direct contact-form delivery |
| ESLint | Source-code quality checks |

## Project Structure

```text
Portfolio/
├── Portfolio Assets/            # Source resume, certificates, recommendations, and project files
├── public/
│   ├── certificates/            # Public certification PDFs
│   ├── projects/                # Project screenshots and supporting PDFs
│   ├── recommendations/         # Recommendation images
│   └── Siddhant_Singh_Resume.pdf
├── src/
│   ├── assets/
│   │   └── siddhant/            # Hero image and talking video
│   ├── components/              # Portfolio sections and interactive UI
│   ├── data/
│   │   └── portfolioData.js     # Central portfolio content and external links
│   ├── App.jsx                  # Section composition and page order
│   ├── index.css                # Global styles and Tailwind integration
│   └── main.jsx                 # React application entry point
├── index.html                   # Metadata and application document
├── package.json
└── vite.config.js
```

## Content Management

Most personal content is centralized in `src/data/portfolioData.js`, including:

- Personal information and professional summary
- Hero copy and calls to action
- Social profile URLs
- Skills and proficiency values
- Project descriptions, outcomes, tags, documents, repositories, and demos
- Experience, education, and certification details
- Footer content
- EmailJS configuration

Section layout and interaction logic live in the corresponding files under `src/components/`.

## Assets

The application uses local assets so the core portfolio remains self-contained:

- Hero portrait: `src/assets/siddhant/hero-image.png`
- Hero talking video: `src/assets/siddhant/hero-talking-video.mp4`
- Downloadable resume: `public/Siddhant_Singh_Resume.pdf`
- Project media: `public/projects/`
- Certificate PDFs: `public/certificates/`
- Recommendation images: `public/recommendations/`

When replacing an asset, retain its current filename unless the related import or data path is also updated.

## Local Development

### Requirements

- Node.js 20 or newer
- npm

### Setup

```bash
git clone https://github.com/siddhantsid2199/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Commands

```bash
npm run dev
```

Starts the local development server with hot module replacement.

```bash
npm run build
```

Creates an optimized production build in `dist/`.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run preview
```

Serves the production build locally for final review.

## Contact Form Configuration

The form works without external configuration by opening a prefilled email. To send messages directly through EmailJS, create a local `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should support these submitted fields:

- `first_name`
- `last_name`
- `user_email`
- `message`

Do not commit real environment values or private credentials.

## Production Checklist

Before publishing an update:

1. Confirm the hero image and MP4 load correctly.
2. Test the Play control with mouse and keyboard.
3. Test the elastic About portrait with mouse and touch input.
4. Verify the resume, certificate, recommendation, project, GitHub, LinkedIn, and Tableau links.
5. Submit the contact form using the intended EmailJS configuration or email fallback.
6. Review desktop and mobile layouts.
7. Run:

```bash
npm run lint
npm run build
```

## Deployment

The production output is generated in `dist/` and can be deployed to any static hosting service that supports a Vite single-page application, such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

For hosted EmailJS delivery, add the three `VITE_EMAILJS_*` values to the hosting provider's environment configuration before building.

## Repository

[github.com/siddhantsid2199/My-Portfolio](https://github.com/siddhantsid2199/My-Portfolio)

## Author

**Siddhant Singh**<br>
Data Analyst & AI Analyst & Business Intelligence
