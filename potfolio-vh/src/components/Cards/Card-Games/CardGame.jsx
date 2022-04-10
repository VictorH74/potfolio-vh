import React, { useState } from "react";
import "./styles.css"

export default function CardGame(props) {
    const [opacity, setOpacity] = useState(0);
    var detailsVisibility = {
        opacity: opacity
    }
    return (
        <div className={props.id === 0 ? "carousel-item active" : "carousel-item"}>
            <div onMouseOver={() => setOpacity(1)} onMouseOut={() => setOpacity(0)} className="slide-container">
                <img src={props.image ? props.image : "https://picsum.photos/800/450?random=1"} className="d-block" alt="..." />
                <div style={detailsVisibility} className="details">
                    <div className="inf">
                        <h5>{props.title}</h5>
                        <h6>{props.description}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}