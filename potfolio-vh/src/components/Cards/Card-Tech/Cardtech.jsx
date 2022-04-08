import React from "react";
import "./style.css"

function Cardtech(props) {



    return (
        <div className="card-tech-section" >
            <img onMouseOver={event => event.target.animation = "spinn 1s ease"}
                src={props.iconPath}
                alt={props.name} />
        </div>
    );
}

export default Cardtech;