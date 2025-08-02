import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2><Link to="/">DSP HOME RENTAL LTD</Link> </h2>
      <div className="nav-links">
        {/* <Link to="/home">Home</Link> */}
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/lease">Lease</Link>
        <Link to="/Enqiry">Enqiry</Link>
      </div>          
    </nav>
  );
};

export default Navbar;
