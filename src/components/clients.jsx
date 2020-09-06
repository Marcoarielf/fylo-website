import React from 'react';
import profile1 from './images/profile-1.jpg'
import profile2 from './images/profile-2.jpg'
import profile3 from './images/profile-3.jpg'
import comillas from './images/bg-quotes.png'
import './clients.css'


function Clients(){
    return(
        <div className="containerTestimonials">
            <img src={comillas} alt="comillas" className="comillas" />
           <Client 
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." 
            src={profile1} 
            headline="Satish Patel"
            subheadline="Founder & CEO, Huddle" 
            />

            <Client 
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." 
            src={profile2} 
            headline="Bruce McKenzie"
            subheadline="Founder & CEO, Huddle" 
            />

            <Client 
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." 
            src={profile1} 
            headline="Iva Boyd"
            subheadline="Founder & CEO, Huddle" 
            />
        </div>
        
    );
}

function Client(props){
    return(
        <div className="box">
            <p>{props.text}</p>
            <img src={props.src} alt="avatar profile"/>
            <div className="infoProfile">
                <h2>{props.headline}</h2>
                <span>{props.subheadline}</span>
            </div>
            
        </div>
    );
}

export default Clients;