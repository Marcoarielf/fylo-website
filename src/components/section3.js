import React from 'react';
import image from './images/illustration-stay-productive.png'
import arrow from './images/icon-arrow.svg'
import './section3.css'


function Section3(){
    return(
        <div className="containerS3">
            <div className="contentImg">
                <img src={image} alt="people thinking"/>
            </div>
            
            <div className="content">
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. <br/><br/>
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <div className="seeHow">
                    <a href="#">See how Fylo works</a>
                    <img src={arrow} alt="icon arrow"/>
                </div>
            </div>
            
                
            
        </div>
        
    );
}


export default Section3;