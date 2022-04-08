import React from "react";
import icons from "./../../../datas"
import "./styles.css"

export default function CardProj(props) {
    return (
        <div className="card-proj">
            {props.index % 2 === 0 ? <img src={props.image} alt="" /> : ""}
            <div className="proj-infor" style={{ textAlign: props.index % 2 !== 0 ? "end" : "" }}>
                <h3 className="theme-color">{props.title}</h3>
                <h4>{props.description}</h4>
                {
                    props.link !== null ?
                        <a href={props.link} target="_blank" rel="noreferrer" >
                            <h4 className="theme-color proj-link">Project Link ICON</h4>
                        </a> : ""
                }
                <div className="card-proj-techs">
                    <h3>Tecnologias usadas</h3>
                    {icons.map(icon =>
                        props.technologies.includes(icon.name) ? 
                            <img src={icon.iconURL} alt="icon-project" /> : ""
                    )}
                </div>
            </div>
            {props.index % 2 !== 0 ? <img src={props.image} alt="" /> : ""}
        </div>
    );
}