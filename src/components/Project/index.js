import React, { useState } from 'react';
import photo from '../../assets/images/fly-high.png';

function Project() {
    const [projectPhotos] = useState([
        {
            name: 'fly-high', 
            navigation: 'portfolio'
        }, 
        {
            name: "weather", 
            navigation: 'portfolio'
        }
    ])

    // const currentPhotos = photos.filter((photo) => photo.nav === nav);


    return (
        <div> 
            <div> 
                {projectPhotos.map((photo) => (
                    <img 
                    src={require(`../../assets/images/${photo.name}.png`).default}
                    alt={photo.name}
                    key={photo.name}
                    />
                ))}
            </div>
        </div>
    )

}

export default Project;