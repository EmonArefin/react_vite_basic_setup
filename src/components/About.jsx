import React from 'react';

const About = () => {
    //Show how Loop works in JSX
    const contactMe = ["01400264525", "https://github.com/EmonArefin", "contact.emonarefin@gmail.com"]
    return (
        <div>
            <h2>About Section</h2>
            <p>This is about me - Emon Arefin</p>
            <ol>
                {
                    contactMe.map((item)=>{
                        return(<li>{item}</li>)
                    })
                }
            </ol>
        </div>
    );
};

export default About;