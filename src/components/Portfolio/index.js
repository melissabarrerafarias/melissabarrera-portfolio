import React from 'react'; 
import Project from '../Project'; 

function Portfolio({ currentNav }) {

    const { name } = currentNav;
    
    return (
        <section>
            <h1>{name}</h1>
            <Project />
        </section>
    );
}

export default Portfolio;