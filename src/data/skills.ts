export interface Skill {
  name: string;
  level: number;
  icon?: string;
  yearsOfExperience?: number;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: [
      {
        name: "Java (8/17)",
        level: 95,
        icon: "☕",
        yearsOfExperience: 10,
        description: "Expert in Java 8 and 17, building enterprise-grade applications"
      },
      {
        name: "Spring Boot (2.x/3.x)",
        level: 95,
        icon: "🍃",
        yearsOfExperience: 8,
        description: "Deep expertise in Spring ecosystem for microservices architecture"
      },
      {
        name: "Microservices",
        level: 95,
        icon: "🔧",
        yearsOfExperience: 7,
        description: "Architecting and implementing scalable microservices solutions"
      },
      {
        name: "REST APIs",
        level: 95,
        icon: "🔌",
        yearsOfExperience: 10,
        description: "Designing and developing RESTful web services"
      },
      {
        name: "GraphQL",
        level: 45,
        icon: "◼️",
        yearsOfExperience: 1,
        description: "Building efficient GraphQL APIs and resolvers"
      },
      {
        name: "Node.js",
        level: 20,
        icon: "🟢",
        yearsOfExperience: 2,
        description: "Backend development with Node.js and Express"
      },
      {
        name: "Python",
        level: 10,
        icon: "🐍",
        yearsOfExperience: 1,
        description: "Automation scripts and data analysis tools"
      }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React.js",
        level: 50,
        icon: "⚛️",
        yearsOfExperience: 4,
        description: "Building interactive user interfaces with React Hooks"
      },
      {
        name: "JavaScript",
        level: 60,
        icon: "💛",
        yearsOfExperience: 8,
        description: "Modern JavaScript (ES6+) for frontend and backend"
      },
      {
        name: "TypeScript",
        level: 60,
        icon: "📘",
        yearsOfExperience: 4,
        description: "Type-safe JavaScript development"
      },
      {
        name: "HTML5 & CSS3",
        level: 60,
        icon: "🌐",
        yearsOfExperience: 10,
        description: "Semantic HTML and modern CSS techniques"
      }
    ]
  },
  {
    title: "Databases & Caching",
    skills: [
      {
        name: "MySQL",
        level: 90,
        icon: "🐬",
        yearsOfExperience: 4,
        description: "Relational database design, optimization, and queries"
      },
      {
        name: "SQL Server",
        level: 90,
        icon: "💾",
        yearsOfExperience: 4,
        description: "Microsoft SQL Server for enterprise applications"
      },
      {
        name: "Hibernate/JPA",
        level: 80,
        icon: "🗄️",
        yearsOfExperience: 8,
        description: "ORM framework for database interactions"
      },
      {
        name: "Redis",
        level: 50,
        icon: "🔴",
        yearsOfExperience:4,
        description: "In-memory caching and session management"
      },
      {
        name: "MongoDB",
        level: 20,
        icon: "🍃",
        yearsOfExperience: 1,
        description: "NoSQL database for flexible data storage"
      }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "Docker",
        level: 90,
        icon: "🐳",
        yearsOfExperience: 5,
        description: "Containerization of applications and microservices"
      },
      {
        name: "Kubernetes (K8s)",
        level: 85,
        icon: "☸️",
        yearsOfExperience: 4,
        description: "Container orchestration and deployment"
      },
      {
        name: "CI/CD",
        level: 90,
        icon: "🔄",
        yearsOfExperience: 7,
        description: "Jenkins, GitLab CI/CD, automated pipelines"
      },
      {
        name: "AWS/Azure/GCP",
        level: 10,
        icon: "☁️",
        yearsOfExperience: 1,
        description: "Cloud platform services and deployment"
      },
      {
        name: "Git & GitHub",
        level: 95,
        icon: "📚",
        yearsOfExperience: 10,
        description: "Version control, branching strategies, code reviews"
      }
    ]
  },
  {
    title: "Architecture & Messaging",
    skills: [
      {
        name: "System Design",
        level: 90,
        icon: "🏗️",
        yearsOfExperience: 7,
        description: "Designing scalable, fault-tolerant distributed systems"
      },
      {
        name: "Domain-Driven Design",
        level: 85,
        icon: "🎯",
        yearsOfExperience: 5,
        description: "DDD principles and bounded contexts"
      },
      {
        name: "Apache Kafka",
        level: 75,
        icon: "📨",
        yearsOfExperience: 4,
        description: "Event-driven architecture and real-time messaging"
      },
      {
        name: "Message Queues",
        level: 70,
        icon: "📬",
        yearsOfExperience: 4,
        description: "Asynchronous processing with RabbitMQ, ActiveMQ"
      }
    ]
  },
  {
    title: "Testing & Monitoring",
    skills: [
      {
        name: "JUnit & Mockito",
        level: 90,
        icon: "🧪",
        yearsOfExperience: 8,
        description: "Unit testing and mocking frameworks"
      },
      {
        name: "Test-Driven Development",
        level: 85,
        icon: "✅",
        yearsOfExperience: 6,
        description: "TDD practices for robust code quality"
      },
      {
        name: "Jest",
        level: 85,
        icon: "🃏",
        yearsOfExperience: 3,
        description: "JavaScript testing framework"
      },
      {
        name: "Cucumber",
        level: 80,
        icon: "🥒",
        yearsOfExperience: 4,
        description: "Behavior-driven development and integration testing"
      },
      {
        name: "Grafana",
        level: 85,
        icon: "📈",
        yearsOfExperience: 4,
        description: "Metrics visualization and monitoring dashboards"
      },
      {
        name: "Prometheus",
        level: 85,
        icon: "🔥",
        yearsOfExperience: 4,
        description: "Monitoring and alerting toolkit"
      },
      {
        name: "OpenTelemetry",
        level: 80,
        icon: "📊",
        yearsOfExperience: 3,
        description: "Distributed tracing and observability"
      }
    ]
  },
  {
    title: "Security & Tools",
    skills: [
      {
        name: "OAuth/JWT",
        level: 85,
        icon: "🔐",
        yearsOfExperience: 6,
        description: "Authentication and authorization mechanisms"
      },
      {
        name: "OKTA",
        level: 85,
        icon: "🛡️",
        yearsOfExperience: 4,
        description: "Identity and access management"
      },
      {
        name: "Agile/Scrum",
        level: 90,
        icon: "🏃",
        yearsOfExperience: 10,
        description: "Agile methodologies and sprint planning"
      },
      {
        name: "Code Review",
        level: 90,
        icon: "👀",
        yearsOfExperience: 8,
        description: "Ensuring code quality and best practices"
      },
      {
        name: "AI Tools (ChatGPT, Copilot)",
        level: 85,
        icon: "🤖",
        yearsOfExperience: 0.5,
        description: "Leveraging AI for code generation and automation"
      },
      {
        name: "Data Structures & Algorithms",
        level: 85,
        icon: "🧩",
        yearsOfExperience: 10,
        description: "Strong foundation in computer science fundamentals"
      }
    ]
  }
];
