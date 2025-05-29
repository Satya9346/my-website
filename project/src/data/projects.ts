export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Blood Group Prediction Using Fingerprints",
    description: "Developed an ML-based system for predicting blood groups from fingerprint patterns with 90% accuracy, implemented as a full-stack web application using React and Flask.",
    image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Machine Learning", "React", "Flask", "TensorFlow"],
    githubUrl: "https://github.com/Satya9346/Blood-group-Deteection"
  },
  {
    id: 2,
    title: "Zidio Task Management Platform",
    description: "Built a real-time task management platform with interactive dashboards and calendar views using the MERN stack, featuring secure authentication and collaborative features.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    githubUrl: "https://github.com/developertarun01/Zidio-Task-Management"
  },
  {
    id: 3,
    title: "Geospatial Feature Detection & Segmentation",
    description: "Implemented a YOLOv11 + SAM2 pipeline for land use classification using AID and NWPU datasets, achieving high accuracy in feature detection and segmentation.",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "YOLOv11", "SAM2", "Computer Vision", "Deep Learning"],
  
  },
  {
    id: 4,
    title: "Tomato Disease Detection",
    description: "Developed a YOLOv9-based system for real-time tomato disease detection, achieving 67.16% precision with a rapid detection time of 0.144 seconds.",
    image: "https://images.pexels.com/photos/5528994/pexels-photo-5528994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "YOLOv9", "Computer Vision", "Deep Learning"],
    
];