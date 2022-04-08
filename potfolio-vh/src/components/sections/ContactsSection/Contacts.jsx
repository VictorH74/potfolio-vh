import React, { useState } from "react";
import "./style.css"
import {contactDatas} from "./../../../datas"

function Contacts(){
    return(
        <section className="contacts-section">
            <a name="contacts"></a>
            <div className="main-contacts">
            <a href={contactDatas[0].link} target="_blank" rel="noreferrer"><span><img src={contactDatas[0].icon} alt="email icon" /></span>Victorh.almeida7@gmail.com</a>
            <br/>
            <br/>
            <a href={contactDatas[1].link} target="_blank" rel="noreferrer"><span><img src={contactDatas[1].icon} alt="whatsapp icon" /></span>+55 (86) 9.9548-3472</a>
            </div>
            <div className="contacts-container">
                {contactDatas.map(
                    data => 
                        data.id>2?<div key={data.id} className="contact">
                            <a href={data.link} target="_blank" rel="noreferrer"><span><img src={data.icon} alt="contact icon" /></span></a>
                        </div>:""  
                )}
            </div>
            <footer>&copy; Create by Viktor {new Date().getFullYear()}</footer>
        </section>
    );
}

export default Contacts;