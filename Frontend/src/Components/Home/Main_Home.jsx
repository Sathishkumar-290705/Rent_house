import React, { useState } from 'react';
import '../Home/Main_Home.css'; // Importing CSS for styling
import BuyCard from '../Buy/Main_Buy'; // Component to show Buy listings
import RentCard from '../Rent/Main_Rent'; // Component to show Rent listings
import LeaseCard from '../Lease/Main_Lease'; // Component to show Lease listings
const Main_Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    setSearchTriggered(true);
    // Scroll to results
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-home">
      {/* ========== Hero Section ========== */}
      <div className="hero-container">
        <div className="overlay">
          <h1 className="quote-text">"Find your next home with comfort and ease!"</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by location, type, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      {/* ========== Search Results Section ========== */}
      {searchTriggered && (
        <div className="results-section">
          <h3>Searched Results:</h3>

          <div className="result-block">
            <h4>Buy:</h4>
            <BuyCard query={searchQuery} />
          </div>

          <div className="result-block">
            <h4>Rent:</h4>
            <RentCard query={searchQuery} />
          </div>

          <div className="result-block">
            <h4>Lease:</h4>
            <LeaseCard query={searchQuery} />
          </div>
        </div>
      )}

      {/* ========== About Section ========== */}
      <div className="about-section" id="about-section">
        <h2>About This Website</h2>
        <p>
          Welcome to HomeFinder — your one-stop platform to explore homes for <strong>Buy</strong>,
          <strong> Rent</strong>, and <strong>Lease</strong>. No signups needed! Just browse, filter, and connect
          with property owners directly.
        </p>
      </div>

    </div>
  );
};

export default Main_Home;
