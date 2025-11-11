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
    title: 'AI-Based Internship Recommendation Engine',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    duration: 'Feb 2025 – Mar 2025',
    description: 'AI engine suggests PM internships using user profile and location with mobile-friendly web interface.',
    highlights: [
      'Designed for seamless integration with PM Internship Scheme portal',
      'Mobile-friendly web interface',
      'AI-powered recommendation system'
    ],
    link: 'https://github.com/shreyasraut0707/pm-internship-engine'
  },
  {
    id: '2',
    title: 'AI-Based Invisibility Cloak',
    technologies: ['Python', 'OpenCV'],
    duration: 'Aug 2024',
    description: 'Real-time invisibility effect via color detection and background capture with robust performance under varying lighting.',
    highlights: [
      'Real-time processing capability',
      'Robust performance under varying lighting conditions',
      'Advanced computer vision techniques'
    ]
  },
  {
    id: '3',
    title: 'News Research Tool',
    technologies: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini API'],
    duration: '2024',
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
    details: ['Percentage: 84.86%']
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn Learning',
    date: '2024'
  },
  {
    id: '2',
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    date: 'Mar 2024'
  },
  {
    id: '3',
    title: 'Deep Certificate in Python Programming',
    issuer: 'MKCL',
    date: '2024',
    details: '120 hours, 99/100, Credit Level 4.5 (National Credit Framework)'
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
