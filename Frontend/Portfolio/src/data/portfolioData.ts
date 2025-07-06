// src/data/portfolioData.ts
import { Globe, Users, Server, BarChart3, Database, Brain } from 'lucide-react';
import { PortfolioData } from '../types/portfolio.types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jayanth Mani",
    contact: {
      email: "mani.j@northeastern.edu",
      phone: "(857) 506-3330",
      location: "Boston, MA",
      linkedin: "https://linkedin.com/in/jayanth-mani-b478a51b9/",
      github: "https://github.com/jayanthmani8045"
    }
  },
  
  roles: {
    software: {
      title: "Software Engineer",
      subtitle: "Full-Stack Developer & System Architect",
      description: "Passionate software engineer with expertise in building scalable web applications, automation systems, and modern user experiences. Experienced in full-stack development with a focus on performance optimization and user-centric design.",
      experience: {
        title: "Software Engineer",
        company: "TATA Consultancy Services Limited",
        location: "Chennai, India",
        duration: "Feb 2022 – Aug 2023",
        highlights: [
          "Lexmark International, Inc. ($1.2B): Developed C++ & Python-based automation scripts to streamline network operations across 70+ global locations (USA, Australia, China), reducing downtime upto 40%",
          "Collaborated in an agile environment with Fortinet, Cisco, and key clients to gather business needs and assess technical designs, driving the iterative delivery of network solutions and achieving a 30% reduction in latency",
          "Deployed real-time telemetry pipelines ingesting ISE/NAC, WLC, firewall, and switch data via SQL and FastAPI, empowering 24/7 network visibility and accelerating incident detection by 80%"
        ],
        tech: ["Python", "SQL", "Oracle", "Git", "Excel", "UiPath", "FastAPI"],
        award: ["Ranked top 10% in TCS Readiness Proctored Assessment, showcasing expertise in OOP and UNIX"]
      },
      projects: [
        {
          title: "MARC - Management Aligned Relative to Construction",
          duration: "Sep 2024 – Dec 2024",
          description: "Built a responsive PWA for construction workflows, improving project management efficiency by 40%",
          highlights: [
            "Designed a full-stack platform with Fugu capabilities and internationalisation (i18n) for multi-language",
            "Improved UI by 20%, with dynamic dashboards (React Chart.js), interactive maps (MapBox API)",
            "Architected scalable backend with Express.js and MongoDB integration"
          ],
          tech: ["React.js", "JavaScript", "TypeScript", "SCSS", "Node.js", "Express.js", "Redux toolkit", "MongoDB", "Material UI"],
          iconName: "Globe"
        },
        {
          title: "Talent Search",
          duration: "Sep 2024 – Dec 2024",
          description: "Implemented an AI-powered document analysis system leveraging OpenAI NLP models",
          highlights: [
            "Reduced 80% of recruitment time through automated assessment and ranking",
            "Directed a diverse team to surpass project milestones with timely deliverables",
            "Integrated Spring Boot backend with React frontend for seamless user experience"
          ],
          tech: ["Java", "Git", "Spring Boot", "React.js", "MongoDB"],
          iconName: "Users"
        },
        {
          title: "Food Conservation Portal",
          duration: "Jan 2025 – Apr 2025",
          description: "Boosted food-redistribution efficiency by 70% through a normalized ER-driven schema",
          highlights: [
            "Automated data operations with PL/SQL packages for suppliers, NGOs, and logistics",
            "Established Oracle user management and role-based access controls",
            "Built responsive React frontend with TailwindCSS for optimal user experience"
          ],
          tech: ["Oracle Autonomous Database", "PL/SQL", "FastAPI", "React", "Axios", "Git", "TailwindCSS"],
          iconName: "Server"
        },
        {
          title: "Data-Driven Travel Reimbursement Predictor",
          duration: "Apr 2025 – Jun 2025",
          description: "Designed a Python CLI tool leveraging machine learning to automate reimbursement estimates",
          highlights: [
            "Achieved 80% R² with under $200 error through evaluation on 1,000+ historical cases",
            "Optimized runtime by persisting models with joblib for instantaneous predictions",
            "Implemented Random Forest algorithm with comprehensive feature engineering"
          ],
          tech: ["Python", "pandas", "scikit-learn", "joblib", "Bash", "Machine Learning"],
          iconName: "BarChart3"
        },
        {
          title: "AI-Powered Talent Analytics",
          duration: "Sep 2024 – Dec 2024",
          description: "Implemented advanced NLP-based document analysis system for recruitment optimization",
          highlights: [
            "Leveraged OpenAI NLP models to assess and rank submissions against predefined criteria",
            "Reduced recruitment time by 80% through automated candidate evaluation",
            "Built scalable data processing pipeline handling thousands of documents"
          ],
          tech: ["Python", "OpenAI API", "NLP", "Java", "Spring Boot", "MongoDB"],
          iconName: "Brain"
        }
      ],
      skills: {
        "Programming Languages": ["C & C++", "Java", "Python", "SQL", "PL/SQL", "JavaScript", "TypeScript",  "R"],
        "Web Technologies": ["HTML5", "CSS", "React.js", "Node.js", "Express.js", "FastAPI"],
        "Databases": ["MongoDB", "Oracle SQL Database", "Microsoft SQL Server", "MySQL","Snowflake", "Databricks"],
        "Tools & Platforms": ["Git", "Docker", "Azure", "AWS", "Google Cloud Platform", "CI/CD"],
        "Development Tools": ["Eclipse", "Visual Studio", "PyCharm", "Cursor"],
        "ML & AI Tools": ["Pandas", "Scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "NumPy"],
        "Visualization": ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel"],
        "Cloud & Infrastructure": ["Azure", "Google Cloud Platform", "Docker", "CI/CD"],
        "Networking & Systems": ["TCP/IP", "OSPF", "ISIS", "ACL", "SDN", "BGP", "WLC", "DNS", "IoT"]
      }
    },
    
    data: {
      title: "Data Engineer & AI/ML Specialist",
      subtitle: "Data Pipeline Architect & Machine Learning Engineer",
      description: "Results-driven data engineer with expertise in building robust ETL pipelines, implementing machine learning solutions, and enabling data-driven decision making. Specialized in real-time data processing, predictive analytics, and scalable data architecture.",
      experience: {
        title: "Data Engineer",
        company: "TATA Consultancy Services Limited",
        location: "Chennai, India",
        duration: "Feb 2022 – Aug 2023",
        highlights: [
          "Accelerated data readiness by developing Python ETL pipelines that ingested, validated, and unified telemetry from 70+ global locations",
          "Reduced anomaly response time by designing agile pipelines with automated validation checks, detecting 98% of data errors",
          "Streamlined data migrations by leading stakeholder workshops, mapping 150+ fields to new schemas with zero loss",
          "Enabled proactive analytics by engineering real-time data pipelines sustaining 99.9% data integrity"
        ],
        tech: ["Python", "SQL", "Oracle", "Git", "Excel", "ETL", "Data Pipelines"],
        award: ["Ranked top 10% in TCS Readiness Proctored Assessment, showcasing expertise in OOP and UNIX"]
      },
      projects: [
        {
          title: "Data-Driven Travel Reimbursement Predictor",
          duration: "Apr 2025 – Jun 2025",
          description: "Designed a Python CLI tool leveraging machine learning to automate reimbursement estimates",
          highlights: [
            "Achieved 80% R² with under $200 error through evaluation on 1,000+ historical cases",
            "Optimized runtime by persisting models with joblib for instantaneous predictions",
            "Implemented Random Forest algorithm with comprehensive feature engineering"
          ],
          tech: ["Python", "pandas", "scikit-learn", "joblib", "Bash", "Machine Learning"],
          iconName: "BarChart3"
        },
        {
          title: "Food Conservation Portal - Data Architecture",
          duration: "Jan 2025 – Apr 2025",
          description: "Architected comprehensive data management system for food redistribution optimization",
          highlights: [
            "Boosted food-redistribution efficiency by 70% through normalized ER-driven schema",
            "Enforced data integrity and end-to-end auditability via database triggers",
            "Automated data operations with PL/SQL packages for complex business logic"
          ],
          tech: ["Oracle Autonomous Database", "PL/SQL", "Data Modeling", "ETL", "FastAPI"],
          iconName: "Database"
        },
        {
          title: "AI-Powered Talent Analytics",
          duration: "Sep 2024 – Dec 2024",
          description: "Implemented advanced NLP-based document analysis system for recruitment optimization",
          highlights: [
            "Leveraged OpenAI NLP models to assess and rank submissions against predefined criteria",
            "Reduced recruitment time by 80% through automated candidate evaluation",
            "Built scalable data processing pipeline handling thousands of documents"
          ],
          tech: ["Python", "OpenAI API", "NLP", "Java", "Spring Boot", "MongoDB"],
          iconName: "Brain"
        }
      ],
      skills: {
        "Programming & Analytics": ["Python", "R", "SQL", "PL/SQL", "Java", "C & C++"],
        "Data Platforms": ["Snowflake", "Databricks", "Oracle SQL Database", "MongoDB", "Microsoft SQL Server", "MySQL"],
        "ML & AI Tools": ["Pandas", "Scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "NumPy"],
        "Visualization": ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel"],
        "Cloud & Infrastructure": ["Azure", "Google Cloud Platform", "Docker", "CI/CD"],
        "Networking & Systems": ["TCP/IP", "OSPF", "ISIS", "ACL", "SDN", "BGP", "WLC", "DNS", "IoT"]
      }
    }
  },
  
  education: [
    {
      degree: "Master's in Computer Software Engineering",
      school: "Northeastern University",
      location: "Boston",
      duration: "Sep 2024 - May 2026",
      gpa: "3.8/4.0",
      coursework: "Web design and user experience engineering, data management and database design, program structures and algorithms, network structures and cloud computing, data science engineering methods and tools"
    },
    {
      degree: "Bachelor's in Civil Engineering",
      school: "PSG College of Technology",
      location: "Coimbatore, India",
      duration: "Aug 2017 - Aug 2021"
    }
  ],
  
  certifications: [
    {
      title: "ITIL® Foundation",
      description: "ITIL® Into Practice: Applying ITIL® v3, v4 Foundation Concepts",
      issuer: "LinkedIn"
    },
    {
      title: "Microsoft Certified",
      description: "Windows Server: DHCP, High Availability, Storage",
      issuer: "LinkedIn"
    },
    {
      title: "HackerRank Certifications",
      description: "Python, Problem Solving, SQL",
      issuer: "HackerRank"
    },
    {
      title: "LinkedIn Certifications",
      description: "MERN Essential, Bash Shell Scripting",
      issuer: "HackerRank"
    }
  ]
};

// Icon mapping for components
export const iconMap = {
  Globe,
  Users,
  Server,
  BarChart3,
  Database,
  Brain
};