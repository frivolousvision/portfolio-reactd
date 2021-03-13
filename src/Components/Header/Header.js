import React, {useState} from 'react';


export const Header =()=>{
    const [nav, setNav] = useState(true);

    const toggleNav=()=>{
        if(nav) {
            setNav(false);
        }
        if(!nav) {
            setNav(true);
        }
    }
    return(
        <header>
        <div className="nav">
            <i className="fas fa-bars" onClick={toggleNav}></i>
            <ul className="nav" id="nav">
                <li><a href="/">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className={nav ? "no-nav" : "show-nav"}>
            <ul className={nav ? "nav-mobile" : "show-nav-links"}>
                <li><a href="/" onClick={toggleNav}>About</a></li>
                <li><a href="/projects" onClick={toggleNav}>Projects</a></li>
                <li><a href="/contact" onClick={toggleNav}>Contact</a></li>
                <i className="fas fa-angle-up" onClick={toggleNav}></i>
            </ul>
        </div>

    </header>
    )
}