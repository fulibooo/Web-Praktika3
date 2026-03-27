import React, { useState } from 'react';
import './App.css';
import TravelCard from './components/TravelCard';
import Filter from './components/Filter';
import AddForm from './components/AddForm';

// туры
const initialTravels = [
  { id: 1, country: 'Россия', title: 'Тур по Нижнему Новгороду', description: 'Обзор главных достопримечательностей города-миллионника с богатой историей', likes: 63 },
  { id: 2, country: 'Россия', title: 'Сочинское черноморье', description: 'Чёрное море, солнечные ванны, галечные пляжи, Кавказские горы, местная кухня', likes: 80 },
  { id: 3, country: 'Россия', title: 'Золотой Владимир', description: 'Город князя Владимира с многовековой историей и старинной древнерусской архитектурой', likes: 61 },
  { id: 4, country: 'Россия', title: 'Чистый Байкал', description: 'Окунитесь в самое большое и глубокое озеро на Земле с чистейшей водой', likes: 64 },
  { id: 5, country: 'Польша', title: 'Варшава: Европейский Нью-Йорк', description: 'Развитый европейский мегаполис с небоскрёбами', likes: 32 },
  { id: 6, country: 'Польша', title: 'Труймясто: Балтийское побережье', description: 'Тур по Гдыне, Сопоту и Гданьску на побережье Балтийского моря', likes: 37 },
  { id: 7, country: 'Польша', title: 'Архитектурный Краков', description: 'Западнославянская европейская культура в передовом городе Польши', likes: 37 },
  { id: 8, country: 'Уругвай', title: 'Жаркий Монтевидео', description: 'Прочувствуйте латиноамериканский темперамент в развивающемся южноамериканском мегаполисе', likes: 18 },
  { id: 9, country: 'Турция', title: 'Стамбул: От века римлян до великолепного', description: 'Бывшая столица Восточной Римской империи, ныне мусульманский город с богатой историей', likes: 47 },
  { id: 10, country: 'Турция', title: 'Солнечная Анталья', description: 'Знаменитый курортный город, выбор ценителей хорошего отдыха в тёплом климате', likes: 37 },
];

function App() {
  const [travels, setTravels] = useState(initialTravels);
  const [selectedCountry, setSelectedCountry] = useState('all');

  // страны для фильтра (обновляется при добавлении новых)
  const countries = ['all', ...new Set(travels.map(travel => travel.country))];

  // фильтр путешествий
  const filteredTravels = selectedCountry === 'all' ? travels : travels.filter(travel => travel.country === selectedCountry);

  // добавление нового путешествия
  const addTravel = (newTravel) => {
    const travelWithId = {
      ...newTravel,
      id: Date.now(),
      likes: 0
    };
    setTravels([...travels, travelWithId]);
  };

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
          <AddForm onAddTravel={addTravel} />
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