import React from 'react';
import volunteerWork from '../../../images/volunteer.PNG';

const Volunteer = () => {
    return (
        <div className="row mt-5">
                    <div className="col-md-7">
                        <img style={{width:'100%', height:'500px'}} src={volunteerWork} alt=""/>
                    </div>
                    <div className="col-md-5">
                        <h3>Volunteer Network website</h3>
                        <h6>(Social volunteering demo website) </h6>
                        <small>
                            * Clickable work list by Bootstrap card <br/>
                            * User authentication system <br/>
                            * Social work registration form (user can register in any social work) <br/>
                            * User can show registered work list <br/>
                            * Can cancel any work <br/>
                            * MongoDB database used for store data
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
                        <a target="_blank" style={{textDecoration:'none'}} href="https://volunteer-work-assignment.firebaseapp.com/">Live link || </a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/volunteer-work-assignment">GitHub client link || </a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/volunteer-work-server">GitHub server link</a>
                    </div>
                </div>
    );
};

export default Volunteer;