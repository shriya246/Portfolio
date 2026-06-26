import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "ServiceNow",
    location: "USA",
    role: "Software Engineer",
    period: "November 2024 — Present",
    current: true,
    bullets: [
      "Designed and built backend services using Python with FastAPI and Flask, delivering 9 microservices to support data ingestion, transformation, and core business logic across internal workflows",
      "Managed transactional data in SQL Server, writing optimized queries and stored procedures to support high-volume operations and reporting needs",
      "Developed a GraphQL aggregation layer that unified data from SQL Server and DynamoDB, enabling frontend clients to retrieve combined datasets in a single request and improving response times significantly",
      "Integrated services with AWS, using SQS for message queuing between distributed components and S3 for secure file storage and backup. Deployed AWS Lambda to automate data validation and cleansing tasks, processing an average of 400 records per day",
      "Wrote unit and integration tests using Python's unittest framework, achieving over 90% test coverage. Used mocking and stubs to isolate service dependencies and support test-driven development",
      "Containerized all services with Docker to maintain consistent runtime environments across development, staging, and production. Set up CI/CD pipelines using Jenkins to automate builds, tests, and deployments, reducing release cycle time",
      "Built internal automation scripts and CLI tools in Python to handle routine database maintenance and deployment checks, saving the team approximately 4 hours of manual effort per week"
    ]
  },
  {
    company: "Disha Enterprise",
    location: "India",
    role: "Software Engineer",
    period: "January 2021 — July 2023",
    current: false,
    bullets: [
      "Developed a cloud-based log analytics platform using C#/.NET Core and C++, processing over 1M+ log events daily with optimized backend performance",
      "Engineered scalable backend services using Spring Boot and .NET Core integrated with MySQL and MongoDB for high-volume enterprise applications",
      "Built real-time streaming pipelines using Apache Kafka, increasing system throughput by 30% and improving data processing efficiency",
      "Developed responsive frontend components using React and TypeScript, improving application usability and user engagement by 20%",
      "Optimized PostgreSQL and DynamoDB database queries, reducing execution time by 35% and improving application responsiveness",
      "Designed multithreaded C++ modules for high-speed log parsing and caching, enhancing processing efficiency for large-scale datasets"
    ]
  }
];
