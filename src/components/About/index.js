import React from 'react';
import profileImage from '../../assets/profile-photo/melissa-image.jpg';
import myResume from '../../assets/profile-photo/resume.pdf'; 

function About() {
    return (
        <section>
            <a href={myResume} download="MelissaResume">click here to download</a>
            <div className="container">
                <h1 id="about" className="about-me-header mt-5 text-center">Get To Know Me</h1>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <img src={profileImage} className="profile-photo"/>
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                        <p className="about-description">Hello! My name is Melissa Barrera and I am an 18 year old full-stack web developer! Born and raised in the culture
                        rich San Jose, California and currently reside in the beautiful state of Washington. Eager to start working, I pushed myself to graduate a year early from high-school and worked 
                        at an elementary school for a little more than a year. Covid-19 hit, and I saw the extra time as an opportunity to learn something new! I took on the challenge of the 
                        coding bootcamp UC Berkeley offers. It is an intense six month course where you learn the skills necessary to become a web developer! Though there were moments where I felt defeated, 
                        I managed to push through and it was worth it! From never having written a line of code to creating these amazing apps myself and with teams only six months later... has been wild! 
                        I look forward to graduating, expanding my learning, and bettering myself! </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About; 