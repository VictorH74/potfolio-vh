import React, { useState } from "react";
import "./style.css"
import icons, { projectDatas } from "./../../../datas"


function Projects() {
    const [opacity, setOpacity] = useState(0);
    
    function handleMouseOver(){
        setOpacity(1);

    }
    function handleMouseOut(){
        setOpacity(0);

    }

    var detailsVisibility = {
        opacity: opacity
    }
    return (
        <section className="proj-section">
            <a name="projetos" href="#projetos"></a>
            <h1 className="section-title">Meus Projetos</h1>
            

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    {projectDatas.map(
                        image =>
                            <button key={image.id} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={image.num} className={image.id === 1 ? "active" : ""} aria-current={image.id === 1 ? "true" : ""} aria-label={image.slide}></button>
                    )}
                </div>

                <div className="carousel-inner">

                    {projectDatas.map(
                        image =>
                            <div key={image.id} className={image.id === 1 ? "carousel-item active" : "carousel-item"}>
                                
                                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="slide-container">
                                   
                                    <img  src={image.image ? image.image : "https://picsum.photos/800/450?random=1"} className="d-block" alt="..." />
                                    <div style={detailsVisibility} className="details">
                                       
                                        <div className="inf">
                                            <h5>{image.title}</h5>
                                            <h6>{image.description}</h6>
                                        </div>

                                        <div className="tech-used">
                                            <h5>Tecnologias Usadas:</h5>

                                            <div>
                                                {icons.map(
                                                    icon =>
                                                        image.technologies.includes(icon.name) ? <img key={icon.id} src={icon.iconURL} alt="" /> : ""
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    )}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon control-bg" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon control-bg" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </section>
    );
}

export default Projects;