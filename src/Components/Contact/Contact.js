import React from 'react';
import githubImage from './github-logo.jpg';
import emailImage from './email-logo.png';

export const Contact =(props)=> {
    if(!props.contact) {
        return null
    }
   
    if(props.contact) {
    return(
    
    <div className="grid">
        <main className="main-content contact">
            <h2>Contact</h2>
            <p>I'm excited you made it here! If you're an aspiring developer like myself or someone who thinks I have
                what it takes to be a part of your team, let's connect!</p>
                
                <section id="connect-content">
                    <div className="connect-content-box">
                    
                        <div className="logo-box">
                            <div>
                                <h3 className="contact-box">GitHub:</h3>
                            </div>
                            <div>
                                <a href="https://github.com/frivolousvision/"><img src={githubImage} alt="github logo"/></a>
                            </div>
                        </div>
                    
                        <div className="logo-box">
                        
                        <h3 className="contact-box">Email:</h3>
                        <a href="mailto:frivolousvision@gmail.com"><img src={emailImage} alt="email icon"/></a>
                        </div>
                    </div>                    
                </section>
        </main>
    </div> 

    )
    }
}