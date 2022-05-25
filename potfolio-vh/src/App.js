import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./sections/ContactsSection";
import Games from "./sections/GamesSection";
import Presentation from "./sections/PresentationSection";
import Projects from "./sections/ProjectsSection";
import Technologies from "./sections/TechnologiesSection";
import About from "./sections/AboutSection";
import Type from "react-spinners/CircleLoader";
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