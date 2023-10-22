import React from 'react';

const Project = () => {
    //Use Short Hand If Else in any JSX.
    const myProject = 11;
    return (
        <div>
            <h2>Project Section</h2>
            <p>This is a react basic project</p>
            {myProject>=11?(<p>Running and future project</p>):(<p>Project passed</p>)}
        </div>
    );
};

export default Project;