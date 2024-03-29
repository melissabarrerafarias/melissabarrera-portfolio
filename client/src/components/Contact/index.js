import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const validEmail = validateEmail(e.target.value);
            console.log(validEmail)
            if (!validEmail) {
                setErrorMessage("Sorry, your email is invalid!");
            }
            else {
                setErrorMessage("");
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`Sorry, a ${e.target.name} is required!`);
            }
            else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value }); // targets name attribute
        }
    }

    const handleSubmittedForm = () => { // Once the form has been submitted, this function will post to the backend
        setFormState({ name: '', email: '', message: '' })
        const postURL = "/api/messages" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                email: email, 
                message: message
            })
        });
    }

    return (
        <div className="container mt-5">
            <div className="row">   
                <div className="col-md-6 mt-5">
                    <div className="row justify-content-center">
                        <div className="col align-self-center">
                            <form id="contact" onSubmit={handleSubmittedForm} autocomplete="off">
                                <div className="mb-3">
                                    <label className="form-label form-text">name</label>
                                    <input autocomplete="off" onBlur={handleChange} type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" defaultValue={name} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label form-text">email</label>
                                    <input autocomplete="off" onBlur={handleChange} type="email" name="email" className="form-control" id="email" defaultValue={email} />
                                </div>
                                <div className="form-floating">
                                    <label className="form-text">message</label>
                                    <textarea autocomplete="off" onBlur={handleChange} name="message" className="form-control" placeholder="leave a message and I'll get back to you soon! :D" defaultValue={message} id="message" style={{ height: "100px" }}></textarea>
                                </div>
                                {errorMessage && (
                                    <div>
                                        <p className="error-msg mt-2">{errorMessage}</p>
                                    </div>
                                )}
                                <button type="submit" className="btn contact-btn mt-3 mb-5">enter</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 m-auto">
                    <div className="row justify-content-center">
                        <a className="mx-auto contact-links" href="https://www.linkedin.com/in/melissa-barrera-103b531b3/"><i className="fab fa-linkedin"></i></a>
                        <a className="mx-auto contact-links" href="https://github.com/melissabarrerafarias"><i className="fab fa-github-square"></i></a>
                    </div>
                    <div className = "row justify-content-center">
                        <a className="mx-auto contact-links" href="https://stackoverflow.com/users/14167549/melissa?tab=profile"><i className="fab fa-stack-overflow"></i></a>
                        <a className="mx-auto contact-links" href="mailto:melissabarrerafarias@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
