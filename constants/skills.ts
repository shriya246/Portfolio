import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["Python", "Java", "C++", "C#", "SQL", "JavaScript", "TypeScript"]
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "FastAPI",
      "Spring Boot",
      "Django",
      "Node.js",
      "Express.js",
      ".NET Core",
      "REST APIs",
      "gRPC",
      "Microservices Architecture",
      "System Design"
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3"]
  },
  {
    id: "cloud",
    label: "Cloud",
    skills: [
      "AWS Lambda",
      "EC2",
      "S3",
      "SNS",
      "SES",
      "EKS",
      "Azure Functions",
      "AKS",
      "Blob Storage",
      "Service Bus",
      "Event-Driven Architecture",
      "Distributed Systems"
    ]
  },
  {
    id: "devops",
    label: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Azure DevOps", "CI/CD Pipelines", "Linux", "Bash"]
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"]
  },
  {
    id: "streaming",
    label: "Streaming",
    skills: ["Apache Kafka", "Apache Spark", "Hadoop"]
  },
  {
    id: "ml-ai",
    label: "ML/AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "MLflow"]
  },
  {
    id: "security",
    label: "Security",
    skills: ["OAuth2", "JWT", "RBAC", "TLS", "AES Encryption"]
  },
  {
    id: "monitoring",
    label: "Monitoring",
    skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Logging and Metrics"]
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Maven", "Gradle", "Postman", "VS Code", "IntelliJ IDEA"]
  }
];
