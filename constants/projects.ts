import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "chatterbox-real-time-chat",
    name: "ChatterBox — Real-Time Chat Application",
    description: "A scalable real-time chat application supporting 100+ concurrent users with enterprise-grade message delivery",
    tech: ["React", "Node.js", "Socket.io", "JWT", "bcrypt", "Redis", "Azure Service Bus"],
    highlights: [
      "100+ concurrent users",
      "JWT auth",
      "Redis caching",
      "Azure Service Bus for reliable message delivery"
    ],
    github: "https://github.com/shriya-patel",
    live: null,
    categories: ["Backend", "Cloud", "Real-Time"],
    problemStatement:
      "Real-time chat systems need low-latency communication, secure sessions, and reliable message delivery even when traffic spikes or downstream services become temporarily unavailable.",
    architectureDecisions: [
      "Used Socket.io for bidirectional event delivery and Node.js services for fast connection handling.",
      "Added JWT authentication with bcrypt-backed credential security for protected user sessions.",
      "Introduced Redis caching to reduce repeated reads and keep active conversation state responsive.",
      "Integrated Azure Service Bus to decouple message delivery and improve reliability across services."
    ],
    metrics: ["100+ concurrent users", "JWT-secured authentication", "Redis-backed caching", "Reliable delivery through Azure Service Bus"]
  },
  {
    id: "air-pollution-monitoring-system",
    name: "Air Pollution Monitoring System",
    description: "Fault-tolerant IoT data pipeline processing 2M+ MQTT messages daily with real-time anomaly detection",
    tech: ["Azure IoT Hub", "AWS", "Microservices", "MQTT", "Cloud Architecture"],
    highlights: [
      "2M+ MQTT messages/day",
      "99% uptime",
      "Anomaly detection",
      "Real-time environmental monitoring"
    ],
    github: "https://github.com/shriya-patel",
    live: null,
    categories: ["Cloud", "IoT", "Backend"],
    problemStatement:
      "Environmental monitoring systems must absorb high-volume sensor traffic, detect anomalies quickly, and stay reliable when devices send irregular or bursty MQTT data.",
    architectureDecisions: [
      "Designed an event-driven ingestion layer with Azure IoT Hub to receive large MQTT streams.",
      "Separated processing into microservices so anomaly detection, storage, and alerting can scale independently.",
      "Used cloud-native reliability patterns to maintain uptime during sensor bursts and intermittent network conditions.",
      "Structured the pipeline for real-time environmental visibility and operational monitoring."
    ],
    metrics: ["2M+ MQTT messages/day", "99% uptime", "Real-time anomaly detection", "Cloud-native IoT architecture"]
  },
  {
    id: "3d-object-detection-system",
    name: "3D Object Detection System",
    description: "High-accuracy object detection models achieving up to 95-100% prediction accuracy in production environments",
    tech: ["YOLO", "TensorFlow", "PyTorch", "Python", "MLflow"],
    highlights: [
      "95-100% prediction accuracy",
      "Scalable ML pipelines",
      "Production model deployment"
    ],
    github: "https://github.com/shriya-patel",
    live: null,
    categories: ["Machine Learning", "AI", "Python"],
    problemStatement:
      "Object detection systems need repeatable training, measurable accuracy, and production deployment practices that keep model behavior observable beyond experimentation.",
    architectureDecisions: [
      "Evaluated YOLO-based detection flows with TensorFlow and PyTorch implementations.",
      "Tracked model iterations and accuracy signals with MLflow for reproducible experiments.",
      "Built Python pipelines that can scale from training to production inference environments.",
      "Focused on deployment readiness, accuracy validation, and maintainable model operations."
    ],
    metrics: ["95-100% prediction accuracy", "MLflow experiment tracking", "Production-ready inference", "Scalable Python ML pipeline"]
  }
];
