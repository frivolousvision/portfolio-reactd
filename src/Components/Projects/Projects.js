import React from 'react';
import companyScreenshot from './company-screenshot.png';
import veloScreenshot from './velo-screenshot.png';
import teaScreenshot from './tea-screenshot.png'; 
import designScreenshot from './design-screenshot.png';

export const Projects =()=>{
    return(
        <div className="grid">
        <main className="main-content">
        <h2 className="projects-header">Projects</h2>
        <div className="projects" id="projects">
            
            <div className="gallery-box">
                <figure>
                    <figcaption>A website I made for a ficticious company</figcaption>
                    <a href="https://frivolousvision.github.io/companyproject" target="_blank"><img src={companyScreenshot} alt="" id="gallery-box-one"/></a>
                </figure>
            </div>

            <div className="gallery-box">
                <figure>
                    <figcaption>A website I made for my friends bike group</figcaption>
                    <a href="https://frivolousvision.github.io/velosantana/"><img src={veloScreenshot} alt="" id="gallery-box-two"/></a>
                </figure>
            </div>

            <div className="gallery-box">
                <figure>
                    <figcaption>A website I made from a codecademy spec sheet</figcaption>
                    <a href="https://frivolousvision.github.io/theteacozy/" target="_blank"><img src={teaScreenshot} alt="" id="gallery-box-three"/></a>
                </figure>
            </div>

            <div className="gallery-box">
                <figure>
                    <figcaption>A website I made to store colors and fonts for design</figcaption>
                    <a href="https://frivolousvision.github.io/web-design-sheet/"><img src={designScreenshot} id="gallery-box-four"/></a>
                </figure>
            </div>
        </div>
        </main>
        </div>
    )
}