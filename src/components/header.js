import React from 'react';
import headerImage from './images/illustration-intro.png';
import bgmobile from './images/bg-curvy-mobile.svg';
import './../components/header.css';


function Header(){
    return(
        <div className="wrapper">
            <img src={headerImage} />
            <div className="text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button>Get Started</button>
            </div>
            
        <img src={bgmobile}  className="mountainBackground" />
        </div>
        
    );
}

export default Header;