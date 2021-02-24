import React from 'react';
import './Header.css';
import saadProfile  from './saad-profile.png'
const Header = () => {
    return (
        <section className ='Header-section'>
        <div className="header-half">
            <h1>Welcome to <br/> <span className='text-warning'>Hero</span> website</h1>
                <h3>Build Climber and Train Stopper</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic excepturi ex, eaque eligendi asperiores officia sapiente vel optio explicabo, voluptates, dolore tenetur?</p>
                <a className = "link-button"target= "_blank" href="https://www.linkedin.com/in/golam-mostafa-42306817a/">Click Here!</a>
        </div>
        <div className="header-half">
            <img src={saadProfile} alt=""/>
        </div>
        </section> 
    );
};

export default Header;