import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Main_Buy = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    bedrooms: 'any',
    propertyType: 'any'
  });
  const navigate = useNavigate();

  const properties = [
    { id: 1, price: 350000, beds: 3, type: 'house', image: '/house1.jpg' },
    { id: 2, price: 275000, beds: 2, type: 'apartment', image: '/apt1.jpg' },
    { id: 3, price: 495000, beds: 4, type: 'house', image: '/house2.jpg' }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="page-container">
      <div className="filter-sidebar">
        <h3>Filter Properties</h3>

        <div className="filter-group">
          <label>Property Type</label>
          <select name="propertyType" value={filters.propertyType} onChange={handleFilterChange}>
            <option value="any">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>

      <div className="property-grid">
        {properties.map(property => (
          <div key={property.id} className="property-card" onClick={() => navigate(`/property/${property.id}`)}>
            <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
              <div className="price-badge">${property.price.toLocaleString()}</div>
            </div>
            <div className="property-details">
              <h4>{property.beds} Bed {property.type}</h4>
              <p>Beautiful property in prime location</p>
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main_Buy;