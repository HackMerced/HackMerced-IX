import React, { useState } from 'react';

function NavBar() {
  const [isNavBarActive, setIsNavBarActive] = useState(false);

    return (
      <nav className={`NavBar ${isNavBarActive ? 'active' : ''}`}>
        <a href="#" className="navbar-toggle" onClick={() => setIsNavBarActive(!isNavBarActive)}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <ul className={`nav-items ${isNavBarActive ? 'active' : ''}`}>
          <li><a href="#team"><button className={`button ${isNavBarActive ? 'active' : ''}`} id="team-button">team</button></a></li>
          <li><a href="#tracks"><button className={`button ${isNavBarActive ? 'active' : ''}`} id="tracks-button">tracks</button></a></li>
          <li><a href="#faq"><button className={`button ${isNavBarActive ? 'active' : ''}`} id="faq-button">faq</button></a></li>
          <li><a href="#sponsors"><button className={`button ${isNavBarActive ? 'active' : ''}`} id="sponsors-button">sponsors</button></a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdsinPEX__G-Jr2kUgGIHNpwZyTA3VWYx4NPGU8X320Xa47rg/viewform"><button className={`button ${isNavBarActive ? 'active' : ''}`} id="mentor-button">mentor</button></a></li>
          <li><a href="https://docs.google.com/forms/d/1_A3jLqUO3d5hsv9MtMF358K0C2nntOpq_WYin2H1aKw/viewform"><button className="registerButton" id="register-button">register</button></a></li>
        </ul>
            
      </nav>
    );
  }
  
  export default NavBar;