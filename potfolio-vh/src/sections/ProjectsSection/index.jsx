import React, { useState } from "react";
import "./style.css"
import projectDatas from "../../data/projects"
import ProjectCard from "../../components/Cards/projectCard";

function Projects() {
    const [allProjects, setAllProjects] = useState(false);
    return (
        <section className="proj-section">
            <a name="projects"></a>
            {
                !allProjects ?
                    projectDatas.map((project, index) =>
                        index < 2 ?
                            <ProjectCard
                                index={index}
                                key={index}
                                image={project.image}
                                gif={project.gif}
                                title={project.title}
                                link={project.link ? project.link : null}
                                description={project.description}
                                technologies={project.technologies}
                            /> : ""
                    )
                    : projectDatas.map((project, index) => {
                        return (
                            <ProjectCard
                                index={index}
                                image={project.image}
                                gif={project.gif}
                                title={project.title}
                                link={project.link ? project.link : null}
                                description={project.description}
                                technologies={project.technologies}
                            />
                        );
                    })
            }
            <div className="btn-show-all">
                <button onClick={() => {
                    
                    setAllProjects(!allProjects);

                    if (!allProjects) {
                        window.location.href = '#projects';
                    }




                }}>
                    <span className="theme-color">{allProjects ? "Show Less" : "Show All"}</span>
                </button>
            </div>
        </section>
    );
}

export default Projects;