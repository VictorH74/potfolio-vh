import { Toast } from "bootstrap";
import React from "react";
import Contacts from "./components/sections/ContactsSection/Contacts";
import Presentation from "./components/sections/PresentationSection/Presentation";
import Projects from "./components/sections/ProjectsSection/Projects";
import Technologies from "./components/sections/TechnologiesSection/Technologies";

function App(){
    return(
        <>

            <Presentation />
            <Technologies />
            <Projects />
            <Contacts />
        </>
    );
}

export default App;