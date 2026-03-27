import React, { useState } from 'react';
import './App.css';
import TravelCard from './components/TravelCard';
import Filter from './components/Filter';

// туры
const initialTravels = [
  { id: 1, country: 'Россия', title: 'Тур по Нижнему Новгороду', description: 'Обзор главных достопримечательностей города-миллионника с богатой историей', likes: 15 },
  { id: 2, country: 'Япония', title: 'Весна в Токио', description: 'Цветение сакуры, неоновые ночи и многолюдная Сибуя', likes: 23 },
  { id: 3, country: 'Уругвай', title: 'Жаркий Монтевидео', description: 'Прочувствуйте латиноамериканский темперамент в развивающемся южноамериканском мегаполисе', likes: 18 }
];

function App() {
  const [travels, setTravels] = useState(initialTravels);
  const [selectedCountry, setSelectedCountry] = useState('all');

  // страны для фильтра
  const countries = ['all', ...new Set(travels.map(travel => travel.country))];

  // фильтр путешествий
  const filteredTravels = selectedCountry === 'all' ? travels : travels.filter(travel => travel.country === selectedCountry);

  // обработка лайков
  const handleLike = (id) => {
    setTravels(travels.map(travel => travel.id === id ? { ...travel, likes: travel.likes + 1 } : travel));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Каталог путешествий</h1>
        <p>Найди вдохновение для своего следующего приключения</p>
      </header>
      
      <div className="container">
        <div className="sidebar">
          <Filter 
            countries={countries}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
          />
          <div className="placeholder">
            <p>*Форма добавления*</p>
          </div>
        </div>

        <div className="travels-list">
          {filteredTravels.length === 0 ? (
            <p className="no-travels">Нет путешествий для выбранной страны</p>
          ) : (
            filteredTravels.map(travel => (
              <TravelCard 
                key={travel.id}
                travel={travel}
                onLike={handleLike}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;