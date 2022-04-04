import React from "react";
import "./style.css"
import {contactDatas} from "./../../../datas"

function Contacts(){
    return(
        <section className="contacts-section">

            <a name="contatos"></a>
            <h1 className="section-title">Contatos</h1>
            <div className="contacts-container">
                {contactDatas.map(
                    data => 
                        <div key={data.id} className="contact">
                            <a href={data.link} target="_blank"><span><img src={data.icon}/></span>{data.userName}</a>
                        </div>
                        
                )}
            </div>
            <footer>&copy; Create by Viktor</footer>
        </section>
    );
}

export default Contacts;