import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/sections/ContactsSection/Contacts";
import Games from "./components/sections/GamesSection/Games";
import Presentation from "./components/sections/PresentationSection/Presentation";
import Projects from "./components/sections/ProjectsSection/Projects";
import Technologies from "./components/sections/TechnologiesSection/Technologies";
import Type from "react-spinners/CircleLoader";
import About from "./components/sections/AboutSection/About";
import aos from "aos";


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 10);
        aos.init();
    }, []);

    

    return (
        <>
            {
                loading ?
                    <div className="preloader">
                        <Type
                            size={80}
                            color={"#09d809"}
                            loading={loading}
                        />
                    </div>
                    :
                    <>
                        <a name="home"></a>
                        <Navbar />
                        <Presentation />
                        <About />
                        <Technologies />
                        <Projects />
                        <Games />
                        <Contacts />
                    </>
            }
        </>
    );
}

// window.pageYOffset

export default App;