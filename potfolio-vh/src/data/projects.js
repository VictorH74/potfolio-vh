// PROJECT IMAGES
import dsMovieImg from "../assets/project-images/DSMovies.png"
import eSusPecImg from "../assets/project-images/eSUSPEC.png"
import UserProductRegistrationImg from "../assets/project-images/UserProductRegistration.png"
import postPage from "../assets/project-images/post-page.png"
import simonGame from "../assets/project-images/simon-game.png"
import snakeGame from "../assets/project-images/snake-game.png"
import pongGame from "../assets/project-images/pong-game.png"
import passwordManager from "../assets/project-images/password-manager.png"

/* image resolution: 600x380 */
const projectDatas = [
    {
        title: "eSUS PEC Plugin",
        image: eSusPecImg,
        description: "Projeto desenvolvido para um cliente. Plugin para cadastro de consultas, exames e medicamentos. Inclui autenticação com login e senha, cadastro com ativação de conta por email, criação de assinaturas Premiums usando o sistema de pagamento digital do pagar.me e outras APIs externas",
        technologies: ["react", "python", "django", 'bootstrap', 'docker'],
        alt: "project image"
    },
    {
        id: 1,
        image: dsMovieImg,
        title: "DSMovies",
        link: "https://dsmovie-potifolio-vh.netlify.app",
        description: "Projeto criado em um evento online de desenvolvimento Full-Stack com React e Java. Pagina para avaliação de filmes",
        technologies: ["react", "java", "springboot", 'bootstrap'],
        alt: "project image"
    },
    {
        id: 2,
        image: UserProductRegistrationImg,
        title: "User and Product Registration System",
        link: "https://demoproject-vh.herokuapp.com/",
        description: "Aplicação web usando Java com o framework Spring Boot. Útil para gerenciar comercios. A página permite que você cadastre usuários, produtos ou categorias de produtos",
        technologies: ["html5", "css3", "java", "springboot"],
        alt: "project image"

    },
    {
        id: 3,
        image: postPage,
        title: "Post Page",
        link: "https://post-page-vh.netlify.app/",
        description: "Página web que simula uma seção de postagem.",
        technologies: ["html5", "css3", "javascript", "react"],
        alt: "project image"

    },
    {
        image: simonGame,
        title: "Simon Game",
        link: "https://gamezin-basico.netlify.app",
        description: "Alcance o maior score acertando o máximo a sequência correta",
        technologies: ["html5", "css3", "javascript"],
        alt: "project image"
    },
    {
        image: snakeGame,
        title: "Snake Game",
        description: "Jogo da cobrinha para desktop com algumas mudanças. Quanto mais seu score for aumentando, mais rapido a cobrinha fica dificultando a locomoção",
        technologies: ["python"],
        alt: "project image"
    },
    {
        image: pongGame,
        title: "Pong Game",
        link: "https://pong-game-vh.netlify.app/",
        description: "Jogo de ping pongo personalizado para navegador adaptado apenas para teclado e mouse",
        technologies: ["html5", "css3", "javascript"],
        alt: "project image"
    },
    {
        image: passwordManager,
        title: "Password Manager",
        description: "Programa para desktop que permite que você salve contas de qualque plataforma em qualquer email que você adicionar. O programa também gera senhas aleatoriamente, caso o usuário deseje",
        technologies: ["python"],
        alt: "project image"
    }
]

/*
    {
        image: eSUS_PEC_img,
        title: "eSUS PEC",
        description: "Plugin para cadastro de consultas, exames e medicamentos. Inclui autenticação com login e senha, cadastro com ativação de conta por email, criação de assinaturas Premiums usando o sistema de pagamento digital do pagar.me",
        technologies: ["html5", "css3", "react", "python", "django"],
        alt: "project image"
    },
*/

export default projectDatas;