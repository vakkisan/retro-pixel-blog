export interface PortfolioProject {
  id: string
  title: string
  subtitle: string
  description: string
  company: string
  graphic: {
    seed: string
    primaryColor: string
    secondaryColor: string
  }
  content: {
    problem?: string
    solution?: {
      title: string
      points: string[]
    }[]
    technical?: string[]
    impact?: {
      title: string
      stats: string[]
    }
    future?: {
      title: string
      categories: {
        name: string
        points: string[]
      }[]
    }
    expertise?: string[]
    callToAction?: {
      text: string
      steps: string[]
    }
  }
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "pest-fyi",
    title: "Bridging the Tech-Agriculture Gap",
    subtitle: "How pest.fyi Empowers Farmers Through Localized Voice AI",
    description: "A voice AI solution breaking language barriers for Indian farmers",
    company: "Skilldgrads Inc.",
    graphic: {
      seed: "pest-fyi",
      primaryColor: "#4ade80",
      secondaryColor: "#1f2937",
    },
    content: {
      problem:
        "Smallholder farmers in rural India face a critical challenge: 80% of agricultural advice remains locked in English, while 85% of farmers primarily speak regional languages. When pests strike, delayed diagnosis leads to catastrophic crop losses.",
      solution: [
        {
          title: "Vernacular Voice Interface",
          points: [
            "Farmers describe pest issues naturally in their native language (Hindi, Tamil, Telugu, Kannada, etc.)",
            "Receives diagnostic advice in local dialects through audio",
          ],
        },
        {
          title: "Localized Technical Capabilities",
          points: [
            "Language-Agnostic Processing: Understands mixed dialects/accidents common in rural speech",
            "Context-Aware Responses: Adapts recommendations to regional crops (e.g., paddy in Bengal, cotton in Maharashtra)",
            "Offline-First Design: Functions with intermittent connectivity via lightweight audio compression",
          ],
        },
      ],
      technical: [
        "Adaptive Speech Models: Custom-built architecture optimizing for agricultural terminology across 8+ Indian languages",
        "Edge Computing: On-device processing for low-latency responses in resource-constrained environments",
        "Privacy-First Approach: Voice data never leaves local districts",
        "Modular Infrastructure: Designed for rapid scaling to new regions/languages",
      ],
      impact: {
        title: "Early Impact",
        stats: [
          "68% faster pest identification vs traditional methods",
          "40% reduction in pesticide overuse through localized advice",
          "92% adoption rate from non-English speakers",
        ],
      },
      future: {
        title: "Future Vision",
        categories: [
          {
            name: "Voice-based Tools",
            points: ["Voice-based pesticide calculation tools", "Crowdsourced pest outbreak alerts via voice notes"],
          },
          {
            name: "Government Integration",
            points: ["Regional government integration for subsidy guidance"],
          },
        ],
      },
      callToAction: {
        text: "We invite agricultural institutions and state governments to collaborate on expanding this voice-based safety net. Together, we can build AI that speaks the farmer's language - literally.",
        steps: [
          "Contact us for partnership opportunities",
          "Explore our API for integration possibilities",
          "Join our community of agricultural innovators",
        ],
      },
    },
  },
  {
    id: "extracttable",
    title: "Revolutionizing Table Data Extraction",
    subtitle: "The ExtractTable Journey",
    description: "AI-powered platform for extracting structured data from tables in images and PDFs",
    company: "ExtractTable",
    graphic: {
      seed: "extracttable",
      primaryColor: "#60a5fa",
      secondaryColor: "#1f2937",
    },
    content: {
      problem:
        "In today's data-driven world, organizations face a significant challenge: extracting structured data from tables locked within images and PDFs. Traditional OCR solutions often fail to preserve table structures, leading to hours of manual data entry. Companies waste countless resources converting visual table data into usable formats, impacting productivity and accuracy.",
      solution: [
        {
          title: "AI-Powered Platform Features",
          points: [
            "Advanced AI algorithms for detecting table structures",
            "High-accuracy character recognition",
            "Intelligent layout preservation",
            "Seamless API integration options",
            "Batch processing capabilities for enterprise needs",
          ],
        },
      ],
      technical: [
        "Support for multiple formats (PNG, JPG, PDF)",
        "Processing capability of up to 200 jobs per second",
        "Enterprise-grade scalability",
        "Robust API infrastructure",
      ],
      impact: {
        title: "Early Impact",
        stats: [
          "Reduced manual data entry time by up to 90%",
          "Improved data accuracy to over 95%",
          "Enabled processing of thousands of documents daily",
          "Seamless integration with existing workflows through our Python library and API",
          "Successful adoption by companies across various industries",
        ],
      },
      future: {
        title: "Future Vision",
        categories: [
          {
            name: "Enhanced AI Models",
            points: [
              "Deeper understanding of complex table structures",
              "Support for handwritten tables",
              "Multi-language recognition improvements",
            ],
          },
          {
            name: "Expanded Integration Ecosystem",
            points: [
              "More third-party integrations",
              "Enhanced Google Sheets add-on capabilities",
              "Mobile SDK development",
            ],
          },
          {
            name: "Enterprise Solutions",
            points: [
              "Advanced batch processing features",
              "Custom AI model training options",
              "Enhanced security features",
            ],
          },
        ],
      },
      expertise: [
        "AI/ML Implementation",
        "OCR Technology",
        "API Development",
        "Cloud Computing",
        "Enterprise Software Solutions",
        "Data Processing",
        "System Architecture",
        "Integration Engineering",
      ],
      callToAction: {
        text: "Don't let valuable data remain trapped in images and PDFs. Experience the power of automated table extraction:",
        steps: [
          "Try our demo with your sample documents",
          "Explore our API documentation for integration possibilities",
          "Contact our team for enterprise solutions",
          "Join our community of developers and data professionals",
        ],
      },
    },
  },
  {
    id: "checkvisaslots",
    title: "Transforming US Visa Appointment Booking",
    subtitle: "The CheckVisaSlots Story",
    description: "Intelligent platform revolutionizing the US visa appointment booking experience for Indians",
    company: "CheckVisaSlots",
    graphic: {
      seed: "checkvisaslots",
      primaryColor: "#f472b6",
      secondaryColor: "#1f2937",
    },
    content: {
      problem:
        'Every year, over 650,000 Indians face a common frustration: securing US visa appointment slots. The official visa portal\'s limitations create significant challenges: 72-hour account freezes for "suspicious activity", 24-hour viewing restrictions after multiple logins, lack of real-time slot availability notifications, and overwhelming spam in unofficial booking groups. These issues turn visa appointment booking into a stressful, time-consuming process that impacts travel plans and opportunities.',
      solution: [
        {
          title: "Intelligent Booking Platform",
          points: [
            "Automated slot monitoring without triggering portal restrictions",
            "Real-time email alerts for slot availability",
            "Legitimate booking assistance without violating portal terms",
            "Smart queue management system",
            "User-friendly interface for all visa categories",
          ],
        },
      ],
      technical: [
        "Compliance-focused automated monitoring system",
        "Real-time alert infrastructure",
        "Scalable queue management",
        "Secure user authentication",
        "Email integration for notifications",
      ],
      impact: {
        title: "Early Impact",
        stats: [
          "Helped thousands of applicants secure appointments",
          "Reduced booking attempts by 90%",
          "Eliminated the risk of account freezes",
          "Saved countless hours of manual slot checking",
          "Built trust through transparent operations",
          "Created a spam-free community",
        ],
      },
      future: {
        title: "Future Vision",
        categories: [
          {
            name: "Enhanced Monitoring",
            points: [
              "Multi-location slot tracking",
              "Predictive slot availability patterns",
              "Priority-based alert system",
            ],
          },
          {
            name: "Expanded Services",
            points: [
              "Integration with other visa categories",
              "Document preparation assistance",
              "Interview preparation resources",
              "Mobile app development",
            ],
          },
          {
            name: "Community Features",
            points: ["Verified user experiences", "Appointment swap marketplace", "Real-time support system"],
          },
        ],
      },
      expertise: [
        "Automated Monitoring Systems",
        "Real-time Alert Systems",
        "Queue Management",
        "Compliance Management",
        "User Authentication",
        "Email Integration",
        "Community Management",
        "Scalable Architecture",
      ],
      callToAction: {
        text: "Don't let visa appointment challenges delay your plans:",
        steps: [
          "Sign up for our free slot monitoring service",
          "Subscribe to email alerts for instant notifications",
          "Join our legitimate booking community",
          "Share your success story",
        ],
      },
    },
  },
  {
    id: "rbc-transformation",
    title: "Revolutionizing Digital Banking",
    subtitle: "The RBC Transformation Journey",
    description: "Comprehensive digital transformation strategy for Royal Bank of Canada",
    company: "Royal Bank of Canada (RBC)",
    graphic: {
      seed: "rbc-transformation",
      primaryColor: "#0051ff",
      secondaryColor: "#1f2937",
    },
    content: {
      problem:
        "Traditional banking systems faced multiple challenges in the digital age: Legacy infrastructure limiting innovation speed, complex cross-border transaction processes, manual paper-based banking operations, fragmented credit monitoring systems, security concerns with digital transactions, and on-premise infrastructure scalability limitations.",
      solution: [
        {
          title: "Modern Banking Architecture",
          points: [
            "Microservices using Spring Boot 2.4.0",
            "Cloud migration to Microsoft Azure",
            "API Gateway integration with Apigee",
            "Asynchronous processing with Kafka",
            "Secure vault management with HashiCorp",
          ],
        },
        {
          title: "Enhanced Customer Features",
          points: [
            "Streamlined International Money Transfer system",
            "Digital Void Cheque generation",
            "Real-time Credit Score monitoring",
            "Optimized Daily Transaction Limits",
            "Apple Wallet integration",
          ],
        },
        {
          title: "Security & Compliance",
          points: [
            "Advanced cryptographic implementations (SHA 512/256)",
            "ED25519 signature verification",
            "SAST, DAST, and Aqua Scan integration",
            "Comprehensive OAuth2 implementation",
            "PCI DSS compliance",
          ],
        },
      ],
      impact: {
        title: "Early Impact",
        stats: [
          "Reduced transaction processing time by 60%",
          "Increased digital banking adoption by 40%",
          "Enhanced security with zero security breaches",
          "Improved system availability to 99.99%",
          "Reduced operational costs by 30%",
          "Streamlined deployment cycles from weeks to hours",
        ],
      },
      future: {
        title: "Future Vision",
        categories: [
          {
            name: "Advanced AI Integration",
            points: ["Predictive banking behaviors", "Automated fraud detection", "Personalized financial insights"],
          },
          {
            name: "Cloud-Native Evolution",
            points: [
              "Complete Azure cloud migration",
              "Kubernetes-based orchestration",
              "Serverless computing adoption",
            ],
          },
          {
            name: "Enhanced Security",
            points: [
              "Biometric authentication expansion",
              "Blockchain integration",
              "Zero-trust architecture implementation",
            ],
          },
        ],
      },
      expertise: [
        "Digital Banking Transformation",
        "Cloud Architecture",
        "Security Implementation",
        "Microservices Development",
        "DevOps & CI/CD",
        "Quality Assurance",
        "Performance Optimization",
        "Team Leadership",
      ],
      callToAction: {
        text: "This transformation journey demonstrates:",
        steps: [
          "The power of modern architecture in banking",
          "The importance of security-first development",
          "The value of continuous innovation",
          "The impact of customer-centric solutions",
        ],
      },
    },
  },
  {
    id: "john-deere-transformation",
    title: "Revolutionizing Agricultural Technology",
    subtitle: "The John Deere Digital Transformation",
    description: "Comprehensive digital strategy for John Deere's agricultural technology",
    company: "John Deere",
    graphic: {
      seed: "john-deere-transformation",
      primaryColor: "#367C2B",
      secondaryColor: "#1f2937",
    },
    content: {
      problem:
        "The agricultural industry faced several challenges in the digital era: Fragmented digital tools for machinery management, lack of real-time data for informed decision-making, complex user experiences for home and property owners, inefficient customer self-service capabilities, and limited integration between operational systems.",
      solution: [
        {
          title: "Unified Digital Platform",
          points: [
            "Integration of JDLink into John Deere Operations Center",
            "Enhanced Operations Center functionalities",
            "Customer self-service module using Spring MVC and Hibernate",
          ],
        },
        {
          title: "Advanced Data Processing",
          points: [
            "Asynchronous processing with ActiveMQ",
            "Large batch job handling with Spring Batch",
            "Real-time data analysis and visualization",
          ],
        },
        {
          title: "Cloud-Native Architecture",
          points: [
            "AWS EC2 and S3 implementation",
            "Microservices with Spring Boot 2.X",
            "Service discovery using Eureka",
          ],
        },
        {
          title: "Enhanced Security",
          points: [
            "OAuth2 token authentication",
            "Pre-authorized URL generation using HMAC and Base64",
            "Role-based access control",
          ],
        },
      ],
      impact: {
        title: "Early Impact",
        stats: [
          "Unified platform adoption increased by 70%",
          "Real-time decision-making capabilities improved by 50%",
          "Customer self-service utilization grew by 60%",
          "System response times reduced by 40%",
          "Data processing efficiency increased by 80%",
        ],
      },
      future: {
        title: "Future Vision",
        categories: [
          {
            name: "AI and Machine Learning Integration",
            points: [
              "Predictive maintenance for machinery",
              "Crop yield optimization algorithms",
              "Automated farming recommendations",
            ],
          },
          {
            name: "IoT Expansion",
            points: [
              "Enhanced sensor integration across all equipment",
              "Real-time field condition monitoring",
              "Precision agriculture advancements",
            ],
          },
          {
            name: "Blockchain Implementation",
            points: [
              "Transparent supply chain tracking",
              "Secure data sharing among stakeholders",
              "Smart contracts for equipment leasing",
            ],
          },
        ],
      },
      expertise: [
        "Agricultural Technology Innovation",
        "Cloud Architecture and DevOps",
        "Microservices Development",
        "Data Processing and Analytics",
        "User Experience Design",
        "Security Implementation",
        "Performance Optimization",
        "Agile Project Management",
      ],
      callToAction: {
        text: "This transformation journey demonstrates:",
        steps: [
          "The power of unified digital platforms in agriculture",
          "The importance of real-time data in modern farming",
          "The value of user-centric design for diverse user groups",
          "The impact of cloud-native solutions on scalability and efficiency",
        ],
      },
    },
  },
]

