import React from 'react';
import myResume from '../../assets/profile-photo/resume.pdf';

function Resume() {
    return (
        <section className="container">
            <div className="text-center m-5">
                <p className="resume-download">For a more detailed list of skills I have to offer, feel free to go over my resume</p>
                <a href={myResume} download="MelissaResume" className="resume-download-icon"><i class="far fa-file"></i></a>
            </div>
        </section>

    )
}

export default Resume; 
