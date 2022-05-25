import React from "react";
import "./style.css"
import Icons from "../../data/technologies"
import ToolIcon from "../../components/toolIcon";
import LanguageIcon from "../../components/languageIcon";


function Technologies() {
    return (
        <section className="technology-section">
            <a name="technologies"></a>
            <h3 className="section-title">My Technologies</h3>
            <div className="row justify-content-center tech-icon languages">
                {
                    Icons.map(
                        (icon, index) => {
                            if (icon.language) {
                                return (
                                    <div className="col-3 icons" key={index}>
                                        <LanguageIcon name={icon.name} iconPath={icon.iconURL} index={index} />
                                    </div>
                                );
                            }
                        }

                    )
                }
            </div>
            <div className="row justify-content-center tools">
                {
                    Icons.map(
                        (icon, index) => {
                            if (!icon.language) {
                                return (
                                    <div className="col-3 icons" key={index}>
                                        <ToolIcon name={icon.name} iconPath={icon.iconURL} index={index} />
                                    </div>
                                );
                            }
                        }
                    )
                }
            </div>
        </section>
    );
}

export default Technologies;