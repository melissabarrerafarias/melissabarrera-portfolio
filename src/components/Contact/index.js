import React from 'react';

function Contact() {
    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8 align-self-center">
                    <form>
                        <div className="mb-3">
                            <label className="form-label form-text">name</label>
                            <input type="name" className="form-control" id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label form-text">email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-floating">
                            <label className="form-text">message</label>
                            <textarea className="form-control" placeholder="leave a message and I'll get back to you soon! :D" id="message" style={{ height: "100px" }}></textarea>
                        </div>
                        <button type="submit" className="btn contact-btn mt-4">enter</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact; 
