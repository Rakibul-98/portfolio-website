import React from 'react';
import travelGuru from '../../../images/travelguru.PNG';

const TravelGuru = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <h3>Travel Guru website</h3>
                <h6>(A Travel Agency demo website)</h6>
                <small>* With user authentication system (user login) <br/>
                        * Private routing with react-router <br/>
                        * User can book the desired trip <br/>
                        * Inter-active Carousel</small>
                <h5 style={{marginTop:'20px'}}>Used technologies</h5>
                <ul>
                    <li>Bootstrap</li>
                    <li>Carousel</li>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>ES6</li>
                    <li>Firebase</li>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Simple google Map</li>
                </ul>
                <a target="_blank" style={{textDecoration:'none'}} href="https://travel-guru-rakibul.firebaseapp.com/">Live link || </a>
                <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/travel-guru">GitHub link</a>
            </div>
            <div className="col-md-7">
                <img style={{width:'100%', height:'500px'}} src={travelGuru} alt=""/>
            </div>
        </div>
    );
};

export default TravelGuru;