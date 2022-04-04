import React, { useState } from "react";
import "./style.css"
import { ReactComponent as MenuIcon } from "./../../assets/menu-icon.svg"

function Navbar() {
    const [scrollUp, setScrollUp] = useState(true);

    const initialStyle = {
        backgroundColor: "#00000000",
    }
    const afterStyle = {
        backgroundColor: "#00000060",
    }

    document.addEventListener("scroll", () => {
        let pageY = window.pageYOffset

        if (pageY === 0) {
            setScrollUp(true);
        }
        else {
            setScrollUp(false);
        }
    })

    return (
        <>
            <header style={scrollUp ? initialStyle : afterStyle} className="navbar" id="vh">
                <h1>VH</h1>
                <div className="menu-icon">
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <MenuIcon />
                    </button>
                </div>

                <nav>
                    <ul className="menu">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#tecnologias">Tecnologias</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                    </ul>
                </nav>


            </header>
            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Navegation</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="dropdown mt-3">
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#tecnologias">Tecnologias</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#contatos">Contatos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );


}
export default Navbar;