import React from 'react';
import logo from './images/logo.svg'
import './nav.css'

function Nav(){
    return(
        <div className="Nav">
            <img src={logo} alt="Fylogo"/>
            <div className="rightSide">
                <ul>
                    <li>
                        <a href="#">Features</a>
                        <a href="#">Team</a>
                        <a href="#">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}


export default Nav;