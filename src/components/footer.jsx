import React from 'react';
import './footer.css'
import logo from './images/logo.svg'
// get our fontawesome imports

function Footer(){
    return(
        <div className="footer">
            <div className="Column1">
                <img src={logo} alt="Fylogo"/>
                <Info text="lorem  ashasjd aisjasc asidjasi ariwqirwqifm c sidhas8inc id qw8djaskd udn dpasmdm" fafa="fa fa-map-marker" />
            </div>
            
            <div className="Column2">
                <Info text="+1-543-123-623" fafa="fa fa-phone" />
                <Info text="example@fylo.com" fafa="fa fa-envelope" />
            </div>
            <div className="links">
                <LinksFooter link="About Us"/>
                <LinksFooter link="Jobs" />
                <LinksFooter link="Press" />
                <LinksFooter link="Blog" />
            </div>
            <div className="linksExtra">
                <LinksFooter link="Contact Us" />
                <LinksFooter link="Terms" />
                <LinksFooter link="Privacy" />
            </div>
            
            
            <ul className="bottomLinks">
                <BottomLinks fafa="fa fa-facebook" />
                <BottomLinks fafa="fa fa-twitter" />
                <BottomLinks fafa="fa fa-instagram" />
            </ul>
            
        </div>
        
    );
}

function Info(props){
    return(
        <div>
            <i class={props.fafa}></i>
            <p>{props.text}</p>
        </div>
    );
    
}

function LinksFooter(props){
    return(
        <>
            <a href="#">{props.link}</a>
        </>
    );
    
}

function BottomLinks(props){
    return(
            <li className="SocialIcons">
                <i class={props.fafa}></i>
            </li>
    );
}

export default Footer;