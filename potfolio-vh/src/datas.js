const technologieIcons = [
    {
        id: 1,
        name: "html5",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id: 2,
        name: "css3",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        id: 3,
        name: "javascript",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    {
        id: 4,
        name: "react",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    {
        id: 5,
        name: "python",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    {
        id: 6,
        name: "java",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    {
        id: 7,
        name: "springboot",
        iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        
]

const projectDatas = [
    {
        id: 1,
        num: 0,
        slide: "Slide 1",
        title: "DSMovies",
        description: "Projeto criado em um evento online de desenvolvimento Full-Stack com React e Java",
        technologies: ["html5", "css3", "react", "java"],
        alt: "project image"
    },
    {
        id: 2,
        num: 1,
        slide: "Slide 2",
        title: "Seller and Department",
        description: "Aplicação web usando Java com o framework Spring Boot",
        technologies: ["html5", "css3", "java"],
        alt: "project image"
        
    },
    {
        id: 3,
        num: 2,
        slide: "Slide 3",
        title: "Simon Game",
        description: "Jogo criado usando Javascript",
        technologies: ["html5", "css3", "javascript"],
        alt: "project image"
    },
    {
        id: 4,
        num: 3,
        slide: "Slide 4",
        title: "Snake Game",
        description: "Jogo criado com Python",
        technologies: ["python"],
        alt: "project image"
    }
]

const contactsDatas = [
    {
        id: 1,
        icon: "",
        userName: "victorh.almeida7@gmail.com",
        link: "https://github.com/VictorH74",
        alt: "github icon"
    },
    {
        id: 2,
        icon: "",
        userName: "(86) 9.9548-3472",
        link: "https://wa.me/5586995483472",
        alt: "whatsapp icon"
    },
    {
        id: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        userName: "Victor Almeida",
        link: "https://www.linkedin.com/in/victor-almeida-b720201b5/",
        alt: "linkedin icon"
    },
    {
        id: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        userName: "@VictorH74",
        link: "https://github.com/VictorH74",
        alt: "github icon"
    },
]

export default technologieIcons;
export {projectDatas, contactsDatas};