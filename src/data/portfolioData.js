import { Code, Palette, Work, Terminal, Storage } from '@mui/icons-material';

export const portfolioData = {
    personal: {
        name: "Melbin Joseph",
        title: "Software Engineer",
        tagline: "Building dynamic web applications with React, Angular, and Java.",
        description: "I am a dedicated software engineer currently working at the Kristu Jayanti Software Development Center. I focus on creating seamless user experiences and scalable solutions.",
        email: "22mcaa40@kristujayanti.com",
        phone: "+91 6282696352",
        location: "Bengaluru, Karnataka",
        avatar: "/IMG_6049.JPG"
    },
    skills: {
        frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Angular', 'Tailwind CSS'],
        backend: ['C#', 'SQL', 'PostgreSQL', 'REST APIs', 'Java', 'Spring Boot'],
        tools: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'Jira']
    },
    experience: [
        {
            title: 'Software Development Engineer',
            company: 'Kristu Jayanti Software Development Center',
            duration: 'Dec 2024 – Present',
            shortDescription: 'Building internal ERP solution using Angular, Tailwind CSS, and Java.',
            icon: <Work />
        },
        {
            title: 'Software Developer Intern',
            company: 'MicroGenesis TechSoft',
            duration: 'Apr 2023 – Aug 2023',
            shortDescription: 'Backend development with C# and PostgreSQL for GrocerEase application.',
            icon: <Terminal />
        },
        {
            title: 'React Developer Intern',
            company: 'Talview',
            duration: 'Jan 2023',
            shortDescription: 'Frontend enhancements for Cambridge Dashboard utilizing React.js.',
            icon: <Code />
        }
    ],
    projects: [
        {
            title: 'College Placement Portal',
            description: 'Comprehensive placement management system.',
            technologies: ['React.js', 'SQL', 'Node.js']
        },
        {
            title: 'OLX Clone',
            description: 'Full-stack marketplace with auth & listings.',
            technologies: ['React.js', 'Node.js', 'MongoDB']
        },
        {
            title: 'Netflix Clone',
            description: 'Movie streaming UI with API integration.',
            technologies: ['React.js', 'API Integration']
        }
    ],
    education: [
        {
            degree: 'Master of Computer Applications (MCA)',
            school: 'Kristu Jayanti College',
            year: '2024',
            grade: '67%'
        },
        {
            degree: 'BSc Computer Science',
            school: 'Kristu Jayanti College',
            year: '2022',
            grade: 'CGPA 7.2'
        }
    ],
    services: [
        {
            icon: <Code sx={{ fontSize: 28 }} />,
            title: 'Web Development',
            description: 'Developing dynamic web apps with React, Angular, and Java.',
        },
        {
            icon: <Palette sx={{ fontSize: 28 }} />,
            title: 'UI Design',
            description: 'Designing intuitive and visually appealing interfaces.',
        },
        {
            icon: <Storage sx={{ fontSize: 28 }} />,
            title: 'Backend Systems',
            description: 'Architecting robust database and API solutions.',
        }
    ]
};
