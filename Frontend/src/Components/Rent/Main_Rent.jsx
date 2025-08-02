import React, { useState } from 'react';
import './Pages.css';

const Main_Rent = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [searchTerm, setSearchTerm] = useState('');

  const rentalListings = [
    { id: 1, price: 1800, term: 'monthly', beds: 2, location: 'Downtown' },
    { id: 2, price: 2200, term: 'monthly', beds: 3, location: 'Suburbs' },
    { id: 3, price: 1200, term: 'weekly', beds: 1, location: 'City Center' }
  ];

  const filteredListings = rentalListings.filter(listing => 
    listing.term === activeTab && 
    listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="rent-header">
        <h2>Find Your Perfect Rental</h2>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search by location..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>

        <div className="rent-tabs">
          <button 
            className={activeTab === 'monthly' ? 'active' : ''}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly Rentals
          </button>
          <button 
            className={activeTab === 'weekly' ? 'active' : ''}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly Rentals
          </button>
        </div>
      </div>

      <div className="rental-list">
        {filteredListings.map(listing => (
          <div key={listing.id} className="rental-card">
            <div className="rental-info">
              <h3>{listing.beds} Bedroom in {listing.location}</h3>
              <p className="price">${listing.price}/{listing.term}</p>
              <p className="amenities">Parking • Laundry • Pets Allowed</p>
            </div>
            <button className="inquiry-btn">Make Inquiry</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main_Rent;