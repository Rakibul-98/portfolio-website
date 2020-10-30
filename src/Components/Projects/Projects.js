import React from 'react';
import NavBar from '../NavBar/NavBar';
import CreativeIt from './CreativeIt/CreativeIt';
import TravelGuru from './TravelGuru/TravelGuru';
import EmaJohn from './EmaJohn/EmaJohn';
import Volunteer from './Volunteer/Volunteer';
import ESchool from './ESchool/ESchool';

const Projects = () => {
    return (
        <div className="container">
            <NavBar/>
            <div className="container p-1">
                <CreativeIt/>
                <Volunteer/>
                <TravelGuru/>
                <EmaJohn/>
                <ESchool/>
            </div>
        </div>
    );
};

export default Projects;