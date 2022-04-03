import React from "react";
import "./style.css"

function Cardtech(props) {
    return (
        <div className="card-tech-section">
            <img 
                src={props.iconPath}
                alt={props.name} />
        </div>
    );
}

export default Cardtech;