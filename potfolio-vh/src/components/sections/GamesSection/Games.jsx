import React from "react";
import CardGame from "../../Cards/Card-Games/CardGame";
import { gameDatas } from "./../../../datas"
import "./styles.css"

function Games() {
    return (
        <section className="games-section">
            <a name="games" href="#games"></a>
            <h1 className="section-title">My Games</h1>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {gameDatas.map(
                        (image, index) =>
                            <button 
                                key={index} 
                                type="button" 
                                data-bs-target="#carouselExampleCaptions" 
                                data-bs-slide-to={index} 
                                className={index === 0 ? "active" : ""} 
                                aria-current={index === 0 ? "true" : ""} 
                                aria-label={`Slide ${index + 1}`}
                            />
                    )}
                </div>
                <div className="carousel-inner">
                    {gameDatas.map(
                        (image, index) =>
                            <CardGame 
                                key={index}
                                id={index}
                                image={image.gif}
                                link={image.link}
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