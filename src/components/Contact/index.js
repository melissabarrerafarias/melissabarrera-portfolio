import React, { useState } from 'react';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value}) // targets name attribute
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log(formState);
    }

    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8 align-self-center">
                    <form id ="contact" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label form-text">name</label>
                            <input onChange={handleChange} type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" defaultValue={name}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label form-text">email</label>
                            <input onChange={handleChange} type="email" name="email" className="form-control" id="email" defaultValue={email}/>
                        </div>
                        <div className="form-floating">
                            <label className="form-text">message</label>
                            <textarea onChange={handleChange} name="message" className="form-control" placeholder="leave a message and I'll get back to you soon! :D" defaultValue={message} id="message" style={{ height: "100px" }}></textarea>
                        </div>
                        <button type="submit" className="btn contact-btn mt-4">enter</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact; 
