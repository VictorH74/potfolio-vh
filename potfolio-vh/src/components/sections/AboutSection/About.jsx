import React from "react";
import "./styles.css";
import Inlls from "./../../../assets/toAbout.svg"
//import aos from "aos";


export default function About() {
    //aos.init();
    return (
        <section className="about-section">
        
            <div className="about-containet" data-aos="fade-up-right" data-aos-duration="1000">
                <h2 className="section-title">Sobre mim</h2>
                <p>
                    Iniciei minha carreira na programação em 2020 ao entrar na faculdade de Ciência da Computação.
                    Porém devido a pandemia, tive que sair da faculdade por motivos financeiros. Mas apesar de ter
                    perdido a oportunidade de completar a faculdade continuo a evoluir minhas skills na programação.
                </p>
                <p>
                    Atualmente aprendo programação por conta própria vendo cursos, lendo artigos e
                    documentação de tecnologias. Estou a procura de uma oportunidade para atuar como desenvolvedor junior.
                </p>
                <p>
                    Tenho motivação e estou sempre a disposição para aprender novas tecnologias
                </p>
            </div>
            <img data-aos="zoom-in" data-aos-delay="200" src={Inlls} alt="Inllustration"/>
        </section>
    );
}