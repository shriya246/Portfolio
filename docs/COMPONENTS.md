# Components

## Layout

| Component | Props | Purpose |
| --- | --- | --- |
| `Navbar` | None | Fixed responsive navigation with active links, theme toggle, resume modal button, mobile menu, and hide-on-scroll behavior. |
| `Footer` | None | Minimal footer with social links, copyright, and deployment tagline. |

## UI

| Component | Props | Purpose |
| --- | --- | --- |
| `ScrollReveal` | `children`, `className?`, `delay?` | Reusable Framer Motion fade-up wrapper triggered on viewport entry. |
| `SectionHeading` | `title`, `subtitle?`, `eyebrow?`, `align?`, `className?` | Shared heading system with accent dot, title, and supporting copy. |
| `ThemeToggle` | `className?` | Sun/moon theme switch using `next-themes`. |
| `ThemeProviderWrapper` | `children` | Client provider wrapper for dark and light theme support. |
| `ResumeModal` | `open`, `onClose` | Full-screen animated resume preview with iframe, close button, and download action. |

## Home

| Component | Props | Purpose |
| --- | --- | --- |
| `Hero` | None | Full-viewport opening section with aurora background, letter reveal, typewriter roles, CTA buttons, floating tech chips, and resume modal. |
| `About` | None | Bio section with SP avatar treatment and animated stat counters. |
| `Skills` | None | Tabbed technical skill browser driven by resume data. |
| `Experience` | None | Timeline cards for ServiceNow and Disha Enterprise with highlighted metrics. |
| `FeaturedProjects` | None | Three-card project preview with technology pills and source links. |
| `PublicationsPreview` | None | Compact Springer publication cards and route link. |
| `CTABanner` | None | Violet gradient opportunity banner linking to the contact page. |

## Projects

| Component | Props | Purpose |
| --- | --- | --- |
| `FilterBar` | `activeFilter`, `onChange` | Category filter buttons for project archive. |
| `ProjectCard` | `project`, `onSelect` | Animated project card with tags, technology stack, source link, and modal trigger. |
| `ProjectModal` | `project`, `onClose` | Overlay with full description, problem statement, architecture decisions, metrics, technologies, and links. |

## Publications

| Component | Props | Purpose |
| --- | --- | --- |
| `PublicationCard` | `publication`, `delay?` | Wide research publication card with Springer tag, abstract, journal, year, and DOI link. |
| `CertificationCard` | `certification`, `delay?` | Achievement-style certification card with amber accent and hover shimmer. |

## Contact

| Component | Props | Purpose |
| --- | --- | --- |
| `ContactInfo` | None | Contact copy, click-to-copy email, phone, location, and social links. |
| `ContactForm` | None | Controlled EmailJS form with validation, loading, success, and error states. |
