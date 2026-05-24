import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "ServiceNow",
    location: "USA",
    role: "Software Engineer",
    period: "November 2024 — Present",
    current: true,
    bullets: [
      "Architected and deployed scalable microservices using Python (FastAPI) and Node.js on AWS Lambda and Kubernetes, improving system scalability for high-volume enterprise workflows",
      "Designed high-performance REST and gRPC APIs integrated with PostgreSQL and Redis, reducing API response latency by 32% through caching and query optimization",
      "Implemented event-driven communication using Apache Kafka and AWS SNS, reducing inter-service bottlenecks by 28% and improving real-time processing reliability",
      "Automated containerized deployments using Docker, Amazon EKS, and CI/CD pipelines, decreasing release failures by 25%",
      "Strengthened application security by implementing OAuth2, JWT, and RBAC authentication across distributed systems",
      "Built centralized observability pipelines with Kubernetes logging, metrics, and troubleshooting dashboards"
    ]
  },
  {
    company: "Disha Enterprise",
    location: "India",
    role: "Software Engineer",
    period: "January 2021 — July 2023",
    current: false,
    bullets: [
      "Developed a cloud-based log analytics platform using C#/.NET Core and C++, processing over 1M+ log events daily",
      "Engineered scalable backend services using Spring Boot and .NET Core integrated with MySQL and MongoDB",
      "Built real-time streaming pipelines using Apache Kafka, increasing system throughput by 30%",
      "Developed responsive frontend components using React and TypeScript, improving user engagement by 20%",
      "Optimized PostgreSQL and DynamoDB queries, reducing execution time by 35%",
      "Designed multithreaded C++ modules for high-speed log parsing and caching"
    ]
  }
];
