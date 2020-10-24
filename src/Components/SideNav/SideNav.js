import React from 'react';
import './SideNav.css';
import Fb from '../../images/facebook.png';
import LinkedIn from '../../images/linkedIn.png';
import upwork from '../../images/upwork.png';
import Git from '../../images/git.png';



const SideNav = () => {

   
    return (
        <div className="nav-bar">
            <a target="_blank" style={{marginLeft:'35px'}} href="https://www.upwork.com/freelancers/~01fb49f89d28a7ef34"><img style={{height:'30px', marginBottom:'10px'}} src={upwork} alt=""/></a>
            <br/>
            <a target="_blank" style={{marginLeft:'35px'}} href="https://www.linkedin.com/in/rakibul-98"><img style={{height:'30px'}} src={LinkedIn} alt=""/></a>
            <br/>
            <a target="_blank" style={{marginRight:'50px'}} href="https://web.facebook.com/shwattik.ahmed.7"><img style={{height:'50px'}} src={Fb} alt=""/></a>
            <br/>
            <a target="_blank" style={{marginLeft:'22px'}} href="https://github.com/Rakibul-98"><img style={{height:'30px'}} src={Git} alt=""/></a>
        </div>
    );
};

export default SideNav;