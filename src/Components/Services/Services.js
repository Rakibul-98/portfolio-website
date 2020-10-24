import React from 'react';
import NavBar from '../NavBar/NavBar';
import front from '../../images/frontend.png';
import fullStack from '../../images/full-stack.png';
import back from '../../images/back-end.jpg';

const Services = () => {
    return (
        <div className="container">
            <NavBar/>
            <h2>My Services</h2>
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="card">
                        <img style={{height:'150px'}} src={front} alt=""/>
                        <div className="card-body">
                            <h5>Front-end Web Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ab esse cum nobis obcaecati quibusdam modi soluta minima tenetur inventore.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img style={{height:'250px'}} src={fullStack} alt=""/>
                        <div className="card-body">
                            <h5>Full-stack Web Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ab esse cum nobis obcaecati quibusdam modi soluta minima tenetur inventore.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img style={{height:'150px'}} src={back} alt=""/>
                        <div className="card-body">
                            <h5>Back-end Web Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ab esse cum nobis obcaecati quibusdam modi soluta minima tenetur inventore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;