import React, { useState } from 'react';
import { Col } from "reactstrap";
import photo from '../../assets/images/fly-high.png';

function Project() {
    const [projectPhotos] = useState([
        {
            name: 'superherosmash',
            navigation: 'portfolio',
            projectName: 'SuperHeroSmash',
            deployedlink: 'https://superherosmash.herokuapp.com/',
            githublink: 'https://github.com/melissabarrerafarias/superherosmash'
        },
        {
            name: 'fly-high',
            navigation: 'portfolio',
            projectName: "Fly High",
            deployedlink: "https://treguv.github.io/fly-high/",
            githublink: "https://github.com/treguv/fly-high"
        },
        {
            name: "stuckInside",
            navigation: "portfolio",
            projectName: "stuckInside",
            deployedlink: "http://www.stuckinside.tech/",
            githublink: "https://github.com/treguv/stuckInside"
        },
        {
            name: "tech-applied",
            navigation: "portfolio",
            projectName: "Tech-Applied",
            deployedlink: "https://glacial-oasis-78565.herokuapp.com/",
            githublink: "https://github.com/melissabarrerafarias/tech-blog"
        },
        {
            name: "weather",
            navigation: 'portfolio',
            projectName: "Weather App",
            deployedlink: "https://melissabarrerafarias.github.io/weather-app/",
            githublink: "https://github.com/melissabarrerafarias/weather-app"
        },
        {
            name: "team-generator",
            navigation: 'portfolio',
            projectName: "Team Profile Generator",
            deployedlink: "https://github.com/melissabarrerafarias/Team-Profile-Generator",
            githublink: "https://github.com/melissabarrerafarias/Team-Profile-Generator"
        },
        {
            name: "SNA-NoSQL",
            navigation: "portfolio",
            projectName: "Social Network API (NoSQL)",
            deployedlink: "https://github.com/melissabarrerafarias/SN-API-NoSQL",
            githublink: "https://github.com/melissabarrerafarias/SN-API-NoSQL"
        }
    ])

    return (
        <div>
            {projectPhotos.map((photo) => (
                <div className="col-md-6">
                    <img src={require(`../../assets/images/${photo.name}.png`).default}
                        className="project-scrnshots"
                    ></img>

                </div>
            ))}
        </div>

        // <div>
        //     <div className="container">
        //         <div className="row align-items-center">
        //             {projectPhotos.map((photo) => (
        //                 <div className="col mb-5">
        //                     <div className="card mb-5" style={{width: "100%"}}>
        //                         <img
        //                             src={require(`../../assets/images/${photo.name}.png`).default}
        //                             alt={photo.name}
        //                             key={photo.name}
        //                             className="project-scrnshots"
        //                         />
        //                         <div className="card-body">
        //                             <h5 className="card-title d-flex justify-content-center mt-3">{photo.projectName}</h5>
        //                             <div className="d-flex justify-content-center">
        //                             <a href={photo.deployedlink} className="btn card-btn"><i className="fas fa-external-link-alt"></i></a>
        //                             <a href={photo.githublink} className="btn card-btn"><i className="fab fa-github"></i></a>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )

}

export default Project;