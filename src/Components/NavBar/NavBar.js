import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="top-nav">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                 <a class="nav-link" href="/"><strong>Home</strong></a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="/resume"><strong>My Resume</strong></a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="/services"><strong>Services</strong></a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="/projects"><strong>Projects</strong></a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="/blogs"><strong>Blogs</strong></a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="/contact"><strong>About me</strong></a>
              </li>
            </ul>
        </div>
    );
};

export default NavBar;