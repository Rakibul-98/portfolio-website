import React from 'react';
import emaJohn from '../../../images/ema-john.PNG';

const EmaJohn = () => {
    return (
        <div className="row mt-5">
                    <div className="col-md-7">
                        <img style={{width:'100%', height:'500px'}} src={emaJohn} alt=""/>
                    </div>
                    <div className="col-md-5">
                        <h3>Ema-John e-commerce website</h3>
                        <h6>(E-commerce demo website) </h6>
                        <small> * Used MongoDB data base to store products data <br/>
                                * User can add any item from products list <br/>
                                * With user authentication system (user login) <br/>
                                * Private routing with react-router <br/>
                                * Protected shipping section
                                </small>
                        <h5 style={{marginTop:'20px'}}>What I used for this website</h5>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>ES6</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>React Router</li>
                            <li>React hook form</li>
                            <li>Firebase</li>
                            <li>MongoDB</li>
                        </ul>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://objective-hopper-8d7a87.netlify.app/">Live link || </a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/ema-john-latest">GitHub client link || </a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/ema-john-latest-server">GitHub server link</a>
                    </div>
                </div>
    );
};

export default EmaJohn;