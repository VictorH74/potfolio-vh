import React from "react";
import "./style.css"

function Cardtech(props) {



    return (
        <div className="card-tech-section" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={`${props.index}00`}>
            <img onMouseOver={event => event.target.animation = "spinn 1s ease"}
                src={props.iconPath}
                alt={props.name} />
        </div>
        
    );
}

export default Cardtech;