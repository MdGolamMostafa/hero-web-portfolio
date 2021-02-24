import React from 'react';
import "./Dream.css";
import saadDream  from './saad-dream.png';
const Dream = () => {
    return (
        <section className = 'dream-section'>
            <div className="header-half">
                <img src={saadDream} alt=""/>
            </div>
            <div className="header-half">
                <h2>Big Dream</h2>
                <h3>Become World's No.1 Developer</h3>
                <p>
                    I already learned the basics HTML,CSS,Bootstrap, JavaScript, React. I can build any simple website. I can even teach my grandma how to make simple website. My goal is to build 333 websites and learn advanced topics;
                </p>
                <a className = "link-button"target= "_blank" href="https://drive.google.com/file/d/1c_iOH0l3ngkqCnnFsq2xmoIsYmwNkzGM/view?usp=sharing">Download Resume</a>

            </div>
        </section>
    );
};

export default Dream;