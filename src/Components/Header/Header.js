import React, {useState} from 'react';


export const Header =(props)=>{
    const [nav, setNav] = useState(true);

    const toggleNav=()=>{
        if(nav) {
            setNav(false);
        }
        if(!nav) {
            setNav(true);
        }
    }
    const handleAbout =()=> {
        toggleNav()
        props.displayAbout();
    }
    const handleProjects =()=> {
        toggleNav();
        props.displayProjects()
    }
    const handleContacts =()=> {
        toggleNav();
        props.displayContact();
    }

    return(
        <header>
        <div className="nav">
            <i className="fas fa-bars" onClick={toggleNav}></i>
            <ul className="nav" id="nav">
                <li onClick={props.displayAbout}>About</li>
                <li onClick={props.displayProjects}>Project</li>
                <li onClick={props.displayContact}>Contact</li>
            </ul>
        </div>
        <div className={nav ? "no-nav" : "show-nav"}>
            <ul className={nav ? "nav-mobile" : "show-nav-links"}>
                <li onClick={handleAbout}>About</li>
                <li onClick={handleProjects}>Projects</li>
                <li onClick={handleContacts}>Contact</li>
                <i className="fas fa-angle-up" onClick={toggleNav}></i>
            </ul>
        </div>

    </header>
    )
}