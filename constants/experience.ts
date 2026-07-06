import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "ServiceNow",
    location: "USA",
    role: "Product Manager - Enterprise AI Platform, Now Assist, AI Control Tower, Agent Studio",
    period: "November 2024 - Present",
    current: true,
    bullets: [
      "Scaled AI agent adoption org-wide by leading enterprise rollout of 60+ Now Assist agents across ITSM, HRSD, and CRM, moving a 40-person pilot to 600+ active users in 10 weeks and achieving 38% ticket deflection with $2.1M in cost avoidance",
      "Defined and drove AI Control Tower framework adoption across 14 business teams, enabling agentic AI deployment with RBAC, compliance, and auditability while compressing governance review cycles from 3 weeks to 4 days",
      "Deployed change management and SecOps AI agents via Agent Studio, automating repetitive incident workflows and driving a 42% reduction in mean time to resolution across 3 business units",
      "Partnered with platform and data teams to remediate 10,000+ CSDM and knowledge base records as AI readiness prerequisites, reducing LLM hallucination risk and improving Now Assist response accuracy by 22%",
      "Established data quality standards and alignment protocols across platform, security, and content teams, resolving cross-functional blockers and enabling 3 previously stalled AI feature launches to ship on schedule"
    ]
  },
  {
    company: "Infinite Infolab",
    location: "India",
    role: "Product Manager - B2B Field Service Management SaaS, OmniServe Platform",
    period: "January 2021 - July 2023",
    current: false,
    bullets: [
      "Owned the full OmniServe roadmap across 18 sprints, introducing early risk flagging that achieved 98% sprint commitment, cut cross-team disruptions by 60%, and unlocked onboarding of 5 enterprise clients in Q4",
      "Led a research-driven UX redesign through 4 usability testing cycles with 20+ users in Figma, increasing task completion rate by 28% and reducing new-user onboarding time from 3 days to under 8 hours",
      "Built a Mixpanel and Google Analytics framework, identified SLA visibility gaps, and launched automated alerts that reduced resolution time by 40% and prevented churn of 3 enterprise clients worth approximately $180K ARR",
      "Shipped an API-driven real-time field agent tracking feature 2 weeks early by defining API contracts and aligning Node.js and Flutter teams through Postman, contributing directly to a $33K contract renewal",
      "Led a zero-downtime migration from on-prem infrastructure to AWS EC2, RDS, and S3 in 6 weeks, reducing downtime by 90%, raising CSAT from 3.6 to 4.4/5, and supporting 5 enterprise client onboardings in one quarter"
    ]
  }
];
