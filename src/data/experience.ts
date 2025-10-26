export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo?: string;
  current?: boolean;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "Agoda",
    position: "Senior Full Stack Engineer",
    duration: "4 years 9 months",
    startDate: "Feb 2021",
    endDate: "Present",
    location: "Bangkok, Thailand",
    type: "Full-time",
    description: "Leading the design and deployment of high-performance web applications in the online travel industry, focusing on scalability, AI automation, and microservices architecture.",
    responsibilities: [
      "Design and architect enterprise-grade solutions from epic understanding to production deployment",
      "Create comprehensive system designs and present technical proposals to stakeholders",
      "Develop and maintain microservices using Java, Spring Boot, and React.js",
      "Implement AI-powered automation solutions to improve operational efficiency",
      "Mentor junior engineers and conduct code reviews to maintain high code quality standards",
      "Monitor and optimize system performance using Grafana, Prometheus, and OpenTelemetry"
    ],
    achievements: [
      "Built Java-ChatGPT email analysis system, reducing handling time by 5% and saving $3.5M annually",
      "Created React.js quick-access component, cutting flight handling time by 3% and saving $2.1M annually",
      "Deployed flight management system, reducing turnaround times by 20%",
      "Developed Kafka-based real-time messaging system, lowering transaction latency by 25%",
      "Executed cloud migration for 5 services, cutting operational costs by 10%",
      "Enhanced system resilience through chaos engineering, driving 15% increase in direct bookings",
      "Mentored 5 junior engineers, reducing ramp-up time from 6 weeks to 4 weeks"
    ],
    technologies: ["Java", "Spring Boot", "React.js", "Microservices", "Kafka", "MySQL", "Redis", "Docker", "Kubernetes", "Grafana", "Prometheus", "AI/ChatGPT"],
    current: true
  },
  {
    id: 2,
    company: "DBS Bank",
    position: "Software Engineer / Data Analyst",
    duration: "1 year 8 months",
    startDate: "Jun 2019",
    endDate: "Jan 2021",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Developed and optimized backend systems for banking operations, focusing on payment gateways, system modernization, and process automation.",
    responsibilities: [
      "Designed and implemented payment gateway systems for high-volume transactions",
      "Led Java version upgrade initiative from Java 8 to Java 11",
      "Developed Python-based automation tools for data analysis and reporting",
      "Implemented automated monitoring systems for real-time transaction tracking",
      "Collaborated with cross-functional teams on digital transformation initiatives"
    ],
    achievements: [
      "Designed payment gateway improving transaction reliability by 15%, handling 500K+ transactions",
      "Upgraded Java 8 to 11, enhancing system efficiency by 15% and strengthening security",
      "Built Python-based anomaly reporting tool, reducing report generation time by 15% for 1,000+ reports",
      "Implemented real-time monitoring dashboards for critical banking operations",
      "Contributed to digital transformation initiatives across multiple banking applications"
    ],
    technologies: ["Java", "Spring Boot", "Python", "SQL Server", "REST APIs", "Maven", "Git", "Jenkins"],
  },
  {
    id: 3,
    company: "Talentica Software",
    position: "Backend Engineer",
    duration: "1 year 8 months",
    startDate: "Oct 2017",
    endDate: "May 2019",
    location: "Pune, India",
    type: "Full-time",
    description: "Spearheaded backend development for e-commerce platforms, focusing on AI-powered solutions and microservices optimization.",
    responsibilities: [
      "Architected and developed backend microservices using Java and Spring Boot",
      "Built NLP-powered chatbot for customer service automation",
      "Optimized API performance and reduced response times",
      "Implemented asynchronous processing for improved system throughput",
      "Collaborated with frontend teams to ensure seamless API integration"
    ],
    achievements: [
      "Built NLP-powered chatbot handling 15K+ queries monthly, earning SPOT Award",
      "Revamped 10+ backend microservices, reducing API response time by 150ms",
      "Implemented asynchronous processing improving system throughput by 30%",
      "Enhanced system architecture for better scalability and fault tolerance",
      "Contributed to significant improvements in user engagement metrics"
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "NLP", "MySQL", "REST APIs", "Redis", "Maven", "Git"],
  },
  {
    id: 4,
    company: "Intellect Design Arena",
    position: "Software Developer",
    duration: "2 years 4 months",
    startDate: "Jun 2015",
    endDate: "Sep 2017",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Developed custom dashboards and data visualization solutions for insurance industry clients, focusing on usability and innovation.",
    responsibilities: [
      "Built custom dashboards centralizing client data for insurance professionals",
      "Developed JavaScript libraries for data visualization",
      "Integrated Ext JS and D3.js for dynamic and interactive representations",
      "Collaborated with cross-functional teams to enhance frontend performance",
      "Delivered scalable solutions for insurance applications"
    ],
    achievements: [
      "Built custom dashboards increasing daily logins by 10%",
      "Won GEM Award for creating JavaScript library integrating Ext JS and D3.js",
      "Improved data visualization capabilities across multiple client applications",
      "Enhanced frontend performance through optimization techniques",
      "Established foundation for data-driven decision-making tools"
    ],
    technologies: ["Java", "JavaScript", "Ext JS", "D3.js", "HTML/CSS", "SQL Server", "REST APIs"],
  }
];

