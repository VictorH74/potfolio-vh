import React from "react";
import "./style.css"

export default function ToolIcon(props) {



    return (
        <div className="tool-icon" data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={`${props.index}00`}>
            <img onMouseOver={event => event.target.animation = "spinn 1s ease"}
                src={props.iconPath}
                alt={props.name} />
        </div>
        
    );
}
