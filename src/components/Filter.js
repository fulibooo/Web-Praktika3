import React from 'react';
import './Filter.css';

function Filter({ countries, selectedCountry, onCountryChange }) {
  return (
    <div className="filter-card">
      <h3>Фильтр по стране</h3>
      <select 
        value={selectedCountry} 
        onChange={(e) => onCountryChange(e.target.value)}
        className="filter-select"
      >
        {countries.map(country => (
          <option key={country} value={country}>
            {country === 'all' ? 'Все страны' : country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;