import React, { Link } from 'react';

function Nav() {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand nav-text-name" href="#">melissaBarrera</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i class="fas fa-chevron-circle-down" id="dropdown-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-text ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="/">home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="/contact">contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="/resume">resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="/portfolio">portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;