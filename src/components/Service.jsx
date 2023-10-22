import React from 'react';

const Service = () => {
    //Show how JSX Conditional Rendering Using Ternary Operator works
    const serviceProject = 4;
    return (
        <div>
            <h2>Service Section</h2>
            <p>This is me at your service</p>
            {serviceProject<5?(<p>I can serve you all project</p>):(<p>This is too much project for me</p>)}
        </div>
    );
};

export default Service;
