import React from "react";
import "./styles.css"
import Icons from "../../../datas"
import Cardtech from "../../Cards/Card-Tech/Cardtech";

function Technologies() {
    return (
        <section className="tech-section">
            <h3 className="section-title">&#x0003C;Minhas Tecnologias&#x0002F;&#x0003E;</h3>
            <div className="container-cards ">
                <div className="row justify-content-center">
                    {
                        Icons.map(
                            (icon) =>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3" key={icon.id}>
                                    <Cardtech name={icon.name} iconPath={icon.iconURL} />
                                </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Technologies;