import React from 'react';
import NavBar from '../NavBar/NavBar';
import eSchool from '../../images/eSchool.PNG';
import pandaCommerce from '../../images/pandaCommerce.PNG';
import travelGuru from '../../images/travelguru.PNG';
import creativeIt from '../../images/creative-it.PNG';
import volunteerWork from '../../images/volunteer.PNG';
import emaJohn from '../../images/ema-john.PNG';

const DashBoard = () => {
    return (
        <div className="container">
            <NavBar/>
            <h2 style={{color:'rgb(0, 191, 255)'}}>Some websites made by me</h2>
            <div className="container p-1">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                   <div className="carousel-inner">
                       <div className="carousel-item active">
                           <div className="row d-flex align-items-center">
                               <div className="col-md-5">
                                   <h3>E-School website</h3>
                                   <small>This is an e-school website. The front-end section is designed by me...</small>
                                   <h5 style={{marginTop:'20px'}}>What I used for this website</h5>
                                   <ul>
                                       <li>HTML 5</li>
                                       <li>CSS 3</li>
                                       <li>Bootstrap</li>
                                       <li>Bootstrap Card</li>
                                   </ul>
                               </div>
                               <div className="col-md-7">
                                   <img style={{width:'100%',height:'500px'}} src={eSchool} alt=""/>
                               </div>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="row d-flex align-items-center">
                               <div className="col-md-5">
                                   <h3>Panda Commerce website</h3>
                                   <small>A simple e-commerce website with interactive carousel... <br/> Front-end designed by me...</small>
                                   <h5 style={{marginTop:'20px'}}>What I used for this website</h5>
                                   <ul>
                                       <li>HTML 5</li>
                                       <li>CSS 3</li>
                                       <li>Bootstrap</li>
                                       <li>Bootstrap Card</li>
                                       <li>Carousel</li>
                                   </ul>
                               </div>
                               <div className="col-md-7">
                                   <img style={{width:'100%', height:'500px'}} src={pandaCommerce} alt=""/>
                               </div>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="row d-flex align-items-center">
                               <div className="col-md-5">
                                   <h3>Travel Guru website</h3>
                                   <small>This is a travel agency demo website. It has user authentication system, interactive Carousel. The front-end and back-end both section designed an developed by me...</small>
                                   <h5 style={{marginTop:'20px'}}>What I used for this website <small><a target="_blank" style={{textDecoration:'none'}} href="https://travel-guru-rakibul.firebaseapp.com/">Visit this site</a></small></h5>
                                   <ul>
                                       <li>HTML 5</li>
                                       <li>CSS 3</li>
                                       <li>ES6</li>
                                       <li>Bootstrap</li>
                                       <li>Carousel</li>
                                       <li>Firebase</li>
                                       <li>React</li>
                                       <li>React Router</li>
                                       <li>Simple google Map</li>
                                   </ul>
                               </div>
                               <div className="col-md-7">
                                   <img style={{width:'100%', height:'500px'}} src={travelGuru} alt=""/>
                               </div>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="row d-flex align-items-center">
                               <div className="col-md-5">
                                   <h3>Creative IT website</h3>
                                   <small>This is a complete e-learning school demo website. Admin can add services, users can purses services and give reviews. For store the website data I use MongoDB database....</small>
                                   <h5 style={{marginTop:'20px'}}>What I used for this website <small><a target="_blank" style={{textDecoration:'none'}} href="https://creative-it-assignment.firebaseapp.com/">Visit this site</a></small></h5>
                                   <ul>
                                       <li>HTML 5</li>
                                       <li>CSS 3</li>
                                       <li>ES6</li>
                                       <li>Bootstrap</li>
                                       <li>Carousel</li>
                                       <li>React</li>
                                       <li>React Router</li>
                                       <li>React hook form</li>
                                       <li>Firebase</li>
                                       <li>MongoDB</li>
                                   </ul>
                               </div>
                               <div className="col-md-7">
                                   <img style={{width:'100%', height:'500px'}} src={creativeIt} alt=""/>
                               </div>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="row d-flex align-items-center">
                               <div className="col-md-5">
                                   <h3>Volunteer Network website</h3>
                                   <small>It is a social work demo website. People can join in any social work by signing in....</small>
                                   <h5 style={{marginTop:'20px'}}>What I used for this website <small><a target="_blank" style={{textDecoration:'none'}} href="https://volunteer-work-assignment.firebaseapp.com/">Visit this site</a></small></h5>
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
                               </div>
                               <div className="col-md-7">
                                   <img style={{width:'100%', height:'500px'}} src={volunteerWork} alt=""/>
                               </div>
                           </div>
                       </div>
                       <div className="carousel-item">
                           <div className="row d-flex align-items-center">
                               <div className="col-md-5">
                                   <h3>Ema-John e-commerce website</h3>
                                   <small>A complete e-commerce demo website. I used MongoDB data base to store products data. It has interactive cart, shipping section....</small>
                                   <h5 style={{marginTop:'20px'}}>What I used for this website <small><a target="_blank" style={{textDecoration:'none'}} href="https://objective-hopper-8d7a87.netlify.app/">Visit this site</a></small></h5>
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
                               </div>
                               <div className="col-md-7">
                                   <img style={{width:'100%', height:'500px'}} src={emaJohn} alt=""/>
                               </div>
                           </div>
                       </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;