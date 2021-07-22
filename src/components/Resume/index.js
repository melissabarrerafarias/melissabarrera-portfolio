import React from 'react';
import myResume from '../../assets/profile-photo/Melissa-Barrera-Resume.PDF';
import certificateOfCompletion from '../../assets/profile-photo/bootcamp-certificate.jpg';

function Resume() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={certificateOfCompletion} className="certificate" />
                </div>
                <div className="col-md-6 mt-5">
                    <p className = "resume-section">I offer knowledge of programming languages such as: JavaScript, CSS, HTML5, NodeJS, React, Git, and more.</p>
                    <div className="row">
                        <p className = "resume-icons mx-auto"><i class="fab fa-html5"></i></p>
                        <p className = "resume-icons mx-auto"><i class="fab fa-css3-alt"></i></p>
                    </div>
                    <div className="row">
                        <p className = "resume-icons mx-auto"><i class="fab fa-node-js"></i></p>
                        <p className = "resume-icons mx-auto"><i class="fab fa-js"></i></p>

                    </div>
                    <div className="row">
                        <p className = "resume-icons mx-auto"><i class="fab fa-react"></i></p>
                        <p className = "resume-icons mx-auto"><i class="fab fa-git-alt"></i></p>
                    </div>
                    <p className="resume-section">For a more detailed list of skills I have to offer, feel free to go over <a href={myResume} download="Melissa_Barrera_Resume" className ="resume-download">my resume</a>!</p>
                </div>
            </div>

        </section>

    )
}

export default Resume;
