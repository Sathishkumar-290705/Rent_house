import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2><Link to="/">DSP HOME RENTAL LTD</Link></h2>

      <di v className="nav-links">

      <div>

          <Link to="/about-us">About Us</Link>
      </div>

        <div className="nav-item">
        
          <Link>Services</Link>
          <div className="submenu">
            <Link to="/buy">Buy</Link>
            <Link to="/rent">Rent</Link>
            <Link to="/lease">Lease</Link>
          </div>
        </div>

        <div className="nav-item">
          <Link to="/enquiry">Enquiry</Link>
        </div>

      </di>
    </nav>
  );
};

export default Navbar;
