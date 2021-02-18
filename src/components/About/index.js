import React from 'react';
import profileImage from '../../assets/profile-photo/melissa-image.jpg';

function About() {
    return (
        <section>
            <div className="container">
                <h1 id="about" className="about-me-header mt-5 text-center">Get To Know Me</h1>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <img src={profileImage} className="profile-photo" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About; 