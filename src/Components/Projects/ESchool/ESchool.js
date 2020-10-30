import React from 'react';
import eSchool from '../../../images/eSchool.PNG';

const ESchool = () => {
    return (
        <div className="row mt-5">
                    <div className="col-md-5">
                        <h3>E-School website</h3>
                        <h6>(Online school front-end design) </h6>
                        <small>
                            * Amazing looking front page <br/>
                            * With Bootstrap cards <br/>
                            * Footer section
                        </small>
                        <h5 style={{marginTop:'20px'}}>Used technologies</h5>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Bootstrap navbar</li>
                            <li>Bootstrap Card</li>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                        </ul>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://rakibul-98.github.io/e-school-assignment/">Live link || </a>
                        <a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Rakibul-98/e-school-assignment">GitHub link </a>
                    </div>
                    <div className="col-md-7">
                        <img style={{width:'100%',height:'500px'}} src={eSchool} alt=""/>
                    </div>
                </div>
    );
};

export default ESchool;