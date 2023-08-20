import React from "react";
import Card from '../components/card';

const projects: Project[] = [
    {Date: "January 2023",
    Poster: "N/A",
    Title: "Pacman",
    Tags: ["Python", "AI"]},
    {Date: "June 2022",
    Poster: "N/A",
    Title: "PintOS",
    Tags: ["C", "x86"]}
]

const Projects: React.FC = () => {
    return (
        <div className="page">
            <h1>
                Projects
            </h1>
            <div className="container">
                {projects.map((project) => (
                    <Card project={project}/>
                ))}
            </div>
        </div>
    );
};
 
export default Projects;