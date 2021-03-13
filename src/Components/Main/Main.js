import React from 'react';
import dan from './dan.JPG';
import htmlImage from './html5.png';
import cssImage from './css3.png';
import jsImage from './javascript.png';
import reactImage from './logo-react.png';

export const Main =()=> {

    
    return(
        <div className="grid">
        <aside className="photo-and-name">
            <img src={dan} alt="Photo of Daniel Dunrell" id="dan-pic-home"/>
            <h1>Daniel Durnell</h1>
            <h2>Junior Web Developer</h2>
        </aside>
        
        <section class="side-bar">
                <h3>Skills</h3>
                <div class="skills-box">
                <img src={htmlImage} alt=""/>
                </div>
                <div class="skills-box">
                <img src={cssImage}alt=""/>
                </div>
                <div class="skills-box">
                <img src={jsImage}alt=""/>
                </div>
                <div class="skills-box">
                <img src={reactImage}alt=""/>
                </div>
            </section>
        
        <section class="mobile-skills">
                <h3>Skills</h3>
            <div class="mobile-skills-container">
                <div class="mobile-skills-box">
                <img src={htmlImage} alt=""/>
                </div>
                <div class="mobile-skills-box">
                <img src={cssImage} alt=""/>
                </div>
                <div class="mobile-skills-box">
                <img src={jsImage} alt=""/>
                </div>
                <div class="skills-box">
                <img src={reactImage}alt=""/>
                </div>
            </div>
            </section>
        </div>
    )
}