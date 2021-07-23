import React from 'react';
import profileImage from '../../assets/profile-photo/me-image.jpg';

function About() {
    return (
        <div className="container">
                <div className="split left">
                    <div className="center">
                        <img src={profileImage} className="profile-photo" />
                    </div>
                </div>

                <div className="split right">
                    <div className="center" >
                        <h1 className = "about-me-header">Melissa Barrera</h1>
                        <h3 className = "about-me-header">Full-Stack Web Developer</h3>

                        <p className="about-description">Hello! My name is Melissa Barrera and I am a 19 year old full-stack web developer based in Olympia, Washington. Born and raised in the culture
                            rich San Jose, California and eager to start working, I pushed myself to graduate a year early from high-school and worked
                            at an elementary school for a little more than a year. Covid-19 hit, and I saw the extra time as an opportunity to learn something new! I took on the challenge of the
                            coding bootcamp UC Berkeley offers. An intense six month course where you learn the skills necessary to become a full-stack web developer! Though there were moments where I felt defeated,
                            I managed to push through and it was worth it! From never having written a line of code to creating these amazing apps myself and with teams only six months later... has been a wild experience!
                            I graduated in March and I look forward to continuing to grow as a developer. </p>
                    </div>
                </div>
            
        </div>

    );
}

export default About;