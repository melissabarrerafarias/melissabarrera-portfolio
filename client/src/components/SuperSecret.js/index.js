import React, { useState, useEffect } from 'react';

function SuperSecret() {
    const [data, setData] = useState('');
    useEffect(() => {
        fetch("/api/messages")
            .then(response => {
                if (!response.ok) {
                    throw new Error({ message: 'Something went wrong!' });
                }
                return response.json();
            })
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    console.log(data)

    // console.log(messages)
    return (
        <div className="container">
            <div className="row align-items-center">
                {data.map((message) => (
                    <div className = "col-md-6">
                        <p>{message.name}</p>
                        <p>{message.email}</p>
                        <p>{message.message}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default SuperSecret;