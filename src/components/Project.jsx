import React from 'react';

import '../assets/css/styles.css'; // Import the CSS file

const Project = () => {
    //Use Short Hand If Else in any JSX.
    const myProject = 11;
    return (
        <div className="project">
            <h2>Project Section</h2>
            <p>This is a react basic project</p>
            {myProject>=11?(<p>Running and future project</p>):(<p>Project passed</p>)}
        </div>
    );
};

export default Project;
