export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experience: Experience[] = [
  {
    company: "IBM",
    role: "Data Analytics Intern",
    period: "Jun 2024 - Aug 2024",
    location: "Skills Build Program",
    responsibilities: [
      "Participating in IBM's Skills Build program focusing on data analytics",
      "Working on real-world data analysis projects and case studies",
      "Learning advanced analytics tools and methodologies",
      "Collaborating with team members on data-driven solutions"
    ]
  },
  {
    company: "Internship Studio",
    role: "Machine Learning Intern",
    period: "Jun 2024 - Jul 2024",
    location: "Remote",
    responsibilities: [
      "Developed predictive models for YouTube ad view analysis",
      "Implemented data preprocessing and feature engineering techniques",
      "Created visualization dashboards for analytics insights",
      "Presented findings and recommendations to stakeholders"
    ]
  },
  {
    company: "Evolution Technology",
    role: "AI Project Intern",
    period: "Feb 2024 - Apr 2024",
    location: "Remote",
    responsibilities: [
      "Worked on artificial intelligence projects and implementations",
      "Developed machine learning models for various applications",
      "Collaborated with team members on AI solutions",
      "Participated in project planning and execution"
    ]
  },
  {
    company: "Zidio Development",
    role: "Web Development Intern",
    period: "Jan 2024 - Apr 2024",
    location: "Remote",
    responsibilities: [
      "Developed full-stack web applications using modern technologies",
      "Implemented responsive user interfaces and interactive features",
      "Collaborated with senior developers on project development",
      "Participated in code reviews and testing procedures"
    ]
  }
];