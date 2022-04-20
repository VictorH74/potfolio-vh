import React, { useState } from "react";
import linkIcon from "./../../../assets/link-icon.svg"
import icons from "./../../../datas"
import LinkIcon from '@material-ui/icons/Link';
import "./styles.css"

export default function CardProj(props) {
    const [isOver, setIsOver] = useState(false);

    function isOverSetter() {
        if (!isOver && props.gif) {
            setIsOver(true);
        }
    }
    function isOutSetter() {
        if (isOver) {
            setIsOver(false);
        }
    }

    return (
        <div className="card-proj" data-aos="flip-up">
            {
                props.index % 2 === 0 || window.innerWidth < 900 ?
                        <img
                            onMouseOver={isOverSetter}
                            onMouseOut={isOutSetter}
                            src={props.image?props.image:"https://picsum.photos/600/380?random=1"}
                            alt=""
                        />
                    : ""

            }

            <div className="proj-infor" style={
                { textAlign: props.index % 2 !== 0 && window.innerWidth > 900 ? "end" : "" }
            }>
                <h3 className="theme-color">{props.title}</h3>
                <h4>{props.description}</h4>
                {
                    props.link !== null ?
                        <a href={props.link} target="_blank" rel="noreferrer" >
                            <h4 className="theme-color proj-link">Project Link <LinkIcon/></h4>
                        </a> : ""
                }
                <div className="card-proj-techs">
                    <h3>Tecnologias usadas</h3>
                    {icons.map((icon, index) =>
                        props.technologies.includes(icon.name) ?
                            <img key={index} src={icon.iconURL} alt="icon-project" /> : ""
                    )}
                </div>
            </div>

            {
                props.index % 2 !== 0 && window.innerWidth > 900 ?
                        <img
                            onMouseOver={isOverSetter}
                            onMouseOut={isOutSetter}
                            src={props.image}
                            alt=""
                        />
                    : ""
            }
        </div>
    );
}