import type { Experience, Project, Skill, Education, Certification, Achievement, Publication } from '../types';
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Jr Software Engineer, G0',
    company: 'Zensar Technologies',
    duration: 'Sep 2026 – Present',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    description: [
      'Contributing to AI-driven and full-stack application development using Generative AI, LLMs, Python, Java, Spring Boot, and React.',
      'Developing and integrating AI/ML solutions, RESTful APIs, and web applications, focusing on scalable and reliable solutions.',
      'Collaborating in an Agile development environment on feature implementation, AI solution development, testing, debugging, and technical documentation.'
    ]
  },
  {
    id: '2',
    title: 'Java Full Stack Developer Intern',
    company: 'Zensar Technologies',
    duration: 'Mar 2026 – Sep 2026',
    location: 'Pune, Maharashtra',
    type: 'Internship',
    description: [
      'Developed RESTful APIs using Java and Spring Boot for a microservice-based application, ensuring secure and scalable backend services.',
      'Built and maintained full-stack web modules using Spring Boot, React, HTML, CSS, and JavaScript, resolving application issues and improving user experience.',
      'Collaborated in an Agile development environment, contributing to feature implementation, debugging, testing, and technical documentation.'
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
    items: ['Python', 'Java', 'SQL', 'C/C++', 'JavaScript', 'Kotlin']
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Feature Engineering', 'Model Evaluation']
  },
  {
    category: 'Generative AI',
    items: ['Generative AI', 'LLMs', 'RAG', 'Prompt Engineering', 'Embeddings', 'LangChain', 'FAISS', 'Multi-Agent Systems', 'Vector Search']
  },
  {
    category: 'Web & Backend',
    items: ['Spring Boot', 'React', 'Angular', 'Flask', 'Django', 'REST APIs', 'Microservices', 'HTML', 'CSS']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'SQL/DBMS']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Linux', 'Git', 'GitHub', 'CI/CD', 'MLflow', 'DVC']
  },
  {
    category: 'Data Science',
    items: ['Data Analysis', 'NumPy', 'Pandas', 'Scikit-learn', 'Statistical Analysis', 'EDA']
  },
  {
    category: 'Testing & Tools',
    items: ['pytest', 'Streamlit', 'Google Gemini API']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'AISSMS Institute of Information Technology',
    duration: 'Sept 2023 – June 2026',
    location: 'Pune, Maharashtra',
    details: ['CGPA: 8.46'],
    link: '/Degree_Certificate.pdf'
  },
  {
    id: '2',
    degree: 'Diploma in Computer Technology',
    institution: 'Jayawantrao Sawant Polytechnic',
    duration: 'Dec 2020 – June 2023',
    location: 'Pune, Maharashtra',
    details: ['Percentage: 85%'],
    link: '/Diploma_Certificate.jpg'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'Microsoft & LinkedIn Learning',
    date: '2026',
    link: 'https://www.linkedin.com/learning/certificates/5ef2b1df7984c5432fe5c2ddf8091f6635a2674cf25aa801d8cce660387c55e4?trk=share_certificate'
  },
  {
    id: '2',
    title: 'Building Generative AI Skills for Developers',
    issuer: 'Microsoft & LinkedIn Learning',
    date: '2024',
    link: 'https://www.linkedin.com/learning/certificates/206f57bb7dcbaa65242d5b7d151af491f1d92ee4e63ce71248361c24b284b897?trk=share_certificate'
  },
  {
    id: '3',
    title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    date: '2026',
    link: 'https://learn.microsoft.com/en-in/users/shreyasraut-0880/credentials/4aef11950cfae4ec'
  },
  {
    id: '4',
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    date: '2025',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=11A4A3E126300C2F814A4E2E9B9B6F2F8D143038F339A68F643F07F59F58D5B8'
  },
  {
    id: '5',
    title: 'Deep Certificate in Python Programming',
    issuer: 'MKCL',
    date: '2024',
    details: '120 hours, 99/100, Credit Level 4.5 (National Credit Framework)',
    link: '/MKCL_Certificate.pdf'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Advancing Media Integrity Through AI-Powered Fake News Detection',
    date: 'April 2025',
    description: 'A comprehensive review of AI-powered fake news detection techniques, covering machine learning, deep learning, natural language processing, transformer-based models, and multimodal approaches. The study analyzes existing datasets, methodologies, evaluation techniques, research gaps, and future directions for developing reliable and scalable fake news detection systems.',
    authors: 'Anurag Mahalpure · Abhishek Marwade · Prathamesh Kadam · Shreyas Raut',
    journal: 'International Journal of Research and Analytical Reviews (IJRAR)',
    volumeInfo: 'Volume 12 · Issue 2 · Paper ID: IJRAR25B2156',
    researchAreas: ['Artificial Intelligence', 'Machine Learning', 'NLP', 'Fake News Detection'],
    link: '/FakeNews_ResearchPaper.pdf'
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: '🏆 Subject Topper Award',
    description: 'Introduction to Industry 4.0 and Industrial IoT',
    link: 'https://www.linkedin.com/posts/shreyas-raut-ba1103297_iiot-subjecttopper-achievement-activity-7460014554077454336-J0aW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe9lukBuHNRXPV4qzyY6NCBMVaWSmzuZBQ'
  }
];
