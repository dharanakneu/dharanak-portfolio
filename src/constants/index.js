import {
    thoughtworks,
    cybage,
    parkmate,
    grab,
    experian,
    tesla
  } from "../assets";
  import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaAngular, FaPython, FaAws, FaDocker } from "react-icons/fa";
  import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
  import { TfiMicrosoftAlt } from "react-icons/tfi";
  import { DiMsqlServer, DiMysql } from "react-icons/di";
  import { FaGolang } from "react-icons/fa6";
  import { PiFileCpp, PiFileCSharp } from "react-icons/pi";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: FaJava,
      duration: 2,
      color: "#FFA500", 
    },
    {
      name: "Spring Boot",
      icon: BiLogoSpringBoot,
      duration: 1.5,
      color: "#00FF00", 
    },
    {
      name: ".NET",
      icon: TfiMicrosoftAlt,
      duration: 3.5,
      color: "#0000FF", 
    },
    {
      name: "C#",
      icon: PiFileCSharp,
      duration: 2,
      color: "#9179E4", 
    },
    {
      name: "Python",
      icon: FaPython,
      duration: 4.5,
      color: "#FFFF00", 
    },
    {
      name: "Golang",
      icon: FaGolang,
      duration: 3.5,
      color: "#00ADD8", 
    },
    {
      name: "React",
      icon: FaReact,
      duration: 2.5,
      color: "#61dafb", 
    },
    {
      name: "Angular",
      icon: FaAngular,
      duration: 4,
      color: "#dd1b16", 
    },
    {
      name: "AWS",
      icon: FaAws,
      duration: 2.5,
      color: "#FF9900", 
    },
    {
      name: "Docker",
      icon: FaDocker,
      duration: 3.5,
      color: "#0db7ed", 
    },
    {
      name: "Postgres",
      icon: BiLogoPostgresql,
      duration: 3,
      color: "#336791", 
    },
    {
      name: "Microsoft SQL Server",
      icon: DiMsqlServer,
      duration: 2,
      color: "#FFFF00", 
    },
    {
      name: "MySQL",
      icon: DiMysql,
      duration: 2,
      color: "#336791", 
    },
    {
      name: "JavaScript",
      icon: FaJs,
      duration: 3,
      color: "#F7DF1E",
    },
    {
      name: "C++",
      icon: PiFileCpp,
      duration: 2.5,
      color: "#F7DF1E",
    },
    {
      name: "HTML 5",
      icon: FaHtml5,
      duration: 2.5,
      color: "#E34F26",
    },
    {
      name: "CSS 3",
      icon: FaCss3Alt,
      duration: 4,
      color: "#1572B6",
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E31937",
      date: "May 2025 - Aug 2025",
      points: [
        "Contributed to the development of backend services powering Tesla’s global tax compliance infrastructure, enabling accurate and scalable tax computation across energy, retail, manufacturing, and service domains.",
        "Integrated internal platforms with third-party tax engines to automate real-time tax calculation and ensure regulatory compliance across multiple international jurisdictions.",
        "Gained deep exposure to enterprise architecture, financial systems, and large-scale backend engineering in a high-impact, fast-paced environment."
      ]
    },
    {
      title: "Developer Consultant",
      company_name: "Thoughtworks",
      icon: thoughtworks,
      iconBg: "#FFFFFF",
      date: "May 2022 - Aug 2024",
      points: [
        "Contributed to 3 high-impact projects spanning the domains of banking, financial services, & consumer data management, demonstrating adaptability & technical versatility.",
        "Played a key role in backend system migration, modernization and microservices development, enhancing system efficiency & scalability.",
        "Optimized data workflows, improved system resilience, & championed Agile practices, significantly boosting team proficiency & project delivery"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Cybage",
      icon: cybage,
      iconBg: "#FFFFFF",
      date: "Jul 2019 - May 2022",
      points: [
        "Tackled complex legacy technologies, working with a diverse tech stack for an environmental, health & safety (EHS) product, showcasing strong technical skills & problem-solving abilities.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "ParkMate",
      description:
        "Revolutionized urban parking with a platform that empowers users to monetize their unused parking spaces, turning driveways and private spots into income-generating assets while helping drivers effortlessly locate and reserve parking in real time.",
      tags: [
        {
          name: "java",
          color: "orange-text-gradient",
        },
        {
          name: "spring mvc",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: parkmate,
      source_code_link: "https://github.com/dharanakneu/ParkMate",
    },
    {
      name: "GRAB SuperBank",
      description:
        "Implemented Face Match and Liveness Check feature, reducing identity fraud by up to 95%. Integrated new features such as SMS, Email and Push Notification functionalities, facilitating 2FA, immediate alerts & timely reminders to users on transactions.",
      tags: [
        {
          name: "golang",
          color: "orange-text-gradient",
        },
        {
          name: "terraform",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "orange-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
      ],
      image: grab,
    },
    {
      name: "Experian – Data Ingestion",
      description:
        "Enhanced data processing workflows by designing and implementing a Matching & Pinning Rule Engine, creating a Rule Evaluator & Executor to efficiently process & apply rules to data events from Kafka and optimizing data processing across multiple queues.",
      tags: [
        {
          name: ".net",
          color: "blue-text-gradient",
        },
        {
          name: "c-sharp",
          color: "orange-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        
      ],
      image: experian,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const services = [
    // {
    //   title: "Web Developer",
    //   icon: web,
    // },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  

  export { services, technologies, experiences, testimonials, projects };