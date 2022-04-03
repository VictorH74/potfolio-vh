import React, { useState } from "react";
import "./style.css"

function Navbar(){
    const [scrollUp, setScrollUp] = useState(false);
    const [currentPageY, setCurrentPageY] = useState(window.pageYOffset);

    document.addEventListener("scroll", () => {
        console.clear();
        let pageY = window.pageYOffset
        if (pageY > currentPageY){
            // levantar navbar
            setScrollUp(true);
        }else if(pageY < currentPageY){
            // abaixar navbar
            setScrollUp(false);
        }
        setCurrentPageY(pageY);
    })

    return(
        <header style={scrollUp?{transform: "translateY(-100%)"}:{transform: "translateY(0%)"}} className="navbar" id="vh">
            <h1>Viktor</h1>
            <nav>
                <ul className="menu">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#tecnologias">Tecnologias</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </nav>
        </header>
    );

    
}
export default Navbar;