import React from 'react';
import './card.css';

type Props = {
    project: Project;
}

const Card: React.FC<Props> = ({ project }) => 
    (
        <div className="project">
            <div>
                <p>{project.Date}</p>
            </div>

            <div>
                <img src={project.Poster !== 'N/A' ? project.Poster : 'https://via.placeholder.com/400'} alt={project.Title}/>
            </div>

            <div>
                {project.Tags.map((tag) => (
                    <span>{tag}</span>
                ))}
                <h3>{project.Title}</h3>
            </div>
        </div>
    )


export default Card;