import React from 'react';
import './HomeCard.css';

const HomeCard = ({ image, title, description, rating, stayType }) => {
  return (
    <div className="home-card">
      <img src={image} alt={title} className="home-img" />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="info-row">
          <span className="rating">{rating} ★</span>
          <span className="stay-type">{stayType}</span>
        </div>
        <button className="reserve-btn">Reserve now</button>
      </div>
    </div>
  );
};

export default HomeCard;
