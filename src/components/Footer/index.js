import React from 'react';

function Footer() {
    return (
        <footer>
            <nav className="navbar navbar-light footer-background">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto footer-links" href="https://www.linkedin.com/in/melissa-barrera-103b531b3/"><i className="fab fa-linkedin"></i></a>
                    <a className="navbar-brand mx-auto footer-links" href="https://github.com/melissabarrerafarias"><i className="fab fa-github-square"></i></a>
                    <a className="navbar-brand mx-auto footer-links" href="https://stackoverflow.com/users/14167549/melissa?tab=profile"><i className="fab fa-stack-overflow"></i></a>
                    <a className="navbar-brand mx-auto footer-links" href="mailto:melissabarrerafarias@gmail.com"><i className="fas fa-envelope-square"></i></a>
                </div>
            </nav>
        </footer>
    );
}

export default Footer; 