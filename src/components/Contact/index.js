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

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8 align-self-center">
                    <form id="contact" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label form-text">name</label>
                            <input onBlur={handleChange} type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" defaultValue={name} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label form-text">email</label>
                            <input onBlur={handleChange} type="email" name="email" className="form-control" id="email" defaultValue={email} />
                        </div>
                        <div className="form-floating">
                            <label className="form-text">message</label>
                            <textarea onBlur={handleChange} name="message" className="form-control" placeholder="leave a message and I'll get back to you soon! :D" defaultValue={message} id="message" style={{ height: "100px" }}></textarea>
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
        </section>
    );
}

export default Contact; 
