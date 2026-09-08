# Raphael Earl Salayog - Portfolio Website Specification

## 1. Product Summary

Create a polished, single-page portfolio for Raphael Earl Salayog, a Full-Stack Developer. The site should present his experience, technical skills, education, certifications, and future personal projects in a concise story designed primarily for recruiters and hiring managers.

The experience should feel like a vibrant journey through deep space: dark, atmospheric, and cinematic, with magenta and cyan neon accents, layered parallax, and a refined planet horizon. Visual effects must support the content rather than obscure it or make the site feel like a game.

### Primary goal

Convince a recruiter or hiring manager to interview Raphael.

### Primary actions

1. View projects.
2. Download the supplied resume.
3. Contact Raphael by email or visit LinkedIn.

### Audience

- Technical recruiters and hiring managers.
- Engineering leads reviewing frontend or full-stack candidates.
- Potential professional collaborators as a secondary audience.

## 2. Scope

### Included

- One responsive page with anchored section navigation.
- Resume-derived professional content.
- Three clearly labeled project templates populated with mock placeholder data.
- Downloadable resume.
- Links to email, LinkedIn, and GitHub.
- Animated galaxy background and scroll-based parallax.
- Desktop, tablet, and mobile layouts.
- Accessibility, reduced-motion, SEO, and performance requirements.

### Excluded

- Separate project detail routes.
- Automatically importing or featuring GitHub repositories.
- CMS, database, authentication, or admin interface.
- Contact form or server-side email handling.
- Blog, testimonials, services, or availability claims.
- Light theme.
- Social-preview image generation unless requested separately.

## 3. Source Content

Use `SALAYOG-RAPHAEL_RESUME.pdf` as the factual source for biography, employment, education, certifications, skills, and contact links. Copy the PDF into the site's public assets with a stable, descriptive filename for the Download Resume action.

Do not expose the phone number in page content. It may remain inside the downloadable resume. Public contact information should include:

- `rsalayog0199@gmail.com`
- San Jose del Monte, Bulacan, Philippines
- `linkedin.com/in/rsalayog`
- `github.com/RaphaelSalayog`

Avoid hard-coding a calculated total such as “1 year and 9 months,” because it becomes stale. Describe experience through the dated timeline instead.

## 4. Information Architecture

Use these stable section IDs for navigation and deep linking:

- `home`
- `about`
- `experience`
- `projects`
- `contact`

### 4.1 Navigation

- Use a compact sticky header that becomes slightly more opaque after leaving the hero.
- Include links for Home, About, Experience, Projects, and Contact.
- Include a visible Download Resume action on larger screens.
- Collapse navigation into an accessible menu on small screens.
- Indicate the active section without relying on color alone.
- Anchor navigation must account for the sticky header and must remain usable with keyboard navigation and reduced motion.

### 4.2 Hero

The first viewport must immediately communicate identity, role, and next actions.

Required content:

- Eyebrow: a brief availability-neutral introduction such as “Hello, I'm”.
- Heading: “Raphael Earl Salayog”.
- Role: “Full-Stack Developer”.
- A concise two-sentence introduction based on the resume, emphasizing modern web applications, continuous learning, reusable interfaces, and full-stack delivery.
- Primary action: “View Projects”.
- Secondary action: “Download Resume”.
- Supporting links to LinkedIn and GitHub.
- A clearly marked portrait placeholder for a future high-resolution portrait.

Visual centerpiece:

- Preserve and refine the current planet/moon horizon motif.
- Place the horizon low in the first viewport so it creates depth without covering the heading or actions.
- Integrate the portrait placeholder into the composition without extracting the low-resolution headshot from the resume.
- Use orbital lines, star particles, and subtle neon atmosphere around the horizon.

### 4.3 About and Skills

Use confident, concise copy rather than reproducing the full resume profile. Communicate that Raphael:

- Builds responsive, maintainable web applications.
- Has professional experience across frontend development, API integration, reusable component design, optimization, and full-stack MVP work.
- Values continuous learning, collaboration, and practical implementation.

Group skills for scanability instead of showing one undifferentiated list:

- Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux, Tailwind CSS, Material UI, Ant Design, Formik.
- Backend and APIs: Node.js, Express.js, REST, Apollo GraphQL, Socket.io.
- Data and cloud: MySQL, PostgreSQL, MongoDB, Sequelize, Supabase, AWS, S3.
- Tools and platforms: Git, GitHub, Bitbucket, Docker, Postman, Google Maps API, React Native, Java.

Use text labels with optional trusted technology icons. Every skill must remain readable without icons.

### 4.4 Experience

Present a vertical career timeline with the newest role first. Keep each role concise and use three to five high-value achievements rather than copying every resume bullet.

#### Webcast Technologies Inc.

- Role: Jr. Associate Frontend Developer
- Dates: September 2025 - Present
- Location: Quezon City, Philippines
- Emphasize enterprise frontend development, reusable components, Apollo Client integration, code review, performance-focused refactoring, full-stack MVP research and development, and AI-assisted development.

#### PhilCentro Technologies Inc.

- Role: Jr. Software Engineer
- Dates: June 2024 - May 2025
- Location: Pasay City, Philippines
- Emphasize Next.js and TypeScript application development, reusable interfaces, REST/Axios integration, AWS S3 uploads, payment gateway support, and maintainability improvements.

#### Xurpas Inc.

- Role: Front-end Web Developer Intern
- Dates: March 2023 - June 2023
- Location: Makati City, Philippines
- Emphasize Agile participation, React/Next.js frontend work, GraphQL integration, cross-team collaboration, and React training.

### 4.5 Projects

Show exactly three scroll-driven project showcases. They are templates only and must never imply that the mock content represents Raphael's real work.

Each showcase must include:

- Project number.
- Title.
- Category or project type.
- Short summary.
- Problem or goal.
- Raphael's contribution.
- Technology tags.
- Screenshot or cover-image slot with a fixed aspect ratio.
- Optional Live Preview action.
- Optional Source Code action.

Use the labels “Project One,” “Project Two,” and “Project Three.” Descriptive content should use explicit tokens such as `[Add a one-sentence project summary]` and `[List your contribution]`. Placeholder visuals must be visibly marked “Project image placeholder.”

Do not use dummy URLs. If a link is absent, do not render its action.

Store project content in a single typed data collection so future projects can be updated without modifying the layout. Use this model as the minimum interface:

```ts
export interface Project {
    id: string;
    title: string;
    category: string;
    summary: string;
    problem: string;
    contribution: string;
    technologies: string[];
    image: {
        src: string;
        alt: string;
    };
    liveUrl?: string;
    sourceUrl?: string;
}
```

### 4.6 Education and Certifications

Present this as a compact credibility section rather than another long timeline.

- STI College - BS in Information Technology, 2019-2023, Cum Laude.
- AWS Serverless APIs & Apps - A Complete Introduction.
- React - The Complete Guide (Hooks, React Router, Redux).
- GraphQL by Example.

Certification links may use the credential URLs or identifiers in the resume when available. External links must open safely and have descriptive accessible names.

### 4.7 Contact and Footer

- Heading focused on starting a conversation about a role or collaboration.
- Primary action: email `rsalayog0199@gmail.com`.
- Secondary action: Download Resume.
- Show LinkedIn, GitHub, and San Jose del Monte, Bulacan.
- Do not display the phone number.
- Do not include a form.
- Include a simple copyright line without unnecessary marketing copy.

## 5. Visual Direction

### Visual thesis

“A developer's career unfolding above the luminous horizon of a neon galaxy.”

### Palette

- Background: near-black navy, approximately `#050510` to `#090B1A`.
- Primary text: cool white, approximately `#F4F7FF`.
- Secondary text: muted blue-gray with accessible contrast.
- Primary accent: electric magenta, approximately `#F272C8`.
- Secondary accent: electric cyan, approximately `#4DEBFF`.
- Supporting violet and deep indigo may be used for nebula gradients.
- Avoid pure-white large surfaces, warm beige, and rainbow gradients.

### Typography

- Use a distinctive display face for major headings and a highly readable sans-serif for body copy.
- Preserve Next.js font optimization.
- Body text must be at least `1rem`; primary labels should generally be at least `0.875rem`.
- Use restrained uppercase and letter spacing for small section labels only.

### Surfaces

- Prefer transparent or translucent panels over large opaque cards.
- Use crisp neon edge lighting sparingly.
- Keep corner radii moderate and consistent.
- Decorative stars, orbits, glows, and particles must never reduce text contrast.

## 6. Animation and Parallax Stack

Use GSAP, Framer Motion, and Lenis together, with separate responsibilities to avoid conflicting animation ownership.

### Lenis

- Own smooth scrolling and scroll interpolation across the page.
- Integrate Lenis with `requestAnimationFrame` and GSAP's ticker instead of running competing animation loops.
- Preserve native anchor navigation, keyboard scrolling, touch input, and browser history behavior.
- Disable smooth interpolation when reduced motion is requested.

### GSAP and ScrollTrigger

- Own scroll-linked parallax, scrubbed timelines, pinned project sequences, and coordinated multi-layer movement.
- Register plugins only inside a client-safe module.
- Use `gsap.context()` or the React integration's scoped cleanup so animations and ScrollTriggers are destroyed on unmount.
- Refresh ScrollTrigger after fonts and layout-critical media settle.
- Do not animate layout properties when transforms and opacity can achieve the same effect.

### Framer Motion

- Own component-level entrance animations, hover/tap feedback, mobile navigation transitions, and small state changes.
- Do not use Framer Motion and GSAP to animate the same property on the same element.
- Keep hover effects usable with keyboard focus and omit hover-only information.

### React Three Fiber and Drei

- Retain the existing libraries for the ambient star field only.
- Keep the WebGL scene lightweight and decorative, with no essential text or navigation inside the canvas.
- Dynamically load the canvas as a client component and provide a CSS-based fallback.

### Motion choreography

- Star layers drift at different speeds to establish depth.
- The planet horizon moves more slowly than foreground content.
- Hero copy enters with a short stagger, not a long intro sequence.
- Section labels and content reveal as they enter the viewport.
- Each project uses layered image/content parallax while remaining readable during scrolling.
- Avoid scroll hijacking, forced horizontal scrolling, excessive pinning, custom cursors, autoplay audio, and animations that block actions.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Disable Lenis interpolation.
- Remove scrubbed parallax and continuous star rotation.
- Avoid pinned storytelling sequences.
- Replace reveals with immediate content or short opacity changes.
- Preserve the same content, navigation, links, and visual hierarchy.

## 7. Technical Architecture

- Continue using Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.
- Add GSAP, the official GSAP React integration if used, Framer Motion, and Lenis as explicit dependencies.
- Keep the page and static content server-rendered where possible.
- Isolate Lenis, ScrollTrigger, Framer Motion interactions, and WebGL inside narrowly scoped client components.
- Do not mark the entire page as a client component solely to enable animation.
- Dynamically import the decorative WebGL scene so it does not dominate the initial JavaScript bundle.
- Keep animation selectors scoped through refs instead of global class queries.
- Store resume-derived content and project templates in typed local data; no external API is required.
- Replace starter metadata with Raphael-specific title and description.
- Use semantic landmarks and a single descriptive `h1`.

## 8. Responsive Behavior

### Mobile

- Prioritize name, role, introduction, and actions before decorative artwork.
- Simplify parallax distance and particle density.
- Stack project image and content vertically.
- Avoid project pinning when viewport height is too small for the full composition.
- Make every action at least 44 by 44 CSS pixels where practical.

### Tablet

- Allow selective two-column layouts while maintaining comfortable reading width.
- Reduce the planet and portrait composition if it competes with hero text.

### Desktop

- Use an asymmetric hero composition with copy and portrait/planet artwork sharing the viewport.
- Alternate project content alignment only when it improves the scrolling rhythm.
- Limit body-copy line length to approximately 65-75 characters.

The layout must remain usable at 200% browser zoom and must not introduce horizontal page scrolling.

## 9. Accessibility

- Meet WCAG 2.2 AA contrast expectations for text and interactive elements.
- Provide a visible skip link and clearly visible keyboard focus states.
- Use semantic sections, headings, lists, navigation, buttons, and links.
- Decorative canvas and cosmic artwork must be hidden from assistive technology.
- Give meaningful project images useful alt text after real content is supplied; placeholder images should identify themselves as placeholders without inventing project details.
- Navigation menu controls must expose their expanded state and accessible name.
- Do not rely on color, glow, motion, or hover alone to communicate state.
- Verify all content and actions remain available with animations disabled.

## 10. Performance and Resilience

- Render meaningful HTML before animation libraries initialize.
- Ensure WebGL failure does not prevent content from rendering.
- Use stable dimensions for portrait and project media to avoid layout shift.
- Optimize and lazy-load below-the-fold images.
- Lower star count and animation complexity on smaller or lower-powered devices.
- Avoid multiple independent `requestAnimationFrame` loops where the GSAP ticker can coordinate updates.
- Clean up observers, tickers, timelines, and ScrollTriggers when components unmount.
- Target a smooth experience on mid-range mobile hardware, not only desktop devices.

## 11. SEO and Metadata

- Page title: `Raphael Earl Salayog | Full-Stack Developer`.
- Write a concise description that mentions modern web applications, React, Next.js, and full-stack development without keyword stuffing.
- Add a canonical URL after the production domain is confirmed.
- Keep all professional content crawlable as HTML rather than rendering it inside canvas.
- Do not generate or replace an Open Graph image unless requested separately.

## 12. Acceptance Criteria

The implementation is complete when:

1. All resume-derived facts match the supplied PDF.
2. The phone number appears only inside the downloadable resume.
3. The single page contains all specified sections in the defined order.
4. Sticky navigation reaches each stable section ID and works by keyboard.
5. The resume action downloads the supplied PDF.
6. Exactly three clearly labeled project templates render from one typed data source.
7. Missing project URLs do not produce disabled or fake links.
8. The magenta/cyan galaxy theme and planet horizon are recognizable across viewport sizes.
9. Lenis controls smooth scrolling, GSAP controls scroll-linked sequences, and Framer Motion controls component interactions without property conflicts.
10. Reduced-motion mode removes smooth scrolling, scrubbed parallax, continuous rotation, and pinning without hiding content.
11. The page remains readable and functional if WebGL fails or is still loading.
12. There is no light theme, contact form, project-detail route, or GitHub-derived project catalog.
13. TypeScript checks, ESLint, and the production build pass.
14. Responsive checks pass on representative mobile, tablet, and desktop widths, including 200% zoom.
15. Keyboard navigation, visible focus, contrast, reduced motion, and external-link behavior are verified.

## 13. Future Content Replacement Checklist

Before publishing real projects, replace each mock entry with:

- Final project name and category.
- Accurate project summary and problem statement.
- Raphael's actual role and contributions.
- Verified technology list.
- Optimized screenshot or cover image with meaningful alt text.
- Tested live-demo URL, when available.
- Tested source-code URL, when public.

Remove every bracketed placeholder and placeholder visual before representing the portfolio as complete.
