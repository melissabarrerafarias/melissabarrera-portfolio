import React from 'react';
import Helmet from 'react-helmet';
import Project from '../Project';


function Portfolio() {

    return (
        <main>
            <Helmet>
                <style>
                    {`
                            body {
                                background-color: #191A1D;
                            }
                       `}
                </style>
            </Helmet>
            <section className="projects-div container">
                <div className="col-md-6">
                    <h1 className="text-left portfolio-text">Projects</h1>
                    <h4 className="text-left portfolio-text">Front end. Back end. Full-Stack.</h4>
                    <h5 className="text-left portfolio-text">Here are some of the projects I've worked on.</h5>
                    <div>
                        <p className="arrow arrow-bounce mt-3"><i class="fas fa-chevron-down"></i></p>
                    </div>
                </div>
            </section>

            {/* <Project /> */}
        </main>
    );
}

export default Portfolio;