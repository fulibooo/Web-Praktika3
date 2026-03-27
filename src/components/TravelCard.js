import React from 'react';
import './TravelCard.css';

function TravelCard({ travel, onLike }) {
  const { id, country, title, description, likes } = travel;

  return (
    <div className="travel-card">
      <div className="card-header">
        <span className="country-badge">{country}</span>
      </div>
      <h3 className="travel-title">{title}</h3>
      <p className="travel-description">{description}</p>
      <div className="card-footer">
        <button 
          className="like-button"
          onClick={() => onLike(id)}
        >
          <span className="like-icon">❤️</span>
          <span className="like-count">{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default TravelCard;