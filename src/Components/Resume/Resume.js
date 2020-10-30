import React from 'react';
import NavBar from '../NavBar/NavBar';
import resume from '../../images/Resume - Rakibul.pdf';

const Resume = () => {
    return (
        <div className="container">
            <NavBar/>
            <a href={resume} download><button style={{marginLeft:'25%', padding:'6px 25px', backgroundColor:'gray', color:'white'}} className='mt-4'>Download Resume</button></a>
            <div className="d-flex justify-content-center container mt-1">
               <embed src={resume}   height="460px" width="570px"></embed>
            </div>
        </div>
    );
};

export default Resume;