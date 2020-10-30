import React from 'react';
import Creative from '../../../images/creative-it.PNG'



const CreativeIt = () => {
    return (
        <div className="row mt-4">
                    <div className="col-md-5">
                        <h3>Creative IT website</h3>
                        <h6>(Online School demo website)</h6>
                        <small>* Dynamic service and review section on home page <br/>
                                * User authentication system with firebase <br/>
                                * Client and Admin two different type of user can access <br/>
                                * Client can buy service and make a review <br/>
                                * Admin can add services and make others to admin</small>
                        <h5 style={{marginTop:'20px'}}>Used Technologies</h5>
                        <ul>
                            <li>React JS</li>
                            <li>BootStrap</li>
                            <li>Carousel</li>
                            <li>Card</li>
                            <li>React-hook-form</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React Router</li>
                            <li>Firebase</li>
                            <li>MongoDB</li>
                        </ul>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://creative-it-assignment.firebaseapp.com/">Live link ||</a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/Creative-IT-assignment-client"> GitHub client Link ||</a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/Creative-IT-assignment-server"> GitHub server Link</a>
                    </div>
                    <div className="container-fluid col-md-7">
                        <img className="img-fluid" src={Creative} alt=""/>
                    </div>
                </div>
    );
};

export default CreativeIt;