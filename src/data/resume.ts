import type { Experience, Project, Skill, Education, Certification } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Data Science Intern',
    company: 'Unified Mentor Pvt Ltd',
    duration: 'Sept 2025 – Present',
    location: 'Remote',
    type: 'Internship',
    description: [
      'Pursuing 3-month data science internship focusing on machine learning and data analysis projects',
      'Developing predictive models and performing exploratory data analysis on real-world datasets',
      'Applying statistical techniques and ML algorithms to extract insights and solve business problems'
    ]
  },
  {
    id: '2',
    title: 'App Dev Intern',
    company: 'Fizito Digital',
    duration: 'Feb 2025 – Mar 2025',
    location: 'Pune, Maharashtra',
    type: 'Internship',
    description: [
      'Built Android app to scan SMS for malicious links using VirusTotal API',
      'Implemented real-time phishing alerts and ensured user data privacy'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Code Assistant with Fine-Tuned Model',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Streamlit', 'Hugging Face', 'Git'],
    duration: 'Dec 2025',
    description: 'Fine-tuned CodeGen-350M model on CodeAlpaca-20k dataset achieving 70% code accuracy. Production-ready Streamlit application with dual-mode inference (local + cloud) and complete training pipeline optimized for 4GB VRAM GPUs.',
    highlights: [
      'Fine-tuned on 19,020 high-quality code examples',
      '60% accuracy improvement over base model',
      'Complete automated training pipeline with resume capability',
      'Dual inference modes: Local fine-tuned model + Cloud API fallback',
      'Model published on Hugging Face Hub for community use',
      'Memory-optimized for GTX 1650 (4GB VRAM) using BF16 precision'
    ],
    link: 'https://github.com/shreyasraut0707/LocalCodeAssistant'
  },
  {
    id: '2',
    title: 'Real-Time AI Chatbot',
    technologies: ['Next.js', 'Socket.io', 'Node.js', 'Mistral AI', 'Tailwind CSS'],
    duration: 'Nov 2025',
    description: 'Next.js-based AI chatbot featuring live streaming responses via Socket.io and OpenRouter API. Implements real-time WebSocket communication with markdown rendering, typing indicators, and mobile-responsive interface.',
    highlights: [
      'Token-by-token streaming AI responses with no buffering',
      'WebSocket-powered real-time bidirectional communication',
      'Complete markdown rendering with code syntax highlighting',
      'Mobile-first responsive design with connection status',
      'Dual-server architecture (Next.js frontend + Node.js backend)',
      'Environment-based configuration with security best practices'
    ],
    link: 'https://github.com/shreyasraut0707/Realtime-AI-Chatbot'
  },
  {
    id: '3',
    title: 'PM Internship Recommendation Engine',
    technologies: ['Python', 'Flask', 'Scikit-Learn', 'Pandas', 'HTML/CSS'],
    duration: 'Mar 2025',
    description: 'Intelligent recommendation system for Prime Minister\'s Internship Scheme matching students with opportunities based on education, skills, and location using TF-IDF algorithm and Flask backend.',
    highlights: [
      'TF-IDF machine learning algorithm for personalized matching',
      '200+ PM internship opportunities across 50+ companies',
      'Smart education-based filtering for 12+ fields',
      'Multi-criteria filtering (location, stipend, skills)',
      'Mobile-responsive UI with Government branding',
      'Real company career page integrations'
    ],
    link: 'https://github.com/shreyasraut0707/pm-internship-engine'
  },
  {
    id: '4',
    title: 'News Research Tool',
    technologies: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini API'],
    duration: 'Jan 2025',
    description: 'Streamlit app for news ingestion and AI-powered Q&A with fast retrieval using embeddings and FAISS.',
    highlights: [
      'Supports multiple news sources and formats',
      'Vectorized search using FAISS for fast retrieval',
      'LLM-powered question answering system'
    ],
    link: 'https://github.com/shreyasraut0707/insightbot'
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS', 'TypeScript']
  },
  {
    category: 'Machine Learning & AI',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'RAG', 'Prompt Engineering']
  },
  {
    category: 'Data Science',
    items: ['Data Analysis', 'Data Structures', 'Big Data Analytics', 'Statistical Analysis', 'FAISS', 'Embeddings']
  },
  {
    category: 'Web Technologies',
    items: ['ReactJS', 'HTML/CSS', 'JavaScript', 'Streamlit', 'REST APIs']
  },
  {
    category: 'Developer Tools',
    items: ['VS Code', 'PyCharm', 'Android Studio', 'Git', 'GitHub', 'Docker', 'Linux']
  },
  {
    category: 'Databases & Frameworks',
    items: ['MongoDB', 'SQL/DBMS', 'LangChain', 'OpenCV', 'DBMS']
  },
  {
    category: 'Other Tools',
    items: ['PowerBI', 'Tableau', 'Android Development', 'Prompt Engineering', 'Vector Search']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'AISSMS Institute of Information Technology',
    duration: 'Sept 2023 – June 2026',
    location: 'Pune, Maharashtra',
    details: ['CGPA: 8.17']
  },
  {
    id: '2',
    degree: 'Diploma in Computer Technology',
    institution: 'Jayawantrao Sawant Polytechnic',
    duration: 'Dec 2020 – June 2023',
    location: 'Pune, Maharashtra',
    details: ['Percentage: 84.86%'],
    link: '/Diploma_Certificate.jpg'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn Learning',
    date: '2024',
    link: '/GenAI_Certificate.pdf'
  },
  {
    id: '2',
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    date: '2025',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=11A4A3E126300C2F814A4E2E9B9B6F2F8D143038F339A68F643F07F59F58D5B8'
  },
  {
    id: '3',
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    date: 'Mar 2024',
    link: '/Oracle_Certificate.pdf'
  },
  {
    id: '4',
    title: 'Deep Certificate in Python Programming',
    issuer: 'MKCL',
    date: '2024',
    details: '120 hours, 99/100, Credit Level 4.5 (National Credit Framework)',
    link: '/MKCL_Certificate.pdf'
  }
];

export const publications = [
  {
    id: '1',
    title: 'Advancing Media Integrity through AI-Powered Fake News Detection',
    date: 'Mar 2024 – Apr 2024',
    description: 'Designed and implemented ML model to detect and classify misinformation in digital media content analyzing linguistic patterns and source credibility for real-time accuracy assessments.'
  }
];
