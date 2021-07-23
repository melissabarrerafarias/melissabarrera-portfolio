import React from 'react'; 
import Helmet from 'react-helmet';

import Project from '../Project'; 
import video from '../../assets/images/practice.webm';
import gif from '../../assets/images/gif.gif'; 


function Portfolio() {
    
    return (
        
        <section className = "projects-div container">
            <Helmet>
                <style>
                    {`
                            body {
                                background-color: #191A1D;
                            }
                       `}
                </style>
            </Helmet>
            <div className = "col-md-6 projects-div">
            <h1 className="text-left portfolio-text">Projects</h1>
            <h4 className = "text-left portfolio-text">Front end. Back end. Full-Stack.</h4>
            <h5 className = "text-left portfolio-text">Here are some of the projects I've worked on.</h5>
            <div> 
            <p className = "arrow arrow-bounce mt-3"><i class="fas fa-chevron-down"></i></p>
            </div>
            

            </div>
            <div className = "col-md-6"> 
            
            </div>
            {/* <Project /> */}
        </section>
    );
}

export default Portfolio;