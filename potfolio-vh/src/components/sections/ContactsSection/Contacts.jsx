import React from "react";
import "./style.css"
import {contactsDatas} from "./../../../datas"

function Contacts(){
    return(
        <section className="contacts-section">
            <h1 className="section-title">&#x0003C;Contatos&#x0002F;&#x0003E;</h1>
            <div className="contacts-container">
                {contactsDatas.map(
                    data => 
                        <div className="contact">
                            <a href={data.link} target="_blank"><span><img src={data.icon} alt=""/></span>{data.userName}</a>
                        </div>
                        
                )}
            </div>
        </section>
    );
}

export default Contacts;