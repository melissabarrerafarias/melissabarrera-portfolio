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
                            <div className="project-links">
                                <a className="project-link" href="https://superherosmash.herokuapp.com/"><i class="far fa-hand-pointer"></i></a>
                                <a className="project-link" href="https://github.com/melissabarrerafarias/superherosmash"><i className="fab fa-github"></i></a>
                            </div>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/stuckInside.png`).default}
                                className="project-scrnshots"
                            ></img>
                            <div className="project-links">
                                <a className="project-link" href="http://www.stuckinside.tech/"><i class="far fa-hand-pointer"></i></a>
                                <a className="project-link" href="https://github.com/treguv/stuckInside"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/fly-high.png`).default}
                                className="project-scrnshots"
                            ></img>
                            <div className="project-links">
                                <a className="project-link" href="https://treguv.github.io/fly-high/"><i class="far fa-hand-pointer"></i></a>
                                <a className="project-link" href="https://github.com/treguv/fly-high"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/weather.png`).default}
                                className="project-scrnshots"
                            ></img>
                            <div className="project-links">
                                <a className="project-link" href="https://melissabarrerafarias.github.io/weather-app/"><i class="far fa-hand-pointer"></i></a>
                                <a className="project-link" href="https://github.com/melissabarrerafarias/weather-app"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/tech-applied.png`).default}
                                className="project-scrnshots"
                            ></img>
                            <div className="project-links">
                                <a className="project-link" href="https://glacial-oasis-78565.herokuapp.com/"><i class="far fa-hand-pointer"></i></a>
                                <a className="project-link" href="https://github.com/melissabarrerafarias/tech-blog"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/team-generator.png`).default}
                                className="project-scrnshots"
                            ></img>
                            <div className="project-links">
                                <a className="project-link" href="https://github.com/melissabarrerafarias/Team-Profile-Generator"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="col-md-6 project-indv">
                            <img src={require(`../../assets/images/SNA-NoSQL.png`).default}
                                className="project-scrnshots"
                            ></img>
                            <div className="project-links">
                                <a className="project-link" href="https://github.com/melissabarrerafarias/SN-API-NoSQL"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </Fade>

                </div>

            </section>

            {/* <Project /> */}
        </main>
    );
}

export default Portfolio;