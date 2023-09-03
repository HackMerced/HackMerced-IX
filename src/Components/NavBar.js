function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li><a href="#tracks"><button className="button">tracks</button></a></li>
          <li><a href="#faq"><button className="button">faq</button></a></li>
          <li><a href="#sponsors"><button className="button">sponsors</button></a></li>
          <li><a href="https://docs.google.com/forms/d/1m3gyvbUCWNQHYHcNA8qRXJdkmmXY19ApVzHxyjZCQSM/edit"><button className="button">mentor</button></a></li>
          <li><a href="https://docs.google.com/forms/d/1_A3jLqUO3d5hsv9MtMF358K0C2nntOpq_WYin2H1aKw/edit"><button className="registerButton">register</button></a></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;