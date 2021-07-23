import React from 'react';
import Helmet from 'react-helmet';
// import Project from '../Project';
import Fade from 'react-reveal/Fade';



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
                <Fade bottom>
                    <div className="col-md-6">
                        <h1 className="text-left portfolio-text">Projects</h1>
                        <h4 className="text-left portfolio-text">Front end. Back end. Full-Stack.</h4>
                        <h5 className="text-left portfolio-text">Here are some of the projects I've worked on.</h5>
                        <div>
                            <p className="arrow arrow-bounce mt-3"><i class="fas fa-chevron-down"></i></p>
                        </div>
                    </div>
                </Fade>
            </section>



            <hr className="project-line"></hr>
            
            <section className="container all-projects">
                <div className="row">
                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/superherosmash.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/stuckInside.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/fly-high.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/weather.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/tech-applied.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/team-generator.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/SNA-NoSQL.png`).default}
                                className="project-scrnshots"
                            ></img>
                        </div>
                    </Fade>

                </div>

            </section>

            {/* <Project /> */}
        </main>
    );
}

export default Portfolio;