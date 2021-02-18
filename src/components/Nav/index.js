import React from 'react';

function Nav() {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand nav-text-name" href="#">melissaBarrera</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-text ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#resume" tabindex="-1" aria-disabled="true">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav; 