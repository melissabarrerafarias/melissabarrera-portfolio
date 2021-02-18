import React, { useState } from 'react';

function Nav(props) {

    const {
        nav = [],
        setCurrentNav,
        currentNav,
        contactSelected,
        setContactSelected
    } = props

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
                            <a className="nav-link mr-3" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#contact" onClick={() => setContactSelected(true)}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#resume" tabindex="-1" aria-disabled="true">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#portfolio" onClick={() => {setContactSelected(false)}}>Portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav; 