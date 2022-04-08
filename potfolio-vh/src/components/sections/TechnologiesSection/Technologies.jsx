import React from "react";
import "./style.css"
import Icons from "../../../datas"
import Cardtech from "../../Cards/Card-Tech/Cardtech";


function Technologies() {
    return (
        <section className="tech-section">
            <a name="technologies"></a>
            <h3 className="section-title">My Technologies</h3>
            <div className="container-cards ">
                <div className="row justify-content-center">
                    {
                        Icons.map(
                            (icon) =>
                                <div className="col-3 icons" key={icon.id}>
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