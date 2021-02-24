import React from 'react';
import './Experiences.css';
const Experiences = () => {
    return (
        <>
        <h1>Experiences</h1>   
        <section className = 'experiences-section'>
            <div id='full-stack' className="header-half single-experience">
                <h2>Full Stack Web Developer</h2>
                <h3 className="text-warning">2020-present | Pro Level Web Dev</h3>
                <p>I am the master of HTML, CSS,javascript,react and node.js. I know everything needed to make a website function,efficient. I didn't stop with the web. I went beyond with most popular JavaScript Library  called React.js. I even know the development server and security. I will give you 100% web solution</p>
            </div>
            <div id="baby-developer" className="header-half single-experience">
                <h2>Baby Web Developer</h2>
                <h3 className="text-warning">2019-2020 | Programming Hero Leaner</h3>
                <p>
                    They didn't after me a job.But I made my self as remove web developer. I made their website and showed it to them. They liked it.And uploaded the contain. It was fun working at Programming Hero.
                </p>
            </div>

        </section>
        <footer className = "text-center">@ 2021 Hero All Rights Reserved</footer>
        </>
    );
};

export default Experiences;