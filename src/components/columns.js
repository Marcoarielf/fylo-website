import React from 'react';
import icon1 from './images/icon-access-anywhere.svg'
import icon2 from './images/icon-security.svg'
import icon3 from './images/icon-collaboration.svg'
import icon4 from './images/icon-any-file.svg'
import './columns.css'


function Columns(){
    return(
        <div className="container">
            <div className="row1">
                <CreateColumn src={icon1} subhead="Access your files, anywhere" text="The ability to use a smartphone, tablet, or computerto access your account means your files follow you everywhere." />
                <CreateColumn src={icon2} subhead="Security you can trust" text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files." />
            </div>
            <div className="row2">
            <CreateColumn src={icon3} subhead="Real-time collaboration" text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required." />
            <CreateColumn src={icon4} subhead="Store any type of file" text="Wheter you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared." />
            </div>
            
        </div>
        
    );
}

function CreateColumn(props){
    return(
        <div className="columns">
            <img src={props.src} alt="icon1"/>
            <h2>{props.subhead}</h2>  
            <p className="textColumns">{props.text}</p>
        </div>
        
    );
}

export default Columns;