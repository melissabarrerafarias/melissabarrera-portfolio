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

    // console.log(messages)
    return (
        <div className="container">
            {!data ? (
                <p>No messages!</p>
            ) : (
                <div className="row">
                {data.map((message) => (
                    <div className="col-md-12 messages">
                        <p style={{ color: "white" }}>Name : {message.name}</p>
                        <p style={{ color: "white" }}>Email: {message.email}</p>
                        <p style={{ color: "white" }}>Message: {message.message}</p>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}




export default SuperSecret;