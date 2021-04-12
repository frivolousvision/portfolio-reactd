import React from 'react';

export const About =(props)=>{
    if(!props.about) {
        return null
    }
    if(props.about) {
    return (
    <div className="grid">
   <main className="main-content">
            <div className="about" id ="about">
                <h2>About</h2>
                <p>Hey there! My name is Dan and I am an aspiring web developer located in Atlanta, GA. I am currently enrolled in a 
                    Full-Stack Engineering course at Codecademy. I earned two degrees from Georgia State Univserity in Marketing and Finance
                    and have half a decade of experience in management in the hospiltality industry.</p>
                    <br/>
                    <p>My interest in web developement was peaked a few years ago while building websites via SquareSpace for a company I was working for. I 
                    dug how user-friendly the platform was, but was left wanting more control over the design.  With Codecademy and beyond, I'm trying 
                    to learn all that I can to become a full-stack developer.</p> 
                    <br/>
                    <p>In my free time, I enjoy riding bikes to distant places, 
                    drinking great coffee, watching good movies and occasionally
                     drawing creepy creatures.</p>
            </div>
            </main>
            </div>
   )
    }
}