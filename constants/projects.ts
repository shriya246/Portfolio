import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "customer-voice-intelligence-platform",
    name: "Customer Voice Intelligence Platform",
    description:
      "Independent full-stack build that turns scattered customer feedback — support tickets, reviews, surveys, call notes — into a continuously updated, AI-prioritized product opportunity map instead of a manual triage backlog.",
    tech: ["Next.js", "TypeScript", "Supabase", "pgvector", "Groq (Llama 3.3)", "Upstash Redis", "Recharts", "Tailwind CSS"],
    highlights: ["Multi-tenant RBAC", "AI clustering + sentiment", "RICE opportunity scoring", "3 ingestion channels"],
    github: "https://github.com/shriya246/Customer-Voice-Intelligence-Platform",
    live: "https://customer-voice-intelligence-platfor.vercel.app",
    categories: ["AI Products", "SaaS", "Analytics"],
    problemStatement:
      "Customer signal is fragmented across support tickets, reviews, surveys, call notes, and sales conversations, so the loudest voice — not the most common or highest-impact one — tends to win roadmap debates. Built solo, end to end, on a zero-paid-API stack to make prioritization evidence-based instead of anecdote-based.",
    architectureDecisions: [
      "Designed a multi-tenant schema (organizations, teams, role-based access) on Supabase Postgres with row-level security, feeding three ingestion paths: manual entry, CSV import, and an embeddable feedback widget.",
      "Built an embedding + clustering pipeline (Supabase pgvector + Groq Llama 3.3) that groups raw feedback into labeled themes and extracts sentiment and pain points automatically.",
      "Implemented RICE-based opportunity scoring per theme — tying volume, sentiment, and business impact into one ranked list — plus a trend view showing which themes are rising or falling over time.",
      "Closed the loop from raw feedback to decision-ready output: data-backed personas generated from real clusters, a roadmap-linked feature tracker, and an auto-drafted executive summary.",
      "Held the entire stack to genuinely free tiers (Supabase, Vercel, Upstash, Groq) throughout, keeping the project self-funded and forcing scope discipline."
    ],
    metrics: [
      "3 feedback ingestion channels (manual, CSV, embeddable widget)",
      "AI-clustered themes with automatic sentiment tagging",
      "RICE-scored, ranked opportunity map",
      "Zero paid APIs or hosting across the entire stack"
    ]
  },
  {
    id: "enterprise-product-intelligence-platform",
    name: "Enterprise Product Intelligence Platform",
    description:
      "Independent build of a unified AI-native product intelligence workspace — analytics, feedback clustering, and an AI chat assistant that answers questions like “why is retention dropping” directly from a product's own data.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "pgvector", "Groq (Llama 3.3)", "Upstash Redis", "Recharts", "Tailwind CSS"],
    highlights: ["DAU/WAU/MAU + retention", "AI clustering + chat assistant", "Roadmap + AI PRD generator", "Feature-flag experimentation"],
    github: "https://github.com/shriya246/Enterprise-Product-Intelligence-Platform",
    live: "https://enterprise-product-intelligence-pla.vercel.app",
    categories: ["AI Products", "SaaS", "Analytics"],
    problemStatement:
      "Product Managers waste hours stitching together data from disconnected tools — product analytics, feedback tools, roadmap tools, and an ad-hoc ChatGPT tab — before they can make a single decision. Designed as an AI-first alternative that collapses that stack into one workspace, built solo on a zero-paid-API stack.",
    architectureDecisions: [
      "Scoped a three-sprint build: a multi-tenant foundation first (auth, orgs, RBAC, an event-ingestion SDK, DAU/WAU/MAU and retention analytics), then feedback intelligence (AI clustering, sentiment, a chat assistant answering natural-language questions against the org's own data), then a roadmap and executive layer.",
      "Specified an AI PRD generator that turns a feature idea into a full draft — user stories, acceptance criteria, success metrics, and risks — plus AI-recommended roadmap prioritization driven by engagement and feedback data.",
      "Scoped lightweight experimentation (feature flags, A/B split, significance check) using free statistics libraries instead of a paid experimentation platform.",
      "Held the entire stack to genuinely free tiers (Supabase, Vercel, Upstash, Groq), documenting any real free-tier ceilings rather than exceeding them silently.",
      "Actively in build — foundation and data layer underway, with feedback intelligence and the roadmap/PRD layer next."
    ],
    metrics: [
      "3-sprint roadmap: analytics foundation → AI feedback intelligence → roadmap, PRD & experimentation",
      "AI chat assistant designed to query live product data in natural language",
      "AI-generated PRD drafts from a single feature idea",
      "Zero paid APIs or hosting across the entire stack"
    ]
  },
  {
    id: "enterprise-ai-agent-governance-platform",
    name: "Enterprise AI Agent Governance Platform",
    description:
      "Independent build of a control tower for organizations running multiple internal AI agents — a developer-to-manager-to-admin approval workflow, full audit logging, prompt versioning with rollback, and automatic hallucination scoring, so no agent goes live or stays live without oversight.",
    tech: ["React", "Vite", "Node.js", "Express", "Python", "FastAPI", "Supabase", "pgvector", "Recharts", "Tailwind CSS"],
    highlights: ["3-step approval workflow", "Full audit logging", "Prompt versioning + rollback", "AI groundedness scoring"],
    github: "https://github.com/shriya246/Enterprise-AI-Agent-Governance-Platform",
    live: null,
    categories: ["AI Products", "SaaS", "Analytics"],
    problemStatement:
      "Enterprises running HR, IT, Finance, and Support AI agents in parallel have no single answer to which agents are live, how often they hallucinate, whether they were approved before shipping, or who's accountable for what an agent said. Built solo, end to end, on a zero-paid-API stack to make agent governance real and inspectable instead of assumed.",
    architectureDecisions: [
      "Designed RBAC across four roles (Admin/Manager/Developer/Employee) and a three-stage approval workflow — Developer creates, Manager approves, Admin approves, then publish — with every state transition written to an audit log.",
      "Built an Agent Studio that instantiates agents from HR/IT/Finance/Support templates and attaches a knowledge base through a RAG pipeline: upload, chunk, embed, retrieve at query time via Supabase pgvector.",
      "Implemented prompt versioning so every system-prompt edit creates a new version, with one-click rollback to any prior version and that history visible in the audit trail.",
      "Added an automatic model-based evaluation step that scores each response for groundedness and flags likely hallucination, plus a compliance pass — regex-based PII detection and a prompt-injection heuristic — applied before any input reaches the model layer.",
      "Held the entire stack to genuinely free tiers (Supabase, Vercel, Render, a free-tier model provider) with local fallbacks behind every external dependency, so the whole thing runs with zero accounts configured.",
      "Shipped a Control Tower dashboard surfacing active agents, usage, latency, rough cost estimate, and success rate — the same visibility a governance buyer would expect from a paid platform."
    ],
    metrics: [
      "4 RBAC roles with a 3-stage approval workflow before any agent publishes",
      "Every prompt + response logged with actor, timestamp, agent, and prompt version",
      "Automatic groundedness/hallucination scoring on every response",
      "Zero paid APIs or hosting across the entire stack"
    ]
  },
  {
    id: "enterprise-now-assist-agent-rollout",
    name: "Enterprise Now Assist Agent Rollout",
    description: "Scaled 60+ AI agents across ITSM, HRSD, and CRM from pilot to enterprise adoption with measurable deflection and cost outcomes.",
    tech: ["Now Assist", "Agent Studio", "LLM Evaluation", "RBAC", "AI Governance", "CSDM"],
    highlights: ["600+ active users", "38% ticket deflection", "$2.1M cost avoidance", "60+ AI agents"],
    github: null,
    live: null,
    categories: ["AI Products", "Roadmap", "Go-to-Market"],
    problemStatement:
      "Enterprise teams needed a governed way to move AI agents from isolated pilots into production workflows across ITSM, HRSD, and CRM without compromising quality, compliance, or trust.",
    architectureDecisions: [
      "Led rollout strategy from a 40-person pilot to 600+ active users in 10 weeks, sequencing adoption by workflow readiness and measurable support impact.",
      "Partnered with platform, data, and content teams to remediate 10,000+ CSDM and knowledge base records before broad release.",
      "Used AI readiness gates and response-quality tracking to reduce hallucination risk and improve Now Assist response accuracy by 22%.",
      "Aligned stakeholders around agent success metrics including ticket deflection, adoption, governance readiness, and operational cost avoidance."
    ],
    metrics: ["60+ Now Assist agents", "600+ active users in 10 weeks", "38% ticket deflection", "$2.1M cost avoidance", "22% response accuracy improvement"]
  },
  {
    id: "ai-control-tower-governance-framework",
    name: "AI Control Tower Governance Framework",
    description: "Defined an enterprise AI governance framework that enabled agentic AI deployment with RBAC, compliance, and auditability.",
    tech: ["AI Control Tower", "Agentic AI", "RBAC", "Compliance", "Auditability", "Stakeholder Management"],
    highlights: ["14 business teams", "3 weeks to 4 days", "3 launches unblocked"],
    github: null,
    live: null,
    categories: ["AI Products", "Roadmap", "Cloud"],
    problemStatement:
      "Business teams wanted to ship agentic AI capabilities quickly, but reviews were slowed by unclear governance, security, and data-quality ownership across platform, security, and content teams.",
    architectureDecisions: [
      "Defined the AI Control Tower adoption framework with clear ownership for RBAC, compliance checks, auditability, and launch readiness.",
      "Created cross-functional alignment protocols across platform, security, and content stakeholders to remove recurring blockers.",
      "Compressed governance review cycles from 3 weeks to 4 days by standardizing evidence, approval flow, and readiness criteria.",
      "Enabled 3 previously stalled AI feature launches to ship on schedule by resolving data quality and governance dependencies."
    ],
    metrics: ["14 business teams enabled", "Governance review reduced from 3 weeks to 4 days", "3 stalled AI launches shipped", "Full RBAC, compliance, and auditability"]
  },
  {
    id: "omniserve-field-service-saas",
    name: "OmniServe Field Service SaaS",
    description: "Owned 0-to-1 roadmap for a B2B field service management platform, improving sprint predictability, UX, retention, and cloud reliability.",
    tech: ["Mixpanel", "Google Analytics", "Figma", "Node.js", "Flutter", "Postman", "AWS EC2", "AWS RDS", "AWS S3"],
    highlights: ["98% sprint commitment", "28% task completion lift", "$180K ARR protected", "90% downtime reduction"],
    github: null,
    live: null,
    categories: ["SaaS", "Analytics", "Cloud"],
    problemStatement:
      "The OmniServe platform needed stronger roadmap discipline, clearer SLA visibility, faster onboarding, and cloud reliability to support enterprise field-service customers at scale.",
    architectureDecisions: [
      "Owned the roadmap across 18 sprints and introduced early risk flagging to improve sprint commitment and reduce cross-team disruptions.",
      "Ran 4 usability testing cycles with 20+ users in Figma, translating research into a redesign that reduced onboarding time from 3 days to under 8 hours.",
      "Built a Mixpanel and Google Analytics measurement framework to expose SLA gaps and trigger automated operational alerts.",
      "Defined API contracts and aligned Node.js and Flutter teams through Postman to ship real-time field agent tracking 2 weeks early.",
      "Directed a 6-week migration from on-prem infrastructure to AWS EC2, RDS, and S3 with zero downtime during the transition."
    ],
    metrics: ["98% sprint commitment", "60% fewer cross-team disruptions", "28% task completion increase", "40% resolution-time reduction", "$180K ARR protected", "$33K renewal influenced", "CSAT improved from 3.6 to 4.4/5"]
  }
];
