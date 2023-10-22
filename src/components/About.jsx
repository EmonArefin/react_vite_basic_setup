import React from 'react';

import '../assets/css/styles.css'; // Import the CSS file

const About = () => {
    //Show how Loop works in JSX
    const contactMe = ["01400264525", "https://github.com/EmonArefin", "contact.emonarefin@gmail.com"]
    return (
        <div className="about">
            <h2>About Section</h2>
            <p>This is about me - Emon Arefin</p>
            <ol>
                {
                    contactMe.map((item)=>{
                        return(<li className='item'>{item}</li>)
                    })
                }
            </ol>
        </div>
    );
};

export default About;
