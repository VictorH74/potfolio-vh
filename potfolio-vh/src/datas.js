// PROJECT IMAGES
import dsMovieImg from "./assets/project-images/DSMovies.png"
import UserProductRegistrationImg from "./assets/project-images/UserProductRegistration.png"
import postPage from "./assets/project-images/post-page.png"
import simonGame from "./assets/project-images/simon-game.png"
import snakeGame from "./assets/project-images/snake-game.png"
import passwordManager from "./assets/project-images/password-manager.png"

// PROJECT GIFS
import dsMovieImgGif from "./assets/project-images/gifs/dsmovies.gif"
import userProductRegistrationGif from "./assets/project-images/gifs/UserProductsRegistration.gif"
import postPageGif from "./assets/project-images/gifs/post-page.gif"
import simonGameGif from "./assets/project-images/gifs/simon-game.gif"
import snakeGameGif from "./assets/project-images/gifs/snake-game.gif"

// CONTACT ICONS
import githubIcon from "./assets/github-icon.svg"
import linkedinIcon from "./assets/linkedin-icon.svg"
import whatsappIcon from "./assets/whatsapp-icon.svg"
import gmailIcon from "./assets/gmail-icon.svg"
import codewarsIcon from "./assets/codewars-icon.svg"
import discordIcon from "./assets/discord-icon.svg"

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

/* image resolution: 600x380 */
const projectDatas = [
    {
        id: 1,
        image: dsMovieImg,
        gif: dsMovieImgGif,
        title: "DSMovies",
        link: "https://dsmovie-potifolio-vh.netlify.app",
        description: "Projeto criado em um evento online de desenvolvimento Full-Stack com React e Java. Pagina para avaliação de filmes",
        technologies: ["html5", "css3", "react", "java", "springboot"],
        alt: "project image"
    },
    {
        id: 2,
        image: UserProductRegistrationImg,
        gif: userProductRegistrationGif,
        title: "User and Product Registration System",
        link: "https://demoproject-vh.herokuapp.com/",
        description: "Aplicação web usando Java com o framework Spring Boot. Útil para gerenciar comercios. A página permite que você cadastre usuários, produtos ou categorias de produtos",
        technologies: ["html5", "css3", "java", "springboot"],
        alt: "project image"
        
    },
    {
        id: 3,
        image: postPage,
        gif: postPageGif,
        title: "Post Page",
        link: "https://post-page-vh.netlify.app/",
        description: "Página web que simula uma seção de postagem.",
        technologies: ["html5", "css3", "javascript", "react"],
        alt: "project image"
        
    },
    {
        image: simonGame,
        gif: simonGameGif,
        title: "Simon Game",
        link: "https://gamezin-basico.netlify.app",
        description: "Alcance o maior score acertando o máximo a sequência correta",
        technologies: ["html5", "css3", "javascript"],
        alt: "project image"
    },
    {
        image: snakeGame,
        gif: snakeGameGif,
        title: "Snake Game",
        description: "Jogo da cobrinha para desktop com algumas mudanças. Quanto mais seu score for aumentando, mais rapido a cobrinha fica dificultando a locomoção",
        technologies: ["python"],
        alt: "project image"
    },
    {
        id: 6,
        image: passwordManager,
        title: "Password Manager",
        description: "Programa para desktop que permite que você salve contas de qualque plataforma em qualquer email que você adicionar. O programa também gera senhas aleatoriamente, caso o usuário deseje",
        technologies: ["python"],
        alt: "project image"
    }
]

const gameDatas = [
    {
        image: simonGame,
        gif: simonGameGif,
        title: "Simon Game",
        link: "https://gamezin-basico.netlify.app",
        description: "Alcance o maior score acertando o máximo a sequência correta",
        alt: "project image"
    },
    {
        image: snakeGame,
        title: "Snake Game",
        description: "Jogo da cobrinha para desktop com algumas mudanças. Quanto mais seu score for aumentando, mais rapido a cobrinha fica dificultando a locomoção",
        alt: "project image"
    },
]

const contactDatas = [
    {
        id: 1,
        icon: gmailIcon,
        userName: "victorh.almeida7@gmail.com",
        link: "mailto:victorh.almeida7@gmail.com",
        alt: "github icon"
    },
    {
        id: 2,
        icon: whatsappIcon,
        userName: "(86) 9.9548-3472",
        link: "https://wa.me/5586995483472",
        alt: "whatsapp icon"
    },
    {
        id: 3,
        icon: linkedinIcon,
        userName: "Victor Almeida",
        link: "https://www.linkedin.com/in/victor-almeida-b720201b5/",
        alt: "linkedin icon"
    },
    {
        id: 4,
        icon: githubIcon,
        userName: "@VictorH74",
        link: "https://github.com/VictorH74",
        alt: "github icon"
    },
    {
        id: 5,
        icon: codewarsIcon,
        userName: "@VictorH74",
        link: "https://www.codewars.com/users/VictorH74",
        alt: "codewars icon"
    },
    {
        id: 6,
        icon: discordIcon,
        userName: "Viktor.H#8721",
        link: "https://www.google.com",
        alt: "discord icon"
    },
]

export default technologieIcons;
export {projectDatas, gameDatas, contactDatas};