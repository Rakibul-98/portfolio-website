import React from 'react';
import NavBar from '../../NavBar/NavBar';
import image from '../../../images/profile1.png';
import resume from '../../../images/Resume - Rakibul.pdf';
import SideNav from '../../SideNav/SideNav';
import './Front.css';

const Front = () => {
    return (
        <div className="container">
            <NavBar/>
            <div className="row">
            <div className="col-md-4 img-section">
                <img src={image} alt=""/>
            </div>
                <div className="col-md-7">
                <div className="intro">
                    <h4>Hello, </h4>
                    <h3>I am Md Rakibul Hasan</h3>
                    <h1>Full-Stack Web Developer</h1>
                    <p>I am a serious web developer. I am working on front-end and back-end in both fields. I'm dedicated and passionate about my works. I'm also a quick learner <br/> with high-quality coding skills.</p>
                    <a href={resume} download><button className="btn">Download my resume</button></a>
                    <a href="/contact"><button className="contact-btn" type="reset">Contact me</button></a>
                    </div>
                </div>
                <div className="col-md-1">
                    <SideNav/>
                </div>
            </div>
            <footer> All Rights Reserved by rakiul.rupom2001@gmail.com - {(new Date()).getFullYear()} </footer>
        </div>
    );
};

export default Front;