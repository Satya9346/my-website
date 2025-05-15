interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C", level: 85 },
      { name: "Java", level: 80 },
      { name: "HTML/CSS", level: 85 }
    ]
  },
  {
    name: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", level: 85 },
      { name: "Data Science", level: 80 },
      { name: "Computer Vision", level: 75 },
      { name: "Deep Learning", level: 75 }
    ]
  },
  {
    name: "Tools & Technologies",
    items: [
      { name: "Jupyter Notebook", level: 90 },
      { name: "VS Code", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Excel", level: 85 }
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "MySQL", level: 80 },
      { name: "DBMS", level: 75 }
    ]
  },
  {
    name: "Soft Skills",
    items: [
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Adaptability", level: 90 },
      { name: "Team Collaboration", level: 85 }
    ]
  }
];