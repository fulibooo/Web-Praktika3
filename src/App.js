import React, { useState } from 'react';
import './App.css';
import TravelCard from './components/TravelCard';

// туры
const initialTravels = [
  { id: 1, country: 'Россия', title: 'Тур по Нижнему Новгороду', description: 'Обзор главных достопримечательностей города-миллионника с богатой историей', likes: 15 },
  { id: 2, country: 'Япония', title: 'Весна в Токио', description: 'Цветение сакуры, неоновые ночи и многолюдная Сибуя', likes: 23 },
  { id: 3, country: 'Уругвай', title: 'Жаркий Монтевидео', description: 'Прочувствуйте латиноамериканский темперамент в развивающемся южноамериканском мегаполисе', likes: 18 }
];

function App() {
  const [travels, setTravels] = useState(initialTravels);

  // Функция для обработки лайков
  const handleLike = (id) => {
    setTravels(travels.map(travel => travel.id === id ? { ...travel, likes: travel.likes + 1 }: travel));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Каталог путешествий</h1>
        <p>Найди вдохновение для своего следующего приключения</p>
      </header>
      
      <div className="container">
        <div className="sidebar">
          <div className="placeholder">
            <p>Текст текст текст текст</p>
          </div>
        </div>

        <div className="travels-list">
          {travels.map(travel => (
            <TravelCard 
              key={travel.id}
              travel={travel}
              onLike={handleLike}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;