export interface SkillGroup { title: string; icon: 'code' | 'layout' | 'server' | 'database' | 'wrench' | 'sparkles'; items: string[] }
export interface Credential { name: string; url: string }

export const profile = {
  name: 'Krithick Murugesan',
  email: 'krithickmurugesan423@gmail.com',
  phone: '+60 11 2614 7400',
  location: 'Cyberjaya, Selangor, Malaysia',
  linkedin: 'https://www.linkedin.com/in/contactkrithick',
  // TODO: replace with the real GitHub profile URL
  github: 'https://github.com/krithick45',
}

export const navLinks = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' },
]

export const strengths = [
  'Full-stack web application development', 'Responsive and reusable UI components', 'REST API integration',
  'Database-driven application development', 'Production debugging and defect resolution',
  'Secure application development and role-based access', 'Collaboration with QA, business analysts, and backend teams',
]

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: 'code', items: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Frontend', icon: 'layout', items: ['React.js', 'Bootstrap', 'Responsive Web Design'] },
  { title: 'Backend', icon: 'server', items: ['Java Spring Boot', 'Hibernate', 'Spring Data JPA', 'RESTful APIs'] },
  { title: 'Databases', icon: 'database', items: ['MySQL', 'Microsoft SQL Server'] },
  { title: 'Developer Tools', icon: 'wrench', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Swagger'] },
  { title: 'AI-Assisted Development', icon: 'sparkles', items: ['Claude AI', 'ChatGPT', 'GitHub Copilot', 'Codex'] },
]

export const job = {
  company: 'InfoMindz R&D Sdn Bhd', role: 'Software Developer', location: 'Cyberjaya, Malaysia', period: 'December 2024 – Present',
  points: [
    "Delivered features for Maybank Trustees' WASEE platform across Phase 1 and Phase 2 releases.",
    'Built responsive React.js and TypeScript screens integrated with Spring Boot REST APIs and MySQL.',
    'Fixed production bugs and resolved QA- and UAT-reported defects to improve application stability.',
    'Followed banking-domain security and data-validation standards.',
    'Participated in code reviews and maintained clean, reusable code.',
    'Collaborated with QA engineers, business analysts, and backend developers.',
    'Supported testing and deployment activities and verified APIs using Postman and Swagger.',
    'Used AI-assisted development tools to accelerate coding and debugging.',
  ],
  tech: ['React.js', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Postman', 'Swagger'],
}

export const internship = {
  company: 'AK Tech Park', role: 'Frontend Intern', location: 'Coimbatore, India', period: 'July 2022 – November 2022',
  points: [
    'Designed responsive interfaces for desktop, tablet, and mobile.',
    'Built reusable UI components with HTML, CSS, and JavaScript.',
    'Converted design mockups into working web pages.',
    'Tested cross-browser compatibility and fixed layout issues.',
  ],
}

export const project = {
  name: 'WASEE — Will & Wasiat Management System', org: 'Maybank Malaysia', domain: 'Banking / Enterprise Software',
  description: 'An enterprise-level will management application used by Maybank Malaysia to manage Wasiat (Islamic) and conventional wills through banking channels, in line with local regulatory requirements.',
  contributions: [
    'Developed guided, step-by-step will capture screens.',
    'Implemented field validation for customer profiles, beneficiaries, assets, and distribution details.',
    'Built features for securely creating, updating, and maintaining will records.',
    'Implemented a Faraid Calculator to automate Islamic inheritance distribution for Wasiat cases.',
    'Integrated frontend screens with Spring Boot REST APIs.',
    'Used role-based access to help protect sensitive data.',
  ],
  tech: ['React.js', 'TypeScript', 'Java', 'Spring Boot', 'Hibernate', 'Spring Data JPA', 'REST APIs', 'MySQL'],
}

export const education = {
  degree: 'M.Sc. Software Systems (Integrated) — Computer Science', school: 'Sri Krishna Arts and Science College', years: '2019–2024', cgpa: '8',
}

export const certGroups: { title: string; items: Credential[] }[] = [
  {
    title: 'UX Design — Coursera', items: [
      { name: 'Foundations of UX Design', url: 'https://www.coursera.org/account/accomplishments/verify/C6XY9UKTEU83' },
      { name: 'UX Process: Empathize, Define, Ideate', url: 'https://www.coursera.org/account/accomplishments/verify/XATAZJQZ7R8J' },
      { name: 'Wireframes & Low-Fidelity Prototypes', url: 'https://www.coursera.org/account/accomplishments/verify/PZ8Z62NY6D2F' },
      { name: 'Conduct UX Research & Test Concepts', url: 'https://www.coursera.org/account/accomplishments/verify/YFC4N7YQH3Y6' },
      { name: 'High-Fidelity Designs & Prototypes in Figma', url: 'https://www.coursera.org/account/accomplishments/verify/99CDRH8BBHAK' },
    ]
  },
  {
    title: 'Development', items: [
      { name: 'Full Stack Web Development — DevTown', url: 'https://www.cert.devtown.in/verify/Z2wYuES' },
      { name: 'JavaScript — Scaler', url: 'https://moonshot.scaler.com/s/li/81foF8PhBc' },
      { name: 'Intro to Programming: HTML & CSS', url: 'https://green-selia-91.tiiny.site/' },
    ]
  },
]
