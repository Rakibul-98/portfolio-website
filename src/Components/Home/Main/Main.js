import React from 'react';
import './Main.css';
import Photo from '../../../images/profile.png'
import SideNav from '../../SideNav/SideNav';
import resume from '../../../images/Resume - Rakibul.pdf';
import NavBar from '../../NavBar/NavBar';

const Main = () => {
    return (
        <div className="row">
            <div className="col-md-4 left-bar">
                <div className="d-flex justify-content-end">
                    <img style={{height:'250px'}} src={Photo} alt=""/>
                    <div className="empty-div one"></div>
                    <div className="empty-div two"></div>
                </div>
            </div>
            <div className="container col-md-6">
                <NavBar/>
                <div className="intro">
                   <h4>Hello, </h4>
                   <h3>I am Md Rakibul Hasan</h3>
                   <h1>Full-Stack Web Developer</h1>
                   <p>I am a serious web developer. I am working on front-end and back-end in both fields. I'm dedicated and passionate about my works. I'm also a quick learner <br/> with high-quality coding skills.</p>
                   <a href={resume} download><button className="btn">Download my resume</button></a>
                   <a href="/contact"><button className="contact-btn" type="reset">Contact me</button></a>
                </div>
                <footer> All Rights Reserved by rakiul.rupom2001@gmail.com - {(new Date()).getFullYear()} </footer>
            </div>
            <div className="col-md-2">
                <SideNav/>
            </div>
        </div>
    );
};

export default Main;