import React from 'react'; 
import Project from '../Project'; 

function Portfolio({ currentNav }) {

    const { name } = currentNav;
    
    return (
        <section>
            <h1 className="text-center m-5 portfolio-text">Projects I've Worked On</h1>
            <Project />
        </section>
    );
}

export default Portfolio;