import  React from 'react';
import './../App.css'
import { Link } from 'react-router-dom';

function Nav() {

    return(
        <nav>
            <ul className="nav-links">
                <Link to="/Generate"><li>Generate</li></Link>
                <Link to="/Saved"><li>Saved</li></Link>
            </ul>
        </nav>
    ) 
}

export default Nav;