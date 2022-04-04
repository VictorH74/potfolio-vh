import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/sections/ContactsSection/Contacts";
import Games from "./components/sections/GamesSection/Games";
import Presentation from "./components/sections/PresentationSection/Presentation";
import Projects from "./components/sections/ProjectsSection/Projects";
import Technologies from "./components/sections/TechnologiesSection/Technologies";


function App(){
    return(
        <>
            <a name="inicio"></a>
            <Navbar />
            <Presentation />
            <Technologies />
            <Projects />
            <Contacts />
        </>
    );
}

// window.pageYOffset

export default App;