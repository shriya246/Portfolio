import type { Project } from "@/types";

export const PROJECTS: Project[] = [
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
