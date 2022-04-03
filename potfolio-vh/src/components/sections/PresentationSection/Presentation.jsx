import React from "react";
import "./styles.css"
import imgVictor from "./../../../assets/victoralmeida.png"
import { ReactComponent as Arrow } from "./../../../assets/arrow.svg"

function Presentation() {

    return (
        <section className="pres-section">
            <div className="div-img">
                <img src={imgVictor} alt="" />
            </div>
            <h1 className="h1-name" id="name">
                Victor Hugo Almeida
            </h1>
            <div className="h2-div-pres">
                <h2 className="h2-presentation"><span><Arrow /></span> Programador</h2>
                <h2 className="h2-presentation" id="child-2"><span><Arrow /></span> Full-Stack</h2>
                <h2 className="h2-presentation" id="child-3"><span><Arrow /></span> Junior</h2>
            </div>
        </section>
        
    );
}

export default Presentation;