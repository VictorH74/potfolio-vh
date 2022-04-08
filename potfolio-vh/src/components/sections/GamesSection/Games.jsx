import React from "react";
import CardGame from "../../Cards/Card-Games/CardGame";
import { projectDatas } from "./../../../datas"
import "./styles.css"

function Games() {
    return (
        <section className="games-section">
            <a name="games" href="#games"></a>
            <h1 className="section-title">My Games</h1>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {projectDatas.map(
                        (image, index) =>
                            <button 
                                key={image.id} 
                                type="button" 
                                data-bs-target="#carouselExampleCaptions" 
                                data-bs-slide-to={index} 
                                className={image.id === 1 ? "active" : ""} 
                                aria-current={image.id === 1 ? "true" : ""} 
                                aria-label={image.slide}
                            />
                    )}
                </div>
                <div className="carousel-inner">
                    {projectDatas.map(
                        image =>
                            <CardGame 
                                key={image.id}
                                id={image.id}
                                image={image.image}
                                title={image.title}
                                description={image.description}
                            />
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

export default Games;