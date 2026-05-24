# Design System

## Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| Background | `#0A0A0F` | Default dark page background with subtle radial lighting. |
| Surface | `#111118` | Cards, nav, modal chrome, and form surfaces. |
| Border | `#1E1E2E` | Card outlines, separators, and quiet interface framing. |
| Text Primary | `#F1F5F9` | Main headings and high-priority text. |
| Text Secondary | `#94A3B8` | Body copy, metadata, secondary labels. |
| Primary Accent | `#7C3AED` | CTA buttons, active states, section marks, glow shadows. |
| Secondary Accent | `#06B6D4` | Supporting highlights, cursor, small data points. |
| Achievement Accent | `#FBBF24` | Certification cards and credential highlights. |

Light mode keeps the same violet and cyan identity while shifting surfaces to high-contrast off-white values.

## Typography

| Font | Source | Usage |
| --- | --- | --- |
| Geist Sans | `next/font/google` | Body text, headings, navigation, forms. |
| Geist Mono | `next/font/google` | Skill pills, metadata, labels, technical tags. |

Headings use strong weight, tight line-height, and zero letter spacing. Mono labels use uppercase tracking for compact technical hierarchy.

## Motion

| Motion Pattern | Timing | Purpose |
| --- | --- | --- |
| Scroll reveal | `0.65s`, cubic ease | Smooth fade-up when sections enter viewport. |
| Card stagger | `0.05s - 0.08s` delay | Gives grids a calm sequential load. |
| Hero name reveal | `0.035s` per character | Creates a custom, personal first impression. |
| Typewriter loop | `42ms - 76ms` per character | Cycles Shriya's professional roles with cursor blink. |
| Aurora blobs | `18s - 26s` loops | Subtle premium background motion without external particle libraries. |
| Certification shimmer | `1.4s` hover | Adds achievement polish without distracting from content. |

## Layout Decisions

The portfolio is backend-engineer focused rather than marketing-heavy. It uses dense but readable cards, strong information hierarchy, and technical tags that make Shriya's expertise scannable.

The hero is immersive and first-viewport dominant, with Shriya's name as the main signal. Supporting content remains concise so the page immediately communicates senior backend and cloud positioning.

Project cards use a gradient border and modal details to keep the grid clean while still exposing architecture decisions, metrics, and technology choices on demand.

The contact page is practical and conversion-focused: direct contact details on the left, validated EmailJS form on the right, and clear states for sending, success, and errors.

## Accessibility

Interactive controls include semantic button or link elements, focus-visible rings, ARIA labels where icon-only controls appear, strong contrast, and keyboard support for project cards and modal dismissal.
